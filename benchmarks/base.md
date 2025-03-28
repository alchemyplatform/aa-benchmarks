#### ⛽️ Benchmarks for other networks

[Ethereum Mainnet](/benchmarks/ethereum.md) | [Arbitrum Mainnet](/benchmarks/arbitrum.md) | [Polygon Mainnet](/benchmarks/polygon.md) | [Optimism Mainnet](/benchmarks/optimism.md) | **Base Mainnet** | [Zora Mainnet](/benchmarks/zora.md)

---

<!-- BENCHMARK_RESULTS -->

### Base Mainnet

#### Run parameters

| Parameter            | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------- | ------------------: | --------------------------: |
| Gas price (gwei)     |       `0.019113258` |               `0.156622521` |
| L1 base fee (gwei)   |        `1.28132559` |                     `24.05` |
| L1 base fee scalar   |              `2269` |                      `1101` |
| Blob base fee (wei)  |          `12392261` |               `46930000000` |
| Blob base fee scalar |           `1055762` |                    `659851` |
| ETH price (USD)      |          `$3192.59` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.01431` |                  `$0.16354` |
| Alchemy Modular Account                |          `$0.05247` |                  `$0.47944` |
| Biconomy Nexus                         |          `$0.02100` |                  `$0.22547` |
| Biconomy Smart Account v2              |          `$0.02024` |                  `$0.22276` |
| ZeroDev Kernel v3.1                    |          `$0.02077` |                  `$0.23253` |
| ZeroDev Kernel v2.1                    |          `$0.01819` |                  `$0.20749` |
| Safe v1.4.1                            |          `$0.02671` |                  `$0.29011` |
| Alchemy Light Account v2               |          `$0.01638` |                  `$0.18041` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.01796` |                  `$0.19330` |
| Alchemy Light Account                  |          `$0.01904` |                  `$0.20413` |
| Coinbase Smart Wallet                  |          `$0.01951` |                  `$0.21511` |
| Simple Account                         |          `$0.01824` |                  `$0.19610` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000004453` |  `7508` | `0.000000028` |   `0.000004481` |      `$0.01431` |
| Alchemy Modular Account                |      `858351` |       `0.000016406` |  `8020` | `0.000000030` |   `0.000016436` |      `$0.05247` |
| Biconomy Nexus                         |      `342381` |       `0.000006544` |  `8664` | `0.000000032` |   `0.000006576` |      `$0.02100` |
| Biconomy Smart Account v2              |      `329947` |       `0.000006306` |  `9224` | `0.000000034` |   `0.000006341` |      `$0.02024` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000006468` | `10108` | `0.000000038` |   `0.000006506` |      `$0.02077` |
| ZeroDev Kernel v2.1                    |      `296301` |       `0.000005663` |  `9472` | `0.000000035` |   `0.000005699` |      `$0.01819` |
| Safe v1.4.1                            |      `435486` |       `0.000008324` | `11552` | `0.000000043` |   `0.000008367` |      `$0.02671` |
| Alchemy Light Account v2               |      `266901` |       `0.000005101` |  `7496` | `0.000000028` |   `0.000005129` |      `$0.01638` |
| Alchemy Light Account v2 (Multi-Owner) |      `292822` |       `0.000005597` |  `7484` | `0.000000028` |   `0.000005625` |      `$0.01796` |
| Alchemy Light Account                  |      `310532` |       `0.000005935` |  `7800` | `0.000000029` |   `0.000005964` |      `$0.01904` |
| Coinbase Smart Wallet                  |      `317904` |       `0.000006076` |  `8964` | `0.000000033` |   `0.000006110` |      `$0.01951` |
| Simple Account                         |      `297367` |       `0.000005684` |  `7568` | `0.000000028` |   `0.000005712` |      `$0.01824` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000036494` |  `7508` | `0.000014730` |   `0.000051224` |      `$0.16354` |
| Alchemy Modular Account                |      `858351` |       `0.000134437` |  `8020` | `0.000015734` |   `0.000150172` |      `$0.47944` |
| Biconomy Nexus                         |      `342381` |       `0.000053625` |  `8664` | `0.000016998` |   `0.000070623` |      `$0.22547` |
| Biconomy Smart Account v2              |      `329947` |       `0.000051677` |  `9224` | `0.000018097` |   `0.000069774` |      `$0.22276` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000053004` | `10108` | `0.000019831` |   `0.000072835` |      `$0.23253` |
| ZeroDev Kernel v2.1                    |      `296301` |       `0.000046407` |  `9472` | `0.000018583` |   `0.000064991` |      `$0.20749` |
| Safe v1.4.1                            |      `435486` |       `0.000068207` | `11552` | `0.000022664` |   `0.000090871` |      `$0.29011` |
| Alchemy Light Account v2               |      `266901` |       `0.000041803` |  `7496` | `0.000014706` |   `0.000056509` |      `$0.18041` |
| Alchemy Light Account v2 (Multi-Owner) |      `292822` |       `0.000045863` |  `7484` | `0.000014683` |   `0.000060545` |      `$0.19330` |
| Alchemy Light Account                  |      `310532` |       `0.000048636` |  `7800` | `0.000015303` |   `0.000063939` |      `$0.20413` |
| Coinbase Smart Wallet                  |      `317904` |       `0.000049791` |  `8964` | `0.000017587` |   `0.000067377` |      `$0.21511` |
| Simple Account                         |      `297367` |       `0.000046574` |  `7568` | `0.000014848` |   `0.000061422` |      `$0.19610` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00977` |                  `$0.12294` |
| Alchemy Modular Account                |          `$0.01016` |                  `$0.12795` |
| Biconomy Nexus                         |          `$0.01012` |                  `$0.12783` |
| Biconomy Smart Account v2              |          `$0.00997` |                  `$0.13012` |
| ZeroDev Kernel v3.1                    |          `$0.01174` |                  `$0.14141` |
| ZeroDev Kernel v2.1                    |          `$0.01006` |                  `$0.12798` |
| Safe v1.4.1                            |          `$0.01086` |                  `$0.13497` |
| Alchemy Light Account v2               |          `$0.00930` |                  `$0.11902` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00931` |                  `$0.11907` |
| Alchemy Light Account                  |          `$0.00942` |                  `$0.12184` |
| Coinbase Smart Wallet                  |          `$0.00966` |                  `$0.12724` |
| Simple Account                         |          `$0.00930` |                  `$0.11895` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000003034` | `6956` | `0.000000026` |   `0.000003060` |      `$0.00977` |
| Alchemy Modular Account                |      `165100` |       `0.000003156` | `7248` | `0.000000027` |   `0.000003183` |      `$0.01016` |
| Biconomy Nexus                         |      `164351` |       `0.000003141` | `7288` | `0.000000027` |   `0.000003168` |      `$0.01012` |
| Biconomy Smart Account v2              |      `161912` |       `0.000003095` | `7848` | `0.000000029` |   `0.000003124` |      `$0.00997` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000003649` | `7336` | `0.000000027` |   `0.000003676` |      `$0.01174` |
| ZeroDev Kernel v2.1                    |      `163398` |       `0.000003123` | `7388` | `0.000000028` |   `0.000003151` |      `$0.01006` |
| Safe v1.4.1                            |      `176479` |       `0.000003373` | `7460` | `0.000000028` |   `0.000003401` |      `$0.01086` |
| Alchemy Light Account v2               |      `151040` |       `0.000002887` | `6944` | `0.000000026` |   `0.000002913` |      `$0.00930` |
| Alchemy Light Account v2 (Multi-Owner) |      `151148` |       `0.000002889` | `6944` | `0.000000026` |   `0.000002915` |      `$0.00931` |
| Alchemy Light Account                  |      `152880` |       `0.000002922` | `7248` | `0.000000027` |   `0.000002949` |      `$0.00942` |
| Coinbase Smart Wallet                  |      `156812` |       `0.000002997` | `7796` | `0.000000029` |   `0.000003026` |      `$0.00966` |
| Simple Account                         |      `151045` |       `0.000002887` | `6932` | `0.000000026` |   `0.000002913` |      `$0.00930` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000024860` | `6956` | `0.000013647` |   `0.000038507` |      `$0.12294` |
| Alchemy Modular Account                |      `165100` |       `0.000025858` | `7248` | `0.000014220` |   `0.000040078` |      `$0.12795` |
| Biconomy Nexus                         |      `164351` |       `0.000025741` | `7288` | `0.000014298` |   `0.000040039` |      `$0.12783` |
| Biconomy Smart Account v2              |      `161912` |       `0.000025359` | `7848` | `0.000015397` |   `0.000040756` |      `$0.13012` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000029901` | `7336` | `0.000014393` |   `0.000044294` |      `$0.14141` |
| ZeroDev Kernel v2.1                    |      `163398` |       `0.000025592` | `7388` | `0.000014495` |   `0.000040086` |      `$0.12798` |
| Safe v1.4.1                            |      `176479` |       `0.000027641` | `7460` | `0.000014636` |   `0.000042276` |      `$0.13497` |
| Alchemy Light Account v2               |      `151040` |       `0.000023656` | `6944` | `0.000013623` |   `0.000037280` |      `$0.11902` |
| Alchemy Light Account v2 (Multi-Owner) |      `151148` |       `0.000023673` | `6944` | `0.000013623` |   `0.000037297` |      `$0.11907` |
| Alchemy Light Account                  |      `152880` |       `0.000023944` | `7248` | `0.000014220` |   `0.000038164` |      `$0.12184` |
| Coinbase Smart Wallet                  |      `156812` |       `0.000024560` | `7796` | `0.000015295` |   `0.000039855` |      `$0.12724` |
| Simple Account                         |      `151045` |       `0.000023657` | `6932` | `0.000013600` |   `0.000037257` |      `$0.11895` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.01124` |                  `$0.13912` |
| Alchemy Modular Account                |          `$0.01166` |                  `$0.14436` |
| Biconomy Nexus                         |          `$0.01157` |                  `$0.14305` |
| Biconomy Smart Account v2              |          `$0.01144` |                  `$0.14638` |
| ZeroDev Kernel v3.1                    |          `$0.01320` |                  `$0.15662` |
| ZeroDev Kernel v2.1                    |          `$0.01154` |                  `$0.14429` |
| Safe v1.4.1                            |          `$0.01235` |                  `$0.15123` |
| Alchemy Light Account v2               |          `$0.01078` |                  `$0.13530` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.01079` |                  `$0.13536` |
| Alchemy Light Account                  |          `$0.01090` |                  `$0.13804` |
| Coinbase Smart Wallet                  |          `$0.01115` |                  `$0.14348` |
| Simple Account                         |          `$0.01079` |                  `$0.13535` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000003491` | `7628` | `0.000000028` |   `0.000003520` |      `$0.01124` |
| Alchemy Modular Account                |      `189487` |       `0.000003622` | `7920` | `0.000000030` |   `0.000003651` |      `$0.01166` |
| Biconomy Nexus                         |      `188136` |       `0.000003596` | `7820` | `0.000000029` |   `0.000003625` |      `$0.01157` |
| Biconomy Smart Account v2              |      `185868` |       `0.000003553` | `8532` | `0.000000032` |   `0.000003584` |      `$0.01144` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000004106` | `7856` | `0.000000029` |   `0.000004135` |      `$0.01320` |
| ZeroDev Kernel v2.1                    |      `187609` |       `0.000003586` | `8060` | `0.000000030` |   `0.000003616` |      `$0.01154` |
| Safe v1.4.1                            |      `200732` |       `0.000003837` | `8120` | `0.000000030` |   `0.000003867` |      `$0.01235` |
| Alchemy Light Account v2               |      `175186` |       `0.000003348` | `7616` | `0.000000028` |   `0.000003377` |      `$0.01078` |
| Alchemy Light Account v2 (Multi-Owner) |      `175294` |       `0.000003350` | `7616` | `0.000000028` |   `0.000003379` |      `$0.01079` |
| Alchemy Light Account                  |      `177013` |       `0.000003383` | `7908` | `0.000000029` |   `0.000003413` |      `$0.01090` |
| Coinbase Smart Wallet                  |      `181014` |       `0.000003460` | `8456` | `0.000000031` |   `0.000003491` |      `$0.01115` |
| Simple Account                         |      `175283` |       `0.000003350` | `7616` | `0.000000028` |   `0.000003379` |      `$0.01079` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000028609` | `7628` | `0.000014965` |   `0.000043575` |      `$0.13912` |
| Alchemy Modular Account                |      `189487` |       `0.000029678` | `7920` | `0.000015538` |   `0.000045216` |      `$0.14436` |
| Biconomy Nexus                         |      `188136` |       `0.000029466` | `7820` | `0.000015342` |   `0.000044808` |      `$0.14305` |
| Biconomy Smart Account v2              |      `185868` |       `0.000029111` | `8532` | `0.000016739` |   `0.000045850` |      `$0.14638` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000033645` | `7856` | `0.000015413` |   `0.000049058` |      `$0.15662` |
| ZeroDev Kernel v2.1                    |      `187609` |       `0.000029384` | `8060` | `0.000015813` |   `0.000045197` |      `$0.14429` |
| Safe v1.4.1                            |      `200732` |       `0.000031439` | `8120` | `0.000015931` |   `0.000047370` |      `$0.15123` |
| Alchemy Light Account v2               |      `175186` |       `0.000027438` | `7616` | `0.000014942` |   `0.000042380` |      `$0.13530` |
| Alchemy Light Account v2 (Multi-Owner) |      `175294` |       `0.000027455` | `7616` | `0.000014942` |   `0.000042397` |      `$0.13536` |
| Alchemy Light Account                  |      `177013` |       `0.000027724` | `7908` | `0.000015515` |   `0.000043239` |      `$0.13804` |
| Coinbase Smart Wallet                  |      `181014` |       `0.000028351` | `8456` | `0.000016590` |   `0.000044941` |      `$0.14348` |
| Simple Account                         |      `175283` |       `0.000027453` | `7616` | `0.000014942` |   `0.000042395` |      `$0.13535` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.01242` |                  `$0.15740` |
| Alchemy Modular Account                |          `$0.01284` |                  `$0.16260` |
| Biconomy Nexus                         |          `$0.01276` |                  `$0.16120` |
| Biconomy Smart Account v2              |          `$0.01263` |                  `$0.16452` |
| ZeroDev Kernel v3.1                    |          `$0.01441` |                  `$0.17490` |
| ZeroDev Kernel v2.1                    |          `$0.01276` |                  `$0.16268` |
| Safe v1.4.1                            |          `$0.01357` |                  `$0.16974` |
| Alchemy Light Account v2               |          `$0.01196` |                  `$0.15351` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.01197` |                  `$0.15341` |
| Alchemy Light Account                  |          `$0.01208` |                  `$0.15633` |
| Coinbase Smart Wallet                  |          `$0.01236` |                  `$0.16190` |
| Simple Account                         |          `$0.01200` |                  `$0.15377` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000003857` | `9020` | `0.000000034` |   `0.000003890` |      `$0.01242` |
| Alchemy Modular Account                |      `208682` |       `0.000003989` | `9300` | `0.000000035` |   `0.000004023` |      `$0.01284` |
| Biconomy Nexus                         |      `207286` |       `0.000003962` | `9188` | `0.000000034` |   `0.000003996` |      `$0.01276` |
| Biconomy Smart Account v2              |      `205018` |       `0.000003919` | `9900` | `0.000000037` |   `0.000003955` |      `$0.01263` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000004480` | `9212` | `0.000000034` |   `0.000004514` |      `$0.01441` |
| ZeroDev Kernel v2.1                    |      `207241` |       `0.000003961` | `9428` | `0.000000035` |   `0.000003996` |      `$0.01276` |
| Safe v1.4.1                            |      `220464` |       `0.000004214` | `9500` | `0.000000035` |   `0.000004249` |      `$0.01357` |
| Alchemy Light Account v2               |      `194311` |       `0.000003714` | `8996` | `0.000000034` |   `0.000003747` |      `$0.01196` |
| Alchemy Light Account v2 (Multi-Owner) |      `194407` |       `0.000003716` | `8972` | `0.000000033` |   `0.000003749` |      `$0.01197` |
| Alchemy Light Account                  |      `196151` |       `0.000003749` | `9300` | `0.000000035` |   `0.000003784` |      `$0.01208` |
| Coinbase Smart Wallet                  |      `200573` |       `0.000003834` | `9836` | `0.000000037` |   `0.000003870` |      `$0.01236` |
| Simple Account                         |      `194829` |       `0.000003724` | `8996` | `0.000000034` |   `0.000003757` |      `$0.01200` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000031605` | `9020` | `0.000017696` |   `0.000049301` |      `$0.15740` |
| Alchemy Modular Account                |      `208682` |       `0.000032684` | `9300` | `0.000018246` |   `0.000050930` |      `$0.16260` |
| Biconomy Nexus                         |      `207286` |       `0.000032466` | `9188` | `0.000018026` |   `0.000050492` |      `$0.16120` |
| Biconomy Smart Account v2              |      `205018` |       `0.000032110` | `9900` | `0.000019423` |   `0.000051533` |      `$0.16452` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000036709` | `9212` | `0.000018073` |   `0.000054782` |      `$0.17490` |
| ZeroDev Kernel v2.1                    |      `207241` |       `0.000032459` | `9428` | `0.000018497` |   `0.000050955` |      `$0.16268` |
| Safe v1.4.1                            |      `220464` |       `0.000034530` | `9500` | `0.000018638` |   `0.000053168` |      `$0.16974` |
| Alchemy Light Account v2               |      `194311` |       `0.000030433` | `8996` | `0.000017649` |   `0.000048083` |      `$0.15351` |
| Alchemy Light Account v2 (Multi-Owner) |      `194407` |       `0.000030449` | `8972` | `0.000017602` |   `0.000048051` |      `$0.15341` |
| Alchemy Light Account                  |      `196151` |       `0.000030722` | `9300` | `0.000018246` |   `0.000048967` |      `$0.15633` |
| Coinbase Smart Wallet                  |      `200573` |       `0.000031414` | `9836` | `0.000019297` |   `0.000050712` |      `$0.16190` |
| Simple Account                         |      `194829` |       `0.000030515` | `8996` | `0.000017649` |   `0.000048164` |      `$0.15377` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.03037` |                  `$0.33365` |
| Alchemy Modular Account                |          `$0.06015` |                  `$0.58005` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |          `$0.01310` |                  `$0.17269` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.01801` |                  `$0.22578` |
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
| Alchemy Modular Account v2             |      `495041` |       `0.000009462` | `13748` | `0.000000051` |   `0.000009513` |      `$0.03037` |
| Alchemy Modular Account                |      `983001` |       `0.000018788` | `14132` | `0.000000053` |   `0.000018841` |      `$0.06015` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `212577` |       `0.000004063` | `10600` | `0.000000039` |   `0.000004103` |      `$0.01310` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `292655` |       `0.000005594` | `12684` | `0.000000047` |   `0.000005641` |      `$0.01801` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000077535` | `13748` | `0.000026972` |   `0.000104507` |      `$0.33365` |
| Alchemy Modular Account                |      `983001` |       `0.000153960` | `14132` | `0.000027726` |   `0.000181686` |      `$0.58005` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `212577` |       `0.000033294` | `10600` | `0.000020796` |   `0.000054091` |      `$0.17269` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `292655` |       `0.000045836` | `12684` | `0.000024885` |   `0.000070721` |      `$0.22578` |
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
| Alchemy Modular Account v2             |          `$0.01058` |                  `$0.13004` |
| Alchemy Modular Account                |          `$0.01009` |                  `$0.13242` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.00788` |                  `$0.12516` |
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
| Alchemy Modular Account v2             |      `172036` |       `0.000003288` | `7028` | `0.000000026` |   `0.000003314` |      `$0.01058` |
| Alchemy Modular Account                |      `163716` |       `0.000003129` | `8072` | `0.000000030` |   `0.000003159` |      `$0.01009` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `127202` |       `0.000002431` | `9828` | `0.000000037` |   `0.000002468` |      `$0.00788` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000026945` | `7028` | `0.000013788` |   `0.000040733` |      `$0.13004` |
| Alchemy Modular Account                |      `163716` |       `0.000025642` | `8072` | `0.000015836` |   `0.000041478` |      `$0.13242` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `127202` |       `0.000019923` | `9828` | `0.000019282` |   `0.000039204` |      `$0.12516` |
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
| Alchemy Modular Account v2             |          `$0.01213` |                  `$0.14688` |
| Alchemy Modular Account                |          `$0.01200` |                  `$0.15217` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |          `$0.00911` |                  `$0.14467` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.00948` |                  `$0.14437` |
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
| Alchemy Modular Account v2             |      `197295` |       `0.000003771` |  `7700` | `0.000000029` |   `0.000003800` |      `$0.01213` |
| Alchemy Modular Account                |      `194942` |       `0.000003726` |  `8732` | `0.000000033` |   `0.000003759` |      `$0.01200` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `147023` |       `0.000002810` | `11360` | `0.000000042` |   `0.000002852` |      `$0.00911` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `153240` |       `0.000002929` | `10816` | `0.000000040` |   `0.000002969` |      `$0.00948` |
| Safe v1.4.1                            |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000030901` |  `7700` | `0.000015107` |   `0.000046008` |      `$0.14688` |
| Alchemy Modular Account                |      `194942` |       `0.000030532` |  `8732` | `0.000017131` |   `0.000047664` |      `$0.15217` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `147023` |       `0.000023027` | `11360` | `0.000022287` |   `0.000045314` |      `$0.14467` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `153240` |       `0.000024001` | `10816` | `0.000021220` |   `0.000045221` |      `$0.14437` |
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
| Alchemy Modular Account v2             |          `$0.00599` |                  `$0.06330` |
| Alchemy Modular Account                |          `$0.04429` |                  `$0.37869` |
| Biconomy Nexus                         |          `$0.01287` |                  `$0.12490` |
| Biconomy Smart Account v2              |          `$0.01209` |                  `$0.11841` |
| ZeroDev Kernel v3.1                    |          `$0.01107` |                  `$0.11883` |
| ZeroDev Kernel v2.1                    |          `$0.01005` |                  `$0.10623` |
| Safe v1.4.1                            |          `$0.01772` |                  `$0.18147` |
| Alchemy Light Account v2               |          `$0.00880` |                  `$0.08626` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.01038` |                  `$0.09924` |
| Alchemy Light Account                  |          `$0.01133` |                  `$0.10712` |
| Coinbase Smart Wallet                  |          `$0.01166` |                  `$0.11373` |
| Simple Account                         |          `$0.01066` |                  `$0.10197` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000001869` | `2300` | `0.000000009` |   `0.000001877` |      `$0.00599` |
| Alchemy Modular Account                |      `725323` |       `0.000013863` | `2556` | `0.000000010` |   `0.000013873` |      `$0.04429` |
| Biconomy Nexus                         |      `210309` |       `0.000004020` | `3152` | `0.000000012` |   `0.000004031` |      `$0.01287` |
| Biconomy Smart Account v2              |      `197473` |       `0.000003774` | `3140` | `0.000000012` |   `0.000003786` |      `$0.01209` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000003449` | `4564` | `0.000000017` |   `0.000003466` |      `$0.01107` |
| ZeroDev Kernel v2.1                    |      `163890` |       `0.000003132` | `3876` | `0.000000014` |   `0.000003147` |      `$0.01005` |
| Safe v1.4.1                            |      `289207` |       `0.000005528` | `5884` | `0.000000022` |   `0.000005550` |      `$0.01772` |
| Alchemy Light Account v2               |      `143842` |       `0.000002749` | `2288` | `0.000000009` |   `0.000002758` |      `$0.00880` |
| Alchemy Light Account v2 (Multi-Owner) |      `169655` |       `0.000003243` | `2300` | `0.000000009` |   `0.000003251` |      `$0.01038` |
| Alchemy Light Account                  |      `185267` |       `0.000003541` | `2312` | `0.000000009` |   `0.000003550` |      `$0.01133` |
| Coinbase Smart Wallet                  |      `190525` |       `0.000003642` | `2948` | `0.000000011` |   `0.000003653` |      `$0.01166` |
| Simple Account                         |      `174219` |       `0.000003330` | `2372` | `0.000000009` |   `0.000003339` |      `$0.01066` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000015313` | `2300` | `0.000004512` |   `0.000019826` |      `$0.06330` |
| Alchemy Modular Account                |      `725323` |       `0.000113602` | `2556` | `0.000005015` |   `0.000118617` |      `$0.37869` |
| Biconomy Nexus                         |      `210309` |       `0.000032939` | `3152` | `0.000006184` |   `0.000039123` |      `$0.12490` |
| Biconomy Smart Account v2              |      `197473` |       `0.000030929` | `3140` | `0.000006160` |   `0.000037089` |      `$0.11841` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000028265` | `4564` | `0.000008954` |   `0.000037219` |      `$0.11883` |
| ZeroDev Kernel v2.1                    |      `163890` |       `0.000025669` | `3876` | `0.000007604` |   `0.000033273` |      `$0.10623` |
| Safe v1.4.1                            |      `289207` |       `0.000045296` | `5884` | `0.000011544` |   `0.000056840` |      `$0.18147` |
| Alchemy Light Account v2               |      `143842` |       `0.000022529` | `2288` | `0.000004489` |   `0.000027018` |      `$0.08626` |
| Alchemy Light Account v2 (Multi-Owner) |      `169655` |       `0.000026572` | `2300` | `0.000004512` |   `0.000031084` |      `$0.09924` |
| Alchemy Light Account                  |      `185267` |       `0.000029017` | `2312` | `0.000004536` |   `0.000033553` |      `$0.10712` |
| Coinbase Smart Wallet                  |      `190525` |       `0.000029841` | `2948` | `0.000005784` |   `0.000035624` |      `$0.11373` |
| Simple Account                         |      `174219` |       `0.000027287` | `2372` | `0.000004654` |   `0.000031940` |      `$0.10197` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00302` |                  `$0.04150` |
| Alchemy Modular Account                |          `$0.00311` |                  `$0.04219` |
| Biconomy Nexus                         |          `$0.00246` |                  `$0.03773` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00300` |                  `$0.04227` |
| ZeroDev Kernel v2.1                    |          `$0.00280` |                  `$0.04057` |
| Safe v1.4.1                            |          `$0.00469` |                  `$0.06904` |
| Alchemy Light Account v2               |          `$0.00243` |                  `$0.03667` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00244` |                  `$0.03672` |
| Alchemy Light Account                  |          `$0.00244` |                  `$0.03661` |
| Coinbase Smart Wallet                  |          `$0.00245` |                  `$0.03683` |
| Simple Account                         |          `$0.00244` |                  `$0.03668` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000937` | `2712` | `0.000000010` |   `0.000000947` |      `$0.00302` |
| Alchemy Modular Account                |       `50408` |       `0.000000963` | `2712` | `0.000000010` |   `0.000000974` |      `$0.00311` |
| Biconomy Nexus                         |       `39685` |       `0.000000759` | `2856` | `0.000000011` |   `0.000000769` |      `$0.00246` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000929` | `2868` | `0.000000011` |   `0.000000940` |      `$0.00300` |
| ZeroDev Kernel v2.1                    |       `45364` |       `0.000000867` | `2856` | `0.000000011` |   `0.000000878` |      `$0.00280` |
| Safe v1.4.1                            |       `75840` |       `0.000001450` | `4968` | `0.000000019` |   `0.000001468` |      `$0.00469` |
| Alchemy Light Account v2               |       `39368` |       `0.000000752` | `2712` | `0.000000010` |   `0.000000763` |      `$0.00243` |
| Alchemy Light Account v2 (Multi-Owner) |       `39463` |       `0.000000754` | `2712` | `0.000000010` |   `0.000000764` |      `$0.00244` |
| Alchemy Light Account                  |       `39396` |       `0.000000753` | `2700` | `0.000000010` |   `0.000000763` |      `$0.00244` |
| Coinbase Smart Wallet                  |       `39681` |       `0.000000758` | `2712` | `0.000000010` |   `0.000000769` |      `$0.00245` |
| Simple Account                         |       `39381` |       `0.000000753` | `2712` | `0.000000010` |   `0.000000763` |      `$0.00244` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000007678` | `2712` | `0.000005321` |   `0.000012998` |      `$0.04150` |
| Alchemy Modular Account                |       `50408` |       `0.000007895` | `2712` | `0.000005321` |   `0.000013216` |      `$0.04219` |
| Biconomy Nexus                         |       `39685` |       `0.000006216` | `2856` | `0.000005603` |   `0.000011819` |      `$0.03773` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000007614` | `2868` | `0.000005627` |   `0.000013241` |      `$0.04227` |
| ZeroDev Kernel v2.1                    |       `45364` |       `0.000007105` | `2856` | `0.000005603` |   `0.000012708` |      `$0.04057` |
| Safe v1.4.1                            |       `75840` |       `0.000011878` | `4968` | `0.000009747` |   `0.000021625` |      `$0.06904` |
| Alchemy Light Account v2               |       `39368` |       `0.000006166` | `2712` | `0.000005321` |   `0.000011487` |      `$0.03667` |
| Alchemy Light Account v2 (Multi-Owner) |       `39463` |       `0.000006181` | `2712` | `0.000005321` |   `0.000011501` |      `$0.03672` |
| Alchemy Light Account                  |       `39396` |       `0.000006170` | `2700` | `0.000005297` |   `0.000011467` |      `$0.03661` |
| Coinbase Smart Wallet                  |       `39681` |       `0.000006215` | `2712` | `0.000005321` |   `0.000011536` |      `$0.03683` |
| Simple Account                         |       `39381` |       `0.000006168` | `2712` | `0.000005321` |   `0.000011489` |      `$0.03668` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00449` |                  `$0.05762` |
| Alchemy Modular Account                |          `$0.00460` |                  `$0.05857` |
| Biconomy Nexus                         |          `$0.00391` |                  `$0.05284` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00445` |                  `$0.05731` |
| ZeroDev Kernel v2.1                    |          `$0.00427` |                  `$0.05674` |
| Safe v1.4.1                            |          `$0.00615` |                  `$0.08519` |
| Alchemy Light Account v2               |          `$0.00391` |                  `$0.05293` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00392` |                  `$0.05298` |
| Alchemy Light Account                  |          `$0.00391` |                  `$0.05287` |
| Coinbase Smart Wallet                  |          `$0.00393` |                  `$0.05312` |
| Simple Account                         |          `$0.00392` |                  `$0.05297` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000001394` | `3376` | `0.000000013` |   `0.000001407` |      `$0.00449` |
| Alchemy Modular Account                |       `74693` |       `0.000001428` | `3388` | `0.000000013` |   `0.000001440` |      `$0.00460` |
| Biconomy Nexus                         |       `63384` |       `0.000001211` | `3376` | `0.000000013` |   `0.000001224` |      `$0.00391` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000001382` | `3376` | `0.000000013` |   `0.000001395` |      `$0.00445` |
| ZeroDev Kernel v2.1                    |       `69230` |       `0.000001323` | `3532` | `0.000000013` |   `0.000001336` |      `$0.00427` |
| Safe v1.4.1                            |       `99715` |       `0.000001906` | `5640` | `0.000000021` |   `0.000001927` |      `$0.00615` |
| Alchemy Light Account v2               |       `63410` |       `0.000001212` | `3388` | `0.000000013` |   `0.000001225` |      `$0.00391` |
| Alchemy Light Account v2 (Multi-Owner) |       `63505` |       `0.000001214` | `3388` | `0.000000013` |   `0.000001226` |      `$0.00392` |
| Alchemy Light Account                  |       `63438` |       `0.000001213` | `3376` | `0.000000013` |   `0.000001225` |      `$0.00391` |
| Coinbase Smart Wallet                  |       `63803` |       `0.000001219` | `3388` | `0.000000013` |   `0.000001232` |      `$0.00393` |
| Simple Account                         |       `63503` |       `0.000001214` | `3388` | `0.000000013` |   `0.000001226` |      `$0.00392` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000011425` | `3376` | `0.000006623` |   `0.000018048` |      `$0.05762` |
| Alchemy Modular Account                |       `74693` |       `0.000011699` | `3388` | `0.000006647` |   `0.000018346` |      `$0.05857` |
| Biconomy Nexus                         |       `63384` |       `0.000009927` | `3376` | `0.000006623` |   `0.000016551` |      `$0.05284` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000011326` | `3376` | `0.000006623` |   `0.000017950` |      `$0.05731` |
| ZeroDev Kernel v2.1                    |       `69230` |       `0.000010843` | `3532` | `0.000006929` |   `0.000017772` |      `$0.05674` |
| Safe v1.4.1                            |       `99715` |       `0.000015618` | `5640` | `0.000011065` |   `0.000026683` |      `$0.08519` |
| Alchemy Light Account v2               |       `63410` |       `0.000009931` | `3388` | `0.000006647` |   `0.000016578` |      `$0.05293` |
| Alchemy Light Account v2 (Multi-Owner) |       `63505` |       `0.000009946` | `3388` | `0.000006647` |   `0.000016593` |      `$0.05298` |
| Alchemy Light Account                  |       `63438` |       `0.000009936` | `3376` | `0.000006623` |   `0.000016559` |      `$0.05287` |
| Coinbase Smart Wallet                  |       `63803` |       `0.000009993` | `3388` | `0.000006647` |   `0.000016640` |      `$0.05312` |
| Simple Account                         |       `63503` |       `0.000009946` | `3388` | `0.000006647` |   `0.000016593` |      `$0.05297` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.00896` |                  `$0.10280` |
| Alchemy Modular Account                |          `$0.00907` |                  `$0.10371` |
| Biconomy Nexus                         |          `$0.00838` |                  `$0.09795` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.00893` |                  `$0.10250` |
| ZeroDev Kernel v2.1                    |          `$0.00874` |                  `$0.10176` |
| Safe v1.4.1                            |          `$0.00958` |                  `$0.12159` |
| Alchemy Light Account v2               |          `$0.00838` |                  `$0.09796` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.00839` |                  `$0.09801` |
| Alchemy Light Account                  |          `$0.00838` |                  `$0.09797` |
| Coinbase Smart Wallet                  |          `$0.00843` |                  `$0.09844` |
| Simple Account                         |          `$0.00841` |                  `$0.09829` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000002790` | `4760` | `0.000000018` |   `0.000002807` |      `$0.00896` |
| Alchemy Modular Account                |      `147781` |       `0.000002825` | `4760` | `0.000000018` |   `0.000002842` |      `$0.00907` |
| Biconomy Nexus                         |      `136403` |       `0.000002607` | `4748` | `0.000000018` |   `0.000002625` |      `$0.00838` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000002778` | `4760` | `0.000000018` |   `0.000002796` |      `$0.00893` |
| ZeroDev Kernel v2.1                    |      `142287` |       `0.000002720` | `4888` | `0.000000018` |   `0.000002738` |      `$0.00874` |
| Safe v1.4.1                            |      `155690` |       `0.000002976` | `6984` | `0.000000026` |   `0.000003002` |      `$0.00958` |
| Alchemy Light Account v2               |      `136429` |       `0.000002608` | `4748` | `0.000000018` |   `0.000002625` |      `$0.00838` |
| Alchemy Light Account v2 (Multi-Owner) |      `136524` |       `0.000002609` | `4748` | `0.000000018` |   `0.000002627` |      `$0.00839` |
| Alchemy Light Account                  |      `136457` |       `0.000002608` | `4748` | `0.000000018` |   `0.000002626` |      `$0.00838` |
| Coinbase Smart Wallet                  |      `137243` |       `0.000002623` | `4760` | `0.000000018` |   `0.000002641` |      `$0.00843` |
| Simple Account                         |      `136943` |       `0.000002617` | `4760` | `0.000000018` |   `0.000002635` |      `$0.00841` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000022860` | `4760` | `0.000009339` |   `0.000032199` |      `$0.10280` |
| Alchemy Modular Account                |      `147781` |       `0.000023146` | `4760` | `0.000009339` |   `0.000032484` |      `$0.10371` |
| Biconomy Nexus                         |      `136403` |       `0.000021364` | `4748` | `0.000009315` |   `0.000030679` |      `$0.09795` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000022766` | `4760` | `0.000009339` |   `0.000032105` |      `$0.10250` |
| ZeroDev Kernel v2.1                    |      `142287` |       `0.000022285` | `4888` | `0.000009590` |   `0.000031875` |      `$0.10176` |
| Safe v1.4.1                            |      `155690` |       `0.000024385` | `6984` | `0.000013702` |   `0.000038087` |      `$0.12159` |
| Alchemy Light Account v2               |      `136429` |       `0.000021368` | `4748` | `0.000009315` |   `0.000030683` |      `$0.09796` |
| Alchemy Light Account v2 (Multi-Owner) |      `136524` |       `0.000021383` | `4748` | `0.000009315` |   `0.000030698` |      `$0.09801` |
| Alchemy Light Account                  |      `136457` |       `0.000021372` | `4748` | `0.000009315` |   `0.000030687` |      `$0.09797` |
| Coinbase Smart Wallet                  |      `137243` |       `0.000021495` | `4760` | `0.000009339` |   `0.000030834` |      `$0.09844` |
| Simple Account                         |      `136943` |       `0.000021448` | `4760` | `0.000009339` |   `0.000030787` |      `$0.09829` |

</details>

<!-- /BENCHMARK_RESULTS -->
