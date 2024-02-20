import {biconomy_v2} from "./accounts/biconomy-v2";
import {kernel} from "./accounts/kernel";
import {lightAccount} from "./accounts/lightAccount";
import {modularAccount} from "./accounts/modularAccount";
import {safe} from "./accounts/safe";
import {AccountConfig} from "./benchmark";

export const ACCOUNTS_TO_BENCHMARK: AccountConfig[] = [
  modularAccount,
  biconomy_v2,
  kernel,
  safe,
  lightAccount,
];
