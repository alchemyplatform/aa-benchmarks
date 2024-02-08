import "@nomicfoundation/hardhat-toolbox-viem";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.22",

  // typechain: {
  //   outDir: "src/types",
  //   target: "ethers-v6",
  //   alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  //   externalArtifacts: ["externalArtifacts/*.json"], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  //   dontOverrideCompile: false, // defaults to false
  // },
};

export default config;
