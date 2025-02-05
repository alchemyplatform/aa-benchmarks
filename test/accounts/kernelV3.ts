import hre from "hardhat";
import {
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
  hexToBigInt,
  parseEther,
  toHex,
  walletActions,
  zeroAddress,
} from "viem";
import {AccountConfig, AccountDataV07} from "../accounts";
import {KERNEL_V3_ARTIFACTS} from "../artifacts/kernelV3";
import {getEntryPointV07} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV07> {
  const [walletClient] = await hre.viem.getWalletClients();
  const testClient = (await hre.viem.getTestClient()).extend(walletActions);

  // Deploy Nexus-related contracts to the network using hardhat_setCode.
  for (const {address, bytecode} of Object.values(KERNEL_V3_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  // Get the Nexus factory contract
  const factoryStaker = getContract({
    address: KERNEL_V3_ARTIFACTS.FactoryStaker.address,
    abi: KERNEL_V3_ARTIFACTS.FactoryStaker.abi,
    client: walletClient,
  });

  const kernelFactory = getContract({
    address: KERNEL_V3_ARTIFACTS.KernelFactory.address,
    abi: KERNEL_V3_ARTIFACTS.KernelFactory.abi,
    client: walletClient,
  });

  const factoryOwner = "0x9775137314fE595c943712B0b336327dfa80aE8A";

  await testClient.impersonateAccount({address: zeroAddress});
  await hre.network.provider.send("hardhat_setBalance", [
    zeroAddress,
    toHex(parseEther("10000")),
  ]);
  await testClient.writeContract({
    address: factoryStaker.address,
    abi: factoryStaker.abi,
    functionName: "transferOwnership",
    args: ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"],
    account: zeroAddress,
  });
  await testClient.stopImpersonatingAccount({address: zeroAddress});

  await factoryStaker.write.stake(
    ["0x0000000071727De22E5E9d8BAf0edAc6f37da032", 99],
    {value: parseEther("0.1")},
  );
  await factoryStaker.write.approveFactory([
    KERNEL_V3_ARTIFACTS.KernelFactory.address,
    true,
  ]);

  const buildKernelInitializeData = (ownerAddress: `0x${string}`) => {
    return encodeFunctionData({
      abi: [
        getAbiItem({
          abi: KERNEL_V3_ARTIFACTS.Kernel.abi,
          name: "initialize",
        }),
      ],
      args: [
        encodePacked(
          ["bytes1", "address"],
          ["0x01", KERNEL_V3_ARTIFACTS.ECDSAValidator.address],
        ), //root validator
        "0x0000000000000000000000000000000000000000", //hook
        ownerAddress, //root validator data
        "0x", //hook data
        [], //init config
      ],
    });
  };

  const entryPoint = getEntryPointV07({walletClient});

  return {
    entryPoint,

    createAccount: async (salt, ownerAddress) => {
      const hash = await factoryStaker.write.deployWithFactory([
        KERNEL_V3_ARTIFACTS.KernelFactory.address,
        buildKernelInitializeData(ownerAddress),
        toHex(salt, {size: 32}),
      ]);

      return hash;
    },

    getAccountAddress: async (salt, ownerAddress) => {
      return kernelFactory.read.getAddress([
        buildKernelInitializeData(ownerAddress),
        toHex(salt, {size: 32}),
      ]);
    },

    getOwnerSignature: async (owner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await owner.signMessage({
        message: {raw: userOpHash},
      });
      //console.log("Signature", signature);
      //const signatureHex = concatHex([toHex(SignatureType.EOA, { size: 1 }), signature]);
      //console.log("Sig hex", signatureHex);
      //return signatureHex;
      return signature;
    },

    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([
        accountAddress,
        hexToBigInt(KERNEL_V3_ARTIFACTS.ECDSAValidator.address),
      ]);
    },

    encodeUserOpExecute: (target, value, data) => {
      try {
        const executionCalldata = encodePacked(
          ["address", "uint256", "bytes"],
          [target, value, data],
        );

        const defaultMode = toHex(0, {size: 32});

        return encodeFunctionData({
          abi: [
            getAbiItem({
              abi: KERNEL_V3_ARTIFACTS.Kernel.abi,
              name: "execute",
            }),
          ],
          args: [defaultMode, executionCalldata],
        });
      } catch (error) {
        console.error("Error encoding UserOpExecute:", error);
        throw error;
      }
    },

    encodeRuntimeExecute: async (
      target,
      value,
      data,
      owner,
      accountAddress,
    ) => {
      if (!accountAddress) {
        throw new Error("Account address is required");
      }
      try {
        const executionCalldata = encodePacked(
          ["address", "uint256", "bytes"],
          [target, value, data],
        );

        const defaultMode = toHex(0, {size: 32});

        return encodeFunctionData({
          abi: [
            getAbiItem({
              abi: KERNEL_V3_ARTIFACTS.Kernel.abi,
              name: "execute",
            }),
          ],
          args: [defaultMode, executionCalldata],
        });
      } catch (error) {
        console.error("Error encoding RuntimeExecute:", error);
        throw error;
      }
    },

    getDummySignature: (_userOp) => {
      //return concatHex([toHex(SignatureType.EOA, { size: 1 })]);
      return "0x";
    },

    getInitCode: (salt, ownerAddress) => {
      return encodePacked(
        ["address", "bytes"],
        [
          factoryStaker.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: factoryStaker.abi,
                name: "deployWithFactory",
              }),
            ],
            args: [
              KERNEL_V3_ARTIFACTS.KernelFactory.address,
              buildKernelInitializeData(ownerAddress),
              toHex(salt, {size: 32}),
            ],
          }),
        ],
      );
    },
  };
}

export const kernelV3: AccountConfig = {
  name: "Kernel v3.1",
  accountFixture,
};
