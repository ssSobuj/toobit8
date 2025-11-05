import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IncomePartners = () => {
  const partners = [
    {
      name: "Binance",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png",
    },
    {
      name: "Kraken",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/24.png",
    },
    {
      name: "KuCoin",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png",
    },
    {
      name: "Coinbase Exchange",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/89.png",
    },
    {
      name: "OKX",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/294.png",
    },
    {
      name: "Bitstamp",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/70.png",
    },
    {
      name: "Bitfinex",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/37.png",
    },
    {
      name: "Bybit",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png",
    },
    {
      name: "Gate.io",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png",
    },
    {
      name: "Bitget",
      src: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/513.png",
    },
  ];

  return (
    <div style={{ opacity: 1, transform: "none" }}>
      <div className="mt-4">
        <div className="bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl fw-bold text-white mb-4 sm:mb-6 text-center">
            Core Cooperative Financial Institutions
          </h3>

          <div className="row g-3">
            {partners.map((partner, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="d-flex align-items-center justify-content-center gap-2 p-3 bg-black/20 border border-purple-500/30 rounded-xl">
                  <img
                    alt={partner.name}
                    src={partner.src}
                    className="rounded object-cover"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="text-white fw-medium text-center text-truncate small">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomePartners;
