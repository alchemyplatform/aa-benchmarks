#### ⛽️ Benchmarks for other networks

[Ethereum Mainnet](/benchmarks/ethereum.md) | [Arbitrum Mainnet](/benchmarks/arbitrum.md) | **Polygon Mainnet** | [Optimism Mainnet](/benchmarks/optimism.md) | [Base Mainnet](/benchmarks/base.md) | [Zora Mainnet](/benchmarks/zora.md)

---

<!-- BENCHMARK_RESULTS -->

### Polygon Mainnet

#### Run parameters

| Parameter            | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------- | ------------------: | --------------------------: |
| Gas price (gwei)     |      `25.923667802` |             `108.943223376` |
| L1 base fee (gwei)   |                 `-` |                         `-` |
| L1 base fee scalar   |                 `-` |                         `-` |
| Blob base fee (wei)  |                 `-` |                         `-` |
| Blob base fee scalar |                 `-` |                         `-` |
| MATIC price (USD)    |         `$0.405017` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00245` |                                  `$0.01028` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00359` |                                  `$0.01511` |                      `146.94%` |                              `146.94%` |
| ZeroDev Kernel v3.1                    |                     `$0.00355` |                                  `$0.01493` |                      `145.24%` |                              `145.24%` |
| Safe v1.4.1                            |                     `$0.00457` |                                  `$0.01922` |                      `186.90%` |                              `186.90%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00307` |                                  `$0.01292` |                      `125.67%` |                              `125.67%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00334` |                                  `$0.01403` |                      `136.44%` |                              `136.44%` |
| Simple Account (non-modular)           |                     `$0.00312` |                                  `$0.01312` |                      `127.62%` |                              `127.62%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.006040318` |    `-` |          `-` |   `0.006040318` |      `$0.00245` |
| Biconomy Nexus                         |      `342381` |       `0.008875771` |    `-` |          `-` |   `0.008875771` |      `$0.00359` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.008773062` |    `-` |          `-` |   `0.008773062` |      `$0.00355` |
| Safe v1.4.1                            |      `435486` |       `0.011289394` |    `-` |          `-` |   `0.011289394` |      `$0.00457` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.007591020` |    `-` |          `-` |   `0.007591020` |      `$0.00307` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.008241238` |    `-` |          `-` |   `0.008241238` |      `$0.00334` |
| Simple Account (non-modular)           |      `297367` |       `0.007708843` |    `-` |          `-` |   `0.007708843` |      `$0.00312` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.025384207` |    `-` |          `-` |   `0.025384207` |      `$0.01028` |
| Biconomy Nexus                         |      `342381` |       `0.037300090` |    `-` |          `-` |   `0.037300090` |      `$0.01511` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.036868457` |    `-` |          `-` |   `0.036868457` |      `$0.01493` |
| Safe v1.4.1                            |      `435486` |       `0.047443249` |    `-` |          `-` |   `0.047443249` |      `$0.01922` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.031900973` |    `-` |          `-` |   `0.031900973` |      `$0.01292` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.034633486` |    `-` |          `-` |   `0.034633486` |      `$0.01403` |
| Simple Account (non-modular)           |      `297367` |       `0.032396120` |    `-` |          `-` |   `0.032396120` |      `$0.01312` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00167` |                                  `$0.00700` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00173` |                                  `$0.00725` |                      `103.54%` |                              `103.54%` |
| ZeroDev Kernel v3.1                    |                     `$0.00200` |                                  `$0.00842` |                      `120.28%` |                              `120.28%` |
| Safe v1.4.1                            |                     `$0.00185` |                                  `$0.00779` |                      `111.19%` |                              `111.19%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00159` |                                  `$0.00667` |                       `95.23%` |                               `95.23%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00165` |                                  `$0.00692` |                       `98.79%` |                               `98.79%` |
| Simple Account (non-modular)           |                     `$0.00159` |                                  `$0.00666` |                       `95.16%` |                               `95.16%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.004114734` |    `-` |          `-` |   `0.004114734` |      `$0.00167` |
| Biconomy Nexus                         |      `164351` |       `0.004260581` |    `-` |          `-` |   `0.004260581` |      `$0.00173` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.004949139` |    `-` |          `-` |   `0.004949139` |      `$0.00200` |
| Safe v1.4.1                            |      `176479` |       `0.004574983` |    `-` |          `-` |   `0.004574983` |      `$0.00185` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.003918311` |    `-` |          `-` |   `0.003918311` |      `$0.00159` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.004065142` |    `-` |          `-` |   `0.004065142` |      `$0.00165` |
| Simple Account (non-modular)           |      `151045` |       `0.003915640` |    `-` |          `-` |   `0.003915640` |      `$0.00159` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.017292013` |    `-` |          `-` |   `0.017292013` |      `$0.00700` |
| Biconomy Nexus                         |      `164351` |       `0.017904928` |    `-` |          `-` |   `0.017904928` |      `$0.00725` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.020798569` |    `-` |          `-` |   `0.020798569` |      `$0.00842` |
| Safe v1.4.1                            |      `176479` |       `0.019226191` |    `-` |          `-` |   `0.019226191` |      `$0.00779` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.016466550` |    `-` |          `-` |   `0.016466550` |      `$0.00667` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.017083605` |    `-` |          `-` |   `0.017083605` |      `$0.00692` |
| Simple Account (non-modular)           |      `151045` |       `0.016455329` |    `-` |          `-` |   `0.016455329` |      `$0.00666` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00192` |                                  `$0.00806` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00198` |                                  `$0.00830` |                      `103.00%` |                              `103.00%` |
| ZeroDev Kernel v3.1                    |                     `$0.00226` |                                  `$0.00948` |                      `117.60%` |                              `117.60%` |
| Safe v1.4.1                            |                     `$0.00211` |                                  `$0.00886` |                      `109.89%` |                              `109.89%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00184` |                                  `$0.00773` |                       `95.96%` |                               `95.96%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00190` |                                  `$0.00799` |                       `99.10%` |                               `99.10%` |
| Simple Account (non-modular)           |                     `$0.00184` |                                  `$0.00773` |                       `95.96%` |                               `95.96%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.004735347` |    `-` |          `-` |   `0.004735347` |      `$0.00192` |
| Biconomy Nexus                         |      `188136` |       `0.004877175` |    `-` |          `-` |   `0.004877175` |      `$0.00198` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.005568845` |    `-` |          `-` |   `0.005568845` |      `$0.00226` |
| Safe v1.4.1                            |      `200732` |       `0.005203710` |    `-` |          `-` |   `0.005203710` |      `$0.00211` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.004544263` |    `-` |          `-` |   `0.004544263` |      `$0.00184` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.004692547` |    `-` |          `-` |   `0.004692547` |      `$0.00190` |
| Simple Account (non-modular)           |      `175283` |       `0.004543978` |    `-` |          `-` |   `0.004543978` |      `$0.00184` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.019900114` |    `-` |          `-` |   `0.019900114` |      `$0.00806` |
| Biconomy Nexus                         |      `188136` |       `0.020496142` |    `-` |          `-` |   `0.020496142` |      `$0.00830` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.023402856` |    `-` |          `-` |   `0.023402856` |      `$0.00948` |
| Safe v1.4.1                            |      `200732` |       `0.021868391` |    `-` |          `-` |   `0.021868391` |      `$0.00886` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.019097093` |    `-` |          `-` |   `0.019097093` |      `$0.00773` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.019720249` |    `-` |          `-` |   `0.019720249` |      `$0.00799` |
| Simple Account (non-modular)           |      `175283` |       `0.019095895` |    `-` |          `-` |   `0.019095895` |      `$0.00773` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00212` |                                  `$0.00890` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00218` |                                  `$0.00915` |                      `102.72%` |                              `102.72%` |
| ZeroDev Kernel v3.1                    |                     `$0.00246` |                                  `$0.01034` |                      `116.15%` |                              `116.15%` |
| Safe v1.4.1                            |                     `$0.00231` |                                  `$0.00973` |                      `109.25%` |                              `109.25%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00204` |                                  `$0.00858` |                       `96.34%` |                               `96.34%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00211` |                                  `$0.00885` |                       `99.40%` |                               `99.40%` |
| Simple Account (non-modular)           |                     `$0.00205` |                                  `$0.00860` |                       `96.55%` |                               `96.55%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.005231137` |    `-` |          `-` |   `0.005231137` |      `$0.00212` |
| Biconomy Nexus                         |      `207286` |       `0.005373613` |    `-` |          `-` |   `0.005373613` |      `$0.00218` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.006075937` |    `-` |          `-` |   `0.006075937` |      `$0.00246` |
| Safe v1.4.1                            |      `220464` |       `0.005715235` |    `-` |          `-` |   `0.005715235` |      `$0.00231` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.005039742` |    `-` |          `-` |   `0.005039742` |      `$0.00204` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.005199588` |    `-` |          `-` |   `0.005199588` |      `$0.00211` |
| Simple Account (non-modular)           |      `194829` |       `0.005050682` |    `-` |          `-` |   `0.005050682` |      `$0.00205` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.021983653` |    `-` |          `-` |   `0.021983653` |      `$0.00890` |
| Biconomy Nexus                         |      `207286` |       `0.022582405` |    `-` |          `-` |   `0.022582405` |      `$0.00915` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.025533895` |    `-` |          `-` |   `0.025533895` |      `$0.01034` |
| Safe v1.4.1                            |      `220464` |       `0.024018059` |    `-` |          `-` |   `0.024018059` |      `$0.00973` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.021179325` |    `-` |          `-` |   `0.021179325` |      `$0.00858` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.021851069` |    `-` |          `-` |   `0.021851069` |      `$0.00885` |
| Simple Account (non-modular)           |      `194829` |       `0.021225299` |    `-` |          `-` |   `0.021225299` |      `$0.00860` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00520` |                                  `$0.02184` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                               `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.012833278` |    `-` |          `-` |   `0.012833278` |      `$0.00520` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.053931362` |    `-` |          `-` |   `0.053931362` |      `$0.02184` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00181` |                                  `$0.00759` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                               `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.004459804` |    `-` |          `-` |   `0.004459804` |      `$0.00181` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.018742156` |    `-` |          `-` |   `0.018742156` |      `$0.00759` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00207` |                                  `$0.00871` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                               `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                               `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.005114610` |    `-` |          `-` |   `0.005114610` |      `$0.00207` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.021493953` |    `-` |          `-` |   `0.021493953` |      `$0.00871` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00103` |                                  `$0.00431` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00221` |                                  `$0.00928` |                      `215.10%` |                              `215.10%` |
| ZeroDev Kernel v3.1                    |                     `$0.00189` |                                  `$0.00796` |                      `184.58%` |                              `184.58%` |
| Safe v1.4.1                            |                     `$0.00304` |                                  `$0.01276` |                      `295.80%` |                              `295.80%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00178` |                                  `$0.00749` |                      `173.52%` |                              `173.52%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00200` |                                  `$0.00841` |                      `194.87%` |                              `194.87%` |
| Simple Account (non-modular)           |                     `$0.00183` |                                  `$0.00769` |                      `178.19%` |                              `178.19%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.002534609` |    `-` |          `-` |   `0.002534609` |      `$0.00103` |
| Biconomy Nexus                         |      `210309` |       `0.005451981` |    `-` |          `-` |   `0.005451981` |      `$0.00221` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.004678315` |    `-` |          `-` |   `0.004678315` |      `$0.00189` |
| Safe v1.4.1                            |      `289207` |       `0.007497306` |    `-` |          `-` |   `0.007497306` |      `$0.00304` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.004398080` |    `-` |          `-` |   `0.004398080` |      `$0.00178` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.004939107` |    `-` |          `-` |   `0.004939107` |      `$0.00200` |
| Simple Account (non-modular)           |      `174219` |       `0.004516395` |    `-` |          `-` |   `0.004516395` |      `$0.00183` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.010651597` |    `-` |          `-` |   `0.010651597` |      `$0.00431` |
| Biconomy Nexus                         |      `210309` |       `0.022911740` |    `-` |          `-` |   `0.022911740` |      `$0.00928` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.019660439` |    `-` |          `-` |   `0.019660439` |      `$0.00796` |
| Safe v1.4.1                            |      `289207` |       `0.031507143` |    `-` |          `-` |   `0.031507143` |      `$0.01276` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.018482763` |    `-` |          `-` |   `0.018482763` |      `$0.00749` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.020756408` |    `-` |          `-` |   `0.020756408` |      `$0.00841` |
| Simple Account (non-modular)           |      `174219` |       `0.018979979` |    `-` |          `-` |   `0.018979979` |      `$0.00769` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00051` |                                  `$0.00216` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00042` |                                  `$0.00175` |                       `80.96%` |                               `80.96%` |
| ZeroDev Kernel v3.1                    |                     `$0.00051` |                                  `$0.00215` |                       `99.17%` |                               `99.17%` |
| Safe v1.4.1                            |                     `$0.00080` |                                  `$0.00335` |                      `154.71%` |                              `154.71%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00041` |                                  `$0.00174` |                       `80.50%` |                               `80.50%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00042` |                                  `$0.00175` |                       `80.95%` |                               `80.95%` |
| Simple Account (non-modular)           |                     `$0.00041` |                                  `$0.00174` |                       `80.33%` |                               `80.33%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.001270804` |    `-` |          `-` |   `0.001270804` |      `$0.00051` |
| Biconomy Nexus                         |       `39685` |       `0.001028781` |    `-` |          `-` |   `0.001028781` |      `$0.00042` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.001260279` |    `-` |          `-` |   `0.001260279` |      `$0.00051` |
| Safe v1.4.1                            |       `75840` |       `0.001966051` |    `-` |          `-` |   `0.001966051` |      `$0.00080` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.001023026` |    `-` |          `-` |   `0.001023026` |      `$0.00041` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.001028677` |    `-` |          `-` |   `0.001028677` |      `$0.00042` |
| Simple Account (non-modular)           |       `39381` |       `0.001020900` |    `-` |          `-` |   `0.001020900` |      `$0.00041` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.005340506` |    `-` |          `-` |   `0.005340506` |      `$0.00216` |
| Biconomy Nexus                         |       `39685` |       `0.004323412` |    `-` |          `-` |   `0.004323412` |      `$0.00175` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.005296275` |    `-` |          `-` |   `0.005296275` |      `$0.00215` |
| Safe v1.4.1                            |       `75840` |       `0.008262254` |    `-` |          `-` |   `0.008262254` |      `$0.00335` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.004299226` |    `-` |          `-` |   `0.004299226` |      `$0.00174` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.004322976` |    `-` |          `-` |   `0.004322976` |      `$0.00175` |
| Simple Account (non-modular)           |       `39381` |       `0.004290293` |    `-` |          `-` |   `0.004290293` |      `$0.00174` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00077` |                                  `$0.00322` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00067` |                                  `$0.00280` |                       `86.89%` |                               `86.89%` |
| ZeroDev Kernel v3.1                    |                     `$0.00076` |                                  `$0.00319` |                       `99.14%` |                               `99.14%` |
| Safe v1.4.1                            |                     `$0.00105` |                                  `$0.00440` |                      `136.70%` |                              `136.70%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00067` |                                  `$0.00280` |                       `87.06%` |                               `87.06%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00067` |                                  `$0.00282` |                       `87.47%` |                               `87.47%` |
| Simple Account (non-modular)           |                     `$0.00067` |                                  `$0.00280` |                       `87.05%` |                               `87.05%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.001891028` |    `-` |          `-` |   `0.001891028` |      `$0.00077` |
| Biconomy Nexus                         |       `63384` |       `0.001643146` |    `-` |          `-` |   `0.001643146` |      `$0.00067` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.001874722` |    `-` |          `-` |   `0.001874722` |      `$0.00076` |
| Safe v1.4.1                            |       `99715` |       `0.002584979` |    `-` |          `-` |   `0.002584979` |      `$0.00105` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.001646283` |    `-` |          `-` |   `0.001646283` |      `$0.00067` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.001654008` |    `-` |          `-` |   `0.001654008` |      `$0.00067` |
| Simple Account (non-modular)           |       `63503` |       `0.001646231` |    `-` |          `-` |   `0.001646231` |      `$0.00067` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.007946972` |    `-` |          `-` |   `0.007946972` |      `$0.00322` |
| Biconomy Nexus                         |       `63384` |       `0.006905257` |    `-` |          `-` |   `0.006905257` |      `$0.00280` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.007878447` |    `-` |          `-` |   `0.007878447` |      `$0.00319` |
| Safe v1.4.1                            |       `99715` |       `0.010863274` |    `-` |          `-` |   `0.010863274` |      `$0.00440` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.006918439` |    `-` |          `-` |   `0.006918439` |      `$0.00280` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.006950904` |    `-` |          `-` |   `0.006950904` |      `$0.00282` |
| Simple Account (non-modular)           |       `63503` |       `0.006918222` |    `-` |          `-` |   `0.006918222` |      `$0.00280` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute Cost - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | ------------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00153` |                                  `$0.00644` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00143` |                                  `$0.00602` |                       `93.45%` |                               `93.45%` |
| ZeroDev Kernel v3.1                    |                     `$0.00153` |                                  `$0.00641` |                       `99.59%` |                               `99.59%` |
| Safe v1.4.1                            |                     `$0.00163` |                                  `$0.00687` |                      `106.67%` |                              `106.67%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00143` |                                  `$0.00602` |                       `93.54%` |                               `93.54%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00144` |                                  `$0.00606` |                       `94.03%` |                               `94.03%` |
| Simple Account (non-modular)           |                     `$0.00144` |                                  `$0.00604` |                       `93.82%` |                               `93.82%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.003783715` |    `-` |          `-` |   `0.003783715` |      `$0.00153` |
| Biconomy Nexus                         |      `136403` |       `0.003536066` |    `-` |          `-` |   `0.003536066` |      `$0.00143` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.003768135` |    `-` |          `-` |   `0.003768135` |      `$0.00153` |
| Safe v1.4.1                            |      `155690` |       `0.004036056` |    `-` |          `-` |   `0.004036056` |      `$0.00163` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.003539203` |    `-` |          `-` |   `0.003539203` |      `$0.00143` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.003557842` |    `-` |          `-` |   `0.003557842` |      `$0.00144` |
| Simple Account (non-modular)           |      `136943` |       `0.003550065` |    `-` |          `-` |   `0.003550065` |      `$0.00144` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.015900917` |    `-` |          `-` |   `0.015900917` |      `$0.00644` |
| Biconomy Nexus                         |      `136403` |       `0.014860182` |    `-` |          `-` |   `0.014860182` |      `$0.00602` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.015835442` |    `-` |          `-` |   `0.015835442` |      `$0.00641` |
| Safe v1.4.1                            |      `155690` |       `0.016961370` |    `-` |          `-` |   `0.016961370` |      `$0.00687` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.014873365` |    `-` |          `-` |   `0.014873365` |      `$0.00602` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.014951695` |    `-` |          `-` |   `0.014951695` |      `$0.00606` |
| Simple Account (non-modular)           |      `136943` |       `0.014919012` |    `-` |          `-` |   `0.014919012` |      `$0.00604` |

</details>

<!-- /BENCHMARK_RESULTS -->
