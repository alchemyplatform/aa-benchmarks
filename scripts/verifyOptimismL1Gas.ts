#!/usr/bin/env npx ts-node

import {program} from "commander";
import {Hex, createPublicClient, getContract, http} from "viem";
import {optimism} from "viem/chains";
import {OPT_BLOB_BASE_FEE_SCALAR, OPT_L1_BASE_FEE_SCALAR} from "../settings";
import {getL1Fee, getL1GasUsed} from "../test/utils/fees";

const publicClient = createPublicClient({
  chain: optimism,
  transport: http(),
});

async function main() {
  program
    .argument("<tx-hash>", "the Optimism transaction hash to verify")
    .parse();

  const txHash = program.args[0] as Hex;
  await verifyOptimismL1Gas(txHash);
}

export async function verifyOptimismL1Gas(txHash: Hex) {
  const rawTx = await getRawTx(txHash);

  const calculatedL1GasUsed = getL1GasUsed(rawTx);
  const receipt = await publicClient.getTransactionReceipt({hash: txHash});
  const blobBaseFee = await getBlobBaseFee(receipt.blockNumber);
  const calculatedL1Fee = getL1Fee(
    calculatedL1GasUsed,
    receipt.l1GasPrice!,
    OPT_L1_BASE_FEE_SCALAR,
    blobBaseFee,
    OPT_BLOB_BASE_FEE_SCALAR,
  );

  console.log(
    receipt.l1GasUsed === calculatedL1GasUsed ? "✅" : "❌",
    "[L1 Gas Used]",
    "\n",
    `Calculated:\t${calculatedL1GasUsed}\n`,
    `Actual:\t${receipt.l1GasUsed}\n`,
  );
  console.log(
    receipt.l1Fee === calculatedL1Fee ? "✅" : "❌",
    "[L1 Fee]",
    "\n",
    `Calculated:\t${calculatedL1Fee} wei\n`,
    `Actual:\t${receipt.l1Fee} wei\n`,
  );
}

async function getRawTx(txHash: Hex) {
  const response = await fetch(
    `https://optimistic.etherscan.io/getRawTx?tx=${txHash}`,
  );
  const responseText = await response.text();
  const pattern = /Returned Raw Transaction Hex : <br><br>(0x[a-fA-F0-9]+)/;
  const matches = responseText.match(pattern);
  if (matches == null) {
    throw new Error(`Error fetching raw transaction for ${txHash}`);
  }
  // The raw transaction is in the first capture group.
  return matches[1] as Hex;
}

async function getBlobBaseFee(blockNumber: bigint) {
  const l1BlockPredeploy = getContract({
    address: "0x4200000000000000000000000000000000000015",
    abi: L1_BLOCK_PREDEPLOY_ABI,
    publicClient,
  });

  return await l1BlockPredeploy.read.blobBaseFee({blockNumber});
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
