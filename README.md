# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ. The L1 data fee calculations were done following the formula and variables specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Fri, 16 Feb 2024 17:26:48 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) | `0.005` |
| L1 gas price (Gwei) |    `42` |
| ETH price (USD)     | `$2500` |

</details>

### Runtime: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `725323` |      `136206` |      `197473` |
| L2 fee (ETH)    |   `0.000003627` | `0.000000681` | `0.000000987` |
| L1 gas used     |          `2116` |        `3308` |        `2624` |
| L1 fee (ETH)    |   `0.000060788` | `0.000095032` | `0.000075382` |
| Total fee (ETH) |   `0.000064415` | `0.000095713` | `0.000076370` |
| Total fee (USD) |         `$0.16` |       `$0.24` |       `$0.19` |

### Runtime: Native transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |         `50408` |       `39436` |           `-` |
| L2 fee (ETH)    |   `0.000000252` | `0.000000197` |           `-` |
| L1 gas used     |          `2176` |        `2304` |           `-` |
| L1 fee (ETH)    |   `0.000062512` | `0.000066189` |           `-` |
| Total fee (ETH) |   `0.000062764` | `0.000066386` |           `-` |
| Total fee (USD) |         `$0.16` |       `$0.17` | `Unsupported` |

### User Operation: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `858351` |      `261853` |      `329947` |
| L2 fee (ETH)    |   `0.000004292` | `0.000001309` | `0.000001650` |
| L1 gas used     |          `7464` |        `8904` |        `8656` |
| L1 fee (ETH)    |   `0.000214426` | `0.000255794` | `0.000248670` |
| Total fee (ETH) |   `0.000218718` | `0.000257103` | `0.000250319` |
| Total fee (USD) |         `$0.55` |       `$0.64` |       `$0.63` |

### User Operation: Native transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `165100` |      `152989` |      `161912` |
| L2 fee (ETH)    |   `0.000000825` | `0.000000765` | `0.000000810` |
| L1 gas used     |          `6680` |        `6820` |        `7304` |
| L1 fee (ETH)    |   `0.000191903` | `0.000195925` | `0.000209829` |
| Total fee (ETH) |   `0.000192729` | `0.000196690` | `0.000210639` |
| Total fee (USD) |         `$0.48` |       `$0.49` |       `$0.53` |

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
