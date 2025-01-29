import hre from "hardhat";
import {encodeFunctionData, encodePacked, getAbiItem, getContract} from "viem";
import {AccountConfig, AccountDataV06} from "../accounts";
import {LIGHT_ACCOUNT_ARTIFACTS} from "../artifacts/lightAccount";
import {getEntryPointV06} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV06> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(LIGHT_ACCOUNT_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const lightAccountFactory = getContract({
    address: LIGHT_ACCOUNT_ARTIFACTS.LightAccountFactory.address,
    abi: LIGHT_ACCOUNT_ARTIFACTS.LightAccountFactory.abi,
    client: walletClient,
  });

  const entryPoint = getEntryPointV06({walletClient});

  return {
    entryPoint,
    createAccount: async (salt, ownerAddress) => {
      return await lightAccountFactory.write.createAccount([
        ownerAddress,
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      return await lightAccountFactory.read.getAddress([ownerAddress, salt]);
    },
    getOwnerSignature: async (owner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      return await owner.signMessage({
        message: {raw: userOpHash},
      });
    },
    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([accountAddress, 0n]);
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
  accountFixture,
};
