import { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

import { getPrices } from "@/api/getPrices";
import { normalizePrices } from "@/utils/normalizePrices";
import type { CryptoPrices } from "@/types";
import { getCache, saveCache } from "@/utils/cache";

function App() {
  const [prices, setPrices] = useState<CryptoPrices | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const pricesRes = await getPrices();

      if (pricesRes) {
        setPrices(normalizePrices(pricesRes));
        saveCache({
          prices: pricesRes,
          timestamp: Date.now(),
        });
      } else {
        const cache = getCache();
        if (cache) {
          setPrices(normalizePrices(cache.prices));
        }
      }
    };
    fetchPrices();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Live Crypto Prices</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        {prices && (
          <div>
            <p>
              Bitcoin:{" "}
              <NumberFlow
                value={prices.bitcoin}
                format={{
                  style: "currency",
                  currency: "USD",
                }}
                suffix=" USD"
              />
            </p>
            <p>
              Ethereum:{" "}
              <NumberFlow
                value={prices.ethereum}
                format={{
                  style: "currency",
                  currency: "USD",
                }}
                suffix=" USD"
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
