import {
  Chain,
  GetContractReturnType,
  PublicClient,
  Transport,
  parseGwei,
} from "viem";
import {UserOperation, encodeUserOp} from "./userOp";
import {calculateL1Fee, calculateL1GasUsed} from "@eth-optimism/core-utils";

import {ENTRY_POINT_ARTIFACTS} from "../artifacts/entryPoint";
import hre from "hardhat";

export const L1_GAS_PRICE = parseGwei("20");
const OP_FIXED_OVERHEAD = 188;
const OP_DYNAMIC_OVERHEAD_SCALAR = 0.684;

export async function getBalance(
  accountAddress: `0x${string}`,
  entryPoint: GetContractReturnType<
    typeof ENTRY_POINT_ARTIFACTS.ENTRY_POINT.abi,
    PublicClient<Transport, Chain>
  >,
  value?: bigint,
) {
  const publicClient = await hre.viem.getPublicClient();
  let balance = value || 0n;
  balance = await entryPoint.read.balanceOf([accountAddress]);
  balance += await publicClient.getBalance({
    address: accountAddress,
  });
  return balance;
}

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
