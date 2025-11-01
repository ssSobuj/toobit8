import React from "react";
import getbenifit from "../assets/images/getbenifit.jpg";
import ExtraHeader from "./extra/ExtraHeader";
import { useTranslation } from "react-i18next";

const GetBenifit = () => {
  const { t } = useTranslation();
  return (
    <div className="layout-container page-help">
      <ExtraHeader pageName={t("how_to_get_benefits")}></ExtraHeader>
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
            {/* <p>{t("you_send_virtual_currency_to_the_platform")}</p> */}
            <p>
              <strong>
                {t("how_to_deposit_funds_on_the_ai_trading_platform")}
              </strong>
            </p>
            <p>
              {" "}
              <strong>{t("step_1_get_your_deposit_address")}</strong>
            </p>
            <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
              <li>{t("log_into_your_ai_trading_account")}</li>
              <li>{t("head_to_the_deposit_page")}</li>
              <li>{t("choose_your_cryptocurrency")}</li>
              <li>
                {t(
                  "generate_the_deposit_address_and_copy_it_to_your_clipboard"
                )}
              </li>
            </ul>
            <p style={{ marginTop: "8vw" }}>
              <strong>{t("step_2_send_funds_from_your_wallet")}</strong>
            </p>
            <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
              <li>{t("open_your_crypto_wallet_app")}</li>
              <li>{t("select_the_correct_network")}</li>
              <li>{t("paste_the_copied_deposit_address_as_the_recipient")}</li>
              <li>
                {t("input_the_amount_you_want_to_deposit_and_confirm_the_send")}
              </li>
              <li>{t("wait_for_confirmation_on_the_blockchain")}</li>
            </ul>
            <p style={{ marginTop: "8vw" }}>
              <strong>{t("step_3_confirm_your_deposit")}</strong>
            </p>
            <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
              <li>{t("go_to_transaction_history_to_track_progress")}</li>
              <li>
                {t("click_complete_deposit_once_transaction_is_verified")}
              </li>
              <li>
                {t(
                  "if_your_deposit_doesnt_reflect_within_30_minutes_reach_out_to_support"
                )}
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>
              <strong>
                {t("how_to_withdraw_funds_from_the_ai_trading_platform")}
              </strong>
            </p>
            <p>
              <strong>{t("step_1_choose_your_withdrawal_option")}</strong>
            </p>
            <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
              <li>{t("log_in_and_open_the_fund_management_tab")}</li>
              <li>{t("click_withdraw_and_pick_your_preferred_network")}</li>
            </ul>
            <p>&nbsp;</p>
            <p>
              <strong>{t("step_2_fill_in_withdrawal_information")}</strong>
            </p>
            <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
              <li>{t("enter_the_amount_you_want_to_withdraw")}</li>
              <li>{t("paste_your_wallet_address")}</li>
              <li>{t("complete_any_required_security_verification_steps")}</li>
            </ul>
            <p>&nbsp;</p>
            <p>
              <strong>{t("step_3_final_confirmation_and_submission")}</strong>
            </p>
            <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
              <li>{t("double_check_all_the_details_before_submitting")}</li>
              <li>{t("withdrawals_usually_process_within_30_minutes")}</li>
              <li>{t("track_the_progress_under_withdrawal_records")}</li>
            </ul>
            <p>&nbsp;</p>
            <p>
              <strong>{t("important_notes")}</strong>
            </p>
            <ul>
              <li>
                {t(
                  "double_check_your_wallet_address_crypto_transfers_cant_be_undone"
                )}
              </li>
              <li>
                {t("make_sure_to_meet_the_platforms_minimum_withdrawal_limit")}
              </li>
              <li>{t("delays_can_occur_due_to_high_network_traffic")}</li>
              <li>
                {t("contact_live_chat_support_anytime_if_you_face_any_issues")}
              </li>
            </ul>
            <p>&nbsp;</p>

            <p>
              {t(
                "if_you_need_more_help_our_customer_service_team_is_available_24_7_via_live_chat"
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetBenifit;
