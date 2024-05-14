import "dotenv/config";

export const DRY_RUN = process.env.DRY_RUN === "1";
export const SNAPSHOT_TIMESTAMP_MS = Number(process.env.SNAPSHOT_TIMESTAMP_MS!);
export const ETH_PRICE_USD = Number(process.env.ETH_PRICE_USD!);
export const ETH_GAS_PRICE = BigInt(process.env.ETH_GAS_PRICE!);
export const ARB_GAS_PRICE = BigInt(process.env.ARB_GAS_PRICE!);
export const POLYGON_PRICE_USD = Number(process.env.POLYGON_PRICE_USD!);
export const POLYGON_GAS_PRICE = BigInt(process.env.POLYGON_GAS_PRICE!);
export const OPT_GAS_PRICE = BigInt(process.env.OPT_GAS_PRICE!);
export const OPT_L1_BASE_FEE = BigInt(process.env.OPT_L1_BASE_FEE!);
export const OPT_L1_BASE_FEE_SCALAR = BigInt(
  process.env.OPT_L1_BASE_FEE_SCALAR!,
);
export const OPT_BLOB_BASE_FEE = BigInt(process.env.OPT_BLOB_BASE_FEE!);
export const OPT_BLOB_BASE_FEE_SCALAR = BigInt(
  process.env.OPT_BLOB_BASE_FEE_SCALAR!,
);
export const BASE_GAS_PRICE = BigInt(process.env.BASE_GAS_PRICE!);
export const BASE_L1_BASE_FEE = BigInt(process.env.BASE_L1_BASE_FEE!);
export const BASE_L1_BASE_FEE_SCALAR = BigInt(
  process.env.BASE_L1_BASE_FEE_SCALAR!,
);
export const BASE_BLOB_BASE_FEE = BigInt(process.env.BASE_BLOB_BASE_FEE!);
export const BASE_BLOB_BASE_FEE_SCALAR = BigInt(
  process.env.BASE_BLOB_BASE_FEE_SCALAR!,
);
export const ZORA_GAS_PRICE = BigInt(process.env.ZORA_GAS_PRICE!);
export const ZORA_L1_BASE_FEE = BigInt(process.env.ZORA_L1_BASE_FEE!);
export const ZORA_L1_BASE_FEE_SCALAR = BigInt(
  process.env.ZORA_L1_BASE_FEE_SCALAR!,
);
export const ZORA_BLOB_BASE_FEE = BigInt(process.env.ZORA_BLOB_BASE_FEE!);
export const ZORA_BLOB_BASE_FEE_SCALAR = BigInt(
  process.env.ZORA_BLOB_BASE_FEE_SCALAR!,
);

export const ETH_GAS_PRICE_HIGH = BigInt(process.env.ETH_GAS_PRICE_HIGH!);
export const ARB_GAS_PRICE_HIGH = BigInt(process.env.ARB_GAS_PRICE_HIGH!);
export const POLYGON_GAS_PRICE_HIGH = BigInt(
  process.env.POLYGON_GAS_PRICE_HIGH!,
);
export const OPT_GAS_PRICE_HIGH = BigInt(process.env.OPT_GAS_PRICE_HIGH!);
export const OPT_L1_BASE_FEE_HIGH = BigInt(process.env.OPT_L1_BASE_FEE_HIGH!);
export const OPT_BLOB_BASE_FEE_HIGH = BigInt(
  process.env.OPT_BLOB_BASE_FEE_HIGH!,
);
export const BASE_GAS_PRICE_HIGH = BigInt(process.env.BASE_GAS_PRICE_HIGH!);
export const BASE_L1_BASE_FEE_HIGH = BigInt(process.env.BASE_L1_BASE_FEE_HIGH!);
export const BASE_BLOB_BASE_FEE_HIGH = BigInt(
  process.env.BASE_BLOB_BASE_FEE_HIGH!,
);
export const ZORA_GAS_PRICE_HIGH = BigInt(process.env.ZORA_GAS_PRICE_HIGH!);
export const ZORA_L1_BASE_FEE_HIGH = BigInt(process.env.ZORA_L1_BASE_FEE_HIGH!);
export const ZORA_BLOB_BASE_FEE_HIGH = BigInt(
  process.env.ZORA_BLOB_BASE_FEE_HIGH!,
);
