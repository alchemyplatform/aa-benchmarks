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

#### Run parameters

| Parameter            | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------- | ------------------: | --------------------------: |
| Gas price (gwei)     |       `0.001000555` |               `0.060233618` |
| L1 base fee (gwei)   |       `1.121228232` |                     `24.05` |
| L1 base fee scalar   |              `5227` |                      `1368` |
| Blob base fee (wei)  |           `7736427` |               `46930000000` |
| Blob base fee scalar |           `1014213` |                    `810949` |
| ETH price (USD)      |          `$3192.59` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |          `$0.00090` |                  `$0.10261` |
| Modular Account                |          `$0.00290` |                  `$0.22681` |
| Nexus                          |          `$0.00127` |                  `$0.13254` |
| Biconomy v2                    |          `$0.00124` |                  `$0.13446` |
| Kernel v2.1                    |          `$0.00114` |                  `$0.12990` |
| Safe v1.4.1                    |          `$0.00163` |                  `$0.17268` |
| Light Account v2               |          `$0.00100` |                  `$0.10904` |
| Light Account v2 (Multi-Owner) |          `$0.00109` |                  `$0.11393` |
| Light Account                  |          `$0.00115` |                  `$0.11977` |
| Coinbase Smart Wallet          |          `$0.00120` |                  `$0.13015` |
| Simple Account                 |          `$0.00110` |                  `$0.11545` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `233004` |       `0.000000233` |  `7508` | `0.000000048` |   `0.000000281` |      `$0.00090` |
| Modular Account                |      `858351` |       `0.000000859` |  `8020` | `0.000000051` |   `0.000000910` |      `$0.00290` |
| Nexus                          |      `342381` |       `0.000000343` |  `8664` | `0.000000055` |   `0.000000398` |      `$0.00127` |
| Biconomy v2                    |      `329947` |       `0.000000330` |  `9224` | `0.000000059` |   `0.000000389` |      `$0.00124` |
| Kernel v2.1                    |      `296301` |       `0.000000296` |  `9472` | `0.000000060` |   `0.000000357` |      `$0.00114` |
| Safe v1.4.1                    |      `435486` |       `0.000000436` | `11552` | `0.000000073` |   `0.000000509` |      `$0.00163` |
| Light Account v2               |      `266901` |       `0.000000267` |  `7496` | `0.000000048` |   `0.000000315` |      `$0.00100` |
| Light Account v2 (Multi-Owner) |      `292822` |       `0.000000293` |  `7484` | `0.000000048` |   `0.000000341` |      `$0.00109` |
| Light Account                  |      `310532` |       `0.000000311` |  `7800` | `0.000000050` |   `0.000000360` |      `$0.00115` |
| Coinbase Smart Wallet          |      `317904` |       `0.000000318` |  `8964` | `0.000000057` |   `0.000000375` |      `$0.00120` |
| Simple Account                 |      `297367` |       `0.000000298` |  `7568` | `0.000000048` |   `0.000000346` |      `$0.00110` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `233004` |       `0.000014035` |  `7508` | `0.000018106` |   `0.000032140` |      `$0.10261` |
| Modular Account                |      `858351` |       `0.000051702` |  `8020` | `0.000019340` |   `0.000071042` |      `$0.22681` |
| Nexus                          |      `342381` |       `0.000020623` |  `8664` | `0.000020893` |   `0.000041516` |      `$0.13254` |
| Biconomy v2                    |      `329947` |       `0.000019874` |  `9224` | `0.000022244` |   `0.000042118` |      `$0.13446` |
| Kernel v2.1                    |      `296301` |       `0.000017847` |  `9472` | `0.000022842` |   `0.000040689` |      `$0.12990` |
| Safe v1.4.1                    |      `435486` |       `0.000026231` | `11552` | `0.000027858` |   `0.000054089` |      `$0.17268` |
| Light Account v2               |      `266901` |       `0.000016076` |  `7496` | `0.000018077` |   `0.000034153` |      `$0.10904` |
| Light Account v2 (Multi-Owner) |      `292822` |       `0.000017638` |  `7484` | `0.000018048` |   `0.000035686` |      `$0.11393` |
| Light Account                  |      `310532` |       `0.000018704` |  `7800` | `0.000018810` |   `0.000037514` |      `$0.11977` |
| Coinbase Smart Wallet          |      `317904` |       `0.000019149` |  `8964` | `0.000021617` |   `0.000040765` |      `$0.13015` |
| Simple Account                 |      `297367` |       `0.000017911` |  `7568` | `0.000018250` |   `0.000036162` |      `$0.11545` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |          `$0.00065` |                  `$0.08408` |
| Modular Account                |          `$0.00067` |                  `$0.08755` |
| Nexus                          |          `$0.00067` |                  `$0.08772` |
| Biconomy v2                    |          `$0.00068` |                  `$0.09156` |
| Kernel v2.1                    |          `$0.00067` |                  `$0.08830` |
| Safe v1.4.1                    |          `$0.00071` |                  `$0.09137` |
| Light Account v2               |          `$0.00062` |                  `$0.08251` |
| Light Account v2 (Multi-Owner) |          `$0.00062` |                  `$0.08253` |
| Light Account                  |          `$0.00064` |                  `$0.08520` |
| Coinbase Smart Wallet          |          `$0.00066` |                  `$0.09018` |
| Simple Account                 |          `$0.00062` |                  `$0.08242` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `158725` |       `0.000000159` | `6956` | `0.000000044` |   `0.000000203` |      `$0.00065` |
| Modular Account                |      `165100` |       `0.000000165` | `7248` | `0.000000046` |   `0.000000211` |      `$0.00067` |
| Nexus                          |      `164351` |       `0.000000164` | `7288` | `0.000000046` |   `0.000000211` |      `$0.00067` |
| Biconomy v2                    |      `161912` |       `0.000000162` | `7848` | `0.000000050` |   `0.000000212` |      `$0.00068` |
| Kernel v2.1                    |      `163398` |       `0.000000163` | `7388` | `0.000000047` |   `0.000000210` |      `$0.00067` |
| Safe v1.4.1                    |      `176479` |       `0.000000177` | `7460` | `0.000000047` |   `0.000000224` |      `$0.00071` |
| Light Account v2               |      `151040` |       `0.000000151` | `6944` | `0.000000044` |   `0.000000195` |      `$0.00062` |
| Light Account v2 (Multi-Owner) |      `151148` |       `0.000000151` | `6944` | `0.000000044` |   `0.000000195` |      `$0.00062` |
| Light Account                  |      `152880` |       `0.000000153` | `7248` | `0.000000046` |   `0.000000199` |      `$0.00064` |
| Coinbase Smart Wallet          |      `156812` |       `0.000000157` | `7796` | `0.000000050` |   `0.000000206` |      `$0.00066` |
| Simple Account                 |      `151045` |       `0.000000151` | `6932` | `0.000000044` |   `0.000000195` |      `$0.00062` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `158725` |       `0.000009561` | `6956` | `0.000016774` |   `0.000026335` |      `$0.08408` |
| Modular Account                |      `165100` |       `0.000009945` | `7248` | `0.000017479` |   `0.000027423` |      `$0.08755` |
| Nexus                          |      `164351` |       `0.000009899` | `7288` | `0.000017575` |   `0.000027475` |      `$0.08772` |
| Biconomy v2                    |      `161912` |       `0.000009753` | `7848` | `0.000018926` |   `0.000028678` |      `$0.09156` |
| Kernel v2.1                    |      `163398` |       `0.000009842` | `7388` | `0.000017816` |   `0.000027658` |      `$0.08830` |
| Safe v1.4.1                    |      `176479` |       `0.000010630` | `7460` | `0.000017990` |   `0.000028620` |      `$0.09137` |
| Light Account v2               |      `151040` |       `0.000009098` | `6944` | `0.000016746` |   `0.000025843` |      `$0.08251` |
| Light Account v2 (Multi-Owner) |      `151148` |       `0.000009104` | `6944` | `0.000016746` |   `0.000025850` |      `$0.08253` |
| Light Account                  |      `152880` |       `0.000009209` | `7248` | `0.000017479` |   `0.000026687` |      `$0.08520` |
| Coinbase Smart Wallet          |      `156812` |       `0.000009445` | `7796` | `0.000018800` |   `0.000028246` |      `$0.09018` |
| Simple Account                 |      `151045` |       `0.000009098` | `6932` | `0.000016717` |   `0.000025815` |      `$0.08242` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |          `$0.00074` |                  `$0.09385` |
| Modular Account                |          `$0.00077` |                  `$0.09741` |
| Nexus                          |          `$0.00076` |                  `$0.09638` |
| Biconomy v2                    |          `$0.00077` |                  `$0.10143` |
| Kernel v2.1                    |          `$0.00076` |                  `$0.09813` |
| Safe v1.4.1                    |          `$0.00081` |                  `$0.10112` |
| Light Account v2               |          `$0.00071` |                  `$0.09232` |
| Light Account v2 (Multi-Owner) |          `$0.00071` |                  `$0.09234` |
| Light Account                  |          `$0.00073` |                  `$0.09492` |
| Coinbase Smart Wallet          |          `$0.00075` |                  `$0.09991` |
| Simple Account                 |          `$0.00071` |                  `$0.09234` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `182665` |       `0.000000183` | `7628` | `0.000000048` |   `0.000000231` |      `$0.00074` |
| Modular Account                |      `189487` |       `0.000000190` | `7920` | `0.000000050` |   `0.000000240` |      `$0.00077` |
| Nexus                          |      `188136` |       `0.000000188` | `7820` | `0.000000050` |   `0.000000238` |      `$0.00076` |
| Biconomy v2                    |      `185868` |       `0.000000186` | `8532` | `0.000000054` |   `0.000000240` |      `$0.00077` |
| Kernel v2.1                    |      `187609` |       `0.000000188` | `8060` | `0.000000051` |   `0.000000239` |      `$0.00076` |
| Safe v1.4.1                    |      `200732` |       `0.000000201` | `8120` | `0.000000052` |   `0.000000252` |      `$0.00081` |
| Light Account v2               |      `175186` |       `0.000000175` | `7616` | `0.000000048` |   `0.000000224` |      `$0.00071` |
| Light Account v2 (Multi-Owner) |      `175294` |       `0.000000175` | `7616` | `0.000000048` |   `0.000000224` |      `$0.00071` |
| Light Account                  |      `177013` |       `0.000000177` | `7908` | `0.000000050` |   `0.000000227` |      `$0.00073` |
| Coinbase Smart Wallet          |      `181014` |       `0.000000181` | `8456` | `0.000000054` |   `0.000000235` |      `$0.00075` |
| Simple Account                 |      `175283` |       `0.000000175` | `7616` | `0.000000048` |   `0.000000224` |      `$0.00071` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `182665` |       `0.000011003` | `7628` | `0.000018395` |   `0.000029398` |      `$0.09385` |
| Modular Account                |      `189487` |       `0.000011413` | `7920` | `0.000019099` |   `0.000030513` |      `$0.09741` |
| Nexus                          |      `188136` |       `0.000011332` | `7820` | `0.000018858` |   `0.000030190` |      `$0.09638` |
| Biconomy v2                    |      `185868` |       `0.000011196` | `8532` | `0.000020575` |   `0.000031771` |      `$0.10143` |
| Kernel v2.1                    |      `187609` |       `0.000011300` | `8060` | `0.000019437` |   `0.000030737` |      `$0.09813` |
| Safe v1.4.1                    |      `200732` |       `0.000012091` | `8120` | `0.000019582` |   `0.000031672` |      `$0.10112` |
| Light Account v2               |      `175186` |       `0.000010552` | `7616` | `0.000018366` |   `0.000028918` |      `$0.09232` |
| Light Account v2 (Multi-Owner) |      `175294` |       `0.000010559` | `7616` | `0.000018366` |   `0.000028925` |      `$0.09234` |
| Light Account                  |      `177013` |       `0.000010662` | `7908` | `0.000019070` |   `0.000029732` |      `$0.09492` |
| Coinbase Smart Wallet          |      `181014` |       `0.000010903` | `8456` | `0.000020392` |   `0.000031295` |      `$0.09991` |
| Simple Account                 |      `175283` |       `0.000010558` | `7616` | `0.000018366` |   `0.000028924` |      `$0.09234` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |          `$0.00083` |                  `$0.10825` |
| Modular Account                |          `$0.00086` |                  `$0.11173` |
| Nexus                          |          `$0.00085` |                  `$0.11060` |
| Biconomy v2                    |          `$0.00086` |                  `$0.11565` |
| Kernel v2.1                    |          `$0.00085` |                  `$0.11244` |
| Safe v1.4.1                    |          `$0.00090` |                  `$0.11554` |
| Light Account v2               |          `$0.00080` |                  `$0.10663` |
| Light Account v2 (Multi-Owner) |          `$0.00080` |                  `$0.10646` |
| Light Account                  |          `$0.00082` |                  `$0.10932` |
| Coinbase Smart Wallet          |          `$0.00084` |                  `$0.11430` |
| Simple Account                 |          `$0.00080` |                  `$0.10673` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `201790` |       `0.000000202` | `9020` | `0.000000057` |   `0.000000259` |      `$0.00083` |
| Modular Account                |      `208682` |       `0.000000209` | `9300` | `0.000000059` |   `0.000000268` |      `$0.00086` |
| Nexus                          |      `207286` |       `0.000000207` | `9188` | `0.000000058` |   `0.000000266` |      `$0.00085` |
| Biconomy v2                    |      `205018` |       `0.000000205` | `9900` | `0.000000063` |   `0.000000268` |      `$0.00086` |
| Kernel v2.1                    |      `207241` |       `0.000000207` | `9428` | `0.000000060` |   `0.000000267` |      `$0.00085` |
| Safe v1.4.1                    |      `220464` |       `0.000000221` | `9500` | `0.000000060` |   `0.000000281` |      `$0.00090` |
| Light Account v2               |      `194311` |       `0.000000194` | `8996` | `0.000000057` |   `0.000000252` |      `$0.00080` |
| Light Account v2 (Multi-Owner) |      `194407` |       `0.000000195` | `8972` | `0.000000057` |   `0.000000251` |      `$0.00080` |
| Light Account                  |      `196151` |       `0.000000196` | `9300` | `0.000000059` |   `0.000000255` |      `$0.00082` |
| Coinbase Smart Wallet          |      `200573` |       `0.000000201` | `9836` | `0.000000062` |   `0.000000263` |      `$0.00084` |
| Simple Account                 |      `194829` |       `0.000000195` | `8996` | `0.000000057` |   `0.000000252` |      `$0.00080` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `201790` |       `0.000012155` | `9020` | `0.000021752` |   `0.000033906` |      `$0.10825` |
| Modular Account                |      `208682` |       `0.000012570` | `9300` | `0.000022427` |   `0.000034997` |      `$0.11173` |
| Nexus                          |      `207286` |       `0.000012486` | `9188` | `0.000022157` |   `0.000034643` |      `$0.11060` |
| Biconomy v2                    |      `205018` |       `0.000012349` | `9900` | `0.000023874` |   `0.000036223` |      `$0.11565` |
| Kernel v2.1                    |      `207241` |       `0.000012483` | `9428` | `0.000022736` |   `0.000035219` |      `$0.11244` |
| Safe v1.4.1                    |      `220464` |       `0.000013279` | `9500` | `0.000022909` |   `0.000036189` |      `$0.11554` |
| Light Account v2               |      `194311` |       `0.000011704` | `8996` | `0.000021694` |   `0.000033398` |      `$0.10663` |
| Light Account v2 (Multi-Owner) |      `194407` |       `0.000011710` | `8972` | `0.000021636` |   `0.000033346` |      `$0.10646` |
| Light Account                  |      `196151` |       `0.000011815` | `9300` | `0.000022427` |   `0.000034242` |      `$0.10932` |
| Coinbase Smart Wallet          |      `200573` |       `0.000012081` | `9836` | `0.000023720` |   `0.000035801` |      `$0.11430` |
| Simple Account                 |      `194829` |       `0.000011735` | `8996` | `0.000021694` |   `0.000033429` |      `$0.10673` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |       `Unsupported` |               `Unsupported` |
| Modular Account                |          `$0.00140` |                  `$0.15732` |
| Nexus                          |       `Unsupported` |               `Unsupported` |
| Biconomy v2                    |          `$0.00074` |                  `$0.09934` |
| Kernel v2.1                    |          `$0.00073` |                  `$0.10153` |
| Safe v1.4.1                    |       `Unsupported` |               `Unsupported` |
| Light Account v2               |       `Unsupported` |               `Unsupported` |
| Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet          |       `Unsupported` |               `Unsupported` |
| Simple Account                 |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account v2             |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Modular Account                |      `365368` |       `0.000000366` | `11308` | `0.000000072` |   `0.000000437` |      `$0.00140` |
| Nexus                          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy v2                    |      `178212` |       `0.000000178` |  `8452` | `0.000000054` |   `0.000000232` |      `$0.00074` |
| Kernel v2.1                    |      `172136` |       `0.000000172` |  `8888` | `0.000000056` |   `0.000000229` |      `$0.00073` |
| Safe v1.4.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                 |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account v2             |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Modular Account                |      `365368` |       `0.000022007` | `11308` | `0.000027269` |   `0.000049277` |      `$0.15732` |
| Nexus                          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy v2                    |      `178212` |       `0.000010734` |  `8452` | `0.000020382` |   `0.000031116` |      `$0.09934` |
| Kernel v2.1                    |      `172136` |       `0.000010368` |  `8888` | `0.000021434` |   `0.000031802` |      `$0.10153` |
| Safe v1.4.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                 |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |       `Unsupported` |               `Unsupported` |
| Modular Account                |          `$0.00069` |                  `$0.09363` |
| Nexus                          |       `Unsupported` |               `Unsupported` |
| Biconomy v2                    |       `Unsupported` |               `Unsupported` |
| Kernel v2.1                    |          `$0.00061` |                  `$0.10013` |
| Safe v1.4.1                    |       `Unsupported` |               `Unsupported` |
| Light Account v2               |       `Unsupported` |               `Unsupported` |
| Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet          |       `Unsupported` |               `Unsupported` |
| Simple Account                 |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Modular Account                |      `163716` |       `0.000000164` | `8072` | `0.000000051` |   `0.000000215` |      `$0.00069` |
| Nexus                          |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Biconomy v2                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1                    |      `127202` |       `0.000000127` | `9828` | `0.000000062` |   `0.000000190` |      `$0.00061` |
| Safe v1.4.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet          |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account                 |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Modular Account                |      `163716` |       `0.000009861` | `8072` | `0.000019466` |   `0.000029327` |      `$0.09363` |
| Nexus                          |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Biconomy v2                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1                    |      `127202` |       `0.000007662` | `9828` | `0.000023700` |   `0.000031362` |      `$0.10013` |
| Safe v1.4.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Light Account                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet          |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account                 |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |       `Unsupported` |               `Unsupported` |
| Modular Account                |          `$0.00080` |                  `$0.10462` |
| Nexus                          |       `Unsupported` |               `Unsupported` |
| Biconomy v2                    |          `$0.00070` |                  `$0.11564` |
| Kernel v2.1                    |          `$0.00071` |                  `$0.11265` |
| Safe v1.4.1                    |       `Unsupported` |               `Unsupported` |
| Light Account v2               |       `Unsupported` |               `Unsupported` |
| Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet          |       `Unsupported` |               `Unsupported` |
| Simple Account                 |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account v2             |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Modular Account                |      `194942` |       `0.000000195` |  `8720` | `0.000000055` |   `0.000000250` |      `$0.00080` |
| Nexus                          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy v2                    |      `147023` |       `0.000000147` | `11348` | `0.000000072` |   `0.000000219` |      `$0.00070` |
| Kernel v2.1                    |      `153240` |       `0.000000153` | `10804` | `0.000000069` |   `0.000000222` |      `$0.00071` |
| Safe v1.4.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                 |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Modular Account v2             |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Modular Account                |      `194942` |       `0.000011742` |  `8720` | `0.000021028` |   `0.000032770` |      `$0.10462` |
| Nexus                          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy v2                    |      `147023` |       `0.000008856` | `11348` | `0.000027366` |   `0.000036222` |      `$0.11564` |
| Kernel v2.1                    |      `153240` |       `0.000009230` | `10804` | `0.000026054` |   `0.000035284` |      `$0.11265` |
| Safe v1.4.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet          |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                 |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |          `$0.00036` |                  `$0.03651` |
| Modular Account                |          `$0.00237` |                  `$0.15916` |
| Nexus                          |          `$0.00074` |                  `$0.06471` |
| Biconomy v2                    |          `$0.00069` |                  `$0.06215` |
| Kernel v2.1                    |          `$0.00060` |                  `$0.06136` |
| Safe v1.4.1                    |          `$0.00104` |                  `$0.10092` |
| Light Account v2               |          `$0.00051` |                  `$0.04528` |
| Light Account v2 (Multi-Owner) |          `$0.00059` |                  `$0.05033` |
| Light Account                  |          `$0.00064` |                  `$0.05343` |
| Coinbase Smart Wallet          |          `$0.00067` |                  `$0.05933` |
| Simple Account                 |          `$0.00060` |                  `$0.05176` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |       `97772` |       `0.000000098` | `2300` | `0.000000015` |   `0.000000112` |      `$0.00036` |
| Modular Account                |      `725323` |       `0.000000726` | `2556` | `0.000000016` |   `0.000000742` |      `$0.00237` |
| Nexus                          |      `210309` |       `0.000000210` | `3152` | `0.000000020` |   `0.000000230` |      `$0.00074` |
| Biconomy v2                    |      `197473` |       `0.000000198` | `3140` | `0.000000020` |   `0.000000218` |      `$0.00069` |
| Kernel v2.1                    |      `163890` |       `0.000000164` | `3876` | `0.000000025` |   `0.000000189` |      `$0.00060` |
| Safe v1.4.1                    |      `289207` |       `0.000000289` | `5884` | `0.000000037` |   `0.000000327` |      `$0.00104` |
| Light Account v2               |      `143842` |       `0.000000144` | `2288` | `0.000000015` |   `0.000000158` |      `$0.00051` |
| Light Account v2 (Multi-Owner) |      `169655` |       `0.000000170` | `2300` | `0.000000015` |   `0.000000184` |      `$0.00059` |
| Light Account                  |      `185267` |       `0.000000185` | `2312` | `0.000000015` |   `0.000000200` |      `$0.00064` |
| Coinbase Smart Wallet          |      `190525` |       `0.000000191` | `2948` | `0.000000019` |   `0.000000209` |      `$0.00067` |
| Simple Account                 |      `174219` |       `0.000000174` | `2372` | `0.000000015` |   `0.000000189` |      `$0.00060` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |       `97772` |       `0.000005889` | `2300` | `0.000005546` |   `0.000011436` |      `$0.03651` |
| Modular Account                |      `725323` |       `0.000043689` | `2556` | `0.000006164` |   `0.000049853` |      `$0.15916` |
| Nexus                          |      `210309` |       `0.000012668` | `3152` | `0.000007601` |   `0.000020269` |      `$0.06471` |
| Biconomy v2                    |      `197473` |       `0.000011895` | `3140` | `0.000007572` |   `0.000019467` |      `$0.06215` |
| Kernel v2.1                    |      `163890` |       `0.000009872` | `3876` | `0.000009347` |   `0.000019219` |      `$0.06136` |
| Safe v1.4.1                    |      `289207` |       `0.000017420` | `5884` | `0.000014189` |   `0.000031609` |      `$0.10092` |
| Light Account v2               |      `143842` |       `0.000008664` | `2288` | `0.000005518` |   `0.000014182` |      `$0.04528` |
| Light Account v2 (Multi-Owner) |      `169655` |       `0.000010219` | `2300` | `0.000005546` |   `0.000015765` |      `$0.05033` |
| Light Account                  |      `185267` |       `0.000011159` | `2312` | `0.000005575` |   `0.000016735` |      `$0.05343` |
| Coinbase Smart Wallet          |      `190525` |       `0.000011476` | `2948` | `0.000007109` |   `0.000018585` |      `$0.05933` |
| Simple Account                 |      `174219` |       `0.000010494` | `2372` | `0.000005720` |   `0.000016214` |      `$0.05176` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |          `$0.00021` |                  `$0.03031` |
| Modular Account                |          `$0.00022` |                  `$0.03057` |
| Nexus                          |          `$0.00018` |                  `$0.02962` |
| Biconomy v2                    |       `Unsupported` |               `Unsupported` |
| Kernel v2.1                    |          `$0.00020` |                  `$0.03071` |
| Safe v1.4.1                    |          `$0.00034` |                  `$0.05283` |
| Light Account v2               |          `$0.00018` |                  `$0.02845` |
| Light Account v2 (Multi-Owner) |          `$0.00018` |                  `$0.02847` |
| Light Account                  |          `$0.00018` |                  `$0.02836` |
| Coinbase Smart Wallet          |          `$0.00018` |                  `$0.02851` |
| Simple Account                 |          `$0.00018` |                  `$0.02845` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |       `49021` |       `0.000000049` | `2712` | `0.000000017` |   `0.000000066` |      `$0.00021` |
| Modular Account                |       `50408` |       `0.000000050` | `2712` | `0.000000017` |   `0.000000068` |      `$0.00022` |
| Nexus                          |       `39685` |       `0.000000040` | `2856` | `0.000000018` |   `0.000000058` |      `$0.00018` |
| Biconomy v2                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1                    |       `45364` |       `0.000000045` | `2856` | `0.000000018` |   `0.000000064` |      `$0.00020` |
| Safe v1.4.1                    |       `75840` |       `0.000000076` | `4968` | `0.000000032` |   `0.000000107` |      `$0.00034` |
| Light Account v2               |       `39368` |       `0.000000039` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Light Account v2 (Multi-Owner) |       `39463` |       `0.000000039` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Light Account                  |       `39396` |       `0.000000039` | `2700` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Coinbase Smart Wallet          |       `39681` |       `0.000000040` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Simple Account                 |       `39381` |       `0.000000039` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |       `49021` |       `0.000002953` | `2712` | `0.000006540` |   `0.000009493` |      `$0.03031` |
| Modular Account                |       `50408` |       `0.000003036` | `2712` | `0.000006540` |   `0.000009576` |      `$0.03057` |
| Nexus                          |       `39685` |       `0.000002390` | `2856` | `0.000006887` |   `0.000009278` |      `$0.02962` |
| Biconomy v2                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1                    |       `45364` |       `0.000002732` | `2856` | `0.000006887` |   `0.000009620` |      `$0.03071` |
| Safe v1.4.1                    |       `75840` |       `0.000004568` | `4968` | `0.000011980` |   `0.000016549` |      `$0.05283` |
| Light Account v2               |       `39368` |       `0.000002371` | `2712` | `0.000006540` |   `0.000008911` |      `$0.02845` |
| Light Account v2 (Multi-Owner) |       `39463` |       `0.000002377` | `2712` | `0.000006540` |   `0.000008917` |      `$0.02847` |
| Light Account                  |       `39396` |       `0.000002373` | `2700` | `0.000006511` |   `0.000008884` |      `$0.02836` |
| Coinbase Smart Wallet          |       `39681` |       `0.000002390` | `2712` | `0.000006540` |   `0.000008930` |      `$0.02851` |
| Simple Account                 |       `39381` |       `0.000002372` | `2712` | `0.000006540` |   `0.000008912` |      `$0.02845` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |          `$0.00030` |                  `$0.04002` |
| Modular Account                |          `$0.00031` |                  `$0.04045` |
| Nexus                          |          `$0.00027` |                  `$0.03818` |
| Biconomy v2                    |       `Unsupported` |               `Unsupported` |
| Kernel v2.1                    |          `$0.00029` |                  `$0.04051` |
| Safe v1.4.1                    |          `$0.00043` |                  `$0.06260` |
| Light Account v2               |          `$0.00027` |                  `$0.03828` |
| Light Account v2 (Multi-Owner) |          `$0.00027` |                  `$0.03830` |
| Light Account                  |          `$0.00027` |                  `$0.03819` |
| Coinbase Smart Wallet          |          `$0.00027` |                  `$0.03835` |
| Simple Account                 |          `$0.00027` |                  `$0.03830` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |       `72946` |       `0.000000073` | `3376` | `0.000000021` |   `0.000000094` |      `$0.00030` |
| Modular Account                |       `74693` |       `0.000000075` | `3388` | `0.000000022` |   `0.000000096` |      `$0.00031` |
| Nexus                          |       `63384` |       `0.000000063` | `3376` | `0.000000021` |   `0.000000085` |      `$0.00027` |
| Biconomy v2                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1                    |       `69230` |       `0.000000069` | `3532` | `0.000000022` |   `0.000000092` |      `$0.00029` |
| Safe v1.4.1                    |       `99715` |       `0.000000100` | `5640` | `0.000000036` |   `0.000000136` |      `$0.00043` |
| Light Account v2               |       `63410` |       `0.000000063` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |
| Light Account v2 (Multi-Owner) |       `63505` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |
| Light Account                  |       `63438` |       `0.000000063` | `3376` | `0.000000021` |   `0.000000085` |      `$0.00027` |
| Coinbase Smart Wallet          |       `63803` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |
| Simple Account                 |       `63503` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |       `72946` |       `0.000004394` | `3376` | `0.000008141` |   `0.000012535` |      `$0.04002` |
| Modular Account                |       `74693` |       `0.000004499` | `3388` | `0.000008170` |   `0.000012669` |      `$0.04045` |
| Nexus                          |       `63384` |       `0.000003818` | `3376` | `0.000008141` |   `0.000011959` |      `$0.03818` |
| Biconomy v2                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1                    |       `69230` |       `0.000004170` | `3532` | `0.000008517` |   `0.000012687` |      `$0.04051` |
| Safe v1.4.1                    |       `99715` |       `0.000006006` | `5640` | `0.000013601` |   `0.000019607` |      `$0.06260` |
| Light Account v2               |       `63410` |       `0.000003819` | `3388` | `0.000008170` |   `0.000011990` |      `$0.03828` |
| Light Account v2 (Multi-Owner) |       `63505` |       `0.000003825` | `3388` | `0.000008170` |   `0.000011995` |      `$0.03830` |
| Light Account                  |       `63438` |       `0.000003821` | `3376` | `0.000008141` |   `0.000011962` |      `$0.03819` |
| Coinbase Smart Wallet          |       `63803` |       `0.000003843` | `3388` | `0.000008170` |   `0.000012013` |      `$0.03835` |
| Simple Account                 |       `63503` |       `0.000003825` | `3388` | `0.000008170` |   `0.000011995` |      `$0.03830` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :----------------------------- | ------------------: | --------------------------: |
| Modular Account v2             |          `$0.00056` |                  `$0.06471` |
| Modular Account                |          `$0.00057` |                  `$0.06507` |
| Nexus                          |          `$0.00053` |                  `$0.06279` |
| Biconomy v2                    |       `Unsupported` |               `Unsupported` |
| Kernel v2.1                    |          `$0.00055` |                  `$0.06499` |
| Safe v1.4.1                    |          `$0.00064` |                  `$0.08371` |
| Light Account v2               |          `$0.00053` |                  `$0.06279` |
| Light Account v2 (Multi-Owner) |          `$0.00053` |                  `$0.06281` |
| Light Account                  |          `$0.00053` |                  `$0.06280` |
| Coinbase Smart Wallet          |          `$0.00053` |                  `$0.06304` |
| Simple Account                 |          `$0.00053` |                  `$0.06298` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `145956` |       `0.000000146` | `4760` | `0.000000030` |   `0.000000176` |      `$0.00056` |
| Modular Account                |      `147781` |       `0.000000148` | `4760` | `0.000000030` |   `0.000000178` |      `$0.00057` |
| Nexus                          |      `136403` |       `0.000000136` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Biconomy v2                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1                    |      `142287` |       `0.000000142` | `4888` | `0.000000031` |   `0.000000173` |      `$0.00055` |
| Safe v1.4.1                    |      `155690` |       `0.000000156` | `6984` | `0.000000044` |   `0.000000200` |      `$0.00064` |
| Light Account v2               |      `136429` |       `0.000000137` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Light Account v2 (Multi-Owner) |      `136524` |       `0.000000137` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Light Account                  |      `136457` |       `0.000000137` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Coinbase Smart Wallet          |      `137243` |       `0.000000137` | `4760` | `0.000000030` |   `0.000000168` |      `$0.00053` |
| Simple Account                 |      `136943` |       `0.000000137` | `4760` | `0.000000030` |   `0.000000167` |      `$0.00053` |

