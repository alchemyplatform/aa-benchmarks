# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ. The L1 data fee calculations were done following the formula and variables specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Fri, 16 Feb 2024 19:12:05 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) |   `0.1` |
| L1 gas price (Gwei) |    `25` |
| ETH price (USD)     | `$2500` |

</details>

### Runtime: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |             `-` |           `-` |           `-` |
| L2 fee (ETH)    |             `-` |           `-` |           `-` |
| L1 gas used     |             `-` |           `-` |           `-` |
| L1 fee (ETH)    |             `-` |           `-` |           `-` |
| Total fee (ETH) |             `-` |           `-` |           `-` |
| Total fee (USD) |   `Unsupported` | `Unsupported` | `Unsupported` |

### Runtime: Native transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |             `-` |           `-` |           `-` |
| L2 fee (ETH)    |             `-` |           `-` |           `-` |
| L1 gas used     |             `-` |           `-` |           `-` |
| L1 fee (ETH)    |             `-` |           `-` |           `-` |
| Total fee (ETH) |             `-` |           `-` |           `-` |
| Total fee (USD) |   `Unsupported` | `Unsupported` | `Unsupported` |

### User Operation: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `858351` |      `261853` |      `329947` |
| L2 fee (ETH)    |   `0.000085835` | `0.000026185` | `0.000032995` |
| L1 gas used     |          `7464` |        `8904` |        `8656` |
| L1 fee (ETH)    |   `0.000127634` | `0.000152258` | `0.000148018` |
| Total fee (ETH) |   `0.000213469` | `0.000178444` | `0.000181012` |
| Total fee (USD) |         `$0.53` |       `$0.45` |       `$0.45` |

### [Modular Account]: Add Session Key

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |       `1477199` |
| L2 fee (ETH)    |   `0.000147720` |
| L1 gas used     |         `50104` |
| L1 fee (ETH)    |   `0.000856778` |
| Total fee (ETH) |   `0.001004498` |
| Total fee (USD) |         `$2.51` |

### [Modular Account]: Session Key Native Transfer

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |        `190213` |
| L2 fee (ETH)    |   `0.000019021` |
| L1 gas used     |          `6436` |
| L1 fee (ETH)    |   `0.000110056` |
| Total fee (ETH) |   `0.000129077` |
| Total fee (USD) |         `$0.32` |

### [Modular Account]: Session Key ERC20 Transfer

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |        `190421` |
| L2 fee (ETH)    |   `0.000019042` |
| L1 gas used     |          `7120` |
| L1 fee (ETH)    |   `0.000121752` |
| Total fee (ETH) |   `0.000140794` |
| Total fee (USD) |         `$0.35` |

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
