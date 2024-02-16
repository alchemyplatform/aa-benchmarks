import {encodeAbiParameters} from "viem";
import { WalletClient } from "viem";

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

// export function sendUserOp(
//   accountAddr: `0x${string}`, 
//   getDummySignature: (userOp: UserOperation) => `0x${string}`, 
//   initCode: `0x${string}`, 
//   , 
//   callData: `0x${string}`, 
//   getSignature: (
//     signer: WalletClient<Transport, Chain, Account>,
//     userOp: UserOperation,
//     entryPoint: GetContractReturnType<
//       typeof ENTRY_POINT_ARTIFACTS.ENTRY_POINT.abi,
//       PublicClient<Transport, Chain>
//     >,
//   ) => Promise<`0x${string}`>,
//   entryPoint: any
// ) {
//   /**
//    * need:
//    * 1. accountAddr
//    * 2. getDummySignature
//    * 2. initCode
//    * 3. callData
//    * 4. getOwnerSignature
//    * 
//    * does:
//    * 1. get nonce
//    * 2. dummy sig
//    * 3. gas estimation
//    * 4. owner sig
//    */
//   return entryPoint.write.sendUserOp([encodeUserOp(userOp)]);
// }