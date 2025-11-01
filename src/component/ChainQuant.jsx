import React from "react";
import { useTranslation } from "react-i18next";

const ChainQuant = () => {
  const { t } = useTranslation();

  return (
    <div className="layout-container page-help">
      <main className="layout-body">
        <div className="layout-main">
          <div
            className="help-content"
            style={{ fontSize: "3.46667vw", padding: "4vw", lineHeight: "1.5" }}
          >
            <h2>{t("what_is_chain_quant")}</h2>
            <p>{t("chain_quant_description")}</p>

            <h2>{t("core_services_of_chain_quant")}</h2>
            <ul>
              <li>
                <strong>{t("quantitative_arbitrage_trading")}</strong>
                <ul>
                  <li>{t("arbitrage_trading_point1")}</li>
                  <li>{t("arbitrage_trading_point2")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("ai_auto_trading")}</strong>
                <ul>
                  <li>{t("auto_trading_point1")}</li>
                  <li>{t("auto_trading_point2")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("fund_security")}</strong>
                <ul>
                  <li>{t("fund_security_point1")}</li>
                  <li>{t("fund_security_point2")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("instant_deposits_withdrawals")}</strong>
                <ul>
                  <li>{t("deposits_withdrawals_point1")}</li>
                  <li>{t("deposits_withdrawals_point2")}</li>
                </ul>
              </li>
              <li>
                <strong>{t("multiple_trading_modes")}</strong>
                <ul>
                  <li>{t("trading_modes_point1")}</li>
                  <li>{t("trading_modes_point2")}</li>
                </ul>
              </li>
            </ul>

            <h2>{t("how_to_register_and_start_using_chain_quant")}</h2>
            <ol>
              <li>
                <strong>{t("sign_up")}</strong>
                <p>{t("sign_up_description")}</p>
              </li>
              <li>
                <strong>{t("deposit_and_activate_ai_trading")}</strong>
                <p>{t("deposit_description")}</p>
              </li>
              <li>
                <strong>{t("launch_ai_trading")}</strong>
                <p>{t("launch_ai_trading_description")}</p>
              </li>
            </ol>

            <h2>{t("how_to_earn_with_chain_quant")}</h2>
            <ul>
              <li>
                <strong>{t("arbitrage_profits")}</strong>
                <p>{t("arbitrage_profits_description")}</p>
              </li>
              <li>
                <strong>{t("ai_trading_returns")}</strong>
                <p>{t("ai_trading_returns_description")}</p>
              </li>
              <li>
                <strong>{t("referral_rewards")}</strong>
                <p>{t("referral_rewards_description")}</p>
              </li>
            </ul>

            <h2>{t("why_choose_chain_quant")}</h2>
            <ul>
              <li>{t("ai_automation")}</li>
              <li>{t("military_grade_security")}</li>
              <li>{t("dual_trading_modes")}</li>
              <li>{t("reliable_returns")}</li>
              <li>{t("free_daily_withdrawals")}</li>
            </ul>

            <p>{t("start_your_journey_with_chain_quant")}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChainQuant;
