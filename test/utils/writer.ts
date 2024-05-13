import markdownTable from "markdown-table";
import replaceInFile from "replace-in-file";
import {Chain, formatGwei} from "viem";
import {arbitrum, base, mainnet, optimism, polygon, zora} from "viem/chains";
import {
  ARB_GAS_PRICE,
  BASE_BLOB_BASE_FEE,
  BASE_BLOB_BASE_FEE_SCALAR,
  BASE_GAS_PRICE,
  BASE_L1_BASE_FEE,
  BASE_L1_BASE_FEE_SCALAR,
  DRY_RUN,
  ETH_GAS_PRICE,
  ETH_PRICE_USD,
  OPT_BLOB_BASE_FEE,
  OPT_BLOB_BASE_FEE_SCALAR,
  OPT_GAS_PRICE,
  OPT_L1_BASE_FEE,
  OPT_L1_BASE_FEE_SCALAR,
  POLYGON_GAS_PRICE,
  POLYGON_PRICE_USD,
  SNAPSHOT_TIMESTAMP_MS,
  ZORA_BLOB_BASE_FEE,
  ZORA_BLOB_BASE_FEE_SCALAR,
  ZORA_GAS_PRICE,
  ZORA_L1_BASE_FEE,
  ZORA_L1_BASE_FEE_SCALAR,
} from "../../settings";
import {convertWeiToUsd, formatEtherTruncated, getL1Fee} from "./fees";

interface ChainConfig {
  [chainId: number]: {
    file: string;
    title: string;
    gasPrice: bigint;
    gasTokenSymbol: string;
    gasTokenPrice: number;
    l1BaseFee?: bigint;
    l1BaseFeeScalar?: bigint;
    blobBaseFee?: bigint;
    blobBaseFeeScalar?: bigint;
  };
}
export interface GasMetrics {
  gasUsed: null | bigint;
  l1GasUsed: null | bigint;
}

const resultMap: {
  [test: string]: {[account: string]: GasMetrics};
} = {};

const CHAIN_CONFIG: ChainConfig = {
  [mainnet.id]: {
    file: "benchmarks/ethereum.md",
    title: "Ethereum Mainnet",
    gasPrice: ETH_GAS_PRICE,
    gasTokenSymbol: "ETH",
    gasTokenPrice: ETH_PRICE_USD,
  },
  [arbitrum.id]: {
    file: "benchmarks/arbitrum.md",
    title: "Arbitrum Mainnet",
    gasPrice: ARB_GAS_PRICE,
    gasTokenSymbol: "ETH",
    gasTokenPrice: ETH_PRICE_USD,
  },
  [polygon.id]: {
    file: "benchmarks/polygon.md",
    title: "Polygon Mainnet",
    gasPrice: POLYGON_GAS_PRICE,
    gasTokenSymbol: "MATIC",
    gasTokenPrice: POLYGON_PRICE_USD,
  },
  [optimism.id]: {
    file: "benchmarks/optimism.md",
    title: "Optimism Mainnet",
    gasPrice: OPT_GAS_PRICE,
    gasTokenSymbol: "ETH",
    gasTokenPrice: ETH_PRICE_USD,
    l1BaseFee: OPT_L1_BASE_FEE,
    l1BaseFeeScalar: OPT_L1_BASE_FEE_SCALAR,
    blobBaseFee: OPT_BLOB_BASE_FEE,
    blobBaseFeeScalar: OPT_BLOB_BASE_FEE_SCALAR,
  },
  [base.id]: {
    file: "benchmarks/base.md",
    title: "Base Mainnet",
    gasPrice: BASE_GAS_PRICE,
    gasTokenSymbol: "ETH",
    gasTokenPrice: ETH_PRICE_USD,
    l1BaseFee: BASE_L1_BASE_FEE,
    l1BaseFeeScalar: BASE_L1_BASE_FEE_SCALAR,
    blobBaseFee: BASE_BLOB_BASE_FEE,
    blobBaseFeeScalar: BASE_BLOB_BASE_FEE_SCALAR,
  },
  [zora.id]: {
    file: "benchmarks/zora.md",
    title: "Zora Mainnet",
    gasPrice: ZORA_GAS_PRICE,
    gasTokenSymbol: "ETH",
    gasTokenPrice: ETH_PRICE_USD,
    l1BaseFee: ZORA_L1_BASE_FEE,
    l1BaseFeeScalar: ZORA_L1_BASE_FEE_SCALAR,
    blobBaseFee: ZORA_BLOB_BASE_FEE,
    blobBaseFeeScalar: ZORA_BLOB_BASE_FEE_SCALAR,
  },
};

const TABLE_HEADERS = [
  "Execution gas",
  "Execution fee (ETH)",
  "L1 gas",
  "L1 fee (ETH)",
  "Total fee (ETH)",
  "Total fee (USD)",
];

