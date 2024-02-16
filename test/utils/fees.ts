import {calculateL1Fee, calculateL1GasUsed} from "@eth-optimism/core-utils";
import {formatEther} from "viem";
import {ETH_PRICE_USD, L1_GAS_PRICE} from "../../hardhat.config";
import {UserOperation, encodeUserOp} from "./userOp";

const OP_FIXED_OVERHEAD = 188;
const OP_DYNAMIC_OVERHEAD_SCALAR = 0.684;

export function getL1GasUsedForUserOp(userOp: UserOperation) {
  const encodedUserOp = encodeUserOp(userOp);
  return getL1GasUsedForCallData(encodedUserOp);
}

export function getL1GasUsedForCallData(callData: `0x${string}`) {
  return calculateL1GasUsed(callData, OP_FIXED_OVERHEAD).toBigInt();
}

export function getL1FeeForUserOp(userOp: UserOperation) {
  const encodedUserOp = encodeUserOp(userOp);
  return getL1FeeForCallData(encodedUserOp);
}

export function getL1FeeForCallData(callData: `0x${string}`) {
  return calculateL1Fee(
    callData,
    OP_FIXED_OVERHEAD,
    Number(L1_GAS_PRICE),
    OP_DYNAMIC_OVERHEAD_SCALAR * 10 ** 3,
    3,
  ).toBigInt();
}

export function formatEtherTruncated(wei: bigint, decimals: number = 9) {
  return Number(formatEther(wei)).toFixed(decimals).toString();
}

export function convertWeiToUsd(wei: bigint) {
  return (Number(formatEther(wei)) * ETH_PRICE_USD).toFixed(2);
}
