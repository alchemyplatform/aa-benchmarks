import hre from "hardhat";
import {
  concatHex,
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  hexToBigInt,
  maxUint8,
  parseAbiParameters,
  toFunctionSelector,
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

  await hre.network.provider.send("evm_setNextBlockTimestamp", [2_000_000_000]); // Set the time to 2 billion

  const accountFactory = getContract({
    address: MODULAR_ACCOUNT_V2_ARTIFACTS.AccountFactory.address,
    abi: MODULAR_ACCOUNT_V2_ARTIFACTS.AccountFactory.abi,
    client: walletClient,
  });

  const entryPoint = getEntryPointV07({walletClient});

  const sessionKeyEntityId = 1;
  const validUntil = 2_100_000_000;
  const validAfter = 1_900_000_000;

  const allowlistModuleInstallData = parseAbiParameters([
    "uint32 entityId, AllowlistInput[] inputs",
    "struct AllowlistInput { address target; bool hasSelectorAllowlist; bool hasERC20SpendLimit; uint256 erc20SpendLimit; bytes4[] selectors; }",
  ]);

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
    getOwnerSignature: async (ownerSigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await ownerSigner.signMessage({
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
    encodeSessionKeyCreate: (
      sessionKeySigner,
      allowedTargetAddress,
      allowedTokenAddress,
      spendLimitWei,
      _accountAddress,
    ) => {
      return {
        callData: encodeFunctionData({
          abi: [
            getAbiItem({
              abi: MODULAR_ACCOUNT_V2_ARTIFACTS.ModularAccount.abi,
              name: "installValidation",
            }),
          ],
          args: [
            // ValidationConfig validationConfig (bytes25)
            encodePacked(
              [
                "address", // module address
                "uint32", // entity ID
                "uint8", // validation flags
              ],
              [
                MODULAR_ACCOUNT_V2_ARTIFACTS.SingleSignerValidationModule
                  .address,
                sessionKeyEntityId,
                5, // 0b00000101: isGlobal | !isSignatureValidation | isUserOpValidation
              ],
            ),
            // bytes4[] selectors
            [],
            // bytes installData
            encodeAbiParameters(
              [
                {name: "entityId", type: "uint32"},
                {name: "newSigner", type: "address"},
              ],
              [sessionKeyEntityId, sessionKeySigner.account.address],
            ),
            // bytes[] hooks
            [
              encodePacked(
                ["bytes25", "bytes"],
                [
                  // HookConfig hookConfig (byte25)
                  encodePacked(
                    [
                      "address", // module address
                      "uint32", // entity ID
                      "uint8", // hook flags
                    ],
                    [
                      MODULAR_ACCOUNT_V2_ARTIFACTS.TimeRangeModule.address,
                      0,
                      1, // 0b00000001: !hasPre | !hasPost | HookType.VALIDATION
                    ],
                  ),
                  // bytes hookData
                  encodeAbiParameters(
                    [
                      {name: "entityId", type: "uint32"},
                      {name: "validUntil", type: "uint48"},
                      {name: "validAfter", type: "uint48"},
                    ],
                    [0, validUntil, validAfter],
                  ),
                ],
              ),
              encodePacked(
                ["bytes25", "bytes"],
                [
                  // HookConfig hookConfig (byte25)
                  encodePacked(
                    [
                      "address", // module address
                      "uint32", // entity ID
                      "uint8", // hook flags
                    ],
                    [
                      MODULAR_ACCOUNT_V2_ARTIFACTS.AllowlistModule.address,
                      0,
                      1, // 0b00000001: !hasPre | !hasPost | HookType.VALIDATION
                    ],
                  ),
                  // bytes hookData
                  encodeAbiParameters(allowlistModuleInstallData, [
                    0,
                    [
                      {
                        target: allowedTargetAddress,
                        hasSelectorAllowlist: false,
                        hasERC20SpendLimit: false,
                        erc20SpendLimit: 0n,
                        selectors: [],
                      },
                      {
                        target: allowedTokenAddress,
                        hasSelectorAllowlist: false,
                        hasERC20SpendLimit: true,
                        erc20SpendLimit: spendLimitWei,
                        selectors: [],
                      },
                    ],
                  ]),
                ],
              ),
              encodePacked(
                ["bytes25", "bytes"],
                [
                  // HookConfig hookConfig (byte25)
                  encodePacked(
                    [
                      "address", // module address
                      "uint32", // entity ID
                      "uint8", // hook flags
                    ],
                    [
                      MODULAR_ACCOUNT_V2_ARTIFACTS.AllowlistModule.address,
                      0,
                      4, // 0b00000100: hasPre | !hasPost | HookType.EXECUTION
                    ],
                  ),
                  // bytes hookData
                  "0x",
                ],
              ),
              encodePacked(
                ["bytes25", "bytes"],
                [
                  // HookConfig hookConfig (byte25)
                  encodePacked(
                    [
                      "address", // module address
                      "uint32", // entity ID
                      "uint8", // hook flags
                    ],
                    [
                      MODULAR_ACCOUNT_V2_ARTIFACTS.NativeTokenLimitModule
                        .address,
                      0,
                      1, // 0b00000001: !hasPre | !hasPost | HookType.VALIDATION
                    ],
                  ),
                  // bytes hookData
                  encodeAbiParameters(
                    [
                      {name: "entityId", type: "uint32"},
                      {name: "spendLimit", type: "uint256"},
                    ],
                    [0, spendLimitWei],
                  ),
                ],
              ),
            ],
          ],
        }),
      };
    },
    encodeSessionKeyERC20Transfer: (token, _sessionKeyAddress, to, amount) => {
      return concatHex([
        toFunctionSelector(
          getAbiItem({
            abi: MODULAR_ACCOUNT_V2_ARTIFACTS.ModularAccount.abi,
            name: "executeUserOp",
          }),
        ),
        encodeFunctionData({
          abi: [
            getAbiItem({
              abi: MODULAR_ACCOUNT_V2_ARTIFACTS.ModularAccount.abi,
              name: "execute",
            }),
          ],
          args: [
            token.address,
            0n,
            encodeFunctionData({
              abi: [
                getAbiItem({
                  abi: token.abi,
                  name: "transfer",
                }),
              ],
              args: [to, amount],
            }),
          ],
        }),
      ]);
    },
    encodeSessionKeyNativeTokenTransfer: (_sessionKeyAddress, to, amount) => {
      return concatHex([
        toFunctionSelector(
          getAbiItem({
            abi: MODULAR_ACCOUNT_V2_ARTIFACTS.ModularAccount.abi,
            name: "executeUserOp",
          }),
        ),
        encodeFunctionData({
          abi: [
            getAbiItem({
              abi: MODULAR_ACCOUNT_V2_ARTIFACTS.ModularAccount.abi,
              name: "execute",
            }),
          ],
          args: [to, amount, "0x"],
        }),
      ]);
    },
    getSessionKeySignature: async (sessionKeySigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await sessionKeySigner.signMessage({
        message: {raw: userOpHash},
      });
      return concatHex([
        toHex(maxUint8, {size: 1}), // RESERVED_VALIDATION_DATA_INDEX
        toHex(SignatureType.EOA, {size: 1}),
        signature,
      ]);
    },
    getSessionKeyNonce: async (accountAddress) => {
      const key = encodePacked(
        ["uint152", "uint32", "uint8"],
        [
          0n, // Parallel nonce key
          sessionKeyEntityId, // Validation entity ID
          ValidationType.GLOBAL, // Validation type
        ],
      );
      return await entryPoint.read.getNonce([accountAddress, hexToBigInt(key)]);
    },
  };
}

export const modularAccountV2: AccountConfig = {
  name: "Modular Account v2",
  accountFixture,
};
