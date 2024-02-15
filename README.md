# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ. The L1 data fee calculations were done following the formula and variables specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Thu, 15 Feb 2024 03:18:46 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) |   `0.1` |
| L1 gas price (Gwei) |    `25` |
| ETH price (USD)     | `$2500` |

</details>

### Runtime: Account creation

|                 | Modular Account |   Kernel v2.1 |
| :-------------- | --------------: | ------------: |
| L2 gas used     |        `725323` |      `136206` |
| L2 fee (ETH)    |   `0.000072532` | `0.000013621` |
| L1 gas used     |          `2116` |        `3308` |
| L1 fee (ETH)    |   `0.000036184` | `0.000056567` |
| Total fee (ETH) |   `0.000108716` | `0.000070187` |
| Total fee (USD) |         `$0.27` |       `$0.18` |

### Runtime: Native transfer

|                 | Modular Account |   Kernel v2.1 |
| :-------------- | --------------: | ------------: |
| L2 gas used     |         `50408` |       `39436` |
| L2 fee (ETH)    |   `0.000005041` | `0.000003944` |
| L1 gas used     |          `2176` |        `2304` |
| L1 fee (ETH)    |   `0.000037210` | `0.000039398` |
| Total fee (ETH) |   `0.000042250` | `0.000043342` |
| Total fee (USD) |         `$0.11` |       `$0.11` |

### User Operation: Account creation

|                 | Modular Account |   Kernel v2.1 |
| :-------------- | --------------: | ------------: |
| L2 gas used     |        `834202` |      `237719` |
| L2 fee (ETH)    |   `0.000083420` | `0.000023772` |
| L1 gas used     |          `6624` |        `8064` |
| L1 fee (ETH)    |   `0.000113270` | `0.000137894` |
| Total fee (ETH) |   `0.000196691` | `0.000161666` |
| Total fee (USD) |         `$0.49` |       `$0.40` |

<!-- /BENCHMARK_RESULTS -->

## Run benchmark

Copy `.env.sample` to `.env` and update the values within `.env`.

```bash
cp .env.sample .env
```

Run `pnpm test` to run the benchmarks over the supported accounts.

```bash
pnpm test
```
