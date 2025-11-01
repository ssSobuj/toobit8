import React from 'react';
import { useTranslation } from "react-i18next";

const UserBalanceData = ({data}) => {

        const { t } = useTranslation();

    return (
        <div data-v-fba32ec4 className="user-number">
            <div data-v-fba32ec4 className="flag i-ph:circle-bold"></div>
            <div data-v-fba32ec4 className="cont grid grid-cols-2">
                <div data-v-fba32ec4 className="user-number-item w-full mb-5px">
                    <div data-v-fba32ec4 className="title">{t('total_assets')}</div>
                    <div data-v-fba32ec4 className="number">${data?.amount || "0.00"}</div>
                </div>
                <div data-v-fba32ec4 className="user-number-item w-full mb-5px">
                    <div data-v-fba32ec4 className="title">{t('total_revenue')}</div>
                    <div data-v-fba32ec4 className="number">${data?.trading_balance || 0}</div>
                </div>
            </div>
            <div data-v-fba32ec4 className="grid grid-cols-2 md:grid-cols-4 gap-5px">
                <div data-v-fba32ec4 className="w-full p-10px rd">
                    <div data-v-fba32ec4 className="flex items-center text-$text-gray text-12px">
                        <span data-v-fba32ec4>{t('quantitative_account')}</span>
                    </div>
                    <div data-v-fba32ec4 className="flex mt-5px items-center justify-between font-dm font-bold">
                        ${data?.user?.balance || 0}
                    </div>
                </div>
                <div data-v-fba32ec4 className="w-full p-10px rd">
                    <div data-v-fba32ec4 className="flex items-center text-$text-gray text-12px">
                        <span data-v-fba32ec4>{t('investment_accounts')}</span>
                    </div>
                    <div data-v-fba32ec4 className="flex mt-5px items-center justify-between font-dm font-bold">
                        ${data?.user?.promotional_balance || 0}
                    </div>
                </div>
                <div data-v-fba32ec4 className="w-full p-10px rd">
                    <div data-v-fba32ec4 className="flex items-center text-$text-gray text-12px">
                        <span data-v-fba32ec4>{t('profit_assets')}</span>
                    </div>
                    <div data-v-fba32ec4 className="flex mt-5px items-center justify-between font-dm font-bold">
                        ${data?.allIncome}
                    </div>
                </div>
                <div data-v-fba32ec4 className="w-full p-10px">
                    <div data-v-fba32ec4 className="text-$text-gray text-12px">{t('commission_today')}</div>
                    <div data-v-fba32ec4 className="font-dm font-bold">${data?.commissionToday}</div>
                </div>
                <div data-v-fba32ec4 className="w-full p-10px">
                    <div data-v-fba32ec4 className="text-$text-gray text-12px">{t('todays_earning')}</div>
                    <div data-v-fba32ec4 className="font-dm font-bold">${data?.todaysEarning}</div>
                </div>
                <div data-v-fba32ec4 className="w-full p-10px">
                    <div data-v-fba32ec4 className="text-$text-gray text-12px">{t('yesterdays_earnings')}</div>
                    <div data-v-fba32ec4 className="font-dm font-bold">${data?.yesterdayEarning}</div>
                </div>
            </div>
        </div>

    );
};

export default UserBalanceData;