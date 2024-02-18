# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate, transaction-based, fee measurements (see [Methodology](#methodology)) and for use of existing TypeScript utilities around fee calculations. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Methodology

This tool seeks to measure the cost of the entire transaction landed on-chain for each action, including associated L1 fees. As smart accounts are expected to proliferate on L2s, it's important to consider L1 fees (measured as a function of the RLP-encoded signed transaction) on top of L2 execution costs. Generally, L1 fees tend to dominate the cost of transactions on L2s, and therefore, optimizing the size of calldata is important.

The L1 fee calculations are done following the formula and constants specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

There are two different categories of benchmarks measured in this test: **User Operation** and **Runtime**.

- **User Operation**: Measuring the cost of user operations are tricky because each bundler may calculate pre-verification gas differently and the costs may differ based on the number of user operations in the bundle. In this test, the on-chain cost for a bundler to execute the user operation in a bundle of size 1 is measured, to present a lower-bound fee required for the user operation to land in an exclusive bundle. In other words, fees are calculated based on the transaction receipt and the serialized signed transaction (legacy transaction type) for `entryPoint.handleUserOp([userOp])`. As multi-user-op bundles become more prevalent, we can expect actual fees to undercut the data presented here.
- **Runtime**: Runtime transactions are defined as those performed outside of the user operation flow, with the owner key interacting directly with the account factory or account, akin to the way you might use MetaMask today to interact with smart contracts. For this flow, fees are calculated based on the transaction's receipt and the serialized signed transaction (legacy transaction type).

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ.

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Sun, 18 Feb 2024 22:47:45 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) | `0.005` |
| L1 gas price (Gwei) |    `42` |
| ETH price (USD)     | `$2500` |

</details>

### User Operation: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `858351` |      `261853` |      `329947` |      `435486` |
| L2 fee (ETH)    |   `0.000004292` | `0.000001309` | `0.000001650` | `0.000002177` |
| L1 gas used     |          `8076` |        `9528` |        `9280` |       `11608` |
| L1 fee (ETH)    |   `0.000232007` | `0.000273720` | `0.000266596` | `0.000333475` |
| Total fee (ETH) |   `0.000236299` | `0.000275030` | `0.000268246` | `0.000335652` |
| Total fee (USD) |         `$0.59` |       `$0.69` |       `$0.67` |       `$0.84` |

### User Operation: Native transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `165100` |      `152989` |      `161912` |      `176479` |
| L2 fee (ETH)    |   `0.000000825` | `0.000000765` | `0.000000810` | `0.000000882` |
| L1 gas used     |          `7292` |        `7444` |        `7928` |        `7516` |
| L1 fee (ETH)    |   `0.000209485` | `0.000213851` | `0.000227756` | `0.000215920` |
| Total fee (ETH) |   `0.000210310` | `0.000214616` | `0.000228565` | `0.000216802` |
| Total fee (USD) |         `$0.53` |       `$0.54` |       `$0.57` |       `$0.54` |

### User Operation: ERC-20 transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `189487` |      `176941` |      `185868` |      `200732` |
| L2 fee (ETH)    |   `0.000000947` | `0.000000885` | `0.000000929` | `0.000001004` |
| L1 gas used     |          `7976` |        `8116` |        `8576` |        `8188` |
| L1 fee (ETH)    |   `0.000229135` | `0.000233156` | `0.000246371` | `0.000235225` |
| Total fee (ETH) |   `0.000230082` | `0.000234041` | `0.000247301` | `0.000236229` |
| Total fee (USD) |         `$0.58` |       `$0.59` |       `$0.62` |       `$0.59` |

### User Operation: Session key creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `365368` |           `-` |      `178212` |           `-` |
| L2 fee (ETH)    |   `0.000001827` |           `-` | `0.000000891` |           `-` |
| L1 gas used     |         `11376` |           `-` |        `8492` |           `-` |
| L1 fee (ETH)    |   `0.000326810` |           `-` | `0.000243958` |           `-` |
| Total fee (ETH) |   `0.000328637` |           `-` | `0.000244849` |           `-` |
| Total fee (USD) |         `$0.82` | `Unsupported` |       `$0.61` | `Unsupported` |

### User Operation: Session key native transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `163692` |           `-` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000000818` |           `-` |           `-` |           `-` |
| L1 gas used     |          `8104` |           `-` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000232812` |           `-` |           `-` |           `-` |
| Total fee (ETH) |   `0.000233630` |           `-` |           `-` |           `-` |
| Total fee (USD) |         `$0.58` | `Unsupported` | `Unsupported` | `Unsupported` |

### User Operation: Session key ERC-20 transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `194942` |           `-` |      `147023` |           `-` |
| L2 fee (ETH)    |   `0.000000975` |           `-` | `0.000000735` |           `-` |
| L1 gas used     |          `8788` |           `-` |       `11416` |           `-` |
| L1 fee (ETH)    |   `0.000252462` |           `-` | `0.000327959` |           `-` |
| Total fee (ETH) |   `0.000253436` |           `-` | `0.000328694` |           `-` |
| Total fee (USD) |         `$0.63` | `Unsupported` |       `$0.82` | `Unsupported` |

### Runtime: Account creation

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `725323` |      `136206` |      `197473` |      `289207` |
| L2 fee (ETH)    |   `0.000003627` | `0.000000681` | `0.000000987` | `0.000001446` |
| L1 gas used     |          `2612` |        `3932` |        `3196` |        `5952` |
| L1 fee (ETH)    |   `0.000075038` | `0.000112958` | `0.000091815` | `0.000170989` |
| Total fee (ETH) |   `0.000078664` | `0.000113640` | `0.000092802` | `0.000172435` |
| Total fee (USD) |         `$0.20` |       `$0.28` |       `$0.23` |       `$0.43` |

### Runtime: Native transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |         `50408` |       `39436` |           `-` |       `75840` |
| L2 fee (ETH)    |   `0.000000252` | `0.000000197` |           `-` | `0.000000379` |
| L1 gas used     |          `2768` |        `2912` |           `-` |        `5024` |
| L1 fee (ETH)    |   `0.000079519` | `0.000083656` |           `-` | `0.000144329` |
| Total fee (ETH) |   `0.000079771` | `0.000083853` |           `-` | `0.000144709` |
| Total fee (USD) |         `$0.20` |       `$0.21` | `Unsupported` |       `$0.36` |

### Runtime: ERC-20 transfer

|                 | Modular Account |   Kernel v2.1 |   Biconomy v2 |          Safe |
| :-------------- | --------------: | ------------: | ------------: | ------------: |
| L2 gas used     |         `74693` |       `63284` |           `-` |       `99715` |
| L2 fee (ETH)    |   `0.000000373` | `0.000000316` |           `-` | `0.000000499` |
| L1 gas used     |          `3444` |        `3588` |           `-` |        `5696` |
| L1 fee (ETH)    |   `0.000098939` | `0.000103076` |           `-` | `0.000163635` |
| Total fee (ETH) |   `0.000099313` | `0.000103392` |           `-` | `0.000164133` |
| Total fee (USD) |         `$0.25` |       `$0.26` | `Unsupported` |       `$0.41` |

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
