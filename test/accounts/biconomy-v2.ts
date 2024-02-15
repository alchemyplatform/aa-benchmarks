import { AccountConfig, AccountFixtureReturnType } from "../benchmark";
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
import hre from "hardhat";

async function fixture(): Promise<AccountFixtureReturnType> {
    const [walletClient] = await hre.viem.getWalletClients();
    const publicClient = await hre.viem.getPublicClient();
    const testClient = (await hre.viem.getTestClient()).extend(walletActions);

    for (const { address, bytecode } of Object.values(BICONOMY_V2_ARTIFACTS)) {
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
        getSignature: async (owner, userOp, entryPoint) => {
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
    };
}

export const biconomy_v2: AccountConfig = {
    name: "Biconomy v2",
    fixture,
};
