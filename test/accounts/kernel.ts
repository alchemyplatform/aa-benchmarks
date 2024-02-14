import {AccountConfig, AccountFixtureReturnType} from "../benchmark";
import {
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  parseEther,
  toHex,
  walletActions,
  zeroAddress,
} from "viem";

import {KERNEL_ARTIFACTS} from "../artifacts/kernel";
import hre from "hardhat";

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

  await testClient.impersonateAccount({address: zeroAddress});
  await hre.network.provider.send("hardhat_setBalance", [
    zeroAddress,
    toHex(parseEther("100")),
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
  };
}

export const kernel: AccountConfig = {
  name: "Kernel v2.1",
  fixture,
};
