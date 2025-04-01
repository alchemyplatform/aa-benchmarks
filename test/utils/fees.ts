import {calldataCost} from "@eth-optimism/core-utils";
import {formatEther} from "viem";

// From https://github.com/ethereum-optimism/optimism/blob/ba174f4d5f4020ff16298fefd86b55a29d4724a9/packages/contracts-bedrock/src/L2/GasPriceOracle.sol#L24
const DECIMALS = 6n;

/**
 * NOTE: This is only accurate for post-Ecotone transactions.
 */
export function getL1GasUsed(serializedTx: `0x${string}`) {
  return calldataCost(serializedTx).toBigInt();
}

/**
 * Matches https://github.com/ethereum-optimism/optimism/blob/ba174f4d5f4020ff16298fefd86b55a29d4724a9/packages/contracts-bedrock/src/L2/GasPriceOracle.sol#L138
 * NOTE: This is only accurate for post-Ecotone transactions.
 */
export function getL1Fee(
  l1GasUsed: bigint,
  l1BaseFee: bigint,
  l1BaseFeeScalar: bigint,
  blobBaseFee: bigint,
  blobBaseFeeScalar: bigint,
) {
  const scaledBaseFee = l1BaseFeeScalar * 16n * l1BaseFee;
  const scaledBlobBaseFee = blobBaseFeeScalar * blobBaseFee;
  const fee = l1GasUsed * (scaledBaseFee + scaledBlobBaseFee);
  return fee / (16n * 10n ** DECIMALS);
}

export function formatEtherTruncated(wei: bigint, decimals: number = 9) {
  return Number(formatEther(wei)).toFixed(decimals).toString();
}

export function convertWeiToUsdNumber(wei: bigint, gasTokenPrice: number) {
  return Number(formatEther(wei)) * gasTokenPrice;
}

export function convertWeiToUsd(wei: bigint, gasTokenPrice: number) {
  return convertWeiToUsdNumber(wei, gasTokenPrice).toFixed(5);
}
