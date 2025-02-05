import hre from "hardhat";
import {
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  hexToBigInt,
  keccak256,
} from "viem";
import {AccountConfig, AccountDataV06} from "../accounts";
import {BICONOMY_V2_ARTIFACTS} from "../artifacts/biconomyV2";
import {getEntryPointV06} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV06> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(BICONOMY_V2_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  await hre.network.provider.send("evm_setNextBlockTimestamp", [2_000_000_000]); // Set the time to 2 billion

  const biconomyV2Factory = getContract({
    address: BICONOMY_V2_ARTIFACTS.SmartAccountFactory.address,
    abi: BICONOMY_V2_ARTIFACTS.SmartAccountFactory.abi,
    client: walletClient,
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

  const entryPoint = getEntryPointV06({walletClient});

  return {
    entryPoint,
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
    getOwnerSignature: async (ownerSigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await ownerSigner.signMessage({
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
    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([accountAddress, 0n]);
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
    encodeSessionKeyCreate: (
      sessionKeySigner,
      allowedTargetAddress,
      allowedTokenAddress,
      spendLimitWei,
      accountAddress,
    ) => {
      const validUntil = hexToBigInt("0x7d2b7500"); // 2_100_000_000
      const validAfter = hexToBigInt("0x713fb300"); // 1_900_000_000
      const erc20ValidationModuleData = encodeAbiParameters(
        [
          {name: "sessionKey", type: "address"},
          {name: "token", type: "address"},
          {name: "recipient", type: "address"},
          {name: "maxAmount", type: "uint256"},
        ],
        [
          sessionKeySigner.account.address,
          allowedTokenAddress,
          allowedTargetAddress,
          spendLimitWei,
        ],
      );

      keyDataHolder.validUntil = validUntil;
      keyDataHolder.validAfter = validAfter;
      keyDataHolder.moduleData = erc20ValidationModuleData;

      return {
        callData: encodeFunctionData({
          abi: [
            getAbiItem({
              abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
              name: "executeBatch",
            }),
          ],
          args: [
            [accountAddress, BICONOMY_V2_ARTIFACTS.SessionKeyManager.address],
            [0n, 0n],
            [
              encodeFunctionData({
                abi: [
                  getAbiItem({
                    abi: BICONOMY_V2_ARTIFACTS.SmartAccount.abi,
                    name: "enableModule",
                  }),
                ],
                args: [BICONOMY_V2_ARTIFACTS.SessionKeyManager.address],
              }),
              encodeFunctionData({
                abi: [
                  getAbiItem({
                    abi: BICONOMY_V2_ARTIFACTS.SessionKeyManager.abi,
                    name: "setMerkleRoot",
                  }),
                ],
                args: [
                  keccak256(
                    encodePacked(
                      ["uint48", "uint48", "address", "bytes"],
                      [
                        Number(validUntil),
                        Number(validAfter),
                        BICONOMY_V2_ARTIFACTS.ERC20SessionValidationModule
                          .address,
                        erc20ValidationModuleData,
                      ],
                    ),
                  ),
                ],
              }),
            ],
          ],
        }),
      };
    },
    encodeSessionKeyERC20Transfer: (token, _sessionKeyAddress, to, amount) => {
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
    // encodeSessionKeyNativeTokenTransfer: (sessionKeyAddress, to, amount) => {
    //     // Unsupported by Biconomy v2
    // }
    getSessionKeySignature: async (sessionKeySigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const keySignature = await sessionKeySigner.signMessage({
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
  };
}

export const biconomyV2: AccountConfig = {
  name: "Biconomy v2",
  accountFixture,
};
