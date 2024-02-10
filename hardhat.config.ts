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
      gasPrice: 10_000_000_000, // 10 gwei
    },
  },
};

export default config;
