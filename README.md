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

Last run: Fri, 03 May 2024 01:24:58 GMT
| Option | Value |
| :----------------------------- | ------------: |
| L2 gas price (Gwei) | `0.06` |
| L1 fee per calldata gas (Gwei) | `0.019935596` |
| ETH price (USD) | `$3000` |

</details>

### User Operation: Account creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `858351` |      `329947` |      `296301` |      `435486` |      `310532` |              `317904` |
| L2 fee (ETH)    |   `0.000051501` | `0.000019797` | `0.000017778` | `0.000026129` | `0.000018632` |         `0.000019074` |
| L1 gas used     |          `8980` |       `10184` |       `10432` |       `12500` |        `8760` |                `9940` |
| L1 fee (ETH)    |   `0.000000179` | `0.000000203` | `0.000000208` | `0.000000249` | `0.000000175` |         `0.000000198` |
| Total fee (ETH) |   `0.000051680` | `0.000020000` | `0.000017986` | `0.000026378` | `0.000018807` |         `0.000019272` |
| Total fee (USD) |         `$0.16` |       `$0.06` |       `$0.05` |       `$0.08` |       `$0.06` |               `$0.06` |

### User Operation: Native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `165100` |      `161912` |      `163398` |      `176479` |      `152880` |              `156812` |
| L2 fee (ETH)    |   `0.000009906` | `0.000009715` | `0.000009804` | `0.000010589` | `0.000009173` |         `0.000009409` |
| L1 gas used     |          `8208` |        `8832` |        `8348` |        `8408` |        `8208` |                `8768` |
| L1 fee (ETH)    |   `0.000000164` | `0.000000176` | `0.000000166` | `0.000000168` | `0.000000164` |         `0.000000175` |
| Total fee (ETH) |   `0.000010070` | `0.000009891` | `0.000009970` | `0.000010756` | `0.000009336` |         `0.000009584` |
| Total fee (USD) |         `$0.03` |       `$0.03` |       `$0.03` |       `$0.03` |       `$0.03` |               `$0.03` |

### User Operation: ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `189487` |      `185868` |      `187609` |      `200732` |      `177013` |              `181014` |
| L2 fee (ETH)    |   `0.000011369` | `0.000011152` | `0.000011257` | `0.000012044` | `0.000010621` |         `0.000010861` |
| L1 gas used     |          `8880` |        `9492` |        `9020` |        `9080` |        `8868` |                `9416` |
| L1 fee (ETH)    |   `0.000000177` | `0.000000189` | `0.000000180` | `0.000000181` | `0.000000177` |         `0.000000188` |
| Total fee (ETH) |   `0.000011546` | `0.000011341` | `0.000011436` | `0.000012225` | `0.000010798` |         `0.000011049` |
| Total fee (USD) |         `$0.03` |       `$0.03` |       `$0.03` |       `$0.04` |       `$0.03` |               `$0.03` |

### User Operation: Session key creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `365368` |      `178212` |      `172136` |           `-` |           `-` |                   `-` |
| L2 fee (ETH)    |   `0.000021922` | `0.000010693` | `0.000010328` |           `-` |           `-` |                   `-` |
| L1 gas used     |         `12280` |        `9412` |        `9848` |           `-` |           `-` |                   `-` |
| L1 fee (ETH)    |   `0.000000245` | `0.000000188` | `0.000000196` |           `-` |           `-` |                   `-` |
| Total fee (ETH) |   `0.000022167` | `0.000010880` | `0.000010524` |           `-` |           `-` |                   `-` |
| Total fee (USD) |         `$0.07` |       `$0.03` |       `$0.03` | `Unsupported` | `Unsupported` |         `Unsupported` |

