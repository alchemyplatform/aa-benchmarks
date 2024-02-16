# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ. The L1 data fee calculations were done following the formula and variables specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Fri, 16 Feb 2024 23:08:09 GMT
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
| L1 gas used     |          `2612` |        `3932` |        `3196` |
| L1 fee (ETH)    |   `0.000075038` | `0.000112958` | `0.000091815` |
| Total fee (ETH) |   `0.000078664` | `0.000113640` | `0.000092802` |
| Total fee (USD) |         `$0.20` |       `$0.28` |       `$0.23` |

### Runtime: Native transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |         `50408` |       `39436` |           `-` |
| L2 fee (ETH)    |   `0.000000252` | `0.000000197` |           `-` |
| L1 gas used     |          `2768` |        `2900` |           `-` |
| L1 fee (ETH)    |   `0.000079519` | `0.000083311` |           `-` |
| Total fee (ETH) |   `0.000079771` | `0.000083508` |           `-` |
| Total fee (USD) |         `$0.20` |       `$0.21` | `Unsupported` |

### User Operation: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `858351` |      `261853` |      `329947` |
| L2 fee (ETH)    |   `0.000004292` | `0.000001309` | `0.000001650` |
| L1 gas used     |          `8076` |        `9528` |        `9280` |
| L1 fee (ETH)    |   `0.000232007` | `0.000273720` | `0.000266596` |
| Total fee (ETH) |   `0.000236299` | `0.000275030` | `0.000268246` |
| Total fee (USD) |         `$0.59` |       `$0.69` |       `$0.67` |

### Add Session Key

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |       `1502810` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000007514` |           `-` |           `-` |
| L1 gas used     |         `51568` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.001481446` |           `-` |           `-` |
| Total fee (ETH) |   `0.001488960` |           `-` |           `-` |
| Total fee (USD) |         `$3.72` | `Unsupported` | `Unsupported` |

### Session Key Native Transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `194515` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000000973` |           `-` |           `-` |
| L1 gas used     |          `7900` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000226951` |           `-` |           `-` |
| Total fee (ETH) |   `0.000227924` |           `-` |           `-` |
| Total fee (USD) |         `$0.57` | `Unsupported` | `Unsupported` |

### Session Key ERC20 Transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `194738` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000000974` |           `-` |           `-` |
| L1 gas used     |          `8572` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000246256` |           `-` |           `-` |
| Total fee (ETH) |   `0.000247230` |           `-` |           `-` |
| Total fee (USD) |         `$0.62` | `Unsupported` | `Unsupported` |

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
