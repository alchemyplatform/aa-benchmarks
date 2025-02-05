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
import {NEXUS_ARTIFACTS} from "../artifacts/nexus";
import {getEntryPointV07} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV07> {
  const [walletClient] = await hre.viem.getWalletClients();
  const testClient = (await hre.viem.getTestClient()).extend(walletActions);

  // Deploy Nexus-related contracts to the network using hardhat_setCode.
  for (const {address, bytecode} of Object.values(NEXUS_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  // Get the Nexus factory contract
  const nexusFactory = getContract({
    address: NEXUS_ARTIFACTS.K1ValidatorFactory.address,
    abi: NEXUS_ARTIFACTS.K1ValidatorFactory.abi,
    client: walletClient,
  });

  // If the factory requires setting up using an impersonated account
  await testClient.impersonateAccount({address: zeroAddress});
  await hre.network.provider.send("hardhat_setBalance", [
    zeroAddress,
    toHex(parseEther("10000")),
  ]);
  // No need to call `setImplementation` here; it's already set in the constructor.
  await testClient.stopImpersonatingAccount({address: zeroAddress});

  const entryPoint = getEntryPointV07({walletClient});

  return {
    entryPoint,

    createAccount: async (salt, ownerAddress) => {
      const attesters = [ownerAddress];
      const threshold = 1;

      const hash = await nexusFactory.write.createAccount([
        ownerAddress,
        salt,
        attesters,
        threshold,
      ]);

      return hash;
    },

    getAccountAddress: async (salt, ownerAddress) => {
      const attesters = [ownerAddress];
      const threshold = 1;
      return await nexusFactory.read.computeAccountAddress([
        ownerAddress,
        salt,
        attesters,
        threshold,
      ]);
    },

    getOwnerSignature: async (ownerSigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      const signature = await ownerSigner.signMessage({
        message: {raw: userOpHash},
      });
      return signature;
    },

    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([
        accountAddress,
        hexToBigInt(NEXUS_ARTIFACTS.K1Validator.address),
      ]);
    },

    getDummySignature: (_userOp) => {
      return "0x";
    },

    getInitCode: (salt, ownerAddress) => {
      const attesters = [ownerAddress];
      const threshold = 1;

      return encodePacked(
        ["address", "bytes"],
        [
          nexusFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: nexusFactory.abi,
                name: "createAccount",
              }),
            ],
            args: [ownerAddress, salt, attesters, threshold],
          }),
        ],
      );
    },

    encodeUserOpExecute: (to, value, data) => {
      try {
        const executionCalldata = encodePacked(
          ["address", "uint256", "bytes"],
          [to, value, data],
        );

        const defaultMode = toHex(0, {size: 32});

        return encodeFunctionData({
          abi: [
            getAbiItem({
              abi: NEXUS_ARTIFACTS.Nexus.abi,
              name: "execute",
            }),
          ],
          args: [defaultMode, executionCalldata],
        });
      } catch (error) {
        console.error("Error in encodeUserOpExecute:", error);
        throw error;
      }
    },

    encodeRuntimeExecute: async (
      to,
      value,
      data,
      _ownerSigner,
      accountAddress,
    ) => {
      if (!accountAddress) {
        throw new Error("Account address is required");
      }
      try {
        const executionCalldata = encodePacked(
          ["address", "uint256", "bytes"],
          [to, value, data],
        );

        const defaultMode = toHex(0, {size: 32});

        return encodeFunctionData({
          abi: [
            getAbiItem({
              abi: NEXUS_ARTIFACTS.Nexus.abi,
              name: "execute",
            }),
          ],
          args: [defaultMode, executionCalldata],
        });
      } catch (error) {
        console.error("Error in encodeRuntimeExecute:", error);
        throw error;
      }
    },
  };
}

export const nexus: AccountConfig = {
  name: "Biconomy Nexus",
  accountFixture,
};
