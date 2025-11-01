import React from "react";
import getbenifit from "../assets/images/getbenifit.jpg";
import ExtraHeader from "./extra/ExtraHeader";
import { useTranslation } from "react-i18next";

const WaveField = () => {
  const { t } = useTranslation();
  return (
    <div className="layout-container page-help">
      <ExtraHeader pageName={t("wave_field")}></ExtraHeader>
      <main
        className="layout-body"
        style={{
          paddingBottom: "80px",
          paddingTop: "50px",
          // Responsive margin top
          ...(window.innerWidth >= 330 ? { paddingTop: "75px" } : {}),
          ...(window.innerWidth >= 440 ? { paddingTop: "90px" } : {}),
          ...(window.innerWidth >= 600 ? { paddingTop: "110px" } : {}),
          ...(window.innerWidth >= 720 ? { paddingTop: "130px" } : {}),
        }}
      >
        <div className="layout-main">
          <div
            className="help-content"
            style={{ fontSize: "3.46667vw", padding: "4vw", lineHeight: "1.5" }}
          >
            <div className="help-content">
              {/* <p>{t("tron_is_a_distributed_operating_system")}</p>
              <p>{t("architecture_in_the_torn")}</p>
              <p>{t("goverance_tron_online_community")}</p>
              <p>{t("advantages_usdt_has_always")}</p>
              <p>&nbsp;</p> */}
              <p>
                <strong>{t("what_is_chain_quant")}</strong>
              </p>
              <p>{t("chain_quant_description")}</p>
              <p>
                <strong>{t("core_services_of_chain_quant")}</strong>
              </p>
              <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
                <li>{t("quantitative_arbitrage_trading")}</li>
                <li>{t("ai_auto_trading")}</li>
                <li>{t("fund_security")}</li>
                <li>{t("instant_deposits_withdrawals")}</li>
                <li>{t("multiple_trading_modes")}</li>
              </ul>
              <p>&nbsp;</p>

              <p>
                <strong>
                  {t("how_to_register_and_start_using_chain_quant")}
                </strong>
              </p>
              <ol style={{ listStyleType: "disc", marginLeft: "8vw" }}>
                <li>{t("sign_up")}</li>
                <li>{t("deposit_and_activate_ai_trading")}</li>
                <li>{t("launch_ai_trading")}</li>
              </ol>
              <p>&nbsp;</p>
              <p>
                <strong>{t("how_to_earn_with_chain_quant")}</strong>
              </p>
              <ul>
                <li>{t("arbitrage_profits")}</li>
                <br />
                <li>{t("ai_trading_returns")}</li>
                <br />
                <li>{t("referral_rewards")}</li>
              </ul>
              <p>&nbsp;</p>
              <p>
                <strong>{t("why_choose_chain_quant")}</strong>
              </p>
              <ul>
                <li>{t("ai_automation")}</li>
                <li>{t("military_grade_security")}</li>
                <li>{t("dual_trading_modes")}</li>
                <li>{t("reliable_returns")}</li>
                <li>{t("free_daily_withdrawals")}</li>
              </ul>
              <p>&nbsp;</p>
              <p>{t("start_your_journey_with_chain_quant")}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WaveField;
