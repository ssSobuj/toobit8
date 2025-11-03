import btc_icon from "../../../assets/images/btc_icon.png";
import bnb_icon from "../../../assets/images/bnb_icon.png";
import trx_icon from "../../../assets/images/trx_icon.png";
import eth_icon from "../../../assets/images/eth_icon.png";
import doge_icon from "../../../assets/images/doge_icon.png";
import xrp_icon from "../../../assets/images/xrp_icon.png";
import ada_icon from "../../../assets/images/ada_icon.webp";
import sol_icon from "../../../assets/images/sol_icon.png";
import avax_icon from "../../../assets/images/avax_icon.png";
import ltc_icon from "../../../assets/images/ltc_icon.png";
import dot_icon from "../../../assets/images/dot_icon.png";
import link_icon from "../../../assets/images/link_icon.png";
import uni_icon from "../../../assets/images/uni_icon.png";
import atom_icon from "../../../assets/images/atom_icon.svg";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HomeQuotes = () => {
  const { t } = useTranslation();
  const [cryptoData, setCryptoData] = useState({
    btc: "0.00",
    eth: "0.00",
    bnb: "0.00",
    trx: "0.00",
    sol: "0.00",
    xrp: "0.00",
    ada: "0.00",
    avax: "0.00",
    ltc: "0.00",
    dot: "0.00",
    link: "0.00",
    uni: "0.00",
    atom: "0.00",
    doge: "0.00",
  });

  const [cryptoStats, setCryptoStats] = useState({});

  // Live price updates via WebSocket
  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@trade/ethusdt@trade/bnbusdt@trade/trxusdt@trade/solusdt@trade/xrpusdt@trade/adausdt@trade/avaxusdt@trade/ltcusdt@trade/dotusdt@trade/linkusdt@trade/uniusdt@trade/atomusdt@trade/dogeusdt@trade"
    );

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setCryptoData((prev) => ({
        ...prev,
        [msg.s.toLowerCase().replace("usdt", "")]: msg.p,
      }));
    };

    return () => socket.close();
  }, []);

  // 24hr stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const symbols = [
          "BTCUSDT",
          "ETHUSDT",
          "BNBUSDT",
          "TRXUSDT",
          "SOLUSDT",
          "XRPUSDT",
          "ADAUSDT",
          "AVAXUSDT",
          "LTCUSDT",
          "DOTUSDT",
          "LINKUSDT",
          "UNIUSDT",
          "ATOMUSDT",
          "DOGEUSDT",
        ];
        const responses = await Promise.all(
          symbols.map((s) =>
            fetch(
              `https://api.binance.com/api/v3/ticker/24hr?symbol=${s}`
            ).then((res) => res.json())
          )
        );
        const statsObj = responses.reduce((acc, item) => {
          acc[item.symbol.toLowerCase()] = item;
          return acc;
        }, {});
        setCryptoStats(statsObj);
      } catch (err) {
        console.error("Error fetching stats", err);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const cryptoList = [
    { key: "btc", title: "BTC / USDT", icon: btc_icon },
    { key: "eth", title: "ETH / USDT", icon: eth_icon },
    { key: "bnb", title: "BNB / USDT", icon: bnb_icon },
    { key: "trx", title: "TRX / USDT", icon: trx_icon },
    { key: "sol", title: "SOL / USDT", icon: sol_icon },
    { key: "xrp", title: "XRP / USDT", icon: xrp_icon },
    { key: "ada", title: "ADA / USDT", icon: ada_icon },
    { key: "avax", title: "AVAX / USDT", icon: avax_icon },
    { key: "ltc", title: "LTC / USDT", icon: ltc_icon },
    { key: "dot", title: "DOT / USDT", icon: dot_icon },
    { key: "link", title: "LINK / USDT", icon: link_icon },
    { key: "uni", title: "UNI / USDT", icon: uni_icon },
    { key: "atom", title: "ATOM / USDT", icon: atom_icon },
    { key: "doge", title: "DOGE / USDT", icon: doge_icon },
  ];

  return (
    <div className="container my-4">
      <h2
        className="text-light mb-3"
        style={{
          fontSize: "1.3rem",
          lineHeight: 1.05,
          letterSpacing: "0.4px",
          fontFamily: "'Inter', 'Segoe UI', Roboto, system-ui, sans-serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {t("instant_quotes")}
      </h2>

      <div className="row g-4">
        {cryptoList.map((c) => {
          const symbol = `${c.key}usdt`;
          const stats = cryptoStats[symbol] || {};
          const price = cryptoData[c.key] || "0.00";
          const change = stats.priceChangePercent
            ? parseFloat(stats.priceChangePercent).toFixed(2)
            : "0.00";
          const rise = parseFloat(change) >= 0;

          return (
            <div className="col-md-4 col-lg-3" key={c.key}>
              <div className="glass-card p-3 h-100 d-flex flex-column justify-content-between">
                {/* Header */}
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={c.icon}
                    alt={c.title}
                    className="me-3"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      padding: "6px",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold text-white">{c.title}</h6>
                    <small className="text-gray-200">
                      24h:{" "}
                      <span className={rise ? "text-white" : "text-danger"}>
                        {rise ? "+" : ""}
                        {change}%
                      </span>
                    </small>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <h5 className="fw-bold text-white">
                    ${Number(price).toFixed(4)}
                  </h5>
                  <small className="text-white">
                    Last Price • Binance Spot
                  </small>
                </div>

                {/* Stats */}
                <div className="mt-auto">
                  <div className="d-flex justify-content-between text-white small">
                    <span>High:</span>
                    <span>{stats.highPrice || "--"}</span>
                  </div>
                  <div className="d-flex justify-content-between text-white small">
                    <span>Low:</span>
                    <span>{stats.lowPrice || "--"}</span>
                  </div>
                  <div className="d-flex justify-content-between text-white small">
                    <span>Volume:</span>
                    <span>{stats.volume || "--"}</span>
                  </div>
                  <div className="d-flex justify-content-between text-white small">
                    <span>Trades:</span>
                    <span>{stats.count || "--"}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </div>
  );
};

export default HomeQuotes;
