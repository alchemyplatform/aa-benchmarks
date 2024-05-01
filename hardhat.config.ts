import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

import {HardhatUserConfig} from "hardhat/config";
import {L2_GAS_PRICE} from "./settings";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.22",
    settings: {
      evmVersion: "paris",
    },
  },
  networks: {
    hardhat: {
      gasPrice: Number(L2_GAS_PRICE),
      initialBaseFeePerGas: Number(L2_GAS_PRICE),
    },
  },
};

export default config;
