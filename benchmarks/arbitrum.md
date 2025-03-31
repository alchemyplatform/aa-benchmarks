#### ⛽️ Benchmarks for other networks

[Ethereum Mainnet](/benchmarks/ethereum.md) | **Arbitrum Mainnet** | [Polygon Mainnet](/benchmarks/polygon.md) | [Optimism Mainnet](/benchmarks/optimism.md) | [Base Mainnet](/benchmarks/base.md) | [Zora Mainnet](/benchmarks/zora.md)

---

<!-- BENCHMARK_RESULTS -->

### Arbitrum Mainnet

#### Run parameters

| Parameter            | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------- | ------------------: | --------------------------: |
| Gas price (gwei)     |              `0.01` |               `0.010018532` |
| L1 base fee (gwei)   |                 `-` |                         `-` |
| L1 base fee scalar   |                 `-` |                         `-` |
| Blob base fee (wei)  |                 `-` |                         `-` |
| Blob base fee scalar |                 `-` |                         `-` |
| ETH price (USD)      |          `$3192.59` |                         `-` |

#### User Operation: Account creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00744` |                             `$0.00745` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.01093` |                             `$0.01095` |                      `146.94%` |                              `146.94%` |
| ZeroDev Kernel v3.1                    |                     `$0.01080` |                             `$0.01082` |                      `145.24%` |                              `145.24%` |
| Safe v1.4.1                            |                     `$0.01390` |                             `$0.01393` |                      `186.90%` |                              `186.90%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00935` |                             `$0.00937` |                      `125.67%` |                              `125.67%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.01015` |                             `$0.01017` |                      `136.44%` |                              `136.44%` |
| Simple Account (non-modular)           |                     `$0.00949` |                             `$0.00951` |                      `127.62%` |                              `127.62%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000002330` |    `-` |          `-` |   `0.000002330` |      `$0.00744` |
| Biconomy Nexus                         |      `342381` |       `0.000003424` |    `-` |          `-` |   `0.000003424` |      `$0.01093` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000003384` |    `-` |          `-` |   `0.000003384` |      `$0.01080` |
| Safe v1.4.1                            |      `435486` |       `0.000004355` |    `-` |          `-` |   `0.000004355` |      `$0.01390` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.000002928` |    `-` |          `-` |   `0.000002928` |      `$0.00935` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.000003179` |    `-` |          `-` |   `0.000003179` |      `$0.01015` |
| Simple Account (non-modular)           |      `297367` |       `0.000002974` |    `-` |          `-` |   `0.000002974` |      `$0.00949` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000002334` |    `-` |          `-` |   `0.000002334` |      `$0.00745` |
| Biconomy Nexus                         |      `342381` |       `0.000003430` |    `-` |          `-` |   `0.000003430` |      `$0.01095` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000003390` |    `-` |          `-` |   `0.000003390` |      `$0.01082` |
| Safe v1.4.1                            |      `435486` |       `0.000004363` |    `-` |          `-` |   `0.000004363` |      `$0.01393` |
| Alchemy Light Account v2 (non-modular) |      `292822` |       `0.000002934` |    `-` |          `-` |   `0.000002934` |      `$0.00937` |
| Coinbase Smart Wallet (non-modular)    |      `317904` |       `0.000003185` |    `-` |          `-` |   `0.000003185` |      `$0.01017` |
| Simple Account (non-modular)           |      `297367` |       `0.000002979` |    `-` |          `-` |   `0.000002979` |      `$0.00951` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00507` |                             `$0.00508` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00525` |                             `$0.00526` |                      `103.54%` |                              `103.54%` |
| ZeroDev Kernel v3.1                    |                     `$0.00610` |                             `$0.00611` |                      `120.28%` |                              `120.28%` |
| Safe v1.4.1                            |                     `$0.00563` |                             `$0.00564` |                      `111.19%` |                              `111.19%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00483` |                             `$0.00483` |                       `95.23%` |                               `95.23%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00501` |                             `$0.00502` |                       `98.79%` |                               `98.79%` |
| Simple Account (non-modular)           |                     `$0.00482` |                             `$0.00483` |                       `95.16%` |                               `95.16%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000001587` |    `-` |          `-` |   `0.000001587` |      `$0.00507` |
| Biconomy Nexus                         |      `164351` |       `0.000001644` |    `-` |          `-` |   `0.000001644` |      `$0.00525` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000001909` |    `-` |          `-` |   `0.000001909` |      `$0.00610` |
| Safe v1.4.1                            |      `176479` |       `0.000001765` |    `-` |          `-` |   `0.000001765` |      `$0.00563` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.000001511` |    `-` |          `-` |   `0.000001511` |      `$0.00483` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.000001568` |    `-` |          `-` |   `0.000001568` |      `$0.00501` |
| Simple Account (non-modular)           |      `151045` |       `0.000001510` |    `-` |          `-` |   `0.000001510` |      `$0.00482` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000001590` |    `-` |          `-` |   `0.000001590` |      `$0.00508` |
| Biconomy Nexus                         |      `164351` |       `0.000001647` |    `-` |          `-` |   `0.000001647` |      `$0.00526` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000001913` |    `-` |          `-` |   `0.000001913` |      `$0.00611` |
| Safe v1.4.1                            |      `176479` |       `0.000001768` |    `-` |          `-` |   `0.000001768` |      `$0.00564` |
| Alchemy Light Account v2 (non-modular) |      `151148` |       `0.000001514` |    `-` |          `-` |   `0.000001514` |      `$0.00483` |
| Coinbase Smart Wallet (non-modular)    |      `156812` |       `0.000001571` |    `-` |          `-` |   `0.000001571` |      `$0.00502` |
| Simple Account (non-modular)           |      `151045` |       `0.000001513` |    `-` |          `-` |   `0.000001513` |      `$0.00483` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00583` |                             `$0.00584` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00601` |                             `$0.00602` |                      `103.00%` |                              `103.00%` |
| ZeroDev Kernel v3.1                    |                     `$0.00686` |                             `$0.00687` |                      `117.60%` |                              `117.60%` |
| Safe v1.4.1                            |                     `$0.00641` |                             `$0.00642` |                      `109.89%` |                              `109.89%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00560` |                             `$0.00561` |                       `95.96%` |                               `95.96%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00578` |                             `$0.00579` |                       `99.10%` |                               `99.10%` |
| Simple Account (non-modular)           |                     `$0.00560` |                             `$0.00561` |                       `95.96%` |                               `95.96%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000001827` |    `-` |          `-` |   `0.000001827` |      `$0.00583` |
| Biconomy Nexus                         |      `188136` |       `0.000001881` |    `-` |          `-` |   `0.000001881` |      `$0.00601` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000002148` |    `-` |          `-` |   `0.000002148` |      `$0.00686` |
| Safe v1.4.1                            |      `200732` |       `0.000002007` |    `-` |          `-` |   `0.000002007` |      `$0.00641` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.000001753` |    `-` |          `-` |   `0.000001753` |      `$0.00560` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.000001810` |    `-` |          `-` |   `0.000001810` |      `$0.00578` |
| Simple Account (non-modular)           |      `175283` |       `0.000001753` |    `-` |          `-` |   `0.000001753` |      `$0.00560` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000001830` |    `-` |          `-` |   `0.000001830` |      `$0.00584` |
| Biconomy Nexus                         |      `188136` |       `0.000001885` |    `-` |          `-` |   `0.000001885` |      `$0.00602` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000002152` |    `-` |          `-` |   `0.000002152` |      `$0.00687` |
| Safe v1.4.1                            |      `200732` |       `0.000002011` |    `-` |          `-` |   `0.000002011` |      `$0.00642` |
| Alchemy Light Account v2 (non-modular) |      `175294` |       `0.000001756` |    `-` |          `-` |   `0.000001756` |      `$0.00561` |
| Coinbase Smart Wallet (non-modular)    |      `181014` |       `0.000001813` |    `-` |          `-` |   `0.000001813` |      `$0.00579` |
| Simple Account (non-modular)           |      `175283` |       `0.000001756` |    `-` |          `-` |   `0.000001756` |      `$0.00561` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00644` |                             `$0.00645` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00662` |                             `$0.00663` |                      `102.72%` |                              `102.72%` |
| ZeroDev Kernel v3.1                    |                     `$0.00748` |                             `$0.00750` |                      `116.15%` |                              `116.15%` |
| Safe v1.4.1                            |                     `$0.00704` |                             `$0.00705` |                      `109.25%` |                              `109.25%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00621` |                             `$0.00622` |                       `96.34%` |                               `96.34%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00640` |                             `$0.00642` |                       `99.40%` |                               `99.40%` |
| Simple Account (non-modular)           |                     `$0.00622` |                             `$0.00623` |                       `96.55%` |                               `96.55%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000002018` |    `-` |          `-` |   `0.000002018` |      `$0.00644` |
| Biconomy Nexus                         |      `207286` |       `0.000002073` |    `-` |          `-` |   `0.000002073` |      `$0.00662` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000002344` |    `-` |          `-` |   `0.000002344` |      `$0.00748` |
| Safe v1.4.1                            |      `220464` |       `0.000002205` |    `-` |          `-` |   `0.000002205` |      `$0.00704` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.000001944` |    `-` |          `-` |   `0.000001944` |      `$0.00621` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.000002006` |    `-` |          `-` |   `0.000002006` |      `$0.00640` |
| Simple Account (non-modular)           |      `194829` |       `0.000001948` |    `-` |          `-` |   `0.000001948` |      `$0.00622` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000002022` |    `-` |          `-` |   `0.000002022` |      `$0.00645` |
| Biconomy Nexus                         |      `207286` |       `0.000002077` |    `-` |          `-` |   `0.000002077` |      `$0.00663` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000002348` |    `-` |          `-` |   `0.000002348` |      `$0.00750` |
| Safe v1.4.1                            |      `220464` |       `0.000002209` |    `-` |          `-` |   `0.000002209` |      `$0.00705` |
| Alchemy Light Account v2 (non-modular) |      `194407` |       `0.000001948` |    `-` |          `-` |   `0.000001948` |      `$0.00622` |
| Coinbase Smart Wallet (non-modular)    |      `200573` |       `0.000002009` |    `-` |          `-` |   `0.000002009` |      `$0.00642` |
| Simple Account (non-modular)           |      `194829` |       `0.000001952` |    `-` |          `-` |   `0.000001952` |      `$0.00623` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.01580` |                             `$0.01583` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                          `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000004950` |    `-` |          `-` |   `0.000004950` |      `$0.01580` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000004960` |    `-` |          `-` |   `0.000004960` |      `$0.01583` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00549` |                             `$0.00550` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                          `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000001720` |    `-` |          `-` |   `0.000001720` |      `$0.00549` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000001724` |    `-` |          `-` |   `0.000001724` |      `$0.00550` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00630` |                             `$0.00631` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| ZeroDev Kernel v3.1                    |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Safe v1.4.1                            |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Alchemy Light Account v2 (non-modular) |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Coinbase Smart Wallet (non-modular)    |                  `Unsupported` |                          `Unsupported` |                                |                                        |
| Simple Account (non-modular)           |                  `Unsupported` |                          `Unsupported` |                                |                                        |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000001973` |    `-` |          `-` |   `0.000001973` |      `$0.00630` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000001977` |    `-` |          `-` |   `0.000001977` |      `$0.00631` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (non-modular) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet (non-modular)    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account (non-modular)           |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00312` |                             `$0.00313` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00671` |                             `$0.00673` |                      `215.10%` |                              `215.10%` |
| ZeroDev Kernel v3.1                    |                     `$0.00576` |                             `$0.00577` |                      `184.58%` |                              `184.58%` |
| Safe v1.4.1                            |                     `$0.00923` |                             `$0.00925` |                      `295.80%` |                              `295.80%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00542` |                             `$0.00543` |                      `173.52%` |                              `173.52%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00608` |                             `$0.00609` |                      `194.87%` |                              `194.87%` |
| Simple Account (non-modular)           |                     `$0.00556` |                             `$0.00557` |                      `178.19%` |                              `178.19%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000000978` |    `-` |          `-` |   `0.000000978` |      `$0.00312` |
| Biconomy Nexus                         |      `210309` |       `0.000002103` |    `-` |          `-` |   `0.000002103` |      `$0.00671` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000001805` |    `-` |          `-` |   `0.000001805` |      `$0.00576` |
| Safe v1.4.1                            |      `289207` |       `0.000002892` |    `-` |          `-` |   `0.000002892` |      `$0.00923` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.000001697` |    `-` |          `-` |   `0.000001697` |      `$0.00542` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.000001905` |    `-` |          `-` |   `0.000001905` |      `$0.00608` |
| Simple Account (non-modular)           |      `174219` |       `0.000001742` |    `-` |          `-` |   `0.000001742` |      `$0.00556` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000000980` |    `-` |          `-` |   `0.000000980` |      `$0.00313` |
| Biconomy Nexus                         |      `210309` |       `0.000002107` |    `-` |          `-` |   `0.000002107` |      `$0.00673` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000001808` |    `-` |          `-` |   `0.000001808` |      `$0.00577` |
| Safe v1.4.1                            |      `289207` |       `0.000002897` |    `-` |          `-` |   `0.000002897` |      `$0.00925` |
| Alchemy Light Account v2 (non-modular) |      `169655` |       `0.000001700` |    `-` |          `-` |   `0.000001700` |      `$0.00543` |
| Coinbase Smart Wallet (non-modular)    |      `190525` |       `0.000001909` |    `-` |          `-` |   `0.000001909` |      `$0.00609` |
| Simple Account (non-modular)           |      `174219` |       `0.000001745` |    `-` |          `-` |   `0.000001745` |      `$0.00557` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00157` |                             `$0.00157` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00127` |                             `$0.00127` |                       `80.96%` |                               `80.96%` |
| ZeroDev Kernel v3.1                    |                     `$0.00155` |                             `$0.00155` |                       `99.17%` |                               `99.17%` |
| Safe v1.4.1                            |                     `$0.00242` |                             `$0.00243` |                      `154.71%` |                              `154.71%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00126` |                             `$0.00126` |                       `80.50%` |                               `80.50%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00127` |                             `$0.00127` |                       `80.95%` |                               `80.95%` |
| Simple Account (non-modular)           |                     `$0.00126` |                             `$0.00126` |                       `80.33%` |                               `80.33%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000490` |    `-` |          `-` |   `0.000000490` |      `$0.00157` |
| Biconomy Nexus                         |       `39685` |       `0.000000397` |    `-` |          `-` |   `0.000000397` |      `$0.00127` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000486` |    `-` |          `-` |   `0.000000486` |      `$0.00155` |
| Safe v1.4.1                            |       `75840` |       `0.000000758` |    `-` |          `-` |   `0.000000758` |      `$0.00242` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.000000395` |    `-` |          `-` |   `0.000000395` |      `$0.00126` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.000000397` |    `-` |          `-` |   `0.000000397` |      `$0.00127` |
| Simple Account (non-modular)           |       `39381` |       `0.000000394` |    `-` |          `-` |   `0.000000394` |      `$0.00126` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000000491` |    `-` |          `-` |   `0.000000491` |      `$0.00157` |
| Biconomy Nexus                         |       `39685` |       `0.000000398` |    `-` |          `-` |   `0.000000398` |      `$0.00127` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000000487` |    `-` |          `-` |   `0.000000487` |      `$0.00155` |
| Safe v1.4.1                            |       `75840` |       `0.000000760` |    `-` |          `-` |   `0.000000760` |      `$0.00243` |
| Alchemy Light Account v2 (non-modular) |       `39463` |       `0.000000395` |    `-` |          `-` |   `0.000000395` |      `$0.00126` |
| Coinbase Smart Wallet (non-modular)    |       `39681` |       `0.000000398` |    `-` |          `-` |   `0.000000398` |      `$0.00127` |
| Simple Account (non-modular)           |       `39381` |       `0.000000395` |    `-` |          `-` |   `0.000000395` |      `$0.00126` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00233` |                             `$0.00233` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00202` |                             `$0.00203` |                       `86.89%` |                               `86.89%` |
| ZeroDev Kernel v3.1                    |                     `$0.00231` |                             `$0.00231` |                       `99.14%` |                               `99.14%` |
| Safe v1.4.1                            |                     `$0.00318` |                             `$0.00319` |                      `136.70%` |                              `136.70%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00203` |                             `$0.00203` |                       `87.06%` |                               `87.06%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00204` |                             `$0.00204` |                       `87.47%` |                               `87.47%` |
| Simple Account (non-modular)           |                     `$0.00203` |                             `$0.00203` |                       `87.05%` |                               `87.05%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000000729` |    `-` |          `-` |   `0.000000729` |      `$0.00233` |
| Biconomy Nexus                         |       `63384` |       `0.000000634` |    `-` |          `-` |   `0.000000634` |      `$0.00202` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000000723` |    `-` |          `-` |   `0.000000723` |      `$0.00231` |
| Safe v1.4.1                            |       `99715` |       `0.000000997` |    `-` |          `-` |   `0.000000997` |      `$0.00318` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.000000635` |    `-` |          `-` |   `0.000000635` |      `$0.00203` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.000000638` |    `-` |          `-` |   `0.000000638` |      `$0.00204` |
| Simple Account (non-modular)           |       `63503` |       `0.000000635` |    `-` |          `-` |   `0.000000635` |      `$0.00203` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000000731` |    `-` |          `-` |   `0.000000731` |      `$0.00233` |
| Biconomy Nexus                         |       `63384` |       `0.000000635` |    `-` |          `-` |   `0.000000635` |      `$0.00203` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000000725` |    `-` |          `-` |   `0.000000725` |      `$0.00231` |
| Safe v1.4.1                            |       `99715` |       `0.000000999` |    `-` |          `-` |   `0.000000999` |      `$0.00319` |
| Alchemy Light Account v2 (non-modular) |       `63505` |       `0.000000636` |    `-` |          `-` |   `0.000000636` |      `$0.00203` |
| Coinbase Smart Wallet (non-modular)    |       `63803` |       `0.000000639` |    `-` |          `-` |   `0.000000639` |      `$0.00204` |
| Simple Account (non-modular)           |       `63503` |       `0.000000636` |    `-` |          `-` |   `0.000000636` |      `$0.00203` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | Absolute - 2025-01-30 (latest) | Absolute - 2024-03-31 (high blob fees) | Relative - 2025-01-30 (latest) | Relative - 2024-03-31 (high blob fees) |
| :------------------------------------- | -----------------------------: | -------------------------------------: | -----------------------------: | -------------------------------------: |
| Alchemy Modular Account v2             |                     `$0.00466` |                             `$0.00467` |                      `100.00%` |                              `100.00%` |
| Biconomy Nexus                         |                     `$0.00435` |                             `$0.00436` |                       `93.45%` |                               `93.45%` |
| ZeroDev Kernel v3.1                    |                     `$0.00464` |                             `$0.00465` |                       `99.59%` |                               `99.59%` |
| Safe v1.4.1                            |                     `$0.00497` |                             `$0.00498` |                      `106.67%` |                              `106.67%` |
| Alchemy Light Account v2 (non-modular) |                     `$0.00436` |                             `$0.00437` |                       `93.54%` |                               `93.54%` |
| Coinbase Smart Wallet (non-modular)    |                     `$0.00438` |                             `$0.00439` |                       `94.03%` |                               `94.03%` |
| Simple Account (non-modular)           |                     `$0.00437` |                             `$0.00438` |                       `93.82%` |                               `93.82%` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000001460` |    `-` |          `-` |   `0.000001460` |      `$0.00466` |
| Biconomy Nexus                         |      `136403` |       `0.000001364` |    `-` |          `-` |   `0.000001364` |      `$0.00435` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000001454` |    `-` |          `-` |   `0.000001454` |      `$0.00464` |
| Safe v1.4.1                            |      `155690` |       `0.000001557` |    `-` |          `-` |   `0.000001557` |      `$0.00497` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.000001365` |    `-` |          `-` |   `0.000001365` |      `$0.00436` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.000001372` |    `-` |          `-` |   `0.000001372` |      `$0.00438` |
| Simple Account (non-modular)           |      `136943` |       `0.000001369` |    `-` |          `-` |   `0.000001369` |      `$0.00437` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000001462` |    `-` |          `-` |   `0.000001462` |      `$0.00467` |
| Biconomy Nexus                         |      `136403` |       `0.000001367` |    `-` |          `-` |   `0.000001367` |      `$0.00436` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000001456` |    `-` |          `-` |   `0.000001456` |      `$0.00465` |
| Safe v1.4.1                            |      `155690` |       `0.000001560` |    `-` |          `-` |   `0.000001560` |      `$0.00498` |
| Alchemy Light Account v2 (non-modular) |      `136524` |       `0.000001368` |    `-` |          `-` |   `0.000001368` |      `$0.00437` |
| Coinbase Smart Wallet (non-modular)    |      `137243` |       `0.000001375` |    `-` |          `-` |   `0.000001375` |      `$0.00439` |
| Simple Account (non-modular)           |      `136943` |       `0.000001372` |    `-` |          `-` |   `0.000001372` |      `$0.00438` |

</details>

<!-- /BENCHMARK_RESULTS -->
