import {calcPreVerificationGas} from "@account-abstraction/sdk";
import {encodeAbiParameters} from "viem";
import {AccountFixtureReturnType} from "../benchmark";

export interface UserOperation {
  sender: `0x${string}`;
  nonce: bigint;
  initCode: `0x${string}`;
  callData: `0x${string}`;
  callGasLimit: bigint;
  verificationGasLimit: bigint;
  preVerificationGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  paymasterAndData: `0x${string}`;
  signature: `0x${string}`;
}

export function encodeUserOp(userOp: UserOperation) {
  return encodeAbiParameters(
    [
      {name: "sender", type: "address"},
      {name: "nonce", type: "uint256"},
      {name: "initCode", type: "bytes"},
      {name: "callData", type: "bytes"},
      {name: "callGasLimit", type: "uint256"},
      {name: "verificationGasLimit", type: "uint256"},
      {name: "preVerificationGas", type: "uint256"},
      {name: "maxFeePerGas", type: "uint256"},
      {name: "maxPriorityFeePerGas", type: "uint256"},
      {name: "paymasterAndData", type: "bytes"},
      {name: "signature", type: "bytes"},
    ],
    [
      userOp.sender,
      userOp.nonce,
      userOp.initCode,
      userOp.callData,
      userOp.callGasLimit,
      userOp.verificationGasLimit,
      userOp.preVerificationGas,
      userOp.maxFeePerGas,
      userOp.maxPriorityFeePerGas,
      userOp.paymasterAndData,
      userOp.signature,
    ],
  );
}

interface GetUnsignedUserOpInput {
  sender: `0x${string}`;
  nonce: bigint;
  initCode: `0x${string}`;
  callData: `0x${string}`;
  getDummySignature: AccountFixtureReturnType["getDummySignature"];
}

export function getUnsignedUserOp({
  sender,
  nonce,
  initCode,
  callData,
  getDummySignature,
}: GetUnsignedUserOpInput) {
  const userOp = {
    sender,
    nonce,
    initCode,
    callData,
    callGasLimit: 1_000_000n,
    verificationGasLimit: 2_000_000n,
    preVerificationGas: 21_000n,
    maxFeePerGas: 1n,
    maxPriorityFeePerGas: 1n,
    paymasterAndData: "0x" as `0x${string}`,
    signature: "0x" as `0x${string}`,
  };
  userOp.signature = getDummySignature(userOp);
  userOp.preVerificationGas = BigInt(calcPreVerificationGas(userOp));
  return userOp;
}
