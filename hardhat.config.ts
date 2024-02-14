import "@nomicfoundation/hardhat-toolbox-viem";

import {HardhatUserConfig} from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.22",
    settings: {
      evmVersion: "paris",
    },
  },
  networks: {
    hardhat: {
      gasPrice: 100_000_000, // 0.1 gwei
      initialBaseFeePerGas: 100_000_000, // 0.1 gwei
    },
  },
};

export default config;
