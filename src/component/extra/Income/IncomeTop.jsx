import React from 'react';
import { useTranslation } from "react-i18next";

const IncomeTop = ({data}) => {
    const { t } = useTranslation();

    return (
        <div>
            <div data-v-ca6100e8="" className="quan-header-wrap">
                <div
                    data-v-ca6100e8=""
                    className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text quan-header-card"
                >
                    <div data-v-ca6100e8="">
                        <div data-v-ca6100e8="" className="top">
                            <div data-v-ca6100e8="" className="vip-level">
                                <p data-v-ca6100e8="" className="text">{t('vip')}-{data?.my_vip}</p>
                            </div>
                            <div data-v-ca6100e8="" className="text-16px font-mono font-bold">
                                {t('quantitative_account')} {data?.authbal?.balance}
                            </div>
                        </div>

                        <div data-v-ca6100e8="" className="vip-level-info">
                            <div data-v-ca6100e8="" className="w-full">
                                <div data-v-ca6100e8="" className="mb-10px text-16px font-mono font-bold">0.00</div>
                                <div data-v-ca6100e8="" className="text-12px">{t('trial_fee')}</div>
                            </div>
                            <div data-v-ca6100e8="" className="w-full">
                                <div data-v-ca6100e8="" className="mb-10px text-16px font-mono font-bold">{data?.todayTrad || 0}</div>
                                <div data-v-ca6100e8="" className="text-12px">{t('profit_assets')}</div>
                            </div>
                            <div data-v-ca6100e8="" className="w-full">
                                <div data-v-ca6100e8="" className="mb-10px text-16px font-mono font-bold">{data?.allIncomeToday || 0}</div>
                                <div data-v-ca6100e8="" className="text-12px">{t('todays_earnings')}</div>
                            </div>
                            <div data-v-ca6100e8="" className="w-full">
                                <div data-v-ca6100e8="" className="mb-10px text-16px font-mono font-bold">{data?.allIncomes || 0}</div>
                                <div data-v-ca6100e8="" className="text-12px">{t('total_revenue')}</div>
                            </div>
                            <div data-v-ca6100e8="" className="w-full">
                                <div data-v-ca6100e8="" className="mb-10px text-16px font-mono font-bold">{data?.totalDays || 0}</div>
                                <div data-v-ca6100e8="" className="text-12px">{t('quantifiable_number_of_days')}</div>
                            </div>
                            <div data-v-ca6100e8="" className="w-full">
                                <div data-v-ca6100e8="" className="mb-10px text-16px font-mono font-bold">{data?.leftdays || 0}</div>
                                <div data-v-ca6100e8="" className="text-12px">{t('countdown_days')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeTop;