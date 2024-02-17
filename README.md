# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ. The L1 data fee calculations were done following the formula and variables specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Sat, 17 Feb 2024 01:47:11 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) |   `0.1` |
| L1 gas price (Gwei) |    `25` |
| ETH price (USD)     | `$2500` |

</details>

### Runtime: Account creation

|                 |   Kernel v2.1 |
| :-------------- | ------------: |
| L2 gas used     |           `-` |
| L2 fee (ETH)    |           `-` |
| L1 gas used     |           `-` |
| L1 fee (ETH)    |           `-` |
| Total fee (ETH) |           `-` |
| Total fee (USD) | `Unsupported` |

### Runtime: Native transfer

|                 |   Kernel v2.1 |
| :-------------- | ------------: |
| L2 gas used     |           `-` |
| L2 fee (ETH)    |           `-` |
| L1 gas used     |           `-` |
| L1 fee (ETH)    |           `-` |
| Total fee (ETH) |           `-` |
| Total fee (USD) | `Unsupported` |

### User Operation: Account creation

|                 |   Kernel v2.1 |
| :-------------- | ------------: |
| L2 gas used     |      `261853` |
| L2 fee (ETH)    | `0.000026185` |
| L1 gas used     |        `8904` |
| L1 fee (ETH)    | `0.000152258` |
| Total fee (ETH) | `0.000178444` |
| Total fee (USD) |       `$0.45` |

### [Kernel v2.1]: Add Session Key

|                 |   Kernel v2.1 |
| :-------------- | ------------: |
| L2 gas used     |           `-` |
| L2 fee (ETH)    |           `-` |
| L1 gas used     |           `-` |
| L1 fee (ETH)    |           `-` |
| Total fee (ETH) |           `-` |
| Total fee (USD) | `Unsupported` |

### [Kernel v2.1]: Session Key Native Transfer

|                 |   Kernel v2.1 |
| :-------------- | ------------: |
| L2 gas used     |           `-` |
| L2 fee (ETH)    |           `-` |
| L1 gas used     |           `-` |
| L1 fee (ETH)    |           `-` |
| Total fee (ETH) |           `-` |
| Total fee (USD) | `Unsupported` |

### [Kernel v2.1]: Session Key ERC20 Transfer

|                 |   Kernel v2.1 |
| :-------------- | ------------: |
| L2 gas used     |           `-` |
| L2 fee (ETH)    |           `-` |
| L1 gas used     |           `-` |
| L1 fee (ETH)    |           `-` |
| Total fee (ETH) |           `-` |
| Total fee (USD) | `Unsupported` |

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
