import markdownTable from "markdown-table";
import replaceInFile from "replace-in-file";
import {Chain, formatGwei} from "viem";
import {arbitrum, base, mainnet, optimism, polygon, zora} from "viem/chains";
import {
  ARB_GAS_PRICE,
  ARB_GAS_PRICE_HIGH,
  BASE_BLOB_BASE_FEE,
  BASE_BLOB_BASE_FEE_HIGH,
  BASE_BLOB_BASE_FEE_SCALAR,
  BASE_GAS_PRICE,
  BASE_GAS_PRICE_HIGH,
  BASE_L1_BASE_FEE,
  BASE_L1_BASE_FEE_HIGH,
  BASE_L1_BASE_FEE_SCALAR,
  DRY_RUN,
  ETH_GAS_PRICE,
  ETH_GAS_PRICE_HIGH,
  ETH_PRICE_USD,
  OPT_BLOB_BASE_FEE,
  OPT_BLOB_BASE_FEE_HIGH,
  OPT_BLOB_BASE_FEE_SCALAR,
  OPT_GAS_PRICE,
  OPT_GAS_PRICE_HIGH,
  OPT_L1_BASE_FEE,
  OPT_L1_BASE_FEE_HIGH,
  OPT_L1_BASE_FEE_SCALAR,
  POLYGON_GAS_PRICE,
  POLYGON_GAS_PRICE_HIGH,
  POLYGON_PRICE_USD,
  SNAPSHOT_TIMESTAMP_MS,
  ZORA_BLOB_BASE_FEE,
  ZORA_BLOB_BASE_FEE_HIGH,
  ZORA_BLOB_BASE_FEE_SCALAR,
  ZORA_GAS_PRICE,
  ZORA_GAS_PRICE_HIGH,
  ZORA_L1_BASE_FEE,
  ZORA_L1_BASE_FEE_HIGH,
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
    gasPriceHigh: bigint;
    l1BaseFeeHigh?: bigint;
    blobBaseFeeHigh?: bigint;
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
    gasPriceHigh: ETH_GAS_PRICE_HIGH,
  },
  [arbitrum.id]: {
    file: "benchmarks/arbitrum.md",
    title: "Arbitrum Mainnet",
    gasPrice: ARB_GAS_PRICE,
    gasTokenSymbol: "ETH",
    gasTokenPrice: ETH_PRICE_USD,
    gasPriceHigh: ARB_GAS_PRICE_HIGH,
  },
  [polygon.id]: {
    file: "benchmarks/polygon.md",
    title: "Polygon Mainnet",
    gasPrice: POLYGON_GAS_PRICE,
    gasTokenSymbol: "MATIC",
    gasTokenPrice: POLYGON_PRICE_USD,
    gasPriceHigh: POLYGON_GAS_PRICE_HIGH,
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
    gasPriceHigh: OPT_GAS_PRICE_HIGH,
    l1BaseFeeHigh: OPT_L1_BASE_FEE_HIGH,
    blobBaseFeeHigh: OPT_BLOB_BASE_FEE_HIGH,
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
    gasPriceHigh: BASE_GAS_PRICE_HIGH,
    l1BaseFeeHigh: BASE_L1_BASE_FEE_HIGH,
    blobBaseFeeHigh: BASE_BLOB_BASE_FEE_HIGH,
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
    gasPriceHigh: ZORA_GAS_PRICE_HIGH,
    l1BaseFeeHigh: ZORA_L1_BASE_FEE_HIGH,
    blobBaseFeeHigh: ZORA_BLOB_BASE_FEE_HIGH,
  },
};

