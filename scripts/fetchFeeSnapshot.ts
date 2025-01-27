#!/usr/bin/env npx ts-node

import {program} from "commander";
import {
  BlockTag,
  PublicClient,
  Transport,
  createPublicClient,
  getContract,
  http,
} from "viem";
import {arbitrum, base, mainnet, optimism, polygon, zora} from "viem/chains";

type BlockNumberOrTag =
  | {
      blockNumber?: never;
      blockTag?: BlockTag;
    }
  | {
      blockNumber?: bigint;
      blockTag?: never;
    };

type ChainFeeSnapshot = {
  gasPrice: bigint;
  l1BaseFee?: bigint;
  l1BaseFeeScalar?: number;
  blobBaseFee?: bigint;
  blobBaseFeeScalar?: number;
};

type OpStackChain = typeof optimism | typeof base | typeof zora;
type SupportedChain =
  | OpStackChain
  | typeof mainnet
  | typeof polygon
  | typeof arbitrum;

async function main() {
  program.option("--dry-run", "print only, don't write to .env").parse();

  const isDryRun = program.opts().dryRun as boolean;
  await fetchAndWriteFeeSnapshot(isDryRun);
}

/**
 * TODO: Write fee snapshot to .env file.
 */
export async function fetchAndWriteFeeSnapshot(_isDryRun: boolean) {
  const ethFeeSnapshot = await fetchFeeSnapshot(mainnet);
  const arbitrumFeeSnapshot = await fetchFeeSnapshot(arbitrum);
  const polygonFeeSnapshot = await fetchFeeSnapshot(polygon);
  const optFeeSnapshot = await fetchFeeSnapshot(optimism);
  const baseFeeSnapshot = await fetchFeeSnapshot(base);
  const zoraFeeSnapshot = await fetchFeeSnapshot(zora);
  const ethPrice = await fetchCoinGeckoPrice("ethereum");
  const polygonPrice = await fetchCoinGeckoPrice("matic-network");
  const snapshotDate = new Date();

  console.log(`# Fee snapshot taken at ${snapshotDate.toISOString()}`);
  console.log(`SNAPSHOT_TIMESTAMP_MS=${snapshotDate.getTime()}`);

  console.log(`ETH_PRICE_USD=${ethPrice}`);
  console.log(`ETH_GAS_PRICE=${ethFeeSnapshot.gasPrice}`);

  console.log(`ARB_GAS_PRICE=${arbitrumFeeSnapshot.gasPrice}`);

  console.log(`POLYGON_PRICE_USD=${polygonPrice}`);
  console.log(`POLYGON_GAS_PRICE=${polygonFeeSnapshot.gasPrice}`);

  console.log(`OPT_GAS_PRICE=${optFeeSnapshot.gasPrice}`);
  console.log(`OPT_L1_BASE_FEE=${optFeeSnapshot.l1BaseFee}`);
  console.log(`OPT_L1_BASE_FEE_SCALAR=${optFeeSnapshot.l1BaseFeeScalar}`);
  console.log(`OPT_BLOB_BASE_FEE=${optFeeSnapshot.blobBaseFee}`);
  console.log(`OPT_BLOB_BASE_FEE_SCALAR=${optFeeSnapshot.blobBaseFeeScalar}`);

  console.log(`BASE_GAS_PRICE=${baseFeeSnapshot.gasPrice}`);
  console.log(`BASE_L1_BASE_FEE=${baseFeeSnapshot.l1BaseFee}`);
  console.log(`BASE_L1_BASE_FEE_SCALAR=${baseFeeSnapshot.l1BaseFeeScalar}`);
  console.log(`BASE_BLOB_BASE_FEE=${baseFeeSnapshot.blobBaseFee}`);
  console.log(`BASE_BLOB_BASE_FEE_SCALAR=${baseFeeSnapshot.blobBaseFeeScalar}`);

  console.log(`ZORA_GAS_PRICE=${zoraFeeSnapshot.gasPrice}`);
  console.log(`ZORA_L1_BASE_FEE=${zoraFeeSnapshot.l1BaseFee}`);
  console.log(`ZORA_L1_BASE_FEE_SCALAR=${zoraFeeSnapshot.l1BaseFeeScalar}`);
  console.log(`ZORA_BLOB_BASE_FEE=${zoraFeeSnapshot.blobBaseFee}`);
  console.log(`ZORA_BLOB_BASE_FEE_SCALAR=${zoraFeeSnapshot.blobBaseFeeScalar}`);
}

