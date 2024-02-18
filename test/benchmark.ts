import {loadFixture} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import {expect} from "chai";
import hre from "hardhat";
import {Context} from "mocha";
import {
  Account,
  Chain,
  GetContractReturnType,
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
import {L2_GAS_PRICE} from "../hardhat.config";
import {biconomy_v2} from "./accounts/biconomy-v2";
import {kernel} from "./accounts/kernel";
import {lightAccount} from "./accounts/lightAccount";
import {modularAccount} from "./accounts/modularAccount";
import {safe} from "./accounts/safe";
import {ENTRY_POINT_ARTIFACTS} from "./artifacts/entryPoint";
import {TOKEN_ARTIFACTS} from "./artifacts/tokens";
import {
  convertWeiToUsd,
  formatEtherTruncated,
  getL1Fee,
  getL1GasUsed,
} from "./utils/fees";
import {UserOperation, getUnsignedUserOp} from "./utils/userOp";
import {collectResult, writeResults} from "./utils/writer";

export interface AccountFixtureReturnType {
  createAccount: (
    salt: bigint,
    ownerAddress: `0x${string}`,
  ) => Promise<`0x${string}`>;
  getAccountAddress: (
    salt: bigint,
    ownerAddress: `0x${string}`,
  ) => Promise<`0x${string}`>;
  getOwnerSignature: (
    owner: WalletClient<Transport, Chain, Account>,
    userOp: UserOperation,
    entryPoint: GetContractReturnType<
      typeof ENTRY_POINT_ARTIFACTS.ENTRY_POINT.abi,
      PublicClient<Transport, Chain>
    >,
  ) => Promise<`0x${string}`>;
  encodeUserOpExecute: (
    to: `0x${string}`,
    value: bigint,
    data: `0x${string}`,
  ) => `0x${string}`;
  encodeRuntimeExecute: (
    to: `0x${string}`,
    value: bigint,
    data: `0x${string}`,
    owner?: WalletClient<Transport, Chain, Account>,
    accountAddress?: `0x${string}`,
  ) => Promise<`0x${string}`>;
  getDummySignature: (userOp: UserOperation) => `0x${string}`;
  getInitCode: (salt: bigint, ownerAddress: `0x${string}`) => `0x${string}`;

  // session key methods
  installSessionKeyPlugin?: (
    account: `0x${string}`,
    owner: WalletClient<Transport, Chain, Account>,
  ) => void;
  addSessionKeyCalldata?: (
    key: `0x${string}`,
    target: `0x${string}`,
    tokens: GetContractReturnType<
      typeof TOKEN_ARTIFACTS.USDC.abi,
      PublicClient<Transport, Chain>
    >[],
    spendLimit: bigint,
    account?: `0x${string}`,
  ) => `0x${string}`;
  getSessionKeySignature?: (
    signer: WalletClient<Transport, Chain, Account>,
    userOp: UserOperation,
    entryPoint: GetContractReturnType<
      typeof ENTRY_POINT_ARTIFACTS.ENTRY_POINT.abi,
      PublicClient<Transport, Chain>
    >,
  ) => Promise<`0x${string}`>;
  useSessionKeyERC20TransferCalldata?: (
    token: GetContractReturnType<
      typeof TOKEN_ARTIFACTS.USDC.abi,
      PublicClient<Transport, Chain>
    >,
    key: `0x${string}`,
    to: `0x${string}`,
    amount: bigint,
  ) => `0x${string}`;
  useSessionKeyNativeTokenTransferCalldata?: (
    key: `0x${string}`,
    to: `0x${string}`,
    amount: bigint,
  ) => `0x${string}`;
}

export interface AccountConfig {
  name: string;
  fixture: () => Promise<AccountFixtureReturnType>;
}

const NATIVE_INITIAL_BALANCE = parseEther("10000");
const NATIVE_TRANSFER_AMOUNT = parseEther("0.5");
const USDC_DECIMALS = 6;
const USDC_INITIAL_BALANCE = parseUnits("100", USDC_DECIMALS);
const USDC_TRANSFER_AMOUNT = parseUnits("50", USDC_DECIMALS);

const ACCOUNTS_TO_BENCHMARK: AccountConfig[] = [
  biconomy_v2,
  kernel,
  lightAccount,
  modularAccount,
  safe,
];

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

    const entryPoint = getContract({
      address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address,
      abi: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.abi,
      publicClient,
      walletClient: owner,
    });

    const usdc = getContract({
      address: TOKEN_ARTIFACTS.USDC.address,
      abi: TOKEN_ARTIFACTS.USDC.abi,
      publicClient,
      walletClient: owner,
    });

    return {
      alice,
      beneficiary,
      entryPoint,
      owner,
      publicClient,
      usdc,
      sessionKey,
    };
  }

  this.afterAll(async function () {
    await writeResults();
  });

  ACCOUNTS_TO_BENCHMARK.forEach(({name, fixture}) => {
    describe(name, function () {
      let hash: `0x${string}` | undefined;

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

          const l2Fee = gasUsed * BigInt(L2_GAS_PRICE);
          const l1GasUsed = getL1GasUsed(serializedTx);
          const l1Fee = getL1Fee(l1GasUsed);

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
        accountAddress: `0x${string}`,
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
        it(`User Operation: Account creation`, async function () {
          const {owner, beneficiary, entryPoint, usdc, publicClient} =
            await loadFixture(baseFixture);
          const {
            encodeUserOpExecute,
            getAccountAddress,
            getDummySignature,
            getInitCode,
            getOwnerSignature,
          } = await loadFixture(fixture);

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);

          const nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          const userOp = getUnsignedUserOp({
            sender: accountAddress,
            nonce,
            initCode: getInitCode(0n, owner.account.address),
            callData: encodeUserOpExecute(zeroAddress, 0n, "0x"),
            getDummySignature,
          });
          userOp.signature = await getOwnerSignature(owner, userOp, entryPoint);

          hash = await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);

          // Check that the account was created
          const code = await publicClient.getBytecode({
            address: accountAddress,
          });
          expect(code).to.not.equal("0x");
        });

        it(`User Operation: Native transfer`, async function () {
          const {owner, alice, beneficiary, entryPoint, usdc, publicClient} =
            await loadFixture(baseFixture);
          const {
            createAccount,
            encodeUserOpExecute,
            getAccountAddress,
            getDummySignature,
            getOwnerSignature,
          } = await loadFixture(fixture);

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await createAccount(0n, owner.account.address);

          const nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          const userOp = getUnsignedUserOp({
            sender: accountAddress,
            nonce,
            callData: encodeUserOpExecute(
              alice.account.address,
              NATIVE_TRANSFER_AMOUNT,
              "0x",
            ),
            getDummySignature,
          });
          userOp.signature = await getOwnerSignature(owner, userOp, entryPoint);

          hash = await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);

          // Check that the transfer was successful
          const aliceBalance = await publicClient.getBalance({
            address: alice.account.address,
          });
          expect(aliceBalance).to.equal(
            NATIVE_INITIAL_BALANCE + NATIVE_TRANSFER_AMOUNT,
          );
        });

        it(`User Operation: ERC-20 transfer`, async function () {
          const {owner, alice, beneficiary, entryPoint, usdc} =
            await loadFixture(baseFixture);
          const {
            createAccount,
            encodeUserOpExecute,
            getAccountAddress,
            getDummySignature,
            getOwnerSignature,
          } = await loadFixture(fixture);

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await createAccount(0n, owner.account.address);

          const nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          const userOp = getUnsignedUserOp({
            sender: accountAddress,
            nonce,
            callData: encodeUserOpExecute(
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
            getDummySignature,
          });
          userOp.signature = await getOwnerSignature(owner, userOp, entryPoint);

          hash = await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);

          // Check that the ERC-20 transfer was successful
          const aliceBalance = await usdc.read.balanceOf([
            alice.account.address,
          ]);
          expect(aliceBalance).to.equal(USDC_TRANSFER_AMOUNT);
        });

        it("User Operation: Session key creation", async function () {
          const {owner, alice, beneficiary, entryPoint, usdc, sessionKey} =
            await loadFixture(baseFixture);
          const {
            getAccountAddress,
            getDummySignature,
            getOwnerSignature,
            createAccount,
            installSessionKeyPlugin,
            addSessionKeyCalldata,
          } = await loadFixture(fixture);

          if (!addSessionKeyCalldata) {
            return this.skip();
          }

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await createAccount(0n, owner.account.address);

          installSessionKeyPlugin &&
            (await installSessionKeyPlugin(accountAddress, owner));

          const nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          const userOp = getUnsignedUserOp({
            sender: accountAddress,
            nonce,
            callData: addSessionKeyCalldata(
              sessionKey.account.address,
              alice.account.address,
              [usdc],
              USDC_TRANSFER_AMOUNT,
              accountAddress,
            ),
            getDummySignature,
          });
          userOp.signature = await getOwnerSignature(owner, userOp, entryPoint);

          hash = await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);
        });

        it("User Operation: Session key native transfer", async function () {
          const {
            alice,
            beneficiary,
            entryPoint,
            owner,
            publicClient,
            sessionKey,
            usdc,
          } = await loadFixture(baseFixture);
          const {
            getAccountAddress,
            getDummySignature,
            getOwnerSignature,
            createAccount,
            installSessionKeyPlugin,
            addSessionKeyCalldata,
            useSessionKeyNativeTokenTransferCalldata,
            getSessionKeySignature,
          } = await loadFixture(fixture);

          if (
            !addSessionKeyCalldata ||
            !useSessionKeyNativeTokenTransferCalldata ||
            !getSessionKeySignature
          ) {
            return this.skip();
          }

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await createAccount(0n, owner.account.address);

          installSessionKeyPlugin &&
            (await installSessionKeyPlugin(accountAddress, owner));

          // Add session key
          let nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          let userOp = getUnsignedUserOp({
            sender: accountAddress,
            nonce,
            callData: addSessionKeyCalldata(
              sessionKey.account.address,
              alice.account.address,
              [],
              NATIVE_TRANSFER_AMOUNT,
              accountAddress,
            ),
            getDummySignature,
          });
          userOp.signature = await getOwnerSignature(owner, userOp, entryPoint);

          await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);

          nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          userOp = getUnsignedUserOp({
            sender: accountAddress,
            nonce,
            callData: useSessionKeyNativeTokenTransferCalldata(
              sessionKey.account.address,
              alice.account.address,
              NATIVE_TRANSFER_AMOUNT,
            ), // key 3 = sessionKey.account.address
            getDummySignature,
          });
          userOp.signature = await getSessionKeySignature(
            sessionKey,
            userOp,
            entryPoint,
          );

          hash = await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);

          // Check that the transfer was successful
          const aliceBalance = await publicClient.getBalance({
            address: alice.account.address,
          });
          expect(aliceBalance).to.equal(
            NATIVE_INITIAL_BALANCE + NATIVE_TRANSFER_AMOUNT,
          );
        });

        it("User Operation: Session key ERC-20 transfer", async function () {
          const {owner, alice, beneficiary, entryPoint, usdc, sessionKey} =
            await loadFixture(baseFixture);
          const {
            getAccountAddress,
            getDummySignature,
            getOwnerSignature,
            createAccount,
            installSessionKeyPlugin,
            addSessionKeyCalldata,
            useSessionKeyERC20TransferCalldata,
            getSessionKeySignature,
          } = await loadFixture(fixture);

          if (
            !addSessionKeyCalldata ||
            !useSessionKeyERC20TransferCalldata ||
            !getSessionKeySignature
          ) {
            return this.skip();
          }

          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await fundAccount(accountAddress, usdc);
          await createAccount(0n, owner.account.address);

          installSessionKeyPlugin &&
            (await installSessionKeyPlugin(accountAddress, owner));

          // Add session key
          let nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          let userOp = getUnsignedUserOp({
            sender: accountAddress,
            nonce,
            callData: addSessionKeyCalldata(
              sessionKey.account.address,
              alice.account.address,
              [usdc],
              USDC_TRANSFER_AMOUNT,
              accountAddress,
            ),
            getDummySignature,
          });
          userOp.signature = await getOwnerSignature(owner, userOp, entryPoint);

          await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);

          nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          userOp = getUnsignedUserOp({
            sender: accountAddress,
            nonce,
            callData: useSessionKeyERC20TransferCalldata(
              usdc,
              sessionKey.account.address,
              alice.account.address,
              USDC_TRANSFER_AMOUNT,
            ), // key 3 = sessionKey.account.address
            getDummySignature,
          });
          userOp.signature = await getSessionKeySignature(
            sessionKey,
            userOp,
            entryPoint,
          );

          hash = await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);

          // Check that the ERC-20 transfer was successful
          const aliceBalance = await usdc.read.balanceOf([
            alice.account.address,
          ]);
          expect(aliceBalance).to.equal(USDC_TRANSFER_AMOUNT);
        });
      });

      describe("Runtime", function () {
        it(`Runtime: Account creation`, async function () {
          const {owner, publicClient} = await loadFixture(baseFixture);
          const {createAccount, getAccountAddress} = await loadFixture(fixture);
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

        it(`Runtime: Native transfer`, async function () {
          if (name === "Biconomy v2") {
            // Biconomy V2 doesn't support runtime native transfers.
            return this.skip();
          }

          const {owner, alice, usdc, publicClient} =
            await loadFixture(baseFixture);
          const {getAccountAddress, createAccount, encodeRuntimeExecute} =
            await loadFixture(fixture);

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

        it(`Runtime: ERC-20 transfer`, async function () {
          if (name === "Biconomy v2") {
            // Biconomy V2 doesn't support runtime ERC-20 transfers.
            return this.skip();
          }

          const {owner, alice, usdc} = await loadFixture(baseFixture);
          const {getAccountAddress, createAccount, encodeRuntimeExecute} =
            await loadFixture(fixture);

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
