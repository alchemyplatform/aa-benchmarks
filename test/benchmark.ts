import {loadFixture} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import {expect} from "chai";
import hre from "hardhat";
import {Context} from "mocha";
import {
  Account,
  Chain,
  GetContractReturnType,
  Hex,
  PublicClient,
  Transport,
  WalletClient,
  encodeFunctionData,
  getAbiItem,
  getContract,
  maxUint256,
  maxUint48,
  parseEther,
  parseUnits,
  serializeTransaction,
  toHex,
  walletActions,
  zeroAddress,
} from "viem";
import {ACCOUNTS_TO_BENCHMARK} from "./accounts";
import {ENTRY_POINT_ARTIFACTS} from "./artifacts/entryPoint";
import {TOKEN_ARTIFACTS} from "./artifacts/tokens";
import {UNISWAP_ARTIFACTS} from "./artifacts/uniswap";
import {getL1GasUsed} from "./utils/fees";
import {wrappedHandleOps} from "./utils/userOp";
import {GasMetrics, collectResult, writeResults} from "./utils/writer";

const NATIVE_INITIAL_BALANCE = parseEther("10000");
const NATIVE_TRANSFER_AMOUNT = parseEther("0.5");
const USDC_DECIMALS = 6;
const USDT_DECIMALS = 6;
const USDC_INITIAL_BALANCE = parseUnits("100", USDC_DECIMALS);
const USDC_TRANSFER_AMOUNT = parseUnits("50", USDC_DECIMALS);
const USDT_INITIAL_BALANCE = parseUnits("100", USDT_DECIMALS);

