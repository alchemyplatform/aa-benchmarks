#### ⛽️ Benchmarks for other networks

[Ethereum Mainnet](/benchmarks/ethereum.md) | [Arbitrum Mainnet](/benchmarks/arbitrum.md) | [Polygon Mainnet](/benchmarks/polygon.md) | [Optimism Mainnet](/benchmarks/optimism.md) | [Base Mainnet](/benchmarks/base.md) | **Zora Mainnet**

---

<!-- BENCHMARK_RESULTS -->

### Zora Mainnet

#### Run parameters

| Parameter            | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------- | ------------------: | --------------------------: |
| Gas price (gwei)     |       `0.001000252` |               `0.000105252` |
| L1 base fee (gwei)   |       `1.254060963` |                     `24.05` |
| L1 base fee scalar   |            `100000` |                     `20000` |
| Blob base fee (wei)  |           `7152185` |               `46930000000` |
| Blob base fee scalar |            `611590` |                    `633664` |
| ETH price (USD)      |          `$3192.59` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00376` |                                  `$0.05616` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00457` |                                  `$0.06483` |                      `121.65%` |                              `115.44%` |
| ZeroDev Kernel v3.1                    |                     `$0.00514` |                                  `$0.07561` |                      `136.73%` |                              `134.64%` |
| Safe v1.4.1                            |                     `$0.00603` |                                  `$0.08643` |                      `160.41%` |                              `153.91%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00394` |                                  `$0.05600` |                      `104.83%` |                               `99.72%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00461` |                                  `$0.06706` |                      `122.77%` |                              `119.42%` |
| Simple Account (non-modular)           |                     `$0.00399` |                                  `$0.05663` |                      `106.11%` |                              `100.84%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000000233` |  `7508` | `0.000000944` |   `0.000001177` |      `$0.00376` |
| Biconomy Nexus                         |      `342381` |       `0.000000342` |  `8664` | `0.000001089` |   `0.000001431` |      `$0.00457` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000000339` | `10108` | `0.000001270` |   `0.000001609` |      `$0.00514` |
| Safe v1.4.1                            |      `435486` |       `0.000000436` | `11552` | `0.000001452` |   `0.000001887` |      `$0.00603` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.000000293` |  `7484` | `0.000000941` |   `0.000001233` |      `$0.00394` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.000000318` |  `8964` | `0.000001127` |   `0.000001445` |      `$0.00461` |
| Simple Account (non-modular)           |      `297367` |       `0.000000297` |  `7568` | `0.000000951` |   `0.000001249` |      `$0.00399` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000000025` |  `7508` | `0.000017566` |   `0.000017590` |      `$0.05616` |
| Biconomy Nexus                         |      `342381` |       `0.000000036` |  `8664` | `0.000020270` |   `0.000020306` |      `$0.06483` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000000036` | `10108` | `0.000023649` |   `0.000023684` |      `$0.07561` |
| Safe v1.4.1                            |      `435486` |       `0.000000046` | `11552` | `0.000027027` |   `0.000027073` |      `$0.08643` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.000000031` |  `7484` | `0.000017510` |   `0.000017541` |      `$0.05600` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.000000033` |  `8964` | `0.000020972` |   `0.000021006` |      `$0.06706` |
| Simple Account (non-modular)           |      `297367` |       `0.000000031` |  `7568` | `0.000017706` |   `0.000017738` |      `$0.05663` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00330` |                                  `$0.05201` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00345` |                                  `$0.05449` |                      `104.58%` |                              `104.77%` |
| ZeroDev Kernel v3.1                    |                     `$0.00355` |                                  `$0.05486` |                      `107.74%` |                              `105.48%` |
| Safe v1.4.1                            |                     `$0.00356` |                                  `$0.05578` |                      `107.85%` |                              `107.25%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00327` |                                  `$0.05192` |                       `99.12%` |                               `99.82%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00363` |                                  `$0.05828` |                      `110.03%` |                              `112.06%` |
| Simple Account (non-modular)           |                     `$0.00326` |                                  `$0.05183` |                       `98.96%` |                               `99.65%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000000159` | `6956` | `0.000000874` |   `0.000001033` |      `$0.00330` |
| Biconomy Nexus                         |      `164351` |       `0.000000164` | `7288` | `0.000000916` |   `0.000001080` |      `$0.00345` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000000191` | `7336` | `0.000000922` |   `0.000001113` |      `$0.00355` |
| Safe v1.4.1                            |      `176479` |       `0.000000177` | `7460` | `0.000000938` |   `0.000001114` |      `$0.00356` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.000000151` | `6944` | `0.000000873` |   `0.000001024` |      `$0.00327` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.000000157` | `7796` | `0.000000980` |   `0.000001137` |      `$0.00363` |
| Simple Account (non-modular)           |      `151045` |       `0.000000151` | `6932` | `0.000000871` |   `0.000001022` |      `$0.00326` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000000017` | `6956` | `0.000016274` |   `0.000016291` |      `$0.05201` |
| Biconomy Nexus                         |      `164351` |       `0.000000017` | `7288` | `0.000017051` |   `0.000017068` |      `$0.05449` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000000020` | `7336` | `0.000017163` |   `0.000017184` |      `$0.05486` |
| Safe v1.4.1                            |      `176479` |       `0.000000019` | `7460` | `0.000017454` |   `0.000017472` |      `$0.05578` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.000000016` | `6944` | `0.000016246` |   `0.000016262` |      `$0.05192` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.000000017` | `7796` | `0.000018240` |   `0.000018256` |      `$0.05828` |
| Simple Account (non-modular)           |      `151045` |       `0.000000016` | `6932` | `0.000016218` |   `0.000016234` |      `$0.05183` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00364` |                                  `$0.05704` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00374` |                                  `$0.05847` |                      `102.59%` |                              `102.52%` |
| ZeroDev Kernel v3.1                    |                     `$0.00384` |                                  `$0.05875` |                      `105.33%` |                              `103.00%` |
| Safe v1.4.1                            |                     `$0.00390` |                                  `$0.06072` |                      `107.00%` |                              `106.45%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00362` |                                  `$0.05695` |                       `99.22%` |                               `99.84%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00397` |                                  `$0.06322` |                      `108.97%` |                              `110.84%` |
| Simple Account (non-modular)           |                     `$0.00362` |                                  `$0.05695` |                       `99.22%` |                               `99.84%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000000183` | `7628` | `0.000000959` |   `0.000001141` |      `$0.00364` |
| Biconomy Nexus                         |      `188136` |       `0.000000188` | `7820` | `0.000000983` |   `0.000001171` |      `$0.00374` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000000215` | `7856` | `0.000000987` |   `0.000001202` |      `$0.00384` |
| Safe v1.4.1                            |      `200732` |       `0.000000201` | `8120` | `0.000001021` |   `0.000001221` |      `$0.00390` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.000000175` | `7616` | `0.000000957` |   `0.000001133` |      `$0.00362` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.000000181` | `8456` | `0.000001063` |   `0.000001244` |      `$0.00397` |
| Simple Account (non-modular)           |      `175283` |       `0.000000175` | `7616` | `0.000000957` |   `0.000001133` |      `$0.00362` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000000019` | `7628` | `0.000017847` |   `0.000017866` |      `$0.05704` |
| Biconomy Nexus                         |      `188136` |       `0.000000020` | `7820` | `0.000018296` |   `0.000018316` |      `$0.05847` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000000023` | `7856` | `0.000018380` |   `0.000018403` |      `$0.05875` |
| Safe v1.4.1                            |      `200732` |       `0.000000021` | `8120` | `0.000018998` |   `0.000019019` |      `$0.06072` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.000000018` | `7616` | `0.000017819` |   `0.000017837` |      `$0.05695` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.000000019` | `8456` | `0.000019784` |   `0.000019803` |      `$0.06322` |
| Simple Account (non-modular)           |      `175283` |       `0.000000018` | `7616` | `0.000017819` |   `0.000017837` |      `$0.05695` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00426` |                                  `$0.06744` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00435` |                                  `$0.06870` |                      `101.99%` |                              `101.86%` |
| ZeroDev Kernel v3.1                    |                     `$0.00444` |                                  `$0.06889` |                      `104.25%` |                              `102.14%` |
| Safe v1.4.1                            |                     `$0.00452` |                                  `$0.07103` |                      `105.92%` |                              `105.33%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00422` |                                  `$0.06708` |                       `99.00%` |                               `99.46%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00459` |                                  `$0.07354` |                      `107.59%` |                              `109.04%` |
| Simple Account (non-modular)           |                     `$0.00423` |                                  `$0.06726` |                       `99.25%` |                               `99.73%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000000202` | `9020` | `0.000001134` |   `0.000001335` |      `$0.00426` |
| Biconomy Nexus                         |      `207286` |       `0.000000207` | `9188` | `0.000001155` |   `0.000001362` |      `$0.00435` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000000234` | `9212` | `0.000001158` |   `0.000001392` |      `$0.00444` |
| Safe v1.4.1                            |      `220464` |       `0.000000221` | `9500` | `0.000001194` |   `0.000001414` |      `$0.00452` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.000000194` | `8972` | `0.000001128` |   `0.000001322` |      `$0.00422` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.000000201` | `9836` | `0.000001236` |   `0.000001437` |      `$0.00459` |
| Simple Account (non-modular)           |      `194829` |       `0.000000195` | `8996` | `0.000001131` |   `0.000001325` |      `$0.00423` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000000021` | `9020` | `0.000021103` |   `0.000021125` |      `$0.06744` |
| Biconomy Nexus                         |      `207286` |       `0.000000022` | `9188` | `0.000021496` |   `0.000021518` |      `$0.06870` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000000025` | `9212` | `0.000021553` |   `0.000021577` |      `$0.06889` |
| Safe v1.4.1                            |      `220464` |       `0.000000023` | `9500` | `0.000022226` |   `0.000022250` |      `$0.07103` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.000000020` | `8972` | `0.000020991` |   `0.000021011` |      `$0.06708` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.000000021` | `9836` | `0.000023012` |   `0.000023034` |      `$0.07354` |
| Simple Account (non-modular)           |      `194829` |       `0.000000021` | `8996` | `0.000021047` |   `0.000021068` |      `$0.06726` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00710` |                                  `$0.10286` |                      `100.00%` |                              `100.00%` |
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
| Alchemy Modular Account v2             |      `495041` |       `0.000000495` | `13748` | `0.000001728` |   `0.000002223` |      `$0.00710` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000000052` | `13748` | `0.000032165` |   `0.000032217` |      `$0.10286` |
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
| Alchemy Modular Account v2             |                     `$0.00337` |                                  `$0.05255` |                      `100.00%` |                              `100.00%` |
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
| Alchemy Modular Account v2             |      `172036` |       `0.000000172` | `7028` | `0.000000883` |   `0.000001055` |      `$0.00337` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000000018` | `7028` | `0.000016443` |   `0.000016461` |      `$0.05255` |
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
| Alchemy Modular Account v2             |                     `$0.00372` |                                  `$0.05758` |                      `100.00%` |                              `100.00%` |
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
| Alchemy Modular Account v2             |      `197295` |       `0.000000197` | `7700` | `0.000000968` |   `0.000001165` |      `$0.00372` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000000021` | `7700` | `0.000018015` |   `0.000018036` |      `$0.05758` |
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
| Alchemy Modular Account v2             |                     `$0.00124` |                                  `$0.01721` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00194` |                                  `$0.02361` |                      `156.78%` |                              `137.19%` |
| ZeroDev Kernel v3.1                    |                     `$0.00241` |                                  `$0.03415` |                      `194.93%` |                              `198.41%` |
| Safe v1.4.1                            |                     `$0.00328` |                                  `$0.04405` |                      `265.93%` |                              `255.90%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00146` |                                  `$0.01724` |                      `118.59%` |                              `100.14%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00179` |                                  `$0.02208` |                      `145.03%` |                              `128.30%` |
| Simple Account (non-modular)           |                     `$0.00151` |                                  `$0.01778` |                      `122.10%` |                              `103.27%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000000098` | `2300` | `0.000000289` |   `0.000000387` |      `$0.00124` |
| Biconomy Nexus                         |      `210309` |       `0.000000210` | `3152` | `0.000000396` |   `0.000000607` |      `$0.00194` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000000181` | `4564` | `0.000000574` |   `0.000000754` |      `$0.00241` |
| Safe v1.4.1                            |      `289207` |       `0.000000289` | `5884` | `0.000000739` |   `0.000001029` |      `$0.00328` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.000000170` | `2300` | `0.000000289` |   `0.000000459` |      `$0.00146` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.000000191` | `2948` | `0.000000371` |   `0.000000561` |      `$0.00179` |
| Simple Account (non-modular)           |      `174219` |       `0.000000174` | `2372` | `0.000000298` |   `0.000000472` |      `$0.00151` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000000010` | `2300` | `0.000005381` |   `0.000005391` |      `$0.01721` |
| Biconomy Nexus                         |      `210309` |       `0.000000022` | `3152` | `0.000007374` |   `0.000007397` |      `$0.02361` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000000019` | `4564` | `0.000010678` |   `0.000010697` |      `$0.03415` |
| Safe v1.4.1                            |      `289207` |       `0.000000030` | `5884` | `0.000013766` |   `0.000013797` |      `$0.04405` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.000000018` | `2300` | `0.000005381` |   `0.000005399` |      `$0.01724` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.000000020` | `2948` | `0.000006897` |   `0.000006917` |      `$0.02208` |
| Simple Account (non-modular)           |      `174219` |       `0.000000018` | `2372` | `0.000005550` |   `0.000005568` |      `$0.01778` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00124` |                                  `$0.02027` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00127` |                                  `$0.02135` |                      `102.25%` |                              `105.29%` |
| ZeroDev Kernel v3.1                    |                     `$0.00131` |                                  `$0.02144` |                      `104.92%` |                              `105.75%` |
| Safe v1.4.1                            |                     `$0.00224` |                                  `$0.03713` |                      `179.60%` |                              `183.16%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00121` |                                  `$0.02027` |                       `97.55%` |                               `99.98%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00121` |                                  `$0.02027` |                       `97.60%` |                               `99.98%` |
| Simple Account (non-modular)           |                     `$0.00121` |                                  `$0.02027` |                       `97.53%` |                               `99.98%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000049` | `2712` | `0.000000341` |   `0.000000390` |      `$0.00124` |
| Biconomy Nexus                         |       `39685` |       `0.000000040` | `2856` | `0.000000359` |   `0.000000399` |      `$0.00127` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000049` | `2868` | `0.000000360` |   `0.000000409` |      `$0.00131` |
| Safe v1.4.1                            |       `75840` |       `0.000000076` | `4968` | `0.000000624` |   `0.000000700` |      `$0.00224` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.000000039` | `2712` | `0.000000341` |   `0.000000380` |      `$0.00121` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.000000040` | `2712` | `0.000000341` |   `0.000000381` |      `$0.00121` |
| Simple Account (non-modular)           |       `39381` |       `0.000000039` | `2712` | `0.000000341` |   `0.000000380` |      `$0.00121` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000005` | `2712` | `0.000006345` |   `0.000006350` |      `$0.02027` |
| Biconomy Nexus                         |       `39685` |       `0.000000004` | `2856` | `0.000006682` |   `0.000006686` |      `$0.02135` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000005` | `2868` | `0.000006710` |   `0.000006715` |      `$0.02144` |
| Safe v1.4.1                            |       `75840` |       `0.000000008` | `4968` | `0.000011623` |   `0.000011631` |      `$0.03713` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.000000004` | `2712` | `0.000006345` |   `0.000006349` |      `$0.02027` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.000000004` | `2712` | `0.000006345` |   `0.000006349` |      `$0.02027` |
| Simple Account (non-modular)           |       `39381` |       `0.000000004` | `2712` | `0.000006345` |   `0.000006349` |      `$0.02027` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00159` |                                  `$0.02524` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00156` |                                  `$0.02524` |                       `98.08%` |                               `99.99%` |
| ZeroDev Kernel v3.1                    |                     `$0.00159` |                                  `$0.02524` |                       `99.87%` |                              `100.00%` |
| Safe v1.4.1                            |                     `$0.00258` |                                  `$0.04216` |                      `162.61%` |                              `167.03%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00156` |                                  `$0.02533` |                       `98.40%` |                              `100.34%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00156` |                                  `$0.02533` |                       `98.46%` |                              `100.34%` |
| Simple Account (non-modular)           |                     `$0.00156` |                                  `$0.02533` |                       `98.40%` |                              `100.34%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000000073` | `3376` | `0.000000424` |   `0.000000497` |      `$0.00159` |
| Biconomy Nexus                         |       `63384` |       `0.000000063` | `3376` | `0.000000424` |   `0.000000488` |      `$0.00156` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000000072` | `3376` | `0.000000424` |   `0.000000497` |      `$0.00159` |
| Safe v1.4.1                            |       `99715` |       `0.000000100` | `5640` | `0.000000709` |   `0.000000809` |      `$0.00258` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.000000064` | `3388` | `0.000000426` |   `0.000000489` |      `$0.00156` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.000000064` | `3388` | `0.000000426` |   `0.000000490` |      `$0.00156` |
| Simple Account (non-modular)           |       `63503` |       `0.000000064` | `3388` | `0.000000426` |   `0.000000489` |      `$0.00156` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000000008` | `3376` | `0.000007899` |   `0.000007906` |      `$0.02524` |
| Biconomy Nexus                         |       `63384` |       `0.000000007` | `3376` | `0.000007899` |   `0.000007905` |      `$0.02524` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000000008` | `3376` | `0.000007899` |   `0.000007906` |      `$0.02524` |
| Safe v1.4.1                            |       `99715` |       `0.000000010` | `5640` | `0.000013195` |   `0.000013206` |      `$0.04216` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.000000007` | `3388` | `0.000007927` |   `0.000007933` |      `$0.02533` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.000000007` | `3388` | `0.000007927` |   `0.000007933` |      `$0.02533` |
| Simple Account (non-modular)           |       `63503` |       `0.000000007` | `3388` | `0.000007927` |   `0.000007933` |      `$0.02533` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00238` |                                  `$0.03560` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00234` |                                  `$0.03551` |                       `98.51%` |                               `99.74%` |
| ZeroDev Kernel v3.1                    |                     `$0.00237` |                                  `$0.03560` |                       `99.92%` |                              `100.00%` |
| Safe v1.4.1                            |                     `$0.00330` |                                  `$0.05222` |                      `138.87%` |                              `146.67%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00234` |                                  `$0.03551` |                       `98.53%` |                               `99.74%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00235` |                                  `$0.03560` |                       `98.83%` |                               `99.99%` |
| Simple Account (non-modular)           |                     `$0.00235` |                                  `$0.03560` |                       `98.79%` |                               `99.99%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000000146` | `4760` | `0.000000598` |   `0.000000744` |      `$0.00238` |
| Biconomy Nexus                         |      `136403` |       `0.000000136` | `4748` | `0.000000597` |   `0.000000733` |      `$0.00234` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000000145` | `4760` | `0.000000598` |   `0.000000744` |      `$0.00237` |
| Safe v1.4.1                            |      `155690` |       `0.000000156` | `6984` | `0.000000878` |   `0.000001033` |      `$0.00330` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.000000137` | `4748` | `0.000000597` |   `0.000000733` |      `$0.00234` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.000000137` | `4760` | `0.000000598` |   `0.000000736` |      `$0.00235` |
| Simple Account (non-modular)           |      `136943` |       `0.000000137` | `4760` | `0.000000598` |   `0.000000735` |      `$0.00235` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000000015` | `4760` | `0.000011137` |   `0.000011152` |      `$0.03560` |
| Biconomy Nexus                         |      `136403` |       `0.000000014` | `4748` | `0.000011108` |   `0.000011123` |      `$0.03551` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000000015` | `4760` | `0.000011137` |   `0.000011152` |      `$0.03560` |
| Safe v1.4.1                            |      `155690` |       `0.000000016` | `6984` | `0.000016340` |   `0.000016356` |      `$0.05222` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.000000014` | `4748` | `0.000011108` |   `0.000011123` |      `$0.03551` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.000000014` | `4760` | `0.000011137` |   `0.000011151` |      `$0.03560` |
| Simple Account (non-modular)           |      `136943` |       `0.000000014` | `4760` | `0.000011137` |   `0.000011151` |      `$0.03560` |

</details>

<!-- /BENCHMARK_RESULTS -->
