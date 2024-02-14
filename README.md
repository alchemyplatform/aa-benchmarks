# 👷 AA Benchmark Hardhat

A comprehensive benchmark for smart contract accounts that support account abstraction (ERC-4337), built on Hardhat for more accurate runtime execution benchmarking and use of official utilities for calculating pre-verification gas and L1 data fees. This work was inspired by ZeroDev's work on [aa-benchmark](https://github.com/zerodevapp/aa-benchmark), which is built on Foundry.

## Results

<!--begin-->
<!--end-->

### Run with different settings

Copy `.env.sample` to `.env` and update the values within `.env`.

```bash
cp .env.sample .env
```

Run `pnpm test` to run the benchmarks over the supported accounts.

```bash
pnpm test
```
