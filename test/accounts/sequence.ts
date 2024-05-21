import {commons, v2} from "@0xsequence/core";
import {Orchestrator, signers} from "@0xsequence/signhub";
import {Wallet} from "@0xsequence/wallet";
import {ethers} from "ethers";
import hre from "hardhat";
import {
  Account,
  Chain,
  Transport,
  WalletClient,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
} from "viem";
import {AccountConfig, AccountDataV07} from "../accounts";
import {SEQUENCE_ARTIFACTS} from "../artifacts/sequence";

export class ViemSignerWrapper implements signers.SapientSigner {
  constructor(
    public signer: WalletClient,
    public eoa: boolean = true,
  ) {}

  getAddress(): Promise<string> {
    return this.signer.account.address;
  }

  async buildDeployTransaction(
    _metadata: object,
  ): Promise<commons.transaction.TransactionBundle | undefined> {
    // Wrapped signers don't require deployment
    return;
  }

  async predecorateSignedTransactions(
    _metadata: object,
  ): Promise<commons.transaction.SignedTransactionBundle[]> {
    return [];
  }

  async decorateTransactions(
    bundle: commons.transaction.IntendedTransactionBundle,
    _metadata: object,
  ): Promise<commons.transaction.IntendedTransactionBundle> {
    return bundle;
  }

  async sign(message: ethers.BytesLike): Promise<ethers.BytesLike> {
    return this.signer.signMessage({
      message: {raw: ethers.utils.hexlify(message)},
    });
  }

  notifyStatusChange(): void {}

  suffix() {
    return [2];
  }
}

async function accountFixture(): Promise<AccountDataV07> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();

  for (const {address, bytecode} of Object.values(SEQUENCE_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const sequenceMainModule = getContract({
    address: SEQUENCE_ARTIFACTS.SequenceMainModule.address,
    abi: SEQUENCE_ARTIFACTS.SequenceMainModule.abi,
    publicClient,
    walletClient,
  });

  const sequenceFactory = getContract({
    address: SEQUENCE_ARTIFACTS.SequenceFactory.address,
    abi: SEQUENCE_ARTIFACTS.SequenceFactory.abi,
    publicClient,
    walletClient,
  });

  const v2Context = {
    version: 2,

    factory: SEQUENCE_ARTIFACTS.SequenceFactory.address,
    mainModule: SEQUENCE_ARTIFACTS.SequenceMainModule.address,
    mainModuleUpgradable:
      SEQUENCE_ARTIFACTS.SequenceMainModuleUpgradeable.address,
    guestModule: SEQUENCE_ARTIFACTS.SequenceGuestModule.address,

    walletCreationCode:
      "0x603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3",
  };

  const getSingleSignerConfig = (salt: bigint, ownerAddress: string) => {
    salt += 100n; // Don't allow 0 salt
    return v2.config.ConfigCoder.fromSimple({
      threshold: 1,
      checkpoint: 0,
      signers: [{weight: salt, address: ownerAddress}],
    });
  };

  return {
    entryPoint: null, // Not supported
    createAccount: async (salt, ownerAddress) => {
      const config = getSingleSignerConfig(salt, ownerAddress);
      const imageHash = v2.coders.config.imageHashOf(config);
      return await sequenceFactory.write.deploy([
        v2Context.mainModule,
        imageHash,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      const config = getSingleSignerConfig(salt, ownerAddress);
      const imageHash = v2.coders.config.imageHashOf(config);
      return commons.context.addressOf(v2Context, imageHash);
    },
    encodeRuntimeExecute: async (
      to,
      value,
      data,
      owner: WalletClient<Transport, Chain, Account>,
      accountAddress,
    ) => {
      if (!owner || !accountAddress) {
        throw new Error("`owner` and `accountAddress` are required.");
      }

      const account = getContract({
        address: accountAddress,
        abi: SEQUENCE_ARTIFACTS.SequenceMainModule.abi,
        publicClient,
        walletClient: owner,
      });
      const code = await publicClient.getBytecode({
        address: accountAddress,
      });

      const nonce = await account.read.nonce();
      const config = getSingleSignerConfig(0n, owner.account.address);

      const wallet = new Wallet({
        coders: {
          signature: v2.signature.SignatureCoder,
          config: v2.config.ConfigCoder,
        },
        context: v2Context,
        config,
        chainId: 31337,
        address: accountAddress,
        orchestrator: new Orchestrator([new ViemSignerWrapper(owner)]),
      });
      const signedBundle = await wallet.signTransactions(
        [
          {
            to,
            value,
            data,
            revertOnError: true,
          },
        ],
        nonce,
      );
      return commons.transaction.encodeBundleExecData(signedBundle);
    },
    getDummySignature: (_userOp) => {
      return "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
    },
    getInitCode: (salt, ownerAddress) => {
      const config = getSingleSignerConfig(salt, ownerAddress);
      const imageHash = v2.coders.config.imageHashOf(config);
      return encodePacked(
        ["address", "bytes"],
        [
          sequenceFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: sequenceFactory.abi,
                name: "deploy",
              }),
            ],
            args: [sequenceMainModule.address, imageHash],
          }),
        ],
      );
    },
  };
}

export const sequence: AccountConfig = {
  name: "Sequence",
  accountFixture,
};