##### 2024-03-31 (high blob fees)

|                                | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :----------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Modular Account v2             |      `145956` |       `0.000008791` | `4760` | `0.000011479` |   `0.000020270` |      `$0.06471` |
| Modular Account                |      `147781` |       `0.000008901` | `4760` | `0.000011479` |   `0.000020380` |      `$0.06507` |
| Nexus                          |      `136403` |       `0.000008216` | `4748` | `0.000011450` |   `0.000019666` |      `$0.06279` |
| Biconomy v2                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Kernel v2.1                    |      `142287` |       `0.000008570` | `4888` | `0.000011787` |   `0.000020358` |      `$0.06499` |
| Safe v1.4.1                    |      `155690` |       `0.000009378` | `6984` | `0.000016842` |   `0.000026220` |      `$0.08371` |
| Light Account v2               |      `136429` |       `0.000008218` | `4748` | `0.000011450` |   `0.000019667` |      `$0.06279` |
| Light Account v2 (Multi-Owner) |      `136524` |       `0.000008223` | `4748` | `0.000011450` |   `0.000019673` |      `$0.06281` |
| Light Account                  |      `136457` |       `0.000008219` | `4748` | `0.000011450` |   `0.000019669` |      `$0.06280` |
| Coinbase Smart Wallet          |      `137243` |       `0.000008267` | `4760` | `0.000011479` |   `0.000019745` |      `$0.06304` |
| Simple Account                 |      `136943` |       `0.000008249` | `4760` | `0.000011479` |   `0.000019727` |      `$0.06298` |

</details>

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
