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

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.91205` |                 `$17.89046` |
| Alchemy Modular Account                |          `$3.35985` |                 `$65.90573` |
| Biconomy Nexus                         |          `$1.34019` |                 `$26.28863` |
| Biconomy Smart Account v2              |          `$1.29152` |                 `$25.33392` |
| ZeroDev Kernel v3.1                    |          `$1.32468` |                 `$25.98442` |
| ZeroDev Kernel v2.1                    |          `$1.15981` |                 `$22.75052` |
| Safe v1.4.1                            |          `$1.70463` |                 `$33.43739` |
| Alchemy Light Account v2               |          `$1.04473` |                 `$20.49314` |
| Alchemy Light Account v2 (Multi-Owner) |          `$1.14620` |                 `$22.48340` |
| Alchemy Light Account                  |          `$1.21552` |                 `$23.84320` |
| Coinbase Smart Wallet                  |          `$1.24438` |                 `$24.40924` |
| Simple Account                         |          `$1.16399` |                 `$22.83237` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.000285677` |    `-` |          `-` |   `0.000285677` |      `$0.91205` |
| Alchemy Modular Account                |      `858351` |       `0.001052391` |    `-` |          `-` |   `0.001052391` |      `$3.35985` |
| Biconomy Nexus                         |      `342381` |       `0.000419780` |    `-` |          `-` |   `0.000419780` |      `$1.34019` |
| Biconomy Smart Account v2              |      `329947` |       `0.000404535` |    `-` |          `-` |   `0.000404535` |      `$1.29152` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.000414922` |    `-` |          `-` |   `0.000414922` |      `$1.32468` |
| ZeroDev Kernel v2.1                    |      `296301` |       `0.000363283` |    `-` |          `-` |   `0.000363283` |      `$1.15981` |
| Safe v1.4.1                            |      `435486` |       `0.000533933` |    `-` |          `-` |   `0.000533933` |      `$1.70463` |
| Alchemy Light Account v2               |      `266901` |       `0.000327237` |    `-` |          `-` |   `0.000327237` |      `$1.04473` |
| Alchemy Light Account v2 (Multi-Owner) |      `292822` |       `0.000359018` |    `-` |          `-` |   `0.000359018` |      `$1.14620` |
| Alchemy Light Account                  |      `310532` |       `0.000380731` |    `-` |          `-` |   `0.000380731` |      `$1.21552` |
| Coinbase Smart Wallet                  |      `317904` |       `0.000389770` |    `-` |          `-` |   `0.000389770` |      `$1.24438` |
| Simple Account                         |      `297367` |       `0.000364590` |    `-` |          `-` |   `0.000364590` |      `$1.16399` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `233004` |       `0.005603746` |    `-` |          `-` |   `0.005603746` |     `$17.89046` |
| Alchemy Modular Account                |      `858351` |       `0.020643342` |    `-` |          `-` |   `0.020643342` |     `$65.90573` |
| Biconomy Nexus                         |      `342381` |       `0.008234263` |    `-` |          `-` |   `0.008234263` |     `$26.28863` |
| Biconomy Smart Account v2              |      `329947` |       `0.007935225` |    `-` |          `-` |   `0.007935225` |     `$25.33392` |
| ZeroDev Kernel v3.1                    |      `338419` |       `0.008138977` |    `-` |          `-` |   `0.008138977` |     `$25.98442` |
| ZeroDev Kernel v2.1                    |      `296301` |       `0.007126039` |    `-` |          `-` |   `0.007126039` |     `$22.75052` |
| Safe v1.4.1                            |      `435486` |       `0.010473438` |    `-` |          `-` |   `0.010473438` |     `$33.43739` |
| Alchemy Light Account v2               |      `266901` |       `0.006418969` |    `-` |          `-` |   `0.006418969` |     `$20.49314` |
| Alchemy Light Account v2 (Multi-Owner) |      `292822` |       `0.007042369` |    `-` |          `-` |   `0.007042369` |     `$22.48340` |
| Alchemy Light Account                  |      `310532` |       `0.007468295` |    `-` |          `-` |   `0.007468295` |     `$23.84320` |
| Coinbase Smart Wallet                  |      `317904` |       `0.007645591` |    `-` |          `-` |   `0.007645591` |     `$24.40924` |
| Simple Account                         |      `297367` |       `0.007151676` |    `-` |          `-` |   `0.007151676` |     `$22.83237` |

</details>

#### User Operation: Native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.62130` |                 `$12.18719` |
| Alchemy Modular Account                |          `$0.64625` |                 `$12.67667` |
| Biconomy Nexus                         |          `$0.64332` |                 `$12.61916` |
| Biconomy Smart Account v2              |          `$0.63377` |                 `$12.43189` |
| ZeroDev Kernel v3.1                    |          `$0.74729` |                 `$14.65856` |
| ZeroDev Kernel v2.1                    |          `$0.63959` |                 `$12.54599` |
| Safe v1.4.1                            |          `$0.69079` |                 `$13.55037` |
| Alchemy Light Account v2               |          `$0.59122` |                 `$11.59712` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.59164` |                 `$11.60541` |
| Alchemy Light Account                  |          `$0.59842` |                 `$11.73840` |
| Coinbase Smart Wallet                  |          `$0.61381` |                 `$12.04031` |
| Simple Account                         |          `$0.59124` |                 `$11.59751` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.000194607` |    `-` |          `-` |   `0.000194607` |      `$0.62130` |
| Alchemy Modular Account                |      `165100` |       `0.000202423` |    `-` |          `-` |   `0.000202423` |      `$0.64625` |
| Biconomy Nexus                         |      `164351` |       `0.000201504` |    `-` |          `-` |   `0.000201504` |      `$0.64332` |
| Biconomy Smart Account v2              |      `161912` |       `0.000198514` |    `-` |          `-` |   `0.000198514` |      `$0.63377` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.000234070` |    `-` |          `-` |   `0.000234070` |      `$0.74729` |
| ZeroDev Kernel v2.1                    |      `163398` |       `0.000200336` |    `-` |          `-` |   `0.000200336` |      `$0.63959` |
| Safe v1.4.1                            |      `176479` |       `0.000216374` |    `-` |          `-` |   `0.000216374` |      `$0.69079` |
| Alchemy Light Account v2               |      `151040` |       `0.000185184` |    `-` |          `-` |   `0.000185184` |      `$0.59122` |
| Alchemy Light Account v2 (Multi-Owner) |      `151148` |       `0.000185317` |    `-` |          `-` |   `0.000185317` |      `$0.59164` |
| Alchemy Light Account                  |      `152880` |       `0.000187440` |    `-` |          `-` |   `0.000187440` |      `$0.59842` |
| Coinbase Smart Wallet                  |      `156812` |       `0.000192261` |    `-` |          `-` |   `0.000192261` |      `$0.61381` |
| Simple Account                         |      `151045` |       `0.000185190` |    `-` |          `-` |   `0.000185190` |      `$0.59124` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `158725` |       `0.003817336` |    `-` |          `-` |   `0.003817336` |     `$12.18719` |
| Alchemy Modular Account                |      `165100` |       `0.003970655` |    `-` |          `-` |   `0.003970655` |     `$12.67667` |
| Biconomy Nexus                         |      `164351` |       `0.003952642` |    `-` |          `-` |   `0.003952642` |     `$12.61916` |
| Biconomy Smart Account v2              |      `161912` |       `0.003893984` |    `-` |          `-` |   `0.003893984` |     `$12.43189` |
| ZeroDev Kernel v3.1                    |      `190912` |       `0.004591434` |    `-` |          `-` |   `0.004591434` |     `$14.65856` |
| ZeroDev Kernel v2.1                    |      `163398` |       `0.003929722` |    `-` |          `-` |   `0.003929722` |     `$12.54599` |
| Safe v1.4.1                            |      `176479` |       `0.004244320` |    `-` |          `-` |   `0.004244320` |     `$13.55037` |
| Alchemy Light Account v2               |      `151040` |       `0.003632512` |    `-` |          `-` |   `0.003632512` |     `$11.59712` |
| Alchemy Light Account v2 (Multi-Owner) |      `151148` |       `0.003635109` |    `-` |          `-` |   `0.003635109` |     `$11.60541` |
| Alchemy Light Account                  |      `152880` |       `0.003676764` |    `-` |          `-` |   `0.003676764` |     `$11.73840` |
| Coinbase Smart Wallet                  |      `156812` |       `0.003771329` |    `-` |          `-` |   `0.003771329` |     `$12.04031` |
| Simple Account                         |      `151045` |       `0.003632632` |    `-` |          `-` |   `0.003632632` |     `$11.59751` |

</details>

#### User Operation: ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.71501` |                 `$14.02535` |
| Alchemy Modular Account                |          `$0.74171` |                 `$14.54915` |
| Biconomy Nexus                         |          `$0.73642` |                 `$14.44542` |
| Biconomy Smart Account v2              |          `$0.72755` |                 `$14.27128` |
| ZeroDev Kernel v3.1                    |          `$0.84086` |                 `$16.49403` |
| ZeroDev Kernel v2.1                    |          `$0.73436` |                 `$14.40495` |
| Safe v1.4.1                            |          `$0.78573` |                 `$15.41256` |
| Alchemy Light Account v2               |          `$0.68573` |                 `$13.45109` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.68616` |                 `$13.45939` |
| Alchemy Light Account                  |          `$0.69288` |                 `$13.59137` |
| Coinbase Smart Wallet                  |          `$0.70855` |                 `$13.89858` |
| Simple Account                         |          `$0.68611` |                 `$13.45854` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.000223959` |    `-` |          `-` |   `0.000223959` |      `$0.71501` |
| Alchemy Modular Account                |      `189487` |       `0.000232323` |    `-` |          `-` |   `0.000232323` |      `$0.74171` |
| Biconomy Nexus                         |      `188136` |       `0.000230666` |    `-` |          `-` |   `0.000230666` |      `$0.73642` |
| Biconomy Smart Account v2              |      `185868` |       `0.000227886` |    `-` |          `-` |   `0.000227886` |      `$0.72755` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.000263379` |    `-` |          `-` |   `0.000263379` |      `$0.84086` |
| ZeroDev Kernel v2.1                    |      `187609` |       `0.000230020` |    `-` |          `-` |   `0.000230020` |      `$0.73436` |
| Safe v1.4.1                            |      `200732` |       `0.000246110` |    `-` |          `-` |   `0.000246110` |      `$0.78573` |
| Alchemy Light Account v2               |      `175186` |       `0.000214789` |    `-` |          `-` |   `0.000214789` |      `$0.68573` |
| Alchemy Light Account v2 (Multi-Owner) |      `175294` |       `0.000214921` |    `-` |          `-` |   `0.000214921` |      `$0.68616` |
| Alchemy Light Account                  |      `177013` |       `0.000217029` |    `-` |          `-` |   `0.000217029` |      `$0.69288` |
| Coinbase Smart Wallet                  |      `181014` |       `0.000221934` |    `-` |          `-` |   `0.000221934` |      `$0.70855` |
| Simple Account                         |      `175283` |       `0.000214908` |    `-` |          `-` |   `0.000214908` |      `$0.68611` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `182665` |       `0.004393093` |    `-` |          `-` |   `0.004393093` |     `$14.02535` |
| Alchemy Modular Account                |      `189487` |       `0.004557162` |    `-` |          `-` |   `0.004557162` |     `$14.54915` |
| Biconomy Nexus                         |      `188136` |       `0.004524671` |    `-` |          `-` |   `0.004524671` |     `$14.44542` |
| Biconomy Smart Account v2              |      `185868` |       `0.004470125` |    `-` |          `-` |   `0.004470125` |     `$14.27128` |
| ZeroDev Kernel v3.1                    |      `214817` |       `0.005166349` |    `-` |          `-` |   `0.005166349` |     `$16.49403` |
| ZeroDev Kernel v2.1                    |      `187609` |       `0.004511996` |    `-` |          `-` |   `0.004511996` |     `$14.40495` |
| Safe v1.4.1                            |      `200732` |       `0.004827605` |    `-` |          `-` |   `0.004827605` |     `$15.41256` |
| Alchemy Light Account v2               |      `175186` |       `0.004213223` |    `-` |          `-` |   `0.004213223` |     `$13.45109` |
| Alchemy Light Account v2 (Multi-Owner) |      `175294` |       `0.004215821` |    `-` |          `-` |   `0.004215821` |     `$13.45939` |
| Alchemy Light Account                  |      `177013` |       `0.004257163` |    `-` |          `-` |   `0.004257163` |     `$13.59137` |
| Coinbase Smart Wallet                  |      `181014` |       `0.004353387` |    `-` |          `-` |   `0.004353387` |     `$13.89858` |
| Simple Account                         |      `175283` |       `0.004215556` |    `-` |          `-` |   `0.004215556` |     `$13.45854` |

</details>

#### User Operation: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.78987` |                 `$15.49380` |
| Alchemy Modular Account                |          `$0.81685` |                 `$16.02298` |
| Biconomy Nexus                         |          `$0.81138` |                 `$15.91579` |
| Biconomy Smart Account v2              |          `$0.80250` |                 `$15.74165` |
| ZeroDev Kernel v3.1                    |          `$0.91743` |                 `$17.99596` |
| ZeroDev Kernel v2.1                    |          `$0.81121` |                 `$15.91233` |
| Safe v1.4.1                            |          `$0.86296` |                 `$16.92762` |
| Alchemy Light Account v2               |          `$0.76059` |                 `$14.91955` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.76097` |                 `$14.92692` |
| Alchemy Light Account                  |          `$0.76780` |                 `$15.06082` |
| Coinbase Smart Wallet                  |          `$0.78511` |                 `$15.40035` |
| Simple Account                         |          `$0.76262` |                 `$14.95932` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.000247407` |    `-` |          `-` |   `0.000247407` |      `$0.78987` |
| Alchemy Modular Account                |      `208682` |       `0.000255857` |    `-` |          `-` |   `0.000255857` |      `$0.81685` |
| Biconomy Nexus                         |      `207286` |       `0.000254145` |    `-` |          `-` |   `0.000254145` |      `$0.81138` |
| Biconomy Smart Account v2              |      `205018` |       `0.000251365` |    `-` |          `-` |   `0.000251365` |      `$0.80250` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.000287362` |    `-` |          `-` |   `0.000287362` |      `$0.91743` |
| ZeroDev Kernel v2.1                    |      `207241` |       `0.000254090` |    `-` |          `-` |   `0.000254090` |      `$0.81121` |
| Safe v1.4.1                            |      `220464` |       `0.000270302` |    `-` |          `-` |   `0.000270302` |      `$0.86296` |
| Alchemy Light Account v2               |      `194311` |       `0.000238237` |    `-` |          `-` |   `0.000238237` |      `$0.76059` |
| Alchemy Light Account v2 (Multi-Owner) |      `194407` |       `0.000238355` |    `-` |          `-` |   `0.000238355` |      `$0.76097` |
| Alchemy Light Account                  |      `196151` |       `0.000240493` |    `-` |          `-` |   `0.000240493` |      `$0.76780` |
| Coinbase Smart Wallet                  |      `200573` |       `0.000245915` |    `-` |          `-` |   `0.000245915` |      `$0.78511` |
| Simple Account                         |      `194829` |       `0.000238872` |    `-` |          `-` |   `0.000238872` |      `$0.76262` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `201790` |       `0.004853049` |    `-` |          `-` |   `0.004853049` |     `$15.49380` |
| Alchemy Modular Account                |      `208682` |       `0.005018802` |    `-` |          `-` |   `0.005018802` |     `$16.02298` |
| Biconomy Nexus                         |      `207286` |       `0.004985228` |    `-` |          `-` |   `0.004985228` |     `$15.91579` |
| Biconomy Smart Account v2              |      `205018` |       `0.004930683` |    `-` |          `-` |   `0.004930683` |     `$15.74165` |
| ZeroDev Kernel v3.1                    |      `234378` |       `0.005636791` |    `-` |          `-` |   `0.005636791` |     `$17.99596` |
| ZeroDev Kernel v2.1                    |      `207241` |       `0.004984146` |    `-` |          `-` |   `0.004984146` |     `$15.91233` |
| Safe v1.4.1                            |      `220464` |       `0.005302159` |    `-` |          `-` |   `0.005302159` |     `$16.92762` |
| Alchemy Light Account v2               |      `194311` |       `0.004673180` |    `-` |          `-` |   `0.004673180` |     `$14.91955` |
| Alchemy Light Account v2 (Multi-Owner) |      `194407` |       `0.004675488` |    `-` |          `-` |   `0.004675488` |     `$14.92692` |
| Alchemy Light Account                  |      `196151` |       `0.004717432` |    `-` |          `-` |   `0.004717432` |     `$15.06082` |
| Coinbase Smart Wallet                  |      `200573` |       `0.004823781` |    `-` |          `-` |   `0.004823781` |     `$15.40035` |
| Simple Account                         |      `194829` |       `0.004685637` |    `-` |          `-` |   `0.004685637` |     `$14.95932` |

</details>

#### User Operation: Session key creation

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$1.93774` |                 `$38.01013` |
| Alchemy Modular Account                |          `$3.84777` |                 `$75.47658` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |          `$0.83209` |                 `$16.32204` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$1.14554` |                 `$22.47057` |
| Safe v1.4.1                            |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2               |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet                  |       `Unsupported` |               `Unsupported` |
| Simple Account                         |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.000606951` |    `-` |          `-` |   `0.000606951` |      `$1.93774` |
| Alchemy Modular Account                |      `983001` |       `0.001205220` |    `-` |          `-` |   `0.001205220` |      `$3.84777` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `212577` |       `0.000260632` |    `-` |          `-` |   `0.000260632` |      `$0.83209` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `292655` |       `0.000358813` |    `-` |          `-` |   `0.000358813` |      `$1.14554` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `495041` |       `0.011905736` |    `-` |          `-` |   `0.011905736` |     `$38.01013` |
| Alchemy Modular Account                |      `983001` |       `0.023641174` |    `-` |          `-` |   `0.023641174` |     `$75.47658` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `212577` |       `0.005112477` |    `-` |          `-` |   `0.005112477` |     `$16.32204` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `292655` |       `0.007038353` |    `-` |          `-` |   `0.007038353` |     `$22.47057` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.67340` |                 `$13.20923` |
| Alchemy Modular Account                |          `$0.64084` |                 `$12.57041` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.49791` |                  `$9.76680` |
| Safe v1.4.1                            |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2               |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet                  |       `Unsupported` |               `Unsupported` |
| Simple Account                         |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.000210927` |    `-` |          `-` |   `0.000210927` |      `$0.67340` |
| Alchemy Modular Account                |      `163716` |       `0.000200726` |    `-` |          `-` |   `0.000200726` |      `$0.64084` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `127202` |       `0.000155957` |    `-` |          `-` |   `0.000155957` |      `$0.49791` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `172036` |       `0.004137466` |    `-` |          `-` |   `0.004137466` |     `$13.20923` |
| Alchemy Modular Account                |      `163716` |       `0.003937370` |    `-` |          `-` |   `0.003937370` |     `$12.57041` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `127202` |       `0.003059208` |    `-` |          `-` |   `0.003059208` |      `$9.76680` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### User Operation: Session key ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.77227` |                 `$15.14866` |
| Alchemy Modular Account                |          `$0.76306` |                 `$14.96800` |
| Biconomy Nexus                         |       `Unsupported` |               `Unsupported` |
| Biconomy Smart Account v2              |          `$0.57549` |                 `$11.28869` |
| ZeroDev Kernel v3.1                    |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v2.1                    |          `$0.59983` |                 `$11.76604` |
| Safe v1.4.1                            |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2               |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account v2 (Multi-Owner) |       `Unsupported` |               `Unsupported` |
| Alchemy Light Account                  |       `Unsupported` |               `Unsupported` |
| Coinbase Smart Wallet                  |       `Unsupported` |               `Unsupported` |
| Simple Account                         |       `Unsupported` |               `Unsupported` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.000241896` |    `-` |          `-` |   `0.000241896` |      `$0.77227` |
| Alchemy Modular Account                |      `194942` |       `0.000239011` |    `-` |          `-` |   `0.000239011` |      `$0.76306` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `147023` |       `0.000180259` |    `-` |          `-` |   `0.000180259` |      `$0.57549` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `153240` |       `0.000187882` |    `-` |          `-` |   `0.000187882` |      `$0.59983` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `197295` |       `0.004744945` |    `-` |          `-` |   `0.004744945` |     `$15.14866` |
| Alchemy Modular Account                |      `194942` |       `0.004688355` |    `-` |          `-` |   `0.004688355` |     `$14.96800` |
| Biconomy Nexus                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Biconomy Smart Account v2              |      `147023` |       `0.003535903` |    `-` |          `-` |   `0.003535903` |     `$11.28869` |
| ZeroDev Kernel v3.1                    |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v2.1                    |      `153240` |       `0.003685422` |    `-` |          `-` |   `0.003685422` |     `$11.76604` |
| Safe v1.4.1                            |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2               |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account v2 (Multi-Owner) |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Alchemy Light Account                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Coinbase Smart Wallet                  |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| Simple Account                         |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |

</details>

#### Runtime: Account creation

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.38271` |                  `$7.50711` |
| Alchemy Modular Account                |          `$2.83914` |                 `$55.69160` |
| Biconomy Nexus                         |          `$0.82321` |                 `$16.14790` |
| Biconomy Smart Account v2              |          `$0.77297` |                 `$15.16233` |
| ZeroDev Kernel v3.1                    |          `$0.70640` |                 `$13.85643` |
| ZeroDev Kernel v2.1                    |          `$0.64152` |                 `$12.58377` |
| Safe v1.4.1                            |          `$1.13205` |                 `$22.20583` |
| Alchemy Light Account v2               |          `$0.56304` |                 `$11.04445` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.66408` |                 `$13.02641` |
| Alchemy Light Account                  |          `$0.72519` |                 `$14.22513` |
| Coinbase Smart Wallet                  |          `$0.74577` |                 `$14.62885` |
| Simple Account                         |          `$0.68195` |                 `$13.37685` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.000119874` |    `-` |          `-` |   `0.000119874` |      `$0.38271` |
| Alchemy Modular Account                |      `725323` |       `0.000889291` |    `-` |          `-` |   `0.000889291` |      `$2.83914` |
| Biconomy Nexus                         |      `210309` |       `0.000257852` |    `-` |          `-` |   `0.000257852` |      `$0.82321` |
| Biconomy Smart Account v2              |      `197473` |       `0.000242114` |    `-` |          `-` |   `0.000242114` |      `$0.77297` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.000221261` |    `-` |          `-` |   `0.000221261` |      `$0.70640` |
| ZeroDev Kernel v2.1                    |      `163890` |       `0.000200939` |    `-` |          `-` |   `0.000200939` |      `$0.64152` |
| Safe v1.4.1                            |      `289207` |       `0.000354586` |    `-` |          `-` |   `0.000354586` |      `$1.13205` |
| Alchemy Light Account v2               |      `143842` |       `0.000176359` |    `-` |          `-` |   `0.000176359` |      `$0.56304` |
| Alchemy Light Account v2 (Multi-Owner) |      `169655` |       `0.000208007` |    `-` |          `-` |   `0.000208007` |      `$0.66408` |
| Alchemy Light Account                  |      `185267` |       `0.000227149` |    `-` |          `-` |   `0.000227149` |      `$0.72519` |
| Coinbase Smart Wallet                  |      `190525` |       `0.000233595` |    `-` |          `-` |   `0.000233595` |      `$0.74577` |
| Simple Account                         |      `174219` |       `0.000213603` |    `-` |          `-` |   `0.000213603` |      `$0.68195` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `97772` |       `0.002351417` |    `-` |          `-` |   `0.002351417` |      `$7.50711` |
| Alchemy Modular Account                |      `725323` |       `0.017444018` |    `-` |          `-` |   `0.017444018` |     `$55.69160` |
| Biconomy Nexus                         |      `210309` |       `0.005057931` |    `-` |          `-` |   `0.005057931` |     `$16.14790` |
| Biconomy Smart Account v2              |      `197473` |       `0.004749226` |    `-` |          `-` |   `0.004749226` |     `$15.16233` |
| ZeroDev Kernel v3.1                    |      `180465` |       `0.004340183` |    `-` |          `-` |   `0.004340183` |     `$13.85643` |
| ZeroDev Kernel v2.1                    |      `163890` |       `0.003941554` |    `-` |          `-` |   `0.003941554` |     `$12.58377` |
| Safe v1.4.1                            |      `289207` |       `0.006955428` |    `-` |          `-` |   `0.006955428` |     `$22.20583` |
| Alchemy Light Account v2               |      `143842` |       `0.003459400` |    `-` |          `-` |   `0.003459400` |     `$11.04445` |
| Alchemy Light Account v2 (Multi-Owner) |      `169655` |       `0.004080203` |    `-` |          `-` |   `0.004080203` |     `$13.02641` |
| Alchemy Light Account                  |      `185267` |       `0.004455671` |    `-` |          `-` |   `0.004455671` |     `$14.22513` |
| Coinbase Smart Wallet                  |      `190525` |       `0.004582126` |    `-` |          `-` |   `0.004582126` |     `$14.62885` |
| Simple Account                         |      `174219` |       `0.004189967` |    `-` |          `-` |   `0.004189967` |     `$13.37685` |

</details>

#### Runtime: Native transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.19188` |                  `$3.76392` |
| Alchemy Modular Account                |          `$0.19731` |                  `$3.87042` |
| Biconomy Nexus                         |          `$0.15534` |                  `$3.04709` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.19029` |                  `$3.73275` |
| ZeroDev Kernel v2.1                    |          `$0.17757` |                  `$3.48313` |
| Safe v1.4.1                            |          `$0.29686` |                  `$5.82313` |
| Alchemy Light Account v2               |          `$0.15410` |                  `$3.02275` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.15447` |                  `$3.03004` |
| Alchemy Light Account                  |          `$0.15421` |                  `$3.02490` |
| Coinbase Smart Wallet                  |          `$0.15532` |                  `$3.04678` |
| Simple Account                         |          `$0.15415` |                  `$3.02374` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.000060103` |    `-` |          `-` |   `0.000060103` |      `$0.19188` |
| Alchemy Modular Account                |       `50408` |       `0.000061803` |    `-` |          `-` |   `0.000061803` |      `$0.19731` |
| Biconomy Nexus                         |       `39685` |       `0.000048656` |    `-` |          `-` |   `0.000048656` |      `$0.15534` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.000059605` |    `-` |          `-` |   `0.000059605` |      `$0.19029` |
| ZeroDev Kernel v2.1                    |       `45364` |       `0.000055619` |    `-` |          `-` |   `0.000055619` |      `$0.17757` |
| Safe v1.4.1                            |       `75840` |       `0.000092985` |    `-` |          `-` |   `0.000092985` |      `$0.29686` |
| Alchemy Light Account v2               |       `39368` |       `0.000048268` |    `-` |          `-` |   `0.000048268` |      `$0.15410` |
| Alchemy Light Account v2 (Multi-Owner) |       `39463` |       `0.000048384` |    `-` |          `-` |   `0.000048384` |      `$0.15447` |
| Alchemy Light Account                  |       `39396` |       `0.000048302` |    `-` |          `-` |   `0.000048302` |      `$0.15421` |
| Coinbase Smart Wallet                  |       `39681` |       `0.000048651` |    `-` |          `-` |   `0.000048651` |      `$0.15532` |
| Simple Account                         |       `39381` |       `0.000048284` |    `-` |          `-` |   `0.000048284` |      `$0.15415` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `49021` |       `0.001178955` |    `-` |          `-` |   `0.001178955` |      `$3.76392` |
| Alchemy Modular Account                |       `50408` |       `0.001212312` |    `-` |          `-` |   `0.001212312` |      `$3.87042` |
| Biconomy Nexus                         |       `39685` |       `0.000954424` |    `-` |          `-` |   `0.000954424` |      `$3.04709` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `48615` |       `0.001169191` |    `-` |          `-` |   `0.001169191` |      `$3.73275` |
| ZeroDev Kernel v2.1                    |       `45364` |       `0.001091004` |    `-` |          `-` |   `0.001091004` |      `$3.48313` |
| Safe v1.4.1                            |       `75840` |       `0.001823952` |    `-` |          `-` |   `0.001823952` |      `$5.82313` |
| Alchemy Light Account v2               |       `39368` |       `0.000946800` |    `-` |          `-` |   `0.000946800` |      `$3.02275` |
| Alchemy Light Account v2 (Multi-Owner) |       `39463` |       `0.000949085` |    `-` |          `-` |   `0.000949085` |      `$3.03004` |
| Alchemy Light Account                  |       `39396` |       `0.000947474` |    `-` |          `-` |   `0.000947474` |      `$3.02490` |
| Coinbase Smart Wallet                  |       `39681` |       `0.000954328` |    `-` |          `-` |   `0.000954328` |      `$3.04678` |
| Simple Account                         |       `39381` |       `0.000947113` |    `-` |          `-` |   `0.000947113` |      `$3.02374` |

