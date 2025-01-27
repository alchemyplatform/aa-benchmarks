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
import {biconomy_v2} from "./accounts/biconomy-v2";
import {coinbaseSmartWallet} from "./accounts/coinbaseSmartWallet";
import {kernel} from "./accounts/kernel";
import {lightAccount} from "./accounts/lightAccount";
import {lightAccountV2} from "./accounts/lightAccountV2";
import {modularAccount} from "./accounts/modularAccount";
import {multiOwnerLightAccount} from "./accounts/multiOwnerLightAccount";
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
    signer: WalletClient<Transport, Chain, Account>,
    userOp: TUserOperation,
    entryPoint: TEntryPoint,
  ) => Promise<Hex>;
  encodeUserOpExecute: (to: Address, value: bigint, data: Hex) => Hex;
  encodeRuntimeExecute?: (
    to: Address,
    value: bigint,
    data: Hex,
    owner?: WalletClient<Transport, Chain, Account>,
    accountAddress?: Address,
  ) => Promise<Hex>;
  getDummySignature: (userOp: TUserOperation) => Hex;
  getInitCode: (salt: bigint, ownerAddress: Address) => Hex;

  // Session key methods
  installSessionKeyPlugin?: (
    account: Address,
    owner: WalletClient<Transport, Chain, Account>,
  ) => void;
  addSessionKeyCalldata?: (
    key: Hex,
    target: Address,
    tokens: GetContractReturnType<
      typeof TOKEN_ARTIFACTS.USDC.abi,
      Client<Transport, Chain>
    >[],
    spendLimit: bigint,
    account?: Address,
  ) => Hex;
  getSessionKeySignature?: (
    signer: WalletClient<Transport, Chain, Account>,
    userOp: TUserOperation,
    entryPoint: TEntryPoint,
  ) => Promise<Hex>;
  useSessionKeyERC20TransferCalldata?: (
    token: GetContractReturnType<
      typeof TOKEN_ARTIFACTS.USDC.abi,
      Client<Transport, Chain>
    >,
    key: Hex,
    to: Address,
    amount: bigint,
  ) => Hex;
  useSessionKeyNativeTokenTransferCalldata?: (
    key: Hex,
    to: Address,
    amount: bigint,
  ) => Hex;
}

export type AccountDataV06 = AccountData<EntryPointV06>;

export type AccountDataV07 = AccountData<EntryPointV07>;

export interface AccountConfig {
  name: string;
  accountFixture: () => Promise<AccountDataV06 | AccountDataV07>;
}

export const ACCOUNTS_TO_BENCHMARK: AccountConfig[] = [
  modularAccount,
  biconomy_v2,
  kernel,
  safe,
  simpleAccount,
  lightAccount,
  lightAccountV2,
  multiOwnerLightAccount,
  coinbaseSmartWallet,
];
