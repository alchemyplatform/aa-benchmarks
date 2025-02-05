import hre from "hardhat";
import {
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  Hex,
  hexToBigInt,
  keccak256,
  pad,
  parseAbiParameters,
  parseEther,
  size,
  toFunctionSelector,
  toHex,
  walletActions,
  zeroAddress,
} from "viem";
import {AccountConfig, AccountDataV06} from "../accounts";
import {KERNEL_ARTIFACTS} from "../artifacts/kernel";
import {getEntryPointV06} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV06> {
  const [walletClient] = await hre.viem.getWalletClients();
  const testClient = (await hre.viem.getTestClient()).extend(walletActions);

  for (const {address, bytecode} of Object.values(KERNEL_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  await hre.network.provider.send("evm_setNextBlockTimestamp", [2_000_000_000]); // Set the time to 2 billion

  const kernelFactory = getContract({
    address: KERNEL_ARTIFACTS.KernelFactory.address,
    abi: KERNEL_ARTIFACTS.KernelFactory.abi,
    client: walletClient,
  });

  const dummySig =
    "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";

  await testClient.impersonateAccount({address: zeroAddress});
  await hre.network.provider.send("hardhat_setBalance", [
    zeroAddress,
    toHex(parseEther("10000")),
  ]);
  await testClient.writeContract({
    address: KERNEL_ARTIFACTS.KernelFactory.address,
    abi: KERNEL_ARTIFACTS.KernelFactory.abi,
    functionName: "setImplementation",
    args: [KERNEL_ARTIFACTS.Kernel.address, true],
    account: zeroAddress,
  });
  await testClient.stopImpersonatingAccount({address: zeroAddress});

  const permissionAbi = parseAbiParameters([
    "Permission permission",
    "struct Permission { address target; uint256 valueLimit; bytes4 sig; ParamRule[] rules; uint8 operation; }",
    "struct ParamRule { uint256 offset; uint8 condition; bytes32 param; }",
  ]);

  const validUntil = Number(hexToBigInt("0x7d2b7500")); // 2_100_000_000
  const validAfter = Number(hexToBigInt("0x713fb300")); // 1_900_000_000

  let permissionObjects: any[] = [];
  let leaves: Hex[] = [];
  let merkleProofs: Hex[][] = [];

  const initializeBytecode = (owner: `0x${string}`) =>
    encodeFunctionData({
      abi: [
        getAbiItem({
          abi: KERNEL_ARTIFACTS.Kernel.abi,
          name: "initialize",
        }),
      ],
      args: [
        KERNEL_ARTIFACTS.KernelECDSAValidator.address,
        encodePacked(["address"], [owner]),
      ],
    });

  const entryPoint = getEntryPointV06({walletClient});

  return {
    entryPoint,
    createAccount: async (salt, ownerAddress) => {
      return await kernelFactory.write.createAccount([
        KERNEL_ARTIFACTS.Kernel.address,
        initializeBytecode(ownerAddress),
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      return await kernelFactory.read.getAccountAddress([
        initializeBytecode(ownerAddress),
        salt,
      ]);
    },
    getOwnerSignature: async (ownerSigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await ownerSigner.signMessage({
        message: {raw: userOpHash},
      });
      return encodePacked(["bytes4", "bytes"], ["0x00000000", signature]);
    },
    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([accountAddress, 0n]);
    },
    getDummySignature: (_userOp) => {
      return encodePacked(["bytes4", "bytes"], ["0x00000000", dummySig]);
    },
    getInitCode: (salt, ownerAddress) => {
      return encodePacked(
        ["address", "bytes"],
        [
          kernelFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: KERNEL_ARTIFACTS.KernelFactory.abi,
                name: "createAccount",
              }),
            ],
            args: [
              KERNEL_ARTIFACTS.Kernel.address,
              initializeBytecode(ownerAddress),
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
            abi: KERNEL_ARTIFACTS.Kernel.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data, 0], // Operation.CALL = 0
      });
    },
    encodeRuntimeExecute: async (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: KERNEL_ARTIFACTS.Kernel.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data, 0], // Operation.CALL = 0
      });
    },
    encodeSessionKeyCreate: (
      sessionKeySigner,
      allowedTargetAddress,
      allowedTokenAddress,
      spendLimitWei,
      accountAddress,
    ) => {
      // NOTE: this only works if the hashes of the permission objects are sorted.
      permissionObjects = [
        // For ERC-20 transfers
        {
          valueLimit: 0n,
          target: allowedTokenAddress,
          sig: "0xa9059cbb" as `0x${string}`, // transfer(address,uint256)
          rules: [
            {
              offset: BigInt(32), // offset of amount
              condition: 4, // LESS_THAN_OR_EQUAL
              param: pad(toHex(spendLimitWei), {size: 32, dir: "left"}),
            },
          ],
          operation: 0,
        },
        // For native transfers
        {
          valueLimit: spendLimitWei,
          target: allowedTargetAddress,
          sig: "0x00000000" as `0x${string}`,
          rules: [],
          operation: 0,
        },
      ];
      leaves = permissionObjects.map((x) =>
        keccak256(encodeAbiParameters(permissionAbi, [x])),
      );
      merkleProofs = [[leaves[1]], [leaves[0]]];

      return {
        callData: encodeFunctionData({
          abi: [
            getAbiItem({
              abi: KERNEL_ARTIFACTS.Kernel.abi,
              name: "execute",
            }),
          ],
          args: [
            allowedTargetAddress,
            0n,
            "0x00000000",
            0, // Operation.CALL = 0
          ],
        }),
        getSessionKeyCreateSignature: async (ownerSigner, userOp) => {
          const merkleRoot = keccak256(
            encodePacked(["bytes32", "bytes32"], [leaves[0], leaves[1]]),
          );

          const enableData = encodePacked(
            ["address", "bytes32", "uint48", "uint48", "address"],
            [
              sessionKeySigner.account.address, // session key
              merkleRoot, // merkle root
              validAfter, // valid after
              validUntil, // valid until
              zeroAddress, // paymaster
            ],
          );

          const enableSignature = await ownerSigner.signTypedData({
            domain: {
              name: "Kernel",
              version: "0.2.1",
              chainId: 31337,
              verifyingContract: accountAddress,
            },
            types: {
              ValidatorApproved: [
                {name: "sig", type: "bytes4"},
                {name: "validatorData", type: "uint256"},
                {name: "executor", type: "address"},
                {name: "enableData", type: "bytes"},
              ],
            },
            primaryType: "ValidatorApproved",
            message: {
              sig: toFunctionSelector(
                getAbiItem({abi: KERNEL_ARTIFACTS.Kernel.abi, name: "execute"}),
              ),
              validatorData: hexToBigInt(
                encodePacked(
                  ["uint48", "uint48", "address"],
                  [
                    validAfter,
                    validUntil,
                    KERNEL_ARTIFACTS.KernelSessionKeyValidator.address,
                  ],
                ),
              ),
              executor: zeroAddress,
              enableData: enableData,
            },
          });

          const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
          const signature = await sessionKeySigner.signMessage({
            message: {raw: userOpHash},
          });

          return encodePacked(
            [
              "bytes4", // mode
              "uint48", // validAfter
              "uint48", // validUntil
              "address", // validatorAddress
              "address", // executorAddress
              "uint256", // enableDataLength
              "bytes", // enableData
              "uint256", // enableSignatureLength
              "bytes", // enableSignature
              // start of validator-specific signature
              "address", // session key
              "bytes", // uo hash session key signature
              "bytes", // Permission used (including merkle proof)
            ],
            [
              "0x00000002",
              validAfter,
              validUntil,
              KERNEL_ARTIFACTS.KernelSessionKeyValidator.address,
              zeroAddress,
              BigInt(size(enableData)),
              enableData,
              BigInt(size(enableSignature)),
              enableSignature,
              sessionKeySigner.account.address,
              signature,
              encodeAbiParameters(
                [...permissionAbi, {name: "proof", type: "bytes32[]"}],
                [permissionObjects[1], merkleProofs[1]],
              ),
            ],
          );
        },
      };
    },
    encodeSessionKeyERC20Transfer: (token, _sessionKeyAddress, to, amount) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: KERNEL_ARTIFACTS.Kernel.abi,
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
          0, // Operation.CALL = 0
        ],
      });
    },
    encodeSessionKeyNativeTokenTransfer: (_sessionKeyAddress, to, amount) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: KERNEL_ARTIFACTS.Kernel.abi,
            name: "execute",
          }),
        ],
        args: [
          to,
          amount,
          "0x00000000", // data, needs to be the zero selector for the session key permission
          0, // Operation.CALL = 0
        ],
      });
    },
    getSessionKeySignature: async (sessionKeySigner, userOp) => {
      // for now, assume it is the session key used to perform the erc-20 transfer

      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const keySignature = await sessionKeySigner.signMessage({
        message: {raw: userOpHash},
      });

      if (userOp.callData.slice(330, 338) === "a9059cbb") {
        // calling "transfer" on an erc-20 token
        return encodePacked(
          [
            "bytes4", // mode
            "address", // session key
            "bytes", // uo hash session key signature
            "bytes", // Permission used (including merkle proof)
          ],
          [
            "0x00000001",
            sessionKeySigner.account.address,
            keySignature,
            encodeAbiParameters(
              [...permissionAbi, {name: "proof", type: "bytes32[]"}],
              [permissionObjects[0], merkleProofs[0]],
            ),
          ],
        );
      } else {
        // This is the native transfer test

        return encodePacked(
          [
            "bytes4", // mode
            "address", // session key
            "bytes", // uo hash session key signature
            "bytes", // Permission used (including merkle proof)
          ],
          [
            "0x00000001",
            sessionKeySigner.account.address,
            keySignature,
            encodeAbiParameters(
              [...permissionAbi, {name: "proof", type: "bytes32[]"}],
              [permissionObjects[1], merkleProofs[1]],
            ),
          ],
        );
      }
    },
  };
}

export const kernel: AccountConfig = {
  name: "Kernel v2.1",
  accountFixture,
};
