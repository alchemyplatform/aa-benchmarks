import hre from "hardhat";
import {encodeFunctionData, encodePacked, getAbiItem, getContract} from "viem";
import {MODULAR_ACCOUNT_ARTIFACTS} from "../artifacts/modularAccount";
import {AccountConfig, AccountFixtureReturnType} from "../benchmark";

async function fixture(): Promise<AccountFixtureReturnType> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();

  for (const {address, bytecode} of Object.values(MODULAR_ACCOUNT_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  // const sessionKeyPlugin = getContract({
  //   address: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.address,
  //   abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
  //   publicClient,
  //   walletClient,
  // });

  const multiOwnerModularAccountFactory = getContract({
    address: MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerModularAccountFactory.address,
    abi: MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerModularAccountFactory.abi,
    publicClient,
    walletClient,
  });

  return {
    createAccount: async (salt, ownerAddress) => {
      return await multiOwnerModularAccountFactory.write.createAccount([
        salt,
        [ownerAddress],
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      return await multiOwnerModularAccountFactory.read.getAddress([
        salt,
        [ownerAddress],
      ]);
    },
    getSignature: async (owner, userOp, entryPoint) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      return await owner.signMessage({
        message: {raw: userOpHash},
      });
    },
    encodeExecute: (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data],
      });
    },
    getDummySignature: (_userOp) => {
      return "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
    },
    getInitCode: (salt, ownerAddress) => {
      return encodePacked(
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
            args: [salt, [ownerAddress]],
          }),
        ],
      );
    },
  };
}

export const modularAccount: AccountConfig = {
  name: "Modular Account",
  fixture,
};
