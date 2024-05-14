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

#### ⛽️ Benchmarks for other networks

[Ethereum Mainnet](/benchmarks/ethereum.md) | [Arbitrum Mainnet](/benchmarks/arbitrum.md) | [Polygon Mainnet](/benchmarks/polygon.md) | **Optimism Mainnet** | [Base Mainnet](/benchmarks/base.md) | [Zora Mainnet](/benchmarks/zora.md)

---

<!-- BENCHMARK_RESULTS -->

### Optimism Mainnet

#### Run options

Values taken at: Tue, 14 May 2024 00:02:31 GMT

| Option               |         Value |
| :------------------- | ------------: |
| Gas price (gwei)     | `0.061023704` |
| L1 base fee (gwei)   | `3.578904748` |
| L1 base fee scalar   |        `1368` |
| Blob base fee (wei)  |           `1` |
| Blob base fee scalar |      `810949` |
| ETH price (USD)      |     `$2948.6` |

#### User Operation: Account creation

|                       | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account       |      `858351` |       `0.000052380` |  `8020` | `0.000000039` |   `0.000052419` |        `0.1546` |
| Biconomy v2           |      `329947` |       `0.000020135` |  `9224` | `0.000000045` |   `0.000020180` |        `0.0595` |
| Kernel v2.1           |      `296301` |       `0.000018081` |  `9472` | `0.000000046` |   `0.000018128` |        `0.0535` |
| Safe                  |      `435486` |       `0.000026575` | `11552` | `0.000000057` |   `0.000026632` |        `0.0785` |
| Simple Account        |      `297367` |       `0.000018146` |  `7568` | `0.000000037` |   `0.000018183` |        `0.0536` |
| Light Account         |      `310532` |       `0.000018950` |  `7800` | `0.000000038` |   `0.000018988` |        `0.0560` |
| Light Account v2      |      `266901` |       `0.000016287` |  `7496` | `0.000000037` |   `0.000016324` |        `0.0481` |
| Coinbase Smart Wallet |      `317904` |       `0.000019400` |  `8964` | `0.000000044` |   `0.000019444` |        `0.0573` |

#### User Operation: Native transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `165100` |       `0.000010075` | `7248` | `0.000000035` |   `0.000010110` |        `0.0298` |
| Biconomy v2           |      `161912` |       `0.000009880` | `7848` | `0.000000038` |   `0.000009919` |        `0.0292` |
| Kernel v2.1           |      `163398` |       `0.000009971` | `7388` | `0.000000036` |   `0.000010007` |        `0.0295` |
| Safe                  |      `176479` |       `0.000010769` | `7460` | `0.000000037` |   `0.000010806` |        `0.0319` |
| Simple Account        |      `151045` |       `0.000009217` | `6932` | `0.000000034` |   `0.000009251` |        `0.0273` |
| Light Account         |      `152880` |       `0.000009329` | `7248` | `0.000000035` |   `0.000009365` |        `0.0276` |
| Light Account v2      |      `151040` |       `0.000009217` | `6944` | `0.000000034` |   `0.000009251` |        `0.0273` |
| Coinbase Smart Wallet |      `156812` |       `0.000009569` | `7796` | `0.000000038` |   `0.000009607` |        `0.0283` |

#### User Operation: ERC-20 transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `189487` |       `0.000011563` | `7920` | `0.000000039` |   `0.000011602` |        `0.0342` |
| Biconomy v2           |      `185868` |       `0.000011342` | `8532` | `0.000000042` |   `0.000011384` |        `0.0336` |
| Kernel v2.1           |      `187609` |       `0.000011449` | `8060` | `0.000000039` |   `0.000011488` |        `0.0339` |
| Safe                  |      `200732` |       `0.000012249` | `8120` | `0.000000040` |   `0.000012289` |        `0.0362` |
| Simple Account        |      `175283` |       `0.000010696` | `7616` | `0.000000037` |   `0.000010734` |        `0.0316` |
| Light Account         |      `177013` |       `0.000010802` | `7908` | `0.000000039` |   `0.000010841` |        `0.0320` |
| Light Account v2      |      `175186` |       `0.000010690` | `7616` | `0.000000037` |   `0.000010728` |        `0.0316` |
| Coinbase Smart Wallet |      `181014` |       `0.000011046` | `8456` | `0.000000041` |   `0.000011088` |        `0.0327` |

#### User Operation: Uniswap V3 swap

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `208682` |       `0.000012735` | `9300` | `0.000000046` |   `0.000012780` |        `0.0377` |
| Biconomy v2           |      `205018` |       `0.000012511` | `9900` | `0.000000048` |   `0.000012559` |        `0.0370` |
| Kernel v2.1           |      `207241` |       `0.000012647` | `9428` | `0.000000046` |   `0.000012693` |        `0.0374` |
| Safe                  |      `220464` |       `0.000013454` | `9500` | `0.000000047` |   `0.000013500` |        `0.0398` |
| Simple Account        |      `194829` |       `0.000011889` | `8996` | `0.000000044` |   `0.000011933` |        `0.0352` |
| Light Account         |      `196151` |       `0.000011970` | `9300` | `0.000000046` |   `0.000012015` |        `0.0354` |
| Light Account v2      |      `194311` |       `0.000011858` | `8996` | `0.000000044` |   `0.000011902` |        `0.0351` |
| Coinbase Smart Wallet |      `200573` |       `0.000012240` | `9836` | `0.000000048` |   `0.000012288` |        `0.0362` |

#### User Operation: Session key creation

