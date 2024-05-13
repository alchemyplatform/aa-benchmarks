import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config";
import {HardhatUserConfig} from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.22",
    settings: {
      evmVersion: "paris",
    },
  },
};

export default config;
