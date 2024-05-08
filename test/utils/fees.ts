import {calldataCost} from "@eth-optimism/core-utils";
import {formatEther} from "viem";
import {
  ETH_PRICE_USD,
  L1_BASE_FEE_SCALAR,
  L1_BLOB_BASE_FEE_SCALAR,
} from "../../settings";

const DECIMALS = 6n;

/**
 * NOTE: This is only accurate for post-Ecotone transactions.
 */
export function getL1GasUsed(serializedTx: `0x${string}`) {
  return calldataCost(serializedTx).toBigInt();
}

/**
 * NOTE: This is only accurate for post-Ecotone transactions.
 */
export function getL1Fee(
  l1GasUsed: bigint,
  l1BaseFee: bigint,
  l1BlobBaseFee: bigint,
) {
  const scaledBaseFee = L1_BASE_FEE_SCALAR * 16n * l1BaseFee;
  const scaledBlobBaseFee = L1_BLOB_BASE_FEE_SCALAR * l1BlobBaseFee;
  const fee = l1GasUsed * (scaledBaseFee + scaledBlobBaseFee);
  return fee / (16n * 10n ** DECIMALS);
}

export function formatEtherTruncated(wei: bigint, decimals: number = 9) {
  return Number(formatEther(wei)).toFixed(decimals).toString();
}

export function convertWeiToUsd(wei: bigint) {
  return (Number(formatEther(wei)) * ETH_PRICE_USD).toFixed(4);
}
