# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ. The L1 data fee calculations were done following the formula and variables specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Sat, 17 Feb 2024 00:11:03 GMT
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
| L2 gas used     |       `1502810` |
| L2 fee (ETH)    |   `0.000150281` |
| L1 gas used     |         `50944` |
| L1 fee (ETH)    |   `0.000871142` |
| Total fee (ETH) |   `0.001021423` |
| Total fee (USD) |         `$2.55` |

### [Modular Account]: Session Key Native Transfer

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |        `194515` |
| L2 fee (ETH)    |   `0.000019451` |
| L1 gas used     |          `7276` |
| L1 fee (ETH)    |   `0.000124420` |
| Total fee (ETH) |   `0.000143871` |
| Total fee (USD) |         `$0.36` |

### [Modular Account]: Session Key ERC20 Transfer

|                 | Modular Account |
| :-------------- | --------------: |
| L2 gas used     |        `194738` |
| L2 fee (ETH)    |   `0.000019474` |
| L1 gas used     |          `7960` |
| L1 fee (ETH)    |   `0.000136116` |
| Total fee (ETH) |   `0.000155590` |
| Total fee (USD) |         `$0.39` |

### [Kernel v2.1]: Add Session Key

|                 |   Kernel v2.1 |
| :-------------- | ------------: |
| L2 gas used     |      `140744` |
| L2 fee (ETH)    | `0.000014074` |
| L1 gas used     |        `5668` |
| L1 fee (ETH)    | `0.000096923` |
| Total fee (ETH) | `0.000110997` |
| Total fee (USD) |       `$0.28` |

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

### [Biconomy v2]: Add Session Key

|                 |   Biconomy v2 |
| :-------------- | ------------: |
| L2 gas used     |           `-` |
| L2 fee (ETH)    |           `-` |
| L1 gas used     |           `-` |
| L1 fee (ETH)    |           `-` |
| Total fee (ETH) |           `-` |
| Total fee (USD) | `Unsupported` |

### [Biconomy v2]: Session Key Native Transfer

|                 |   Biconomy v2 |
| :-------------- | ------------: |
| L2 gas used     |           `-` |
| L2 fee (ETH)    |           `-` |
| L1 gas used     |           `-` |
| L1 fee (ETH)    |           `-` |
| Total fee (ETH) |           `-` |
| Total fee (USD) | `Unsupported` |

### [Biconomy v2]: Session Key ERC20 Transfer

|                 |   Biconomy v2 |
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
