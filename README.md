# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for more accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

<!-- BENCHMARK_RESULTS -->

### Runtime: Account creation

|             | Modular Account  | Kernel v2.1      |
| ----------- | ---------------- | ---------------- |
| L2 gas used | 725323           | 136206           |
| L2 fee      | 0.0000725323 ETH | 0.0000136206 ETH |
| L1 gas used | 2116             | 3308             |
| L1 fee      | 0.0000361836 ETH | 0.0000565668 ETH |
| Total fee   | 0.0001087159 ETH | 0.0000701874 ETH |

### Runtime: Native transfer

|             | Modular Account  | Kernel v2.1      |
| ----------- | ---------------- | ---------------- |
| L2 gas used | 50408            | 39436            |
| L2 fee      | 0.0000050408 ETH | 0.0000039436 ETH |
| L1 gas used | 2176             | 2304             |
| L1 fee      | 0.0000372096 ETH | 0.0000393984 ETH |
| Total fee   | 0.0000422504 ETH | 0.000043342 ETH  |

### User Operation: Account creation

|             | Modular Account  | Kernel v2.1      |
| ----------- | ---------------- | ---------------- |
| L2 gas used | 834202           | 237719           |
| L2 fee      | 0.0000834202 ETH | 0.0000237719 ETH |
| L1 gas used | 6624             | 8064             |
| L1 fee      | 0.0001132704 ETH | 0.0001378944 ETH |
| Total fee   | 0.0001966906 ETH | 0.0001616663 ETH |

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
