import {
  encodeFunctionData,
  encodePacked,
  formatEther,
  formatGwei,
  getAbiItem,
  getContract,
  hashMessage,
  parseEther,
  recoverAddress,
  recoverMessageAddress,
  toHex,
  zeroAddress,
} from "viem";

import { ENTRY_POINT_ARTIFACTS } from "../entryPoint";
import { MODULAR_ACCOUNT_ARTIFACTS } from "./artifacts";
import { calcPreVerificationGas } from "@account-abstraction/sdk";
import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";

describe("ModularAccount", function () {
  async function setupFixture() {
    const [owner, alice, beneficiary] = await hre.viem.getWalletClients();
    const publicClient = await hre.viem.getPublicClient();

    for (const { address, bytecode } of Object.values(ENTRY_POINT_ARTIFACTS)) {
      await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
    }

    const entryPoint = getContract({
      address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address,
      abi: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.abi,
      publicClient,
      walletClient: owner,
    });

    for (const { address, bytecode } of Object.values(
      MODULAR_ACCOUNT_ARTIFACTS
    )) {
      await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
    }

    const multiOwnerPlugin = getContract({
      address: MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerPlugin.address,
      abi: MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerPlugin.abi,
      publicClient,
      walletClient: owner,
    });

    const sessionKeyPlugin = getContract({
      address: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.address,
      abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
      publicClient,
      walletClient: owner,
    });

    const multiOwnerModularAccountFactory = getContract({
      address:
        MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerModularAccountFactory.address,
      abi: MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerModularAccountFactory.abi,
      publicClient,
      walletClient: owner,
    });

    const smartAccountAddress =
      await multiOwnerModularAccountFactory.read.getAddress([
        0n,
        [owner.account.address],
      ]);
    await hre.network.provider.send("hardhat_setBalance", [
      smartAccountAddress,
      toHex(parseEther("100")),
    ]);

    return {
      entryPoint,
      multiOwnerPlugin,
      sessionKeyPlugin,
      multiOwnerModularAccountFactory,
      owner,
      alice,
      beneficiary,
      publicClient,
      smartAccountAddress,
    };
  }

  describe("Benchmark", function () {
    let hash: `0x${string}` | undefined;

    async function createAccountFixture() {
      const setupFixtureResults = await loadFixture(setupFixture);
      const { multiOwnerModularAccountFactory, owner, publicClient } =
        setupFixtureResults;
      await multiOwnerModularAccountFactory.write.createAccount([
        0n,
        [owner.account.address],
      ]);
      const smartAccountAddress =
        await multiOwnerModularAccountFactory.read.getAddress([
          0n,
          [owner.account.address],
        ]);
      await hre.network.provider.send("hardhat_setBalance", [
        smartAccountAddress,
        toHex(parseEther("100")),
      ]);
      const smartAccount = getContract({
        address: smartAccountAddress,
        abi: MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.abi,
        publicClient,
        walletClient: owner,
      });

      return {
        ...setupFixtureResults,
        smartAccount,
      };
    }

    beforeEach(function () {
      hash = undefined;
    });

    afterEach(async function () {
      const publicClient = await hre.viem.getPublicClient();
      expect(hash).to.not.be.undefined;
      const receipt = await publicClient.getTransactionReceipt({ hash: hash! });
      console.table({
        "Gas used": `${receipt.gasUsed}`,
        "Gas price": `${formatGwei(receipt.effectiveGasPrice)} gwei`,
        "Transaction fee": `${formatEther(
          receipt.gasUsed * receipt.effectiveGasPrice
        )} ETH`,
      });
    });

    it("Creation", async function () {
      const { multiOwnerModularAccountFactory, owner } = await loadFixture(
        setupFixture
      );
      hash = await multiOwnerModularAccountFactory.write.createAccount([
        0n,
        [owner.account.address],
      ]);
    });

    it("Native transfer", async function () {
      const { smartAccount, alice } = await loadFixture(createAccountFixture);
      hash = await smartAccount.write.execute([
        alice.account.address,
        parseEther("1"),
        "0x",
      ]);
    });

    it("User Operation: Creation", async function () {
      const {
        multiOwnerModularAccountFactory,
        owner,
        entryPoint,
        beneficiary,
        alice,
        publicClient,
      } = await loadFixture(setupFixture);

      const createAccountArgs = [0n, [owner.account.address]] as const;

      const sender = await multiOwnerModularAccountFactory.read.getAddress(
        createAccountArgs
      );
      const nonce = await entryPoint.read.getNonce([sender, 0n]);
      const initCode = encodePacked(
        ["address", "bytes"],
        [
          multiOwnerModularAccountFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: multiOwnerModularAccountFactory.abi,
                name: "createAccount",
              }),
            ],
            args: createAccountArgs,
          }),
        ]
      );
      const callData = encodeFunctionData({
        abi: [
          getAbiItem({
            abi: MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.abi,
            name: "execute",
          }),
        ],
        args: [zeroAddress, 0n, "0x"],
      });

      const userOp = {
        sender,
        nonce,
        initCode,
        callData,
        callGasLimit: 1_000_000n,
        verificationGasLimit: 2_000_000n,
        preVerificationGas: 21_000n,
        maxFeePerGas: 1n,
        maxPriorityFeePerGas: 1n,
        paymasterAndData: "0x" as `0x${string}`,
        signature:
          "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c" as `0x${string}`,
      };
      userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      console.log(userOpHash);
      userOp.signature = await owner.signMessage({
        message: { raw: userOpHash },
      });
      console.log({ userOp });
      console.log(await publicClient.getBalance({ address: sender }));

      console.log(
        userOpHash,
        owner.account.address,
        await recoverAddress({
          hash: hashMessage({ raw: userOpHash }),
          signature: userOp.signature,
        }),
        await recoverMessageAddress({
          message: { raw: userOpHash },
          signature: userOp.signature,
        }),
        await recoverAddress({
          hash: "0xed97311a0ed98e9dfd0515c18ceb9e6f644ba7761e0e8459073fc16ecfd687ac",
          signature: userOp.signature,
        })
      );

      hash = await entryPoint.write.handleOps([
        [userOp],
        beneficiary.account.address,
      ]);
    });
  });
});
