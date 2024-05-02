import "dotenv/config";

export const DRY_RUN = process.env.DRY_RUN === "1";
export const ETH_PRICE_USD = Number(process.env.ETH_PRICE_USD);
export const L1_BASE_FEE = BigInt(process.env.L1_BASE_FEE!);
export const L1_BASE_FEE_SCALAR = BigInt(process.env.L1_BASE_FEE_SCALAR!);
export const L1_BLOB_BASE_FEE = BigInt(process.env.L1_BLOB_BASE_FEE!);
export const L1_BLOB_BASE_FEE_SCALAR = BigInt(
  process.env.L1_BLOB_BASE_FEE_SCALAR!,
);
export const L2_BASE_FEE = BigInt(process.env.L2_BASE_FEE!);
