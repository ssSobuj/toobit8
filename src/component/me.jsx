import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";
import "../assets/css/style10.css";
import "../assets/css/style11.css";
import "../assets/css/mine.css";
import { Link, useNavigate } from "react-router-dom";
// import depositeMe from "../assets/images/deposit_me.png";
// import withdrawMe from "../assets/images/withdraw-me.png";

//component
import Navbar from "./partial/navbar";
import { useTranslation } from "react-i18next";
import CustomLoader from "./extra/customLoader";

import TotalBalance from "./extra/mine/TotalBalance";
import MineLinks from "./extra/mine/MineLinks";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import axios from "axios";
import AuthTopPart from "./extra/authTopPart";
import MineHeader from "./extra/MineHeader";
import UserInfo from "./extra/mine/UserInfo";
import UserBalanceData from "./extra/mine/UserBalanceData";

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    withdraw_balance: "0.00",
    amount: "0.00",
    vip: "0",
  });
  const [total, setTotal] = useState("00");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/me");

        setData(response.data);
        setTotal(response?.data?.total);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const goDeposit = () => {
    navigate("/deposit");
  };
  const goWithdraw = () => {
    navigate("/withdraw");
  };
  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [showLogout, setShowLogout] = useState(false);
  const handleLogout = () => {
    setShowLogout(true);
  };
  const hideLogout = () => {
    setShowLogout(false);
  };

  const username = data?.user?.username;
  const userLevel = "GROK-0";

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(username);
    setIsCopied(true);
    const timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  };

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider">
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full layout-tab-bar px-mg"
        >
          <Header />
          {/* header ends */}
          <div data-v-fba32ec4="" data-v-f5703ed9="" className="mine-wrap mt-5">
            <div data-v-fba32ec4="" className="mine-wrap-content">
              <div
                data-v-fba32ec4=""
                className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text top-info"
              >
                <UserInfo
                  data={data}
                  handleCopy={handleCopy}
                  userLevel={userLevel}
                />
                {/* userinfo ends */}
                <UserBalanceData data={data} />
                <div data-v-fba32ec4 className="tools">
                  <Link to="/recharge" data-v-fba32ec4="" className="">
                    <div data-v-fba32ec4 className="item">
                      <div data-v-fba32ec4 className="label">
                        {t("recharge")}
                      </div>
                    </div>
                  </Link>
                  <Link to="/withdraw" data-v-fba32ec4="" className="">
                    <div data-v-fba32ec4 className="item">
                      <div data-v-fba32ec4 className="label">
                        {t("withdraw")}
                      </div>
                    </div>
                  </Link>
                </div>
                {/* tools ends */}
              </div>
              {/* ends top-info */}
              <MineLinks handleLogout={handleLogout}></MineLinks>
              <a
                data-v-fba32ec4=""
                className=":uno: base-main-btn flex items-center justify-center mt-20px! mt-20px!"
                onClick={handleConfirmLogout}
              >
                <div className="base-main-btn-content">{t("sign_out")}</div>
              </a>
            </div>
          </div>
          <Navbar></Navbar>
        </div>
      </div>

      {/* layout-tab-bar end */}
      <CustomLoader />
      <SupportLink />
      {/* copy  */}

      <div
        role="dialog"
        className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
        style={
          isCopied ? { zIndex: "2015", display: "flex" } : { display: "none" }
        }
      >
        <div className="van-toast__text">{t("copy_success")}</div>
      </div>
      {/* copy alert ends */}
    </div>
  );
};

export default HomePage;
