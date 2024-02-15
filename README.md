# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for more accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

<!-- BENCHMARK_RESULTS -->

### Runtime: Account creation

|             | Modular Account |     Kernel v2.1 |
| :---------- | --------------: | --------------: |
| L2 gas used |          725323 |          136206 |
| L2 fee      | 0.000072532 ETH | 0.000013621 ETH |
| L1 gas used |            2116 |            3308 |
| L1 fee      | 0.000036184 ETH | 0.000056567 ETH |
| Total fee   | 0.000108716 ETH | 0.000070187 ETH |

### Runtime: Native transfer

|             | Modular Account |     Kernel v2.1 |
| :---------- | --------------: | --------------: |
| L2 gas used |           50408 |           39436 |
| L2 fee      | 0.000005041 ETH | 0.000003944 ETH |
| L1 gas used |            2176 |            2304 |
| L1 fee      | 0.000037210 ETH | 0.000039398 ETH |
| Total fee   | 0.000042250 ETH | 0.000043342 ETH |

### User Operation: Account creation

|             | Modular Account |     Kernel v2.1 |
| :---------- | --------------: | --------------: |
| L2 gas used |          834202 |          237719 |
| L2 fee      | 0.000083420 ETH | 0.000023772 ETH |
| L1 gas used |            6624 |            8064 |
| L1 fee      | 0.000113270 ETH | 0.000137894 ETH |
| Total fee   | 0.000196691 ETH | 0.000161666 ETH |

<!-- /BENCHMARK_RESULTS -->

## Run with different settings

Copy `.env.sample` to `.env` and update the values within `.env`.

```bash
cp .env.sample .env
```

Run `pnpm test` to run the benchmarks over the supported accounts.

```bash
pnpm test
```
