import {
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  hexToBigInt,
  keccak256,
  parseEther,
  toHex,
  walletActions,
} from "viem";
import {AccountConfig, AccountFixtureReturnType} from "../benchmark";

import hre from "hardhat";
import {BICONOMY_V2_ARTIFACTS} from "../artifacts/biconomy-v2";
import {ENTRY_POINT_ARTIFACTS} from "../artifacts/entryPoint";

async function accountFixture(): Promise<AccountFixtureReturnType> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();
  const testClient = (await hre.viem.getTestClient()).extend(walletActions);

  for (const {address, bytecode} of Object.values(BICONOMY_V2_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  await hre.network.provider.send("evm_setNextBlockTimestamp", [2_000_000_000]); // Set the time to 2 billion

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

  const keyDataHolder: any = {
    validUntil: null,
    validAfter: null,
    moduleData: null,
  };

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
        message: {raw: userOpHash},
      });
      return encodeAbiParameters(
        [
          {name: "signature", type: "bytes"},
          {name: "module", type: "address"},
        ],
        [signature, BICONOMY_V2_ARTIFACTS.EcdsaOwnershipRegistryModule.address],
      );
    },
    encodeUserOpExecute: (to, value, data) => {
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
      return encodeAbiParameters(
        [
          {name: "signature", type: "bytes"},
          {name: "module", type: "address"},
        ],
        [
          "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
          BICONOMY_V2_ARTIFACTS.EcdsaOwnershipRegistryModule.address,
        ],
      );
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

      await testClient.impersonateAccount({
        address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address,
      }); // Mock a self-call to allow the call through
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
      await testClient.stopImpersonatingAccount({
        address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address,
      }); // Stop mocking the self-call

      // If we want to test using batched session routing, we need to also install that module as below.
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
    addSessionKeyCalldata: (key, target, tokens, spendLimit, account) => {
      // todo: construct the merkle tree with the permissions.
      // temp: construct using only 1 key, which is the one that is signed with. Use this as the merkle root.

      const erc20ValidationModuleData = encodeAbiParameters(
        [
          {name: "sessionKeyAddr", type: "address"},
          {name: "tokenAddr", type: "address"},
          {name: "recipientAddr", type: "address"},
          {name: "nonce", type: "uint256"},
        ],
        [key, tokens[0].address, target, spendLimit],
      );

      const validUntil = hexToBigInt("0x7d2b7500"); // 2_100_000_000
      const validAfter = hexToBigInt("0x713fb300"); // 1_900_000_000

      keyDataHolder.validUntil = validUntil;
      keyDataHolder.validAfter = validAfter;
      keyDataHolder.moduleData = erc20ValidationModuleData;

      const leafData = encodePacked(
        ["uint48", "uint48", "address", "bytes"],
        [
          Number(validUntil),
          Number(validAfter),
          BICONOMY_V2_ARTIFACTS.ERC20SessionValidationModule.address,
          erc20ValidationModuleData,
        ],
      );

      const leafHash = keccak256(leafData);

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
            args: [leafHash],
          }),
        ],
      });
    },
    getSessionKeySignature: async (key, userOp, entryPoint) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const keySignature = await key.signMessage({
        message: {raw: userOpHash},
      });

      const moduleSignature = encodeAbiParameters(
        [
          {name: "validUntil", type: "uint48"},
          {name: "validAfter", type: "uint48"},
          {name: "sessionValidationModule", type: "address"},
          {name: "validatorData", type: "bytes"},
          {name: "proof", type: "bytes32[]"},
          {name: "sessionKeySignature", type: "bytes"},
        ],
        [
          Number(keyDataHolder.validUntil),
          Number(keyDataHolder.validAfter),
          BICONOMY_V2_ARTIFACTS.ERC20SessionValidationModule.address,
          keyDataHolder.moduleData,
          [],
          keySignature,
        ],
      );

      return encodeAbiParameters(
        [
          {name: "signature", type: "bytes"},
          {name: "module", type: "address"},
        ],
        [moduleSignature, BICONOMY_V2_ARTIFACTS.SessionKeyManager.address],
      );
    },
    useSessionKeyERC20TransferCalldata: (token, key, to, amount) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
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
      });
    },
    // useSessionKeyNativeTokenTransferCalldata: (key, to, amount) => {
    //     // Unsupported by Biconomy v2
    // }
  };
}

export const biconomy_v2: AccountConfig = {
  name: "Biconomy v2",
  accountFixture,
};
