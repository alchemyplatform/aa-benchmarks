import hre from "hardhat";
import {
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  getFunctionSelector,
  hexToBigInt,
  keccak256,
  pad,
  parseAbiParameters,
  parseEther,
  toHex,
  walletActions,
  zeroAddress,
} from "viem";
import {AccountConfig, AccountDataV06} from "../accounts";
import {KERNEL_ARTIFACTS} from "../artifacts/kernel";
import {getEntryPointV06} from "../utils/entryPoint";
import {getUnsignedUserOp} from "../utils/userOp";

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

  const keyDataHolder = {
    permissionObjects: null as any[] | null,
    permissionHashes: null as `0x${string}`[] | null,
  };

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
    getOwnerSignature: async (owner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await owner.signMessage({
        message: {raw: userOpHash},
      });
      return encodePacked(["bytes4", "bytes"], ["0x00000000", signature]);
    },
    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([accountAddress, 0n]);
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
    installSessionKeyPlugin: async (accountAddr, owner) => {
      const sessionKeyValidator = getContract({
        address: KERNEL_ARTIFACTS.KernelSessionKeyValidator.address,
        abi: KERNEL_ARTIFACTS.KernelSessionKeyValidator.abi,
        client: owner,
      });

      const executeSelector = getFunctionSelector(
        getAbiItem({
          abi: KERNEL_ARTIFACTS.Kernel.abi,
          name: "execute",
        }),
      );

      const userOp = getUnsignedUserOp({
        sender: accountAddr,
        nonce: 0n,
        initCode: "0x" as `0x${string}`,
        callData: encodeFunctionData({
          abi: [
            getAbiItem({
              abi: KERNEL_ARTIFACTS.Kernel.abi,
              name: "execute",
            }),
          ],
          args: [zeroAddress, 0n, executeSelector, 0], // calling "execute" on the zero address
        }),
        getDummySignature: (userOp) => `0x`,
      });

      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);

      const validUntil = Number(hexToBigInt("0x7d2b7500")); // 2_100_000_000
      const validAfter = Number(hexToBigInt("0x713fb300")); // 1_900_000_000

      const permissionEncoding = encodeAbiParameters(permissionAbi, [
        {
          valueLimit: 0n,
          target: zeroAddress,
          sig: executeSelector,
          rules: [],
          operation: 0,
        },
      ]);
      const leafHash = keccak256(permissionEncoding);

      const sessionKey = owner; // re-use the owner as an initial session key, will get added later

      const merkleRoot = leafHash; // Tree of size 1

      const enableDataInstallValidator = encodePacked(
        ["address", "bytes32", "uint48", "uint48", "address"],
        [
          sessionKey.account.address, // session key
          merkleRoot, // merkle root
          validAfter, // validafter
          validUntil, // validuntil
          zeroAddress, // paymaster
        ],
      );

      const validatorData = encodePacked(
        ["uint48", "uint48", "address"],
        [
          validAfter,
          validUntil,
          KERNEL_ARTIFACTS.KernelSessionKeyValidator.address,
        ],
      );

      const enableSig = await owner.signTypedData({
        domain: {
          name: "Kernel",
          version: "0.2.1",
          chainId: 31337,
          verifyingContract: accountAddr,
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
          sig: executeSelector,
          validatorData: hexToBigInt(validatorData),
          executor: zeroAddress,
          enableData: enableDataInstallValidator,
        },
      });

      // await sessionKeyValidator.write.enable([
      //   enableDataInstallValidator])

      /**
       * userop sig structure:
       *
       * 0:4        - mode                0x00000002 for JIT
       * 4:10       - validAfter
       * 10:16      - validUntil
       * 16:36      - validator addr
       * 36:56      - executor            (accountAddr)
       * 56:88      - enableDataLen (a)
       * 88:88+a    - enableData
       * 88+a:110+a - enableSigLen (b)
       * 110+a:110+a+b - enableSig (c)
       * 110+a+b:    - userOpSig
       */
      userOp.signature = encodePacked(
        [
          "bytes4", // Mode
          "uint48", // validAfter (validator)
          "uint48", // validUntil (validator)
          "address", // validator
          "address", // executor
          "uint256", // enableDataLen
          "bytes", // enableData
          "uint256", // enableSigLen
          "bytes", // enableSig
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
          zeroAddress, // executor
          BigInt((enableDataInstallValidator.length - 2) / 2), // enableDataLen
          enableDataInstallValidator,
          BigInt(65),
          enableSig,
          sessionKey.account.address,
          await sessionKey.signMessage({
            message: {raw: userOpHash},
          }),
          encodeAbiParameters(
            [...permissionAbi, {name: "proof", type: "bytes32[]"}],
            [
              {
                valueLimit: 0n,
                target: zeroAddress,
                sig: executeSelector,
                rules: [],
                operation: 0,
              },
              [],
            ],
          ),
        ],
      );

      // console.log("is installed: ", await sessionKeyValidator.read.sessionData([sessionKey.account.address, accountAddr]));

      await entryPoint.write.handleOps([[userOp], owner.account.address]);

      // console.log("is installed: ", await sessionKeyValidator.read.sessionData([sessionKey.account.address, accountAddr]));
    },
    addSessionKeyCalldata: (key, target, tokens, spendLimit, account) => {
      // for erc20 transfers
      const permissionObject1 = {
        valueLimit: 0n,
        target: tokens[0].address, // only support the first token for now
        sig: "0xa9059cbb" as `0x${string}`, // transfer(address,uint256)
        rules: [
          {
            offset: BigInt(32), // offset of amount
            condition: 4, // LESS_THAN_OR_EQUAL
            param: pad(toHex(spendLimit), {size: 32, dir: "left"}),
          },
        ],
        operation: 0,
      };

      // for native transfers
      const permissionObject2 = {
        valueLimit: parseEther("0.5"),
        target,
        sig: "0x00000000" as `0x${string}`,
        rules: [],
        operation: 0,
      };

      const permissionEncoding1 = encodeAbiParameters(permissionAbi, [
        permissionObject1,
      ]);
      const permissionEncoding2 = encodeAbiParameters(permissionAbi, [
        permissionObject2,
      ]);

      // NOTE: this only works if the hash of the first permission object is less than the hash of the second permission object.
      keyDataHolder.permissionObjects = [permissionObject1, permissionObject2];
      keyDataHolder.permissionHashes = [
        keccak256(permissionEncoding1),
        keccak256(permissionEncoding2),
      ];

      const merkleRoot = keccak256(
        encodePacked(
          ["bytes32", "bytes32"],
          [
            keyDataHolder.permissionHashes[0],
            keyDataHolder.permissionHashes[1],
          ],
        ),
      );

      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: KERNEL_ARTIFACTS.Kernel.abi,
            name: "execute",
          }),
        ],
        args: [
          KERNEL_ARTIFACTS.KernelSessionKeyValidator.address,
          0n,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: KERNEL_ARTIFACTS.KernelSessionKeyValidator.abi,
                name: "enable",
              }),
            ],
            args: [
              encodePacked(
                [
                  "address", // sessionKey
                  "bytes32", // merkleRoot
                  "uint48", // validAfter
                  "uint48", // validUntil
                  "address", // paymaster
                ],
                [key, merkleRoot, validAfter, validUntil, zeroAddress],
              ),
            ],
          }),
          0, // Operation.CALL = 0
        ],
      });
    },
    useSessionKeyERC20TransferCalldata: (token, key, to, amount) => {
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
    useSessionKeyNativeTokenTransferCalldata: (key, to, amount) => {
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
    getSessionKeySignature: async (key, userOp) => {
      // for now, assume it is the session key used to perform the erc-20 transfer

      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const keySignature = await key.signMessage({
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
            key.account.address,
            keySignature,
            encodeAbiParameters(
              [...permissionAbi, {name: "proof", type: "bytes32[]"}],
              [
                keyDataHolder.permissionObjects![0],
                [keyDataHolder.permissionHashes![1]],
              ],
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
            key.account.address,
            keySignature,
            encodeAbiParameters(
              [...permissionAbi, {name: "proof", type: "bytes32[]"}],
              [
                keyDataHolder.permissionObjects![1],
                [keyDataHolder.permissionHashes![0]],
              ],
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
