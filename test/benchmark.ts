import {calcPreVerificationGas} from "@account-abstraction/sdk";
import {loadFixture} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import hre from "hardhat";
import {Context} from "mocha";
import {
  Account,
  Chain,
  GetContractReturnType,
  PublicClient,
  Transport,
  WalletClient,
  getContract,
  parseEther,
  toHex,
  zeroAddress,
  getAddress,
} from "viem";
import {L2_GAS_PRICE} from "../hardhat.config";
import {kernel} from "./accounts/kernel";
import {modularAccount} from "./accounts/modularAccount";
import {biconomy_v2} from "./accounts/biconomy-v2";
import {ENTRY_POINT_ARTIFACTS} from "./artifacts/entryPoint";
import {
  convertWeiToUsd,
  formatEtherTruncated,
  getAccountBalance,
  getL1FeeForCallData,
  getL1FeeForUserOp,
  getL1GasUsedForCallData,
  getL1GasUsedForUserOp,
} from "./utils/fees";
import {UserOperation} from "./utils/userOp";
import {collectResult, writeResults} from "./utils/writer";
import {TOKEN_ARTIFACTS} from "./artifacts/tokens";
import {ZERO_ADDRESS} from "./utils/consts";
import {MODULAR_ACCOUNT_ARTIFACTS} from "./artifacts/modularAccount";

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
  encodeExecute: (
    to: `0x${string}`,
    value: bigint,
    data: `0x${string}`,
  ) => `0x${string}`;
  getDummySignature: (userOp: UserOperation) => `0x${string}`;
  getInitCode: (salt: bigint, ownerAddress: `0x${string}`) => `0x${string}`;

  // session key methods
  installSessionKeyPlugin?: (
    account: `0x${string}`,
    owner: WalletClient<Transport, Chain, Account>,
  ) => void;
  addSessionKeyCalldata?: (
    keys: `0x${string}`[],
    target: `0x${string}`,
    tokens: GetContractReturnType<
      typeof TOKEN_ARTIFACTS.USDC.abi,
      PublicClient<Transport, Chain>
    >[],
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

const ACCOUNTS_TO_BENCHMARK: AccountConfig[] = [
  modularAccount,
  kernel,
  biconomy_v2,
];

const nativeTokenTransferTarget = "0x0000000000000000000000000000000000000001";

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

    const usdt = getContract({
      address: TOKEN_ARTIFACTS.USDT.address,
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
      usdt,
      sessionKey,
    };
  }

  this.afterAll(async function () {
    await writeResults();
  });

  ACCOUNTS_TO_BENCHMARK.forEach(({name, fixture}) => {
    describe(name, function () {
      describe("Runtime", function () {
        let hash: `0x${string}` | undefined;

        beforeEach(function () {
          hash = undefined;
        });

        afterEach(async function (this: Context) {
          const tableEntries = {
            "L2 gas used": "",
            "L2 fee (ETH)": "",
            "L1 gas used": "",
            "L1 fee (ETH)": "",
            "Total fee (ETH)": "",
            "Total fee (USD)": "Unsupported",
          };

          if (hash) {
            const publicClient = await hre.viem.getPublicClient();
            const {gasUsed} = await publicClient.getTransactionReceipt({
              hash,
            });
            const {input} = await publicClient.getTransaction({
              hash,
            });
            const l2Fee = gasUsed * BigInt(L2_GAS_PRICE);
            const l1Fee = getL1FeeForCallData(input);

            tableEntries["L2 gas used"] = `${gasUsed}`;
            tableEntries["L2 fee (ETH)"] = `${formatEtherTruncated(l2Fee)}`;
            tableEntries["L1 gas used"] = `${getL1GasUsedForCallData(input)}`;
            tableEntries["L1 fee (ETH)"] = `${formatEtherTruncated(l1Fee)}`;
            tableEntries["Total fee (ETH)"] =
              `${formatEtherTruncated(l2Fee + l1Fee)}`;
            tableEntries["Total fee (USD)"] =
              `$${convertWeiToUsd(l2Fee + l1Fee)}`;
          }

          collectResult(this.currentTest!.title, name, tableEntries);
        });

        it(`Runtime: Account creation`, async function () {
          const {owner} = await loadFixture(baseFixture);
          const {createAccount} = await loadFixture(fixture);
          hash = await createAccount(0n, owner.account.address);
        });

        it(`Runtime: Native transfer`, async function () {
          if (name === "Biconomy v2") {
            // Biconomy V2 doesn't support runtime native transfers.
            return;
          }

          const {owner, alice} = await loadFixture(baseFixture);
          const {getAccountAddress, createAccount, encodeExecute} =
            await loadFixture(fixture);
          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await hre.network.provider.send("hardhat_setBalance", [
            accountAddress,
            toHex(parseEther("10000")),
          ]);
          await createAccount(0n, owner.account.address);

          hash = await owner.sendTransaction({
            to: accountAddress,
            data: encodeExecute(alice.account.address, parseEther("0.5"), "0x"),
          });
        });
      });

      describe("User Operation", function () {
        let balanceBefore: bigint | undefined;
        let balanceAfter: bigint | undefined;
        let userOp: UserOperation | undefined;

        beforeEach(async function () {
          userOp = undefined;
          balanceBefore = undefined;
          balanceAfter = undefined;
        });

        afterEach(async function (this: Context) {
          if (!userOp || balanceAfter == null || balanceBefore == null) {
            return;
          }

          // This works because the gas price is set to 1.
          const gasUsed = balanceBefore - balanceAfter;
          const l2Fee = gasUsed * BigInt(L2_GAS_PRICE);
          const l1Fee = getL1FeeForUserOp(userOp);

          collectResult(this.currentTest!.title, name, {
            "L2 gas used": `${gasUsed}`,
            "L2 fee (ETH)": `${formatEtherTruncated(l2Fee)}`,
            "L1 gas used": `${getL1GasUsedForUserOp(userOp)}`,
            "L1 fee (ETH)": `${formatEtherTruncated(l1Fee)}`,
            "Total fee (ETH)": `${formatEtherTruncated(l2Fee + l1Fee)}`,
            "Total fee (USD)": `$${convertWeiToUsd(l2Fee + l1Fee)}`,
          });
        });

        it(`User Operation: Account creation`, async function () {
          const {owner, beneficiary, entryPoint} =
            await loadFixture(baseFixture);
          const {
            encodeExecute,
            getAccountAddress,
            getDummySignature,
            getInitCode,
            getOwnerSignature,
          } = await loadFixture(fixture);
          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await hre.network.provider.send("hardhat_setBalance", [
            accountAddress,
            toHex(parseEther("10000")),
          ]);
          balanceBefore = await getAccountBalance(accountAddress, entryPoint);

          const nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          const value = 0n;
          userOp = {
            sender: accountAddress,
            nonce,
            initCode: getInitCode(0n, owner.account.address),
            callData: encodeExecute(zeroAddress, value, "0x"),
            callGasLimit: 1_000_000n,
            verificationGasLimit: 2_000_000n,
            preVerificationGas: 21_000n,
            maxFeePerGas: 1n,
            maxPriorityFeePerGas: 1n,
            paymasterAndData: "0x" as `0x${string}`,
            signature: "0x" as `0x${string}`,
          };
          userOp.signature = getDummySignature(userOp);
          userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));
          userOp.signature = await getOwnerSignature(owner, userOp, entryPoint);

          await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);
          // Add the value sent back to calculate gas properly.
          balanceAfter = await getAccountBalance(
            accountAddress,
            entryPoint,
            value,
          );
        });

        describe("Session Key", function () {
          it(`[${name}]: Add Session Key`, async function () {
            const {owner, beneficiary, entryPoint, usdc, usdt, sessionKey} =
              await loadFixture(baseFixture);
            const {
              getAccountAddress,
              getDummySignature,
              getOwnerSignature,
              createAccount,
              installSessionKeyPlugin,
              addSessionKeyCalldata,
            } = await loadFixture(fixture);

            if (addSessionKeyCalldata) {
              const accountAddress = await getAccountAddress(
                0n,
                owner.account.address,
              );
              await hre.network.provider.send("hardhat_setBalance", [
                accountAddress,
                toHex(parseEther("100")),
              ]);
              balanceBefore = await getAccountBalance(
                accountAddress,
                entryPoint,
              );

              await createAccount(0n, owner.account.address);
              installSessionKeyPlugin &&
                (await installSessionKeyPlugin(accountAddress, owner));

              const publicClient = await hre.viem.getPublicClient();

              const account = getContract({
                address: accountAddress,
                abi: MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.abi,
                publicClient,
                walletClient: owner,
              });

              // use 5 keys
              const keys = (await sessionKey.getAddresses()).slice(0, 5);

              const nonce = await entryPoint.read.getNonce([
                accountAddress,
                0n,
              ]);
              const value = 0n;
              userOp = {
                sender: accountAddress,
                nonce,
                initCode: "0x" as `0x${string}`,
                callData: addSessionKeyCalldata(
                  keys,
                  nativeTokenTransferTarget,
                  [usdc, usdt],
                  accountAddress,
                ),
                callGasLimit: 1_500_000n,
                verificationGasLimit: 1_000_000n,
                preVerificationGas: 21_000n,
                maxFeePerGas: 1n,
                maxPriorityFeePerGas: 1n,
                paymasterAndData: "0x" as `0x${string}`,
                signature: "0x" as `0x${string}`,
              };
              userOp.signature = getDummySignature(userOp);
              userOp.preVerificationGas = BigInt(
                calcPreVerificationGas(userOp),
              );
              userOp.signature = await getOwnerSignature(
                owner,
                userOp,
                entryPoint,
              );

              await entryPoint.write.handleOps([
                [userOp],
                beneficiary.account.address,
              ]);
              // Add the value sent back to calculate gas properly.
              balanceAfter = await getAccountBalance(
                accountAddress,
                entryPoint,
                value,
              );
            }
          });

          it(`[${name}]: Session Key Native Transfer`, async function () {
            const {owner, beneficiary, entryPoint, usdc, usdt, sessionKey} =
              await loadFixture(baseFixture);
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

            const keys = (await sessionKey.getAddresses()).slice(0, 5);

            const accountAddress = await getAccountAddress(
              0n,
              owner.account.address,
            );
            const value = 0n;

            await hre.network.provider.send("hardhat_setBalance", [
              accountAddress,
              toHex(parseEther("100")),
            ]);
            await createAccount(0n, owner.account.address);
            installSessionKeyPlugin &&
              (await installSessionKeyPlugin(accountAddress, owner));

            if (addSessionKeyCalldata) {
              balanceBefore = await getAccountBalance(
                accountAddress,
                entryPoint,
              );

              const publicClient = await hre.viem.getPublicClient();

              const account = getContract({
                address: accountAddress,
                abi: MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.abi,
                publicClient,
                walletClient: owner,
              });

              userOp = {
                sender: accountAddress,
                nonce: await entryPoint.read.getNonce([accountAddress, 0n]),
                initCode: "0x" as `0x${string}`,
                callData: addSessionKeyCalldata(
                  keys,
                  nativeTokenTransferTarget,
                  [usdc, usdt],
                  accountAddress,
                ),
                callGasLimit: 1_500_000n,
                verificationGasLimit: 1_000_000n,
                preVerificationGas: 21_000n,
                maxFeePerGas: 1n,
                maxPriorityFeePerGas: 1n,
                paymasterAndData: "0x" as `0x${string}`,
                signature: "0x" as `0x${string}`,
              };
              userOp.signature = getDummySignature(userOp);
              userOp.preVerificationGas = BigInt(
                calcPreVerificationGas(userOp),
              );
              userOp.signature = await getOwnerSignature(
                owner,
                userOp,
                entryPoint,
              );

              await entryPoint.write.handleOps([
                [userOp],
                beneficiary.account.address,
              ]);
              // Add the value sent back to calculate gas properly.
              balanceAfter = await getAccountBalance(
                accountAddress,
                entryPoint,
                value,
              );

              const sessionKeyPlugin = getContract({
                address: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.address,
                abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
                publicClient,
                walletClient: owner,
              });

              if (
                useSessionKeyNativeTokenTransferCalldata &&
                getSessionKeySignature
              ) {
                balanceBefore = await getAccountBalance(
                  accountAddress,
                  entryPoint,
                );

                userOp = {
                  sender: accountAddress,
                  nonce: await entryPoint.read.getNonce([accountAddress, 0n]),
                  initCode: "0x" as `0x${string}`,
                  callData: useSessionKeyNativeTokenTransferCalldata(
                    keys[3],
                    nativeTokenTransferTarget,
                    value,
                  ), // key 3 =
                  callGasLimit: 5_000_000n,
                  verificationGasLimit: 2_000_000n,
                  preVerificationGas: 21_000n,
                  maxFeePerGas: 1n,
                  maxPriorityFeePerGas: 1n,
                  paymasterAndData: "0x" as `0x${string}`,
                  signature: "0x" as `0x${string}`,
                };
                userOp.signature = getDummySignature(userOp);
                userOp.preVerificationGas = BigInt(
                  calcPreVerificationGas(userOp),
                );
                userOp.signature = await getSessionKeySignature(
                  sessionKey,
                  userOp,
                  entryPoint,
                );

                await entryPoint.write.handleOps([
                  [userOp],
                  beneficiary.account.address,
                ]);

                // Add the value sent back to calculate gas properly.
                balanceAfter = await getAccountBalance(
                  accountAddress,
                  entryPoint,
                  value,
                );
              }
            }
          });

          it(`[${name}]: Session Key ERC20 Transfer`, async function () {});
        });
      });
    });
  });
});
