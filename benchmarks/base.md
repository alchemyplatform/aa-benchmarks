#### ⛽️ Benchmarks for other networks

[Ethereum Mainnet](/benchmarks/ethereum.md) | [Arbitrum Mainnet](/benchmarks/arbitrum.md) | [Polygon Mainnet](/benchmarks/polygon.md) | [Optimism Mainnet](/benchmarks/optimism.md) | **Base Mainnet** | [Zora Mainnet](/benchmarks/zora.md)

---

<!-- BENCHMARK_RESULTS -->

### Base Mainnet

#### Run parameters

| Parameter            |        Latest | High Blob Fees |
| :------------------- | ------------: | -------------: |
| Gas price (gwei)     | `0.019113258` |  `0.156622521` |
| L1 base fee (gwei)   |  `1.28132559` |        `24.05` |
| L1 base fee scalar   |        `2269` |         `1101` |
| Blob base fee (wei)  |    `12392261` |  `46930000000` |
| Blob base fee scalar |     `1055762` |       `659851` |
| ETH price (USD)      |    `$3192.59` |            `-` |

#### User Operation: Account creation

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.01431` |                `$0.16354` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |        `$0.02100` |                `$0.22547` |         `146.75%` |                 `137.87%` |
| ZeroDev Kernel v3.1                    |        `$0.02077` |                `$0.23253` |         `145.18%` |                 `142.19%` |
| Safe v1.4.1 (non-modular)              |        `$0.02671` |                `$0.29011` |         `186.69%` |                 `177.40%` |
| Alchemy Light Account v2 (non-modular) |        `$0.01796` |                `$0.19330` |         `125.51%` |                 `118.20%` |
| Coinbase Smart Wallet (non-modular)    |        `$0.01951` |                `$0.21511` |         `136.33%` |                 `131.54%` |
| Simple Account (non-modular)           |        `$0.01824` |                `$0.19610` |         `127.46%` |                 `119.91%` |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000004453` |  `7508` | `0.000000028` |   `0.000004481` |      `$0.01431` |
| Biconomy Nexus                         |      `342381` |       `0.000006544` |  `8664` | `0.000000032` |   `0.000006576` |      `$0.02100` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000006468` | `10108` | `0.000000038` |   `0.000006506` |      `$0.02077` |
| Safe v1.4.1 (non-modular)              |      `435486` |       `0.000008324` | `11552` | `0.000000043` |   `0.000008367` |      `$0.02671` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.000005597` |  `7484` | `0.000000028` |   `0.000005625` |      `$0.01796` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.000006076` |  `8964` | `0.000000033` |   `0.000006110` |      `$0.01951` |
| Simple Account (non-modular)           |      `297367` |       `0.000005684` |  `7568` | `0.000000028` |   `0.000005712` |      `$0.01824` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000036494` |  `7508` | `0.000014730` |   `0.000051224` |      `$0.16354` |
| Biconomy Nexus                         |      `342381` |       `0.000053625` |  `8664` | `0.000016998` |   `0.000070623` |      `$0.22547` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000053004` | `10108` | `0.000019831` |   `0.000072835` |      `$0.23253` |
| Safe v1.4.1 (non-modular)              |      `435486` |       `0.000068207` | `11552` | `0.000022664` |   `0.000090871` |      `$0.29011` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.000045863` |  `7484` | `0.000014683` |   `0.000060545` |      `$0.19330` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.000049791` |  `8964` | `0.000017587` |   `0.000067377` |      `$0.21511` |
| Simple Account (non-modular)           |      `297367` |       `0.000046574` |  `7568` | `0.000014848` |   `0.000061422` |      `$0.19610` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.00977` |                `$0.12294` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |        `$0.01012` |                `$0.12783` |         `103.55%` |                 `103.98%` |
| ZeroDev Kernel v3.1                    |        `$0.01174` |                `$0.14141` |         `120.15%` |                 `115.03%` |
| Safe v1.4.1 (non-modular)              |        `$0.01086` |                `$0.13497` |         `111.15%` |                 `109.79%` |
| Alchemy Light Account v2 (non-modular) |        `$0.00931` |                `$0.11907` |          `95.27%` |                  `96.86%` |
| Coinbase Smart Wallet (non-modular)    |        `$0.00966` |                `$0.12724` |          `98.91%` |                 `103.50%` |
| Simple Account (non-modular)           |        `$0.00930` |                `$0.11895` |          `95.20%` |                  `96.75%` |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000003034` | `6956` | `0.000000026` |   `0.000003060` |      `$0.00977` |
| Biconomy Nexus                         |      `164351` |       `0.000003141` | `7288` | `0.000000027` |   `0.000003168` |      `$0.01012` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000003649` | `7336` | `0.000000027` |   `0.000003676` |      `$0.01174` |
| Safe v1.4.1 (non-modular)              |      `176479` |       `0.000003373` | `7460` | `0.000000028` |   `0.000003401` |      `$0.01086` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.000002889` | `6944` | `0.000000026` |   `0.000002915` |      `$0.00931` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.000002997` | `7796` | `0.000000029` |   `0.000003026` |      `$0.00966` |
| Simple Account (non-modular)           |      `151045` |       `0.000002887` | `6932` | `0.000000026` |   `0.000002913` |      `$0.00930` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000024860` | `6956` | `0.000013647` |   `0.000038507` |      `$0.12294` |
| Biconomy Nexus                         |      `164351` |       `0.000025741` | `7288` | `0.000014298` |   `0.000040039` |      `$0.12783` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000029901` | `7336` | `0.000014393` |   `0.000044294` |      `$0.14141` |
| Safe v1.4.1 (non-modular)              |      `176479` |       `0.000027641` | `7460` | `0.000014636` |   `0.000042276` |      `$0.13497` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.000023673` | `6944` | `0.000013623` |   `0.000037297` |      `$0.11907` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.000024560` | `7796` | `0.000015295` |   `0.000039855` |      `$0.12724` |
| Simple Account (non-modular)           |      `151045` |       `0.000023657` | `6932` | `0.000013600` |   `0.000037257` |      `$0.11895` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.01124` |                `$0.13912` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |        `$0.01157` |                `$0.14305` |         `102.99%` |                 `102.83%` |
| ZeroDev Kernel v3.1                    |        `$0.01320` |                `$0.15662` |         `117.48%` |                 `112.58%` |
| Safe v1.4.1 (non-modular)              |        `$0.01235` |                `$0.15123` |         `109.86%` |                 `108.71%` |
| Alchemy Light Account v2 (non-modular) |        `$0.01079` |                `$0.13536` |          `96.00%` |                  `97.30%` |
| Coinbase Smart Wallet (non-modular)    |        `$0.01115` |                `$0.14348` |          `99.19%` |                 `103.13%` |
| Simple Account (non-modular)           |        `$0.01079` |                `$0.13535` |          `95.99%` |                  `97.29%` |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000003491` | `7628` | `0.000000028` |   `0.000003520` |      `$0.01124` |
| Biconomy Nexus                         |      `188136` |       `0.000003596` | `7820` | `0.000000029` |   `0.000003625` |      `$0.01157` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000004106` | `7856` | `0.000000029` |   `0.000004135` |      `$0.01320` |
| Safe v1.4.1 (non-modular)              |      `200732` |       `0.000003837` | `8120` | `0.000000030` |   `0.000003867` |      `$0.01235` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.000003350` | `7616` | `0.000000028` |   `0.000003379` |      `$0.01079` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.000003460` | `8456` | `0.000000031` |   `0.000003491` |      `$0.01115` |
| Simple Account (non-modular)           |      `175283` |       `0.000003350` | `7616` | `0.000000028` |   `0.000003379` |      `$0.01079` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000028609` | `7628` | `0.000014965` |   `0.000043575` |      `$0.13912` |
| Biconomy Nexus                         |      `188136` |       `0.000029466` | `7820` | `0.000015342` |   `0.000044808` |      `$0.14305` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000033645` | `7856` | `0.000015413` |   `0.000049058` |      `$0.15662` |
| Safe v1.4.1 (non-modular)              |      `200732` |       `0.000031439` | `8120` | `0.000015931` |   `0.000047370` |      `$0.15123` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.000027455` | `7616` | `0.000014942` |   `0.000042397` |      `$0.13536` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.000028351` | `8456` | `0.000016590` |   `0.000044941` |      `$0.14348` |
| Simple Account (non-modular)           |      `175283` |       `0.000027453` | `7616` | `0.000014942` |   `0.000042395` |      `$0.13535` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.01242` |                `$0.15740` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |        `$0.01276` |                `$0.16120` |         `102.72%` |                 `102.41%` |
| ZeroDev Kernel v3.1                    |        `$0.01441` |                `$0.17490` |         `116.03%` |                 `111.12%` |
| Safe v1.4.1 (non-modular)              |        `$0.01357` |                `$0.16974` |         `109.22%` |                 `107.84%` |
| Alchemy Light Account v2 (non-modular) |        `$0.01197` |                `$0.15341` |          `96.37%` |                  `97.46%` |
| Coinbase Smart Wallet (non-modular)    |        `$0.01236` |                `$0.16190` |          `99.48%` |                 `102.86%` |
| Simple Account (non-modular)           |        `$0.01200` |                `$0.15377` |          `96.58%` |                  `97.69%` |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000003857` | `9020` | `0.000000034` |   `0.000003890` |      `$0.01242` |
| Biconomy Nexus                         |      `207286` |       `0.000003962` | `9188` | `0.000000034` |   `0.000003996` |      `$0.01276` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000004480` | `9212` | `0.000000034` |   `0.000004514` |      `$0.01441` |
| Safe v1.4.1 (non-modular)              |      `220464` |       `0.000004214` | `9500` | `0.000000035` |   `0.000004249` |      `$0.01357` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.000003716` | `8972` | `0.000000033` |   `0.000003749` |      `$0.01197` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.000003834` | `9836` | `0.000000037` |   `0.000003870` |      `$0.01236` |
| Simple Account (non-modular)           |      `194829` |       `0.000003724` | `8996` | `0.000000034` |   `0.000003757` |      `$0.01200` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000031605` | `9020` | `0.000017696` |   `0.000049301` |      `$0.15740` |
| Biconomy Nexus                         |      `207286` |       `0.000032466` | `9188` | `0.000018026` |   `0.000050492` |      `$0.16120` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000036709` | `9212` | `0.000018073` |   `0.000054782` |      `$0.17490` |
| Safe v1.4.1 (non-modular)              |      `220464` |       `0.000034530` | `9500` | `0.000018638` |   `0.000053168` |      `$0.16974` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.000030449` | `8972` | `0.000017602` |   `0.000048051` |      `$0.15341` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.000031414` | `9836` | `0.000019297` |   `0.000050712` |      `$0.16190` |
| Simple Account (non-modular)           |      `194829` |       `0.000030515` | `8996` | `0.000017649` |   `0.000048164` |      `$0.15377` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.03037` |                `$0.33365` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |     `Unsupported` |             `Unsupported` |                   |                           |
| ZeroDev Kernel v3.1                    |     `Unsupported` |             `Unsupported` |                   |                           |
| Safe v1.4.1 (non-modular)              |     `Unsupported` |             `Unsupported` |                   |                           |
| Alchemy Light Account v2 (non-modular) |     `Unsupported` |             `Unsupported` |                   |                           |
| Coinbase Smart Wallet (non-modular)    |     `Unsupported` |             `Unsupported` |                   |                           |
| Simple Account (non-modular)           |     `Unsupported` |             `Unsupported` |                   |                           |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000009462` | `13748` | `0.000000051` |   `0.000009513` |      `$0.03037` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1 (non-modular)              |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) |  L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | ------: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000077535` | `13748` | `0.000026972` |   `0.000104507` |      `$0.33365` |
| Biconomy Nexus                         |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1 (non-modular)              |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |     `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.01058` |                `$0.13004` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |     `Unsupported` |             `Unsupported` |                   |                           |
| ZeroDev Kernel v3.1                    |     `Unsupported` |             `Unsupported` |                   |                           |
| Safe v1.4.1 (non-modular)              |     `Unsupported` |             `Unsupported` |                   |                           |
| Alchemy Light Account v2 (non-modular) |     `Unsupported` |             `Unsupported` |                   |                           |
| Coinbase Smart Wallet (non-modular)    |     `Unsupported` |             `Unsupported` |                   |                           |
| Simple Account (non-modular)           |     `Unsupported` |             `Unsupported` |                   |                           |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000003288` | `7028` | `0.000000026` |   `0.000003314` |      `$0.01058` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1 (non-modular)              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000026945` | `7028` | `0.000013788` |   `0.000040733` |      `$0.13004` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1 (non-modular)              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.01213` |                `$0.14688` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |     `Unsupported` |             `Unsupported` |                   |                           |
| ZeroDev Kernel v3.1                    |     `Unsupported` |             `Unsupported` |                   |                           |
| Safe v1.4.1 (non-modular)              |     `Unsupported` |             `Unsupported` |                   |                           |
| Alchemy Light Account v2 (non-modular) |     `Unsupported` |             `Unsupported` |                   |                           |
| Coinbase Smart Wallet (non-modular)    |     `Unsupported` |             `Unsupported` |                   |                           |
| Simple Account (non-modular)           |     `Unsupported` |             `Unsupported` |                   |                           |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000003771` | `7700` | `0.000000029` |   `0.000003800` |      `$0.01213` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1 (non-modular)              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000030901` | `7700` | `0.000015107` |   `0.000046008` |      `$0.14688` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Safe v1.4.1 (non-modular)              |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |           `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.00599` |                `$0.06330` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |        `$0.01287` |                `$0.12490` |         `214.75%` |                 `197.34%` |
| ZeroDev Kernel v3.1                    |        `$0.01107` |                `$0.11883` |         `184.64%` |                 `187.73%` |
| Safe v1.4.1 (non-modular)              |        `$0.01772` |                `$0.18147` |         `295.61%` |                 `286.70%` |
| Alchemy Light Account v2 (non-modular) |        `$0.01038` |                `$0.09924` |         `173.19%` |                 `156.79%` |
| Coinbase Smart Wallet (non-modular)    |        `$0.01166` |                `$0.11373` |         `194.56%` |                 `179.69%` |
| Simple Account (non-modular)           |        `$0.01066` |                `$0.10197` |         `177.85%` |                 `161.11%` |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000001869` | `2300` | `0.000000009` |   `0.000001877` |      `$0.00599` |
| Biconomy Nexus                         |      `210309` |       `0.000004020` | `3152` | `0.000000012` |   `0.000004031` |      `$0.01287` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000003449` | `4564` | `0.000000017` |   `0.000003466` |      `$0.01107` |
| Safe v1.4.1 (non-modular)              |      `289207` |       `0.000005528` | `5884` | `0.000000022` |   `0.000005550` |      `$0.01772` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.000003243` | `2300` | `0.000000009` |   `0.000003251` |      `$0.01038` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.000003642` | `2948` | `0.000000011` |   `0.000003653` |      `$0.01166` |
| Simple Account (non-modular)           |      `174219` |       `0.000003330` | `2372` | `0.000000009` |   `0.000003339` |      `$0.01066` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000015313` | `2300` | `0.000004512` |   `0.000019826` |      `$0.06330` |
| Biconomy Nexus                         |      `210309` |       `0.000032939` | `3152` | `0.000006184` |   `0.000039123` |      `$0.12490` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000028265` | `4564` | `0.000008954` |   `0.000037219` |      `$0.11883` |
| Safe v1.4.1 (non-modular)              |      `289207` |       `0.000045296` | `5884` | `0.000011544` |   `0.000056840` |      `$0.18147` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.000026572` | `2300` | `0.000004512` |   `0.000031084` |      `$0.09924` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.000029841` | `2948` | `0.000005784` |   `0.000035624` |      `$0.11373` |
| Simple Account (non-modular)           |      `174219` |       `0.000027287` | `2372` | `0.000004654` |   `0.000031940` |      `$0.10197` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.00302` |                `$0.04150` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |        `$0.00246` |                `$0.03773` |          `81.21%` |                  `90.92%` |
| ZeroDev Kernel v3.1                    |        `$0.00300` |                `$0.04227` |          `99.24%` |                 `101.87%` |
| Safe v1.4.1 (non-modular)              |        `$0.00469` |                `$0.06904` |         `155.01%` |                 `166.37%` |
| Alchemy Light Account v2 (non-modular) |        `$0.00244` |                `$0.03672` |          `80.71%` |                  `88.48%` |
| Coinbase Smart Wallet (non-modular)    |        `$0.00245` |                `$0.03683` |          `81.15%` |                  `88.75%` |
| Simple Account (non-modular)           |        `$0.00244` |                `$0.03668` |          `80.54%` |                  `88.38%` |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000937` | `2712` | `0.000000010` |   `0.000000947` |      `$0.00302` |
| Biconomy Nexus                         |       `39685` |       `0.000000759` | `2856` | `0.000000011` |   `0.000000769` |      `$0.00246` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000929` | `2868` | `0.000000011` |   `0.000000940` |      `$0.00300` |
| Safe v1.4.1 (non-modular)              |       `75840` |       `0.000001450` | `4968` | `0.000000019` |   `0.000001468` |      `$0.00469` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.000000754` | `2712` | `0.000000010` |   `0.000000764` |      `$0.00244` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.000000758` | `2712` | `0.000000010` |   `0.000000769` |      `$0.00245` |
| Simple Account (non-modular)           |       `39381` |       `0.000000753` | `2712` | `0.000000010` |   `0.000000763` |      `$0.00244` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000007678` | `2712` | `0.000005321` |   `0.000012998` |      `$0.04150` |
| Biconomy Nexus                         |       `39685` |       `0.000006216` | `2856` | `0.000005603` |   `0.000011819` |      `$0.03773` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000007614` | `2868` | `0.000005627` |   `0.000013241` |      `$0.04227` |
| Safe v1.4.1 (non-modular)              |       `75840` |       `0.000011878` | `4968` | `0.000009747` |   `0.000021625` |      `$0.06904` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.000006181` | `2712` | `0.000005321` |   `0.000011501` |      `$0.03672` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.000006215` | `2712` | `0.000005321` |   `0.000011536` |      `$0.03683` |
| Simple Account (non-modular)           |       `39381` |       `0.000006168` | `2712` | `0.000005321` |   `0.000011489` |      `$0.03668` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.00449` |                `$0.05762` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |        `$0.00391` |                `$0.05284` |          `87.01%` |                  `91.70%` |
| ZeroDev Kernel v3.1                    |        `$0.00445` |                `$0.05731` |          `99.15%` |                  `99.45%` |
| Safe v1.4.1 (non-modular)              |        `$0.00615` |                `$0.08519` |         `136.97%` |                 `147.84%` |
| Alchemy Light Account v2 (non-modular) |        `$0.00392` |                `$0.05298` |          `87.18%` |                  `91.94%` |
| Coinbase Smart Wallet (non-modular)    |        `$0.00393` |                `$0.05312` |          `87.58%` |                  `92.20%` |
| Simple Account (non-modular)           |        `$0.00392` |                `$0.05297` |          `87.17%` |                  `91.94%` |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000001394` | `3376` | `0.000000013` |   `0.000001407` |      `$0.00449` |
| Biconomy Nexus                         |       `63384` |       `0.000001211` | `3376` | `0.000000013` |   `0.000001224` |      `$0.00391` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000001382` | `3376` | `0.000000013` |   `0.000001395` |      `$0.00445` |
| Safe v1.4.1 (non-modular)              |       `99715` |       `0.000001906` | `5640` | `0.000000021` |   `0.000001927` |      `$0.00615` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.000001214` | `3388` | `0.000000013` |   `0.000001226` |      `$0.00392` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.000001219` | `3388` | `0.000000013` |   `0.000001232` |      `$0.00393` |
| Simple Account (non-modular)           |       `63503` |       `0.000001214` | `3388` | `0.000000013` |   `0.000001226` |      `$0.00392` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000011425` | `3376` | `0.000006623` |   `0.000018048` |      `$0.05762` |
| Biconomy Nexus                         |       `63384` |       `0.000009927` | `3376` | `0.000006623` |   `0.000016551` |      `$0.05284` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000011326` | `3376` | `0.000006623` |   `0.000017950` |      `$0.05731` |
| Safe v1.4.1 (non-modular)              |       `99715` |       `0.000015618` | `5640` | `0.000011065` |   `0.000026683` |      `$0.08519` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.000009946` | `3388` | `0.000006647` |   `0.000016593` |      `$0.05298` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.000009993` | `3388` | `0.000006647` |   `0.000016640` |      `$0.05312` |
| Simple Account (non-modular)           |       `63503` |       `0.000009946` | `3388` | `0.000006647` |   `0.000016593` |      `$0.05297` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - Latest | Absolute - High Blob Fees | Relative - Latest | Relative - High Blob Fees |
| :------------------------------------- | ----------------: | ------------------------: | ----------------: | ------------------------: |
| Alchemy Modular Account v2             |        `$0.00896` |                `$0.10280` |         `100.00%` |                 `100.00%` |
| Biconomy Nexus                         |        `$0.00838` |                `$0.09795` |          `93.49%` |                  `95.28%` |
| ZeroDev Kernel v3.1                    |        `$0.00893` |                `$0.10250` |          `99.59%` |                  `99.71%` |
| Safe v1.4.1 (non-modular)              |        `$0.00958` |                `$0.12159` |         `106.92%` |                 `118.29%` |
| Alchemy Light Account v2 (non-modular) |        `$0.00839` |                `$0.09801` |          `93.58%` |                  `95.34%` |
| Coinbase Smart Wallet (non-modular)    |        `$0.00843` |                `$0.09844` |          `94.07%` |                  `95.76%` |
| Simple Account (non-modular)           |        `$0.00841` |                `$0.09829` |          `93.86%` |                  `95.62%` |

