// src/Pages/NoticeView.jsx
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";
import axios from "axios";

/* ---------- utils ---------- */
const formatDateTime = (isoLike) => {
  try {
    const d = new Date(isoLike);
    if (Number.isNaN(d.getTime())) return String(isoLike || "");
    const pad = (n) => String(n).toString().padStart(2, "0");
    return `${pad(d.getMonth() + 1)}/${pad(d.getDate())}/${d.getFullYear()} ${pad(
      d.getHours()
    )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  } catch {
    return String(isoLike || "");
  }
};

// pulls a numeric amount if present (supports common keys)
const extractAmount = (obj) => {
  const a =
    obj?.amount ?? obj?.money ?? obj?.sum ?? obj?.value ?? obj?.usdt ?? null;
  return a == null ? null : Number(a);
};

/* ---------- page ---------- */
const NoticeView = () => {
  const { t } = useTranslation();
  const { id } = useParams(); // expects a route like /notice/:id

  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(null);
  const [withdraw, setWithdraw] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOne = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`api/message/${id}`);
        // Expected shape: { notification: {...}, withdraw: {...} }
        const n = res?.data?.notification ?? null;
        // Prefer explicit withdraw from API, otherwise fall back to nested on notification (if present)
        const w = res?.data?.withdraw ?? n?.withdraw ?? null;
        setNotice(n);
        setWithdraw(w);
      } catch (e) {
        console.error("GET api/message/:id failed", e);
        setError(t("failed_to_load_notice"));
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchOne();
  }, [id, t]);

  const createdAt = useMemo(
    () => formatDateTime(notice?.created_at || notice?.updated_at),
    [notice]
  );
  const amount = useMemo(() => extractAmount(notice), [notice]);
  const type = (notice?.type || "").toLowerCase();

  // Title fallback helper
  const titleForType = (tp) => {
    switch ((tp || "").toLowerCase()) {
      case "register":
        return t("welcome_heading") || "System Notice";
      case "recharge":
        return t("deposit_success") || "Deposit Success";
      case "withdrawal":
        return t("system_notice") || "System Notice";
      case "income":
        return t("income_received") || "Income Received";
      default:
        return t("system_notice") || "System Notice";
    }
  };

  /**
   * Withdrawal status label (plain text, no pill)
   * Mapping:
   * 1 = Successful (green)
   * 2 = Pending (amber)
   * 3 = Rejected (red)
   */
  const withdrawLabel = useMemo(() => {
    if (type !== "withdrawal") return null;
    const s = Number(withdraw?.status ?? notice?.status);
    if (s === 1) {
      return {
        code: 1,
        text: t("successful") || "Successful",
        style: { color: "#22c55e", fontWeight: 700 }, // green-500
      };
    }
    if (s === 2) {
      return {
        code: 2,
        text: t("pending") || "Pending",
        style: { color: "#f59e0b", fontWeight: 700 }, // amber-500
      };
    }
    if (s === 3) {
      return {
        code: 3,
        text: t("rejected") || "Rejected",
        style: { color: "#ef4444", fontWeight: 700 }, // red-500
      };
    }
    return null;
  }, [type, withdraw, notice, t]);

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={t("system_notice")} />

          <div className="px-3 pt-20px pb-30px">
            <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text notice-detail-wrap">
              {/* loader */}
              {loading && (
                <div className="flex justify-center py-10">
                  <div className="i-line-md:loading-twotone-loop text-3xl" />
                </div>
              )}

              {/* error */}
              {!loading && error && (
                <div className="text-center text-red-400 py-6">{error}</div>
              )}

              {/* content */}
              {!loading && !error && notice && (
                <>
                  <div className="mb-20px">
                    <div className="title">{titleForType(notice?.type)}</div>
                    <div className="mt-4px text-xs text-[var(--text-gray)]">
                      {createdAt}
                    </div>
                  </div>

                  <div>
                    {/* TYPE: register -> welcome text */}
                    {type === "register" && (
                      <span className="content d-block text-white/90 leading-7">
                        <p className="mb-2">{t("welcome_heading")}</p>
                        <p className="mb-2">{t("welcome_p1")}</p>
                        <p>{t("welcome_p2")}</p>
                      </span>
                    )}

                    {/* TYPE: recharge -> Deposit Success amount in green */}
                    {type === "recharge" && (
                      <span className="content d-block text-white/90">
                        {t("deposit_success")}{" "}
                        {amount != null && (
                          <span className="font-semibold" style={{ color: "#22c55e" }}>
                            {amount} USDT
                          </span>
                        )}
                      </span>
                    )}

                    {/* TYPE: withdrawal -> "Withdraw" + plain status text + amount */}
                    {type === "withdrawal" && (
                      <span
                        className="content d-block"
                        style={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        {t("withdraw") || "Withdraw"}{" "}
                        {withdrawLabel && (
                          <span
                            // important: NO padding/border/background/rounded -> not a button
                            style={{
                              ...withdrawLabel.style,
                              display: "inline",
                              marginLeft: 2,
                              marginRight: 4,
                            }}
                          >
                            {withdrawLabel.text}
                          </span>
                        )}
                        {amount !== null && amount !== undefined && (
                          <span
                            style={{
                              color:
                                withdrawLabel?.code === 1
                                  ? "#22c55e" // green on success
                                  : "#ef4444", // red on pending/rejected/others
                              fontWeight: 600,
                            }}
                          >
                            {amount} USDT
                          </span>
                        )}
                      </span>
                    )}

                    {/* TYPE: income/others -> show message/title */}
                    {type !== "register" &&
                      type !== "recharge" &&
                      type !== "withdrawal" && (
                        <span className="content d-block text-white/90 whitespace-pre-line">
                          {notice.message ||
                            notice.title ||
                            titleForType(notice?.type)}{" "}
                          {amount != null && (
                            <span className="font-semibold" style={{ color: "#22c55e" }}>
                              {amount} USDT
                            </span>
                          )}
                        </span>
                      )}
                  </div>
                </>
              )}

              {/* empty state */}
              {!loading && !error && !notice && (
                <div className="text-center py-6">{t("no_data")}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeView;
