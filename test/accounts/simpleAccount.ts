import hre from "hardhat";
import {encodeFunctionData, encodePacked, getAbiItem, getContract} from "viem";
import {AccountConfig, AccountDataV07} from "../accounts";
import {SIMPLE_ACCOUNT_ARTIFACTS} from "../artifacts/simpleAccount";
import {getEntryPointV07} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV07> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(SIMPLE_ACCOUNT_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const simpleAccountFactory = getContract({
    address: SIMPLE_ACCOUNT_ARTIFACTS.SimpleAccountFactory.address,
    abi: SIMPLE_ACCOUNT_ARTIFACTS.SimpleAccountFactory.abi,
    client: walletClient,
  });

  const entryPoint = getEntryPointV07({walletClient});

  return {
    entryPoint,
    createAccount: async (salt, ownerAddress) => {
      return await simpleAccountFactory.write.createAccount([
        ownerAddress,
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      return await simpleAccountFactory.read.getAddress([ownerAddress, salt]);
    },
    getOwnerSignature: async (ownerSigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      return await ownerSigner.signMessage({
        message: {raw: userOpHash},
      });
    },
    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([accountAddress, 0n]);
    },
    getDummySignature: (_userOp) => {
      return "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
    },
    getInitCode: (salt, ownerAddress) => {
      return encodePacked(
        ["address", "bytes"],
        [
          simpleAccountFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: simpleAccountFactory.abi,
                name: "createAccount",
              }),
            ],
            args: [ownerAddress, salt],
          }),
        ],
      );
    },
    encodeUserOpExecute: (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: SIMPLE_ACCOUNT_ARTIFACTS.SimpleAccount.abi,
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
            abi: SIMPLE_ACCOUNT_ARTIFACTS.SimpleAccount.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data],
      });
    },
  };
}

export const simpleAccount: AccountConfig = {
  name: "Simple Account (non-modular)",
  accountFixture,
};