describe("Benchmark", function () {
  async function baseFixture() {
    const [owner, alice, beneficiary, sessionKey] =
      await hre.viem.getWalletClients();
    const publicClient = await hre.viem.getPublicClient();

    for (const {address, bytecode} of Object.values(ENTRY_POINT_ARTIFACTS)) {
      await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
    }

    for (const {address, bytecode} of Object.values(TOKEN_ARTIFACTS)) {
      await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
    }

    const usdc = getContract({
      address: TOKEN_ARTIFACTS.USDC.address,
      abi: TOKEN_ARTIFACTS.USDC.abi,
      publicClient,
      walletClient: owner,
    });

    const usdt = getContract({
      address: TOKEN_ARTIFACTS.USDT.address,
      abi: TOKEN_ARTIFACTS.USDT.abi,
      publicClient,
      walletClient: owner,
    });

    return {
      alice,
      beneficiary,
      owner,
      publicClient,
      usdc,
      usdt,
      sessionKey,
    };
  }

  async function uniswapFixture() {
    const [owner] = await hre.viem.getWalletClients();
    const publicClient = await hre.viem.getPublicClient();
    const testClient = (await hre.viem.getTestClient()).extend(walletActions);

    for (const {address, bytecode} of Object.values(TOKEN_ARTIFACTS)) {
      await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
    }

    for (const {address, bytecode} of Object.values(UNISWAP_ARTIFACTS)) {
      await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
    }

    const usdc = getContract({
      address: TOKEN_ARTIFACTS.USDC.address,
      abi: TOKEN_ARTIFACTS.USDC.abi,
      publicClient,
      walletClient: owner,
    });

    const usdt = getContract({
      address: TOKEN_ARTIFACTS.USDT.address,
      abi: TOKEN_ARTIFACTS.USDT.abi,
      publicClient,
      walletClient: owner,
    });

    const uniswapSwapRouter = getContract({
      address: UNISWAP_ARTIFACTS.SwapRouter.address,
      abi: UNISWAP_ARTIFACTS.SwapRouter.abi,
      publicClient,
      walletClient: owner,
    });

    const uniswapNonfungiblePositionManager = getContract({
      address: UNISWAP_ARTIFACTS.NonfungiblePositionManager.address,
      abi: UNISWAP_ARTIFACTS.NonfungiblePositionManager.abi,
      publicClient,
      walletClient: owner,
    });

    // Initialize the Uniswap V3 factory.
    testClient.impersonateAccount({address: zeroAddress});
    await hre.network.provider.send("hardhat_setBalance", [
      zeroAddress,
      toHex(NATIVE_INITIAL_BALANCE),
    ]);
    await testClient.writeContract({
      address: UNISWAP_ARTIFACTS.UniswapV3Factory.address,
      abi: UNISWAP_ARTIFACTS.UniswapV3Factory.abi,
      functionName: "enableFeeAmount",
      args: [100, 1],
      account: zeroAddress,
    });
    testClient.stopImpersonatingAccount({address: zeroAddress});

    await usdc.write.mint([owner.account.address, 10986129216312n]);
    await usdt.write.mint([owner.account.address, 3661676892209n]);
    await usdc.write.approve([
      uniswapNonfungiblePositionManager.address,
      maxUint256,
    ]);
    await usdt.write.approve([
      uniswapNonfungiblePositionManager.address,
      maxUint256,
    ]);

    // Mimics https://etherscan.io/tx/0xf093a630478562d03e3b2476a5b0551609722747d442a462579fa02e1332a941
    await uniswapNonfungiblePositionManager.write.createAndInitializePoolIfNecessary(
      [usdc.address, usdt.address, 100, 79220240490215316061937756561n],
    );
    await uniswapNonfungiblePositionManager.write.mint([
      {
        token0: usdc.address,
        token1: usdt.address,
        fee: 100,
        tickLower: -4,
        tickUpper: 4,
        amount0Desired: 10986129216312n,
        amount1Desired: 3661676892209n,
        amount0Min: 0n,
        amount1Min: 0n,
        recipient: owner.account.address,
        deadline: maxUint48,
      },
    ]);

    return {uniswapSwapRouter};
  }

  this.afterAll(async function () {
    await writeResults();
  });

  ACCOUNTS_TO_BENCHMARK.forEach(({name, accountFixture}) => {
    describe(name, function () {
      let hash: Hex | undefined;

      beforeEach(function () {
        hash = undefined;
      });

      afterEach(async function (this: Context) {
        const gasMetrics: GasMetrics = {
          gasUsed: null,
          l1GasUsed: null,
        };

        if (hash) {
          const publicClient = await hre.viem.getPublicClient();
          const {gasUsed} = await publicClient.getTransactionReceipt({
            hash,
          });
          const tx = await publicClient.getTransaction({
            hash,
          });
          const serializedTx = serializeTransaction(
            {
              from: tx.from,
              to: tx.to,
              value: tx.value,
              data: tx.input,
              nonce: tx.nonce,
              gas: tx.gas,
              type: tx.type,
              maxFeePerGas: tx.maxFeePerGas,
              maxPriorityFeePerGas: tx.maxPriorityFeePerGas,
              accessList: tx.accessList,
              chainId: tx.chainId,
            },
            {
              r: tx.r,
              s: tx.s,
              v: tx.v,
            },
          );
          gasMetrics.gasUsed = gasUsed;
          gasMetrics.l1GasUsed = getL1GasUsed(serializedTx);
        }

        collectResult(this.currentTest!.title, name, gasMetrics);
      });

      async function fundAccount(
        accountAddress: Hex,
        usdc: GetContractReturnType<
          typeof TOKEN_ARTIFACTS.USDC.abi,
          PublicClient<Transport, Chain>,
          WalletClient<Transport, Chain, Account>
        >,
        usdt?: GetContractReturnType<
          typeof TOKEN_ARTIFACTS.USDT.abi,
          PublicClient<Transport, Chain>,
          WalletClient<Transport, Chain, Account>
        >,
      ) {
        await hre.network.provider.send("hardhat_setBalance", [
          accountAddress,
          toHex(NATIVE_INITIAL_BALANCE),
        ]);
        await usdc.write.mint([accountAddress, USDC_INITIAL_BALANCE]);
        await usdt?.write.mint([accountAddress, USDT_INITIAL_BALANCE]);
      }

      describe("User Operation", function () {
        it("User Operation: Account creation", async function () {
          const {owner, beneficiary, usdc, publicClient} =
            await loadFixture(baseFixture);
          const accountData = await loadFixture(accountFixture);

          const accountAddress = await accountData.getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);

          hash = await wrappedHandleOps({
            accountData,
            signer: owner,
            beneficiary,
            sender: accountAddress,
            initCode: accountData.getInitCode(0n, owner.account.address),
            callData: accountData.encodeUserOpExecute(zeroAddress, 0n, "0x"),
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getOwnerSignature,
          });

          // Check that the account was created
          const code = await publicClient.getBytecode({
            address: accountAddress,
          });
          expect(code).to.not.equal("0x");
        });

        it("User Operation: Native transfer", async function () {
          const {owner, alice, beneficiary, usdc, publicClient} =
            await loadFixture(baseFixture);
          const accountData = await loadFixture(accountFixture);

          const accountAddress = await accountData.getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await accountData.createAccount(0n, owner.account.address);

          hash = await wrappedHandleOps({
            accountData,
            signer: owner,
            beneficiary,
            sender: accountAddress,
            callData: accountData.encodeUserOpExecute(
              alice.account.address,
              NATIVE_TRANSFER_AMOUNT,
              "0x",
            ),
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getOwnerSignature,
          });

          // Check that the transfer was successful
          const aliceBalance = await publicClient.getBalance({
            address: alice.account.address,
          });
          expect(aliceBalance).to.equal(
            NATIVE_INITIAL_BALANCE + NATIVE_TRANSFER_AMOUNT,
          );
        });

        it("User Operation: ERC-20 transfer", async function () {
          const {owner, alice, beneficiary, usdc} =
            await loadFixture(baseFixture);
          const accountData = await loadFixture(accountFixture);

          const accountAddress = await accountData.getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await accountData.createAccount(0n, owner.account.address);

          hash = await wrappedHandleOps({
            accountData,
            signer: owner,
            beneficiary,
            sender: accountAddress,
            callData: accountData.encodeUserOpExecute(
              usdc.address,
              0n,
              encodeFunctionData({
                abi: [
                  getAbiItem({
                    abi: usdc.abi,
                    name: "transfer",
                  }),
                ],
                args: [alice.account.address, USDC_TRANSFER_AMOUNT],
              }),
            ),
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getOwnerSignature,
          });

          // Check that the ERC-20 transfer was successful
          const aliceBalance = await usdc.read.balanceOf([
            alice.account.address,
          ]);
          expect(aliceBalance).to.equal(USDC_TRANSFER_AMOUNT);
        });

        it("User Operation: Uniswap V3 ERC-20 swap", async function () {
          const {owner, beneficiary, usdc, usdt} =
            await loadFixture(baseFixture);
          const {uniswapSwapRouter} = await loadFixture(uniswapFixture);
          const accountData = await loadFixture(accountFixture);

          const accountAddress = await accountData.getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc, usdt);
          await accountData.createAccount(0n, owner.account.address);

          await wrappedHandleOps({
            accountData,
            signer: owner,
            beneficiary,
            sender: accountAddress,
            callData: accountData.encodeUserOpExecute(
              usdc.address,
              0n,
              encodeFunctionData({
                abi: [
                  getAbiItem({
                    abi: usdc.abi,
                    name: "approve",
                  }),
                ],
                args: [uniswapSwapRouter.address, maxUint256],
              }),
            ),
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getOwnerSignature,
          });

          hash = await wrappedHandleOps({
            accountData,
            signer: owner,
            beneficiary,
            sender: accountAddress,
            callData: accountData.encodeUserOpExecute(
              uniswapSwapRouter.address,
              0n,
              encodeFunctionData({
                abi: [
                  getAbiItem({
                    abi: uniswapSwapRouter.abi,
                    name: "exactInputSingle",
                  }),
                ],
                args: [
                  {
                    tokenIn: usdc.address,
                    tokenOut: usdt.address,
                    fee: 100,
                    recipient: accountAddress,
                    deadline: maxUint48,
                    amountIn: USDC_TRANSFER_AMOUNT,
                    amountOutMinimum: 1n,
                    sqrtPriceLimitX96: 0n,
                  },
                ],
              }),
            ),
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getOwnerSignature,
          });

          // Check that the swap was successful
          const usdcBalance = await usdc.read.balanceOf([accountAddress]);
          expect(`${usdcBalance}`).to.equal(
            `${USDC_INITIAL_BALANCE - USDC_TRANSFER_AMOUNT}`,
          );
        });

        it("User Operation: Session key creation", async function () {
          const {owner, alice, beneficiary, usdc, sessionKey} =
            await loadFixture(baseFixture);
          const accountData = await loadFixture(accountFixture);

          if (!accountData.addSessionKeyCalldata) {
            return this.skip();
          }

          const accountAddress = await accountData.getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await accountData.createAccount(0n, owner.account.address);
          await accountData.installSessionKeyPlugin?.(accountAddress, owner);

          hash = await wrappedHandleOps({
            accountData,
            signer: owner,
            beneficiary,
            sender: accountAddress,
            callData: accountData.addSessionKeyCalldata(
              sessionKey.account.address,
              alice.account.address,
              [usdc],
              USDC_TRANSFER_AMOUNT,
              accountAddress,
            ),
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getOwnerSignature,
          });
        });

        it("User Operation: Session key native transfer", async function () {
          const {alice, beneficiary, owner, publicClient, sessionKey, usdc} =
            await loadFixture(baseFixture);
          const accountData = await loadFixture(accountFixture);

          if (
            !accountData.addSessionKeyCalldata ||
            !accountData.useSessionKeyNativeTokenTransferCalldata ||
            !accountData.getSessionKeySignature
          ) {
            return this.skip();
          }

          const accountAddress = await accountData.getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await accountData.createAccount(0n, owner.account.address);
          await accountData.installSessionKeyPlugin?.(accountAddress, owner);

          // Add session key
          await wrappedHandleOps({
            accountData,
            signer: owner,
            beneficiary,
            sender: accountAddress,
            callData: accountData.addSessionKeyCalldata(
              sessionKey.account.address,
              alice.account.address,
              [usdc],
              NATIVE_TRANSFER_AMOUNT,
              accountAddress,
            ),
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getOwnerSignature,
          });

          hash = await wrappedHandleOps({
            accountData,
            signer: sessionKey,
            beneficiary,
            sender: accountAddress,
            callData: accountData.useSessionKeyNativeTokenTransferCalldata(
              sessionKey.account.address,
              alice.account.address,
              NATIVE_TRANSFER_AMOUNT,
            ), // key 3 = sessionKey.account.address
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getSessionKeySignature,
          });

          // Check that the transfer was successful
          const aliceBalance = await publicClient.getBalance({
            address: alice.account.address,
          });
          expect(aliceBalance).to.equal(
            NATIVE_INITIAL_BALANCE + NATIVE_TRANSFER_AMOUNT,
          );
        });

        it("User Operation: Session key ERC-20 transfer", async function () {
          const {owner, alice, beneficiary, usdc, sessionKey} =
            await loadFixture(baseFixture);
          const accountData = await loadFixture(accountFixture);

          if (
            !accountData.addSessionKeyCalldata ||
            !accountData.useSessionKeyERC20TransferCalldata ||
            !accountData.getSessionKeySignature
          ) {
            return this.skip();
          }

          const accountAddress = await accountData.getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await accountData.createAccount(0n, owner.account.address);
          await accountData.installSessionKeyPlugin?.(accountAddress, owner);

          // Add session key
          await wrappedHandleOps({
            accountData,
            signer: owner,
            beneficiary,
            sender: accountAddress,
            callData: accountData.addSessionKeyCalldata(
              sessionKey.account.address,
              alice.account.address,
              [usdc],
              USDC_TRANSFER_AMOUNT,
              accountAddress,
            ),
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getOwnerSignature,
          });

          hash = await wrappedHandleOps({
            accountData,
            signer: sessionKey,
            beneficiary,
            sender: accountAddress,
            callData: accountData.useSessionKeyERC20TransferCalldata(
              usdc,
              sessionKey.account.address,
              alice.account.address,
              USDC_TRANSFER_AMOUNT,
            ), // key 3 = sessionKey.account.address
            getDummySignature: accountData.getDummySignature,
            getSignature: accountData.getSessionKeySignature,
          });

          // Check that the ERC-20 transfer was successful
          const aliceBalance = await usdc.read.balanceOf([
            alice.account.address,
          ]);
          expect(aliceBalance).to.equal(USDC_TRANSFER_AMOUNT);
        });
      });

      describe("Runtime", function () {
        it("Runtime: Account creation", async function () {
          const {owner, publicClient} = await loadFixture(baseFixture);
          const {createAccount, getAccountAddress} =
            await loadFixture(accountFixture);
          hash = await createAccount(0n, owner.account.address);

          // Check that the account was created
          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          const code = await publicClient.getBytecode({
            address: accountAddress,
          });
          expect(code).to.not.equal("0x");
        });

        it("Runtime: Native transfer", async function () {
          const {owner, alice, usdc, publicClient} =
            await loadFixture(baseFixture);
          const {getAccountAddress, createAccount, encodeRuntimeExecute} =
            await loadFixture(accountFixture);

          if (!encodeRuntimeExecute) {
            return this.skip();
          }

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await createAccount(0n, owner.account.address);

          const data = await encodeRuntimeExecute(
            alice.account.address,
            NATIVE_TRANSFER_AMOUNT,
            "0x",
            owner,
            accountAddress,
          );

          hash = await owner.sendTransaction({
            to: accountAddress,
            data,
          });

          // Check that the transfer was successful
          const aliceBalance = await publicClient.getBalance({
            address: alice.account.address,
          });
          expect(aliceBalance).to.equal(
            NATIVE_INITIAL_BALANCE + NATIVE_TRANSFER_AMOUNT,
          );
        });

        it("Runtime: ERC-20 transfer", async function () {
          const {owner, alice, usdc} = await loadFixture(baseFixture);
          const {getAccountAddress, createAccount, encodeRuntimeExecute} =
            await loadFixture(accountFixture);

          if (!encodeRuntimeExecute) {
            return this.skip();
          }

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await createAccount(0n, owner.account.address);

          const data = await encodeRuntimeExecute(
            usdc.address,
            0n,
            encodeFunctionData({
              abi: [
                getAbiItem({
                  abi: usdc.abi,
                  name: "transfer",
                }),
              ],
              args: [alice.account.address, USDC_TRANSFER_AMOUNT],
            }),
            owner,
            accountAddress,
          );

          hash = await owner.sendTransaction({
            to: accountAddress,
            data,
          });

          // Check that the ERC-20 transfer was successful
          const aliceBalance = await usdc.read.balanceOf([
            alice.account.address,
          ]);
          expect(aliceBalance).to.equal(USDC_TRANSFER_AMOUNT);
        });

        it("Runtime: Uniswap V3 ERC-20 swap", async function () {
          const {owner, usdc, usdt} = await loadFixture(baseFixture);
          const {uniswapSwapRouter} = await loadFixture(uniswapFixture);
          const {getAccountAddress, createAccount, encodeRuntimeExecute} =
            await loadFixture(accountFixture);

          if (!encodeRuntimeExecute) {
            return this.skip();
          }

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc, usdt);
          await createAccount(0n, owner.account.address);

          let data = await encodeRuntimeExecute(
            usdc.address,
            0n,
            encodeFunctionData({
              abi: [
                getAbiItem({
                  abi: usdc.abi,
                  name: "approve",
                }),
              ],
              args: [uniswapSwapRouter.address, maxUint256],
            }),
            owner,
            accountAddress,
          );

          await owner.sendTransaction({
            to: accountAddress,
            data,
          });

          data = await encodeRuntimeExecute(
            uniswapSwapRouter.address,
            0n,
            encodeFunctionData({
              abi: [
                getAbiItem({
                  abi: uniswapSwapRouter.abi,
                  name: "exactInputSingle",
                }),
              ],
              args: [
                {
                  tokenIn: usdc.address,
                  tokenOut: usdt.address,
                  fee: 100,
                  recipient: accountAddress,
                  deadline: maxUint48,
                  amountIn: USDC_TRANSFER_AMOUNT,
                  amountOutMinimum: 1n,
                  sqrtPriceLimitX96: 0n,
                },
              ],
            }),
            owner,
            accountAddress,
          );

          hash = await owner.sendTransaction({
            to: accountAddress,
            data,
          });

          // Check that the swap was successful
          const usdcBalance = await usdc.read.balanceOf([accountAddress]);
          expect(`${usdcBalance}`).to.equal(
            `${USDC_INITIAL_BALANCE - USDC_TRANSFER_AMOUNT}`,
          );
        });
      });
    });
  });
});
