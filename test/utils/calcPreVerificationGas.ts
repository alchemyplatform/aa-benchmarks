import {encodeAbiParameters, keccak256, toBytes, toHex} from "viem";
import {PackedUserOperation, UserOperation} from "./userOp";

// Source: https://github.com/eth-infinitism/bundler/blob/26e4f4c433916a6a2ea8ecc91ba8a56cd904f27f/packages/sdk/src/calcPreVerificationGas.ts
interface GasOverheads {
  /**
   * fixed overhead for entire handleOp bundle.
   */
  fixed: number;

  /**
   * per userOp overhead, added on top of the above fixed per-bundle.
   */
  perUserOp: number;

  /**
   * overhead for userOp word (32 bytes) block
   */
  perUserOpWord: number;

  /**
   * zero byte cost, for calldata gas cost calculations
   */
  zeroByte: number;

  /**
   * non-zero byte cost, for calldata gas cost calculations
   */
  nonZeroByte: number;

  /**
   * expected bundle size, to split per-bundle overhead between all ops.
   */
  bundleSize: number;

  /**
   * expected length of the userOp signature.
   */
  sigSize: number;
}

// Source: https://github.com/eth-infinitism/bundler/blob/26e4f4c433916a6a2ea8ecc91ba8a56cd904f27f/packages/sdk/src/calcPreVerificationGas.ts
const DefaultGasOverheads: GasOverheads = {
  fixed: 21000,
  perUserOp: 18300,
  perUserOpWord: 4,
  zeroByte: 4,
  nonZeroByte: 16,
  bundleSize: 1,
  sigSize: 65,
};

/**
 * Adapted from https://github.com/eth-infinitism/bundler/blob/ver0.6/packages/sdk/src/calcPreVerificationGas.ts
 * calculate the preVerificationGas of the given UserOperation
 * preVerificationGas (by definition) is the cost overhead that can't be calculated on-chain.
 * it is based on parameters that are defined by the Ethereum protocol for external transactions.
 * @param userOp filled userOp to calculate. The only possible missing fields can be the signature and preVerificationGas itself
 * @param overheads gas overheads to use, to override the default values
 */
export function calcPreVerificationGasV06(
  userOp: Partial<UserOperation>,
  overheads?: Partial<GasOverheads>,
): number {
  const ov = {...DefaultGasOverheads, ...(overheads ?? {})};
  const p: UserOperation = {
    // dummy values, in case the UserOp is incomplete.
    preVerificationGas: 21000, // dummy value, just for calldata cost
    signature: toHex(Buffer.alloc(ov.sigSize, 1)), // dummy signature
    ...userOp,
  } as any;

  const packed = toBytes(packUserOp(p, false));
  const lengthInWord = (packed.length + 31) / 32;
  const callDataCost = packed
    .map((x) => (x === 0 ? ov.zeroByte : ov.nonZeroByte))
    .reduce((sum, x) => sum + x);
  const ret = Math.round(
    callDataCost +
      ov.fixed / ov.bundleSize +
      ov.perUserOp +
      ov.perUserOpWord * lengthInWord,
  );
  return ret;
}

/**
 * Adapted from https://github.com/eth-infinitism/bundler/blob/26e4f4c433916a6a2ea8ecc91ba8a56cd904f27f/packages/sdk/src/calcPreVerificationGas.ts
 * calculate the preVerificationGas of the given UserOperation
 * preVerificationGas (by definition) is the cost overhead that can't be calculated on-chain.
 * it is based on parameters that are defined by the Ethereum protocol for external transactions.
 * @param userOp filled userOp to calculate. The only possible missing fields can be the signature and preVerificationGas itself
 * @param overheads gas overheads to use, to override the default values
 */
