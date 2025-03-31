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

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00090` |                                  `$0.10261` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00127` |                                  `$0.13254` |                      `141.59%` |                              `129.17%` |
| ZeroDev Kernel v3.1                    |                     `$0.00129` |                                  `$0.14290` |                      `143.44%` |                              `139.26%` |
| Safe v1.4.1                            |                     `$0.00163` |                                  `$0.17268` |                      `181.29%` |                              `168.29%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00109` |                                  `$0.11393` |                      `121.26%` |                              `111.03%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00120` |                                  `$0.13015` |                      `133.54%` |                              `126.84%` |
| Simple Account (non-modular)           |                     `$0.00110` |                                  `$0.11545` |                      `123.07%` |                              `112.51%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000000233` |  `7508` | `0.000000048` |   `0.000000281` |      `$0.00090` |
| Biconomy Nexus                         |      `342381` |       `0.000000343` |  `8664` | `0.000000055` |   `0.000000398` |      `$0.00127` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000000339` | `10108` | `0.000000064` |   `0.000000403` |      `$0.00129` |
| Safe v1.4.1                            |      `435486` |       `0.000000436` | `11552` | `0.000000073` |   `0.000000509` |      `$0.00163` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.000000293` |  `7484` | `0.000000048` |   `0.000000341` |      `$0.00109` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.000000318` |  `8964` | `0.000000057` |   `0.000000375` |      `$0.00120` |
| Simple Account (non-modular)           |      `297367` |       `0.000000298` |  `7568` | `0.000000048` |   `0.000000346` |      `$0.00110` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000014035` |  `7508` | `0.000018106` |   `0.000032140` |      `$0.10261` |
| Biconomy Nexus                         |      `342381` |       `0.000020623` |  `8664` | `0.000020893` |   `0.000041516` |      `$0.13254` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000020384` | `10108` | `0.000024376` |   `0.000044760` |      `$0.14290` |
| Safe v1.4.1                            |      `435486` |       `0.000026231` | `11552` | `0.000027858` |   `0.000054089` |      `$0.17268` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.000017638` |  `7484` | `0.000018048` |   `0.000035686` |      `$0.11393` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.000019149` |  `8964` | `0.000021617` |   `0.000040765` |      `$0.13015` |
| Simple Account (non-modular)           |      `297367` |       `0.000017911` |  `7568` | `0.000018250` |   `0.000036162` |      `$0.11545` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00065` |                                  `$0.08408` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00067` |                                  `$0.08772` |                      `103.81%` |                              `104.33%` |
| ZeroDev Kernel v3.1                    |                     `$0.00076` |                                  `$0.09319` |                      `117.05%` |                              `110.84%` |
| Safe v1.4.1                            |                     `$0.00071` |                                  `$0.09137` |                      `110.33%` |                              `108.68%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00062` |                                  `$0.08253` |                       `96.23%` |                               `98.16%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00066` |                                  `$0.09018` |                      `101.69%` |                              `107.25%` |
| Simple Account (non-modular)           |                     `$0.00062` |                                  `$0.08242` |                       `96.14%` |                               `98.02%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000000159` | `6956` | `0.000000044` |   `0.000000203` |      `$0.00065` |
| Biconomy Nexus                         |      `164351` |       `0.000000164` | `7288` | `0.000000046` |   `0.000000211` |      `$0.00067` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000000191` | `7336` | `0.000000047` |   `0.000000238` |      `$0.00076` |
| Safe v1.4.1                            |      `176479` |       `0.000000177` | `7460` | `0.000000047` |   `0.000000224` |      `$0.00071` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.000000151` | `6944` | `0.000000044` |   `0.000000195` |      `$0.00062` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.000000157` | `7796` | `0.000000050` |   `0.000000206` |      `$0.00066` |
| Simple Account (non-modular)           |      `151045` |       `0.000000151` | `6932` | `0.000000044` |   `0.000000195` |      `$0.00062` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000009561` | `6956` | `0.000016774` |   `0.000026335` |      `$0.08408` |
| Biconomy Nexus                         |      `164351` |       `0.000009899` | `7288` | `0.000017575` |   `0.000027475` |      `$0.08772` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000011499` | `7336` | `0.000017691` |   `0.000029190` |      `$0.09319` |
| Safe v1.4.1                            |      `176479` |       `0.000010630` | `7460` | `0.000017990` |   `0.000028620` |      `$0.09137` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.000009104` | `6944` | `0.000016746` |   `0.000025850` |      `$0.08253` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.000009445` | `7796` | `0.000018800` |   `0.000028246` |      `$0.09018` |
| Simple Account (non-modular)           |      `151045` |       `0.000009098` | `6932` | `0.000016717` |   `0.000025815` |      `$0.08242` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00074` |                                  `$0.09385` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00076` |                                  `$0.09638` |                      `102.89%` |                              `102.70%` |
| ZeroDev Kernel v3.1                    |                     `$0.00085` |                                  `$0.10179` |                      `114.54%` |                              `108.46%` |
| Safe v1.4.1                            |                     `$0.00081` |                                  `$0.10112` |                      `109.17%` |                              `107.74%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00071` |                                  `$0.09234` |                       `96.78%` |                               `98.39%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00075` |                                  `$0.09991` |                      `101.56%` |                              `106.45%` |
| Simple Account (non-modular)           |                     `$0.00071` |                                  `$0.09234` |                       `96.77%` |                               `98.39%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000000183` | `7628` | `0.000000048` |   `0.000000231` |      `$0.00074` |
| Biconomy Nexus                         |      `188136` |       `0.000000188` | `7820` | `0.000000050` |   `0.000000238` |      `$0.00076` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000000215` | `7856` | `0.000000050` |   `0.000000265` |      `$0.00085` |
| Safe v1.4.1                            |      `200732` |       `0.000000201` | `8120` | `0.000000052` |   `0.000000252` |      `$0.00081` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.000000175` | `7616` | `0.000000048` |   `0.000000224` |      `$0.00071` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.000000181` | `8456` | `0.000000054` |   `0.000000235` |      `$0.00075` |
| Simple Account (non-modular)           |      `175283` |       `0.000000175` | `7616` | `0.000000048` |   `0.000000224` |      `$0.00071` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000011003` | `7628` | `0.000018395` |   `0.000029398` |      `$0.09385` |
| Biconomy Nexus                         |      `188136` |       `0.000011332` | `7820` | `0.000018858` |   `0.000030190` |      `$0.09638` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000012939` | `7856` | `0.000018945` |   `0.000031884` |      `$0.10179` |
| Safe v1.4.1                            |      `200732` |       `0.000012091` | `8120` | `0.000019582` |   `0.000031672` |      `$0.10112` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.000010559` | `7616` | `0.000018366` |   `0.000028925` |      `$0.09234` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.000010903` | `8456` | `0.000020392` |   `0.000031295` |      `$0.09991` |
| Simple Account (non-modular)           |      `175283` |       `0.000010558` | `7616` | `0.000018366` |   `0.000028924` |      `$0.09234` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00083` |                                  `$0.10825` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00085` |                                  `$0.11060` |                      `102.53%` |                              `102.17%` |
| ZeroDev Kernel v3.1                    |                     `$0.00094` |                                  `$0.11599` |                      `113.05%` |                              `107.15%` |
| Safe v1.4.1                            |                     `$0.00090` |                                  `$0.11554` |                      `108.38%` |                              `106.73%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00080` |                                  `$0.10646` |                       `97.03%` |                               `98.35%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00084` |                                  `$0.11430` |                      `101.53%` |                              `105.59%` |
| Simple Account (non-modular)           |                     `$0.00080` |                                  `$0.10673` |                       `97.25%` |                               `98.59%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000000202` | `9020` | `0.000000057` |   `0.000000259` |      `$0.00083` |
| Biconomy Nexus                         |      `207286` |       `0.000000207` | `9188` | `0.000000058` |   `0.000000266` |      `$0.00085` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000000235` | `9212` | `0.000000059` |   `0.000000293` |      `$0.00094` |
| Safe v1.4.1                            |      `220464` |       `0.000000221` | `9500` | `0.000000060` |   `0.000000281` |      `$0.00090` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.000000195` | `8972` | `0.000000057` |   `0.000000251` |      `$0.00080` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.000000201` | `9836` | `0.000000062` |   `0.000000263` |      `$0.00084` |
| Simple Account (non-modular)           |      `194829` |       `0.000000195` | `8996` | `0.000000057` |   `0.000000252` |      `$0.00080` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000012155` | `9020` | `0.000021752` |   `0.000033906` |      `$0.10825` |
| Biconomy Nexus                         |      `207286` |       `0.000012486` | `9188` | `0.000022157` |   `0.000034643` |      `$0.11060` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000014117` | `9212` | `0.000022215` |   `0.000036332` |      `$0.11599` |
| Safe v1.4.1                            |      `220464` |       `0.000013279` | `9500` | `0.000022909` |   `0.000036189` |      `$0.11554` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.000011710` | `8972` | `0.000021636` |   `0.000033346` |      `$0.10646` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.000012081` | `9836` | `0.000023720` |   `0.000035801` |      `$0.11430` |
| Simple Account (non-modular)           |      `194829` |       `0.000011735` | `8996` | `0.000021694` |   `0.000033429` |      `$0.10673` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00186` |                                  `$0.20104` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                               `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000000495` | `13748` | `0.000000087` |   `0.000000583` |      `$0.00186` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000029818` | `13748` | `0.000033154` |   `0.000062972` |      `$0.20104` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00069` |                                  `$0.08719` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                               `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000000172` | `7028` | `0.000000045` |   `0.000000217` |      `$0.00069` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000010362` | `7028` | `0.000016948` |   `0.000027310` |      `$0.08719` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00079` |                                  `$0.09722` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                               `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000000197` | `7700` | `0.000000049` |   `0.000000246` |      `$0.00079` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000011884` | `7700` | `0.000018569` |   `0.000030452` |      `$0.09722` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00036` |                                  `$0.03651` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00074` |                                  `$0.06471` |                      `204.96%` |                              `177.24%` |
| ZeroDev Kernel v3.1                    |                     `$0.00067` |                                  `$0.06984` |                      `186.38%` |                              `191.30%` |
| Safe v1.4.1                            |                     `$0.00104` |                                  `$0.10092` |                      `290.60%` |                              `276.41%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00059` |                                  `$0.05033` |                      `163.97%` |                              `137.86%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00067` |                                  `$0.05933` |                      `186.20%` |                              `162.52%` |
| Simple Account (non-modular)           |                     `$0.00060` |                                  `$0.05176` |                      `168.44%` |                              `141.78%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000000098` | `2300` | `0.000000015` |   `0.000000112` |      `$0.00036` |
| Biconomy Nexus                         |      `210309` |       `0.000000210` | `3152` | `0.000000020` |   `0.000000230` |      `$0.00074` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000000181` | `4564` | `0.000000029` |   `0.000000210` |      `$0.00067` |
| Safe v1.4.1                            |      `289207` |       `0.000000289` | `5884` | `0.000000037` |   `0.000000327` |      `$0.00104` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.000000170` | `2300` | `0.000000015` |   `0.000000184` |      `$0.00059` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.000000191` | `2948` | `0.000000019` |   `0.000000209` |      `$0.00067` |
| Simple Account (non-modular)           |      `174219` |       `0.000000174` | `2372` | `0.000000015` |   `0.000000189` |      `$0.00060` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000005889` | `2300` | `0.000005546` |   `0.000011436` |      `$0.03651` |
| Biconomy Nexus                         |      `210309` |       `0.000012668` | `3152` | `0.000007601` |   `0.000020269` |      `$0.06471` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000010870` | `4564` | `0.000011006` |   `0.000021876` |      `$0.06984` |
| Safe v1.4.1                            |      `289207` |       `0.000017420` | `5884` | `0.000014189` |   `0.000031609` |      `$0.10092` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.000010219` | `2300` | `0.000005546` |   `0.000015765` |      `$0.05033` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.000011476` | `2948` | `0.000007109` |   `0.000018585` |      `$0.05933` |
| Simple Account (non-modular)           |      `174219` |       `0.000010494` | `2372` | `0.000005720` |   `0.000016214` |      `$0.05176` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00021` |                                  `$0.03031` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00018` |                                  `$0.02962` |                       `87.28%` |                               `97.73%` |
| ZeroDev Kernel v3.1                    |                     `$0.00021` |                                  `$0.03143` |                      `100.88%` |                              `103.71%` |
| Safe v1.4.1                            |                     `$0.00034` |                                  `$0.05283` |                      `162.11%` |                              `174.33%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00018` |                                  `$0.02847` |                       `85.57%` |                               `93.94%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00018` |                                  `$0.02851` |                       `85.90%` |                               `94.07%` |
| Simple Account (non-modular)           |                     `$0.00018` |                                  `$0.02845` |                       `85.45%` |                               `93.88%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000049` | `2712` | `0.000000017` |   `0.000000066` |      `$0.00021` |
| Biconomy Nexus                         |       `39685` |       `0.000000040` | `2856` | `0.000000018` |   `0.000000058` |      `$0.00018` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000049` | `2868` | `0.000000018` |   `0.000000067` |      `$0.00021` |
| Safe v1.4.1                            |       `75840` |       `0.000000076` | `4968` | `0.000000032` |   `0.000000107` |      `$0.00034` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.000000039` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.000000040` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Simple Account (non-modular)           |       `39381` |       `0.000000039` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000002953` | `2712` | `0.000006540` |   `0.000009493` |      `$0.03031` |
| Biconomy Nexus                         |       `39685` |       `0.000002390` | `2856` | `0.000006887` |   `0.000009278` |      `$0.02962` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000002928` | `2868` | `0.000006916` |   `0.000009844` |      `$0.03143` |
| Safe v1.4.1                            |       `75840` |       `0.000004568` | `4968` | `0.000011980` |   `0.000016549` |      `$0.05283` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.000002377` | `2712` | `0.000006540` |   `0.000008917` |      `$0.02847` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.000002390` | `2712` | `0.000006540` |   `0.000008930` |      `$0.02851` |
| Simple Account (non-modular)           |       `39381` |       `0.000002372` | `2712` | `0.000006540` |   `0.000008912` |      `$0.02845` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00030` |                                  `$0.04002` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00027` |                                  `$0.03818` |                       `89.87%` |                               `95.41%` |
| ZeroDev Kernel v3.1                    |                     `$0.00030` |                                  `$0.03990` |                       `99.33%` |                               `99.70%` |
| Safe v1.4.1                            |                     `$0.00043` |                                  `$0.06260` |                      `143.59%` |                              `156.42%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00027` |                                  `$0.03830` |                       `90.08%` |                               `95.69%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00027` |                                  `$0.03835` |                       `90.39%` |                               `95.84%` |
| Simple Account (non-modular)           |                     `$0.00027` |                                  `$0.03830` |                       `90.07%` |                               `95.69%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000000073` | `3376` | `0.000000021` |   `0.000000094` |      `$0.00030` |
| Biconomy Nexus                         |       `63384` |       `0.000000063` | `3376` | `0.000000021` |   `0.000000085` |      `$0.00027` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000000072` | `3376` | `0.000000021` |   `0.000000094` |      `$0.00030` |
| Safe v1.4.1                            |       `99715` |       `0.000000100` | `5640` | `0.000000036` |   `0.000000136` |      `$0.00043` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |
| Simple Account (non-modular)           |       `63503` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000004394` | `3376` | `0.000008141` |   `0.000012535` |      `$0.04002` |
| Biconomy Nexus                         |       `63384` |       `0.000003818` | `3376` | `0.000008141` |   `0.000011959` |      `$0.03818` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000004356` | `3376` | `0.000008141` |   `0.000012497` |      `$0.03990` |
| Safe v1.4.1                            |       `99715` |       `0.000006006` | `5640` | `0.000013601` |   `0.000019607` |      `$0.06260` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.000003825` | `3388` | `0.000008170` |   `0.000011995` |      `$0.03830` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.000003843` | `3388` | `0.000008170` |   `0.000012013` |      `$0.03835` |
| Simple Account (non-modular)           |       `63503` |       `0.000003825` | `3388` | `0.000008170` |   `0.000011995` |      `$0.03830` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00056` |                                  `$0.06471` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00053` |                                  `$0.06279` |                       `94.53%` |                               `97.02%` |
| ZeroDev Kernel v3.1                    |                     `$0.00056` |                                  `$0.06460` |                       `99.66%` |                               `99.82%` |
| Safe v1.4.1                            |                     `$0.00064` |                                  `$0.08371` |                      `113.54%` |                              `129.35%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00053` |                                  `$0.06281` |                       `94.60%` |                               `97.05%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00053` |                                  `$0.06304` |                       `95.05%` |                               `97.41%` |
| Simple Account (non-modular)           |                     `$0.00053` |                                  `$0.06298` |                       `94.88%` |                               `97.32%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000000146` | `4760` | `0.000000030` |   `0.000000176` |      `$0.00056` |
| Biconomy Nexus                         |      `136403` |       `0.000000136` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000000145` | `4760` | `0.000000030` |   `0.000000176` |      `$0.00056` |
| Safe v1.4.1                            |      `155690` |       `0.000000156` | `6984` | `0.000000044` |   `0.000000200` |      `$0.00064` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.000000137` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.000000137` | `4760` | `0.000000030` |   `0.000000168` |      `$0.00053` |
| Simple Account (non-modular)           |      `136943` |       `0.000000137` | `4760` | `0.000000030` |   `0.000000167` |      `$0.00053` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000008791` | `4760` | `0.000011479` |   `0.000020270` |      `$0.06471` |
| Biconomy Nexus                         |      `136403` |       `0.000008216` | `4748` | `0.000011450` |   `0.000019666` |      `$0.06279` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000008755` | `4760` | `0.000011479` |   `0.000020234` |      `$0.06460` |
| Safe v1.4.1                            |      `155690` |       `0.000009378` | `6984` | `0.000016842` |   `0.000026220` |      `$0.08371` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.000008223` | `4748` | `0.000011450` |   `0.000019673` |      `$0.06281` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.000008267` | `4760` | `0.000011479` |   `0.000019745` |      `$0.06304` |
| Simple Account (non-modular)           |      `136943` |       `0.000008249` | `4760` | `0.000011479` |   `0.000019727` |      `$0.06298` |

</details>

<!-- /BENCHMARK_RESULTS -->
