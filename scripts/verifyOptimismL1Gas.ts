#!/usr/bin/env npx ts-node

import {program} from "commander";
import "dotenv/config";
import {Hex, createPublicClient, http} from "viem";
import {optimism} from "viem/chains";
import {getL1Fee, getL1GasUsed} from "../test/utils/fees";

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
  const receipt = await getTransactionReceipt(txHash);
  const calculatedL1Fee = getL1Fee(calculatedL1GasUsed, receipt.l1GasPrice!);

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

async function getTransactionReceipt(txHash: Hex) {
  const publicClient = createPublicClient({
    chain: optimism,
    transport: http(),
  });
  return await publicClient.getTransactionReceipt({hash: txHash});
}

main();
