import {
  Account,
  Address,
  Chain,
  Client,
  GetContractReturnType,
  Hex,
  Transport,
  WalletClient,
} from "viem";
import {coinbaseSmartWallet} from "./accounts/coinbaseSmartWallet";
import {kernelV3} from "./accounts/kernelV3";
import {modularAccountV2} from "./accounts/modularAccountV2";
import {multiOwnerLightAccount as lightAccountV2} from "./accounts/multiOwnerLightAccount";
import {nexus} from "./accounts/nexus";
import {safe} from "./accounts/safe";
import {simpleAccount} from "./accounts/simpleAccount";
import {TOKEN_ARTIFACTS} from "./artifacts/tokens";
import {EntryPointV06, EntryPointV07} from "./utils/entryPoint";
import {PackedUserOperation, UserOperation} from "./utils/userOp";

export interface AccountData<
  TEntryPoint extends EntryPointV06 | EntryPointV07,
  TUserOperation extends
    | UserOperation
    | PackedUserOperation = TEntryPoint extends EntryPointV06
    ? UserOperation
    : PackedUserOperation,
> {
  entryPoint: TEntryPoint;
  createAccount: (salt: bigint, ownerAddress: Address) => Promise<Address>;
  getAccountAddress: (salt: bigint, ownerAddress: Address) => Promise<Address>;
  getOwnerSignature: (
    ownerSigner: WalletClient<Transport, Chain, Account>,
    userOp: TUserOperation,
  ) => Promise<Hex>;
  getNonce: (accountAddress: Address) => Promise<bigint>;
  getDummySignature: (userOp: TUserOperation) => Hex;
  getInitCode: (salt: bigint, ownerAddress: Address) => Hex;
  encodeUserOpExecute: (to: Address, value: bigint, data: Hex) => Hex;
  encodeRuntimeExecute?: (
    to: Address,
    value: bigint,
    data: Hex,
    ownerSigner?: WalletClient<Transport, Chain, Account>,
    accountAddress?: Address,
  ) => Promise<Hex>;
  encodeSessionKeyCreate?: (
    sessionKeySigner: WalletClient<Transport, Chain, Account>,
    allowedTargetAddress: Address,
    allowedTokenAddress: Address,
    spendLimitWei: bigint,
    accountAddress: Address,
  ) => {
    callData: Hex;
    getSessionKeyCreateSignature?: (
      ownerSigner: WalletClient<Transport, Chain, Account>,
      userOp: TUserOperation,
    ) => Promise<Hex>;
  };
  encodeSessionKeyERC20Transfer?: (
    token: GetContractReturnType<
      typeof TOKEN_ARTIFACTS.USDC.abi,
      Client<Transport, Chain>
    >,
    sessionKeyAddress: Hex,
    to: Address,
    amount: bigint,
  ) => Hex;
  encodeSessionKeyNativeTokenTransfer?: (
    sessionKeyAddress: Hex,
    to: Address,
    amount: bigint,
  ) => Hex;
  getSessionKeySignature?: (
    sessionKeySigner: WalletClient<Transport, Chain, Account>,
    userOp: TUserOperation,
  ) => Promise<Hex>;
  getSessionKeyNonce?: (accountAddress: Address) => Promise<bigint>;
}

export type AccountDataV06 = AccountData<EntryPointV06>;

export type AccountDataV07 = AccountData<EntryPointV07>;

export interface AccountConfig {
  name: string;
  accountFixture: () => Promise<AccountDataV06 | AccountDataV07>;
}

export const ACCOUNTS_TO_BENCHMARK: AccountConfig[] = [
  modularAccountV2,
  nexus,
  kernelV3,
  safe,
  lightAccountV2,
  coinbaseSmartWallet,
  simpleAccount,
];
