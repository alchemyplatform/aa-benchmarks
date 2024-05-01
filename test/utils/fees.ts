import {Hex, formatEther, hexToBytes} from "viem";
import {ETH_PRICE_USD} from "../../settings";

// from https://github.com/ethereum-optimism/optimism/blob/ba174f4d5f4020ff16298fefd86b55a29d4724a9/packages/contracts-bedrock/src/L2/GasPriceOracle.sol#L24
const DECIMALS = 6n;
const L1_BASE_FEE = BigInt(process.env.L1_BASE_FEE || "");
const L1_BLOB_BASE_FEE = BigInt(process.env.L1_BLOB_BASE_FEE || "");
const L1_BASE_FEE_SCALAR = BigInt(process.env.L1_BASE_FEE_SCALAR || "");
const L1_BLOB_BASE_FEE_SCALAR = BigInt(
  process.env.L1_BLOB_BASE_FEE_SCALAR || "",
);

export function getL1GasUsed(serializedTx: Hex) {
  return calldataGas(serializedTx);
}

// matches https://github.com/ethereum-optimism/optimism/blob/ba174f4d5f4020ff16298fefd86b55a29d4724a9/packages/contracts-bedrock/src/L2/GasPriceOracle.sol#L138
export function getL1Fee(gasUsed: bigint) {
  const scaledBaseFee = L1_BASE_FEE_SCALAR * 16n * L1_BASE_FEE;
  const scaledBlobBaseFee = L1_BLOB_BASE_FEE_SCALAR * L1_BLOB_BASE_FEE;
  const fee = gasUsed * (scaledBaseFee + scaledBlobBaseFee);
  return fee / (16n * 10n ** DECIMALS);
}

export function formatEtherTruncated(wei: bigint, decimals: number = 9) {
  return Number(formatEther(wei)).toFixed(decimals).toString();
}

export function convertWeiToUsd(wei: bigint) {
  return (Number(formatEther(wei)) * ETH_PRICE_USD).toFixed(2);
}

// matches https://github.com/ethereum-optimism/optimism/blob/ba174f4d5f4020ff16298fefd86b55a29d4724a9/packages/contracts-bedrock/src/L2/GasPriceOracle.sol#L149
const calldataGas = (data: Hex): bigint => {
  const {zeros, ones} = zeroesAndOnes(data);
  const total = zeros * 4n + ones * 16n;
  return total + 68n * 16n;
};

const zeroesAndOnes = (data: Hex): {zeros: bigint; ones: bigint} => {
  const bytes = hexToBytes(data);
  let zeros = 0n;
  let ones = 0n;
  for (const byte of bytes) {
    if (byte === 0) {
      zeros++;
    } else {
      ones++;
    }
  }
  return {zeros, ones};
};
