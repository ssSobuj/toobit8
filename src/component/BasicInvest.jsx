// src/component/Invest.jsx
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./extra/Header";

import "../assets/css/invest.css";
import InvestPackageList from "./extra/Invest/InvestPackageList";

const Invest = () => {
  const navigate = useNavigate();
  const inviteReward = () => {
    navigate("/invitation-rewards");
  };
  const deposit = () => {
    navigate("/deposit");
  };
  const { t } = useTranslation();
  const [data, setData] = useState("");
  const [baseUrl, setBaseUrl] = useState();
  const [priceBoxes, setPriceBoxes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/cycle");

        setData(response.data);
        const baseUrl = axios.defaults.baseURL;
        setBaseUrl(baseUrl);

        // Example dynamic data for price boxes
        const priceBoxData = [
          {
            quantity: 1,
            rechargeAmount: "$10 – $199",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "2.46% – 2.52%",
          },
          {
            quantity: 2,
            rechargeAmount: "$200 – $999",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "2.71% – 2.72%",
          },
          {
            quantity: 3,
            rechargeAmount: "$1,000 – $4,999",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "2.92% – 2.98%",
          },
          {
            quantity: 4,
            rechargeAmount: "$5,000 – $9,999",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "3.15% – 3.19%",
          },
          {
            quantity: 5,
            rechargeAmount: "$10,000 – $14,999",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "3.36% – 3.40%",
          },
          {
            quantity: 6,
            rechargeAmount: "$15,000 – $29,999",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "3.69% – 3.73%",
          },
          {
            quantity: 7,
            rechargeAmount: "$30,000 – $59,999",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "3.92% – 3.97%",
          },
          {
            quantity: 8,
            rechargeAmount: "$60,000 – $99,999",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "4.25% – 4.27%",
          },
          {
            quantity: 9,
            rechargeAmount: "$100,000 – $149,999",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "4.54% – 4.58%",
          },
          {
            quantity: 10,
            rechargeAmount: "$150,000 – $200,000",
            qualification: t("per_day"),
            qualificationValue: 1,
            profitRatio: "5.01% – 5.10%",
          },
        ];

        setPriceBoxes(priceBoxData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // We want the box labels to retranslate when language changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full layout-tab-bar px-mg"
        >
          <Header />
          {/* header ends */}
          <div data-v-ede7987f="" data-v-f5703ed9="" className="invest-wrap">
            {/* invest tabs starts */}
            <div
              data-v-ede7987f=""
              className="top-wrap z-2 w-full flex flex-col rounded-b-xl space-y-3"
            >
              <div
                data-v-ede7987f=""
                className="mr-24 w-full flex items-center justify-between"
              >
                <div
                  data-v-ede7987f=""
                  className=":uno: base-user-tab flex items-center justify-center w-full"
                  style={{ "--84f29e72": "2" }}
                >
                  <div className=":uno: tab-item h-full flex cursor-pointer items-center justify-center active">
                    <div className="text-center">{t("smart_investment")}</div>
                  </div>
                  <Link
                    to="/invest/records"
                    className=":uno: tab-item h-full flex cursor-pointer items-center justify-center"
                  >
                    <div className="text-center">{t("invest_record")}</div>
                  </Link>
                </div>
              </div>
            </div>
            {/* invest tabs ends */}
            <div data-v-ede7987f="" className="mt-10px invset-level-wrap">
              {data?.products?.map((product, index) => (
                <div
                  data-v-ede7987f=""
                  className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text pt-8px!"
                  key={index}
                >
                  <Link to={`/invest-product/${product.slug}`}>
                    <h3
                      data-v-ede7987f=""
                      className="base-section-title mb-10px mb-10px"
                    >
                      {product.title}
                    </h3>
                    <div data-v-ede7987f="" className="level-info">
                      <div data-v-ede7987f="" className="left">
                        <img
                          data-v-ede7987f=""
                          src={`${baseUrl}${product.image}`}
                          className="vip-img"
                          alt={product.title}
                        />
                      </div>
                      <div data-v-ede7987f="" className="right">
                        <div data-v-ede7987f="" className="item">
                          <div data-v-ede7987f="" className="title">
                            <em data-v-ede7987f=""></em>{t("price")}
                          </div>
                          <div data-v-ede7987f="" className="value">
                            {product.starting_amount} USDT
                          </div>
                        </div>
                        <div data-v-ede7987f="" className="item">
                          <div data-v-ede7987f="" className="title">
                            <em data-v-ede7987f=""></em>{t("daily_rate")}
                          </div>
                          <div data-v-ede7987f="" className="value c-green">
                            {product.daily_interest}%{" "}
                          </div>
                        </div>
                        <div data-v-ede7987f="" className="item">
                          <div data-v-ede7987f="" className="title">
                            <em data-v-ede7987f=""></em>{t("cycle")}
                          </div>
                          <div data-v-ede7987f="" className="value">
                            {product.cycle} {t("day")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* (Optional) Pricing guidance boxes — uncomment if you want to show them
            <div className="mt-16px space-y-10px">
              {priceBoxes.map((p, i) => (
                <PriceBox key={i} {...p} />
              ))}
            </div>
            */}
          </div>
          <Navbar></Navbar>
        </div>
      </div>

      {/* layout-tab-bar end */}
      <CustomLoader />
      <SupportLink />
    </div>
  );
};

// PriceBox Component
const PriceBox = ({
  quantity,
  rechargeAmount,
  qualification,
  qualificationValue,
  profitRatio,
}) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "rgba(40, 40, 40, 0.95)",
        borderRadius: "12px",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: "white",
      }}
    >
      {/* Quantity Circle */}
      <div
        style={{
          backgroundColor: "#E0B397",
          borderRadius: "100%",
          color: "black",
          width: "65px",
          height: "55px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
        }}
      >
        <div style={{ fontSize: "10px" }}>{t("quantity")}</div>
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>{quantity}</div>
      </div>

      {/* Content Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          width: "100%",
        }}
      >
        {/* Top Row with Crown Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "2px",
          }}
        >
          <CrownIcon />
        </div>

        {/* First Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
          }}
        >
          <div style={{ color: "#9CA3AF" }}>{t("recharge_amount")}</div>
          <div style={{ fontWeight: "bold" }}>{rechargeAmount}</div>
        </div>

        {/* Second Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
          }}
        >
          <div style={{ color: "#9CA3AF" }}>{qualification}</div>
          <div style={{ fontWeight: "bold" }}>{qualificationValue}</div>
        </div>

        {/* Third Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
          }}
        >
          <div style={{ color: "#9CA3AF" }}>{t("profit_ratio")}</div>
          <div style={{ fontWeight: "bold" }}>{profitRatio}</div>
        </div>
      </div>
    </div>
  );
};

// Crown Icon Component
const CrownIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 6V12L12 16L20 12V6L12 2Z" fill="#E0B397" />
      <path d="M12 16V22M4 12V22H20V12" stroke="#E0B397" strokeWidth="2" />
      <path d="M12 8L8 6V10L12 12L16 10V6L12 8Z" fill="#2563EB" />
    </svg>
  );
};

export default Invest;
