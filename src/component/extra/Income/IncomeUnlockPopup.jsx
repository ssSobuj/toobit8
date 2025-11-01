import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IncomeUnlockPopup = ({ handleCancel, minUnclock }) => {
  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate("/recharge");
  };
  const { t } = useTranslation();
  return (
    <div>
      <div className="van-overlay" style={{ zIndex: "2012" }}></div>
      <div
        role="dialog"
        tabIndex={0}
        className="van-popup van-popup--center van-dialog"
        aria-labelledby="Recharge automatically unlocks Recharge 20USDT"
        style={{ zIndex: 2012 }}
      >
        <div className="van-dialog__content van-dialog__content--isolated">
          <div className="van-dialog__message">
            {t("recharge_unlock_message", { minUnclock })}
          </div>
        </div>
        <div className="van-hairline--top van-dialog__footer">
          <button
            type="button"
            className="van-button van-button--default van-button--large van-dialog__cancel"
            onClick={handleCancel}
          >
            <div className="van-button__content">
              <span className="van-button__text">{t("cancel")}</span>
            </div>
          </button>
          <button
            type="button"
            className="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left"
            onClick={handleConfirm}
          >
            <div className="van-button__content">
              <span className="van-button__text">{t("confirm")}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeUnlockPopup;
