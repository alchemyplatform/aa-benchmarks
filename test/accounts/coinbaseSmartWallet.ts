import hre from "hardhat";
import {
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  getAbiItem,
  getContract,
} from "viem";
import {SignReturnType, sign} from "viem/accounts";
import {AccountConfig, AccountDataV06} from "../accounts";
import {COINBASE_SMART_WALLET_ARTIFACTS} from "../artifacts/coinbaseSmartWallet";
import {getEntryPointV06} from "../utils/entryPoint";

async function accountFixture(): Promise<AccountDataV06> {
  const [walletClient] = await hre.viem.getWalletClients();

  for (const {address, bytecode} of Object.values(
    COINBASE_SMART_WALLET_ARTIFACTS,
  )) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const coinbaseSmartWalletFactory = getContract({
    address: COINBASE_SMART_WALLET_ARTIFACTS.CoinbaseSmartWalletFactory.address,
    abi: COINBASE_SMART_WALLET_ARTIFACTS.CoinbaseSmartWalletFactory.abi,
    client: walletClient,
  });

  const entryPoint = getEntryPointV06({walletClient});

  return {
    entryPoint,
    createAccount: async (salt, ownerAddress) => {
      const abiEncodedOwner = encodeAbiParameters(
        [{type: "address"}],
        [ownerAddress],
      );
      return await coinbaseSmartWalletFactory.write.createAccount([
        [abiEncodedOwner],
        salt,
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      const abiEncodedOwner = encodeAbiParameters(
        [{type: "address"}],
        [ownerAddress],
      );
      return await coinbaseSmartWalletFactory.read.getAddress([
        [abiEncodedOwner],
        salt,
      ]);
    },
    getOwnerSignature: async (_ownerSigner, userOp) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      // Key of owner account.
      const privateKey =
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
      const signature = await sign({hash: userOpHash, privateKey});
      return buildSignatureWrapperForEOA({signature, ownerIndex: 0n});
    },
    getNonce: async (accountAddress) => {
      return await entryPoint.read.getNonce([accountAddress, 0n]);
    },
    getDummySignature: (_userOp) => {
      return "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    },
    getInitCode: (salt, ownerAddress) => {
      const abiEncodedOwner = encodeAbiParameters(
        [{type: "address"}],
        [ownerAddress],
      );
      return encodePacked(
        ["address", "bytes"],
        [
          coinbaseSmartWalletFactory.address,
          encodeFunctionData({
            abi: [
              getAbiItem({
                abi: coinbaseSmartWalletFactory.abi,
                name: "createAccount",
              }),
            ],
            args: [[abiEncodedOwner], salt],
          }),
        ],
      );
    },
    encodeUserOpExecute: (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: COINBASE_SMART_WALLET_ARTIFACTS.CoinbaseSmartWallet.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data],
      });
    },
    encodeRuntimeExecute: async (to, value, data) => {
      return encodeFunctionData({
        abi: [
          getAbiItem({
            abi: COINBASE_SMART_WALLET_ARTIFACTS.CoinbaseSmartWallet.abi,
            name: "execute",
          }),
        ],
        args: [to, value, data],
      });
    },
  };
}

export const coinbaseSmartWallet: AccountConfig = {
  name: "Coinbase Smart Wallet (non-modular)",
  accountFixture,
};

const SignatureWrapperStruct = {
  components: [
    {
      name: "ownerIndex",
      type: "uint8",
    },
    {
      name: "signatureData",
      type: "bytes",
    },
  ],
  name: "SignatureWrapper",
  type: "tuple",
};

function buildSignatureWrapperForEOA({
  signature,
  ownerIndex,
}: {
  signature: SignReturnType;
  ownerIndex: bigint;
}) {
  const signatureData = encodePacked(
    ["bytes32", "bytes32", "uint8"],
    [signature.r, signature.s, parseInt(signature.v!.toString())],
  );
  return encodeAbiParameters(
    [SignatureWrapperStruct],
    [
      {
        ownerIndex,
        signatureData,
      },
    ],
  );
}
