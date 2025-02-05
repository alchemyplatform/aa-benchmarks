import {
  Account,
  Address,
  Chain,
  Hex,
  Transport,
  WalletClient,
  concatHex,
  numberToHex,
} from "viem";
import {AccountData, AccountDataV06, AccountDataV07} from "../accounts";
import {
  calcPreVerificationGasV06,
  calcPreVerificationGasV07,
} from "./calcPreVerificationGas";
import {
  EntryPointV06,
  EntryPointV07,
  isEntryPointV06,
  isEntryPointV07,
} from "./entryPoint";

export interface UserOperation {
  sender: Address;
  nonce: bigint;
  initCode: Hex;
  callData: Hex;
  callGasLimit: bigint;
  verificationGasLimit: bigint;
  preVerificationGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  paymasterAndData: Hex;
  signature: Hex;
}

export interface PackedUserOperation {
  sender: Address;
  nonce: bigint;
  initCode: Hex;
  callData: Hex;
  accountGasLimits: Hex;
  preVerificationGas: bigint;
  gasFees: Hex;
  paymasterAndData: Hex;
  signature: Hex;
}

export function getUnsignedUserOp({
  sender,
  nonce,
  initCode = "0x",
  callData,
  getDummySignature,
}: {
  sender: Address;
  nonce: bigint;
  initCode?: Hex;
  callData: Hex;
  getDummySignature: AccountDataV06["getDummySignature"];
}): UserOperation {
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
    paymasterAndData: "0x" as Hex,
    signature: "0x" as Hex,
  };
  userOp.signature = getDummySignature(userOp);
  userOp.preVerificationGas = BigInt(calcPreVerificationGasV06(userOp));
  return userOp;
}

export function getUnsignedPackedUserOp({
  sender,
  nonce,
  initCode = "0x",
  callData,
  getDummySignature,
}: {
  sender: Address;
  nonce: bigint;
  initCode?: Hex;
  callData: Hex;
  getDummySignature: AccountDataV07["getDummySignature"];
}): PackedUserOperation {
  const packedUserOp = {
    sender,
    nonce,
    initCode,
    callData,
    accountGasLimits: concatHex([
      numberToHex(2_000_000n, {size: 16}), // verificationGasLimit
      numberToHex(1_000_000n, {size: 16}), // callGasLimit
    ]),
    preVerificationGas: 21_000n,
    gasFees: concatHex([
      numberToHex(1n, {size: 16}), // maxPriorityFeePerGas
      numberToHex(1n, {size: 16}), // maxFeePerGas
    ]),
    paymasterAndData: "0x" as Hex,
    signature: "0x" as Hex,
  };
  packedUserOp.signature = getDummySignature(packedUserOp);
  packedUserOp.preVerificationGas = BigInt(
    calcPreVerificationGasV07(packedUserOp),
  );
  return packedUserOp;
}

interface HandleOpsParams<TEntryPoint extends EntryPointV06 | EntryPointV07> {
  entryPoint: TEntryPoint;
  signer: WalletClient<Transport, Chain, Account>;
  beneficiary: WalletClient<Transport, Chain, Account>;
  sender: Address;
  initCode?: Hex;
  callData: Hex;
  getNonce: AccountData<TEntryPoint>["getNonce"];
  getDummySignature: AccountData<TEntryPoint>["getDummySignature"];
  getSignature: AccountData<TEntryPoint>["getOwnerSignature"];
}

async function handleOpsV06(
  params: HandleOpsParams<EntryPointV06>,
): Promise<Hex> {
  const nonce = await params.getNonce(params.sender);
  const userOp = getUnsignedUserOp({
    sender: params.sender,
    nonce,
    initCode: params.initCode,
    callData: params.callData,
    getDummySignature: params.getDummySignature,
  });
  userOp.signature = await params.getSignature(params.signer, userOp);
  return await params.entryPoint.write.handleOps([
    [userOp],
    params.beneficiary.account.address,
  ]);
}

async function handleOpsV07(
  params: HandleOpsParams<EntryPointV07>,
): Promise<Hex> {
  const nonce = await params.getNonce(params.sender);
  const packedUserOp = getUnsignedPackedUserOp({
    sender: params.sender,
    nonce,
    initCode: params.initCode,
    callData: params.callData,
    getDummySignature: params.getDummySignature,
  });
  packedUserOp.signature = await params.getSignature(
    params.signer,
    packedUserOp,
  );
  return await params.entryPoint.write.handleOps([
    [packedUserOp],
    params.beneficiary.account.address,
  ]);
}

interface WrappedHandleOpsParams<
  TAccountData extends AccountDataV06 | AccountDataV07,
> {
  accountData: TAccountData;
  signer: WalletClient<Transport, Chain, Account>;
  beneficiary: WalletClient<Transport, Chain, Account>;
  sender: Address;
  initCode?: Hex;
  callData: Hex;
  getNonce: TAccountData["getNonce"];
  getDummySignature: TAccountData["getDummySignature"];
  getSignature: TAccountData["getOwnerSignature"];
}

function isWrappedHandleOpsParamsV06(
  params: WrappedHandleOpsParams<AccountDataV06 | AccountDataV07>,
): params is WrappedHandleOpsParams<AccountDataV06> {
  return isEntryPointV06(params.accountData.entryPoint);
}

function isWrappedHandleOpsParamsV07(
  params: WrappedHandleOpsParams<AccountDataV06 | AccountDataV07>,
): params is WrappedHandleOpsParams<AccountDataV07> {
  return isEntryPointV07(params.accountData.entryPoint);
}

export async function wrappedHandleOps<
  TAccountData extends AccountDataV06 | AccountDataV07,
>(params: WrappedHandleOpsParams<TAccountData>): Promise<Hex> {
  if (isWrappedHandleOpsParamsV06(params)) {
    return await handleOpsV06({
      entryPoint: params.accountData.entryPoint,
      signer: params.signer,
      beneficiary: params.beneficiary,
      sender: params.sender,
      initCode: params.initCode,
      callData: params.callData,
      getNonce: params.getNonce,
      getDummySignature: params.getDummySignature,
      getSignature: params.getSignature,
    });
  } else if (isWrappedHandleOpsParamsV07(params)) {
    return await handleOpsV07({
      entryPoint: params.accountData.entryPoint,
      signer: params.signer,
      beneficiary: params.beneficiary,
      sender: params.sender,
      initCode: params.initCode,
      callData: params.callData,
      getNonce: params.getNonce,
      getDummySignature: params.getDummySignature,
      getSignature: params.getSignature,
    });
  }
  throw new Error("Invalid entry point");
}
