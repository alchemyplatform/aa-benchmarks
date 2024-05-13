# AA Benchmarks

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate, transaction-based, fee measurements (see [Methodology](#methodology)) and for use of existing TypeScript utilities around fee calculations. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Methodology

This tool seeks to measure the cost of the entire transaction landed on-chain for each action, including associated L1 fees. As smart accounts are expected to proliferate on L2s, it's important to consider L1 fees (measured as a function of the RLP-encoded signed transaction and the blob gas market) on top of L2 execution costs. L1 fees can impact the cost of transactions on L2s, so optimizing the size of calldata is important.

The L1 fee calculations are done following the formula and constants specified in [Optimism Ecotone](https://docs.optimism.io/stack/transactions/fees#ecotone).

There are two different categories of benchmarks measured in this test: **User Operation** and **Runtime**.

- **User Operation**: Measuring the cost of user operations are tricky because each bundler may calculate pre-verification gas differently and the costs may differ based on the number of user operations in the bundle. In this test, the on-chain cost for a bundler to execute the user operation in a bundle of size 1 is measured, to present a lower-bound fee required for the user operation to land in an exclusive bundle. In other words, fees are calculated based on the transaction receipt and the serialized signed EIP-1559 transaction for `entryPoint.handleUserOp([userOp])`. As multi-user-op bundles become more prevalent, we can expect actual fees to undercut the data presented here.
- **Runtime**: Runtime transactions are defined as those performed outside of the user operation flow, with the owner key interacting directly with the account factory or account, akin to the way you might use MetaMask today to interact directly with smart contracts. Support for runtime transactions also enable contracts to interact directly with your smart account. For this flow, fees are calculated based on the transaction's receipt and the serialized signed EIP-1559 transaction.

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ.

<!-- BENCHMARK_RESULTS -->

### Optimism Mainnet

#### Run options

Values taken at: Mon, 13 May 2024 17:19:00 GMT

| Option               |          Value |
| :------------------- | -------------: |
| Gas price (gwei)     |  `0.074733682` |
| L1 base fee (gwei)   | `27.790106647` |
| L1 base fee scalar   |         `1368` |
| Blob base fee (wei)  |            `1` |
| Blob base fee scalar |       `810949` |
| ETH price (USD)      |     `$2955.05` |

#### User Operation: Account creation

|                       | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account       |      `858351` |       `0.000064148` |  `8020` | `0.000000305` |   `0.000064453` |        `0.1905` |
| Biconomy v2           |      `329947` |       `0.000024658` |  `9224` | `0.000000351` |   `0.000025009` |        `0.0739` |
| Kernel v2.1           |      `296301` |       `0.000022144` |  `9472` | `0.000000360` |   `0.000022504` |        `0.0665` |
| Safe                  |      `435486` |       `0.000032545` | `11552` | `0.000000439` |   `0.000032985` |        `0.0975` |
| Simple Account        |      `297367` |       `0.000022223` |  `7568` | `0.000000288` |   `0.000022511` |        `0.0665` |
| Light Account         |      `310532` |       `0.000023207` |  `7800` | `0.000000297` |   `0.000023504` |        `0.0695` |
| Light Account v2      |      `266901` |       `0.000019946` |  `7496` | `0.000000285` |   `0.000020231` |        `0.0598` |
| Coinbase Smart Wallet |      `317904` |       `0.000023758` |  `8964` | `0.000000341` |   `0.000024099` |        `0.0712` |

#### User Operation: Native transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `165100` |       `0.000012339` | `7248` | `0.000000276` |   `0.000012614` |        `0.0373` |
| Biconomy v2           |      `161912` |       `0.000012100` | `7848` | `0.000000298` |   `0.000012399` |        `0.0366` |
| Kernel v2.1           |      `163398` |       `0.000012211` | `7388` | `0.000000281` |   `0.000012492` |        `0.0369` |
| Safe                  |      `176479` |       `0.000013189` | `7460` | `0.000000284` |   `0.000013473` |        `0.0398` |
| Simple Account        |      `151045` |       `0.000011288` | `6932` | `0.000000264` |   `0.000011552` |        `0.0341` |
| Light Account         |      `152880` |       `0.000011425` | `7248` | `0.000000276` |   `0.000011701` |        `0.0346` |
| Light Account v2      |      `151040` |       `0.000011288` | `6944` | `0.000000264` |   `0.000011552` |        `0.0341` |
| Coinbase Smart Wallet |      `156812` |       `0.000011719` | `7796` | `0.000000296` |   `0.000012016` |        `0.0355` |

#### User Operation: ERC-20 transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `189487` |       `0.000014161` | `7920` | `0.000000301` |   `0.000014462` |        `0.0427` |
| Biconomy v2           |      `185868` |       `0.000013891` | `8532` | `0.000000324` |   `0.000014215` |        `0.0420` |
| Kernel v2.1           |      `187609` |       `0.000014021` | `8060` | `0.000000306` |   `0.000014327` |        `0.0423` |
| Safe                  |      `200732` |       `0.000015001` | `8120` | `0.000000309` |   `0.000015310` |        `0.0452` |
| Simple Account        |      `175283` |       `0.000013100` | `7616` | `0.000000290` |   `0.000013389` |        `0.0396` |
| Light Account         |      `177013` |       `0.000013229` | `7908` | `0.000000301` |   `0.000013529` |        `0.0400` |
| Light Account v2      |      `175186` |       `0.000013092` | `7616` | `0.000000290` |   `0.000013382` |        `0.0395` |
| Coinbase Smart Wallet |      `181014` |       `0.000013528` | `8456` | `0.000000321` |   `0.000013849` |        `0.0409` |

#### User Operation: Uniswap V3 swap

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `208682` |       `0.000015596` | `9300` | `0.000000354` |   `0.000015949` |        `0.0471` |
| Biconomy v2           |      `205018` |       `0.000015322` | `9900` | `0.000000376` |   `0.000015698` |        `0.0464` |
| Kernel v2.1           |      `207241` |       `0.000015488` | `9428` | `0.000000358` |   `0.000015846` |        `0.0468` |
| Safe                  |      `220464` |       `0.000016476` | `9500` | `0.000000361` |   `0.000016837` |        `0.0498` |
| Simple Account        |      `194829` |       `0.000014560` | `8996` | `0.000000342` |   `0.000014902` |        `0.0440` |
| Light Account         |      `196151` |       `0.000014659` | `9300` | `0.000000354` |   `0.000015013` |        `0.0444` |
| Light Account v2      |      `194311` |       `0.000014522` | `8996` | `0.000000342` |   `0.000014864` |        `0.0439` |
| Coinbase Smart Wallet |      `200573` |       `0.000014990` | `9836` | `0.000000374` |   `0.000015363` |        `0.0454` |

#### User Operation: Session key creation

|                       | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account       |      `365368` |       `0.000027305` | `11308` | `0.000000430` |   `0.000027735` |        `0.0820` |
| Biconomy v2           |      `178212` |       `0.000013318` |  `8452` | `0.000000321` |   `0.000013640` |        `0.0403` |
| Kernel v2.1           |      `172136` |       `0.000012864` |  `8888` | `0.000000338` |   `0.000013202` |        `0.0390` |
| Safe                  |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |

#### User Operation: Session key native transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `163716` |       `0.000012235` | `8072` | `0.000000307` |   `0.000012542` |        `0.0371` |
| Biconomy v2           |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |      `127202` |       `0.000009506` | `9828` | `0.000000374` |   `0.000009880` |        `0.0292` |
| Safe                  |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |

#### User Operation: Session key ERC-20 transfer

|                       | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account       |      `194942` |       `0.000014569` |  `8720` | `0.000000332` |   `0.000014900` |        `0.0440` |
| Biconomy v2           |      `147023` |       `0.000010988` | `11348` | `0.000000431` |   `0.000011419` |        `0.0337` |
| Kernel v2.1           |      `153240` |       `0.000011452` | `10804` | `0.000000411` |   `0.000011863` |        `0.0351` |
| Safe                  |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |

#### Runtime: Account creation

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `725323` |       `0.000054206` | `2556` | `0.000000097` |   `0.000054303` |        `0.1605` |
| Biconomy v2           |      `197473` |       `0.000014758` | `3140` | `0.000000119` |   `0.000014877` |        `0.0440` |
| Kernel v2.1           |      `163890` |       `0.000012248` | `3876` | `0.000000147` |   `0.000012395` |        `0.0366` |
| Safe                  |      `289207` |       `0.000021614` | `5884` | `0.000000224` |   `0.000021837` |        `0.0645` |
| Simple Account        |      `174219` |       `0.000013020` | `2372` | `0.000000090` |   `0.000013110` |        `0.0387` |
| Light Account         |      `185267` |       `0.000013846` | `2312` | `0.000000088` |   `0.000013934` |        `0.0412` |
| Light Account v2      |      `143842` |       `0.000010750` | `2288` | `0.000000087` |   `0.000010837` |        `0.0320` |
| Coinbase Smart Wallet |      `190525` |       `0.000014239` | `2948` | `0.000000112` |   `0.000014351` |        `0.0424` |

#### Runtime: Native transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |       `50408` |       `0.000003767` | `2712` | `0.000000103` |   `0.000003870` |        `0.0114` |
| Biconomy v2           |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |       `45364` |       `0.000003390` | `2856` | `0.000000109` |   `0.000003499` |        `0.0103` |
| Safe                  |       `75840` |       `0.000005668` | `4968` | `0.000000189` |   `0.000005857` |        `0.0173` |
| Simple Account        |       `39381` |       `0.000002943` | `2712` | `0.000000103` |   `0.000003046` |        `0.0090` |
| Light Account         |       `39396` |       `0.000002944` | `2700` | `0.000000103` |   `0.000003047` |        `0.0090` |
| Light Account v2      |       `39368` |       `0.000002942` | `2712` | `0.000000103` |   `0.000003045` |        `0.0090` |
| Coinbase Smart Wallet |       `39681` |       `0.000002966` | `2712` | `0.000000103` |   `0.000003069` |        `0.0091` |

#### Runtime: ERC-20 transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |       `74693` |       `0.000005582` | `3388` | `0.000000129` |   `0.000005711` |        `0.0169` |
| Biconomy v2           |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |       `69230` |       `0.000005174` | `3532` | `0.000000134` |   `0.000005308` |        `0.0157` |
| Safe                  |       `99715` |       `0.000007452` | `5640` | `0.000000214` |   `0.000007666` |        `0.0227` |
| Simple Account        |       `63503` |       `0.000004746` | `3388` | `0.000000129` |   `0.000004875` |        `0.0144` |
| Light Account         |       `63438` |       `0.000004741` | `3376` | `0.000000128` |   `0.000004869` |        `0.0144` |
| Light Account v2      |       `63410` |       `0.000004739` | `3388` | `0.000000129` |   `0.000004868` |        `0.0144` |
| Coinbase Smart Wallet |       `63803` |       `0.000004768` | `3388` | `0.000000129` |   `0.000004897` |        `0.0145` |

#### Runtime: ERC-20 swap

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `147781` |       `0.000011044` | `4760` | `0.000000181` |   `0.000011225` |        `0.0332` |
| Biconomy v2           |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |      `142287` |       `0.000010634` | `4888` | `0.000000186` |   `0.000010819` |        `0.0320` |
| Safe                  |      `155690` |       `0.000011635` | `6984` | `0.000000266` |   `0.000011901` |        `0.0352` |
| Simple Account        |      `136943` |       `0.000010234` | `4760` | `0.000000181` |   `0.000010415` |        `0.0308` |
| Light Account         |      `136457` |       `0.000010198` | `4748` | `0.000000181` |   `0.000010378` |        `0.0307` |
| Light Account v2      |      `136429` |       `0.000010196` | `4748` | `0.000000181` |   `0.000010376` |        `0.0307` |
| Coinbase Smart Wallet |      `137243` |       `0.000010257` | `4760` | `0.000000181` |   `0.000010438` |        `0.0308` |

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
