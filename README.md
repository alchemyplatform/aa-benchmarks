# AA Benchmarks

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

Last run: Tue, 20 Feb 2024 17:49:09 GMT
| Option              |   Value |
| :------------------ | ------: |
| L2 gas price (Gwei) | `0.004` |
| L1 gas price (Gwei) |    `30` |
| ETH price (USD)     | `$2500` |

</details>

### User Operation: Account creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `858351` |      `329947` |      `261853` |      `435486` |      `310532` |
| L2 fee (ETH)    |   `0.000003433` | `0.000001320` | `0.000001047` | `0.000001742` | `0.000001242` |
| L1 gas used     |          `8076` |        `9256` |        `9516` |       `11596` |        `7832` |
| L1 fee (ETH)    |   `0.000165720` | `0.000189933` | `0.000195268` | `0.000237950` | `0.000160713` |
| Total fee (ETH) |   `0.000169153` | `0.000191253` | `0.000196316` | `0.000239692` | `0.000161955` |
| Total fee (USD) |         `$0.42` |       `$0.48` |       `$0.49` |       `$0.60` |       `$0.40` |

### User Operation: Native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `165100` |      `161912` |      `152989` |      `176479` |      `152880` |
| L2 fee (ETH)    |   `0.000000660` | `0.000000648` | `0.000000612` | `0.000000706` | `0.000000612` |
| L1 gas used     |          `7292` |        `7904` |        `7408` |        `7504` |        `7292` |
| L1 fee (ETH)    |   `0.000149632` | `0.000162190` | `0.000152012` | `0.000153982` | `0.000149632` |
| Total fee (ETH) |   `0.000150292` | `0.000162838` | `0.000152624` | `0.000154688` | `0.000150243` |
| Total fee (USD) |         `$0.38` |       `$0.41` |       `$0.38` |       `$0.39` |       `$0.38` |

### User Operation: ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `189487` |      `185868` |      `176941` |      `200732` |      `177013` |
| L2 fee (ETH)    |   `0.000000758` | `0.000000743` | `0.000000708` | `0.000000803` | `0.000000708` |
| L1 gas used     |          `7964` |        `8576` |        `8092` |        `8176` |        `7940` |
| L1 fee (ETH)    |   `0.000163421` | `0.000175980` | `0.000166048` | `0.000167772` | `0.000162929` |
| Total fee (ETH) |   `0.000164179` | `0.000176723` | `0.000166756` | `0.000168574` | `0.000163637` |
| Total fee (USD) |         `$0.41` |       `$0.44` |       `$0.42` |       `$0.42` |       `$0.41` |

### User Operation: Session key creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `365368` |      `178212` |           `-` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000001461` | `0.000000713` |           `-` |           `-` |           `-` |
| L1 gas used     |         `11352` |        `8484` |           `-` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000232943` | `0.000174092` |           `-` |           `-` |           `-` |
| Total fee (ETH) |   `0.000234405` | `0.000174805` |           `-` |           `-` |           `-` |
| Total fee (USD) |         `$0.59` |       `$0.44` | `Unsupported` | `Unsupported` | `Unsupported` |

### User Operation: Session key native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `163716` |           `-` |           `-` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000000655` |           `-` |           `-` |           `-` |           `-` |
| L1 gas used     |          `8116` |           `-` |           `-` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000166540` |           `-` |           `-` |           `-` |           `-` |
| Total fee (ETH) |   `0.000167195` |           `-` |           `-` |           `-` |           `-` |
| Total fee (USD) |         `$0.42` | `Unsupported` | `Unsupported` | `Unsupported` | `Unsupported` |

### User Operation: Session key ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `194942` |      `147023` |           `-` |           `-` |           `-` |
| L2 fee (ETH)    |   `0.000000780` | `0.000000588` |           `-` |           `-` |           `-` |
| L1 gas used     |          `8764` |       `11404` |           `-` |           `-` |           `-` |
| L1 fee (ETH)    |   `0.000179837` | `0.000234010` |           `-` |           `-` |           `-` |
| Total fee (ETH) |   `0.000180617` | `0.000234598` |           `-` |           `-` |           `-` |
| Total fee (USD) |         `$0.45` |       `$0.59` | `Unsupported` | `Unsupported` | `Unsupported` |

### Runtime: Account creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |        `725323` |      `197473` |      `136206` |      `289207` |      `185267` |
| L2 fee (ETH)    |   `0.000002901` | `0.000000790` | `0.000000545` | `0.000001157` | `0.000000741` |
| L1 gas used     |          `2600` |        `3184` |        `3920` |        `5940` |        `2356` |
| L1 fee (ETH)    |   `0.000053352` | `0.000065336` | `0.000080438` | `0.000121889` | `0.000048345` |
| Total fee (ETH) |   `0.000056253` | `0.000066126` | `0.000080983` | `0.000123046` | `0.000049086` |
| Total fee (USD) |         `$0.14` |       `$0.17` |       `$0.20` |       `$0.31` |       `$0.12` |

### Runtime: Native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |         `50408` |           `-` |       `39436` |       `75840` |       `39396` |
| L2 fee (ETH)    |   `0.000000202` |           `-` | `0.000000158` | `0.000000303` | `0.000000158` |
| L1 gas used     |          `2756` |           `-` |        `2900` |        `5012` |        `2744` |
| L1 fee (ETH)    |   `0.000056553` |           `-` | `0.000059508` | `0.000102846` | `0.000056307` |
| Total fee (ETH) |   `0.000056755` |           `-` | `0.000059666` | `0.000103150` | `0.000056464` |
| Total fee (USD) |         `$0.14` | `Unsupported` |       `$0.15` |       `$0.26` |       `$0.14` |

### Runtime: ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: |
| L2 gas used     |         `74693` |           `-` |       `63284` |       `99715` |       `63438` |
| L2 fee (ETH)    |   `0.000000299` |           `-` | `0.000000253` | `0.000000399` | `0.000000254` |
| L1 gas used     |          `3420` |           `-` |        `3576` |        `5684` |        `3420` |
| L1 fee (ETH)    |   `0.000070178` |           `-` | `0.000073380` | `0.000116636` | `0.000070178` |
| Total fee (ETH) |   `0.000070477` |           `-` | `0.000073633` | `0.000117035` | `0.000070432` |
| Total fee (USD) |         `$0.18` | `Unsupported` |       `$0.18` |       `$0.29` |       `$0.18` |

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
