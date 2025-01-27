import {
  Account,
  Chain,
  GetContractReturnType,
  Transport,
  WalletClient,
  getContract,
} from "viem";
import {ENTRY_POINT_ARTIFACTS} from "../artifacts/entryPoint";

export type EntryPointV06 = GetContractReturnType<
  typeof ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V06.abi,
  WalletClient<Transport, Chain, Account>
>;

export type EntryPointV07 = GetContractReturnType<
  typeof ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V07.abi,
  WalletClient<Transport, Chain, Account>
>;

export function getEntryPointV06({
  walletClient,
}: {
  walletClient: WalletClient<Transport, Chain, Account>;
}): EntryPointV06 {
  return getContract({
    address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V06.address,
    abi: ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V06.abi,
    client: walletClient,
  });
}

export function getEntryPointV07({
  walletClient,
}: {
  walletClient: WalletClient<Transport, Chain, Account>;
}): EntryPointV07 {
  return getContract({
    address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V07.address,
    abi: ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V07.abi,
    client: walletClient,
  });
}

export function isEntryPointV06(
  entryPoint: EntryPointV06 | EntryPointV07,
): entryPoint is EntryPointV06 {
  return entryPoint.abi === ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V06.abi;
}

export function isEntryPointV07(
  entryPoint: EntryPointV06 | EntryPointV07,
): entryPoint is EntryPointV07 {
  return entryPoint.abi === ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V07.abi;
}
