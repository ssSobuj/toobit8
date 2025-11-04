import React from "react";
import { useTranslation } from "react-i18next";

const IncomeTop = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div style={{ opacity: 1, transform: "none", marginTop: "50px" }}>
      <div className="pb-4">
        <div className="bg-purple-600/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-xl p-4 sm:p-6 text-white">
          {/* Header */}
          <div
            style={{ marginBottom: "30px" }}
            className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2 sm:gap-4"
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-200">
              {t("quantitative_account")}: {data?.authbal?.balance || "0.00"}
            </div>
            <div className="px-3 py-1 bg-black/20 border border-purple-500/30 rounded-full text-xs sm:text-sm md:text-base font-semibold text-purple-200">
              {t("vip")}-{data?.my_vip || 0}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="bg-black/20 border border-purple-500/30 transition p-3 sm:p-4 rounded-xl flex flex-col items-center min-h-[70px]">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                0.00
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm mt-1 text-purple-200/80 text-center leading-tight">
                {t("trial_fee")}
              </div>
            </div>

            <div className="bg-black/20 border border-purple-500/30 transition p-3 sm:p-4 rounded-xl flex flex-col items-center min-h-[70px]">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {data?.todayTrad || 0}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm mt-1 text-purple-200/80 text-center leading-tight">
                {t("profit_assets")}
              </div>
            </div>

            <div className="bg-black/20 border border-purple-500/30 transition p-3 sm:p-4 rounded-xl flex flex-col items-center min-h-[70px]">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {data?.allIncomeToday || 0}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm mt-1 text-purple-200/80 text-center leading-tight">
                {t("todays_earnings")}
              </div>
            </div>

            <div className="bg-black/20 border border-purple-500/30 transition p-3 sm:p-4 rounded-xl flex flex-col items-center min-h-[70px]">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {data?.allIncomes || 0}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm mt-1 text-purple-200/80 text-center leading-tight">
                {t("total_revenue")}
              </div>
            </div>

            <div className="bg-black/20 border border-purple-500/30 transition p-3 sm:p-4 rounded-xl flex flex-col items-center min-h-[70px]">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {data?.totalDays || 0}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm mt-1 text-purple-200/80 text-center leading-tight">
                {t("quantifiable_number_of_days")}
              </div>
            </div>

            <div className="bg-black/20 border border-purple-500/30 transition p-3 sm:p-4 rounded-xl flex flex-col items-center min-h-[70px]">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {data?.leftdays || 0}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm mt-1 text-purple-200/80 text-center leading-tight">
                {t("countdown_days")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTop;