### User Operation: Session key native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `163716` |           `-` |      `127202` |           `-` |           `-` |                   `-` |
| L2 fee (ETH)    |   `0.000009823` |           `-` | `0.000007632` |           `-` |           `-` |                   `-` |
| L1 gas used     |          `9032` |           `-` |       `10788` |           `-` |           `-` |                   `-` |
| L1 fee (ETH)    |   `0.000000180` |           `-` | `0.000000215` |           `-` |           `-` |                   `-` |
| Total fee (ETH) |   `0.000010003` |           `-` | `0.000007847` |           `-` |           `-` |                   `-` |
| Total fee (USD) |         `$0.03` | `Unsupported` |       `$0.02` | `Unsupported` | `Unsupported` |         `Unsupported` |

### User Operation: Session key ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `194942` |      `147023` |      `153240` |           `-` |           `-` |                   `-` |
| L2 fee (ETH)    |   `0.000011697` | `0.000008821` | `0.000009194` |           `-` |           `-` |                   `-` |
| L1 gas used     |          `9692` |       `12320` |       `11776` |           `-` |           `-` |                   `-` |
| L1 fee (ETH)    |   `0.000000193` | `0.000000246` | `0.000000235` |           `-` |           `-` |                   `-` |
| Total fee (ETH) |   `0.000011890` | `0.000009067` | `0.000009429` |           `-` |           `-` |                   `-` |
| Total fee (USD) |         `$0.04` |       `$0.03` |       `$0.03` | `Unsupported` | `Unsupported` |         `Unsupported` |

### Runtime: Account creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `725323` |      `197473` |      `163890` |      `289207` |      `185267` |              `190525` |
| L2 fee (ETH)    |   `0.000043519` | `0.000011848` | `0.000009833` | `0.000017352` | `0.000011116` |         `0.000011432` |
| L1 gas used     |          `3504` |        `4088` |        `4836` |        `6856` |        `3260` |                `3908` |
| L1 fee (ETH)    |   `0.000000070` | `0.000000081` | `0.000000096` | `0.000000137` | `0.000000065` |         `0.000000078` |
| Total fee (ETH) |   `0.000043589` | `0.000011930` | `0.000009930` | `0.000017489` | `0.000011181` |         `0.000011509` |
| Total fee (USD) |         `$0.13` |       `$0.04` |       `$0.03` |       `$0.05` |       `$0.03` |               `$0.03` |

### Runtime: Native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |         `50408` |           `-` |       `45364` |       `75840` |       `39396` |               `39681` |
| L2 fee (ETH)    |   `0.000003024` |           `-` | `0.000002722` | `0.000004550` | `0.000002364` |         `0.000002381` |
| L1 gas used     |          `3672` |           `-` |        `3816` |        `5928` |        `3672` |                `3672` |
| L1 fee (ETH)    |   `0.000000073` |           `-` | `0.000000076` | `0.000000118` | `0.000000073` |         `0.000000073` |
| Total fee (ETH) |   `0.000003098` |           `-` | `0.000002798` | `0.000004669` | `0.000002437` |         `0.000002454` |
| Total fee (USD) |         `$0.01` | `Unsupported` |       `$0.01` |       `$0.01` |       `$0.01` |               `$0.01` |

### Runtime: ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |         `74693` |           `-` |       `69230` |       `99715` |       `63438` |               `63803` |
| L2 fee (ETH)    |   `0.000004482` |           `-` | `0.000004154` | `0.000005983` | `0.000003806` |         `0.000003828` |
| L1 gas used     |          `4348` |           `-` |        `4480` |        `6588` |        `4336` |                `4348` |
| L1 fee (ETH)    |   `0.000000087` |           `-` | `0.000000089` | `0.000000131` | `0.000000086` |         `0.000000087` |
| Total fee (ETH) |   `0.000004568` |           `-` | `0.000004243` | `0.000006114` | `0.000003893` |         `0.000003915` |
| Total fee (USD) |         `$0.01` | `Unsupported` |       `$0.01` |       `$0.02` |       `$0.01` |               `$0.01` |

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
