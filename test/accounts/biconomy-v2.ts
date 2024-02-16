import {AccountConfig, AccountFixtureReturnType} from "../benchmark";
import {
  encodeFunctionData,
  encodePacked,
  encodeAbiParameters,
  getAbiItem,
  getContract,
  parseEther,
  toHex,
  walletActions,
  zeroAddress,
} from "viem";

import { BICONOMY_V2_ARTIFACTS } from "../artifacts/biconomy-v2";
import { ENTRY_POINT_ARTIFACTS } from "../artifacts/entryPoint";
import hre from "hardhat";

async function fixture(): Promise<AccountFixtureReturnType> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();
  const testClient = (await hre.viem.getTestClient()).extend(walletActions);

  for (const {address, bytecode} of Object.values(BICONOMY_V2_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const biconomyV2Factory = getContract({
    address: BICONOMY_V2_ARTIFACTS.SmartAccountFactory.address,
    abi: BICONOMY_V2_ARTIFACTS.SmartAccountFactory.abi,
    publicClient,
    walletClient,
  });

  // Helper function for generating "module setup data"
  const getModuleSetupData = (owner: `0x${string}`) =>
    encodeFunctionData({
      abi: [
        getAbiItem({
          abi: BICONOMY_V2_ARTIFACTS.EcdsaOwnershipRegistryModule.abi,
          name: "initForSmartAccount",
        }),
      ],
      args: [owner],
    });
    
    return {
        createAccount: async (salt, ownerAddress) => {
            return await biconomyV2Factory.write.deployCounterFactualAccount([
                BICONOMY_V2_ARTIFACTS.EcdsaOwnershipRegistryModule.address,
                getModuleSetupData(ownerAddress),
                salt,
            ]);
        },
        getAccountAddress: async (salt, ownerAddress) => {
            return await biconomyV2Factory.read.getAddressForCounterFactualAccount([
                BICONOMY_V2_ARTIFACTS.EcdsaOwnershipRegistryModule.address,
                getModuleSetupData(ownerAddress),
                salt,
            ]);
        },
        getOwnerSignature: async (owner, userOp, entryPoint) => {
            const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
            const signature = await owner.signMessage({
                message: { raw: userOpHash },
            });
            return encodeAbiParameters([
                { name: 'signature', type: 'bytes' },
                { name: 'module', type: 'address' },
            ], [
                signature,
                BICONOMY_V2_ARTIFACTS.EcdsaOwnershipRegistryModule.address,
            ])
        },
        encodeExecute: (to, value, data) => {
            return encodeFunctionData({
                abi: [
                    getAbiItem({
                        abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
                        name: "execute",
                    }),
                ],
                args: [to, value, data],
            });
        },
        getDummySignature: (_userOp) => {
            return encodeAbiParameters([
                { name: 'signature', type: 'bytes' },
                { name: 'module', type: 'address' },
            ], [
                "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
                BICONOMY_V2_ARTIFACTS.EcdsaOwnershipRegistryModule.address,
            ])
        },
        getInitCode: (salt, ownerAddress) => {
            return encodePacked(
                ["address", "bytes"],
                [
                    biconomyV2Factory.address,
                    encodeFunctionData({
                        abi: [
                            getAbiItem({
                                abi: BICONOMY_V2_ARTIFACTS.SmartAccountFactory.abi,
                                name: "deployCounterFactualAccount",
                            }),
                        ],
                        args: [
                            BICONOMY_V2_ARTIFACTS.EcdsaOwnershipRegistryModule.address,
                            getModuleSetupData(ownerAddress),
                            salt,
                        ],
                    }),
                ],
            );
        },
        installSessionKeyPlugin: async (accountAddr, ownerAddress) => {

            // const biconomyAccount = getContract({
            //     address: accountAddr,
            //     abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
            //     publicClient,
            //     walletClient,
            // });

            await testClient.impersonateAccount({ address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address }); // Mock a self-call to allow the call through
            await hre.network.provider.send("hardhat_setBalance", [
                ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address,
                toHex(parseEther("10000")),
              ]);
            await testClient.writeContract({
                address: accountAddr,
                abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
                functionName: "enableModule",
                args: [BICONOMY_V2_ARTIFACTS.SessionKeyManager.address],
                account: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address,
            });
            await testClient.stopImpersonatingAccount({ address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address }); // Stop mocking the self-call

            // return await biconomyAccount.write.executeBatch([
            //     [accountAddr, accountAddr],
            //     [0n, 0n],
            //     [
            //         encodeFunctionData({
            //             abi: [
            //                 getAbiItem({
            //                     abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
            //                     name: "enableModule",
            //                 })
            //             ],
            //             args: [
            //                 BICONOMY_V2_ARTIFACTS.SessionKeyManager.address
            //             ]
            //         }),
            //         encodeFunctionData({
            //             abi: [
            //                 getAbiItem({
            //                     abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
            //                     name: "enableModule",
            //                 })
            //             ],
            //             args: [
            //                 BICONOMY_V2_ARTIFACTS.BatchedSessionRouterModule.address
            //             ]
            //         }),
            //     ]
            // ]);
        },
        addSessionKeyCalldata: (keys, target, tokens) => {
            // todo: construct the merkle tree with the permissions.

            return encodeFunctionData({
                abi: [
                    getAbiItem({
                        abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
                        name: "execute",
                    }),
                ],
                args: [
                    BICONOMY_V2_ARTIFACTS.SessionKeyManager.address,
                    0n,
                    encodeFunctionData({
                        abi: [
                            getAbiItem({
                                abi: BICONOMY_V2_ARTIFACTS.SessionKeyManager.abi,
                                name: "setMerkleRoot",
                            }),
                        ],
                        args: ["0x1234123412341234123412341234123412341234123412341234123412341234"],
                    }),
                ],
            });
        },
        getSessionKeySignature: async (key, message) => {
            return await key.signMessage({
              message: {raw: message},
            });
        },
        useSessionKeyERC20TransferCalldata: (token, key, to, amount) => {
            // todo: implement this
            return "0x";
        },
        // useSessionKeyNativeTokenTransferCalldata: (key, to, amount) => {
        //     // Unsupported by Biconomy v2
        // }

    };
}

export const biconomy_v2: AccountConfig = {
  name: "Biconomy v2",
  fixture,
};
