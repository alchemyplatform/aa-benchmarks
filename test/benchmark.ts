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
  parseEther,
  parseUnits,
  serializeTransaction,
  toHex,
  zeroAddress,
} from "viem";
import {L1_BASE_FEE, L1_BLOB_BASE_FEE, L2_BASE_FEE} from "../settings";
import {ACCOUNTS_TO_BENCHMARK} from "./accounts";
import {ENTRY_POINT_ARTIFACTS} from "./artifacts/entryPoint";
import {TOKEN_ARTIFACTS} from "./artifacts/tokens";
import {
  convertWeiToUsd,
  formatEtherTruncated,
  getL1Fee,
  getL1GasUsed,
} from "./utils/fees";
import {wrappedHandleOps} from "./utils/userOp";
import {collectResult, writeResults} from "./utils/writer";

const NATIVE_INITIAL_BALANCE = parseEther("10000");
const NATIVE_TRANSFER_AMOUNT = parseEther("0.5");
const USDC_DECIMALS = 6;
const USDC_INITIAL_BALANCE = parseUnits("100", USDC_DECIMALS);
const USDC_TRANSFER_AMOUNT = parseUnits("50", USDC_DECIMALS);

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

    return {
      alice,
      beneficiary,
      owner,
      publicClient,
      usdc,
      sessionKey,
    };
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
        const tableEntries = {
          "L2 gas used": "-",
          "L2 fee (ETH)": "-",
          "L1 gas used": "-",
          "L1 fee (ETH)": "-",
          "Total fee (ETH)": "-",
          "Total fee (USD)": "Unsupported",
        };

        if (hash) {
          const publicClient = await hre.viem.getPublicClient();
          const {gasUsed} = await publicClient.getTransactionReceipt({
            hash,
          });
          // Legacy transaction type
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
              gasPrice: tx.gasPrice,
              type: tx.type,
            },
            {
              r: tx.r,
              s: tx.s,
              v: tx.v,
            },
          );

          const l2Fee = gasUsed * L2_BASE_FEE;
          const l1GasUsed = getL1GasUsed(serializedTx);
          const l1Fee = getL1Fee(l1GasUsed, L1_BASE_FEE, L1_BLOB_BASE_FEE);

          tableEntries["L2 gas used"] = `${gasUsed}`;
          tableEntries["L2 fee (ETH)"] = `${formatEtherTruncated(l2Fee)}`;
          tableEntries["L1 gas used"] = `${l1GasUsed}`;
          tableEntries["L1 fee (ETH)"] = `${formatEtherTruncated(l1Fee)}`;
          tableEntries["Total fee (ETH)"] =
            `${formatEtherTruncated(l2Fee + l1Fee)}`;
          tableEntries["Total fee (USD)"] =
            `$${convertWeiToUsd(l2Fee + l1Fee)}`;
        }

        collectResult(this.currentTest!.title, name, tableEntries);
      });

      async function fundAccount(
        accountAddress: Hex,
        usdc: GetContractReturnType<
          typeof TOKEN_ARTIFACTS.USDC.abi,
          PublicClient<Transport, Chain>,
          WalletClient<Transport, Chain, Account>
        >,
      ) {
        await hre.network.provider.send("hardhat_setBalance", [
          accountAddress,
          toHex(NATIVE_INITIAL_BALANCE),
        ]);
        await usdc.write.mint([accountAddress, USDC_INITIAL_BALANCE]);
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

          await wrappedHandleOps({
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

          await wrappedHandleOps({
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
      });
    });
  });
});
