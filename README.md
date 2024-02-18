# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate, transaction-based, fee measurements (see [Methodology](#methodology)) and for use of existing TypeScript utilities around fee calculations. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Methodology

This tool seeks to measure the cost of the entire transaction landed on-chain for each action, including associated L1 fees. As smart accounts are expected to proliferate on L2s, it's important to consider L1 fees (measured as a function of the RLP-encoded signed transaction) on top of L2 execution costs. Generally, L1 fees tend to dominate the cost of transactions on L2s, and therefore, optimizing the size of calldata is important.

The L1 fee calculations are done following the formula and constants specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

There are two different categories of benchmarks measured in this test: **User Operation** and **Runtime**.

- **User Operation**: Measuring the cost of user operations are tricky because each bundler may calculate pre-verification gas differently and the costs may differ based on the number of user operations in the bundle. In this test, the on-chain cost for a bundler to execute the user operation in a bundle of size 1 is measured, to present a lower-bound fee required for the user operation to land in an exclusive bundle. In other words, fees are calculated based on the transaction receipt and the serialized signed transaction (legacy transaction type) for `entryPoint.handleUserOp([userOp])`. As multi-user-op bundles become more prevalent, we can expect actual fees to undercut the data presented here.
- **Runtime**: Runtime transactions are defined as those performed outside of the user operation flow, with the owner key interacting directly with the account factory or account, akin to the way you might use MetaMask today to interact directly with smart contracts. For this flow, fees are calculated based on the transaction's receipt and the serialized signed transaction (legacy transaction type).

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ.

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Sun, 18 Feb 2024 23:52:08 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) | `0.005` |
| L1 gas price (Gwei) |    `42` |
| ETH price (USD)     | `$2500` |

</details>

### User Operation: Account creation

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |      `329947` |      `261853` |      `310532` |        `858351` |      `435486` |
| L2 fee (ETH)    | `0.000001650` | `0.000001309` | `0.000001553` |   `0.000004292` | `0.000002177` |
| L1 gas used     |        `9280` |        `9528` |        `7856` |          `8076` |       `11608` |
| L1 fee (ETH)    | `0.000266596` | `0.000273720` | `0.000225687` |   `0.000232007` | `0.000333475` |
| Total fee (ETH) | `0.000268246` | `0.000275030` | `0.000227240` |   `0.000236299` | `0.000335652` |
| Total fee (USD) |       `$0.67` |       `$0.69` |       `$0.57` |         `$0.59` |       `$0.84` |

### User Operation: Native transfer

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |      `161912` |      `152989` |      `152880` |        `165100` |      `176479` |
| L2 fee (ETH)    | `0.000000810` | `0.000000765` | `0.000000764` |   `0.000000825` | `0.000000882` |
| L1 gas used     |        `7928` |        `7444` |        `7304` |          `7292` |        `7516` |
| L1 fee (ETH)    | `0.000227756` | `0.000213851` | `0.000209829` |   `0.000209485` | `0.000215920` |
| Total fee (ETH) | `0.000228565` | `0.000214616` | `0.000210594` |   `0.000210310` | `0.000216802` |
| Total fee (USD) |       `$0.57` |       `$0.54` |       `$0.53` |         `$0.53` |       `$0.54` |

### User Operation: ERC-20 transfer

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |      `185868` |      `176941` |      `177013` |        `189487` |      `200732` |
| L2 fee (ETH)    | `0.000000929` | `0.000000885` | `0.000000885` |   `0.000000947` | `0.000001004` |
| L1 gas used     |        `8576` |        `8116` |        `7952` |          `7976` |        `8188` |
| L1 fee (ETH)    | `0.000246371` | `0.000233156` | `0.000228445` |   `0.000229135` | `0.000235225` |
| Total fee (ETH) | `0.000247301` | `0.000234041` | `0.000229330` |   `0.000230082` | `0.000236229` |
| Total fee (USD) |       `$0.62` |       `$0.59` |       `$0.57` |         `$0.58` |       `$0.59` |

