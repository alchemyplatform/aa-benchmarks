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

Last run: Fri, 03 May 2024 01:22:16 GMT
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
| L1 gas used     |          `9168` |       `10372` |       `10620` |       `12688` |        `8948` |               `10128` |
| L1 fee (ETH)    |   `0.000000183` | `0.000000207` | `0.000000212` | `0.000000253` | `0.000000178` |         `0.000000202` |
| Total fee (ETH) |   `0.000051684` | `0.000020004` | `0.000017990` | `0.000026382` | `0.000018810` |         `0.000019276` |
| Total fee (USD) |         `$0.16` |       `$0.06` |       `$0.05` |       `$0.08` |       `$0.06` |               `$0.06` |

### User Operation: Native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `165100` |      `161912` |      `163398` |      `176479` |      `152880` |              `156812` |
| L2 fee (ETH)    |   `0.000009906` | `0.000009715` | `0.000009804` | `0.000010589` | `0.000009173` |         `0.000009409` |
| L1 gas used     |          `8396` |        `9020` |        `8536` |        `8596` |        `8396` |                `8956` |
| L1 fee (ETH)    |   `0.000000167` | `0.000000180` | `0.000000170` | `0.000000171` | `0.000000167` |         `0.000000179` |
| Total fee (ETH) |   `0.000010073` | `0.000009895` | `0.000009974` | `0.000010760` | `0.000009340` |         `0.000009587` |
| Total fee (USD) |         `$0.03` |       `$0.03` |       `$0.03` |       `$0.03` |       `$0.03` |               `$0.03` |

### User Operation: ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `189487` |      `185868` |      `187609` |      `200732` |      `177013` |              `181014` |
| L2 fee (ETH)    |   `0.000011369` | `0.000011152` | `0.000011257` | `0.000012044` | `0.000010621` |         `0.000010861` |
| L1 gas used     |          `9068` |        `9680` |        `9208` |        `9268` |        `9056` |                `9604` |
| L1 fee (ETH)    |   `0.000000181` | `0.000000193` | `0.000000184` | `0.000000185` | `0.000000181` |         `0.000000191` |
| Total fee (ETH) |   `0.000011550` | `0.000011345` | `0.000011440` | `0.000012229` | `0.000010801` |         `0.000011052` |
| Total fee (USD) |         `$0.03` |       `$0.03` |       `$0.03` |       `$0.04` |       `$0.03` |               `$0.03` |

### User Operation: Session key creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `365368` |      `178212` |      `172136` |           `-` |           `-` |                   `-` |
| L2 fee (ETH)    |   `0.000021922` | `0.000010693` | `0.000010328` |           `-` |           `-` |                   `-` |
| L1 gas used     |         `12468` |        `9600` |       `10036` |           `-` |           `-` |                   `-` |
| L1 fee (ETH)    |   `0.000000249` | `0.000000191` | `0.000000200` |           `-` |           `-` |                   `-` |
| Total fee (ETH) |   `0.000022171` | `0.000010884` | `0.000010528` |           `-` |           `-` |                   `-` |
| Total fee (USD) |         `$0.07` |       `$0.03` |       `$0.03` | `Unsupported` | `Unsupported` |         `Unsupported` |

### User Operation: Session key native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `163716` |           `-` |      `127202` |           `-` |           `-` |                   `-` |
| L2 fee (ETH)    |   `0.000009823` |           `-` | `0.000007632` |           `-` |           `-` |                   `-` |
| L1 gas used     |          `9220` |           `-` |       `10976` |           `-` |           `-` |                   `-` |
| L1 fee (ETH)    |   `0.000000184` |           `-` | `0.000000219` |           `-` |           `-` |                   `-` |
| Total fee (ETH) |   `0.000010007` |           `-` | `0.000007851` |           `-` |           `-` |                   `-` |
| Total fee (USD) |         `$0.03` | `Unsupported` |       `$0.02` | `Unsupported` | `Unsupported` |         `Unsupported` |

### User Operation: Session key ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `194942` |      `147023` |      `153240` |           `-` |           `-` |                   `-` |
| L2 fee (ETH)    |   `0.000011697` | `0.000008821` | `0.000009194` |           `-` |           `-` |                   `-` |
| L1 gas used     |          `9880` |       `12508` |       `11964` |           `-` |           `-` |                   `-` |
| L1 fee (ETH)    |   `0.000000197` | `0.000000249` | `0.000000239` |           `-` |           `-` |                   `-` |
| Total fee (ETH) |   `0.000011893` | `0.000009071` | `0.000009433` |           `-` |           `-` |                   `-` |
| Total fee (USD) |         `$0.04` |       `$0.03` |       `$0.03` | `Unsupported` | `Unsupported` |         `Unsupported` |

### Runtime: Account creation

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |        `725323` |      `197473` |      `163890` |      `289207` |      `185267` |              `190525` |
| L2 fee (ETH)    |   `0.000043519` | `0.000011848` | `0.000009833` | `0.000017352` | `0.000011116` |         `0.000011432` |
| L1 gas used     |          `3692` |        `4276` |        `5024` |        `7044` |        `3448` |                `4096` |
| L1 fee (ETH)    |   `0.000000074` | `0.000000085` | `0.000000100` | `0.000000140` | `0.000000069` |         `0.000000082` |
| Total fee (ETH) |   `0.000043593` | `0.000011934` | `0.000009934` | `0.000017493` | `0.000011185` |         `0.000011513` |
| Total fee (USD) |         `$0.13` |       `$0.04` |       `$0.03` |       `$0.05` |       `$0.03` |               `$0.03` |

### Runtime: Native transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |         `50408` |           `-` |       `45364` |       `75840` |       `39396` |               `39681` |
| L2 fee (ETH)    |   `0.000003024` |           `-` | `0.000002722` | `0.000004550` | `0.000002364` |         `0.000002381` |
| L1 gas used     |          `3860` |           `-` |        `4004` |        `6116` |        `3860` |                `3860` |
| L1 fee (ETH)    |   `0.000000077` |           `-` | `0.000000080` | `0.000000122` | `0.000000077` |         `0.000000077` |
| Total fee (ETH) |   `0.000003101` |           `-` | `0.000002802` | `0.000004672` | `0.000002441` |         `0.000002458` |
| Total fee (USD) |         `$0.01` | `Unsupported` |       `$0.01` |       `$0.01` |       `$0.01` |               `$0.01` |

### Runtime: ERC-20 transfer

|                 | Modular Account |   Biconomy v2 |   Kernel v2.1 |          Safe | Light Account | Coinbase Smart Wallet |
| :-------------- | --------------: | ------------: | ------------: | ------------: | ------------: | --------------------: |
| L2 gas used     |         `74693` |           `-` |       `69230` |       `99715` |       `63438` |               `63803` |
| L2 fee (ETH)    |   `0.000004482` |           `-` | `0.000004154` | `0.000005983` | `0.000003806` |         `0.000003828` |
| L1 gas used     |          `4536` |           `-` |        `4668` |        `6776` |        `4524` |                `4536` |
| L1 fee (ETH)    |   `0.000000090` |           `-` | `0.000000093` | `0.000000135` | `0.000000090` |         `0.000000090` |
| Total fee (ETH) |   `0.000004572` |           `-` | `0.000004247` | `0.000006118` | `0.000003896` |         `0.000003919` |
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
