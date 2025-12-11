import type { CryptoPrices } from "@/types";

export async function getPrices(): Promise<CryptoPrices | null> {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    );

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
