import hre from "hardhat";
import {calcPreVerificationGas} from "@account-abstraction/sdk";
import {
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  parseEther,
  toHex,
  hexToBigInt,
  walletActions,
  zeroAddress,
  getFunctionSelector,
  keccak256,
  encodeAbiParameters,
  parseAbiParameters,
} from "viem";
import {KERNEL_ARTIFACTS} from "../artifacts/kernel";
import {ENTRY_POINT_ARTIFACTS} from "../artifacts/entryPoint";
import {AccountConfig, AccountFixtureReturnType} from "../benchmark";
import {getUnsignedUserOp} from "../utils/userOp";

async function accountFixture(): Promise<AccountFixtureReturnType> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();
  const testClient = (await hre.viem.getTestClient()).extend(walletActions);

  for (const {address, bytecode} of Object.values(KERNEL_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  await hre.network.provider.send("evm_setNextBlockTimestamp", [2_000_000_000]); // Set the time to 2 billion

  const kernelFactory = getContract({
    address: KERNEL_ARTIFACTS.KernelFactory.address,
    abi: KERNEL_ARTIFACTS.KernelFactory.abi,
    publicClient,
    walletClient,
  });

  const dummySig = "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";

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

  const paramRuleAbi = parseAbiParameters([
    'ParamRule paramRule',
    'struct ParamRule { uint256 offset; uint8 condition; bytes32 param; }'
  ]);

  // console.log({paramRuleAbi: JSON.stringify(paramRuleAbi, null, 2)});

  const permissionAbi = parseAbiParameters([
    'Permission permission',
    'struct Permission { address target; uint256 valueLimit; bytes4 sig; ParamRule[] rules; uint8 operation; }',
    'struct ParamRule { uint256 offset; uint8 condition; bytes32 param; }'
  ]);

  // console.log({permissionAbi: JSON.stringify(permissionAbi, null, 2)});

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

  return {
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
    getOwnerSignature: async (owner, userOp, entryPoint) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await owner.signMessage({
        message: {raw: userOpHash},
      });
      return encodePacked(["bytes4", "bytes"], ["0x00000000", signature]);
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
        publicClient,
        walletClient: owner,
      });

      const account = getContract({
        address: accountAddr,
        abi: KERNEL_ARTIFACTS.Kernel.abi,
        publicClient,
        walletClient,
      });

      const entryPoint = getContract({
        address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.address,
        abi: ENTRY_POINT_ARTIFACTS.ENTRY_POINT.abi,
        publicClient,
        walletClient: owner,
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

      console.log({userOpHash});

      const validUntil = Number(hexToBigInt("0x7d2b7500")); // 2_100_000_000
      const validAfter = Number(hexToBigInt("0x713fb300")); // 1_900_000_000


      const permissionEncoding = encodeAbiParameters(
        permissionAbi,
        [
          {
            valueLimit: 0n,
            target: zeroAddress,
            sig: executeSelector,
            rules: [],
            operation: 0,
          }
        ]
      );
      const leafHash = keccak256(permissionEncoding);

      const sessionKey = owner; // re-use the owner as an initial session key, will get added later
      
      const merkleRoot = leafHash; // Tree of size 1
 
      const enableDataInstallValidator = encodePacked([
        "address",
        "bytes32",
        "uint48",
        "uint48",
        "address",
      ], [
        sessionKey.account.address, // session key
        merkleRoot, // merkle root
        validAfter, // validafter
        validUntil, // validuntil
        zeroAddress, // paymaster
      ]);

      const validatorData = encodePacked(["uint48", "uint48", "address"], [validAfter, validUntil, KERNEL_ARTIFACTS.KernelSessionKeyValidator.address]);

      console.log({validatorData});

      // const enableDigest = keccak256(
      //   encodeAbiParameters([
      //     { type: "bytes32", name: "structHash" },
      //     { type: "bytes4", name: "sig" },
      //     { type: "uint256", name: "validatorData" },
      //     { type: "address", name: "executor" },
      //     { type: "address", name: "enableData" },
      //   ], [
      //     "0x3ce406685c1b3551d706d85a68afdaa49ac4e07b451ad9b8ff8b58c3ee964176", // struct_hash
      //     executeSelector, // sig
      //     hexToBigInt(validatorData), // validatorData
      //     zeroAddress, // executor
      //     keccak256(encodePacked(["bytes"], [enableDataInstallValidator]))
      //   ])
      // );

      const enableSig = await owner.signTypedData({
        domain: {
          name: "Kernel",
          version: "0.2.1",
          chainId: 31337,
          verifyingContract: accountAddr,
        },
        types: {
          ValidatorApproved: [
            {name:"sig", type: "bytes4"},
            {name:"validatorData", type: "uint256"},
            {name:"executor", type: "address"},
            {name:"enableData", type: "bytes"},
          ]
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
      userOp.signature = encodePacked([
        "bytes4", // MODe
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
      ], [
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
        (await sessionKey.signMessage({
          message: {raw: userOpHash},
        })),
        encodeAbiParameters(
        [
          ...permissionAbi,
          { name: "proof", type: "bytes32[]" },
        ], [
          {
            valueLimit: 0n,
            target: zeroAddress,
            sig: executeSelector,
            rules: [],
            operation: 0,
          },
          []
        ])
      ]);

      console.log("userOp.signature: ", userOp.signature);

      console.log("is installed: ", await sessionKeyValidator.read.sessionData([sessionKey.account.address, accountAddr]));

      await entryPoint.write.handleOps([[userOp], owner.account.address]);

      console.log("is installed: ", await sessionKeyValidator.read.sessionData([sessionKey.account.address, accountAddr]));
    },
    addSessionKeyCalldata: (keys, target, tokens, spendLimit, account) => {
      /**
       * validateuserop:
       * userop.sig structure:
       * -4:0     - mode = bytes4(0x00000001)
       * 0:20     - sessionkey addr
       * 20:84    - short sig?
       * 85:      - Permission + merkle proof
       * 
       * 
       * 
       */


      // const enableData = encodeFunctionData({
      //   abi: [
      //     getAbiItem({
      //       abi: KERNEL_ARTIFACTS.KernelSessionKeyValidator.abi,
      //       name: "enable"
      //     }),
      //   ],
      //   args: [encodePacked([
      //     "address", // sessionkey
      //     "bytes32", // merkle root
      //     "uint48", // validafter
      //     "uint48", // validbefore
      //     "address", // paymaster
      //     "uint256", // nonce
      //   ], [
      //     keys[0],
      //     '0x', // TODO: merkle root
      //     0,
      //     0,
      //     zeroAddress,
      //     sessionKeyNonce
      //   ])],
      // })

      // return encodeFunctionData({
      //   abi: [
      //     getAbiItem({
      //       abi: KERNEL_ARTIFACTS.Kernel.abi,
      //       name: "execute",
      //     }),
      //   ],
      //   args: [KERNEL_ARTIFACTS.KernelSessionKeyValidator.address, 0n, enableData, 0], // 0 for Operation.Call
      // });

      return "0x";
    }
  };
}

export const kernel: AccountConfig = {
  name: "Kernel v2.1",
  accountFixture,
};


      /**
       *      
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
       * 110+a:110+a+b - enableSig
       *
       * enableDigest = hashtypedData of: keccak256(
       *     struct_hash,   // 0x3ce406685c1b3551d706d85a68afdaa49ac4e07b451ad9b8ff8b58c3ee964176
       *     bytes4(sig),
       *     pack(validAfter, validUntil, validator addr),
       *     (36-56?)
       *     keccak256(enableData)
       * )
       * 
       * enableData = 
       *  0:20      - sessionkey addr (0xfffffffff....)
       *  20:52     - merkle root (0xffffffff....)
       *  52:58     - validafter (0x000)
       *  58:64     - validuntil (0x000)
       *  64:84     - paymaster (0xfffff)
       *  84:116    - nonce (0x1) -----> persistent storage this fucker
       * 
       * sig: needs to pass ECDSAValidator.validateSignature
       * 
       * test: SessionKeyValidator.sessionData()
       */ 
