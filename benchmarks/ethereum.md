#### ⛽️ Benchmarks for other networks

**Ethereum Mainnet** | [Arbitrum Mainnet](/benchmarks/arbitrum.md) | [Polygon Mainnet](/benchmarks/polygon.md) | [Optimism Mainnet](/benchmarks/optimism.md) | [Base Mainnet](/benchmarks/base.md) | [Zora Mainnet](/benchmarks/zora.md)

---

<!-- BENCHMARK_RESULTS -->

### Ethereum Mainnet

#### Run parameters

| Parameter            | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------- | ------------------: | --------------------------: |
| Gas price (gwei)     |       `1.226061452` |                     `24.05` |
| L1 base fee (gwei)   |                 `-` |                         `-` |
| L1 base fee scalar   |                 `-` |                         `-` |
| Blob base fee (wei)  |                 `-` |                         `-` |
| Blob base fee scalar |                 `-` |                         `-` |
| ETH price (USD)      |          `$3192.59` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.91205` |                                 `$17.89046` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                          `$1.34019` |                                 `$26.28863` |                                   `146.94%` |                                           `146.94%` |
| ZeroDev Kernel v3.1        |                          `$1.32468` |                                 `$25.98442` |                                   `145.24%` |                                           `145.24%` |
| Safe v1.4.1                |                          `$1.70463` |                                 `$33.43739` |                                   `186.90%` |                                           `186.90%` |
| Alchemy Light Account v2   |                          `$1.14620` |                                 `$22.48340` |                                   `125.67%` |                                           `125.67%` |
| Coinbase Smart Wallet      |                          `$1.24438` |                                 `$24.40924` |                                   `136.44%` |                                           `136.44%` |
| Simple Account             |                          `$1.16399` |                                 `$22.83237` |                                   `127.62%` |                                           `127.62%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `233004` |       `0.000285677` |    `-` |          `-` |   `0.000285677` |      `$0.91205` |
| Biconomy Nexus             |      `342381` |       `0.000419780` |    `-` |          `-` |   `0.000419780` |      `$1.34019` |
| ZeroDev Kernel v3.1        |      `338419` |       `0.000414922` |    `-` |          `-` |   `0.000414922` |      `$1.32468` |
| Safe v1.4.1                |      `435486` |       `0.000533933` |    `-` |          `-` |   `0.000533933` |      `$1.70463` |
| Alchemy Light Account v2   |      `292822` |       `0.000359018` |    `-` |          `-` |   `0.000359018` |      `$1.14620` |
| Coinbase Smart Wallet      |      `317904` |       `0.000389770` |    `-` |          `-` |   `0.000389770` |      `$1.24438` |
| Simple Account             |      `297367` |       `0.000364590` |    `-` |          `-` |   `0.000364590` |      `$1.16399` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `233004` |       `0.005603746` |    `-` |          `-` |   `0.005603746` |     `$17.89046` |
| Biconomy Nexus             |      `342381` |       `0.008234263` |    `-` |          `-` |   `0.008234263` |     `$26.28863` |
| ZeroDev Kernel v3.1        |      `338419` |       `0.008138977` |    `-` |          `-` |   `0.008138977` |     `$25.98442` |
| Safe v1.4.1                |      `435486` |       `0.010473438` |    `-` |          `-` |   `0.010473438` |     `$33.43739` |
| Alchemy Light Account v2   |      `292822` |       `0.007042369` |    `-` |          `-` |   `0.007042369` |     `$22.48340` |
| Coinbase Smart Wallet      |      `317904` |       `0.007645591` |    `-` |          `-` |   `0.007645591` |     `$24.40924` |
| Simple Account             |      `297367` |       `0.007151676` |    `-` |          `-` |   `0.007151676` |     `$22.83237` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.62130` |                                 `$12.18719` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                          `$0.64332` |                                 `$12.61916` |                                   `103.54%` |                                           `103.54%` |
| ZeroDev Kernel v3.1        |                          `$0.74729` |                                 `$14.65856` |                                   `120.28%` |                                           `120.28%` |
| Safe v1.4.1                |                          `$0.69079` |                                 `$13.55037` |                                   `111.19%` |                                           `111.19%` |
| Alchemy Light Account v2   |                          `$0.59164` |                                 `$11.60541` |                                    `95.23%` |                                            `95.23%` |
| Coinbase Smart Wallet      |                          `$0.61381` |                                 `$12.04031` |                                    `98.79%` |                                            `98.79%` |
| Simple Account             |                          `$0.59124` |                                 `$11.59751` |                                    `95.16%` |                                            `95.16%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `158725` |       `0.000194607` |    `-` |          `-` |   `0.000194607` |      `$0.62130` |
| Biconomy Nexus             |      `164351` |       `0.000201504` |    `-` |          `-` |   `0.000201504` |      `$0.64332` |
| ZeroDev Kernel v3.1        |      `190912` |       `0.000234070` |    `-` |          `-` |   `0.000234070` |      `$0.74729` |
| Safe v1.4.1                |      `176479` |       `0.000216374` |    `-` |          `-` |   `0.000216374` |      `$0.69079` |
| Alchemy Light Account v2   |      `151148` |       `0.000185317` |    `-` |          `-` |   `0.000185317` |      `$0.59164` |
| Coinbase Smart Wallet      |      `156812` |       `0.000192261` |    `-` |          `-` |   `0.000192261` |      `$0.61381` |
| Simple Account             |      `151045` |       `0.000185190` |    `-` |          `-` |   `0.000185190` |      `$0.59124` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `158725` |       `0.003817336` |    `-` |          `-` |   `0.003817336` |     `$12.18719` |
| Biconomy Nexus             |      `164351` |       `0.003952642` |    `-` |          `-` |   `0.003952642` |     `$12.61916` |
| ZeroDev Kernel v3.1        |      `190912` |       `0.004591434` |    `-` |          `-` |   `0.004591434` |     `$14.65856` |
| Safe v1.4.1                |      `176479` |       `0.004244320` |    `-` |          `-` |   `0.004244320` |     `$13.55037` |
| Alchemy Light Account v2   |      `151148` |       `0.003635109` |    `-` |          `-` |   `0.003635109` |     `$11.60541` |
| Coinbase Smart Wallet      |      `156812` |       `0.003771329` |    `-` |          `-` |   `0.003771329` |     `$12.04031` |
| Simple Account             |      `151045` |       `0.003632632` |    `-` |          `-` |   `0.003632632` |     `$11.59751` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.71501` |                                 `$14.02535` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                          `$0.73642` |                                 `$14.44542` |                                   `103.00%` |                                           `103.00%` |
| ZeroDev Kernel v3.1        |                          `$0.84086` |                                 `$16.49403` |                                   `117.60%` |                                           `117.60%` |
| Safe v1.4.1                |                          `$0.78573` |                                 `$15.41256` |                                   `109.89%` |                                           `109.89%` |
| Alchemy Light Account v2   |                          `$0.68616` |                                 `$13.45939` |                                    `95.96%` |                                            `95.96%` |
| Coinbase Smart Wallet      |                          `$0.70855` |                                 `$13.89858` |                                    `99.10%` |                                            `99.10%` |
| Simple Account             |                          `$0.68611` |                                 `$13.45854` |                                    `95.96%` |                                            `95.96%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `182665` |       `0.000223959` |    `-` |          `-` |   `0.000223959` |      `$0.71501` |
| Biconomy Nexus             |      `188136` |       `0.000230666` |    `-` |          `-` |   `0.000230666` |      `$0.73642` |
| ZeroDev Kernel v3.1        |      `214817` |       `0.000263379` |    `-` |          `-` |   `0.000263379` |      `$0.84086` |
| Safe v1.4.1                |      `200732` |       `0.000246110` |    `-` |          `-` |   `0.000246110` |      `$0.78573` |
| Alchemy Light Account v2   |      `175294` |       `0.000214921` |    `-` |          `-` |   `0.000214921` |      `$0.68616` |
| Coinbase Smart Wallet      |      `181014` |       `0.000221934` |    `-` |          `-` |   `0.000221934` |      `$0.70855` |
| Simple Account             |      `175283` |       `0.000214908` |    `-` |          `-` |   `0.000214908` |      `$0.68611` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `182665` |       `0.004393093` |    `-` |          `-` |   `0.004393093` |     `$14.02535` |
| Biconomy Nexus             |      `188136` |       `0.004524671` |    `-` |          `-` |   `0.004524671` |     `$14.44542` |
| ZeroDev Kernel v3.1        |      `214817` |       `0.005166349` |    `-` |          `-` |   `0.005166349` |     `$16.49403` |
| Safe v1.4.1                |      `200732` |       `0.004827605` |    `-` |          `-` |   `0.004827605` |     `$15.41256` |
| Alchemy Light Account v2   |      `175294` |       `0.004215821` |    `-` |          `-` |   `0.004215821` |     `$13.45939` |
| Coinbase Smart Wallet      |      `181014` |       `0.004353387` |    `-` |          `-` |   `0.004353387` |     `$13.89858` |
| Simple Account             |      `175283` |       `0.004215556` |    `-` |          `-` |   `0.004215556` |     `$13.45854` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.78987` |                                 `$15.49380` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                          `$0.81138` |                                 `$15.91579` |                                   `102.72%` |                                           `102.72%` |
| ZeroDev Kernel v3.1        |                          `$0.91743` |                                 `$17.99596` |                                   `116.15%` |                                           `116.15%` |
| Safe v1.4.1                |                          `$0.86296` |                                 `$16.92762` |                                   `109.25%` |                                           `109.25%` |
| Alchemy Light Account v2   |                          `$0.76097` |                                 `$14.92692` |                                    `96.34%` |                                            `96.34%` |
| Coinbase Smart Wallet      |                          `$0.78511` |                                 `$15.40035` |                                    `99.40%` |                                            `99.40%` |
| Simple Account             |                          `$0.76262` |                                 `$14.95932` |                                    `96.55%` |                                            `96.55%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `201790` |       `0.000247407` |    `-` |          `-` |   `0.000247407` |      `$0.78987` |
| Biconomy Nexus             |      `207286` |       `0.000254145` |    `-` |          `-` |   `0.000254145` |      `$0.81138` |
| ZeroDev Kernel v3.1        |      `234378` |       `0.000287362` |    `-` |          `-` |   `0.000287362` |      `$0.91743` |
| Safe v1.4.1                |      `220464` |       `0.000270302` |    `-` |          `-` |   `0.000270302` |      `$0.86296` |
| Alchemy Light Account v2   |      `194407` |       `0.000238355` |    `-` |          `-` |   `0.000238355` |      `$0.76097` |
| Coinbase Smart Wallet      |      `200573` |       `0.000245915` |    `-` |          `-` |   `0.000245915` |      `$0.78511` |
| Simple Account             |      `194829` |       `0.000238872` |    `-` |          `-` |   `0.000238872` |      `$0.76262` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `201790` |       `0.004853049` |    `-` |          `-` |   `0.004853049` |     `$15.49380` |
| Biconomy Nexus             |      `207286` |       `0.004985228` |    `-` |          `-` |   `0.004985228` |     `$15.91579` |
| ZeroDev Kernel v3.1        |      `234378` |       `0.005636791` |    `-` |          `-` |   `0.005636791` |     `$17.99596` |
| Safe v1.4.1                |      `220464` |       `0.005302159` |    `-` |          `-` |   `0.005302159` |     `$16.92762` |
| Alchemy Light Account v2   |      `194407` |       `0.004675488` |    `-` |          `-` |   `0.004675488` |     `$14.92692` |
| Coinbase Smart Wallet      |      `200573` |       `0.004823781` |    `-` |          `-` |   `0.004823781` |     `$15.40035` |
| Simple Account             |      `194829` |       `0.004685637` |    `-` |          `-` |   `0.004685637` |     `$14.95932` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$1.93774` |                                 `$38.01013` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| ZeroDev Kernel v3.1        |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Safe v1.4.1                |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Alchemy Light Account v2   |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Coinbase Smart Wallet      |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Simple Account             |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `495041` |       `0.000606951` |    `-` |          `-` |   `0.000606951` |      `$1.93774` |
| Biconomy Nexus             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1        |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2   |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet      |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `495041` |       `0.011905736` |    `-` |          `-` |   `0.011905736` |     `$38.01013` |
| Biconomy Nexus             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1        |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2   |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet      |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.67340` |                                 `$13.20923` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| ZeroDev Kernel v3.1        |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Safe v1.4.1                |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Alchemy Light Account v2   |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Coinbase Smart Wallet      |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Simple Account             |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `172036` |       `0.000210927` |    `-` |          `-` |   `0.000210927` |      `$0.67340` |
| Biconomy Nexus             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1        |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2   |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet      |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `172036` |       `0.004137466` |    `-` |          `-` |   `0.004137466` |     `$13.20923` |
| Biconomy Nexus             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1        |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2   |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet      |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.77227` |                                 `$15.14866` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| ZeroDev Kernel v3.1        |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Safe v1.4.1                |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Alchemy Light Account v2   |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Coinbase Smart Wallet      |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |
| Simple Account             |                       `Unsupported` |                               `Unsupported` |                                             |                                                     |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `197295` |       `0.000241896` |    `-` |          `-` |   `0.000241896` |      `$0.77227` |
| Biconomy Nexus             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1        |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2   |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet      |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `197295` |       `0.004744945` |    `-` |          `-` |   `0.004744945` |     `$15.14866` |
| Biconomy Nexus             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1        |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2   |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet      |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account             |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.38271` |                                  `$7.50711` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                          `$0.82321` |                                 `$16.14790` |                                   `215.10%` |                                           `215.10%` |
| ZeroDev Kernel v3.1        |                          `$0.70640` |                                 `$13.85643` |                                   `184.58%` |                                           `184.58%` |
| Safe v1.4.1                |                          `$1.13205` |                                 `$22.20583` |                                   `295.80%` |                                           `295.80%` |
| Alchemy Light Account v2   |                          `$0.66408` |                                 `$13.02641` |                                   `173.52%` |                                           `173.52%` |
| Coinbase Smart Wallet      |                          `$0.74577` |                                 `$14.62885` |                                   `194.87%` |                                           `194.87%` |
| Simple Account             |                          `$0.68195` |                                 `$13.37685` |                                   `178.19%` |                                           `178.19%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |       `97772` |       `0.000119874` |    `-` |          `-` |   `0.000119874` |      `$0.38271` |
| Biconomy Nexus             |      `210309` |       `0.000257852` |    `-` |          `-` |   `0.000257852` |      `$0.82321` |
| ZeroDev Kernel v3.1        |      `180465` |       `0.000221261` |    `-` |          `-` |   `0.000221261` |      `$0.70640` |
| Safe v1.4.1                |      `289207` |       `0.000354586` |    `-` |          `-` |   `0.000354586` |      `$1.13205` |
| Alchemy Light Account v2   |      `169655` |       `0.000208007` |    `-` |          `-` |   `0.000208007` |      `$0.66408` |
| Coinbase Smart Wallet      |      `190525` |       `0.000233595` |    `-` |          `-` |   `0.000233595` |      `$0.74577` |
| Simple Account             |      `174219` |       `0.000213603` |    `-` |          `-` |   `0.000213603` |      `$0.68195` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |       `97772` |       `0.002351417` |    `-` |          `-` |   `0.002351417` |      `$7.50711` |
| Biconomy Nexus             |      `210309` |       `0.005057931` |    `-` |          `-` |   `0.005057931` |     `$16.14790` |
| ZeroDev Kernel v3.1        |      `180465` |       `0.004340183` |    `-` |          `-` |   `0.004340183` |     `$13.85643` |
| Safe v1.4.1                |      `289207` |       `0.006955428` |    `-` |          `-` |   `0.006955428` |     `$22.20583` |
| Alchemy Light Account v2   |      `169655` |       `0.004080203` |    `-` |          `-` |   `0.004080203` |     `$13.02641` |
| Coinbase Smart Wallet      |      `190525` |       `0.004582126` |    `-` |          `-` |   `0.004582126` |     `$14.62885` |
| Simple Account             |      `174219` |       `0.004189967` |    `-` |          `-` |   `0.004189967` |     `$13.37685` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.19188` |                                  `$3.76392` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                          `$0.15534` |                                  `$3.04709` |                                    `80.96%` |                                            `80.96%` |
| ZeroDev Kernel v3.1        |                          `$0.19029` |                                  `$3.73275` |                                    `99.17%` |                                            `99.17%` |
| Safe v1.4.1                |                          `$0.29686` |                                  `$5.82313` |                                   `154.71%` |                                           `154.71%` |
| Alchemy Light Account v2   |                          `$0.15447` |                                  `$3.03004` |                                    `80.50%` |                                            `80.50%` |
| Coinbase Smart Wallet      |                          `$0.15532` |                                  `$3.04678` |                                    `80.95%` |                                            `80.95%` |
| Simple Account             |                          `$0.15415` |                                  `$3.02374` |                                    `80.33%` |                                            `80.33%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |       `49021` |       `0.000060103` |    `-` |          `-` |   `0.000060103` |      `$0.19188` |
| Biconomy Nexus             |       `39685` |       `0.000048656` |    `-` |          `-` |   `0.000048656` |      `$0.15534` |
| ZeroDev Kernel v3.1        |       `48615` |       `0.000059605` |    `-` |          `-` |   `0.000059605` |      `$0.19029` |
| Safe v1.4.1                |       `75840` |       `0.000092985` |    `-` |          `-` |   `0.000092985` |      `$0.29686` |
| Alchemy Light Account v2   |       `39463` |       `0.000048384` |    `-` |          `-` |   `0.000048384` |      `$0.15447` |
| Coinbase Smart Wallet      |       `39681` |       `0.000048651` |    `-` |          `-` |   `0.000048651` |      `$0.15532` |
| Simple Account             |       `39381` |       `0.000048284` |    `-` |          `-` |   `0.000048284` |      `$0.15415` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |       `49021` |       `0.001178955` |    `-` |          `-` |   `0.001178955` |      `$3.76392` |
| Biconomy Nexus             |       `39685` |       `0.000954424` |    `-` |          `-` |   `0.000954424` |      `$3.04709` |
| ZeroDev Kernel v3.1        |       `48615` |       `0.001169191` |    `-` |          `-` |   `0.001169191` |      `$3.73275` |
| Safe v1.4.1                |       `75840` |       `0.001823952` |    `-` |          `-` |   `0.001823952` |      `$5.82313` |
| Alchemy Light Account v2   |       `39463` |       `0.000949085` |    `-` |          `-` |   `0.000949085` |      `$3.03004` |
| Coinbase Smart Wallet      |       `39681` |       `0.000954328` |    `-` |          `-` |   `0.000954328` |      `$3.04678` |
| Simple Account             |       `39381` |       `0.000947113` |    `-` |          `-` |   `0.000947113` |      `$3.02374` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.28553` |                                  `$5.60092` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                          `$0.24810` |                                  `$4.86674` |                                    `86.89%` |                                            `86.89%` |
| ZeroDev Kernel v3.1        |                          `$0.28307` |                                  `$5.55263` |                                    `99.14%` |                                            `99.14%` |
| Safe v1.4.1                |                          `$0.39032` |                                  `$7.65630` |                                   `136.70%` |                                           `136.70%` |
| Alchemy Light Account v2   |                          `$0.24858` |                                  `$4.87603` |                                    `87.06%` |                                            `87.06%` |
| Coinbase Smart Wallet      |                          `$0.24974` |                                  `$4.89891` |                                    `87.47%` |                                            `87.47%` |
| Simple Account             |                          `$0.24857` |                                  `$4.87587` |                                    `87.05%` |                                            `87.05%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |       `72946` |       `0.000089436` |    `-` |          `-` |   `0.000089436` |      `$0.28553` |
| Biconomy Nexus             |       `63384` |       `0.000077713` |    `-` |          `-` |   `0.000077713` |      `$0.24810` |
| ZeroDev Kernel v3.1        |       `72317` |       `0.000088665` |    `-` |          `-` |   `0.000088665` |      `$0.28307` |
| Safe v1.4.1                |       `99715` |       `0.000122257` |    `-` |          `-` |   `0.000122257` |      `$0.39032` |
| Alchemy Light Account v2   |       `63505` |       `0.000077861` |    `-` |          `-` |   `0.000077861` |      `$0.24858` |
| Coinbase Smart Wallet      |       `63803` |       `0.000078226` |    `-` |          `-` |   `0.000078226` |      `$0.24974` |
| Simple Account             |       `63503` |       `0.000077859` |    `-` |          `-` |   `0.000077859` |      `$0.24857` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |       `72946` |       `0.001754351` |    `-` |          `-` |   `0.001754351` |      `$5.60092` |
| Biconomy Nexus             |       `63384` |       `0.001524385` |    `-` |          `-` |   `0.001524385` |      `$4.86674` |
| ZeroDev Kernel v3.1        |       `72317` |       `0.001739224` |    `-` |          `-` |   `0.001739224` |      `$5.55263` |
| Safe v1.4.1                |       `99715` |       `0.002398146` |    `-` |          `-` |   `0.002398146` |      `$7.65630` |
| Alchemy Light Account v2   |       `63505` |       `0.001527295` |    `-` |          `-` |   `0.001527295` |      `$4.87603` |
| Coinbase Smart Wallet      |       `63803` |       `0.001534462` |    `-` |          `-` |   `0.001534462` |      `$4.89891` |
| Simple Account             |       `63503` |       `0.001527247` |    `-` |          `-` |   `0.001527247` |      `$4.87587` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                            | Absolute Cost - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative Cost to MAv2 - 2025-01-30 (latest) | Relative Cost to MAv2 - 2024-03-31 (high blob fees) |
| :------------------------- | ----------------------------------: | ------------------------------------------: | ------------------------------------------: | --------------------------------------------------: |
| Alchemy Modular Account v2 |                          `$0.57132` |                                 `$11.20676` |                                   `100.00%` |                                           `100.00%` |
| Biconomy Nexus             |                          `$0.53392` |                                 `$10.47327` |                                    `93.45%` |                                            `93.45%` |
| ZeroDev Kernel v3.1        |                          `$0.56896` |                                 `$11.16062` |                                    `99.59%` |                                            `99.59%` |
| Safe v1.4.1                |                          `$0.60942` |                                 `$11.95416` |                                   `106.67%` |                                           `106.67%` |
| Alchemy Light Account v2   |                          `$0.53440` |                                 `$10.48256` |                                    `93.54%` |                                            `93.54%` |
| Coinbase Smart Wallet      |                          `$0.53721` |                                 `$10.53776` |                                    `94.03%` |                                            `94.03%` |
| Simple Account             |                          `$0.53604` |                                 `$10.51473` |                                    `93.82%` |                                            `93.82%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `145956` |       `0.000178951` |    `-` |          `-` |   `0.000178951` |      `$0.57132` |
| Biconomy Nexus             |      `136403` |       `0.000167238` |    `-` |          `-` |   `0.000167238` |      `$0.53392` |
| ZeroDev Kernel v3.1        |      `145355` |       `0.000178214` |    `-` |          `-` |   `0.000178214` |      `$0.56896` |
| Safe v1.4.1                |      `155690` |       `0.000190886` |    `-` |          `-` |   `0.000190886` |      `$0.60942` |
| Alchemy Light Account v2   |      `136524` |       `0.000167387` |    `-` |          `-` |   `0.000167387` |      `$0.53440` |
| Coinbase Smart Wallet      |      `137243` |       `0.000168268` |    `-` |          `-` |   `0.000168268` |      `$0.53721` |
| Simple Account             |      `136943` |       `0.000167901` |    `-` |          `-` |   `0.000167901` |      `$0.53604` |

##### 2024-03-31 (high blob fees)

|                            | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2 |      `145956` |       `0.003510242` |    `-` |          `-` |   `0.003510242` |     `$11.20676` |
| Biconomy Nexus             |      `136403` |       `0.003280492` |    `-` |          `-` |   `0.003280492` |     `$10.47327` |
| ZeroDev Kernel v3.1        |      `145355` |       `0.003495788` |    `-` |          `-` |   `0.003495788` |     `$11.16062` |
| Safe v1.4.1                |      `155690` |       `0.003744344` |    `-` |          `-` |   `0.003744344` |     `$11.95416` |
| Alchemy Light Account v2   |      `136524` |       `0.003283402` |    `-` |          `-` |   `0.003283402` |     `$10.48256` |
| Coinbase Smart Wallet      |      `137243` |       `0.003300694` |    `-` |          `-` |   `0.003300694` |     `$10.53776` |
| Simple Account             |      `136943` |       `0.003293479` |    `-` |          `-` |   `0.003293479` |     `$10.51473` |

</details>

<!-- /BENCHMARK_RESULTS -->
