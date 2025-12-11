//** API Types
export type CryptoPricesResponse = {
  bitcoin: { usd: number };
  ethereum: { usd: number };
};

export type CryptoPrices = {
  bitcoin: number;
  ethereum: number;
};

export type CacheData = {
  prices: CryptoPricesResponse;
  timestamp: number;
};
