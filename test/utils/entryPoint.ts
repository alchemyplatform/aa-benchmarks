import {
  Account,
  Chain,
  GetContractReturnType,
  PublicClient,
  Transport,
  WalletClient,
  getContract,
} from "viem";
import {ENTRY_POINT_ARTIFACTS} from "../artifacts/entryPoint";

export type EntryPointV06 = GetContractReturnType<
  typeof ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V06.abi,
  PublicClient<Transport, Chain>,
  WalletClient<Transport, Chain, Account>
>;

export type EntryPointV07 = GetContractReturnType<
  typeof ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V07.abi,
  PublicClient<Transport, Chain>,
  WalletClient<Transport, Chain, Account>
>;

export function getEntryPointV06({
  publicClient,
  walletClient,
}: {
  publicClient: PublicClient<Transport, Chain>;
  walletClient: WalletClient<Transport, Chain, Account>;
}): EntryPointV06 {
  return getContract({
    address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V06.address,
    abi: ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V06.abi,
    publicClient,
    walletClient,
  });
}

export function getEntryPointV07({
  publicClient,
  walletClient,
}: {
  publicClient: PublicClient<Transport, Chain>;
  walletClient: WalletClient<Transport, Chain, Account>;
}): EntryPointV07 {
  return getContract({
    address: ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V07.address,
    abi: ENTRY_POINT_ARTIFACTS.ENTRY_POINT_V07.abi,
    publicClient,
    walletClient,
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
