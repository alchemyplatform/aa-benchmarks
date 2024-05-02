import markdownTable from "markdown-table";
import replaceInFile from "replace-in-file";
import {formatGwei} from "viem";
import {DRY_RUN, ETH_PRICE_USD, L1_BASE_FEE, L2_BASE_FEE} from "../../settings";

const resultMap: {
  [test: string]: {[account: string]: {[metric: string]: string}};
} = {};

export function collectResult(
  test: string,
  accountName: string,
  metrics: {[metric: string]: string},
) {
  if (!resultMap[test]) {
    resultMap[test] = {};
  }
  resultMap[test][accountName] = metrics;
}

export async function writeResults() {
  let buffer = "<details>\n";
  buffer += "<summary><b>Run options</b></summary>\n\n";
  buffer += `Last run: ${new Date().toUTCString()}\n`;

  const configTable = [
    ["Option", "Value"],
    ["L2 gas price (Gwei)", `${monospace(formatGwei(L2_BASE_FEE))}`],
    ["L1 gas price (Gwei)", `${monospace(formatGwei(L1_BASE_FEE))}`],
    ["ETH price (USD)", `${monospace(`$${ETH_PRICE_USD}`)}`],
  ];
  buffer += markdownTable(configTable, {align: ["l", "r"]}) + "\n\n";
  buffer += "</details>\n\n";

  let align;
  for (const test in resultMap) {
    buffer += `### ${test}\n\n`;
    const testResults = resultMap[test];
    const accountNames = Object.keys(testResults);
    // Account names, with the first column left intentionally blank.
    const tableHeader = ["", ...accountNames];
    if (!align) {
      align = ["l", ...tableHeader.map(() => "r")];
    }
    const tableRowObject: {[key: string]: string[]} = {};
    for (const accountName of accountNames) {
      const metrics = testResults[accountName];
      for (const metricName in metrics) {
        if (!tableRowObject[metricName]) {
          tableRowObject[metricName] = [metricName];
        }
        tableRowObject[metricName].push(monospace(metrics[metricName]));
      }
    }
    const table = [tableHeader, ...Object.values(tableRowObject)];
    buffer += markdownTable(table, {align}) + "\n\n";
  }

  if (DRY_RUN) {
    console.log(
      "\n  🌵 Dry run! Results printed below. Run `pnpm benchmark:write` to update the results in README.md.\n\n",
    );
    console.log(buffer);
  } else {
    replaceInFile.sync({
      files: "README.md",
      from: /<!-- BENCHMARK_RESULTS -->[\s\S]*<!-- \/BENCHMARK_RESULTS -->/,
      to: `<!-- BENCHMARK_RESULTS -->\n\n${buffer}<!-- /BENCHMARK_RESULTS -->`,
    });
    console.log("\n  📝 Results written to README.md!");
  }
}

function monospace(word: string) {
  return `\`${word}\``;
}
