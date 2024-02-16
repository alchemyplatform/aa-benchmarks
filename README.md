# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ. The L1 data fee calculations were done following the formula and variables specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Fri, 16 Feb 2024 23:35:07 GMT
| Option              |     Value |
| :------------------ | --------: |
| L2 gas price (Gwei) | `0.00317` |
| L1 gas price (Gwei) |      `25` |
| ETH price (USD)     |   `$2500` |

</details>

### Runtime: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `725323` |      `136206` |      `197473` |
| L2 fee (ETH)    |   `0.000002299` | `0.000000432` | `0.000000626` |
| L1 gas used     |          `2612` |        `3932` |        `3196` |
| L1 fee (ETH)    |   `0.000044665` | `0.000067237` | `0.000054652` |
| Total fee (ETH) |   `0.000046964` | `0.000067669` | `0.000055278` |
| Total fee (USD) |         `$0.12` |       `$0.17` |       `$0.14` |

### Runtime: Native transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |         `50408` |       `39436` |           `-` |
| L2 fee (ETH)    |   `0.000000160` | `0.000000125` |           `-` |
| L1 gas used     |          `2768` |        `2912` |           `-` |
| L1 fee (ETH)    |   `0.000047333` | `0.000049795` |           `-` |
| Total fee (ETH) |   `0.000047493` | `0.000049920` |           `-` |
| Total fee (USD) |         `$0.12` |       `$0.12` | `Unsupported` |

### User Operation: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `858351` |      `261853` |      `329947` |
| L2 fee (ETH)    |   `0.000002721` | `0.000000830` | `0.000001046` |
| L1 gas used     |          `8088` |        `9528` |        `9280` |
| L1 fee (ETH)    |   `0.000138305` | `0.000162929` | `0.000158688` |
| Total fee (ETH) |   `0.000141026` | `0.000163759` | `0.000159734` |
| Total fee (USD) |         `$0.35` |       `$0.41` |       `$0.40` |

### Add Session Key

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `365416` |           `-` |      `178236` |
| L2 fee (ETH)    |   `0.000001158` |           `-` | `0.000000565` |
| L1 gas used     |         `11424` |           `-` |        `8532` |
| L1 fee (ETH)    |   `0.000195350` |           `-` | `0.000145897` |
| Total fee (ETH) |   `0.000196509` |           `-` | `0.000146462` |
| Total fee (USD) |         `$0.49` | `Unsupported` |       `$0.37` |

### Session Key Native Transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `163716` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000000519` |           `-` |           `-` |
| L1 gas used     |          `8128` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000138989` |           `-` |           `-` |
| Total fee (ETH) |   `0.000139508` |           `-` |           `-` |
| Total fee (USD) |         `$0.35` | `Unsupported` | `Unsupported` |

### Session Key ERC20 Transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |
| :-------------- | --------------: | ------------: | ------------: |
| L2 gas used     |        `194966` |           `-` |      `147071` |
| L2 fee (ETH)    |   `0.000000618` |           `-` | `0.000000466` |
| L1 gas used     |          `8812` |           `-` |       `11464` |
| L1 fee (ETH)    |   `0.000150685` |           `-` | `0.000196034` |
| Total fee (ETH) |   `0.000151303` |           `-` | `0.000196501` |
| Total fee (USD) |         `$0.38` | `Unsupported` |       `$0.49` |

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