</details>

#### Runtime: ERC-20 transfer

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.28553` |                  `$5.60092` |
| Alchemy Modular Account                |          `$0.29237` |                  `$5.73506` |
| Biconomy Nexus                         |          `$0.24810` |                  `$4.86674` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.28307` |                  `$5.55263` |
| ZeroDev Kernel v2.1                    |          `$0.27099` |                  `$5.31560` |
| Safe v1.4.1                            |          `$0.39032` |                  `$7.65630` |
| Alchemy Light Account v2               |          `$0.24821` |                  `$4.86873` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.24858` |                  `$4.87603` |
| Alchemy Light Account                  |          `$0.24832` |                  `$4.87088` |
| Coinbase Smart Wallet                  |          `$0.24974` |                  `$4.89891` |
| Simple Account                         |          `$0.24857` |                  `$4.87587` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.000089436` |    `-` |          `-` |   `0.000089436` |      `$0.28553` |
| Alchemy Modular Account                |       `74693` |       `0.000091578` |    `-` |          `-` |   `0.000091578` |      `$0.29237` |
| Biconomy Nexus                         |       `63384` |       `0.000077713` |    `-` |          `-` |   `0.000077713` |      `$0.24810` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.000088665` |    `-` |          `-` |   `0.000088665` |      `$0.28307` |
| ZeroDev Kernel v2.1                    |       `69230` |       `0.000084880` |    `-` |          `-` |   `0.000084880` |      `$0.27099` |
| Safe v1.4.1                            |       `99715` |       `0.000122257` |    `-` |          `-` |   `0.000122257` |      `$0.39032` |
| Alchemy Light Account v2               |       `63410` |       `0.000077745` |    `-` |          `-` |   `0.000077745` |      `$0.24821` |
| Alchemy Light Account v2 (Multi-Owner) |       `63505` |       `0.000077861` |    `-` |          `-` |   `0.000077861` |      `$0.24858` |
| Alchemy Light Account                  |       `63438` |       `0.000077779` |    `-` |          `-` |   `0.000077779` |      `$0.24832` |
| Coinbase Smart Wallet                  |       `63803` |       `0.000078226` |    `-` |          `-` |   `0.000078226` |      `$0.24974` |
| Simple Account                         |       `63503` |       `0.000077859` |    `-` |          `-` |   `0.000077859` |      `$0.24857` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |       `72946` |       `0.001754351` |    `-` |          `-` |   `0.001754351` |      `$5.60092` |
| Alchemy Modular Account                |       `74693` |       `0.001796367` |    `-` |          `-` |   `0.001796367` |      `$5.73506` |
| Biconomy Nexus                         |       `63384` |       `0.001524385` |    `-` |          `-` |   `0.001524385` |      `$4.86674` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |       `72317` |       `0.001739224` |    `-` |          `-` |   `0.001739224` |      `$5.55263` |
| ZeroDev Kernel v2.1                    |       `69230` |       `0.001664982` |    `-` |          `-` |   `0.001664982` |      `$5.31560` |
| Safe v1.4.1                            |       `99715` |       `0.002398146` |    `-` |          `-` |   `0.002398146` |      `$7.65630` |
| Alchemy Light Account v2               |       `63410` |       `0.001525010` |    `-` |          `-` |   `0.001525010` |      `$4.86873` |
| Alchemy Light Account v2 (Multi-Owner) |       `63505` |       `0.001527295` |    `-` |          `-` |   `0.001527295` |      `$4.87603` |
| Alchemy Light Account                  |       `63438` |       `0.001525684` |    `-` |          `-` |   `0.001525684` |      `$4.87088` |
| Coinbase Smart Wallet                  |       `63803` |       `0.001534462` |    `-` |          `-` |   `0.001534462` |      `$4.89891` |
| Simple Account                         |       `63503` |       `0.001527247` |    `-` |          `-` |   `0.001527247` |      `$4.87587` |

</details>

#### Runtime: Uniswap V3 ERC-20 swap

##### Total fee (USD)

|                                        | 2025-01-30 (latest) | 2024-03-31 (high blob fees) |
| :------------------------------------- | ------------------: | --------------------------: |
| Alchemy Modular Account v2             |          `$0.57132` |                 `$11.20676` |
| Alchemy Modular Account                |          `$0.57846` |                 `$11.34689` |
| Biconomy Nexus                         |          `$0.53392` |                 `$10.47327` |
| Biconomy Smart Account v2              |       `Unsupported` |               `Unsupported` |
| ZeroDev Kernel v3.1                    |          `$0.56896` |                 `$11.16062` |
| ZeroDev Kernel v2.1                    |          `$0.55696` |                 `$10.92505` |
| Safe v1.4.1                            |          `$0.60942` |                 `$11.95416` |
| Alchemy Light Account v2               |          `$0.53403` |                 `$10.47526` |
| Alchemy Light Account v2 (Multi-Owner) |          `$0.53440` |                 `$10.48256` |
| Alchemy Light Account                  |          `$0.53414` |                 `$10.47741` |
| Coinbase Smart Wallet                  |          `$0.53721` |                 `$10.53776` |
| Simple Account                         |          `$0.53604` |                 `$10.51473` |

<details>
<summary><b>Details</b></summary>

##### 2025-01-30 (latest)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.000178951` |    `-` |          `-` |   `0.000178951` |      `$0.57132` |
| Alchemy Modular Account                |      `147781` |       `0.000181189` |    `-` |          `-` |   `0.000181189` |      `$0.57846` |
| Biconomy Nexus                         |      `136403` |       `0.000167238` |    `-` |          `-` |   `0.000167238` |      `$0.53392` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.000178214` |    `-` |          `-` |   `0.000178214` |      `$0.56896` |
| ZeroDev Kernel v2.1                    |      `142287` |       `0.000174453` |    `-` |          `-` |   `0.000174453` |      `$0.55696` |
| Safe v1.4.1                            |      `155690` |       `0.000190886` |    `-` |          `-` |   `0.000190886` |      `$0.60942` |
| Alchemy Light Account v2               |      `136429` |       `0.000167270` |    `-` |          `-` |   `0.000167270` |      `$0.53403` |
| Alchemy Light Account v2 (Multi-Owner) |      `136524` |       `0.000167387` |    `-` |          `-` |   `0.000167387` |      `$0.53440` |
| Alchemy Light Account                  |      `136457` |       `0.000167305` |    `-` |          `-` |   `0.000167305` |      `$0.53414` |
| Coinbase Smart Wallet                  |      `137243` |       `0.000168268` |    `-` |          `-` |   `0.000168268` |      `$0.53721` |
| Simple Account                         |      `136943` |       `0.000167901` |    `-` |          `-` |   `0.000167901` |      `$0.53604` |

##### 2024-03-31 (high blob fees)

|                                        | Execution gas | Execution fee (ETH) | L1 gas | L1 fee (ETH) | Total fee (ETH) | Total fee (USD) |
| :------------------------------------- | ------------: | ------------------: | -----: | -----------: | --------------: | --------------: |
| Alchemy Modular Account v2             |      `145956` |       `0.003510242` |    `-` |          `-` |   `0.003510242` |     `$11.20676` |
| Alchemy Modular Account                |      `147781` |       `0.003554133` |    `-` |          `-` |   `0.003554133` |     `$11.34689` |
| Biconomy Nexus                         |      `136403` |       `0.003280492` |    `-` |          `-` |   `0.003280492` |     `$10.47327` |
| Biconomy Smart Account v2              |           `-` |                 `-` |    `-` |          `-` |             `-` |             `-` |
| ZeroDev Kernel v3.1                    |      `145355` |       `0.003495788` |    `-` |          `-` |   `0.003495788` |     `$11.16062` |
| ZeroDev Kernel v2.1                    |      `142287` |       `0.003422002` |    `-` |          `-` |   `0.003422002` |     `$10.92505` |
| Safe v1.4.1                            |      `155690` |       `0.003744344` |    `-` |          `-` |   `0.003744344` |     `$11.95416` |
| Alchemy Light Account v2               |      `136429` |       `0.003281117` |    `-` |          `-` |   `0.003281117` |     `$10.47526` |
| Alchemy Light Account v2 (Multi-Owner) |      `136524` |       `0.003283402` |    `-` |          `-` |   `0.003283402` |     `$10.48256` |
| Alchemy Light Account                  |      `136457` |       `0.003281791` |    `-` |          `-` |   `0.003281791` |     `$10.47741` |
| Coinbase Smart Wallet                  |      `137243` |       `0.003300694` |    `-` |          `-` |   `0.003300694` |     `$10.53776` |
| Simple Account                         |      `136943` |       `0.003293479` |    `-` |          `-` |   `0.003293479` |     `$10.51473` |

</details>

<!-- /BENCHMARK_RESULTS -->