const LATEST_SNAPSHOT_LABEL = `${new Date(SNAPSHOT_TIMESTAMP_MS).toISOString().substring(0, 10)} (latest)`;
const HIGH_BLOB_FEE_SNAPSHOT_LABEL = "2024-03-31 (high blob fees)";

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
  buffer += "#### Run parameters\n\n";

  const configTable = [
    ["Parameter", LATEST_SNAPSHOT_LABEL, HIGH_BLOB_FEE_SNAPSHOT_LABEL],
    [
      "Gas price (gwei)",
      monospace(formatGwei(config.gasPrice)),
      monospace(formatGwei(config.gasPriceHigh)),
    ],
    [
      "L1 base fee (gwei)",
      monospace(config.l1BaseFee ? formatGwei(config.l1BaseFee) : "-"),
      monospace(config.l1BaseFeeHigh ? formatGwei(config.l1BaseFeeHigh) : "-"),
    ],
    [
      "L1 base fee scalar",
      ...Array(2).fill(
        monospace(config.l1BaseFeeScalar ? "" + config.l1BaseFeeScalar : "-"),
      ),
    ],
    [
      "Blob base fee (wei)",
      monospace(config.blobBaseFee ? "" + config.blobBaseFee : "-"),
      monospace(config.blobBaseFeeHigh ? "" + config.blobBaseFeeHigh : "-"),
    ],
    [
      "Blob base fee scalar",
      ...Array(2).fill(
        monospace(
          config.blobBaseFeeScalar ? "" + config.blobBaseFeeScalar : "-",
        ),
      ),
    ],
    [
      `${config.gasTokenSymbol} price (USD)`,
      monospace(`$${config.gasTokenPrice}`),
      monospace("-"),
    ],
  ];
  buffer += markdownTable(configTable, {align: ["l", "r", "r"]}) + "\n\n";

  const summaryTableHeaderRow = [
    "",
    LATEST_SNAPSHOT_LABEL,
    HIGH_BLOB_FEE_SNAPSHOT_LABEL,
  ];
  const summaryTableAlign = ["l", "r", "r"];

  // Metric names, with the first column left intentionally blank.
  const tableHeaderRow = ["", ...TABLE_HEADERS];
  const tableAlign = ["l", ...TABLE_HEADERS.map(() => "r")];

  for (const test in resultMap) {
    buffer += `#### ${test}\n\n`;
    const testResults = resultMap[test];
    const tableRows = [];
    const tableRowsHigh = [];
    const summaryTableRows = [];

    for (const [accountName, metrics] of Object.entries(testResults)) {
      if (!metrics.gasUsed) {
        tableRows.push([
          accountName,
          ...Array(tableHeaderRow.length - 1).fill(monospace("-")),
        ]);
        tableRowsHigh.push([
          accountName,
          ...Array(tableHeaderRow.length - 1).fill(monospace("-")),
        ]);
        summaryTableRows.push([
          accountName,
          monospace("Unsupported"),
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
        monospace(`$${convertWeiToUsd(totalFee, config.gasTokenPrice)}`), // Total fee (USD)
      ]);

      const executionFeeHigh = metrics.gasUsed * config.gasPriceHigh;
      const l1FeeHigh =
        metrics.l1GasUsed && config.l1BaseFeeHigh
          ? getL1Fee(
              metrics.l1GasUsed,
              config.l1BaseFeeHigh!,
              config.l1BaseFeeScalar!,
              config.blobBaseFeeHigh!,
              config.blobBaseFeeScalar!,
            )
          : null;
      const totalFeeHigh = executionFeeHigh + (l1FeeHigh || 0n);
      tableRowsHigh.push([
        accountName, // Account name
        monospace(metrics.gasUsed.toString()), // Execution gas
        monospace(formatEtherTruncated(executionFeeHigh)), // Execution fee (ETH)
        monospace(l1FeeHigh ? metrics.l1GasUsed!.toString() : "-"), // L1 gas
        monospace(l1FeeHigh ? formatEtherTruncated(l1FeeHigh) : "-"), // L1 fee (ETH)
        monospace(formatEtherTruncated(totalFeeHigh)), // Total fee (ETH)
        monospace(`$${convertWeiToUsd(totalFeeHigh, config.gasTokenPrice)}`), // Total fee (USD)
      ]);

      summaryTableRows.push([
        accountName,
        monospace(`$${convertWeiToUsd(totalFee, config.gasTokenPrice)}`),
        monospace(`$${convertWeiToUsd(totalFeeHigh, config.gasTokenPrice)}`),
      ]);
    }

    buffer += `##### Total fee (USD)\n\n`;
    buffer +=
      markdownTable([summaryTableHeaderRow, ...summaryTableRows], {
        align: summaryTableAlign,
      }) + "\n\n";

    buffer += "<details>\n";
    buffer += "<summary><b>Details</b></summary>\n\n";

    buffer += `##### ${LATEST_SNAPSHOT_LABEL}\n\n`;
    buffer +=
      markdownTable([tableHeaderRow, ...tableRows], {align: tableAlign}) +
      "\n\n";
    buffer += `##### ${HIGH_BLOB_FEE_SNAPSHOT_LABEL}\n\n`;
    buffer +=
      markdownTable([tableHeaderRow, ...tableRowsHigh], {align: tableAlign}) +
      "\n\n";

    buffer += "</details>\n\n";
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
