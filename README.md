# AA Benchmarks

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for accurate, transaction-based, fee measurements (see [Methodology](#methodology)) and for use of existing TypeScript utilities around fee calculations. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Methodology

This tool seeks to measure the cost of the entire transaction landed on-chain for each action, including associated L1 fees. As smart accounts are expected to proliferate on L2s, it's important to consider L1 fees (measured as a function of the RLP-encoded signed transaction and the blob gas market) on top of L2 execution costs. L1 fees can impact the cost of transactions on L2s, so optimizing the size of calldata is important.

The L1 fee calculations are done following the formula and constants specified in [Optimism Ecotone](https://docs.optimism.io/stack/transactions/fees#ecotone).

There are two different categories of benchmarks measured in this test: **User Operation** and **Runtime**.

- **User Operation**: Measuring the cost of user operations are tricky because each bundler may calculate pre-verification gas differently and the costs may differ based on the number of user operations in the bundle. In this test, the on-chain cost for a bundler to execute the user operation in a bundle of size 1 is measured, to present a lower-bound fee required for the user operation to land in an exclusive bundle. In other words, fees are calculated based on the transaction receipt and the serialized signed transaction (legacy transaction type) for `entryPoint.handleUserOp([userOp])`. As multi-user-op bundles become more prevalent, we can expect actual fees to undercut the data presented here.
- **Runtime**: Runtime transactions are defined as those performed outside of the user operation flow, with the owner key interacting directly with the account factory or account, akin to the way you might use MetaMask today to interact directly with smart contracts. Support for runtime transactions also enable contracts to interact directly with your smart account. For this flow, fees are calculated based on the transaction's receipt and the serialized signed transaction (legacy transaction type).

## Results

These numbers are derived from local simulations with fixed inputs (see [Run benchmark](#run-benchmark) below to try different inputs) and actual on-chain numbers may differ.

<!-- BENCHMARK_RESULTS -->

<details>
<summary><b>Run options</b></summary>

Last run: Wed, 08 May 2024 22:23:29 GMT

| Option               |          Value |
| :------------------- | -------------: |
| L2 base fee (gwei)   |         `0.06` |
| L1 base fee (gwei)   | `18.106809087` |
| L1 base fee scalar   |         `1368` |
| Blob base fee (wei)  |            `1` |
| Blob base fee scalar |       `810949` |
| ETH price (USD)      |        `$3000` |

</details>

### User Operation: Account creation

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |    `858351` | `0.000051501` |      `7892` | `0.000000195` |   `0.000051697` |       `$0.1551` |
| Biconomy v2           |    `329947` | `0.000019797` |      `9096` | `0.000000225` |   `0.000020022` |       `$0.0601` |
| Kernel v2.1           |    `296301` | `0.000017778` |      `9344` | `0.000000231` |   `0.000018010` |       `$0.0540` |
| Safe                  |    `435486` | `0.000026129` |     `11412` | `0.000000283` |   `0.000026412` |       `$0.0792` |
| Simple Account        |    `297367` | `0.000017842` |      `7440` | `0.000000184` |   `0.000018026` |       `$0.0541` |
| Light Account         |    `310532` | `0.000018632` |      `7672` | `0.000000190` |   `0.000018822` |       `$0.0565` |
| Light Account v2      |    `266901` | `0.000016014` |      `7368` | `0.000000183` |   `0.000016197` |       `$0.0486` |
| Coinbase Smart Wallet |    `317904` | `0.000019074` |      `8852` | `0.000000219` |   `0.000019294` |       `$0.0579` |

### User Operation: Native transfer

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |    `165100` | `0.000009906` |      `7120` | `0.000000176` |   `0.000010082` |       `$0.0302` |
| Biconomy v2           |    `161912` | `0.000009715` |      `7744` | `0.000000192` |   `0.000009907` |       `$0.0297` |
| Kernel v2.1           |    `163398` | `0.000009804` |      `7260` | `0.000000180` |   `0.000009984` |       `$0.0300` |
| Safe                  |    `176479` | `0.000010589` |      `7320` | `0.000000181` |   `0.000010770` |       `$0.0323` |
| Simple Account        |    `151045` | `0.000009063` |      `6804` | `0.000000169` |   `0.000009231` |       `$0.0277` |
| Light Account         |    `152880` | `0.000009173` |      `7120` | `0.000000176` |   `0.000009349` |       `$0.0280` |
| Light Account v2      |    `151040` | `0.000009062` |      `6816` | `0.000000169` |   `0.000009231` |       `$0.0277` |
| Coinbase Smart Wallet |    `156812` | `0.000009409` |      `7680` | `0.000000190` |   `0.000009599` |       `$0.0288` |

### User Operation: ERC-20 transfer

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |    `189487` | `0.000011369` |      `7792` | `0.000000193` |   `0.000011562` |       `$0.0347` |
| Biconomy v2           |    `185868` | `0.000011152` |      `8404` | `0.000000208` |   `0.000011360` |       `$0.0341` |
| Kernel v2.1           |    `187609` | `0.000011257` |      `7932` | `0.000000196` |   `0.000011453` |       `$0.0344` |
| Safe                  |    `200732` | `0.000012044` |      `7992` | `0.000000198` |   `0.000012242` |       `$0.0367` |
| Simple Account        |    `175283` | `0.000010517` |      `7488` | `0.000000185` |   `0.000010702` |       `$0.0321` |
| Light Account         |    `177013` | `0.000010621` |      `7780` | `0.000000193` |   `0.000010813` |       `$0.0324` |
| Light Account v2      |    `175186` | `0.000010511` |      `7488` | `0.000000185` |   `0.000010697` |       `$0.0321` |
| Coinbase Smart Wallet |    `181014` | `0.000010861` |      `8328` | `0.000000206` |   `0.000011067` |       `$0.0332` |

### User Operation: Session key creation

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |    `365368` | `0.000021922` |     `11192` | `0.000000277` |   `0.000022199` |       `$0.0666` |
| Biconomy v2           |    `178212` | `0.000010693` |      `8324` | `0.000000206` |   `0.000010899` |       `$0.0327` |
| Kernel v2.1           |    `172136` | `0.000010328` |      `8760` | `0.000000217` |   `0.000010545` |       `$0.0316` |
| Safe                  |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |

### User Operation: Session key native transfer

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |    `163716` | `0.000009823` |      `7944` | `0.000000197` |   `0.000010020` |       `$0.0301` |
| Biconomy v2           |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |    `127202` | `0.000007632` |      `9700` | `0.000000240` |   `0.000007872` |       `$0.0236` |
| Safe                  |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |

### User Operation: Session key ERC-20 transfer

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |    `194942` | `0.000011697` |      `8604` | `0.000000213` |   `0.000011910` |       `$0.0357` |
| Biconomy v2           |    `147023` | `0.000008821` |     `11232` | `0.000000278` |   `0.000009100` |       `$0.0273` |
| Kernel v2.1           |    `153240` | `0.000009194` |     `10688` | `0.000000265` |   `0.000009459` |       `$0.0284` |
| Safe                  |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Simple Account        |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Light Account         |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Light Account v2      |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Coinbase Smart Wallet |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |

### Runtime: Account creation

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |    `725323` | `0.000043519` |      `2416` | `0.000000060` |   `0.000043579` |       `$0.1307` |
| Biconomy v2           |    `197473` | `0.000011848` |      `3000` | `0.000000074` |   `0.000011923` |       `$0.0358` |
| Kernel v2.1           |    `163890` | `0.000009833` |      `3748` | `0.000000093` |   `0.000009926` |       `$0.0298` |
| Safe                  |    `289207` | `0.000017352` |      `5768` | `0.000000143` |   `0.000017495` |       `$0.0525` |
| Simple Account        |    `174219` | `0.000010453` |      `2244` | `0.000000056` |   `0.000010509` |       `$0.0315` |
| Light Account         |    `185267` | `0.000011116` |      `2172` | `0.000000054` |   `0.000011170` |       `$0.0335` |
| Light Account v2      |    `143842` | `0.000008631` |      `2172` | `0.000000054` |   `0.000008684` |       `$0.0261` |
| Coinbase Smart Wallet |    `190525` | `0.000011432` |      `2820` | `0.000000070` |   `0.000011501` |       `$0.0345` |

### Runtime: Native transfer

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |     `50408` | `0.000003024` |      `2584` | `0.000000064` |   `0.000003088` |       `$0.0093` |
| Biconomy v2           |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |     `45364` | `0.000002722` |      `2728` | `0.000000068` |   `0.000002789` |       `$0.0084` |
| Safe                  |     `75840` | `0.000004550` |      `4840` | `0.000000120` |   `0.000004670` |       `$0.0140` |
| Simple Account        |     `39381` | `0.000002363` |      `2572` | `0.000000064` |   `0.000002427` |       `$0.0073` |
| Light Account         |     `39396` | `0.000002364` |      `2584` | `0.000000064` |   `0.000002428` |       `$0.0073` |
| Light Account v2      |     `39368` | `0.000002362` |      `2584` | `0.000000064` |   `0.000002426` |       `$0.0073` |
| Coinbase Smart Wallet |     `39681` | `0.000002381` |      `2584` | `0.000000064` |   `0.000002445` |       `$0.0073` |

### Runtime: ERC-20 transfer

|                       | L2 gas used |  L2 fee (ETH) | L1 gas used |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :-------------------- | ----------: | ------------: | ----------: | ------------: | --------------: | --------------: |
| Modular Account       |     `74693` | `0.000004482` |      `3260` | `0.000000081` |   `0.000004562` |       `$0.0137` |
| Biconomy v2           |         `-` |           `-` |         `-` |           `-` |             `-` |   `Unsupported` |
| Kernel v2.1           |     `69230` | `0.000004154` |      `3392` | `0.000000084` |   `0.000004238` |       `$0.0127` |
| Safe                  |     `99715` | `0.000005983` |      `5500` | `0.000000136` |   `0.000006119` |       `$0.0184` |
| Simple Account        |     `63503` | `0.000003810` |      `3260` | `0.000000081` |   `0.000003891` |       `$0.0117` |
| Light Account         |     `63438` | `0.000003806` |      `3248` | `0.000000080` |   `0.000003887` |       `$0.0117` |
| Light Account v2      |     `63410` | `0.000003805` |      `3248` | `0.000000080` |   `0.000003885` |       `$0.0117` |
| Coinbase Smart Wallet |     `63803` | `0.000003828` |      `3260` | `0.000000081` |   `0.000003909` |       `$0.0117` |

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
