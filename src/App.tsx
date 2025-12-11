import { Button } from "./components/ui/button";
import { useState, useEffect } from "react";
import { getPrices } from "./api/getPrices";

type CryptoPrices = {
  bitcoin: { usd: number };
  ethereum: { usd: number };
};

function App() {
  const [prices, setPrices] = useState<CryptoPrices | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await getPrices();
      if (prices) {
        setPrices(prices);
      }
    };
    fetchPrices();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
        {prices && (
          <div>
            <p>Bitcoin: {prices.bitcoin.usd}</p>
            <p>Ethereum: {prices.ethereum.usd}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
