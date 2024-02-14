import {
  Account,
  Chain,
  GetContractReturnType,
  PublicClient,
  Transport,
  WalletClient,
  formatEther,
  formatGwei,
  getContract,
  parseEther,
  toHex,
  zeroAddress,
} from "viem";
import {
  L1_GAS_PRICE,
  getAccountBalance,
  getL1FeeForCallData,
  getL1FeeForUserOp,
  getL1GasUsedForCallData,
  getL1GasUsedForUserOp,
} from "./utils/fees";

import {ENTRY_POINT_ARTIFACTS} from "./artifacts/entryPoint";
import {UserOperation} from "./utils/userOp";
import {calcPreVerificationGas} from "@account-abstraction/sdk";
import hre from "hardhat";
import {kernel} from "./accounts/kernel";
import {loadFixture} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import {modularAccount} from "./accounts/modularAccount";

export interface AccountFixtureReturnType {
  createAccount: (
    salt: bigint,
    ownerAddress: `0x${string}`,
  ) => Promise<`0x${string}`>;
  getAccountAddress: (
    salt: bigint,
    ownerAddress: `0x${string}`,
  ) => Promise<`0x${string}`>;
  getSignature: (
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
}

export interface AccountConfig {
  name: string;
  fixture: () => Promise<AccountFixtureReturnType>;
}

const ACCOUNTS_TO_BENCHMARK: AccountConfig[] = [modularAccount, kernel];

describe("Benchmark", function () {
  async function baseFixture() {
    const [owner, alice, beneficiary] = await hre.viem.getWalletClients();
    const publicClient = await hre.viem.getPublicClient();

    for (const {address, bytecode} of Object.values(ENTRY_POINT_ARTIFACTS)) {
      await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
    }

    const entryPoint = getContract({
      address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address,
      abi: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.abi,
      publicClient,
      walletClient: owner,
    });

    return {
      alice,
      beneficiary,
      entryPoint,
      owner,
      publicClient,
    };
  }

  ACCOUNTS_TO_BENCHMARK.forEach(({name, fixture}) => {
    describe(name, function () {
      let hash: `0x${string}` | undefined;
      let balanceBefore: bigint | undefined;
      let balanceAfter: bigint | undefined;
      let userOp: UserOperation | undefined;

      beforeEach(async function () {
        hash = undefined;
        userOp = undefined;
        balanceBefore = undefined;
        balanceAfter = undefined;
      });

      afterEach(async function () {
        const publicClient = await hre.viem.getPublicClient();
        if (hash) {
          // Runtime
          const receipt = await publicClient.getTransactionReceipt({
            hash,
          });
          const tx = await publicClient.getTransaction({
            hash,
          });
          const l2Fee = receipt.gasUsed * receipt.effectiveGasPrice;
          const l1Fee = getL1FeeForCallData(tx.input);
          console.table({
            "L2 gas used": `${receipt.gasUsed}`,
            "L2 gas price": `${formatGwei(receipt.effectiveGasPrice)} gwei`,
            "L2 fee": `${formatEther(l2Fee)} ETH`,
            "L1 gas used": `${getL1GasUsedForCallData(tx.input)}`,
            "L1 gas price": `${formatGwei(L1_GAS_PRICE)} gwei`,
            "L1 fee": `${formatEther(l1Fee)} ETH`,
            "Total fee": `${formatEther(l2Fee + l1Fee)} ETH`,
          });
        } else if (userOp && balanceAfter != null && balanceBefore != null) {
          // User Operation
          // This works because the gas price is set to 1.
          const gasUsed = balanceBefore - balanceAfter;
          const gasPrice = BigInt(hre.config.networks.hardhat.gasPrice);
          const l2Fee = gasUsed * gasPrice;
          const l1Fee = getL1FeeForUserOp(userOp);
          console.table({
            "L2 gas used": `${gasUsed}`,
            "L2 gas price": `${formatGwei(gasPrice)} gwei`,
            "L2 fee": `${formatEther(l2Fee)} ETH`,
            "L1 gas used": `${getL1GasUsedForUserOp(userOp)}`,
            "L1 gas price": `${formatGwei(L1_GAS_PRICE)} gwei`,
            "L1 fee": `${formatEther(l1Fee)} ETH`,
            "Total fee": `${formatEther(l2Fee + l1Fee)} ETH`,
          });
        }
      });

      describe("Runtime", function () {
        it(`[${name}] Runtime: Creation`, async function () {
          const {owner} = await loadFixture(baseFixture);
          const {createAccount} = await loadFixture(fixture);
          hash = await createAccount(0n, owner.account.address);
        });

        it(`[${name}] Runtime: Native transfer`, async function () {
          const {owner, alice} = await loadFixture(baseFixture);
          const {getAccountAddress, createAccount, encodeExecute} =
            await loadFixture(fixture);
          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await hre.network.provider.send("hardhat_setBalance", [
            accountAddress,
            toHex(parseEther("100")),
          ]);
          await createAccount(0n, owner.account.address);

          hash = await owner.sendTransaction({
            to: accountAddress,
            data: encodeExecute(alice.account.address, parseEther("1"), "0x"),
          });
        });
      });

      describe("User Operation", function () {
        it(`[${name}] User Operation: Creation`, async function () {
          const {owner, beneficiary, entryPoint} =
            await loadFixture(baseFixture);
          const {
            encodeExecute,
            getAccountAddress,
            getDummySignature,
            getInitCode,
            getSignature,
          } = await loadFixture(fixture);
          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await hre.network.provider.send("hardhat_setBalance", [
            accountAddress,
            toHex(parseEther("100")),
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
          userOp.signature = await getSignature(owner, userOp, entryPoint);

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
      });
    });
  });
});
