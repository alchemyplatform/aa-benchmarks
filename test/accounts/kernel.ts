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
  concat
} from "viem";
import {KERNEL_ARTIFACTS} from "../artifacts/kernel";
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
  const getNonce = () => {
    return toHex(sessionKeyNonce, {size:32})
  }
  const toBytes32 = (i: bigint) => {
    return toHex(i, {size:32});
  }

  /**
   * enableData = 
   *  0:20      - sessionkey addr (0xfffffffff....)
   *  20:52     - merkle root (0xffffffff....)
   *  52:58     - validafter (0x000)
   *  58:64     - validuntil (0x000)
   *  64:84     - paymaster (0xfffff)
   *  84:116    - nonce
   */
  const enableDataInstallValidator = "0x" + "FF".repeat(84) + getNonce() as `0x${string}`;


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
    installSessionKeyPlugin: async (accountAddr, owner, entryPoint) => {
      const sessionKeyValidator = getContract({
        address: KERNEL_ARTIFACTS.KernelSessionKeyValidator.address,
        abi: KERNEL_ARTIFACTS.KernelSessionKeyValidator.abi,
        publicClient,
        walletClient,
      });

      const account = getContract({
        address: accountAddr,
        abi: KERNEL_ARTIFACTS.Kernel.abi,
        publicClient,
        walletClient,
      });

      if (!entryPoint) { throw new Error("entryPoint is required"); }

      const executeSelector = getFunctionSelector(
          getAbiItem({
            abi: KERNEL_ARTIFACTS.Kernel.abi,
            name: "execute",
          }),
        )

      const userOp = {
        sender: accountAddr,
        nonce: await entryPoint.read.getNonce([accountAddr, 0n]),
        initCode: '0x',
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
      
      // todo: test string hash == bytes hash
      const enableDigest = keccak256(
        concat([
          "0x3ce406685c1b3551d706d85a68afdaa49ac4e07b451ad9b8ff8b58c3ee964176",
          executeSelector,
          "0x" + "FF".repeat(32) as `0x${string}`,
          accountAddr,
          keccak256(getNonce())
        ])
      )

      console.log("enable digest: ", concat([
        "0x3ce406685c1b3551d706d85a68afdaa49ac4e07b451ad9b8ff8b58c3ee964176",
        executeSelector,
        "0x" + "ff".repeat(32) as `0x${string}`,
        accountAddr,
        keccak256(getNonce())
      ]));
      console.log("h(enable digest): ", enableDigest)
      
      userOp.signature = 
        toHex(concat([
          "0x" + "00".repeat(12) as `0x${string}`,   // validity time ranges
          KERNEL_ARTIFACTS.KernelSessionKeyValidator.address, // validator addr
          accountAddr, // executor
          toBytes32(116n), // len(enableData)
          enableDataInstallValidator, // enableData
          toBytes32(0n), // len(sig)
          "0x" // sig
        ]));

      console.log("userOp.signature: ", userOp.signature);
        
      sessionKeyNonce++;
    },
    addSessionKeyCalldata: (keys, target, tokens, spendLimit, account) => {
      return '0x' as `0x${string}`;
    }
  };
}

export const kernel: AccountConfig = {
  name: "Kernel v2.1",
  fixture,
};


      /**
       * sig structure:
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
