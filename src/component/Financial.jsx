import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import SingleHeader from "./extra/SingleHeader";
import ErrorAlert from "./extra/ErrorAlert";
import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";
import noData from "../assets/images/no-data.png";

const Financial = () => {
  const { t } = useTranslation();

  const [financialDataType, setFiniancialDataType] = useState("quantitative");
  const [data, setData] = useState({});
  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  // NEW: marks whether the current tab has received its first response
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      // Reset on every tab change so old data doesn't flash
      setHasFetched(false);
      setData({});
      setIsLoader(true);
      setErrorAlert(false);

      try {
        let url = "";
        if (financialDataType === "quantitative") url = "api/deposits";
        else if (financialDataType === "profit") url = "api/transiction";
        else if (financialDataType === "investment") url = "api/investments";

        const res = await axios.get(url);
        if (!cancelled) {
          setData(res?.data ?? {});
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        if (!cancelled) {
          setMessage(t("failed_to_fetch_data") || "Failed to fetch data.");
          setErrorAlert(true);
          setData({});
        }
      } finally {
        if (!cancelled) {
          setIsLoader(false);
          setHasFetched(true); // mark done (success or error)
        }
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [financialDataType, t]);

  const formatLaravelDate = (dateString) => {
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return "--/--/---- --:--:--";
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(
      d.getHours()
    )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20">
      <img src={noData} alt="No data" className="h-24 w-24 opacity-70 mb-3" />
      <div className="text-[var(--text-gray6)]">{t("no_more_data")}</div>
    </div>
  );

  // Derived lists with safe defaults
  const deposits = useMemo(
    () => (Array.isArray(data?.deposites) ? data.deposites : []),
    [data]
  );
  const histories = useMemo(
    () => (Array.isArray(data?.histories) ? data.histories : []),
    [data]
  );

  // Helper renderers that respect hasFetched
  const renderDeposits = () => {
    if (!hasFetched) return <EmptyState />;
    return deposits.length > 0 ? (
      <>
        {deposits.map((deposite, idx) => (
          <div
            key={idx}
            className="mb-10px flex items-center py-10px! border-b border-solid border-$border-color last:border-b-0"
          >
            <div className="flex-1 pr-10px">
              <div>
                {t(
                  deposite?.type === "reinvest"
                    ? "wallet_funds_conversion"
                    : deposite?.type || "—"
                )}
              </div>
              <div className="text-xs text-[var(--text-gray6)]">
                {formatLaravelDate(deposite?.created_at)}
              </div>
            </div>
            <div className="ml-auto text-green">{deposite?.amount ?? 0} USDT</div>
          </div>
        ))}
        <div className="no-more text-center mt-12 text-[var(--text-gray6)]">
          {t("no_more_data")}
        </div>
      </>
    ) : (
      <EmptyState />
    );
  };

  const renderProfit = () => {
    if (!hasFetched) return <EmptyState />;
    return histories.length > 0 ? (
      <>
        {histories.map((history, idx) => {
          const isWithdraw = history?.sign === "-";
          const typeLabel =
            (history?.type || "").toLowerCase() === "income"
              ? t("quantitative_earning")
              : history?.type || "—";

        return (
            <div
              key={idx}
              className="mb-10px flex items-center py-10px! border-b border-solid border-$border-color last:border-b-0"
            >
              <div className="flex-1 pr-10px">
                <div className="capitalize">{typeLabel}</div>
                <div className="text-xs text-[var(--text-gray6)]">
                  {formatLaravelDate(history?.created_at)}
                </div>
              </div>
              <div className={`ml-auto ${isWithdraw ? "text-red-500" : "text-green-500"}`}>
                {isWithdraw ? "-" : "+"}
                {history?.amount ?? 0} USDT
              </div>
            </div>
          );
        })}
        <div className="no-more text-center mt-12 text-[var(--text-gray6)]">
          {t("no_more_data")}
        </div>
      </>
    ) : (
      <EmptyState />
    );
  };

  const renderWithdraw = () => {
    if (!hasFetched) return <EmptyState />;
    return histories.length > 0 ? (
      <>
        {histories.map((item, idx) => {
          const isNegative = item?.sign === "-";
          return (
            <div
              key={idx}
              className="mb-10px flex items-center py-10px! border-b border-solid border-$border-color last:border-b-0"
            >
              <div className="flex-1 pr-10px">
                <div className="flex items-center gap-2">
                  <span className="capitalize">{t("withdraw_deduction")}</span>
                </div>
                <div className="text-xs text-[var(--text-gray6)]">
                  {formatLaravelDate(item?.created_at)}
                </div>
                {(item?.grab_id || item?.product_id) && (
                  <div className="text-11px text-[var(--text-gray6)] mt-1">
                    {item?.product_id ? `Product ${item.product_id}` : ""}
                    {item?.grab_id && item?.product_id ? " · " : ""}
                  </div>
                )}
              </div>

              <div
                className={`ml-auto font-semibold ${
                  isNegative ? "text-red-500" : "text-green-500"
                }`}
              >
                {isNegative ? "-" : "+"}
                {item?.amount ?? 0} USDT
              </div>
            </div>
          );
        })}
        <div className="no-more text-center mt-12 text-[var(--text-gray6)]">
          {t("no_more_data")}
        </div>
      </>
    ) : (
      <EmptyState />
    );
  };

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      {errorAlert && <ErrorAlert errorTxt={message} />}
      <CustomLoader />
      {isLoader && <Loader />}

      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName="Financial" />

          <div className="p-$mg">
            <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text">
              {/* Tabs */}
              <div
                className=":uno: base-user-tab flex items-center justify-center top-51px sticky!"
                style={{ "--84f29e72": 3 }}
              >
                <div
                  className={`:uno: tab-item h-full flex cursor-pointer items-center justify-center ${
                    financialDataType === "quantitative" ? "active" : ""
                  }`}
                  onClick={() => {
                    setFiniancialDataType("quantitative");
                  }}
                >
                  <div className="text-center">{t("flexible_account")}</div>
                </div>
                <div
                  className={`:uno: tab-item h-full flex cursor-pointer items-center justify-center ${
                    financialDataType === "profit" ? "active" : ""
                  }`}
                  onClick={() => {
                    setFiniancialDataType("profit");
                  }}
                >
                  <div className="text-center">{t("profit_assets")}</div>
                </div>
                <div
                  className={`:uno: tab-item h-full flex cursor-pointer items-center justify-center ${
                    financialDataType === "investment" ? "active" : ""
                  }`}
                  onClick={() => {
                    setFiniancialDataType("investment");
                  }}
                >
                  <div className="text-center">{t("withdraw_asset")}</div>
                </div>
              </div>

              {/* Filter icon row */}
              <div className="mt-12px flex">
                <div className="i-solar:filter-bold-duotone ml-auto cursor-pointer" />
              </div>

              {/* Quantitative (Deposits) */}
              {financialDataType === "quantitative" && (
                <div className="base-list a-t-30">{renderDeposits()}</div>
              )}

              {/* Profit (Histories – mixed +/-) */}
              {financialDataType === "profit" && (
                <div className="base-list a-t-30">{renderProfit()}</div>
              )}

              {/* Withdraw Asset (uses histories from api/investments) */}
              {financialDataType === "investment" && (
                <div className="base-list a-t-30">{renderWithdraw()}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
