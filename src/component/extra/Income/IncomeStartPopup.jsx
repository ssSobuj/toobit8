import React, { memo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const formatAmount = (val) => {
  const n = Number(val ?? 0);
  if (Number.isNaN(n)) return "0.00";
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const IncomeStartPopup = memo(function IncomeStartPopup({
  handleStartIncome, // called to close + proceed
  data = {},
  isSubmitting = false, // optional: disable close while submitting
}) {
  const dialogRef = useRef(null);
  const { t } = useTranslation();

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && !isSubmitting) handleStartIncome();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleStartIncome, isSubmitting]);

  const onOverlayClick = () => {
    if (!isSubmitting) handleStartIncome();
  };

  const onInsideClick = (e) => {
    e.stopPropagation();
  };

  const onCloseClick = (e) => {
    e.stopPropagation();
    if (!isSubmitting) handleStartIncome();
  };

  return (
    <div>
      {/* Overlay */}
      <div
        className="van-overlay"
        role="button"
        tabIndex={0}
        aria-label="Close"
        style={{ zIndex: 2015 }}
        onClick={onOverlayClick}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && onOverlayClick()
        }
      />

      {/* Dialog */}
      <div
        className="van-popup van-popup--round van-popup--center van-safe-area-bottom van-popup-customer  items-center"
        style={{
          width: "95%",
          zIndex: 2015,
          maxWidth: "620px",
          height: "100%",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="income-start-title"
        onClick={onOverlayClick}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <div
            ref={dialogRef}
            className="relative w-[80%] flex flex-col items-center rounded-3xl text-$primary bg-$bg-card2"
            onClick={onInsideClick}
          >
            {/* Header */}
            <div className="w-full bg-no-repeat">
              <div
                id="income-start-title"
                className="py-3 text-center font-bold"
              >
                {t("quantitative_benefits")}
              </div>
            </div>

            {/* Body */}
            <div className="w-full flex-1 overflow-auto rounded-b-3xl  text-center">
              <div className="mt-2 p-3">
                <div className="mb-9 font-bold">
                  <span className="text-3xl">
                    {formatAmount(data?.commission)}
                  </span>
                  <span className="ml-2">USDT</span>
                </div>
                <div className="text-sm">{t("deposit_into_basic_wallet")}</div>
              </div>
            </div>
          </div>
          {/* Close button BELOW the card, inside flex container */}
          <button
            onClick={onCloseClick}
            className="mt-4 flex items-center justify-center p-2 text-white bg-transparent hover:bg-transparent active:scale-95 transition disabled:opacity-50 border-0 focus:outline-none"
            aria-label="Close"
            disabled={isSubmitting}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="8"
                y1="8"
                x2="16"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="16"
                y1="8"
                x2="8"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

IncomeStartPopup.displayName = "IncomeStartPopup";

export default IncomeStartPopup;
