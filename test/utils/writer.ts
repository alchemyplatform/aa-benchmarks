const resultMap: any = {};

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

export function getResultMap() {
  return resultMap;
}