### User Operation: Session key creation

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |      `178212` |           `-` |           `-` |        `365368` |           `-` |
| L2 fee (ETH)    | `0.000000891` |           `-` |           `-` |   `0.000001827` |           `-` |
| L1 gas used     |        `8492` |           `-` |           `-` |         `11376` |           `-` |
| L1 fee (ETH)    | `0.000243958` |           `-` |           `-` |   `0.000326810` |           `-` |
| Total fee (ETH) | `0.000244849` |           `-` |           `-` |   `0.000328637` |           `-` |
| Total fee (USD) |       `$0.61` | `Unsupported` | `Unsupported` |         `$0.82` | `Unsupported` |

### User Operation: Session key native transfer

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |           `-` |           `-` |           `-` |        `163716` |           `-` |
| L2 fee (ETH)    |           `-` |           `-` |           `-` |   `0.000000819` |           `-` |
| L1 gas used     |           `-` |           `-` |           `-` |          `8128` |           `-` |
| L1 fee (ETH)    |           `-` |           `-` |           `-` |   `0.000233501` |           `-` |
| Total fee (ETH) |           `-` |           `-` |           `-` |   `0.000234320` |           `-` |
| Total fee (USD) | `Unsupported` | `Unsupported` | `Unsupported` |         `$0.59` | `Unsupported` |

### User Operation: Session key ERC-20 transfer

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |      `147023` |           `-` |           `-` |        `194942` |           `-` |
| L2 fee (ETH)    | `0.000000735` |           `-` |           `-` |   `0.000000975` |           `-` |
| L1 gas used     |       `11416` |           `-` |           `-` |          `8788` |           `-` |
| L1 fee (ETH)    | `0.000327959` |           `-` |           `-` |   `0.000252462` |           `-` |
| Total fee (ETH) | `0.000328694` |           `-` |           `-` |   `0.000253436` |           `-` |
| Total fee (USD) |       `$0.82` | `Unsupported` | `Unsupported` |         `$0.63` | `Unsupported` |

### Runtime: Account creation

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |      `197473` |      `136206` |      `185267` |        `725323` |      `289207` |
| L2 fee (ETH)    | `0.000000987` | `0.000000681` | `0.000000926` |   `0.000003627` | `0.000001446` |
| L1 gas used     |        `3196` |        `3932` |        `2352` |          `2612` |        `5952` |
| L1 fee (ETH)    | `0.000091815` | `0.000112958` | `0.000067568` |   `0.000075038` | `0.000170989` |
| Total fee (ETH) | `0.000092802` | `0.000113640` | `0.000068495` |   `0.000078664` | `0.000172435` |
| Total fee (USD) |       `$0.23` |       `$0.28` |       `$0.17` |         `$0.20` |       `$0.43` |

### Runtime: Native transfer

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |           `-` |       `39436` |       `39396` |         `50408` |       `75840` |
| L2 fee (ETH)    |           `-` | `0.000000197` | `0.000000197` |   `0.000000252` | `0.000000379` |
| L1 gas used     |           `-` |        `2912` |        `2768` |          `2768` |        `5024` |
| L1 fee (ETH)    |           `-` | `0.000083656` | `0.000079519` |   `0.000079519` | `0.000144329` |
| Total fee (ETH) |           `-` | `0.000083853` | `0.000079716` |   `0.000079771` | `0.000144709` |
| Total fee (USD) | `Unsupported` |       `$0.21` |       `$0.20` |         `$0.20` |       `$0.36` |

### Runtime: ERC-20 transfer

|                 |   Biconomy v2 |   Kernel v2.1 | Light Account | Modular Account |          Safe |
| :-------------- | ------------: | ------------: | ------------: | --------------: | ------------: |
| L2 gas used     |           `-` |       `63284` |       `63438` |         `74693` |       `99715` |
| L2 fee (ETH)    |           `-` | `0.000000316` | `0.000000317` |   `0.000000373` | `0.000000499` |
| L1 gas used     |           `-` |        `3588` |        `3444` |          `3444` |        `5696` |
| L1 fee (ETH)    |           `-` | `0.000103076` | `0.000098939` |   `0.000098939` | `0.000163635` |
| Total fee (ETH) |           `-` | `0.000103392` | `0.000099256` |   `0.000099313` | `0.000164133` |
| Total fee (USD) | `Unsupported` |       `$0.26` |       `$0.25` |         `$0.25` |       `$0.41` |

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