<details>
<summary><b>Details</b></summary>

##### Latest

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000002790` | `4760` | `0.000000018` |   `0.000002807` |      `$0.00896` |
| Biconomy Nexus                         |      `136403` |       `0.000002607` | `4748` | `0.000000018` |   `0.000002625` |      `$0.00838` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000002778` | `4760` | `0.000000018` |   `0.000002796` |      `$0.00893` |
| Safe v1.4.1 (non-modular)              |      `155690` |       `0.000002976` | `6984` | `0.000000026` |   `0.000003002` |      `$0.00958` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.000002609` | `4748` | `0.000000018` |   `0.000002627` |      `$0.00839` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.000002623` | `4760` | `0.000000018` |   `0.000002641` |      `$0.00843` |
| Simple Account (non-modular)           |      `136943` |       `0.000002617` | `4760` | `0.000000018` |   `0.000002635` |      `$0.00841` |

##### High Blob Fees

|                                        | Execution gas | Execution fee (ETH) | L1 gas |  L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | ------------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000022860` | `4760` | `0.000009339` |   `0.000032199` |      `$0.10280` |
| Biconomy Nexus                         |      `136403` |       `0.000021364` | `4748` | `0.000009315` |   `0.000030679` |      `$0.09795` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000022766` | `4760` | `0.000009339` |   `0.000032105` |      `$0.10250` |
| Safe v1.4.1 (non-modular)              |      `155690` |       `0.000024385` | `6984` | `0.000013702` |   `0.000038087` |      `$0.12159` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.000021383` | `4748` | `0.000009315` |   `0.000030698` |      `$0.09801` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.000021495` | `4760` | `0.000009339` |   `0.000030834` |      `$0.09844` |
| Simple Account (non-modular)           |      `136943` |       `0.000021448` | `4760` | `0.000009339` |   `0.000030787` |      `$0.09829` |

</details>

<!-- /BENCHMARK_RESULTS -->
