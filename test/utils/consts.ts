import {TOKEN_ARTIFACTS} from "../artifacts/tokens";
import {encodeFunctionData, getAbiItem, slice, getFunctionSelector} from "viem";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const ERC20_TRANSFER_SELECTOR = getFunctionSelector(
  getAbiItem({
    abi: TOKEN_ARTIFACTS.USDC.abi,
    name: "transfer",
  }),
);

export const ERC20_APPROVE_SELECTOR = getFunctionSelector(
  getAbiItem({
    abi: TOKEN_ARTIFACTS.USDC.abi,
    name: "approve",
  }),
);