export function calcPreVerificationGasV07(
  userOp: Partial<PackedUserOperation>,
  overheads?: Partial<GasOverheads>,
): number {
  const ov = {...DefaultGasOverheads, ...(overheads ?? {})};
  const p: PackedUserOperation = {
    // dummy values, in case the UserOp is incomplete.
    preVerificationGas: 21000, // dummy value, just for calldata cost
    signature: toHex(Buffer.alloc(ov.sigSize, 1)), // dummy signature
    ...userOp,
  } as any;

  const packed = toBytes(encodeUserOp(p, false));
  const lengthInWord = (packed.length + 31) / 32;
  const callDataCost = packed
    .map((x) => (x === 0 ? ov.zeroByte : ov.nonZeroByte))
    .reduce((sum, x) => sum + x);
  const ret = Math.round(
    callDataCost +
      ov.fixed / ov.bundleSize +
      ov.perUserOp +
      ov.perUserOpWord * lengthInWord,
  );
  return ret;
}

/**
 * Adapted from https://github.com/eth-infinitism/bundler/blob/ver0.6/packages/utils/src/ERC4337Utils.ts
 * pack the userOperation
 * @param op
 * @param forSignature "true" if the hash is needed to calculate the getUserOpHash()
 *  "false" to pack entire UserOp, for calculating the calldata cost of putting it on-chain.
 */
function packUserOp(op: UserOperation, forSignature = true): string {
  if (forSignature) {
    return encodeAbiParameters(
      [
        {type: "address"},
        {type: "uint256"},
        {type: "bytes32"},
        {type: "bytes32"},
        {type: "uint256"},
        {type: "uint256"},
        {type: "uint256"},
        {type: "uint256"},
        {type: "uint256"},
        {type: "bytes32"},
      ],
      [
        op.sender,
        op.nonce,
        keccak256(op.initCode),
        keccak256(op.callData),
        op.callGasLimit,
        op.verificationGasLimit,
        op.preVerificationGas,
        op.maxFeePerGas,
        op.maxPriorityFeePerGas,
        keccak256(op.paymasterAndData),
      ],
    );
  } else {
    // for the purpose of calculating gas cost encode also signature (and no keccak of bytes)
    return encodeAbiParameters(
      [
        {type: "address"},
        {type: "uint256"},
        {type: "bytes"},
        {type: "bytes"},
        {type: "uint256"},
        {type: "uint256"},
        {type: "uint256"},
        {type: "uint256"},
        {type: "uint256"},
        {type: "bytes"},
        {type: "bytes"},
      ],
      [
        op.sender,
        op.nonce,
        op.initCode,
        op.callData,
        op.callGasLimit,
        op.verificationGasLimit,
        op.preVerificationGas,
        op.maxFeePerGas,
        op.maxPriorityFeePerGas,
        op.paymasterAndData,
        op.signature,
      ],
    );
  }
}

/**
 * Adapted from https://github.com/eth-infinitism/bundler/blob/26e4f4c433916a6a2ea8ecc91ba8a56cd904f27f/packages/utils/src/ERC4337Utils.ts
 * abi-encode the userOperation
 * @param op a PackedUserOp
 * @param forSignature "true" if the hash is needed to calculate the getUserOpHash()
 *  "false" to pack entire UserOp, for calculating the calldata cost of putting it on-chain.
 */
function encodeUserOp(op: PackedUserOperation, forSignature = true): string {
  if (forSignature) {
    return encodeAbiParameters(
      [
        {type: "address"},
        {type: "uint256"},
        {type: "bytes32"},
        {type: "bytes32"},
        {type: "bytes32"},
        {type: "uint256"},
        {type: "bytes32"},
        {type: "bytes32"},
      ],
      [
        op.sender,
        op.nonce,
        keccak256(op.initCode),
        keccak256(op.callData),
        op.accountGasLimits,
        op.preVerificationGas,
        op.gasFees,
        keccak256(op.paymasterAndData),
      ],
    );
  } else {
    // for the purpose of calculating gas cost encode also signature (and no keccak of bytes)
    return encodeAbiParameters(
      [
        {type: "address"},
        {type: "uint256"},
        {type: "bytes"},
        {type: "bytes"},
        {type: "bytes32"},
        {type: "uint256"},
        {type: "bytes32"},
        {type: "bytes"},
        {type: "bytes"},
      ],
      [
        op.sender,
        op.nonce,
        op.initCode,
        op.callData,
        op.accountGasLimits,
        op.preVerificationGas,
        op.gasFees,
        op.paymasterAndData,
        op.signature,
      ],
    );
  }
}
