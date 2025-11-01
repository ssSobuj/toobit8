import React from "react";
import smartInvestMent_btc from "../../../assets/images/smart_investment_btc.jpg";
import smart_investment_eth from "../../../assets/images/smart_investment_eth.jpg";
import smart_investment_bnb from "../../../assets/images/smart_investment_bnb.jpg";
import smart_investment_doge from "../../../assets/images/smart_investment_doge.jpg";
import smart_investment_trx from "../../../assets/images/smart_investment_trx.jpg";
import smart_investment_usdt from "../../../assets/images/smart_investment_usdt.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeCycleInvest = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleInvest = (slug) => {
    navigate(`/invest-product/${slug}`);
  };
  const [baseUrl, setBaseUrl] = useState();

  useEffect(() => {
    console.log(data?.products);
    const baseUrl = axios.defaults.baseURL;
    setBaseUrl(baseUrl)
  });
  const [isSmartInvest, setIsSmartInvest] = useState(true);
  const handleSmartInvest = () => {
    setIsSmartInvest(true);
  }
  const handleCycleInvest = () => {
    setIsSmartInvest(false);
  }
  return (
    <div className="invest-list-container">
      <div className="tab-container5 head-tabs ">
        <div className="tabs5 ">
          <a className={`tab5 tab-item ${isSmartInvest ? "active" :"non-active5 non-active2"}`} onClick={handleSmartInvest}>{t("smart_investment")}</a>
          <a className={`tab5 tab-item ${isSmartInvest ? "non-active5 non-active2" :"active"}`} onClick={handleCycleInvest}>{t("cyclical_investing")}</a>
        </div>
      </div>
      <div className={`tab-content5 ${isSmartInvest ? "" : "hidden2"}`}>
        <div className="grid-wrap recharge-symbol-list symbol737">
          <Link to="/invest" className="grid-item router-link-exact-active router-link-active">
            <div className="icon" style={{ backgroundImage: `url(${smartInvestMent_btc})` }}></div>
            <div className="title">BTC</div>
          </Link>
          <Link to="/invest" className="grid-item router-link-exact-active router-link-active">
            <div className="icon" style={{ backgroundImage: `url(${smart_investment_eth})` }}></div>
            <div className="title">ETH</div>
          </Link><Link to="/invest" className="grid-item router-link-exact-active router-link-active">
            <div className="icon" style={{ backgroundImage: `url(${smart_investment_bnb})` }}></div>
            <div className="title">BNB</div>
          </Link><Link to="/invest" className="grid-item router-link-exact-active router-link-active">
            <div className="icon" style={{ backgroundImage: `url(${smart_investment_doge})` }}>
            </div>
            <div className="title">DOGE</div>
          </Link><Link to="/invest" className="grid-item router-link-exact-active router-link-active">
            <div className="icon" style={{ backgroundImage: `url(${smart_investment_trx})` }}></div>
            <div className="title">TRX</div>
          </Link><Link to="/invest" className="grid-item router-link-exact-active router-link-active">
            <div className="icon" style={{ backgroundImage: `url(${smart_investment_usdt})` }}>
            </div>
            <div className="title">USDT</div>
          </Link></div>
      </div>
      <div className={`tab-content5 ${isSmartInvest ? "hidden2" : ""}`}>
        <div className="invest-list-wrap">
          <div className="uni-view product-list-box flex">
            {data?.products?.map((product, index) => {
              return (
                <div className="uni-navigator col" key={index}>
                  <div className="uni-view product-item" onClick={() => handleInvest(product.slug)}>
                    <div className="uni-image">
                      <img src={`${baseUrl}${product.image}`} />
                    </div>
                    <div className="uni-view c-white mt10 mb10">
                      {product.title}
                    </div>
                    <div className="uni-view ft26 word">{product.daily_interest}-{product.interest_to}%</div>
                    <div className="uni-view ft26 word">
                      {t("cycle")}:{product.cycle} {t("day")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Link
          to="/invest/cycle-investing"
          aria-current="page"
          className="view-more router-link-exact-active router-link-active"
        >
          {t("view_more")} &gt;&gt;
        </Link>
      </div>

    </div>
  );
};

export default HomeCycleInvest;
