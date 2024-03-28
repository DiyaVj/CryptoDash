import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptocurrencyPrices = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setBitcoinPrices(response.data.bpi);
      } catch (error) {
        console.error("Error fetching Bitcoin prices:", error);
      }
    };

    fetchBitcoinPrices();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Bitcoin Prices</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {bitcoinPrices &&
          Object.entries(bitcoinPrices).map(([currency, { rate }]) => (
            <div
              key={currency}
              className="w-64 bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">{currency}</h2>
                  <span className="text-sm text-gray-300">Bitcoin Price</span>
                </div>
                <div className="text-2xl font-bold text-white">{rate}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CryptocurrencyPrices;
