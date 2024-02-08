import { formatEther, formatGwei, getContract, parseEther, toHex } from "viem";

import { artifacts } from "./artifacts";
import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";

describe("ModularAccount", function () {
  async function setupFixture() {
    const [owner, alice] = await hre.viem.getWalletClients();
    const publicClient = await hre.viem.getPublicClient();

    for (const { address, bytecode } of Object.values(artifacts)) {
      await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
    }

    const multiOwnerPlugin = getContract({
      address: artifacts.MultiOwnerPlugin.address,
      abi: artifacts.MultiOwnerPlugin.abi,
      publicClient,
      walletClient: owner,
    });

    const sessionKeyPlugin = getContract({
      address: artifacts.SessionKeyPlugin.address,
      abi: artifacts.SessionKeyPlugin.abi,
      publicClient,
      walletClient: owner,
    });

    const upgradeableModularAccount = getContract({
      address: artifacts.UpgradeableModularAccount.address,
      abi: artifacts.UpgradeableModularAccount.abi,
      publicClient,
      walletClient: owner,
    });

    const multiOwnerModularAccountFactory = getContract({
      address: artifacts.MultiOwnerModularAccountFactory.address,
      abi: artifacts.MultiOwnerModularAccountFactory.abi,
      publicClient,
      walletClient: owner,
    });

    return {
      multiOwnerPlugin,
      sessionKeyPlugin,
      upgradeableModularAccount,
      multiOwnerModularAccountFactory,
      owner,
      alice,
      publicClient,
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
        abi: artifacts.UpgradeableModularAccount.abi,
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
  });
});
