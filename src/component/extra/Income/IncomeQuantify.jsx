import React, { useEffect, useMemo, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import QuantificationProcess from "./QuantificationProcess/QuantificationProcess";
import { useTranslation } from "react-i18next";

const toSeconds = (h, m, s) => {
  const H = Number(h ?? 0);
  const M = Number(m ?? 0);
  const S = Number(s ?? 0);
  if ([H, M, S].some(Number.isNaN)) return 0;
  return Math.max(0, H * 3600 + M * 60 + S);
};

const formatTime = (totalSeconds) => {
  const n = Math.max(0, Number(totalSeconds ?? 0));
  const hours = String(Math.floor(n / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((n % 3600) / 60)).padStart(2, "0");
  const seconds = String(n % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const IncomeQuantify = memo(function IncomeQuantify({
  // `handleStartIncome` is kept for API parity (not used here)
  handleStartIncome,
  setStartIncome,
  data = {},
}) {
  const [startQuantitify, setQuantityfy] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const timerRef = useRef(null);
  const { t } = useTranslation();

  // derive booleans for readability
  const hasCommission = (Number(data?.commission) || 0) > 0;
  const canStart =
    hasCommission && data?.withdraw_status === true && data?.receive === false;

  // initialize countdown ONLY when all three values are present (old logic)
  useEffect(() => {
    if (
      data?.hoursLeft != null &&
      data?.minutesLeft != null &&
      data?.secondsLeft != null
    ) {
      setRemainingSeconds(
        toSeconds(data?.hoursLeft, data?.minutesLeft, data?.secondsLeft)
      );
    }
  }, [data?.hoursLeft, data?.minutesLeft, data?.secondsLeft]);

  // countdown effect (cleans up on unmount or when timer hits zero)
  useEffect(() => {
    if (remainingSeconds <= 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    timerRef.current = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [remainingSeconds]);

  const badgeCount = useMemo(() => {
    // show "1" only when canStart (old behavior)
    return canStart ? 1 : 0;
  }, [canStart]);

  const handleStartButton = () => {
    if (!canStart) return;
    // TOGGLE (old behavior), not force true
    setQuantityfy(!startQuantitify);
  };

  return (
    <div data-v-ca6100e8="">
      {/* transaction record link */}
      <div className="flex justify-center mt-10px">
        <Link
          to="/quantify-records"
          className="px-25px py-7px rounded-22px mx-auto cursor-pointer inline-flex items-center justify-center bg-$bg-card backdrop-filter backdrop-blur-15px"
        >
          <span className="text-$primary text-14px">
            {t('transaction_record')}&gt;&gt;
          </span>

          <span className="font-bold text-$primary ml-10px mr-4px">
            {badgeCount}
          </span>
          <span className="font-bold"> /{hasCommission ? 1 : 0}</span>
        </Link>
      </div>

      {/* countdown (only when there is a commission) */}
      {hasCommission && (
        <div className="text-$text-gray relative my-8px text-12px text-center">
          {t("quantify_reset_time")}{" "}
          <span className="text-white">{formatTime(remainingSeconds)}</span>
        </div>
      )}

      {/* start button (matches old gating logic) */}
      {canStart ? (
        <button
          type="button"
          className=":uno: base-main-btn flex items-center justify-center mx-auto relative text-center w-full mt-$mg"
          onClick={handleStartButton}
          aria-disabled={!canStart}
        >
          <div className="base-main-btn-content">{t("start_quantify")}</div>
        </button>
      ) : null}

      {/* modal/process */}
      {startQuantitify && (
        <QuantificationProcess setStartIncome={setStartIncome} />
      )}
    </div>
  );
});

IncomeQuantify.displayName = "IncomeQuantify";

export default IncomeQuantify;
