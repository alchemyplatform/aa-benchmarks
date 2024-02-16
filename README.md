# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ. The L1 data fee calculations were done following the formula and variables specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Fri, 16 Feb 2024 01:09:27 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) |   `0.1` |
| L1 gas price (Gwei) |    `25` |
| ETH price (USD)     | `$2500` |

</details>

### Runtime: Account creation

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |        `725323` |
| L2 fee (ETH)    |   `0.000072532` |
| L1 gas used     |          `2116` |
| L1 fee (ETH)    |   `0.000036184` |
| Total fee (ETH) |   `0.000108716` |
| Total fee (USD) |         `$0.27` |

### Runtime: Native transfer

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |         `50408` |
| L2 fee (ETH)    |   `0.000005041` |
| L1 gas used     |          `2176` |
| L1 fee (ETH)    |   `0.000037210` |
| Total fee (ETH) |   `0.000042250` |
| Total fee (USD) |         `$0.11` |

### User Operation: Account creation

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |        `834202` |
| L2 fee (ETH)    |   `0.000083420` |
| L1 gas used     |          `6624` |
| L1 fee (ETH)    |   `0.000113270` |
| Total fee (ETH) |   `0.000196691` |
| Total fee (USD) |         `$0.49` |

### [Modular Account]: Add Session Key

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |       `1562278` |
| L2 fee (ETH)    |   `0.000156228` |
| L1 gas used     |         `57704` |
| L1 fee (ETH)    |   `0.000986738` |
| Total fee (ETH) |   `0.001142966` |
| Total fee (USD) |         `$2.86` |

### [Modular Account]: Session Key Native Transfer

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |        `138229` |
| L2 fee (ETH)    |   `0.000013823` |
| L1 gas used     |          `6352` |
| L1 fee (ETH)    |   `0.000108619` |
| Total fee (ETH) |   `0.000122442` |
| Total fee (USD) |         `$0.31` |

<!-- /BENCHMARK_RESULTS -->

## Run benchmark

Copy `.env.sample` to `.env` and update the values within `.env`:

```bash
cp .env.sample .env
```

Test running the benchmarks over the supported accounts and see the results in your terminal:

```bash
pnpm benchmark
```

Run the benchmarks and update this file with the new results:

```bash
pnpm benchmark:write
```
