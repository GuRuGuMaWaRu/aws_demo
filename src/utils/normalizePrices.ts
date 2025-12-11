import type { CryptoPricesResponse } from "@/types";

export function normalizePrices(prices: CryptoPricesResponse) {
  return {
    bitcoin: prices.bitcoin.usd,
    ethereum: prices.ethereum.usd,
  };
}
