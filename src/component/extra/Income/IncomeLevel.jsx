import React from "react";
import VipCurrent from "./VipCurrent";
import VipUnlockable from "./VipUnlockable";
import { useTranslation } from "react-i18next";

const IncomeLevel = ({ handleUnlockLevel, data }) => {
  const { t } = useTranslation();
  const vipLevel = [
    {
      lavelName: "QUANTIFY 1",
      quantification: 1,
      profitRation: "1.50-1.50%",
      minUnclock: 15,
      numberOfDays: 180,
    },
    {
      lavelName: "QUANTIFY 2",
      quantification: 1,
      profitRation: "2.00-2.00%",
      minUnclock: 350,
      numberOfDays: 180,
    },
    {
      lavelName: "QUANTIFY 3",
      quantification: 1,
      profitRation: "2.50-2.50%",
      minUnclock: 2000,
      numberOfDays: 180,
    },
    {
      lavelName: "QUANTIFY 4",
      quantification: 1,
      profitRation: "3.00-3.00%",
      minUnclock: 10000,
      numberOfDays: 180,
    },
    // {
    //   lavelName: "GROK-4.0",
    //   quantification: 1,
    //   profitRation: "10.11% ~ 10.19%",
    //   minUnclock: 10999,
    //   numberOfDays: 365,
    // },
    // {
    //   lavelName: "GROK-5.0",
    //   quantification: 1,
    //   profitRation: "13.00% ~ 13.03%",
    //   minUnclock: 50999,
    //   numberOfDays: 365,
    // },
    // {
    //   lavelName: "GROK-6.0",
    //   quantification: 1,
    //   profitRation: "16.88% ~ 17.04%",
    //   minUnclock: 100999,
    //   numberOfDays: 365,
    // },
    // {
    //   lavelName: "GROK-7.0",
    //   quantification: 1,
    //   profitRation: "20.01% ~ 20.30%",
    //   minUnclock: 300999,
    //   numberOfDays: 365,
    // },
    // {
    //   lavelName: "GROK-8.0",
    //   quantification: 1,
    //   profitRation: "24.10% ~ 24.15%",
    //   minUnclock: 500999,
    //   numberOfDays: 365,
    // },
    // {
    //   lavelName: "GROK-9.0",
    //   quantification: 1,
    //   profitRation: "30.00% ~ 30.09%",
    //   minUnclock: 999999,
    //   numberOfDays: 365,
    // },
  ];

  const currentVip = data?.my_vip ?? 0;

  return (
    <div data-v-ca6100e8="" className="mt-24px">
      {vipLevel.map((level, index) => (
        <div
          data-v-ca6100e8=""
          className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text vip-card"
          key={index}
        >
          <h3
            data-v-ca6100e8=""
            className="base-section-title flex justify-between"
          >
            <div data-v-ca6100e8="" className="flex items-center">
              <div data-v-ca6100e8="" className="vip-name font-you">
                {level.lavelName}
              </div>
            </div>

            {currentVip === index + 1 ? (
              <div data-v-ca6100e8="" className="unlock-btn">
                <span>{t("current_vip")}</span>
              </div>
            ) : (
              <div
                data-v-ca6100e8=""
                className="unlock-btn"
                onClick={() => handleUnlockLevel(level.minUnclock)}
              >
                <span>{t("click_to_unlock")}</span>
              </div>
            )}
          </h3>

          <div
            data-v-ca6100e8=""
            className="grid grid-cols-1 gap-4px mt-10px bg-$bg-card2 py-5px rd!"
          >
            <div data-v-ca6100e8="" className="vip-info-item">
              <div data-v-ca6100e8="" className="text-$text-gray text-12px">
                {t("quantification_times_per_day")}
              </div>
              <div data-v-ca6100e8="" className="font-bold text-14px">
                {level.quantification}
              </div>
            </div>

            <div data-v-ca6100e8="" className="vip-info-item">
              <div data-v-ca6100e8="" className="text-$text-gray text-12px">
                {t("profit_ratio")}
              </div>
              <div data-v-ca6100e8="" className="font-bold text-14px">
                {level.profitRation}
              </div>
            </div>

            <div data-v-ca6100e8="" className="vip-info-item">
              <div data-v-ca6100e8="" className="text-$text-gray text-12px">
                {t("minimum_unlock_amount")}
              </div>
              <div data-v-ca6100e8="" className="font-bold text-14px">
                {"≥"}{level.minUnclock} USDT
              </div>
            </div>

            <div data-v-ca6100e8="" className="vip-info-item">
              <div data-v-ca6100e8="" className="text-$text-gray text-12px">
                {t("quantifiable_number_of_days")}
              </div>
              <div data-v-ca6100e8="" className="font-bold text-14px">
                {level.numberOfDays}
              </div>
            </div>
          </div>

          {/* <div
            data-v-ca6100e8=""
            className="text-sm text-left font-bold mt-8px"
          >
            JASMY QUANT
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default IncomeLevel;
