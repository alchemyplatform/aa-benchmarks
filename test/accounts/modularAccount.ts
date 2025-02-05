import hre from "hardhat";
import {
  concat,
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
} from "viem";
import {AccountConfig, AccountDataV06} from "../accounts";
import {MODULAR_ACCOUNT_ARTIFACTS} from "../artifacts/modularAccount";
import {getEntryPointV06} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV06> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(MODULAR_ACCOUNT_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const multiOwnerModularAccountFactory = getContract({
    address: MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerModularAccountFactory.address,
    abi: MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerModularAccountFactory.abi,
    client: walletClient,
  });

  const entryPoint = getEntryPointV06({walletClient});

  return {
    entryPoint,
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
    encodeUserOpExecute: (to, value, data) => {
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
    encodeRuntimeExecute: async (to, value, data) => {
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
              abi: MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.abi,
              name: "installPlugin",
            }),
          ],
          args: [
            MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.address,
            "0x178289dadbf8d06fc233b07a6d6dbf251f100cd96cec78989f1ca58cb67b3ec5", // H(plugin manifest)
            encodeAbiParameters(
              [
                {name: "sessionKeysToAdd", type: "address[]"},
                {name: "tags", type: "bytes32[]"},
                {name: "permissionUpdates", type: "bytes[][]"},
              ],
              [
                [sessionKeySigner.account.address],
                [
                  "0x0000000000000000000000000000000000000000000000000000000000000000",
                ],
                [
                  [
                    encodeFunctionData({
                      abi: [
                        getAbiItem({
                          abi: MODULAR_ACCOUNT_ARTIFACTS
                            .ISessionKeyPermissionsUpdate.abi,
                          name: "updateAccessListAddressEntry",
                        }),
                      ],
                      args: [allowedTokenAddress, true, false],
                    }),
                    encodeFunctionData({
                      abi: [
                        getAbiItem({
                          abi: MODULAR_ACCOUNT_ARTIFACTS
                            .ISessionKeyPermissionsUpdate.abi,
                          name: "setERC20SpendLimit",
                        }),
                      ],
                      args: [allowedTokenAddress, spendLimitWei, 0],
                    }),
                    encodeFunctionData({
                      abi: [
                        getAbiItem({
                          abi: MODULAR_ACCOUNT_ARTIFACTS
                            .ISessionKeyPermissionsUpdate.abi,
                          name: "updateAccessListAddressEntry",
                        }),
                      ],
                      args: [allowedTargetAddress, true, false],
                    }),
                    encodeFunctionData({
                      abi: [
                        getAbiItem({
                          abi: MODULAR_ACCOUNT_ARTIFACTS
                            .ISessionKeyPermissionsUpdate.abi,
                          name: "setNativeTokenSpendLimit",
                        }),
                      ],
                      args: [spendLimitWei, 0],
                    }),
                  ],
                ],
              ],
            ),
            [
              concat([
                MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerPlugin.address,
                "0x01",
              ]),
              concat([
                MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerPlugin.address,
                "0x00",
              ]),
            ],
          ],
        }),
      };
    },
    getSessionKeySignature: async (sessionKeySigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      return await sessionKeySigner.signMessage({
        message: {raw: userOpHash},
      });
    },
    encodeSessionKeyERC20Transfer: (token, sessionKeyAddress, to, amount) => {
      const transferCall = encodeFunctionData({
        abi: [
          getAbiItem({
            abi: token.abi,
            name: "transfer",
          }),
        ],
        args: [to, amount],
      });

      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
            name: "executeWithSessionKey",
          }),
        ],
        args: [
          [{target: token.address, value: BigInt(0), data: transferCall}],
          sessionKeyAddress,
        ],
      });
    },
    encodeSessionKeyNativeTokenTransfer: (sessionKeyAddress, to, amount) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
            name: "executeWithSessionKey",
          }),
        ],
        args: [[{target: to, value: amount, data: "0x"}], sessionKeyAddress],
      });
    },
  };
}

export const modularAccount: AccountConfig = {
  name: "Alchemy Modular Account",
  accountFixture,
};
