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
      gasPrice: 3_000_000, // 0.003 gwei
      initialBaseFeePerGas: 3_000_000, // 0.003 gwei
    },
  },
};

export default config;