|                       | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account       |      `365368` |       `0.000022296` | `11308` | `0.000000055` |   `0.000022351` |        `0.0659` |
| Biconomy v2           |      `178212` |       `0.000010875` |  `8452` | `0.000000041` |   `0.000010917` |        `0.0322` |
| Kernel v2.1           |      `172136` |       `0.000010504` |  `8888` | `0.000000044` |   `0.000010548` |        `0.0311` |
| Safe                  |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |

#### User Operation: Session key native transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `163716` |       `0.000009991` | `8072` | `0.000000040` |   `0.000010030` |        `0.0296` |
| Biconomy v2           |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |      `127202` |       `0.000007762` | `9828` | `0.000000048` |   `0.000007810` |        `0.0230` |
| Safe                  |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |

#### User Operation: Session key ERC-20 transfer

|                       | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account       |      `194942` |       `0.000011896` |  `8720` | `0.000000043` |   `0.000011939` |        `0.0352` |
| Biconomy v2           |      `147023` |       `0.000008972` | `11348` | `0.000000056` |   `0.000009027` |        `0.0266` |
| Kernel v2.1           |      `153240` |       `0.000009351` | `10804` | `0.000000053` |   `0.000009404` |        `0.0277` |
| Safe                  |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |           `-` |                 `-` |     `-` |           `-` |             `-` |   `Unsupported` |

#### Runtime: Account creation

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `725323` |       `0.000044262` | `2556` | `0.000000013` |   `0.000044274` |        `0.1305` |
| Biconomy v2           |      `197473` |       `0.000012051` | `3140` | `0.000000015` |   `0.000012066` |        `0.0356` |
| Kernel v2.1           |      `163890` |       `0.000010001` | `3876` | `0.000000019` |   `0.000010020` |        `0.0295` |
| Safe                  |      `289207` |       `0.000017648` | `5884` | `0.000000029` |   `0.000017677` |        `0.0521` |
| Simple Account        |      `174219` |       `0.000010631` | `2372` | `0.000000012` |   `0.000010643` |        `0.0314` |
| Light Account         |      `185267` |       `0.000011306` | `2312` | `0.000000011` |   `0.000011317` |        `0.0334` |
| Light Account v2      |      `143842` |       `0.000008778` | `2288` | `0.000000011` |   `0.000008789` |        `0.0259` |
| Coinbase Smart Wallet |      `190525` |       `0.000011627` | `2948` | `0.000000014` |   `0.000011641` |        `0.0343` |

#### Runtime: Native transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |       `50408` |       `0.000003076` | `2712` | `0.000000013` |   `0.000003089` |        `0.0091` |
| Biconomy v2           |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |       `45364` |       `0.000002768` | `2856` | `0.000000014` |   `0.000002782` |        `0.0082` |
| Safe                  |       `75840` |       `0.000004628` | `4968` | `0.000000024` |   `0.000004652` |        `0.0137` |
| Simple Account        |       `39381` |       `0.000002403` | `2712` | `0.000000013` |   `0.000002416` |        `0.0071` |
| Light Account         |       `39396` |       `0.000002404` | `2700` | `0.000000013` |   `0.000002417` |        `0.0071` |
| Light Account v2      |       `39368` |       `0.000002402` | `2712` | `0.000000013` |   `0.000002416` |        `0.0071` |
| Coinbase Smart Wallet |       `39681` |       `0.000002421` | `2712` | `0.000000013` |   `0.000002435` |        `0.0072` |

#### Runtime: ERC-20 transfer

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |       `74693` |       `0.000004558` | `3388` | `0.000000017` |   `0.000004575` |        `0.0135` |
| Biconomy v2           |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |       `69230` |       `0.000004225` | `3532` | `0.000000017` |   `0.000004242` |        `0.0125` |
| Safe                  |       `99715` |       `0.000006085` | `5640` | `0.000000028` |   `0.000006113` |        `0.0180` |
| Simple Account        |       `63503` |       `0.000003875` | `3388` | `0.000000017` |   `0.000003892` |        `0.0115` |
| Light Account         |       `63438` |       `0.000003871` | `3376` | `0.000000017` |   `0.000003888` |        `0.0115` |
| Light Account v2      |       `63410` |       `0.000003870` | `3388` | `0.000000017` |   `0.000003886` |        `0.0115` |
| Coinbase Smart Wallet |       `63803` |       `0.000003893` | `3388` | `0.000000017` |   `0.000003910` |        `0.0115` |

#### Runtime: ERC-20 swap

|                       | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account       |      `147781` |       `0.000009018` | `4760` | `0.000000023` |   `0.000009041` |        `0.0267` |
| Biconomy v2           |           `-` |                 `-` |    `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |      `142287` |       `0.000008683` | `4888` | `0.000000024` |   `0.000008707` |        `0.0257` |
| Safe                  |      `155690` |       `0.000009501` | `6984` | `0.000000034` |   `0.000009535` |        `0.0281` |
| Simple Account        |      `136943` |       `0.000008357` | `4760` | `0.000000023` |   `0.000008380` |        `0.0247` |
| Light Account         |      `136457` |       `0.000008327` | `4748` | `0.000000023` |   `0.000008350` |        `0.0246` |
| Light Account v2      |      `136429` |       `0.000008325` | `4748` | `0.000000023` |   `0.000008349` |        `0.0246` |
| Coinbase Smart Wallet |      `137243` |       `0.000008375` | `4760` | `0.000000023` |   `0.000008398` |        `0.0248` |

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
