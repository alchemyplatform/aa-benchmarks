import hre from "hardhat";
import {
  concatHex,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  hexToBigInt,
  maxUint8,
  toHex,
} from "viem";
import {AccountConfig, AccountDataV07} from "../accounts";
import {MODULAR_ACCOUNT_V2_ARTIFACTS} from "../artifacts/modularAccountV2";
import {getEntryPointV07} from "../utils/entryPoint";

enum SignatureType {
  EOA = 0,
  CONTRACT = 1,
}

enum ValidationType {
  SELECTOR_ASSOCIATED = 0,
  GLOBAL = 1,
}

async function accountFixture(): Promise<AccountDataV07> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(
    MODULAR_ACCOUNT_V2_ARTIFACTS,
  )) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const accountFactory = getContract({
    address: MODULAR_ACCOUNT_V2_ARTIFACTS.AccountFactory.address,
    abi: MODULAR_ACCOUNT_V2_ARTIFACTS.AccountFactory.abi,
    client: walletClient,
  });

  const entryPoint = getEntryPointV07({walletClient});

  return {
    entryPoint,
    createAccount: async (salt, ownerAddress) => {
      return await accountFactory.write.createSemiModularAccount([
        ownerAddress,
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      return await accountFactory.read.getAddressSemiModular([
        ownerAddress,
        salt,
      ]);
    },
    getOwnerSignature: async (owner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await owner.signMessage({
        message: {raw: userOpHash},
      });
      return concatHex([
        toHex(maxUint8, {size: 1}), // RESERVED_VALIDATION_DATA_INDEX
        toHex(SignatureType.EOA, {size: 1}),
        signature,
      ]);
    },
    getNonce: async (accountAddress) => {
      const key = encodePacked(
        ["uint152", "uint32", "uint8"],
        [
          0n, // Parallel nonce key
          0, // Validation entity ID (0 for FALLBACK_VALIDATION)
          ValidationType.GLOBAL, // Validation type
        ],
      );
      return await entryPoint.read.getNonce([accountAddress, hexToBigInt(key)]);
    },
    encodeUserOpExecute: (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: MODULAR_ACCOUNT_V2_ARTIFACTS.ModularAccount.abi,
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
            abi: MODULAR_ACCOUNT_V2_ARTIFACTS.ModularAccount.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data],
      });
    },
    getDummySignature: (_userOp) => {
      return concatHex([
        toHex(maxUint8, {size: 1}), // RESERVED_VALIDATION_DATA_INDEX
        toHex(SignatureType.EOA, {size: 1}),
        "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
      ]);
    },
    getInitCode: (salt, ownerAddress) => {
      return encodePacked(
        ["address", "bytes"],
        [
          accountFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: accountFactory.abi,
                name: "createSemiModularAccount",
              }),
            ],
            args: [ownerAddress, salt],
          }),
        ],
      );
    },
  };
}

export const modularAccountV2: AccountConfig = {
  name: "Modular Account v2",
  accountFixture,
};
