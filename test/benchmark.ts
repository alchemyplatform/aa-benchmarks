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
  serializeTransaction,
  toHex,
  zeroAddress,
} from "viem";
import {L2_GAS_PRICE} from "../hardhat.config";
import {biconomy_v2} from "./accounts/biconomy-v2";
import {kernel} from "./accounts/kernel";
import {modularAccount} from "./accounts/modularAccount";
import {ENTRY_POINT_ARTIFACTS} from "./artifacts/entryPoint";
import {TOKEN_ARTIFACTS} from "./artifacts/tokens";
import {
  convertWeiToUsd,
  formatEtherTruncated,
  getL1Fee,
  getL1GasUsed,
} from "./utils/fees";
import {UserOperation} from "./utils/userOp";
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

const ACCOUNTS_TO_BENCHMARK: AccountConfig[] = [
  modularAccount,
  kernel,
  biconomy_v2,
];

const tokenTransferAmt = parseEther("1");

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

        collectResult(this.currentTest!.title, name, tableEntries);
      });

      describe("Runtime", function () {
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

          const nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          const value = 0n;
          const userOp = {
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

          hash = await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);
        });

        describe("Session Key", function () {
          it(`Add Session Key`, async function () {
            const {
              owner,
              alice,
              beneficiary,
              entryPoint,
              usdc,
              sessionKey,
            } = await loadFixture(baseFixture);
            const {
              getAccountAddress,
              getDummySignature,
              getOwnerSignature,
              createAccount,
              installSessionKeyPlugin,
              addSessionKeyCalldata,
            } = await loadFixture(fixture);
            if (!addSessionKeyCalldata) this.skip();

            const accountAddress = await getAccountAddress(
              0n,
              owner.account.address,
            );
            await hre.network.provider.send("hardhat_setBalance", [
              accountAddress,
              toHex(parseEther("100")),
            ]);
            await createAccount(0n, owner.account.address);
            installSessionKeyPlugin &&
              (await installSessionKeyPlugin(accountAddress, owner));
            const nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
            const value = 0n;
            let userOp = {
              sender: accountAddress,
              nonce,
              initCode: "0x" as `0x${string}`,
              callData: addSessionKeyCalldata(
                sessionKey.account.address!,
                alice.account.address!,
                [usdc],
                tokenTransferAmt,
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
            userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));
            userOp.signature = await getOwnerSignature(
              owner,
              userOp,
              entryPoint,
            );

            hash = await entryPoint.write.handleOps([
              [userOp],
              beneficiary.account.address,
            ]);
          });

          it(`Session Key Native Transfer`, async function () {
            const {owner, alice, beneficiary, entryPoint, usdc, sessionKey} =
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
            if (
              !addSessionKeyCalldata ||
              !useSessionKeyNativeTokenTransferCalldata ||
              !getSessionKeySignature
            )
              this.skip();

            // setup
            const accountAddress = await getAccountAddress(
              0n,
              owner.account.address,
            );
            await hre.network.provider.send("hardhat_setBalance", [
              accountAddress,
              toHex(parseEther("100")),
            ]);
            await createAccount(0n, owner.account.address);
            installSessionKeyPlugin &&
              (await installSessionKeyPlugin(accountAddress, owner));
            let userOp = {
              sender: accountAddress,
              nonce: await entryPoint.read.getNonce([accountAddress, 0n]),
              initCode: "0x" as `0x${string}`,
              callData: addSessionKeyCalldata(
                sessionKey.account.address!,
                alice.account.address,
                [usdc],
                tokenTransferAmt,
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
            userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));
            userOp.signature = await getOwnerSignature(
              owner,
              userOp,
              entryPoint,
            );
            await entryPoint.write.handleOps([
              [userOp],
              beneficiary.account.address,
            ]);

            // test
            userOp = {
              sender: accountAddress,
              nonce: await entryPoint.read.getNonce([accountAddress, 0n]),
              initCode: "0x" as `0x${string}`,
              callData: useSessionKeyNativeTokenTransferCalldata(
                sessionKey.account.address!,
                alice.account.address!,
                tokenTransferAmt,
              ), // key 3 = sessionKey.account.address
              callGasLimit: 5_000_000n,
              verificationGasLimit: 2_000_000n,
              preVerificationGas: 21_000n,
              maxFeePerGas: 1n,
              maxPriorityFeePerGas: 1n,
              paymasterAndData: "0x" as `0x${string}`,
              signature: "0x" as `0x${string}`,
            };
            userOp.signature = getDummySignature(userOp);
            userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));
            userOp.signature = await getSessionKeySignature(
              sessionKey,
              userOp,
              entryPoint,
            );
            hash = await entryPoint.write.handleOps([
              [userOp],
              beneficiary.account.address,
            ]);
          });

          it(`Session Key ERC20 Transfer`, async function () {
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
            )
              this.skip();

            // setup
            const accountAddress = await getAccountAddress(
              0n,
              owner.account.address,
            );
            await hre.network.provider.send("hardhat_setBalance", [
              accountAddress,
              toHex(parseEther("100")),
            ]);
            await createAccount(0n, owner.account.address);
            await usdc.write.mint([accountAddress, parseEther("100")]);
            installSessionKeyPlugin &&
              (await installSessionKeyPlugin(accountAddress, owner));
            let userOp = {
              sender: accountAddress,
              nonce: await entryPoint.read.getNonce([accountAddress, 0n]),
              initCode: "0x" as `0x${string}`,
              callData: addSessionKeyCalldata(
                sessionKey.account.address,
                alice.account.address!,
                [usdc],
                tokenTransferAmt,
                accountAddress,
              ),
              callGasLimit: 1_500_000n,
              verificationGasLimit: 4_000_000n,
              preVerificationGas: 21_000n,
              maxFeePerGas: 1n,
              maxPriorityFeePerGas: 1n,
              paymasterAndData: "0x" as `0x${string}`,
              signature: "0x" as `0x${string}`,
            };
            userOp.signature = getDummySignature(userOp);
            userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));
            userOp.signature = await getOwnerSignature(
              owner,
              userOp,
              entryPoint,
            );
            await entryPoint.write.handleOps([
              [userOp],
              beneficiary.account.address,
            ]);

            // test
            userOp = {
              sender: accountAddress,
              nonce: await entryPoint.read.getNonce([accountAddress, 0n]),
              initCode: "0x" as `0x${string}`,
              callData: useSessionKeyERC20TransferCalldata(
                usdc,
                sessionKey.account.address!,
                alice.account.address!,
                tokenTransferAmt,
              ), // key 3 = sessionKey.account.address
              callGasLimit: 5_000_000n,
              verificationGasLimit: 2_000_000n,
              preVerificationGas: 21_000n,
              maxFeePerGas: 1n,
              maxPriorityFeePerGas: 1n,
              paymasterAndData: "0x" as `0x${string}`,
              signature: "0x" as `0x${string}`,
            };
            userOp.signature = getDummySignature(userOp);
            userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));
            userOp.signature = await getSessionKeySignature(
              sessionKey!,
              userOp,
              entryPoint,
            );

            hash = await entryPoint.write.handleOps([
              [userOp],
              beneficiary.account.address,
            ]);
          });
        });
      });
    });
  });
});
