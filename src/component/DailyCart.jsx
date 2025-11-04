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
import StreakCard from "./StreakCard";

const DailyCart = () => {
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
  const [activeTab, setActiveTab] = useState("direct");

  const rewardsData = [
    {
      task: "Complete the task with 3 active members at level 1!",
      usdt: 4,
      current: 0,
      total: 3,
    },
    {
      task: "Complete the task with 7 active members at level 1!",
      usdt: 6,
      current: 0,
      total: 7,
    },
    {
      task: "Complete the task with 15 active members at level 1!",
      usdt: 15,
      current: 0,
      total: 15,
    },
    {
      task: "Complete the task with 32 active members at level 1!",
      usdt: 30,
      current: 0,
      total: 32,
    },
    {
      task: "Complete the task with 65 active members at level 1!",
      usdt: 70,
      current: 0,
      total: 65,
    },
    {
      task: "Complete the task with 120 active members at level 1!",
      usdt: 100,
      current: 0,
      total: 120,
    },
    {
      task: "Complete the task with 250 active members at level 1!",
      usdt: 200,
      current: 0,
      total: 250,
    },
  ];

  const missionsData = [
    { task: "Invite 5 friends to register!", usdt: 5, current: 2, total: 5 },
    {
      task: "Get 10 total deposits from your team!",
      usdt: 10,
      current: 4,
      total: 10,
    },
  ];

  const currentData = activeTab === "direct" ? rewardsData : missionsData;
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full layout-tab-bar px-mg"
        >
          <Header />
          {/* header ends */}
          <div
            data-v-ede7987f=""
            data-v-f5703ed9=""
            className="invest-wrap mt-4"
          >
            <div className="invest-wrap ">
              <StreakCard />
            </div>
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

export default DailyCart;
