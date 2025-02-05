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
import {MULTI_OWNER_LIGHT_ACCOUNT_ARTIFACTS} from "../artifacts/multiOwnerLightAccount";
import {getEntryPointV07} from "../utils/entryPoint";

enum SignatureType {
  EOA = 0,
  CONTRACT = 1,
  CONTRACT_WITH_ADDR = 2,
}

async function accountFixture(): Promise<AccountDataV07> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(
    MULTI_OWNER_LIGHT_ACCOUNT_ARTIFACTS,
  )) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const multiOwnerLightAccountFactory = getContract({
    address:
      MULTI_OWNER_LIGHT_ACCOUNT_ARTIFACTS.MultiOwnerLightAccountFactory.address,
    abi: MULTI_OWNER_LIGHT_ACCOUNT_ARTIFACTS.MultiOwnerLightAccountFactory.abi,
    client: walletClient,
  });

  const entryPoint = getEntryPointV07({walletClient});

  return {
    entryPoint,
    createAccount: async (salt, ownerAddress) => {
      return await multiOwnerLightAccountFactory.write.createAccountSingle([
        ownerAddress,
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      return await multiOwnerLightAccountFactory.read.getAddress([
        [ownerAddress],
        salt,
      ]);
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
          multiOwnerLightAccountFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: multiOwnerLightAccountFactory.abi,
                name: "createAccountSingle",
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
            abi: MULTI_OWNER_LIGHT_ACCOUNT_ARTIFACTS.MultiOwnerLightAccount.abi,
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
            abi: MULTI_OWNER_LIGHT_ACCOUNT_ARTIFACTS.MultiOwnerLightAccount.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data],
      });
    },
  };
}

export const multiOwnerLightAccount: AccountConfig = {
  name: "Alchemy Light Account v2 (Multi-Owner)",
  accountFixture,
};
