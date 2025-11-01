import React from 'react';
import SingleHeader from './extra/SingleHeader';
import { useTranslation } from 'react-i18next';
import logo from "../assets/images/logo-text.webp";

const AgentCoperation = () => {
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={t("agent_cooperation")} />
          <div className="px-3 pb-30px">
            <div
              data-v-e98dae19=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
              style={{ direction: 'ltr' }}
            >
              <div data-v-e98dae19="" className="rich-text text-base">
                <p>
                  <strong>{t("global_recruitment_title")}</strong> {t("positions_available_subtitle")}
                </p>

                <p className="mt-2">
                  <strong>{t("job_description_promotion_title")}</strong>
                  <br />
                  {t("job_description_promotion_body")}
                </p>

                <p>
                  <ol className="order_list">
                    <li><strong>{t("growth_catalyst")}</strong></li>
                    <li><strong>{t("brand_architect")}</strong></li>
                    <li><strong>{t("engagement_guru")}</strong></li>
                    <li><strong>{t("visionary_strategist")}</strong></li>
                    <li><strong>{t("innovation_leader")}</strong></li>
                    <li><strong>{t("territory_commander")}</strong></li>
                  </ol>
                </p>

                <p className="mt-2">
                  {t("salary_tiers_intro")}
                </p>

                <p className="mt-2">
                  <strong>
                    {t("position")} {t("level_1")} {t("level_1_plus")} {t("level_2")} {t("weekly")} {t("salary")} ({t("usdt")})
                  </strong>
                </p>

                <table style={{ borderCollapse: 'collapse', width: '100%', height: '154px' }} border="1">
                  <tbody style={{ fontSize: "11px", lineHeight: "16px" }}>
                    <tr style={{ height: '22px' }}>
                      <td style={{ width: '23.7127%', textAlign: 'center', height: '22px' }}>{t("position")}</td>
                      <td style={{ width: '23.7127%', textAlign: 'center', height: '22px' }}>{t("level_1")}</td>
                      <td style={{ width: '23.7127%', textAlign: 'center', height: '22px' }}>
                        {t("level_1_plus")}<br />{t("level_2")}
                      </td>
                      <td style={{ width: '23.7127%', textAlign: 'center', height: '22px' }}>
                        {t("weekly")}<br />{t("salary")}<br />({t("usdt")})
                      </td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}><strong>{t("growth_catalyst")}</strong></td>
                      <td style={{ textAlign: 'center', height: '22px' }}>6</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>15</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>15</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}><strong>{t("brand_architect")}</strong></td>
                      <td style={{ textAlign: 'center', height: '22px' }}>20</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>50</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>30</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}><strong>{t("engagement_guru")}</strong></td>
                      <td style={{ textAlign: 'center', height: '22px' }}>45</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>160</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>80</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}><strong>{t("visionary_strategist")}</strong></td>
                      <td style={{ textAlign: 'center', height: '22px' }}>80</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>290</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>200</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}><strong>{t("innovation_leader")}</strong></td>
                      <td style={{ textAlign: 'center', height: '22px' }}>200</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>650</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>500</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}><strong>{t("territory_commander")}</strong></td>
                      <td style={{ textAlign: 'center', height: '22px' }}>600</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>1,500</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>1200</td>
                    </tr>
                  </tbody>
                </table>

                <p className="mt-2">
                  {t("meet_requirements_contact_manager")}
                </p>

                <p className="mt-2"><strong>{t("salary_payment_method_timing")}</strong></p>
                <p>{t("salary_distribution_detail")}</p>

                <p className="mt-2"><strong>{t("additional_rewards_title")}</strong></p>
                <p>{t("additional_rewards_body")}</p>

                <table style={{ borderCollapse: 'collapse', width: '100%', height: '198px' }} border="1">
                  <tbody>
                    <tr style={{ height: '22px' }}>
                      <td style={{ width: '48.694%', textAlign: 'center', height: '22px' }}>{t("total_weekly_deposits_usdt")}</td>
                      <td style={{ width: '48.694%', textAlign: 'center', height: '22px' }}>{t("reward_percentage")}</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}>500-4,999</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>1%</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}>5,000-9,999</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>2%</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}>10,000-49,999</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>4%</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}>50,000-99,999</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>6%</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}>100,000-299,999</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>10%</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}>300,000-499,999</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>13%</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}>500,000-999,999</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>17%</td>
                    </tr>
                    <tr style={{ height: '22px' }}>
                      <td style={{ textAlign: 'center', height: '22px' }}>1,000,000</td>
                      <td style={{ textAlign: 'center', height: '22px' }}>25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AgentCoperation;
