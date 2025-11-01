// src/Pages/Notice.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";
import axios from "axios";

// Global state to persist clicked items across route changes
let globalClickedItems = new Set();

// Helper: route for notice type (kept for future use)
const pathForType = (type) => {
  switch ((type || "").toLowerCase()) {
    case "withdrawal":
      return "/notice/withdraw";
    case "recharge":
      return "/notice/deposit";
    default:
      return "/notice/content";
  }
};

// Helper: format date/time
const formatDateTime = (isoLike) => {
  try {
    const d = new Date(isoLike);
    if (Number.isNaN(d.getTime())) return String(isoLike || "");
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getMonth() + 1)}/${pad(d.getDate())}/${d.getFullYear()} ${pad(
      d.getHours()
    )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  } catch {
    return String(isoLike || "");
  }
};

// Helper: translated title fallback
const resolveTitle = (t, n) => {
  if (!n) return t("notice");
  switch ((n.type || "").toLowerCase()) {
    case "register":
      return t("welcome_title");
    case "withdrawal":
      return t("withdraw"); // base word; status text is shown next to it
    case "recharge":
      return t("deposit_success");
    case "income":
      return t("income_received");
    case "platform_bonus":
      return t("platform_bonus");
    default:
      return n.title || n.message || n.type || t("notice");
  }
};

/**
 * Helper: plain text status label + color for withdrawals
 * Backend mapping:
 * 1 = Successful
 * 2 = Pending
 * 3 = Rejected (NEW)
 */
const withdrawStatusLabel = (t, status) => {
  if (status === 1) {
    return {
      text: t("successful") || "Successful",
      style: { color: "#22c55e", fontWeight: 700 }, // green-500
    };
  }
  if (status === 2) {
    return {
      text: t("pending") || "Pending",
      style: { color: "#f59e0b", fontWeight: 700 }, // amber-500
    };
  }
  if (status === 3) {
    return {
      text: t("rejected") || "Rejected",
      style: { color: "#ef4444", fontWeight: 700 }, // red-500
    };
  }
  return null;
};

const Notice = () => {
  const { t } = useTranslation();

  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [clickedItems, setClickedItems] = useState(() => globalClickedItems);

  // Handle item click to add fade effect
  const handleItemClick = (itemId) => {
    globalClickedItems.add(itemId);
    setClickedItems(new Set(globalClickedItems));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true);
      setError("");
      try {
        const res = await axios.get("api/message");
        const list = res?.data?.notifications || [];
        setItems(Array.isArray(list) ? list : []);
      } catch (e) {
        console.error("/api/message failed", e);
        setError(t("failed_to_load_notices"));
      } finally {
        setIsLoader(false);
      }
    };
    fetchData();
  }, [t]);

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={t("notice")} />

          <div className="px-3 pb-30px pt-20px">
            <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text">
              {isLoader && (
                <div className="flex justify-center py-6">
                  <div className="i-line-md:loading-twotone-loop text-3xl" />
                </div>
              )}

              {!isLoader && error && (
                <div className="text-center text-red-400 py-3">{error}</div>
              )}

              <div className="notice-item-wrap">
                {!isLoader && !error && items.length === 0 && (
                  <div className="text-center py-6">{t("no_more_data")}</div>
                )}

                {!isLoader &&
                  !error &&
                  items.map((n) => {
                    const type = (n?.type || "").toLowerCase();
                    const isWithdrawal = type === "withdrawal";
                    const title = resolveTitle(t, n);
                    const time = formatDateTime(n?.created_at || n?.updated_at);

                    const wStatus = isWithdrawal
                      ? withdrawStatusLabel(
                          t,
                          Number(n?.withdraw?.status ?? n?.status)
                        )
                      : null;

                    // Show amount next to status (green only on successful withdraw)
                    const amount =
                      n?.amount != null && !Number.isNaN(Number(n.amount))
                        ? Number(n.amount)
                        : null;

                    // API-driven seen flag: 0 = unseen, 1 = seen
                    const isSeen = Number(n?.seen) === 1;

                    // Keep your clicked fade behavior too
                    const isClicked = clickedItems.has(n.id);

                    return (
                      <Link
                        key={n.id}
                        to={`/notice/${n.id}`}
                        onClick={() => handleItemClick(n.id)}
                      >
                        <div
                          className={`:uno: notice-item-content mb-16px w-full flex items-center b-1px b-$btn-text rd-15px b-style-dashed p-15px ${
                            isSeen ? "is-read" : "is-unread"
                          }`}
                          style={{
                            opacity: isSeen || isClicked ? 0.5 : 1,
                            transition: "opacity 0.3s ease-in-out",
                            filter: isSeen || isClicked ? "brightness(0.8)" : "none",
                          }}
                        >
                          <div className=":uno: i-ph-envelope-simple shrink-0 text-24px" />
                          <div className=":uno: ml-10px w-[calc(100%-34px)]">
                            <div className="flex items-center gap-2 flex-wrap">
                              <div className=":uno: info text-truncate text-16px">
                                {title}
                              </div>

                              {isWithdrawal && wStatus && (
                                <span
                                  // No bg/border/padding so it doesn't look like a button
                                  style={{
                                    ...wStatus.style,
                                    display: "inline",
                                  }}
                                >
                                  {wStatus.text}
                                </span>
                              )}

                              {isWithdrawal && amount != null && (
                                <span
                                  style={{
                                    color:
                                      Number(n?.withdraw?.status) === 1
                                        ? "#22c55e" // green on success
                                        : "#ef4444", // red on pending/rejected/others
                                    fontWeight: 600,
                                  }}
                                >
                                  {amount} USDT
                                </span>
                              )}
                            </div>

                            <div className=":uno: mt-3px text-12px c-$text-gray">
                              {time}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>

              {!isLoader && !error && items.length > 0 && (
                <div className="base-list a-t-30">
                  <div className="no-more text-center">{t("no_more_data")}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
