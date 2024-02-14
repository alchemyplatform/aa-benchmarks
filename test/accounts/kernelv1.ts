import {AccountConfig, AccountFixtureReturnType} from "../benchmark";
import {encodeFunctionData, encodePacked, getAbiItem, getContract, keccak256, concat} from "viem";

import {KERNEL_ARTIFACTS} from "../artifacts/kernel";
import hre from "hardhat";

async function fixture(): Promise<AccountFixtureReturnType> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();

  for (const {address, bytecode} of Object.values(KERNEL_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const kernelFactory = getContract({
    address: KERNEL_ARTIFACTS.KernelFactory.address,
    abi: KERNEL_ARTIFACTS.KernelFactory.abi,
    publicClient,
    walletClient,
  });

  const initializeBytecode = (owner: `0x${string}`) => (
    encodeFunctionData({
      abi: [getAbiItem({
          abi: KERNEL_ARTIFACTS.Kernel.abi,
          name: "initialize",
        })],
      args: [KERNEL_ARTIFACTS.KernelECDSAValidator.address, encodePacked(['address'], [owner])]          
    })
  )

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
        salt
      ]);
    },
    getSignature: async (owner, userOp, entryPoint) => {
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
      return "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
    },
    getInitCode: (salt, ownerAddress) => {
      return encodePacked(
        ["address", "bytes"],
        [
          kernelFactory.address,
          encodeFunctionData({
            abi: [getAbiItem({
                abi: KERNEL_ARTIFACTS.KernelFactory.abi,
                name: "createAccount"
              })],
            args: [KERNEL_ARTIFACTS.Kernel.address, initializeBytecode(ownerAddress), salt],
          })
        ],
      );
    },
    setupFactory: async () => {
      const testClient = await hre.viem.getTestClient();
      // keccak256(address(impl), uint256(2))
      // set isAllowedImpl(impl) to true
      const implSlot = keccak256(concat(["0x000000000000000000000000", KERNEL_ARTIFACTS.Kernel.address, "0x0000000000000000000000000000000000000000000000000000000000000001"]))
      await testClient.setStorageAt({ 
        address: KERNEL_ARTIFACTS.KernelFactory.address,
        index: implSlot,
        value: '0x0000000000000000000000000000000000000000000000000000000000000001'
      })
    }
  };
}

export const kernel: AccountConfig = {
  name: "Kernel V1",
  fixture,
};
