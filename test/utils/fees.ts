import {calldataCost} from "@eth-optimism/core-utils";
import {formatEther} from "viem";
import {ETH_PRICE_USD, L1_GAS_PRICE} from "../../hardhat.config";

const OP_FIXED_OVERHEAD = 188;
const OP_DYNAMIC_OVERHEAD_SCALAR = 0.684 * 10 ** 3;

export function getL1GasUsed(serializedTx: `0x${string}`) {
  return calldataCost(serializedTx).toBigInt() + BigInt(OP_FIXED_OVERHEAD);
}

export function getL1Fee(gasUsed: bigint) {
  return (
    (gasUsed * BigInt(L1_GAS_PRICE) * BigInt(OP_DYNAMIC_OVERHEAD_SCALAR)) /
    BigInt(10 ** 3)
  );
}

export function formatEtherTruncated(wei: bigint, decimals: number = 9) {
  return Number(formatEther(wei)).toFixed(decimals).toString();
}

export function convertWeiToUsd(wei: bigint) {
  return (Number(formatEther(wei)) * ETH_PRICE_USD).toFixed(2);
}
