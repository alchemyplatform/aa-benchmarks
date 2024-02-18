import {encodeFunctionData, encodePacked, getAbiItem, getContract} from "viem";
import {AccountConfig, AccountFixtureReturnType} from "../benchmark";

import hre from "hardhat";
import {LIGHT_ACCOUNT_ARTIFACTS} from "../artifacts/lightAccount";

async function fixture(): Promise<AccountFixtureReturnType> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();

  for (const {address, bytecode} of Object.values(LIGHT_ACCOUNT_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const lightAccountFactory = getContract({
    address: LIGHT_ACCOUNT_ARTIFACTS.LightAccountFactory.address,
    abi: LIGHT_ACCOUNT_ARTIFACTS.LightAccountFactory.abi,
    publicClient,
    walletClient,
  });

  return {
    createAccount: async (salt, ownerAddress) => {
      return await lightAccountFactory.write.createAccount([
        ownerAddress,
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      return await lightAccountFactory.read.getAddress([ownerAddress, salt]);
    },
    getOwnerSignature: async (owner, userOp, entryPoint) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      return await owner.signMessage({
        message: {raw: userOpHash},
      });
    },
    encodeUserOpExecute: (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: LIGHT_ACCOUNT_ARTIFACTS.LightAccount.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data],
      });
    },
    encodeRuntimeExecute: async (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: LIGHT_ACCOUNT_ARTIFACTS.LightAccount.abi,
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
          lightAccountFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: lightAccountFactory.abi,
                name: "createAccount",
              }),
            ],
            args: [ownerAddress, salt],
          }),
        ],
      );
    },
  };
}

export const lightAccount: AccountConfig = {
  name: "Light Account",
  fixture,
};
