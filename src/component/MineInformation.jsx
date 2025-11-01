import "../assets/css/mineinfo.css";
import { useNavigate } from "react-router-dom";
// images import
import trontin_msb_certificate from "../assets/images/trontin_msb_certificate.png";
import tax_registration_certificate from "../assets/images/tax_registration_certificate.jpg";
import tronlove_whitepapaer from "../assets/images/tronlove_whitepapaer.jpg";
import breaking_news from "../assets/images/breaking_news.png";
import trontin_map from "../assets/images/trontin_map.png";
import { useEffect, useState } from "react";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";

const MineInformation = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const mineAnnouncement = () => {
    navigate("/mineinformation");
  };
  const mineMessage = () => {
    navigate("/mineinformation-message");
  };
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);
  const { t } = useTranslation();
  const whiteText = { color: "#ffffff" };
  return (
    <div id="app">
      <div className="layout-container page-announcement">
        <header
          className="layout-header"
          style={{ position: "fixed", width: "100%", zIndex: "9999" }}
        >
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left" onClick={goBack}>
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
              </div>
              <div className="van-nav-bar__title van-ellipsis">
                <button
                  id="announceBtn"
                  onClick={mineAnnouncement}
                  className="btn btn-nav active"
                >
                  {t("announcement")}
                </button>
                <button
                  id="messageBtn"
                  onClick={mineMessage}
                  className="btn btn-nav"
                >
                  {t("my_message")}
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* header ends */}
        <main className="layout-body">
          <div className="layout-main">
            <div className="van-pull-refresh">
              <div
                className="van-pull-refresh__track"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="van-pull-refresh__head"></div>
                <div role="feed" className="van-list">
                  <ul
                    id="noticeList"
                    className={`notice-list ${
                      isVisible ? "d-block" : "d-none"
                    }`}
                  >
                    <li className="msg">
                      <i className="icon-wrap">
                        <i
                          className="van-icon van-icon-volume-o"
                          style={{
                            color: "rgb(153, 153, 153)",
                            fontSize: "16px",
                          }}
                        ></i>
                      </i>
                      <b className="msg-title">
                        <em>【{t("welcome_to")} Chain Quant】</em>
                      </b>
                      <div className="msg-content">
                        {/* <p>
                          <span style={{ color: "#ff6600" }}>
                            {t("official_telegram_channel")}:{" "}
                            <a href="#" rel="noopener noreferrer">
                              https://t.me/troncexchannel
                            </a>
                          </span>
                        </p> */}
                        <div className="">
                          <p>
                            <strong style={{ color: "#833232" }}>
                              {t(
                                "chain_quantity_quantitative_investment_program"
                              )}
                            </strong>
                          </p>

                          <p>
                            <strong style={{ color: "#833232" }}>
                              {t("vip_levels_rewards")}
                            </strong>
                          </p>
                          <p>
                            <strong style={{ color: "#833232" }}>
                              {t("vip_level_deposit_range_daily_return")}
                            </strong>
                          </p>
                          <p style={whiteText}>
                            {t("vip_1_deposit_range_daily_return")}
                            <br />
                            {t("vip_2_deposit_range_daily_return")}
                            <br />
                            {t("vip_9_deposit_range_daily_return")}
                            <br />
                            {t("vip_3_deposit_range_daily_return")}
                            <br />
                            {t("vip_4_deposit_range_daily_return")}
                            <br />
                            {t("vip_5_deposit_range_daily_return")}
                            <br />
                            {t("vip_6_deposit_range_daily_return")}
                            <br />
                            {t("vip_7_deposit_range_daily_return")}
                            <br />
                            {t("vip_8_deposit_range_daily_return")}
                            <br />
                            {t("vip_10_deposit_range_daily_return")}
                          </p>
                          <br />
                          <p>
                            <strong style={{ color: "#833232" }}>
                              {t("how_it_works")}
                            </strong>
                          </p>
                          <p style={whiteText}>
                            {t("chain_quantity_operates_on_progressive_model")}
                          </p>
                          <ul
                            style={{
                              listStyleType: "disc",
                              marginLeft: 20,
                              color: "#ffffff",
                            }}
                          >
                            <li>
                              {t("start_with_10_usdt_activate_quantity_1")}
                            </li>
                            <li>
                              {t("upgrade_to_quantity_2_by_adding_989_usdt")}
                            </li>
                            <li>{t("minimum_deposit_10_usdt")}</li>
                            <li>{t("minimum_withdrawal_2_usdt")}</li>
                          </ul>
                          <br />
                          <p style={whiteText}>
                            <strong style={{ color: "#833232" }}>
                              {t("example")}:
                            </strong>
                            <br />
                            {t("example_investing_1000_usdt_unlocks_vip_3")}
                            <br />
                            {t("daily_earnings_example")}
                          </p>
                          <p style={whiteText}>&nbsp;</p>
                          <p>
                            <strong style={{ color: "#833232" }}>
                              {t("program_highlights")}
                            </strong>
                          </p>
                          <ul
                            style={{
                              listStyleType: "disc",
                              marginLeft: 20,
                              color: "#ffffff",
                            }}
                          >
                            <li>{t("validity_per_vip_tier")}</li>
                            <li>{t("daily_system_reset")}</li>
                            <li>{t("automatic_upgrades")}</li>
                            <li>{t("instant_withdrawals")}</li>
                          </ul>
                          <p style={whiteText}>&nbsp;</p>
                          <p>
                            <strong style={{ color: "#833232" }}>
                              {t("why_choose_chain_quantity")}
                            </strong>
                          </p>
                          <ul
                            style={{
                              listStyleType: "disc",
                              marginLeft: 10,
                              color: "#ffffff",
                            }}
                          >
                            <li>{t("higher_tiers_offer_better_returns")}</li>
                            <li>{t("no_lock_up_periods")}</li>
                            <li>{t("real_time_profit_tracking")}</li>
                            <li>{t("transparent_automated_system")}</li>
                          </ul>
                          <p style={whiteText}>&nbsp;</p>
                          <p>
                            <strong style={{ color: "#833232" }}>
                              {t("sustainable_passive_income_model")}
                            </strong>
                          </p>
                        </div>
                        <p>&nbsp;</p>
                      </div>
                    </li>
                  </ul>

                  <div id="loadingShow" className="van-list__finished-text">
                    {isVisible ? `${t("end")}` : `${t("loading")}...`}
                  </div>

                  <div className="van-list__placeholder"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default MineInformation;
