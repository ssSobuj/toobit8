import { useState } from "react";
// images import
import transfer_to_basic_icon from "../assets/images/transfer_to_basic_icon.png";
import transfer_to_promotion_account from "../assets/images/transfer_to_promotion_account.png";
import { useNavigate } from "react-router-dom";
import ExtraHeader from "./extra/ExtraHeader";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";
import DepositHeader from "./extra/DepositHeader";
const Deposit = () => {
  const navigate = useNavigate();
  const rechargePage = (type) => {
    navigate(`/recharge?type=${type}`);
  };
  const { t } = useTranslation();
  return (
    <div id="app">
      <div className="layout-container invest-recharge-container">
        <DepositHeader pageName={t("recharge")}></DepositHeader>
        <main className="layout-body">
          <div className="layout-main">
            <h2 className="page-title">{t("recharge")}</h2>
            <div className="grid-wrap">
              <a
                className="grid-item"
                onClick={() => rechargePage("basic")}
              >
                <div className="link-body">
                  <h3 className="link-title">
                    {t("transfer_to_flexible_account")}
                  </h3>
                </div>
                <div className="link-foot">
                  {t("transfer_into_flexible_account")}
                </div>
              </a>
              <a className="grid-item" onClick={() => rechargePage("promotion")}>
                <div className="link-body">
                  <h3 className="link-title">
                    {t("transfer_to_wallet_account")}
                  </h3>
                </div>
                <div className="link-foot">
                  {t("transfer_into_wallet_account")}
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default Deposit;
