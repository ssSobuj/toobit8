// Announcement.js
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Announcement = () => {
  const { t } = useTranslation();
  const messages = [
    ` <div class="notice-model-content">
      <p><span style="color: #;"><strong style="color:#833232;">${t(
        "chain_quantity_quantitative_investment_program"
      )}</strong></span></p>
    
      <p><strong style="color: #833232;">${t("vip_levels_rewards")}</strong></p>
      <p><strong style="color: #833232;">${t(
        "vip_level_deposit_range_daily_return"
      )}</strong></p>
      <p>${t("vip_1_deposit_range_daily_return")}<br/>
      ${t("vip_2_deposit_range_daily_return")}<br/>
      ${t("vip_3_deposit_range_daily_return")}<br/>
      ${t("vip_4_deposit_range_daily_return")}<br/>
      ${t("vip_5_deposit_range_daily_return")}<br/>
      ${t("vip_6_deposit_range_daily_return")}<br/>
      ${t("vip_7_deposit_range_daily_return")}<br/>
      ${t("vip_8_deposit_range_daily_return")}<br/>
      ${t("vip_9_deposit_range_daily_return")}<br/>
      ${t("vip_10_deposit_range_daily_return")}</p>
      <br/>
      <p><strong style="color: #833232;">${t("how_it_works")}</strong></p>
      <p>${t("chain_quantity_operates_on_progressive_model")}</p>
  <ul style="list-style-type: disc; margin-left: 20px;">
  <li>${t("start_with_10_usdt_activate_quantity_1")}</li>
  <li>${t("upgrade_to_quantity_2_by_adding_989_usdt")}</li>
  <li>${t("minimum_deposit_10_usdt")}</li>
  <li>${t("minimum_withdrawal_2_usdt")}</li>
</ul>
<br/>
      <p><strong style="color: #833232;">${t("example")}:</strong><br/>
      ${t("example_investing_1000_usdt_unlocks_vip_3")}<br/>
      ${t("daily_earnings_example")}</p>
      <p>&nbsp;</p>
      <p><strong style="color: #833232;">${t(
        "program_highlights"
      )}:</strong></p>
     <ul style="list-style-type: disc; margin-left: 20px;">
      <li>${t("validity_per_vip_tier")}</li>
      <li>${t("daily_system_reset")}</li>
      <li>${t("automatic_upgrades")}</li>
      <li>${t("instant_withdrawals")}</li>
    </ul>
      <p>&nbsp;</p>
      <p><strong style="color: #833232;">${t(
        "why_choose_chain_quantity"
      )}</strong></p>
      <ul style="list-style-type: disc; margin-left: 10px;">
        <li>${t("higher_tiers_offer_better_returns")}</li>
        <li>${t("no_lock_up_periods")}</li>
        <li>${t("real_time_profit_tracking")}</li>
        <li>${t("transparent_automated_system")}</li>
      </ul>
      <p>&nbsp;</p>
      <p><strong style="color: #833232;">${t(
        "sustainable_passive_income_model"
      )}</strong></p>
    </div>`,

    ` <div class="notice-model-content">
    <p><span style="color: #;"><strong style="color:#833232;">${t(
      "chain_quantity_team_rewards_program"
    )}</strong></span></p>
    <p>${t("unlock_powerful_earning_potential")}</p>

    <p><strong style="color: #833232;">${t(
      "multi_level_commission_structure"
    )}</strong></p>
    <p>${t("maximize_rewards_tiered_referral_program")}</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
      <li>${t("level_1_direct_referrals_earn_15_percent")}</li>
      <li>${t("level_2_indirect_referrals_earn_2_percent")}</li>
      <li>${t("level_3_extended_network_earn_1_percent")}</li>
    </ul>
    <br/>
    <p>${t("earn_every_time_referrals_deposit_funds")}</p>

    <p><strong style="color: #833232;">${t(
      "global_agent_recruitment"
    )}</strong></p>
    <p>${t("expanding_reach_motivated_partners")}</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
      <li>${t("national_agents_earn_5_percent")}</li>
      <li>${t("city_agents_earn_4_percent")}</li>
      <li>${t("regional_agents_earn_3_percent")}</li>
    </ul>
    <br/>
    <p><strong style="color: #833232;">${t("build_your_network")}</strong></p>
    <ul style="list-style-type: disc; margin-left: 20px;">
      <li>${t("launch_telegram_whatsapp_community")}</li>
      <li>${t("invite_official_support_team")}</li>
      <li>${t("grow_team_unlock_exponential_earning")}</li>
    </ul>
<br/>
    <p><strong style="color: #833232;">${t(
      "referral_bonus_example"
    )}</strong></p>
    <p>
    ${t("member_deposit_commission_rate_earnings")}<br/>
      ${t("member_a_1000_usdt_15_percent_150_usdt")}<br/>
      ${t("member_b_1000_usdt_2_percent_20_usdt")}<br/>
      ${t("member_c_1000_usdt_1_percent_10_usdt")}
</p>
    <br/>
    <p>${t("earn_bonuses_team_members_deposit")}</p>

    <p><strong style="color: #833232;">${t(
      "daily_agent_bonus_rewards"
    )}</strong></p>
    <p>${t("top_performing_agents_rewarded_daily")}</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
      <li>${t("1000_usdt_60_usdt_bonus")}</li>
      <li>${t("5000_usdt_188_usdt_bonus")}</li>
      <li>${t("16000_usdt_388_usdt_bonus")}</li>
      <li>${t("58000_usdt_1483_usdt_bonus")}</li>
      <li>${t("100000_usdt_6450_usdt_bonus")}</li>
      <li>${t("500000_usdt_99999_usdt_bonus")}</li>
    </ul>
    <br/>
    <p>${t("bonuses_cumulative_instantly_withdrawable")}</p>

    <p>${t("join_today_grow_network_start_earning")}</p>
  </div>`,
  ];

  const [show, setShow] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleNext = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentMessageIndex > 0) {
      setCurrentMessageIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div
      id="homeModal"
      className={`notice-model van-dialog trsx ${show ? "modal-open" : ""}`}
      style={{ zIndex: "2009" }}
    >
      <div className="van-dialog__header">{t("latest_announcement")}</div>
      <div className="van-dialog__content">
        <div className="content-holder">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="content"
              style={{ display: "block" }}
              dangerouslySetInnerHTML={{
                __html: messages[currentMessageIndex],
              }}
            ></motion.div>
          </AnimatePresence>
        </div>

        <div className="notice-model-indicators">
          {messages.map((_, index) => (
            <i
              key={index}
              className={`notice-model-indicator ${
                index === currentMessageIndex ? "active" : ""
              }`}
            ></i>
          ))}
        </div>
        <div className="notice-model-btns">
          <button
            className={`btn ${currentMessageIndex === 0 ? "disabled" : ""}`}
            onClick={handlePrevious}
            style={{ lineHeight: "4vw" }}
            disabled={currentMessageIndex === 0}
          >
            {t("previous")}
          </button>
          <button
            type="button"
            className="btn close"
            onClick={handleClose}
            style={{ lineHeight: "4vw" }}
          >
            {t("close")}
          </button>
          <button
            className={`btn next_btn ${
              currentMessageIndex === messages.length - 1 ? "disabled" : ""
            }`}
            id="homeModalNest"
            onClick={handleNext}
            style={{ lineHeight: "4vw" }}
            disabled={currentMessageIndex === messages.length - 1}
          >
            {t("next")}
          </button>
        </div>
      </div>
      <div className="van-hairline--top van-dialog__footer"></div>
    </div>
  );
};

export default Announcement;
