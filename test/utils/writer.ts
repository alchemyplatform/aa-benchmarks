import markdownTable from "markdown-table";
import replaceInFile from "replace-in-file";

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
  let buffer = "";
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
        tableRowObject[metricName].push(metrics[metricName]);
      }
    }
    const table = [tableHeader, ...Object.values(tableRowObject)];
    buffer += markdownTable(table, {align}) + "\n\n";
  }

  replaceInFile.sync({
    files: "README.md",
    from: /<!-- BENCHMARK_RESULTS -->[\s\S]*<!-- \/BENCHMARK_RESULTS -->/,
    to: `<!-- BENCHMARK_RESULTS -->\n\n${buffer}<!-- /BENCHMARK_RESULTS -->`,
  });
}
