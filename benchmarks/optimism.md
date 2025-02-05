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

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00090` |                  `$0.10261` |
| Alchemy Modular Account                |          `$0.00290` |                  `$0.22681` |
| Biconomy Nexus                         |          `$0.00127` |                  `$0.13254` |
| Biconomy Smart Account v2              |          `$0.00124` |                  `$0.13446` |
| ZeroDev Kernel v3.1                    |          `$0.00129` |                  `$0.14290` |
| ZeroDev Kernel v2.1                    |          `$0.00114` |                  `$0.12990` |
| Safe v1.4.1                            |          `$0.00163` |                  `$0.17268` |
| Alchemy Light Account v2               |          `$0.00100` |                  `$0.10904` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00109` |                  `$0.11393` |
| Alchemy Light Account                  |          `$0.00115` |                  `$0.11977` |
| Coinbase Smart Wallet                  |          `$0.00120` |                  `$0.13015` |
| Simple Account                         |          `$0.00110` |                  `$0.11545` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000000233` |  `7508` | `0.000000048` |   `0.000000281` |      `$0.00090` |
| Alchemy Modular Account                |      `858351` |       `0.000000859` |  `8020` | `0.000000051` |   `0.000000910` |      `$0.00290` |
| Biconomy Nexus                         |      `342381` |       `0.000000343` |  `8664` | `0.000000055` |   `0.000000398` |      `$0.00127` |
| Biconomy Smart Account v2              |      `329947` |       `0.000000330` |  `9224` | `0.000000059` |   `0.000000389` |      `$0.00124` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000000339` | `10108` | `0.000000064` |   `0.000000403` |      `$0.00129` |
| ZeroDev Kernel v2.1                    |      `296301` |       `0.000000296` |  `9472` | `0.000000060` |   `0.000000357` |      `$0.00114` |
| Safe v1.4.1                            |      `435486` |       `0.000000436` | `11552` | `0.000000073` |   `0.000000509` |      `$0.00163` |
| Alchemy Light Account v2               |      `266901` |       `0.000000267` |  `7496` | `0.000000048` |   `0.000000315` |      `$0.00100` |
| Alchemy Light Account v2 (Multi-Owner) |      `292822` |       `0.000000293` |  `7484` | `0.000000048` |   `0.000000341` |      `$0.00109` |
| Alchemy Light Account                  |      `310532` |       `0.000000311` |  `7800` | `0.000000050` |   `0.000000360` |      `$0.00115` |
| Coinbase Smart Wallet                  |      `317904` |       `0.000000318` |  `8964` | `0.000000057` |   `0.000000375` |      `$0.00120` |
| Simple Account                         |      `297367` |       `0.000000298` |  `7568` | `0.000000048` |   `0.000000346` |      `$0.00110` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000014035` |  `7508` | `0.000018106` |   `0.000032140` |      `$0.10261` |
| Alchemy Modular Account                |      `858351` |       `0.000051702` |  `8020` | `0.000019340` |   `0.000071042` |      `$0.22681` |
| Biconomy Nexus                         |      `342381` |       `0.000020623` |  `8664` | `0.000020893` |   `0.000041516` |      `$0.13254` |
| Biconomy Smart Account v2              |      `329947` |       `0.000019874` |  `9224` | `0.000022244` |   `0.000042118` |      `$0.13446` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000020384` | `10108` | `0.000024376` |   `0.000044760` |      `$0.14290` |
| ZeroDev Kernel v2.1                    |      `296301` |       `0.000017847` |  `9472` | `0.000022842` |   `0.000040689` |      `$0.12990` |
| Safe v1.4.1                            |      `435486` |       `0.000026231` | `11552` | `0.000027858` |   `0.000054089` |      `$0.17268` |
| Alchemy Light Account v2               |      `266901` |       `0.000016076` |  `7496` | `0.000018077` |   `0.000034153` |      `$0.10904` |
| Alchemy Light Account v2 (Multi-Owner) |      `292822` |       `0.000017638` |  `7484` | `0.000018048` |   `0.000035686` |      `$0.11393` |
| Alchemy Light Account                  |      `310532` |       `0.000018704` |  `7800` | `0.000018810` |   `0.000037514` |      `$0.11977` |
| Coinbase Smart Wallet                  |      `317904` |       `0.000019149` |  `8964` | `0.000021617` |   `0.000040765` |      `$0.13015` |
| Simple Account                         |      `297367` |       `0.000017911` |  `7568` | `0.000018250` |   `0.000036162` |      `$0.11545` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00065` |                  `$0.08408` |
| Alchemy Modular Account                |          `$0.00067` |                  `$0.08755` |
| Biconomy Nexus                         |          `$0.00067` |                  `$0.08772` |
| Biconomy Smart Account v2              |          `$0.00068` |                  `$0.09156` |
| ZeroDev Kernel v3.1                    |          `$0.00076` |                  `$0.09319` |
| ZeroDev Kernel v2.1                    |          `$0.00067` |                  `$0.08830` |
| Safe v1.4.1                            |          `$0.00071` |                  `$0.09137` |
| Alchemy Light Account v2               |          `$0.00062` |                  `$0.08251` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00062` |                  `$0.08253` |
| Alchemy Light Account                  |          `$0.00064` |                  `$0.08520` |
| Coinbase Smart Wallet                  |          `$0.00066` |                  `$0.09018` |
| Simple Account                         |          `$0.00062` |                  `$0.08242` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000000159` | `6956` | `0.000000044` |   `0.000000203` |      `$0.00065` |
| Alchemy Modular Account                |      `165100` |       `0.000000165` | `7248` | `0.000000046` |   `0.000000211` |      `$0.00067` |
| Biconomy Nexus                         |      `164351` |       `0.000000164` | `7288` | `0.000000046` |   `0.000000211` |      `$0.00067` |
| Biconomy Smart Account v2              |      `161912` |       `0.000000162` | `7848` | `0.000000050` |   `0.000000212` |      `$0.00068` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000000191` | `7336` | `0.000000047` |   `0.000000238` |      `$0.00076` |
| ZeroDev Kernel v2.1                    |      `163398` |       `0.000000163` | `7388` | `0.000000047` |   `0.000000210` |      `$0.00067` |
| Safe v1.4.1                            |      `176479` |       `0.000000177` | `7460` | `0.000000047` |   `0.000000224` |      `$0.00071` |
| Alchemy Light Account v2               |      `151040` |       `0.000000151` | `6944` | `0.000000044` |   `0.000000195` |      `$0.00062` |
| Alchemy Light Account v2 (Multi-Owner) |      `151148` |       `0.000000151` | `6944` | `0.000000044` |   `0.000000195` |      `$0.00062` |
| Alchemy Light Account                  |      `152880` |       `0.000000153` | `7248` | `0.000000046` |   `0.000000199` |      `$0.00064` |
| Coinbase Smart Wallet                  |      `156812` |       `0.000000157` | `7796` | `0.000000050` |   `0.000000206` |      `$0.00066` |
| Simple Account                         |      `151045` |       `0.000000151` | `6932` | `0.000000044` |   `0.000000195` |      `$0.00062` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000009561` | `6956` | `0.000016774` |   `0.000026335` |      `$0.08408` |
| Alchemy Modular Account                |      `165100` |       `0.000009945` | `7248` | `0.000017479` |   `0.000027423` |      `$0.08755` |
| Biconomy Nexus                         |      `164351` |       `0.000009899` | `7288` | `0.000017575` |   `0.000027475` |      `$0.08772` |
| Biconomy Smart Account v2              |      `161912` |       `0.000009753` | `7848` | `0.000018926` |   `0.000028678` |      `$0.09156` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000011499` | `7336` | `0.000017691` |   `0.000029190` |      `$0.09319` |
| ZeroDev Kernel v2.1                    |      `163398` |       `0.000009842` | `7388` | `0.000017816` |   `0.000027658` |      `$0.08830` |
| Safe v1.4.1                            |      `176479` |       `0.000010630` | `7460` | `0.000017990` |   `0.000028620` |      `$0.09137` |
| Alchemy Light Account v2               |      `151040` |       `0.000009098` | `6944` | `0.000016746` |   `0.000025843` |      `$0.08251` |
| Alchemy Light Account v2 (Multi-Owner) |      `151148` |       `0.000009104` | `6944` | `0.000016746` |   `0.000025850` |      `$0.08253` |
| Alchemy Light Account                  |      `152880` |       `0.000009209` | `7248` | `0.000017479` |   `0.000026687` |      `$0.08520` |
| Coinbase Smart Wallet                  |      `156812` |       `0.000009445` | `7796` | `0.000018800` |   `0.000028246` |      `$0.09018` |
| Simple Account                         |      `151045` |       `0.000009098` | `6932` | `0.000016717` |   `0.000025815` |      `$0.08242` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00074` |                  `$0.09385` |
| Alchemy Modular Account                |          `$0.00077` |                  `$0.09741` |
| Biconomy Nexus                         |          `$0.00076` |                  `$0.09638` |
| Biconomy Smart Account v2              |          `$0.00077` |                  `$0.10143` |
| ZeroDev Kernel v3.1                    |          `$0.00085` |                  `$0.10179` |
| ZeroDev Kernel v2.1                    |          `$0.00076` |                  `$0.09813` |
| Safe v1.4.1                            |          `$0.00081` |                  `$0.10112` |
| Alchemy Light Account v2               |          `$0.00071` |                  `$0.09232` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00071` |                  `$0.09234` |
| Alchemy Light Account                  |          `$0.00073` |                  `$0.09492` |
| Coinbase Smart Wallet                  |          `$0.00075` |                  `$0.09991` |
| Simple Account                         |          `$0.00071` |                  `$0.09234` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000000183` | `7628` | `0.000000048` |   `0.000000231` |      `$0.00074` |
| Alchemy Modular Account                |      `189487` |       `0.000000190` | `7920` | `0.000000050` |   `0.000000240` |      `$0.00077` |
| Biconomy Nexus                         |      `188136` |       `0.000000188` | `7820` | `0.000000050` |   `0.000000238` |      `$0.00076` |
| Biconomy Smart Account v2              |      `185868` |       `0.000000186` | `8532` | `0.000000054` |   `0.000000240` |      `$0.00077` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000000215` | `7856` | `0.000000050` |   `0.000000265` |      `$0.00085` |
| ZeroDev Kernel v2.1                    |      `187609` |       `0.000000188` | `8060` | `0.000000051` |   `0.000000239` |      `$0.00076` |
| Safe v1.4.1                            |      `200732` |       `0.000000201` | `8120` | `0.000000052` |   `0.000000252` |      `$0.00081` |
| Alchemy Light Account v2               |      `175186` |       `0.000000175` | `7616` | `0.000000048` |   `0.000000224` |      `$0.00071` |
| Alchemy Light Account v2 (Multi-Owner) |      `175294` |       `0.000000175` | `7616` | `0.000000048` |   `0.000000224` |      `$0.00071` |
| Alchemy Light Account                  |      `177013` |       `0.000000177` | `7908` | `0.000000050` |   `0.000000227` |      `$0.00073` |
| Coinbase Smart Wallet                  |      `181014` |       `0.000000181` | `8456` | `0.000000054` |   `0.000000235` |      `$0.00075` |
| Simple Account                         |      `175283` |       `0.000000175` | `7616` | `0.000000048` |   `0.000000224` |      `$0.00071` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000011003` | `7628` | `0.000018395` |   `0.000029398` |      `$0.09385` |
| Alchemy Modular Account                |      `189487` |       `0.000011413` | `7920` | `0.000019099` |   `0.000030513` |      `$0.09741` |
| Biconomy Nexus                         |      `188136` |       `0.000011332` | `7820` | `0.000018858` |   `0.000030190` |      `$0.09638` |
| Biconomy Smart Account v2              |      `185868` |       `0.000011196` | `8532` | `0.000020575` |   `0.000031771` |      `$0.10143` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000012939` | `7856` | `0.000018945` |   `0.000031884` |      `$0.10179` |
| ZeroDev Kernel v2.1                    |      `187609` |       `0.000011300` | `8060` | `0.000019437` |   `0.000030737` |      `$0.09813` |
| Safe v1.4.1                            |      `200732` |       `0.000012091` | `8120` | `0.000019582` |   `0.000031672` |      `$0.10112` |
| Alchemy Light Account v2               |      `175186` |       `0.000010552` | `7616` | `0.000018366` |   `0.000028918` |      `$0.09232` |
| Alchemy Light Account v2 (Multi-Owner) |      `175294` |       `0.000010559` | `7616` | `0.000018366` |   `0.000028925` |      `$0.09234` |
| Alchemy Light Account                  |      `177013` |       `0.000010662` | `7908` | `0.000019070` |   `0.000029732` |      `$0.09492` |
| Coinbase Smart Wallet                  |      `181014` |       `0.000010903` | `8456` | `0.000020392` |   `0.000031295` |      `$0.09991` |
| Simple Account                         |      `175283` |       `0.000010558` | `7616` | `0.000018366` |   `0.000028924` |      `$0.09234` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00083` |                  `$0.10825` |
| Alchemy Modular Account                |          `$0.00086` |                  `$0.11173` |
| Biconomy Nexus                         |          `$0.00085` |                  `$0.11060` |
| Biconomy Smart Account v2              |          `$0.00086` |                  `$0.11565` |
| ZeroDev Kernel v3.1                    |          `$0.00094` |                  `$0.11599` |
| ZeroDev Kernel v2.1                    |          `$0.00085` |                  `$0.11244` |
| Safe v1.4.1                            |          `$0.00090` |                  `$0.11554` |
| Alchemy Light Account v2               |          `$0.00080` |                  `$0.10663` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00080` |                  `$0.10646` |
| Alchemy Light Account                  |          `$0.00082` |                  `$0.10932` |
| Coinbase Smart Wallet                  |          `$0.00084` |                  `$0.11430` |
| Simple Account                         |          `$0.00080` |                  `$0.10673` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000000202` | `9020` | `0.000000057` |   `0.000000259` |      `$0.00083` |
| Alchemy Modular Account                |      `208682` |       `0.000000209` | `9300` | `0.000000059` |   `0.000000268` |      `$0.00086` |
| Biconomy Nexus                         |      `207286` |       `0.000000207` | `9188` | `0.000000058` |   `0.000000266` |      `$0.00085` |
| Biconomy Smart Account v2              |      `205018` |       `0.000000205` | `9900` | `0.000000063` |   `0.000000268` |      `$0.00086` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000000235` | `9212` | `0.000000059` |   `0.000000293` |      `$0.00094` |
| ZeroDev Kernel v2.1                    |      `207241` |       `0.000000207` | `9428` | `0.000000060` |   `0.000000267` |      `$0.00085` |
| Safe v1.4.1                            |      `220464` |       `0.000000221` | `9500` | `0.000000060` |   `0.000000281` |      `$0.00090` |
| Alchemy Light Account v2               |      `194311` |       `0.000000194` | `8996` | `0.000000057` |   `0.000000252` |      `$0.00080` |
| Alchemy Light Account v2 (Multi-Owner) |      `194407` |       `0.000000195` | `8972` | `0.000000057` |   `0.000000251` |      `$0.00080` |
| Alchemy Light Account                  |      `196151` |       `0.000000196` | `9300` | `0.000000059` |   `0.000000255` |      `$0.00082` |
| Coinbase Smart Wallet                  |      `200573` |       `0.000000201` | `9836` | `0.000000062` |   `0.000000263` |      `$0.00084` |
| Simple Account                         |      `194829` |       `0.000000195` | `8996` | `0.000000057` |   `0.000000252` |      `$0.00080` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000012155` | `9020` | `0.000021752` |   `0.000033906` |      `$0.10825` |
| Alchemy Modular Account                |      `208682` |       `0.000012570` | `9300` | `0.000022427` |   `0.000034997` |      `$0.11173` |
| Biconomy Nexus                         |      `207286` |       `0.000012486` | `9188` | `0.000022157` |   `0.000034643` |      `$0.11060` |
| Biconomy Smart Account v2              |      `205018` |       `0.000012349` | `9900` | `0.000023874` |   `0.000036223` |      `$0.11565` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000014117` | `9212` | `0.000022215` |   `0.000036332` |      `$0.11599` |
| ZeroDev Kernel v2.1                    |      `207241` |       `0.000012483` | `9428` | `0.000022736` |   `0.000035219` |      `$0.11244` |
| Safe v1.4.1                            |      `220464` |       `0.000013279` | `9500` | `0.000022909` |   `0.000036189` |      `$0.11554` |
| Alchemy Light Account v2               |      `194311` |       `0.000011704` | `8996` | `0.000021694` |   `0.000033398` |      `$0.10663` |
| Alchemy Light Account v2 (Multi-Owner) |      `194407` |       `0.000011710` | `8972` | `0.000021636` |   `0.000033346` |      `$0.10646` |
| Alchemy Light Account                  |      `196151` |       `0.000011815` | `9300` | `0.000022427` |   `0.000034242` |      `$0.10932` |
| Coinbase Smart Wallet                  |      `200573` |       `0.000012081` | `9836` | `0.000023720` |   `0.000035801` |      `$0.11430` |
| Simple Account                         |      `194829` |       `0.000011735` | `8996` | `0.000021694` |   `0.000033429` |      `$0.10673` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00186` |                  `$0.20104` |
| Alchemy Modular Account                |          `$0.00343` |                  `$0.29783` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |          `$0.00089` |                  `$0.12249` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.00119` |                  `$0.15393` |
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
| Alchemy Modular Account v2             |      `495041` |       `0.000000495` | `13748` | `0.000000087` |   `0.000000583` |      `$0.00186` |
| Alchemy Modular Account                |      `983001` |       `0.000000984` | `14132` | `0.000000090` |   `0.000001073` |      `$0.00343` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `212577` |       `0.000000213` | `10600` | `0.000000067` |   `0.000000280` |      `$0.00089` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `292655` |       `0.000000293` | `12684` | `0.000000081` |   `0.000000373` |      `$0.00119` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000029818` | `13748` | `0.000033154` |   `0.000062972` |      `$0.20104` |
| Alchemy Modular Account                |      `983001` |       `0.000059210` | `14132` | `0.000034080` |   `0.000093289` |      `$0.29783` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `212577` |       `0.000012804` | `10600` | `0.000025562` |   `0.000038366` |      `$0.12249` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `292655` |       `0.000017628` | `12684` | `0.000030588` |   `0.000048215` |      `$0.15393` |
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
| Alchemy Modular Account v2             |          `$0.00069` |                  `$0.08719` |
| Alchemy Modular Account                |          `$0.00069` |                  `$0.09363` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.00061` |                  `$0.10013` |
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
| Alchemy Modular Account v2             |      `172036` |       `0.000000172` | `7028` | `0.000000045` |   `0.000000217` |      `$0.00069` |
| Alchemy Modular Account                |      `163716` |       `0.000000164` | `8072` | `0.000000051` |   `0.000000215` |      `$0.00069` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `127202` |       `0.000000127` | `9828` | `0.000000062` |   `0.000000190` |      `$0.00061` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000010362` | `7028` | `0.000016948` |   `0.000027310` |      `$0.08719` |
| Alchemy Modular Account                |      `163716` |       `0.000009861` | `8072` | `0.000019466` |   `0.000029327` |      `$0.09363` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `127202` |       `0.000007662` | `9828` | `0.000023700` |   `0.000031362` |      `$0.10013` |
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
| Alchemy Modular Account v2             |          `$0.00079` |                  `$0.09722` |
| Alchemy Modular Account                |          `$0.00080` |                  `$0.10472` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |          `$0.00070` |                  `$0.11573` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.00071` |                  `$0.11274` |
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
| Alchemy Modular Account v2             |      `197295` |       `0.000000197` |  `7700` | `0.000000049` |   `0.000000246` |      `$0.00079` |
| Alchemy Modular Account                |      `194942` |       `0.000000195` |  `8732` | `0.000000055` |   `0.000000251` |      `$0.00080` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `147023` |       `0.000000147` | `11360` | `0.000000072` |   `0.000000219` |      `$0.00070` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `153240` |       `0.000000153` | `10816` | `0.000000069` |   `0.000000222` |      `$0.00071` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000011884` |  `7700` | `0.000018569` |   `0.000030452` |      `$0.09722` |
| Alchemy Modular Account                |      `194942` |       `0.000011742` |  `8732` | `0.000021057` |   `0.000032799` |      `$0.10472` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `147023` |       `0.000008856` | `11360` | `0.000027395` |   `0.000036251` |      `$0.11573` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `153240` |       `0.000009230` | `10816` | `0.000026083` |   `0.000035313` |      `$0.11274` |
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
| Alchemy Modular Account v2             |          `$0.00036` |                  `$0.03651` |
| Alchemy Modular Account                |          `$0.00237` |                  `$0.15916` |
| Biconomy Nexus                         |          `$0.00074` |                  `$0.06471` |
| Biconomy Smart Account v2              |          `$0.00069` |                  `$0.06215` |
| ZeroDev Kernel v3.1                    |          `$0.00067` |                  `$0.06984` |
| ZeroDev Kernel v2.1                    |          `$0.00060` |                  `$0.06136` |
| Safe v1.4.1                            |          `$0.00104` |                  `$0.10092` |
| Alchemy Light Account v2               |          `$0.00051` |                  `$0.04528` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00059` |                  `$0.05033` |
| Alchemy Light Account                  |          `$0.00064` |                  `$0.05343` |
| Coinbase Smart Wallet                  |          `$0.00067` |                  `$0.05933` |
| Simple Account                         |          `$0.00060` |                  `$0.05176` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000000098` | `2300` | `0.000000015` |   `0.000000112` |      `$0.00036` |
| Alchemy Modular Account                |      `725323` |       `0.000000726` | `2556` | `0.000000016` |   `0.000000742` |      `$0.00237` |
| Biconomy Nexus                         |      `210309` |       `0.000000210` | `3152` | `0.000000020` |   `0.000000230` |      `$0.00074` |
| Biconomy Smart Account v2              |      `197473` |       `0.000000198` | `3140` | `0.000000020` |   `0.000000218` |      `$0.00069` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000000181` | `4564` | `0.000000029` |   `0.000000210` |      `$0.00067` |
| ZeroDev Kernel v2.1                    |      `163890` |       `0.000000164` | `3876` | `0.000000025` |   `0.000000189` |      `$0.00060` |
| Safe v1.4.1                            |      `289207` |       `0.000000289` | `5884` | `0.000000037` |   `0.000000327` |      `$0.00104` |
| Alchemy Light Account v2               |      `143842` |       `0.000000144` | `2288` | `0.000000015` |   `0.000000158` |      `$0.00051` |
| Alchemy Light Account v2 (Multi-Owner) |      `169655` |       `0.000000170` | `2300` | `0.000000015` |   `0.000000184` |      `$0.00059` |
| Alchemy Light Account                  |      `185267` |       `0.000000185` | `2312` | `0.000000015` |   `0.000000200` |      `$0.00064` |
| Coinbase Smart Wallet                  |      `190525` |       `0.000000191` | `2948` | `0.000000019` |   `0.000000209` |      `$0.00067` |
| Simple Account                         |      `174219` |       `0.000000174` | `2372` | `0.000000015` |   `0.000000189` |      `$0.00060` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000005889` | `2300` | `0.000005546` |   `0.000011436` |      `$0.03651` |
| Alchemy Modular Account                |      `725323` |       `0.000043689` | `2556` | `0.000006164` |   `0.000049853` |      `$0.15916` |
| Biconomy Nexus                         |      `210309` |       `0.000012668` | `3152` | `0.000007601` |   `0.000020269` |      `$0.06471` |
| Biconomy Smart Account v2              |      `197473` |       `0.000011895` | `3140` | `0.000007572` |   `0.000019467` |      `$0.06215` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000010870` | `4564` | `0.000011006` |   `0.000021876` |      `$0.06984` |
| ZeroDev Kernel v2.1                    |      `163890` |       `0.000009872` | `3876` | `0.000009347` |   `0.000019219` |      `$0.06136` |
| Safe v1.4.1                            |      `289207` |       `0.000017420` | `5884` | `0.000014189` |   `0.000031609` |      `$0.10092` |
| Alchemy Light Account v2               |      `143842` |       `0.000008664` | `2288` | `0.000005518` |   `0.000014182` |      `$0.04528` |
| Alchemy Light Account v2 (Multi-Owner) |      `169655` |       `0.000010219` | `2300` | `0.000005546` |   `0.000015765` |      `$0.05033` |
| Alchemy Light Account                  |      `185267` |       `0.000011159` | `2312` | `0.000005575` |   `0.000016735` |      `$0.05343` |
| Coinbase Smart Wallet                  |      `190525` |       `0.000011476` | `2948` | `0.000007109` |   `0.000018585` |      `$0.05933` |
| Simple Account                         |      `174219` |       `0.000010494` | `2372` | `0.000005720` |   `0.000016214` |      `$0.05176` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00021` |                  `$0.03031` |
| Alchemy Modular Account                |          `$0.00022` |                  `$0.03057` |
| Biconomy Nexus                         |          `$0.00018` |                  `$0.02962` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00021` |                  `$0.03143` |
| ZeroDev Kernel v2.1                    |          `$0.00020` |                  `$0.03071` |
| Safe v1.4.1                            |          `$0.00034` |                  `$0.05283` |
| Alchemy Light Account v2               |          `$0.00018` |                  `$0.02845` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00018` |                  `$0.02847` |
| Alchemy Light Account                  |          `$0.00018` |                  `$0.02836` |
| Coinbase Smart Wallet                  |          `$0.00018` |                  `$0.02851` |
| Simple Account                         |          `$0.00018` |                  `$0.02845` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000049` | `2712` | `0.000000017` |   `0.000000066` |      `$0.00021` |
| Alchemy Modular Account                |       `50408` |       `0.000000050` | `2712` | `0.000000017` |   `0.000000068` |      `$0.00022` |
| Biconomy Nexus                         |       `39685` |       `0.000000040` | `2856` | `0.000000018` |   `0.000000058` |      `$0.00018` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000049` | `2868` | `0.000000018` |   `0.000000067` |      `$0.00021` |
| ZeroDev Kernel v2.1                    |       `45364` |       `0.000000045` | `2856` | `0.000000018` |   `0.000000064` |      `$0.00020` |
| Safe v1.4.1                            |       `75840` |       `0.000000076` | `4968` | `0.000000032` |   `0.000000107` |      `$0.00034` |
| Alchemy Light Account v2               |       `39368` |       `0.000000039` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Alchemy Light Account v2 (Multi-Owner) |       `39463` |       `0.000000039` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Alchemy Light Account                  |       `39396` |       `0.000000039` | `2700` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Coinbase Smart Wallet                  |       `39681` |       `0.000000040` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |
| Simple Account                         |       `39381` |       `0.000000039` | `2712` | `0.000000017` |   `0.000000057` |      `$0.00018` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000002953` | `2712` | `0.000006540` |   `0.000009493` |      `$0.03031` |
| Alchemy Modular Account                |       `50408` |       `0.000003036` | `2712` | `0.000006540` |   `0.000009576` |      `$0.03057` |
| Biconomy Nexus                         |       `39685` |       `0.000002390` | `2856` | `0.000006887` |   `0.000009278` |      `$0.02962` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000002928` | `2868` | `0.000006916` |   `0.000009844` |      `$0.03143` |
| ZeroDev Kernel v2.1                    |       `45364` |       `0.000002732` | `2856` | `0.000006887` |   `0.000009620` |      `$0.03071` |
| Safe v1.4.1                            |       `75840` |       `0.000004568` | `4968` | `0.000011980` |   `0.000016549` |      `$0.05283` |
| Alchemy Light Account v2               |       `39368` |       `0.000002371` | `2712` | `0.000006540` |   `0.000008911` |      `$0.02845` |
| Alchemy Light Account v2 (Multi-Owner) |       `39463` |       `0.000002377` | `2712` | `0.000006540` |   `0.000008917` |      `$0.02847` |
| Alchemy Light Account                  |       `39396` |       `0.000002373` | `2700` | `0.000006511` |   `0.000008884` |      `$0.02836` |
| Coinbase Smart Wallet                  |       `39681` |       `0.000002390` | `2712` | `0.000006540` |   `0.000008930` |      `$0.02851` |
| Simple Account                         |       `39381` |       `0.000002372` | `2712` | `0.000006540` |   `0.000008912` |      `$0.02845` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00030` |                  `$0.04002` |
| Alchemy Modular Account                |          `$0.00031` |                  `$0.04045` |
| Biconomy Nexus                         |          `$0.00027` |                  `$0.03818` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00030` |                  `$0.03990` |
| ZeroDev Kernel v2.1                    |          `$0.00029` |                  `$0.04051` |
| Safe v1.4.1                            |          `$0.00043` |                  `$0.06260` |
| Alchemy Light Account v2               |          `$0.00027` |                  `$0.03828` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00027` |                  `$0.03830` |
| Alchemy Light Account                  |          `$0.00027` |                  `$0.03819` |
| Coinbase Smart Wallet                  |          `$0.00027` |                  `$0.03835` |
| Simple Account                         |          `$0.00027` |                  `$0.03830` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000000073` | `3376` | `0.000000021` |   `0.000000094` |      `$0.00030` |
| Alchemy Modular Account                |       `74693` |       `0.000000075` | `3388` | `0.000000022` |   `0.000000096` |      `$0.00031` |
| Biconomy Nexus                         |       `63384` |       `0.000000063` | `3376` | `0.000000021` |   `0.000000085` |      `$0.00027` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000000072` | `3376` | `0.000000021` |   `0.000000094` |      `$0.00030` |
| ZeroDev Kernel v2.1                    |       `69230` |       `0.000000069` | `3532` | `0.000000022` |   `0.000000092` |      `$0.00029` |
| Safe v1.4.1                            |       `99715` |       `0.000000100` | `5640` | `0.000000036` |   `0.000000136` |      `$0.00043` |
| Alchemy Light Account v2               |       `63410` |       `0.000000063` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |
| Alchemy Light Account v2 (Multi-Owner) |       `63505` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |
| Alchemy Light Account                  |       `63438` |       `0.000000063` | `3376` | `0.000000021` |   `0.000000085` |      `$0.00027` |
| Coinbase Smart Wallet                  |       `63803` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |
| Simple Account                         |       `63503` |       `0.000000064` | `3388` | `0.000000022` |   `0.000000085` |      `$0.00027` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000004394` | `3376` | `0.000008141` |   `0.000012535` |      `$0.04002` |
| Alchemy Modular Account                |       `74693` |       `0.000004499` | `3388` | `0.000008170` |   `0.000012669` |      `$0.04045` |
| Biconomy Nexus                         |       `63384` |       `0.000003818` | `3376` | `0.000008141` |   `0.000011959` |      `$0.03818` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000004356` | `3376` | `0.000008141` |   `0.000012497` |      `$0.03990` |
| ZeroDev Kernel v2.1                    |       `69230` |       `0.000004170` | `3532` | `0.000008517` |   `0.000012687` |      `$0.04051` |
| Safe v1.4.1                            |       `99715` |       `0.000006006` | `5640` | `0.000013601` |   `0.000019607` |      `$0.06260` |
| Alchemy Light Account v2               |       `63410` |       `0.000003819` | `3388` | `0.000008170` |   `0.000011990` |      `$0.03828` |
| Alchemy Light Account v2 (Multi-Owner) |       `63505` |       `0.000003825` | `3388` | `0.000008170` |   `0.000011995` |      `$0.03830` |
| Alchemy Light Account                  |       `63438` |       `0.000003821` | `3376` | `0.000008141` |   `0.000011962` |      `$0.03819` |
| Coinbase Smart Wallet                  |       `63803` |       `0.000003843` | `3388` | `0.000008170` |   `0.000012013` |      `$0.03835` |
| Simple Account                         |       `63503` |       `0.000003825` | `3388` | `0.000008170` |   `0.000011995` |      `$0.03830` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00056` |                  `$0.06471` |
| Alchemy Modular Account                |          `$0.00057` |                  `$0.06507` |
| Biconomy Nexus                         |          `$0.00053` |                  `$0.06279` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00056` |                  `$0.06460` |
| ZeroDev Kernel v2.1                    |          `$0.00055` |                  `$0.06499` |
| Safe v1.4.1                            |          `$0.00064` |                  `$0.08371` |
| Alchemy Light Account v2               |          `$0.00053` |                  `$0.06279` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00053` |                  `$0.06281` |
| Alchemy Light Account                  |          `$0.00053` |                  `$0.06280` |
| Coinbase Smart Wallet                  |          `$0.00053` |                  `$0.06304` |
| Simple Account                         |          `$0.00053` |                  `$0.06298` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000000146` | `4760` | `0.000000030` |   `0.000000176` |      `$0.00056` |
| Alchemy Modular Account                |      `147781` |       `0.000000148` | `4760` | `0.000000030` |   `0.000000178` |      `$0.00057` |
| Biconomy Nexus                         |      `136403` |       `0.000000136` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000000145` | `4760` | `0.000000030` |   `0.000000176` |      `$0.00056` |
| ZeroDev Kernel v2.1                    |      `142287` |       `0.000000142` | `4888` | `0.000000031` |   `0.000000173` |      `$0.00055` |
| Safe v1.4.1                            |      `155690` |       `0.000000156` | `6984` | `0.000000044` |   `0.000000200` |      `$0.00064` |
| Alchemy Light Account v2               |      `136429` |       `0.000000137` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Alchemy Light Account v2 (Multi-Owner) |      `136524` |       `0.000000137` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Alchemy Light Account                  |      `136457` |       `0.000000137` | `4748` | `0.000000030` |   `0.000000167` |      `$0.00053` |
| Coinbase Smart Wallet                  |      `137243` |       `0.000000137` | `4760` | `0.000000030` |   `0.000000168` |      `$0.00053` |
| Simple Account                         |      `136943` |       `0.000000137` | `4760` | `0.000000030` |   `0.000000167` |      `$0.00053` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000008791` | `4760` | `0.000011479` |   `0.000020270` |      `$0.06471` |
| Alchemy Modular Account                |      `147781` |       `0.000008901` | `4760` | `0.000011479` |   `0.000020380` |      `$0.06507` |
| Biconomy Nexus                         |      `136403` |       `0.000008216` | `4748` | `0.000011450` |   `0.000019666` |      `$0.06279` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000008755` | `4760` | `0.000011479` |   `0.000020234` |      `$0.06460` |
| ZeroDev Kernel v2.1                    |      `142287` |       `0.000008570` | `4888` | `0.000011787` |   `0.000020358` |      `$0.06499` |
| Safe v1.4.1                            |      `155690` |       `0.000009378` | `6984` | `0.000016842` |   `0.000026220` |      `$0.08371` |
| Alchemy Light Account v2               |      `136429` |       `0.000008218` | `4748` | `0.000011450` |   `0.000019667` |      `$0.06279` |
| Alchemy Light Account v2 (Multi-Owner) |      `136524` |       `0.000008223` | `4748` | `0.000011450` |   `0.000019673` |      `$0.06281` |
| Alchemy Light Account                  |      `136457` |       `0.000008219` | `4748` | `0.000011450` |   `0.000019669` |      `$0.06280` |
| Coinbase Smart Wallet                  |      `137243` |       `0.000008267` | `4760` | `0.000011479` |   `0.000019745` |      `$0.06304` |
| Simple Account                         |      `136943` |       `0.000008249` | `4760` | `0.000011479` |   `0.000019727` |      `$0.06298` |

</details>

<!-- /BENCHMARK_RESULTS -->
