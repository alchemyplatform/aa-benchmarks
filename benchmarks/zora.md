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

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00376` |                  `$0.05616` |
| Alchemy Modular Account                |          `$0.00596` |                  `$0.06019` |
| Biconomy Nexus                         |          `$0.00457` |                  `$0.06483` |
| Biconomy Smart Account v2              |          `$0.00475` |                  `$0.06901` |
| ZeroDev Kernel v3.1                    |          `$0.00514` |                  `$0.07561` |
| ZeroDev Kernel v2.1                    |          `$0.00475` |                  `$0.07085` |
| Safe v1.4.1                            |          `$0.00603` |                  `$0.08643` |
| Alchemy Light Account v2               |          `$0.00386` |                  `$0.05608` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00394` |                  `$0.05600` |
| Alchemy Light Account                  |          `$0.00412` |                  `$0.05837` |
| Coinbase Smart Wallet                  |          `$0.00461` |                  `$0.06706` |
| Simple Account                         |          `$0.00399` |                  `$0.05663` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000000233` |  `7508` | `0.000000944` |   `0.000001177` |      `$0.00376` |
| Alchemy Modular Account                |      `858351` |       `0.000000859` |  `8020` | `0.000001008` |   `0.000001867` |      `$0.00596` |
| Biconomy Nexus                         |      `342381` |       `0.000000342` |  `8664` | `0.000001089` |   `0.000001431` |      `$0.00457` |
| Biconomy Smart Account v2              |      `329947` |       `0.000000330` |  `9224` | `0.000001159` |   `0.000001489` |      `$0.00475` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000000339` | `10108` | `0.000001270` |   `0.000001609` |      `$0.00514` |
| ZeroDev Kernel v2.1                    |      `296301` |       `0.000000296` |  `9472` | `0.000001190` |   `0.000001487` |      `$0.00475` |
| Safe v1.4.1                            |      `435486` |       `0.000000436` | `11552` | `0.000001452` |   `0.000001887` |      `$0.00603` |
| Alchemy Light Account v2               |      `266901` |       `0.000000267` |  `7496` | `0.000000942` |   `0.000001209` |      `$0.00386` |
| Alchemy Light Account v2 (Multi-Owner) |      `292822` |       `0.000000293` |  `7484` | `0.000000941` |   `0.000001233` |      `$0.00394` |
| Alchemy Light Account                  |      `310532` |       `0.000000311` |  `7800` | `0.000000980` |   `0.000001291` |      `$0.00412` |
| Coinbase Smart Wallet                  |      `317904` |       `0.000000318` |  `8964` | `0.000001127` |   `0.000001445` |      `$0.00461` |
| Simple Account                         |      `297367` |       `0.000000297` |  `7568` | `0.000000951` |   `0.000001249` |      `$0.00399` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000000025` |  `7508` | `0.000017566` |   `0.000017590` |      `$0.05616` |
| Alchemy Modular Account                |      `858351` |       `0.000000090` |  `8020` | `0.000018764` |   `0.000018854` |      `$0.06019` |
| Biconomy Nexus                         |      `342381` |       `0.000000036` |  `8664` | `0.000020270` |   `0.000020306` |      `$0.06483` |
| Biconomy Smart Account v2              |      `329947` |       `0.000000035` |  `9224` | `0.000021581` |   `0.000021615` |      `$0.06901` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000000036` | `10108` | `0.000023649` |   `0.000023684` |      `$0.07561` |
| ZeroDev Kernel v2.1                    |      `296301` |       `0.000000031` |  `9472` | `0.000022161` |   `0.000022192` |      `$0.07085` |
| Safe v1.4.1                            |      `435486` |       `0.000000046` | `11552` | `0.000027027` |   `0.000027073` |      `$0.08643` |
| Alchemy Light Account v2               |      `266901` |       `0.000000028` |  `7496` | `0.000017538` |   `0.000017566` |      `$0.05608` |
| Alchemy Light Account v2 (Multi-Owner) |      `292822` |       `0.000000031` |  `7484` | `0.000017510` |   `0.000017541` |      `$0.05600` |
| Alchemy Light Account                  |      `310532` |       `0.000000033` |  `7800` | `0.000018249` |   `0.000018282` |      `$0.05837` |
| Coinbase Smart Wallet                  |      `317904` |       `0.000000033` |  `8964` | `0.000020972` |   `0.000021006` |      `$0.06706` |
| Simple Account                         |      `297367` |       `0.000000031` |  `7568` | `0.000017706` |   `0.000017738` |      `$0.05663` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00330` |                  `$0.05201` |
| Alchemy Modular Account                |          `$0.00344` |                  `$0.05419` |
| Biconomy Nexus                         |          `$0.00345` |                  `$0.05449` |
| Biconomy Smart Account v2              |          `$0.00367` |                  `$0.05867` |
| ZeroDev Kernel v3.1                    |          `$0.00355` |                  `$0.05486` |
| ZeroDev Kernel v2.1                    |          `$0.00349` |                  `$0.05524` |
| Safe v1.4.1                            |          `$0.00356` |                  `$0.05578` |
| Alchemy Light Account v2               |          `$0.00327` |                  `$0.05192` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00327` |                  `$0.05192` |
| Alchemy Light Account                  |          `$0.00340` |                  `$0.05419` |
| Coinbase Smart Wallet                  |          `$0.00363` |                  `$0.05828` |
| Simple Account                         |          `$0.00326` |                  `$0.05183` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000000159` | `6956` | `0.000000874` |   `0.000001033` |      `$0.00330` |
| Alchemy Modular Account                |      `165100` |       `0.000000165` | `7248` | `0.000000911` |   `0.000001076` |      `$0.00344` |
| Biconomy Nexus                         |      `164351` |       `0.000000164` | `7288` | `0.000000916` |   `0.000001080` |      `$0.00345` |
| Biconomy Smart Account v2              |      `161912` |       `0.000000162` | `7848` | `0.000000986` |   `0.000001148` |      `$0.00367` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000000191` | `7336` | `0.000000922` |   `0.000001113` |      `$0.00355` |
| ZeroDev Kernel v2.1                    |      `163398` |       `0.000000163` | `7388` | `0.000000929` |   `0.000001092` |      `$0.00349` |
| Safe v1.4.1                            |      `176479` |       `0.000000177` | `7460` | `0.000000938` |   `0.000001114` |      `$0.00356` |
| Alchemy Light Account v2               |      `151040` |       `0.000000151` | `6944` | `0.000000873` |   `0.000001024` |      `$0.00327` |
| Alchemy Light Account v2 (Multi-Owner) |      `151148` |       `0.000000151` | `6944` | `0.000000873` |   `0.000001024` |      `$0.00327` |
| Alchemy Light Account                  |      `152880` |       `0.000000153` | `7248` | `0.000000911` |   `0.000001064` |      `$0.00340` |
| Coinbase Smart Wallet                  |      `156812` |       `0.000000157` | `7796` | `0.000000980` |   `0.000001137` |      `$0.00363` |
| Simple Account                         |      `151045` |       `0.000000151` | `6932` | `0.000000871` |   `0.000001022` |      `$0.00326` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000000017` | `6956` | `0.000016274` |   `0.000016291` |      `$0.05201` |
| Alchemy Modular Account                |      `165100` |       `0.000000017` | `7248` | `0.000016958` |   `0.000016975` |      `$0.05419` |
| Biconomy Nexus                         |      `164351` |       `0.000000017` | `7288` | `0.000017051` |   `0.000017068` |      `$0.05449` |
| Biconomy Smart Account v2              |      `161912` |       `0.000000017` | `7848` | `0.000018361` |   `0.000018378` |      `$0.05867` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000000020` | `7336` | `0.000017163` |   `0.000017184` |      `$0.05486` |
| ZeroDev Kernel v2.1                    |      `163398` |       `0.000000017` | `7388` | `0.000017285` |   `0.000017302` |      `$0.05524` |
| Safe v1.4.1                            |      `176479` |       `0.000000019` | `7460` | `0.000017454` |   `0.000017472` |      `$0.05578` |
| Alchemy Light Account v2               |      `151040` |       `0.000000016` | `6944` | `0.000016246` |   `0.000016262` |      `$0.05192` |
| Alchemy Light Account v2 (Multi-Owner) |      `151148` |       `0.000000016` | `6944` | `0.000016246` |   `0.000016262` |      `$0.05192` |
| Alchemy Light Account                  |      `152880` |       `0.000000016` | `7248` | `0.000016958` |   `0.000016974` |      `$0.05419` |
| Coinbase Smart Wallet                  |      `156812` |       `0.000000017` | `7796` | `0.000018240` |   `0.000018256` |      `$0.05828` |
| Simple Account                         |      `151045` |       `0.000000016` | `6932` | `0.000016218` |   `0.000016234` |      `$0.05183` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00364` |                  `$0.05704` |
| Alchemy Modular Account                |          `$0.00378` |                  `$0.05922` |
| Biconomy Nexus                         |          `$0.00374` |                  `$0.05847` |
| Biconomy Smart Account v2              |          `$0.00402` |                  `$0.06379` |
| ZeroDev Kernel v3.1                    |          `$0.00384` |                  `$0.05875` |
| ZeroDev Kernel v2.1                    |          `$0.00383` |                  `$0.06027` |
| Safe v1.4.1                            |          `$0.00390` |                  `$0.06072` |
| Alchemy Light Account v2               |          `$0.00362` |                  `$0.05695` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00362` |                  `$0.05695` |
| Alchemy Light Account                  |          `$0.00374` |                  `$0.05913` |
| Coinbase Smart Wallet                  |          `$0.00397` |                  `$0.06322` |
| Simple Account                         |          `$0.00362` |                  `$0.05695` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000000183` | `7628` | `0.000000959` |   `0.000001141` |      `$0.00364` |
| Alchemy Modular Account                |      `189487` |       `0.000000190` | `7920` | `0.000000995` |   `0.000001185` |      `$0.00378` |
| Biconomy Nexus                         |      `188136` |       `0.000000188` | `7820` | `0.000000983` |   `0.000001171` |      `$0.00374` |
| Biconomy Smart Account v2              |      `185868` |       `0.000000186` | `8532` | `0.000001072` |   `0.000001258` |      `$0.00402` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000000215` | `7856` | `0.000000987` |   `0.000001202` |      `$0.00384` |
| ZeroDev Kernel v2.1                    |      `187609` |       `0.000000188` | `8060` | `0.000001013` |   `0.000001201` |      `$0.00383` |
| Safe v1.4.1                            |      `200732` |       `0.000000201` | `8120` | `0.000001021` |   `0.000001221` |      `$0.00390` |
| Alchemy Light Account v2               |      `175186` |       `0.000000175` | `7616` | `0.000000957` |   `0.000001132` |      `$0.00362` |
| Alchemy Light Account v2 (Multi-Owner) |      `175294` |       `0.000000175` | `7616` | `0.000000957` |   `0.000001133` |      `$0.00362` |
| Alchemy Light Account                  |      `177013` |       `0.000000177` | `7908` | `0.000000994` |   `0.000001171` |      `$0.00374` |
| Coinbase Smart Wallet                  |      `181014` |       `0.000000181` | `8456` | `0.000001063` |   `0.000001244` |      `$0.00397` |
| Simple Account                         |      `175283` |       `0.000000175` | `7616` | `0.000000957` |   `0.000001133` |      `$0.00362` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000000019` | `7628` | `0.000017847` |   `0.000017866` |      `$0.05704` |
| Alchemy Modular Account                |      `189487` |       `0.000000020` | `7920` | `0.000018530` |   `0.000018550` |      `$0.05922` |
| Biconomy Nexus                         |      `188136` |       `0.000000020` | `7820` | `0.000018296` |   `0.000018316` |      `$0.05847` |
| Biconomy Smart Account v2              |      `185868` |       `0.000000020` | `8532` | `0.000019962` |   `0.000019981` |      `$0.06379` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000000023` | `7856` | `0.000018380` |   `0.000018403` |      `$0.05875` |
| ZeroDev Kernel v2.1                    |      `187609` |       `0.000000020` | `8060` | `0.000018857` |   `0.000018877` |      `$0.06027` |
| Safe v1.4.1                            |      `200732` |       `0.000000021` | `8120` | `0.000018998` |   `0.000019019` |      `$0.06072` |
| Alchemy Light Account v2               |      `175186` |       `0.000000018` | `7616` | `0.000017819` |   `0.000017837` |      `$0.05695` |
| Alchemy Light Account v2 (Multi-Owner) |      `175294` |       `0.000000018` | `7616` | `0.000017819` |   `0.000017837` |      `$0.05695` |
| Alchemy Light Account                  |      `177013` |       `0.000000019` | `7908` | `0.000018502` |   `0.000018520` |      `$0.05913` |
| Coinbase Smart Wallet                  |      `181014` |       `0.000000019` | `8456` | `0.000019784` |   `0.000019803` |      `$0.06322` |
| Simple Account                         |      `175283` |       `0.000000018` | `7616` | `0.000017819` |   `0.000017837` |      `$0.05695` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00426` |                  `$0.06744` |
| Alchemy Modular Account                |          `$0.00440` |                  `$0.06954` |
| Biconomy Nexus                         |          `$0.00435` |                  `$0.06870` |
| Biconomy Smart Account v2              |          `$0.00463` |                  `$0.07402` |
| ZeroDev Kernel v3.1                    |          `$0.00444` |                  `$0.06889` |
| ZeroDev Kernel v2.1                    |          `$0.00444` |                  `$0.07049` |
| Safe v1.4.1                            |          `$0.00452` |                  `$0.07103` |
| Alchemy Light Account v2               |          `$0.00423` |                  `$0.06726` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00422` |                  `$0.06708` |
| Alchemy Light Account                  |          `$0.00436` |                  `$0.06953` |
| Coinbase Smart Wallet                  |          `$0.00459` |                  `$0.07354` |
| Simple Account                         |          `$0.00423` |                  `$0.06726` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000000202` | `9020` | `0.000001134` |   `0.000001335` |      `$0.00426` |
| Alchemy Modular Account                |      `208682` |       `0.000000209` | `9300` | `0.000001169` |   `0.000001378` |      `$0.00440` |
| Biconomy Nexus                         |      `207286` |       `0.000000207` | `9188` | `0.000001155` |   `0.000001362` |      `$0.00435` |
| Biconomy Smart Account v2              |      `205018` |       `0.000000205` | `9900` | `0.000001244` |   `0.000001449` |      `$0.00463` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000000234` | `9212` | `0.000001158` |   `0.000001392` |      `$0.00444` |
| ZeroDev Kernel v2.1                    |      `207241` |       `0.000000207` | `9428` | `0.000001185` |   `0.000001392` |      `$0.00444` |
| Safe v1.4.1                            |      `220464` |       `0.000000221` | `9500` | `0.000001194` |   `0.000001414` |      `$0.00452` |
| Alchemy Light Account v2               |      `194311` |       `0.000000194` | `8996` | `0.000001131` |   `0.000001325` |      `$0.00423` |
| Alchemy Light Account v2 (Multi-Owner) |      `194407` |       `0.000000194` | `8972` | `0.000001128` |   `0.000001322` |      `$0.00422` |
| Alchemy Light Account                  |      `196151` |       `0.000000196` | `9300` | `0.000001169` |   `0.000001365` |      `$0.00436` |
| Coinbase Smart Wallet                  |      `200573` |       `0.000000201` | `9836` | `0.000001236` |   `0.000001437` |      `$0.00459` |
| Simple Account                         |      `194829` |       `0.000000195` | `8996` | `0.000001131` |   `0.000001325` |      `$0.00423` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000000021` | `9020` | `0.000021103` |   `0.000021125` |      `$0.06744` |
| Alchemy Modular Account                |      `208682` |       `0.000000022` | `9300` | `0.000021758` |   `0.000021780` |      `$0.06954` |
| Biconomy Nexus                         |      `207286` |       `0.000000022` | `9188` | `0.000021496` |   `0.000021518` |      `$0.06870` |
| Biconomy Smart Account v2              |      `205018` |       `0.000000022` | `9900` | `0.000023162` |   `0.000023184` |      `$0.07402` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000000025` | `9212` | `0.000021553` |   `0.000021577` |      `$0.06889` |
| ZeroDev Kernel v2.1                    |      `207241` |       `0.000000022` | `9428` | `0.000022058` |   `0.000022080` |      `$0.07049` |
| Safe v1.4.1                            |      `220464` |       `0.000000023` | `9500` | `0.000022226` |   `0.000022250` |      `$0.07103` |
| Alchemy Light Account v2               |      `194311` |       `0.000000020` | `8996` | `0.000021047` |   `0.000021068` |      `$0.06726` |
| Alchemy Light Account v2 (Multi-Owner) |      `194407` |       `0.000000020` | `8972` | `0.000020991` |   `0.000021011` |      `$0.06708` |
| Alchemy Light Account                  |      `196151` |       `0.000000021` | `9300` | `0.000021758` |   `0.000021779` |      `$0.06953` |
| Coinbase Smart Wallet                  |      `200573` |       `0.000000021` | `9836` | `0.000023012` |   `0.000023034` |      `$0.07354` |
| Simple Account                         |      `194829` |       `0.000000021` | `8996` | `0.000021047` |   `0.000021068` |      `$0.06726` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00710` |                  `$0.10286` |
| Alchemy Modular Account                |          `$0.00881` |                  `$0.10589` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |          `$0.00493` |                  `$0.07925` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.00602` |                  `$0.09484` |
| Safe v1.4.1                            |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2               |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet                  |       `Unsupported` |               `Unsupported` |
| Simple Account                         |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000000495` | `13748` | `0.000001728` |   `0.000002223` |      `$0.00710` |
| Alchemy Modular Account                |      `983001` |       `0.000000983` | `14132` | `0.000001776` |   `0.000002759` |      `$0.00881` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `212577` |       `0.000000213` | `10600` | `0.000001332` |   `0.000001545` |      `$0.00493` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `292655` |       `0.000000293` | `12684` | `0.000001594` |   `0.000001887` |      `$0.00602` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000000052` | `13748` | `0.000032165` |   `0.000032217` |      `$0.10286` |
| Alchemy Modular Account                |      `983001` |       `0.000000103` | `14132` | `0.000033063` |   `0.000033167` |      `$0.10589` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `212577` |       `0.000000022` | `10600` | `0.000024800` |   `0.000024822` |      `$0.07925` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `292655` |       `0.000000031` | `12684` | `0.000029676` |   `0.000029706` |      `$0.09484` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00337` |                  `$0.05255` |
| Alchemy Modular Account                |          `$0.00376` |                  `$0.06035` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.00435` |                  `$0.07345` |
| Safe v1.4.1                            |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2               |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet                  |       `Unsupported` |               `Unsupported` |
| Simple Account                         |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000000172` | `7028` | `0.000000883` |   `0.000001055` |      `$0.00337` |
| Alchemy Modular Account                |      `163716` |       `0.000000164` | `8072` | `0.000001014` |   `0.000001178` |      `$0.00376` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `127202` |       `0.000000127` | `9828` | `0.000001235` |   `0.000001362` |      `$0.00435` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000000018` | `7028` | `0.000016443` |   `0.000016461` |      `$0.05255` |
| Alchemy Modular Account                |      `163716` |       `0.000000017` | `8072` | `0.000018885` |   `0.000018903` |      `$0.06035` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `127202` |       `0.000000013` | `9828` | `0.000022994` |   `0.000023007` |      `$0.07345` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00372` |                  `$0.05758` |
| Alchemy Modular Account                |          `$0.00413` |                  `$0.06529` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |          `$0.00503` |                  `$0.08490` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.00483` |                  `$0.08084` |
| Safe v1.4.1                            |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2               |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet                  |       `Unsupported` |               `Unsupported` |
| Simple Account                         |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000000197` |  `7700` | `0.000000968` |   `0.000001165` |      `$0.00372` |
| Alchemy Modular Account                |      `194942` |       `0.000000195` |  `8732` | `0.000001097` |   `0.000001292` |      `$0.00413` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `147023` |       `0.000000147` | `11360` | `0.000001428` |   `0.000001575` |      `$0.00503` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `153240` |       `0.000000153` | `10816` | `0.000001359` |   `0.000001513` |      `$0.00483` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000000021` |  `7700` | `0.000018015` |   `0.000018036` |      `$0.05758` |
| Alchemy Modular Account                |      `194942` |       `0.000000021` |  `8732` | `0.000020430` |   `0.000020450` |      `$0.06529` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `147023` |       `0.000000015` | `11360` | `0.000026578` |   `0.000026594` |      `$0.08490` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `153240` |       `0.000000016` | `10816` | `0.000025305` |   `0.000025321` |      `$0.08084` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00124` |                  `$0.01721` |
| Alchemy Modular Account                |          `$0.00334` |                  `$0.01934` |
| Biconomy Nexus                         |          `$0.00194` |                  `$0.02361` |
| Biconomy Smart Account v2              |          `$0.00189` |                  `$0.02352` |
| ZeroDev Kernel v3.1                    |          `$0.00241` |                  `$0.03415` |
| ZeroDev Kernel v2.1                    |          `$0.00208` |                  `$0.02901` |
| Safe v1.4.1                            |          `$0.00328` |                  `$0.04405` |
| Alchemy Light Account v2               |          `$0.00138` |                  `$0.01714` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00146` |                  `$0.01724` |
| Alchemy Light Account                  |          `$0.00152` |                  `$0.01733` |
| Coinbase Smart Wallet                  |          `$0.00179` |                  `$0.02208` |
| Simple Account                         |          `$0.00151` |                  `$0.01778` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000000098` | `2300` | `0.000000289` |   `0.000000387` |      `$0.00124` |
| Alchemy Modular Account                |      `725323` |       `0.000000726` | `2556` | `0.000000321` |   `0.000001047` |      `$0.00334` |
| Biconomy Nexus                         |      `210309` |       `0.000000210` | `3152` | `0.000000396` |   `0.000000607` |      `$0.00194` |
| Biconomy Smart Account v2              |      `197473` |       `0.000000198` | `3140` | `0.000000395` |   `0.000000592` |      `$0.00189` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000000181` | `4564` | `0.000000574` |   `0.000000754` |      `$0.00241` |
| ZeroDev Kernel v2.1                    |      `163890` |       `0.000000164` | `3876` | `0.000000487` |   `0.000000651` |      `$0.00208` |
| Safe v1.4.1                            |      `289207` |       `0.000000289` | `5884` | `0.000000739` |   `0.000001029` |      `$0.00328` |
| Alchemy Light Account v2               |      `143842` |       `0.000000144` | `2288` | `0.000000288` |   `0.000000431` |      `$0.00138` |
| Alchemy Light Account v2 (Multi-Owner) |      `169655` |       `0.000000170` | `2300` | `0.000000289` |   `0.000000459` |      `$0.00146` |
| Alchemy Light Account                  |      `185267` |       `0.000000185` | `2312` | `0.000000291` |   `0.000000476` |      `$0.00152` |
| Coinbase Smart Wallet                  |      `190525` |       `0.000000191` | `2948` | `0.000000371` |   `0.000000561` |      `$0.00179` |
| Simple Account                         |      `174219` |       `0.000000174` | `2372` | `0.000000298` |   `0.000000472` |      `$0.00151` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000000010` | `2300` | `0.000005381` |   `0.000005391` |      `$0.01721` |
| Alchemy Modular Account                |      `725323` |       `0.000000076` | `2556` | `0.000005980` |   `0.000006056` |      `$0.01934` |
| Biconomy Nexus                         |      `210309` |       `0.000000022` | `3152` | `0.000007374` |   `0.000007397` |      `$0.02361` |
| Biconomy Smart Account v2              |      `197473` |       `0.000000021` | `3140` | `0.000007346` |   `0.000007367` |      `$0.02352` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000000019` | `4564` | `0.000010678` |   `0.000010697` |      `$0.03415` |
| ZeroDev Kernel v2.1                    |      `163890` |       `0.000000017` | `3876` | `0.000009068` |   `0.000009086` |      `$0.02901` |
| Safe v1.4.1                            |      `289207` |       `0.000000030` | `5884` | `0.000013766` |   `0.000013797` |      `$0.04405` |
| Alchemy Light Account v2               |      `143842` |       `0.000000015` | `2288` | `0.000005353` |   `0.000005368` |      `$0.01714` |
| Alchemy Light Account v2 (Multi-Owner) |      `169655` |       `0.000000018` | `2300` | `0.000005381` |   `0.000005399` |      `$0.01724` |
| Alchemy Light Account                  |      `185267` |       `0.000000019` | `2312` | `0.000005409` |   `0.000005429` |      `$0.01733` |
| Coinbase Smart Wallet                  |      `190525` |       `0.000000020` | `2948` | `0.000006897` |   `0.000006917` |      `$0.02208` |
| Simple Account                         |      `174219` |       `0.000000018` | `2372` | `0.000005550` |   `0.000005568` |      `$0.01778` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00124` |                  `$0.02027` |
| Alchemy Modular Account                |          `$0.00125` |                  `$0.02027` |
| Biconomy Nexus                         |          `$0.00127` |                  `$0.02135` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00131` |                  `$0.02144` |
| ZeroDev Kernel v2.1                    |          `$0.00129` |                  `$0.02135` |
| Safe v1.4.1                            |          `$0.00224` |                  `$0.03713` |
| Alchemy Light Account v2               |          `$0.00121` |                  `$0.02027` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00121` |                  `$0.02027` |
| Alchemy Light Account                  |          `$0.00121` |                  `$0.02018` |
| Coinbase Smart Wallet                  |          `$0.00121` |                  `$0.02027` |
| Simple Account                         |          `$0.00121` |                  `$0.02027` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000049` | `2712` | `0.000000341` |   `0.000000390` |      `$0.00124` |
| Alchemy Modular Account                |       `50408` |       `0.000000050` | `2712` | `0.000000341` |   `0.000000391` |      `$0.00125` |
| Biconomy Nexus                         |       `39685` |       `0.000000040` | `2856` | `0.000000359` |   `0.000000399` |      `$0.00127` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000049` | `2868` | `0.000000360` |   `0.000000409` |      `$0.00131` |
| ZeroDev Kernel v2.1                    |       `45364` |       `0.000000045` | `2856` | `0.000000359` |   `0.000000404` |      `$0.00129` |
| Safe v1.4.1                            |       `75840` |       `0.000000076` | `4968` | `0.000000624` |   `0.000000700` |      `$0.00224` |
| Alchemy Light Account v2               |       `39368` |       `0.000000039` | `2712` | `0.000000341` |   `0.000000380` |      `$0.00121` |
| Alchemy Light Account v2 (Multi-Owner) |       `39463` |       `0.000000039` | `2712` | `0.000000341` |   `0.000000380` |      `$0.00121` |
| Alchemy Light Account                  |       `39396` |       `0.000000039` | `2700` | `0.000000339` |   `0.000000379` |      `$0.00121` |
| Coinbase Smart Wallet                  |       `39681` |       `0.000000040` | `2712` | `0.000000341` |   `0.000000381` |      `$0.00121` |
| Simple Account                         |       `39381` |       `0.000000039` | `2712` | `0.000000341` |   `0.000000380` |      `$0.00121` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000005` | `2712` | `0.000006345` |   `0.000006350` |      `$0.02027` |
| Alchemy Modular Account                |       `50408` |       `0.000000005` | `2712` | `0.000006345` |   `0.000006350` |      `$0.02027` |
| Biconomy Nexus                         |       `39685` |       `0.000000004` | `2856` | `0.000006682` |   `0.000006686` |      `$0.02135` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000005` | `2868` | `0.000006710` |   `0.000006715` |      `$0.02144` |
| ZeroDev Kernel v2.1                    |       `45364` |       `0.000000005` | `2856` | `0.000006682` |   `0.000006687` |      `$0.02135` |
| Safe v1.4.1                            |       `75840` |       `0.000000008` | `4968` | `0.000011623` |   `0.000011631` |      `$0.03713` |
| Alchemy Light Account v2               |       `39368` |       `0.000000004` | `2712` | `0.000006345` |   `0.000006349` |      `$0.02027` |
| Alchemy Light Account v2 (Multi-Owner) |       `39463` |       `0.000000004` | `2712` | `0.000006345` |   `0.000006349` |      `$0.02027` |
| Alchemy Light Account                  |       `39396` |       `0.000000004` | `2700` | `0.000006317` |   `0.000006321` |      `$0.02018` |
| Coinbase Smart Wallet                  |       `39681` |       `0.000000004` | `2712` | `0.000006345` |   `0.000006349` |      `$0.02027` |
| Simple Account                         |       `39381` |       `0.000000004` | `2712` | `0.000006345` |   `0.000006349` |      `$0.02027` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00159` |                  `$0.02524` |
| Alchemy Modular Account                |          `$0.00160` |                  `$0.02533` |
| Biconomy Nexus                         |          `$0.00156` |                  `$0.02524` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00159` |                  `$0.02524` |
| ZeroDev Kernel v2.1                    |          `$0.00164` |                  `$0.02641` |
| Safe v1.4.1                            |          `$0.00258` |                  `$0.04216` |
| Alchemy Light Account v2               |          `$0.00156` |                  `$0.02533` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00156` |                  `$0.02533` |
| Alchemy Light Account                  |          `$0.00156` |                  `$0.02524` |
| Coinbase Smart Wallet                  |          `$0.00156` |                  `$0.02533` |
| Simple Account                         |          `$0.00156` |                  `$0.02533` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000000073` | `3376` | `0.000000424` |   `0.000000497` |      `$0.00159` |
| Alchemy Modular Account                |       `74693` |       `0.000000075` | `3388` | `0.000000426` |   `0.000000501` |      `$0.00160` |
| Biconomy Nexus                         |       `63384` |       `0.000000063` | `3376` | `0.000000424` |   `0.000000488` |      `$0.00156` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000000072` | `3376` | `0.000000424` |   `0.000000497` |      `$0.00159` |
| ZeroDev Kernel v2.1                    |       `69230` |       `0.000000069` | `3532` | `0.000000444` |   `0.000000513` |      `$0.00164` |
| Safe v1.4.1                            |       `99715` |       `0.000000100` | `5640` | `0.000000709` |   `0.000000809` |      `$0.00258` |
| Alchemy Light Account v2               |       `63410` |       `0.000000063` | `3388` | `0.000000426` |   `0.000000489` |      `$0.00156` |
| Alchemy Light Account v2 (Multi-Owner) |       `63505` |       `0.000000064` | `3388` | `0.000000426` |   `0.000000489` |      `$0.00156` |
| Alchemy Light Account                  |       `63438` |       `0.000000063` | `3376` | `0.000000424` |   `0.000000488` |      `$0.00156` |
| Coinbase Smart Wallet                  |       `63803` |       `0.000000064` | `3388` | `0.000000426` |   `0.000000490` |      `$0.00156` |
| Simple Account                         |       `63503` |       `0.000000064` | `3388` | `0.000000426` |   `0.000000489` |      `$0.00156` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000000008` | `3376` | `0.000007899` |   `0.000007906` |      `$0.02524` |
| Alchemy Modular Account                |       `74693` |       `0.000000008` | `3388` | `0.000007927` |   `0.000007934` |      `$0.02533` |
| Biconomy Nexus                         |       `63384` |       `0.000000007` | `3376` | `0.000007899` |   `0.000007905` |      `$0.02524` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000000008` | `3376` | `0.000007899` |   `0.000007906` |      `$0.02524` |
| ZeroDev Kernel v2.1                    |       `69230` |       `0.000000007` | `3532` | `0.000008264` |   `0.000008271` |      `$0.02641` |
| Safe v1.4.1                            |       `99715` |       `0.000000010` | `5640` | `0.000013195` |   `0.000013206` |      `$0.04216` |
| Alchemy Light Account v2               |       `63410` |       `0.000000007` | `3388` | `0.000007927` |   `0.000007933` |      `$0.02533` |
| Alchemy Light Account v2 (Multi-Owner) |       `63505` |       `0.000000007` | `3388` | `0.000007927` |   `0.000007933` |      `$0.02533` |
| Alchemy Light Account                  |       `63438` |       `0.000000007` | `3376` | `0.000007899` |   `0.000007905` |      `$0.02524` |
| Coinbase Smart Wallet                  |       `63803` |       `0.000000007` | `3388` | `0.000007927` |   `0.000007933` |      `$0.02533` |
| Simple Account                         |       `63503` |       `0.000000007` | `3388` | `0.000007927` |   `0.000007933` |      `$0.02533` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00238` |                  `$0.03560` |
| Alchemy Modular Account                |          `$0.00238` |                  `$0.03560` |
| Biconomy Nexus                         |          `$0.00234` |                  `$0.03551` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00237` |                  `$0.03560` |
| ZeroDev Kernel v2.1                    |          `$0.00242` |                  `$0.03656` |
| Safe v1.4.1                            |          `$0.00330` |                  `$0.05222` |
| Alchemy Light Account v2               |          `$0.00234` |                  `$0.03551` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00234` |                  `$0.03551` |
| Alchemy Light Account                  |          `$0.00234` |                  `$0.03551` |
| Coinbase Smart Wallet                  |          `$0.00235` |                  `$0.03560` |
| Simple Account                         |          `$0.00235` |                  `$0.03560` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000000146` | `4760` | `0.000000598` |   `0.000000744` |      `$0.00238` |
| Alchemy Modular Account                |      `147781` |       `0.000000148` | `4760` | `0.000000598` |   `0.000000746` |      `$0.00238` |
| Biconomy Nexus                         |      `136403` |       `0.000000136` | `4748` | `0.000000597` |   `0.000000733` |      `$0.00234` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000000145` | `4760` | `0.000000598` |   `0.000000744` |      `$0.00237` |
| ZeroDev Kernel v2.1                    |      `142287` |       `0.000000142` | `4888` | `0.000000614` |   `0.000000757` |      `$0.00242` |
| Safe v1.4.1                            |      `155690` |       `0.000000156` | `6984` | `0.000000878` |   `0.000001033` |      `$0.00330` |
| Alchemy Light Account v2               |      `136429` |       `0.000000136` | `4748` | `0.000000597` |   `0.000000733` |      `$0.00234` |
| Alchemy Light Account v2 (Multi-Owner) |      `136524` |       `0.000000137` | `4748` | `0.000000597` |   `0.000000733` |      `$0.00234` |
| Alchemy Light Account                  |      `136457` |       `0.000000136` | `4748` | `0.000000597` |   `0.000000733` |      `$0.00234` |
| Coinbase Smart Wallet                  |      `137243` |       `0.000000137` | `4760` | `0.000000598` |   `0.000000736` |      `$0.00235` |
| Simple Account                         |      `136943` |       `0.000000137` | `4760` | `0.000000598` |   `0.000000735` |      `$0.00235` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000000015` | `4760` | `0.000011137` |   `0.000011152` |      `$0.03560` |
| Alchemy Modular Account                |      `147781` |       `0.000000016` | `4760` | `0.000011137` |   `0.000011152` |      `$0.03560` |
| Biconomy Nexus                         |      `136403` |       `0.000000014` | `4748` | `0.000011108` |   `0.000011123` |      `$0.03551` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000000015` | `4760` | `0.000011137` |   `0.000011152` |      `$0.03560` |
| ZeroDev Kernel v2.1                    |      `142287` |       `0.000000015` | `4888` | `0.000011436` |   `0.000011451` |      `$0.03656` |
| Safe v1.4.1                            |      `155690` |       `0.000000016` | `6984` | `0.000016340` |   `0.000016356` |      `$0.05222` |
| Alchemy Light Account v2               |      `136429` |       `0.000000014` | `4748` | `0.000011108` |   `0.000011123` |      `$0.03551` |
| Alchemy Light Account v2 (Multi-Owner) |      `136524` |       `0.000000014` | `4748` | `0.000011108` |   `0.000011123` |      `$0.03551` |
| Alchemy Light Account                  |      `136457` |       `0.000000014` | `4748` | `0.000011108` |   `0.000011123` |      `$0.03551` |
| Coinbase Smart Wallet                  |      `137243` |       `0.000000014` | `4760` | `0.000011137` |   `0.000011151` |      `$0.03560` |
| Simple Account                         |      `136943` |       `0.000000014` | `4760` | `0.000011137` |   `0.000011151` |      `$0.03560` |

</details>

<!-- /BENCHMARK_RESULTS -->