export function collectResult(
  test: string,
  accountName: string,
  metrics: GasMetrics,
) {
  if (!resultMap[test]) {
    resultMap[test] = {};
  }
  resultMap[test][accountName] = metrics;
}

export async function writeResults() {
  writeResult(mainnet);
  writeResult(arbitrum);
  writeResult(polygon);
  writeResult(optimism);
  writeResult(base);
  writeResult(zora);

  if (DRY_RUN) {
    console.log(
      "\n  🌵 Dry run! Results printed above. Run `pnpm benchmark:write` to update the results in files.",
    );
  }
}

function writeResult(chain: Chain) {
  if (!(chain.id in CHAIN_CONFIG)) {
    throw new Error(`Unsupported chain: ${chain.id}`);
  }
  const config = CHAIN_CONFIG[chain.id];

  let buffer = `### ${config.title}\n\n`;
  buffer += "#### Run options\n\n";
  buffer += `Values taken at: ${new Date(SNAPSHOT_TIMESTAMP_MS).toUTCString()}\n\n`;

  const configTable = [
    ["Option", "Value"],
    ["Gas price (gwei)", `${monospace(formatGwei(config.gasPrice))}`],
    [
      "L1 base fee (gwei)",
      config.l1BaseFee ? `${monospace(formatGwei(config.l1BaseFee))}` : "-",
    ],
    [
      "L1 base fee scalar",
      config.l1BaseFeeScalar
        ? `${monospace("" + config.l1BaseFeeScalar)}`
        : "-",
    ],
    [
      "Blob base fee (wei)",
      config.blobBaseFee ? `${monospace("" + config.blobBaseFee)}` : "-",
    ],
    [
      "Blob base fee scalar",
      config.blobBaseFeeScalar
        ? `${monospace("" + config.blobBaseFeeScalar)}`
        : "-",
    ],
    [
      `${config.gasTokenSymbol} price (USD)`,
      `${monospace(`$${config.gasTokenPrice}`)}`,
    ],
  ];
  buffer += markdownTable(configTable, {align: ["l", "r"]}) + "\n\n";

  let align;
  for (const test in resultMap) {
    buffer += `#### ${test}\n\n`;
    const testResults = resultMap[test];
    // Metric names, with the first column left intentionally blank.
    const tableHeader = ["", ...TABLE_HEADERS];
    if (!align) {
      align = ["l", ...tableHeader.map(() => "r")];
    }
    const tableRows = [];
    for (const [accountName, metrics] of Object.entries(testResults)) {
      if (!metrics.gasUsed) {
        tableRows.push([
          accountName,
          ...Array(5).fill(monospace("-")),
          monospace("Unsupported"),
        ]);
        continue;
      }
      const executionFee = metrics.gasUsed * config.gasPrice;
      const l1Fee =
        metrics.l1GasUsed && config.l1BaseFee
          ? getL1Fee(
              metrics.l1GasUsed,
              config.l1BaseFee!,
              config.l1BaseFeeScalar!,
              config.blobBaseFee!,
              config.blobBaseFeeScalar!,
            )
          : null;
      const totalFee = executionFee + (l1Fee || 0n);
      tableRows.push([
        accountName, // Account name
        monospace(metrics.gasUsed.toString()), // Execution gas
        monospace(formatEtherTruncated(executionFee)), // Execution fee (ETH)
        monospace(l1Fee ? metrics.l1GasUsed!.toString() : "-"), // L1 gas
        monospace(l1Fee ? formatEtherTruncated(l1Fee) : "-"), // L1 fee (ETH)
        monospace(formatEtherTruncated(totalFee)), // Total fee (ETH)
        monospace(convertWeiToUsd(totalFee, config.gasTokenPrice)), // Total fee (USD)
      ]);
    }
    const table = [tableHeader, ...tableRows];
    buffer += markdownTable(table, {align}) + "\n\n";
  }

  if (DRY_RUN) {
    console.log(buffer);
  } else {
    if (chain === optimism) {
      // Write to the main README.md for Optimism.
      replaceInFile.sync({
        files: "README.md",
        from: /<!-- BENCHMARK_RESULTS -->[\s\S]*<!-- \/BENCHMARK_RESULTS -->/,
        to: `<!-- BENCHMARK_RESULTS -->\n\n${buffer}<!-- /BENCHMARK_RESULTS -->`,
      });
      console.log("\n  📝 Results written to README.md!");
    }

    replaceInFile.sync({
      files: config.file,
      from: /<!-- BENCHMARK_RESULTS -->[\s\S]*<!-- \/BENCHMARK_RESULTS -->/,
      to: `<!-- BENCHMARK_RESULTS -->\n\n${buffer}<!-- /BENCHMARK_RESULTS -->`,
    });
    console.log(`\n  📝 Results written to ${config.file}!`);
  }
}

function monospace(word: string) {
  return `\`${word}\``;
}
