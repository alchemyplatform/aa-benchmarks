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
  parseGwei,
  toHex,
  zeroAddress,
} from "viem";
import {calculateL1Fee, calculateL1GasUsed} from "@eth-optimism/core-utils";

import {ENTRY_POINT_ARTIFACTS} from "./artifacts/entryPoint";
import {calcPreVerificationGas} from "@account-abstraction/sdk";
import hre from "hardhat";
import {loadFixture} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import {modularAccount} from "./accounts/modularAccount";
import {kernel} from "./accounts/kernelv1";

const L1_GAS_PRICE = parseGwei("20");
const OP_FIXED_OVERHEAD = 188;
const OP_DYNAMIC_OVERHEAD_SCALAR = 0.684;

export interface UserOperation {
  sender: `0x${string}`;
  nonce: bigint;
  initCode: `0x${string}`;
  callData: `0x${string}`;
  callGasLimit: bigint;
  verificationGasLimit: bigint;
  preVerificationGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  paymasterAndData: `0x${string}`;
  signature: `0x${string}`;
}

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
  setupFactory: () => Promise<void>;
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
      let l1GasUsed: bigint | undefined;
      let l1Fee: bigint | undefined;

      beforeEach(async function () {
        hash = undefined;
        balanceBefore = undefined;
        balanceAfter = undefined;
        l1GasUsed = undefined;
        l1Fee = undefined;
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
          const l1Fee = calculateL1Fee(
            tx.input,
            OP_FIXED_OVERHEAD,
            Number(L1_GAS_PRICE),
            OP_DYNAMIC_OVERHEAD_SCALAR * 10 ** 3,
            3,
          ).toBigInt();
          console.table({
            "L2 gas used": `${receipt.gasUsed}`,
            "L2 gas price": `${formatGwei(receipt.effectiveGasPrice)} gwei`,
            "L2 fee": `${formatEther(l2Fee)} ETH`,
            "L1 gas used": `${calculateL1GasUsed(tx.input, OP_FIXED_OVERHEAD).toBigInt()}`,
            "L1 gas price": `${formatGwei(L1_GAS_PRICE)} gwei`,
            "L1 fee": `${formatEther(l1Fee)} ETH`,
            "Total fee": `${formatEther(l2Fee + l1Fee)} ETH`,
          });
        } else if (balanceBefore != null && balanceAfter != null) {
          // User Operation
          // This works because the gas price is set to 1.
          const gasUsed = balanceBefore - balanceAfter;
          const gasPrice = BigInt(hre.config.networks.hardhat.gasPrice);
          const l2Fee = gasUsed * gasPrice;
          console.table({
            "L2 gas used": `${gasUsed}`,
            "L2 gas price": `${formatGwei(gasPrice)} gwei`,
            "L2 fee": `${formatEther(l2Fee)} ETH`,
            "L1 gas used": `${l1GasUsed}`,
            "L1 gas price": `${formatGwei(L1_GAS_PRICE)} gwei`,
            "L1 fee": `${formatEther(l1Fee!)} ETH`,
            "Total fee": `${formatEther(l2Fee + l1Fee!)} ETH`,
          });
        }
      });

      describe("Runtime", function () {
        it(`[${name}] Runtime: Creation`, async function () {
          const {owner} = await loadFixture(baseFixture);
          const {setupFactory, createAccount} = await loadFixture(fixture);
          await setupFactory();
          hash = await createAccount(0n, owner.account.address);
        });

        it(`[${name}] Runtime: Native transfer`, async function () {
          const {owner, alice} = await loadFixture(baseFixture);
          const {setupFactory, getAccountAddress, createAccount, encodeExecute} =
            await loadFixture(fixture);
          await setupFactory();
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
          const {owner, beneficiary, entryPoint, publicClient} =
            await loadFixture(baseFixture);
          const {
            setupFactory,
            encodeExecute,
            getAccountAddress,
            getDummySignature,
            getInitCode,
            getSignature,
          } = await loadFixture(fixture);
          await setupFactory();
          const accountAddress = await getAccountAddress(
            0n,
            owner.account.address,
          );
          await hre.network.provider.send("hardhat_setBalance", [
            accountAddress,
            toHex(parseEther("100")),
          ]);
          const nonce = await entryPoint.read.getNonce([accountAddress, 0n]);
          const value = 0n;
          const userOp: UserOperation = {
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

          balanceBefore = await entryPoint.read.balanceOf([accountAddress]);
          balanceBefore += await publicClient.getBalance({
            address: accountAddress,
          });
          const hash = await entryPoint.write.handleOps([
            [userOp],
            beneficiary.account.address,
          ]);
          // Add the value sent back to calculate gas properly.
          balanceAfter = value;
          balanceAfter += await entryPoint.read.balanceOf([accountAddress]);
          balanceAfter += await publicClient.getBalance({
            address: accountAddress,
          });

          const tx = await publicClient.getTransaction({
            hash,
          });
          l1GasUsed = calculateL1GasUsed(
            tx.input,
            OP_FIXED_OVERHEAD,
          ).toBigInt();
          l1Fee = calculateL1Fee(
            tx.input,
            OP_FIXED_OVERHEAD,
            Number(L1_GAS_PRICE),
            OP_DYNAMIC_OVERHEAD_SCALAR * 10 ** 3,
            3,
          ).toBigInt();
        });
      });
    });
  });
});
