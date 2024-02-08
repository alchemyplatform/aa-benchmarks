import { formatEther, formatGwei, getContract } from "viem";

import { artifacts } from "./artifacts";
import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";

describe("ModularAccount", function () {
  async function setupFixture() {
    const [owner, otherAccount] = await hre.viem.getWalletClients();
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
      otherAccount,
      publicClient,
    };
  }

  describe("Benchmark", function () {
    let hash: `0x${string}` | undefined;

    beforeEach(function () {
      hash = undefined;
    });

    afterEach(async function () {
      const publicClient = await hre.viem.getPublicClient();
      expect(hash).to.not.be.undefined;
      const receipt = await publicClient.getTransactionReceipt({ hash: hash! });
      console.table({
        "Gas used": `${receipt.gasUsed}`,
        "Gas price": `${formatGwei(receipt.effectiveGasPrice)} Gwei`,
        "Transaction fee": `${formatEther(
          receipt.gasUsed * receipt.effectiveGasPrice
        )} ETH`,
      });
    });

    it("Create account", async function () {
      const { multiOwnerModularAccountFactory, owner } = await loadFixture(
        setupFixture
      );
      hash = await multiOwnerModularAccountFactory.write.createAccount([
        0n,
        [owner.account.address],
      ]);
    });
  });
});
