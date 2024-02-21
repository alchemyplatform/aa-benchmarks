# AA Benchmarks

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate, transaction-based, fee measurements (see [Methodology](#methodology)) and for use of existing TypeScript utilities around fee calculations. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Methodology

This tool seeks to measure the cost of the entire transaction landed on-chain for each action, including associated L1 fees. As smart accounts are expected to proliferate on L2s, it's important to consider L1 fees (measured as a function of the RLP-encoded signed transaction) on top of L2 execution costs. Generally, L1 fees tend to dominate the cost of transactions on L2s, and therefore, optimizing the size of calldata is important.

The L1 fee calculations are done following the formula and constants specified in [Optimism Bedrock](https://docs.optimism.io/stack/transactions/fees#bedrock).

There are two different categories of benchmarks measured in this test: **User Operation** and **Runtime**.

- **User Operation**: Measuring the cost of user operations are tricky because each bundler may calculate pre-verification gas differently and the costs may differ based on the number of user operations in the bundle. In this test, the on-chain cost for a bundler to execute the user operation in a bundle of size 1 is measured, to present a lower-bound fee required for the user operation to land in an exclusive bundle. In other words, fees are calculated based on the transaction receipt and the serialized signed transaction (legacy transaction type) for `entryPoint.handleUserOp([userOp])`. As multi-user-op bundles become more prevalent, we can expect actual fees to undercut the data presented here.
- **Runtime**: Runtime transactions are defined as those performed outside of the user operation flow, with the owner key interacting directly with the account factory or account, akin to the way you might use MetaMask today to interact directly with smart contracts. Support for runtime transactions also enable contracts to interact directly with your smart account. For this flow, fees are calculated based on the transaction's receipt and the serialized signed transaction (legacy transaction type).

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ.

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Wed, 21 Feb 2024 05:53:32 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) | `0.004` |
| L1 gas price (Gwei) |    `40` |
| ETH price (USD)     | `$2500` |

</details>

### User Operation: Account creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `858351` |      `329947` |      `296301` |      `435486` |      `310532` |
| L2 fee (ETH)    |   `0.000003433` | `0.000001320` | `0.000001185` | `0.000001742` | `0.000001242` |
| L1 gas used     |          `8076` |        `9256` |        `9516` |       `11596` |        `7832` |
| L1 fee (ETH)    |   `0.000220959` | `0.000253244` | `0.000260358` | `0.000317267` | `0.000214284` |
| Total fee (ETH) |   `0.000224393` | `0.000254564` | `0.000261543` | `0.000319009` | `0.000215526` |
| Total fee (USD) |         `$0.56` |       `$0.64` |       `$0.65` |       `$0.80` |       `$0.54` |

### User Operation: Native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `165100` |      `161912` |      `163398` |      `176479` |      `152880` |
| L2 fee (ETH)    |   `0.000000660` | `0.000000648` | `0.000000654` | `0.000000706` | `0.000000612` |
| L1 gas used     |          `7292` |        `7904` |        `7408` |        `7504` |        `7292` |
| L1 fee (ETH)    |   `0.000199509` | `0.000216253` | `0.000202683` | `0.000205309` | `0.000199509` |
| Total fee (ETH) |   `0.000200170` | `0.000216901` | `0.000203336` | `0.000206015` | `0.000200121` |
| Total fee (USD) |         `$0.50` |       `$0.54` |       `$0.51` |       `$0.52` |       `$0.50` |

### User Operation: ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `189487` |      `185868` |      `187609` |      `200732` |      `177013` |
| L2 fee (ETH)    |   `0.000000758` | `0.000000743` | `0.000000750` | `0.000000803` | `0.000000708` |
| L1 gas used     |          `7964` |        `8576` |        `8092` |        `8176` |        `7940` |
| L1 fee (ETH)    |   `0.000217895` | `0.000234639` | `0.000221397` | `0.000223695` | `0.000217238` |
| Total fee (ETH) |   `0.000218653` | `0.000235383` | `0.000222148` | `0.000224498` | `0.000217946` |
| Total fee (USD) |         `$0.55` |       `$0.59` |       `$0.56` |       `$0.56` |       `$0.54` |

### User Operation: Session key creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `365368` |      `178212` |      `172136` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000001461` | `0.000000713` | `0.000000689` |           `-` |           `-` |
| L1 gas used     |         `11352` |        `8484` |        `8932` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000310591` | `0.000232122` | `0.000244380` |           `-` |           `-` |
| Total fee (ETH) |   `0.000312052` | `0.000232835` | `0.000245068` |           `-` |           `-` |
| Total fee (USD) |         `$0.78` |       `$0.58` |       `$0.61` | `Unsupported` | `Unsupported` |

### User Operation: Session key native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `163716` |           `-` |      `127202` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000000655` |           `-` | `0.000000509` |           `-` |           `-` |
| L1 gas used     |          `8116` |           `-` |        `9872` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000222054` |           `-` | `0.000270098` |           `-` |           `-` |
| Total fee (ETH) |   `0.000222709` |           `-` | `0.000270607` |           `-` |           `-` |
| Total fee (USD) |         `$0.56` | `Unsupported` |       `$0.68` | `Unsupported` | `Unsupported` |

### User Operation: Session key ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `194942` |      `147023` |      `153240` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000000780` | `0.000000588` | `0.000000613` |           `-` |           `-` |
| L1 gas used     |          `8764` |       `11404` |       `10848` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000239783` | `0.000312013` | `0.000296801` |           `-` |           `-` |
| Total fee (ETH) |   `0.000240563` | `0.000312602` | `0.000297414` |           `-` |           `-` |
| Total fee (USD) |         `$0.60` |       `$0.78` |       `$0.74` | `Unsupported` | `Unsupported` |

### Runtime: Account creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `725323` |      `197473` |      `163890` |      `289207` |      `185267` |
| L2 fee (ETH)    |   `0.000002901` | `0.000000790` | `0.000000656` | `0.000001157` | `0.000000741` |
| L1 gas used     |          `2600` |        `3184` |        `3920` |        `5940` |        `2356` |
| L1 fee (ETH)    |   `0.000071136` | `0.000087114` | `0.000107251` | `0.000162518` | `0.000064460` |
| Total fee (ETH) |   `0.000074037` | `0.000087904` | `0.000107907` | `0.000163675` | `0.000065201` |
| Total fee (USD) |         `$0.19` |       `$0.22` |       `$0.27` |       `$0.41` |       `$0.16` |

### Runtime: Native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |         `50408` |           `-` |       `45364` |       `75840` |       `39396` |
| L2 fee (ETH)    |   `0.000000202` |           `-` | `0.000000181` | `0.000000303` | `0.000000158` |
| L1 gas used     |          `2756` |           `-` |        `2900` |        `5012` |        `2744` |
| L1 fee (ETH)    |   `0.000075404` |           `-` | `0.000079344` | `0.000137128` | `0.000075076` |
| Total fee (ETH) |   `0.000075606` |           `-` | `0.000079525` | `0.000137432` | `0.000075233` |
| Total fee (USD) |         `$0.19` | `Unsupported` |       `$0.20` |       `$0.34` |       `$0.19` |

### Runtime: ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |         `74693` |           `-` |       `69230` |       `99715` |       `63438` |
| L2 fee (ETH)    |   `0.000000299` |           `-` | `0.000000277` | `0.000000399` | `0.000000254` |
| L1 gas used     |          `3420` |           `-` |        `3576` |        `5684` |        `3420` |
| L1 fee (ETH)    |   `0.000093571` |           `-` | `0.000097839` | `0.000155514` | `0.000093571` |
| Total fee (ETH) |   `0.000093870` |           `-` | `0.000098116` | `0.000155913` | `0.000093825` |
| Total fee (USD) |         `$0.23` | `Unsupported` |       `$0.25` |       `$0.39` |       `$0.23` |

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

## Contributing

To add a new smart account to this repo, follow the steps below.

1. Fork this repo.
2. Add the account's artifacts under [test/artifacts](test/artifacts/).
3. Implement the account's fixture and export an object matching the `AccountConfig` interface. Add this file under [test/accounts](test/accounts/).
4. Add your account under [test/accounts.ts](test/accounts.ts) to include your account in the benchmarks.
5. Generate the results and write to the README by running `pnpm benchmark:write`.
6. Open a PR against this repo.
