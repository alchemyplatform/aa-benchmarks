import {AccountConfig, AccountFixtureReturnType} from "../benchmark";
import {
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  keccak256,
  encodeFunctionResult,
  encodeAbiParameters,
} from "viem";

import {MODULAR_ACCOUNT_ARTIFACTS} from "../artifacts/modularAccount";
import {ERC20_APPROVE_SELECTOR, ERC20_TRANSFER_SELECTOR} from "../utils/consts";
import hre from "hardhat";

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
    getOwnerSignature: async (owner, userOp, entryPoint) => {
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
    installSessionKeyPlugin: async (accountAddr, ownerAddress) => {
      const account = getContract({
        address: accountAddr,
        abi: MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.abi,
        publicClient,
        walletClient,
      });

      const sessionKeyPlugin = getContract({
        address: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.address,
        abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
        publicClient,
        walletClient,
      });

      return await account.write.installPlugin([
        MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.address,
        "0x178289dadbf8d06fc233b07a6d6dbf251f100cd96cec78989f1ca58cb67b3ec5", // H(plugin manifest)
        "0x0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", // abi.encode(new address[](0), new bytes32[](0), new bytes[][](0))
        [
          MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerPlugin.address + "0",
          MODULAR_ACCOUNT_ARTIFACTS.MultiOwnerPlugin.address + "1",
        ],
      ]);
    },
    addSessionKeyCalldata: (keys, target, tokens) => {
      // add permissions for tokens
      const permissions = tokens.flatMap((token) => [
        encodeFunctionData({
          abi: [
            getAbiItem({
              abi: MODULAR_ACCOUNT_ARTIFACTS.ISessionKeyPermissionsUpdate.abi,
              name: "updateAccessListAddressEntry",
            }),
          ],
          args: [token.address, true, true],
        }),
        encodeFunctionData({
          abi: [
            getAbiItem({
              abi: MODULAR_ACCOUNT_ARTIFACTS.ISessionKeyPermissionsUpdate.abi,
              name: "updateAccessListFunctionEntry",
            }),
          ],
          args: [token.address, ERC20_APPROVE_SELECTOR, true],
        }),
        encodeFunctionData({
          abi: [
            getAbiItem({
              abi: MODULAR_ACCOUNT_ARTIFACTS.ISessionKeyPermissionsUpdate.abi,
              name: "updateAccessListFunctionEntry",
            }),
          ],
          args: [token.address, ERC20_TRANSFER_SELECTOR, true],
        }),
      ]);
      // add target
      permissions.push(
        encodeFunctionData({
          abi: [
            getAbiItem({
              abi: MODULAR_ACCOUNT_ARTIFACTS.ISessionKeyPermissionsUpdate.abi,
              name: "updateAccessListAddressEntry",
            }),
          ],
          args: [target, true, true],
        }),
      );

      return keys.length == 1
        ? encodeFunctionData({
            abi: [
              getAbiItem({
                abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
                name: "addSessionKey",
              }),
            ],
            args: [keys[0], "0x", permissions],
          })
        : encodeFunctionData({
            abi: [
              getAbiItem({
                abi: MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.abi,
                name: "executeBatch",
              }),
            ],
            args: [
              keys.map((key) => ({
                target:
                  MODULAR_ACCOUNT_ARTIFACTS.UpgradeableModularAccount.address, //selfcall
                value: BigInt(0),
                data: encodeFunctionData({
                  abi: [
                    getAbiItem({
                      abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
                      name: "addSessionKey",
                    }),
                  ],
                  args: [
                    key,
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    permissions,
                  ],
                }),
              })),
            ],
          });
    },
    getSessionKeySignature: async (key, message) => {
      return await key.signMessage({
        message: {raw: message},
      });
    },
    useSessionKeyERC20TransferCalldata: (token, key, to, amount) => {
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
          key,
        ],
      });
    },
    useSessionKeyNativeTokenTransferCalldata: (key, to, amount) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: MODULAR_ACCOUNT_ARTIFACTS.SessionKeyPlugin.abi,
            name: "executeWithSessionKey",
          }),
        ],
        args: [[{target: to, value: amount, data: "0x"}], key],
      });
    },
  };
}

export const modularAccount: AccountConfig = {
  name: "Modular Account",
  fixture,
};
