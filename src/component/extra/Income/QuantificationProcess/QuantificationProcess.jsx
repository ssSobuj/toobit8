import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

const QuantificationProcess = ({setStartIncome}) => {
    const { t } = useTranslation();

    const steps = [
        t("start_quantification"),
        t("start_queuing_up"),
        t("start_executing_buy_order"),
        t("start_executing_sell_order"),
        t("start_calculating_commissions"),
        t("start_updating_account_balance"),
        t("operation_complete")
    ];

    const [visibleSteps, setVisibleSteps] = useState([]);
    const [stepWrapp, setStepWrap] = useState(true);

    useEffect(() => {
        let currentStep = 0;

        const interval = setInterval(() => {
            setVisibleSteps(prev => [...prev, steps[currentStep]]);
            currentStep++;

            if (currentStep >= steps.length) {
                clearInterval(interval);

                // Hide all after 1 second of showing the last step
                setTimeout(() => {
                    setVisibleSteps([]);
                    setStepWrap(false);
                    setStartIncome(true);
                }, 1000);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        stepWrapp && (
            <div data-v-ca6100e8="" className="mt-8px relative z-1">
                <div data-v-ca6100e8="" className="font-bold">{t('quantification_process')}</div>
                <div data-v-ca6100e8="" className="px-6 text-center">
                    {visibleSteps.map((step, index) => (
                        <div key={index} data-v-ca6100e8="" className="text-sm mt-2px">{step}</div>
                    ))}
                </div>
            </div>
        )
    );
};

export default QuantificationProcess;