/**
 * TODO: Support historical fees. Currently only fetches the latest fees.
 */
async function fetchFeeSnapshot(
  chain: SupportedChain,
  blockNumberOrTag: BlockNumberOrTag = {blockTag: "latest"},
): Promise<ChainFeeSnapshot> {
  if (blockNumberOrTag.blockTag !== "latest") {
    throw new Error("Historical fees not yet supported");
  }

  switch (chain) {
    case base:
    case optimism:
    case zora: {
      const client = createPublicClient({
        chain,
        transport: http(),
      });
      const gasPrice = await client.getGasPrice();
      const baseFees = await getOpStackBaseFees(client, blockNumberOrTag);
      return {
        gasPrice,
        ...baseFees,
      };
    }
    case arbitrum:
    case mainnet:
    case polygon: {
      const client = createPublicClient({
        chain,
        transport: http(),
      });
      const gasPrice = await client.getGasPrice();
      return {
        gasPrice,
      };
    }
    default: {
      throw new Error(`Unsupported chain: ${chain.id}`);
    }
  }
}

async function getOpStackBaseFees(
  publicClient: PublicClient<Transport, OpStackChain>,
  blockNumberOrTag: BlockNumberOrTag,
) {
  const l1BlockPredeploy = getContract({
    address: "0x4200000000000000000000000000000000000015",
    abi: L1_BLOCK_PREDEPLOY_ABI,
    client: publicClient,
  });

  const l1BaseFee = await l1BlockPredeploy.read.basefee(blockNumberOrTag);
  const l1BaseFeeScalar =
    await l1BlockPredeploy.read.baseFeeScalar(blockNumberOrTag);
  const blobBaseFee = await l1BlockPredeploy.read.blobBaseFee(blockNumberOrTag);
  const blobBaseFeeScalar =
    await l1BlockPredeploy.read.blobBaseFeeScalar(blockNumberOrTag);

  return {
    l1BaseFee,
    l1BaseFeeScalar,
    blobBaseFee,
    blobBaseFeeScalar,
  };
}

async function fetchCoinGeckoPrice(slug: string): Promise<number> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${slug}&vs_currencies=usd`,
  );
  const data = await response.json();
  return data[slug].usd;
}

const L1_BLOCK_PREDEPLOY_ABI = [
  {
    inputs: [],
    name: "DEPOSITOR_ACCOUNT",
    outputs: [{internalType: "address", name: "", type: "address"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseFeeScalar",
    outputs: [{internalType: "uint32", name: "", type: "uint32"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "basefee",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "batcherHash",
    outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blobBaseFee",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blobBaseFeeScalar",
    outputs: [{internalType: "uint32", name: "", type: "uint32"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hash",
    outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l1FeeOverhead",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l1FeeScalar",
    outputs: [{internalType: "uint256", name: "", type: "uint256"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [{internalType: "uint64", name: "", type: "uint64"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sequenceNumber",
    outputs: [{internalType: "uint64", name: "", type: "uint64"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {internalType: "uint64", name: "_number", type: "uint64"},
      {internalType: "uint64", name: "_timestamp", type: "uint64"},
      {internalType: "uint256", name: "_basefee", type: "uint256"},
      {internalType: "bytes32", name: "_hash", type: "bytes32"},
      {internalType: "uint64", name: "_sequenceNumber", type: "uint64"},
      {internalType: "bytes32", name: "_batcherHash", type: "bytes32"},
      {internalType: "uint256", name: "_l1FeeOverhead", type: "uint256"},
      {internalType: "uint256", name: "_l1FeeScalar", type: "uint256"},
    ],
    name: "setL1BlockValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setL1BlockValuesEcotone",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timestamp",
    outputs: [{internalType: "uint64", name: "", type: "uint64"}],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{internalType: "string", name: "", type: "string"}],
    stateMutability: "view",
    type: "function",
  },
] as const;

main();
