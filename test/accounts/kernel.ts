import hre from "hardhat";
import {calcPreVerificationGas} from "@account-abstraction/sdk";
import {
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  parseEther,
  toHex,
  walletActions,
  zeroAddress,
  getFunctionSelector,
  keccak256,
} from "viem";
import {KERNEL_ARTIFACTS} from "../artifacts/kernel";
import {ENTRY_POINT_ARTIFACTS} from "../artifacts/entryPoint";
import {AccountConfig, AccountFixtureReturnType} from "../benchmark";

async function fixture(): Promise<AccountFixtureReturnType> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();
  const testClient = (await hre.viem.getTestClient()).extend(walletActions);

  for (const {address, bytecode} of Object.values(KERNEL_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

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
  
  // session key stuff
  let sessionKeyNonce = 1n;

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
    encodeExecute: (to, value, data) => {
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
      return dummySig;
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
      console.log("in here, nonce: ", sessionKeyNonce)

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
        )

      const userOp = {
        sender: accountAddr,
        nonce: await entryPoint.read.getNonce([accountAddr, 0n]),
        initCode: '0x' as `0x${string}`,
        callData: executeSelector, // will fail but doesnt matter since install happens during validation
        callGasLimit: 1_000_000n,
        verificationGasLimit: 2_000_000n,
        preVerificationGas: 21_000n,
        maxFeePerGas: 1n,
        maxPriorityFeePerGas: 1n,
        paymasterAndData: "0x" as `0x${string}`,
        signature: "0x" as `0x${string}`,
      };

      userOp.signature = dummySig;
      userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));

      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);

      const validAfter = "0x" + "00".repeat(6) as `0x${string}`;
      const validUntil = "0x" + "FF".repeat(6) as `0x${string}`;
      const mockSessionKey = "0x" + "FF".repeat(20) as `0x${string}`;
      const mockMerkleRoot = "0x" + "FF".repeat(32)  as `0x${string}`;
 
      const enableDataInstallValidator = encodePacked([
        "address",
        "bytes32",
        "bytes6",
        "bytes6",
        "address",
        "uint256",
      ], [
        mockSessionKey, // session key
        mockMerkleRoot, // merkle root
        validAfter, // validafter
        validUntil, // validuntil
        zeroAddress, // paymaster
        sessionKeyNonce // nonce
      ]);

      const enableDigest = keccak256(
        encodePacked([
          "bytes32",
          "bytes4",
          "bytes6",
          "bytes6",
          "address",
          "address",
          "bytes32"
        ], [
          "0x3ce406685c1b3551d706d85a68afdaa49ac4e07b451ad9b8ff8b58c3ee964176", // struct_hash
          executeSelector, // sig
          validAfter, // valid after 
          validUntil, // valid until
          KERNEL_ARTIFACTS.KernelSessionKeyValidator.address, // validator addr
          accountAddr, // executor
          keccak256(encodePacked(["bytes"], [enableDataInstallValidator]))
        ])
      )
      
      console.log("nonces: ", await sessionKeyValidator.read.nonces([owner.account.address]));

      await sessionKeyValidator.write.enable([
        enableDataInstallValidator])

      await sessionKeyValidator.write.invalidateNonce([100n])
      
      console.log("nonces: ", await sessionKeyValidator.read.nonces([owner.account.address]));
      console.log("nonces: ", await sessionKeyValidator.read.nonces([accountAddr]));

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
        "bytes4",
        "bytes6",
        "bytes6",
        "address",
        "address",
        "bytes",
        "bytes",
        "bytes"
      ], [
        "0x00000002",
        validAfter,
        validUntil,
        KERNEL_ARTIFACTS.KernelSessionKeyValidator.address,
        zeroAddress,
        enableDataInstallValidator,
        await owner.signMessage({
          message: {raw: enableDigest},
        }),
        await owner.signMessage({
          message: {raw: userOpHash},
        })
      ])

      console.log("userOp.signature: ", userOp.signature);
        
      sessionKeyNonce++;

      console.log("is installed: ", await sessionKeyValidator.read.sessionData(['0x' + 'FF'.repeat(20) as `0x${string}`, accountAddr]));

      await entryPoint.write.handleOps([[userOp], owner.account.address]);

      console.log("nonces: ", await sessionKeyValidator.read.nonces([accountAddr]));
      console.log("is installed: ", await sessionKeyValidator.read.sessionData(['0x' + 'FF'.repeat(20) as `0x${string}`, accountAddr]));
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


      const enableData = encodeFunctionData({
        abi: [
          getAbiItem({
            abi: KERNEL_ARTIFACTS.KernelSessionKeyValidator.abi,
            name: "enable"
          }),
        ],
        args: [encodePacked([
          "address", // sessionkey
          "bytes32", // merkle root
          "uint48", // validafter
          "uint48", // validbefore
          "address", // paymaster
          "uint256", // nonce
        ], [
          keys[0],
          '0x', // TODO: merkle root
          0,
          0,
          zeroAddress,
          sessionKeyNonce
        ])],
      })

      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: KERNEL_ARTIFACTS.Kernel.abi,
            name: "execute",
          }),
        ],
        args: [KERNEL_ARTIFACTS.KernelSessionKeyValidator.address, 0n, enableData, 0], // 0 for Operation.Call
      });
    }
  };
}

export const kernel: AccountConfig = {
  name: "Kernel v2.1",
  fixture,
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
