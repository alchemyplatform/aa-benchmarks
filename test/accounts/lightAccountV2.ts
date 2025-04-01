import hre from "hardhat";
import {
  concatHex,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  toHex,
} from "viem";
import {AccountConfig, AccountDataV07} from "../accounts";
import {LIGHT_ACCOUNT_V2_ARTIFACTS} from "../artifacts/lightAccountV2";
import {getEntryPointV07} from "../utils/entryPoint";

enum SignatureType {
  EOA = 0,
  CONTRACT = 1,
  CONTRACT_WITH_ADDR = 2,
}

async function accountFixture(): Promise<AccountDataV07> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(LIGHT_ACCOUNT_V2_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const lightAccountV2Factory = getContract({
    address: LIGHT_ACCOUNT_V2_ARTIFACTS.LightAccountFactory.address,
    abi: LIGHT_ACCOUNT_V2_ARTIFACTS.LightAccountFactory.abi,
    client: walletClient,
  });

  const entryPoint = getEntryPointV07({walletClient});

  return {
    entryPoint,
    createAccount: async (salt, ownerAddress) => {
      return await lightAccountV2Factory.write.createAccount([
        ownerAddress,
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      return await lightAccountV2Factory.read.getAddress([ownerAddress, salt]);
    },
    getOwnerSignature: async (ownerSigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await ownerSigner.signMessage({
        message: {raw: userOpHash},
      });
      return concatHex([toHex(SignatureType.EOA, {size: 1}), signature]);
    },
    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([accountAddress, 0n]);
    },
    getDummySignature: (_userOp) => {
      return concatHex([
        toHex(SignatureType.EOA, {size: 1}),
        "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
      ]);
    },
    getInitCode: (salt, ownerAddress) => {
      return encodePacked(
        ["address", "bytes"],
        [
          lightAccountV2Factory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: lightAccountV2Factory.abi,
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
            abi: LIGHT_ACCOUNT_V2_ARTIFACTS.LightAccount.abi,
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
            abi: LIGHT_ACCOUNT_V2_ARTIFACTS.LightAccount.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data],
      });
    },
  };
}

export const lightAccountV2: AccountConfig = {
  name: "Alchemy Light Account v2 (non-modular)",
  accountFixture,
};
