import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";

import {HardhatUserConfig} from "hardhat/config";

export const L1_GAS_PRICE = Number(process.env.L1_GAS_PRICE);
export const L2_GAS_PRICE = Number(process.env.L2_GAS_PRICE);
export const ETH_PRICE_USD = Number(process.env.ETH_PRICE_USD);

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.22",
    settings: {
      evmVersion: "paris",
    },
  },
  networks: {
    hardhat: {
      gasPrice: L2_GAS_PRICE,
      initialBaseFeePerGas: L2_GAS_PRICE,
    },
  },
};

export default config;
