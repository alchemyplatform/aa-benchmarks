import { encodeAbiParameters, encodeFunctionData, encodePacked, getAbiItem, getContract } from "viem";
import { SignReturnType, sign } from "viem/accounts";
import { AccountConfig, AccountFixtureReturnType } from "../benchmark";

import hre from "hardhat";
import { COINBASE_SMART_WALLET_ARTIFACTS } from "../artifacts/coinbaseSmartWallet";

async function accountFixture(): Promise<AccountFixtureReturnType> {
  const [walletClient] = await hre.viem.getWalletClients();
  const publicClient = await hre.viem.getPublicClient();

  for (const { address, bytecode } of Object.values(COINBASE_SMART_WALLET_ARTIFACTS)) {
    await hre.network.provider.send("hardhat_setCode", [address, bytecode]);
  }

  const coinbaseSmartWalletFactory = getContract({
    address: COINBASE_SMART_WALLET_ARTIFACTS.CoinbaseSmartWalletFactory.address,
    abi: COINBASE_SMART_WALLET_ARTIFACTS.CoinbaseSmartWalletFactory.abi,
    publicClient,
    walletClient,
  });

  return {
    createAccount: async (salt, ownerAddress) => {
      const abiEncodedOwner = encodeAbiParameters([{ type: 'address' }], [ownerAddress])
      return await coinbaseSmartWalletFactory.write.createAccount([
        [abiEncodedOwner],
        salt
      ]);
    },
    getAccountAddress: async (salt, ownerAddress) => {
      const abiEncodedOwner = encodeAbiParameters([{ type: 'address' }], [ownerAddress])
      return await coinbaseSmartWalletFactory.read.getAddress([[abiEncodedOwner], salt]);
    },
    getOwnerSignature: async (owner, userOp, entryPoint) => {
      const userOpHash = await entryPoint.read.getUserOpHash([userOp]);
      // Key of owner account.
      const privateKey =
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
      const signature = await sign({ hash: userOpHash, privateKey });
      return buildSignatureWrapperForEOA({ signature, ownerIndex: 0n })
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
    getDummySignature: (_userOp) => {
      return "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    },
    getInitCode: (salt, ownerAddress) => {
      const abiEncodedOwner = encodeAbiParameters([{ type: 'address' }], [ownerAddress])
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
  };
}

export const coinbaseSmartWallet: AccountConfig = {
  name: "Coinbase Smart Wallet",
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

function buildSignatureWrapperForEOA(
  { signature, ownerIndex }: { signature: SignReturnType; ownerIndex: bigint },
) {
  const signatureData = encodePacked(
    ["bytes32", "bytes32", "uint8"],
    [
      signature.r,
      signature.s,
      parseInt(signature.v.toString()),
    ],
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