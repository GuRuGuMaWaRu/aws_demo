import type { CryptoPricesResponse } from "@/types";

export async function getPrices(): Promise<CryptoPricesResponse | null> {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    );

    const data = await res.json();
    return data as CryptoPricesResponse;
  } catch (error) {
    console.error(error);
    return null;
  }
}
