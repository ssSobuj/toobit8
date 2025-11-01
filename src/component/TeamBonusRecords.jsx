import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import SingleHeader from "./extra/SingleHeader";
import noData from "../assets/images/no-data.png";

const TeamBonusRecords = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`api/team/details`);
        setData(res.data);
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const formatPhoneOrEmail = (input) => {
    if (!input || typeof input !== "string" || input.length < 4) return input ?? "";
    const firstTwo = input.substring(0, 2);
    const lastTwo = input.slice(-2);
    const middleStars = "*".repeat(Math.max(0, input.length - 4));
    return `${firstTwo}${middleStars}${lastTwo}`;
  };

  const formatDate = (value) => {
    if (!value) return "";
    const d = new Date(value);
    if (isNaN(d.getTime())) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const h = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    return `${y}-${m}-${day} ${h}:${min}:${s}`;
  };

  const rows = useMemo(() => {
    const list = data?.rebetas ?? [];
    return list.map((rebeta) => {
      const accountRaw =
        rebeta?.email_phone ??
        rebeta?.account ??
        rebeta?.username ??
        rebeta?.email ??
        rebeta?.phone ??
        "";

      const lastLoginRaw =
        rebeta?.last_login_time ??
        rebeta?.lastLoginTime ??
        rebeta?.last_login ??
        rebeta?.joining_date ??
        "";

      const contributionRaw =
        rebeta?.total_contribution_amount ??
        rebeta?.totalContributionAmount ??
        rebeta?.contribution ??
        rebeta?.commission ??
        0;

      return {
        account: formatPhoneOrEmail(String(accountRaw)),
        lastLogin: formatDate(lastLoginRaw),
        contribution:
          typeof contributionRaw === "number"
            ? contributionRaw
            : Number(contributionRaw || 0),
      };
    });
  }, [data]);

  useEffect(() => {
    if (!loading) setIsEmpty(!rows || rows.length === 0);
  }, [loading, rows]);

  // full-height page + iOS safe area padding
  const pageStyle = {
    minHeight: "100vh",
    paddingBottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1" style={pageStyle}>
      <div
        className="van-config-provider"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <div
          data-v-f5703ed9=""
          className="box-border w-full pt-45px"
          style={{ display: "flex", flexDirection: "column", flex: 1 }}
        >
          <SingleHeader pageName={t("bonus_record")} />

          {/* content area */}
          <div
            className="notice-wrap my-$mg px-$mg"
            style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}
          >
            {/* Table header (always visible) */}
            <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text shadow-$shadow">
              <div className="record-cell van-cell team_bonus_lebel">
                <div className="van-cell__title bonus_col">
                  <span className="record-label text-left">
                    <i className="table_label">{t("account") || "Account"}</i>
                  </span>
                </div>
                <div className="bonus_col">
                  <i className="table_label">
                    {t("last_login_time") || "Last Login Time"}
                  </i>
                </div>
                <div className="bonus_col">
                  <i className="table_label">Total contribution amount</i>
                </div>
              </div>
            </div>

            {/* Body card fills remaining space */}
            <div
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text shadow-$shadow"
              style={{ flex: 1, display: "flex" }}
            >
              <div
                role="feed"
                className="van-list"
                style={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                {/* Loading row */}
                {loading && (
                  <div className="record-cell van-cell team_bonus_data">
                    <div className="van-cell__title bonus_col">
                      <span className="record-label text-left">
                        <b>{t("loading") || "Loading..."}</b>
                      </span>
                    </div>
                    <div className="bonus_time bonus_col">
                      <i className="record-time">--</i>
                    </div>
                    <div className="van-cell__value bonus_col">
                      <em className="record-money text-success">--</em>
                    </div>
                  </div>
                )}

                {/* Empty state — centered in the remaining space */}
                {!loading && isEmpty && (
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "24px 8px",
                    }}
                  >
                    <div className="base-list-nodata" style={{ textAlign: "center" }}>
                      <div
                        className="van-empty__image"
                        style={{ width: 80, height: 80, margin: "0 auto" }}
                      >
                        <img
                          src={noData}
                          alt="No data"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </div>
                      <p className="van-empty__description" style={{ marginTop: 10 }}>
                        {t("empty") || "Empty"}
                      </p>
                    </div>
                  </div>
                )}

                {/* Data rows */}
                {!loading &&
                  rows.map((row, idx) => (
                    <div
                      className="record-cell van-cell team_bonus_data"
                      key={`${row.account}-${idx}`}
                    >
                      <div className="van-cell__title bonus_col">
                        <span className="record-label text-left">
                          <b>{row.account}</b>
                        </span>
                      </div>
                      <div className="bonus_time bonus_col">
                        <i className="record-time">{row.lastLogin || "--"}</i>
                      </div>
                      <div className="van-cell__value bonus_col">
                        <em className="record-money text-success">
                          {Number.isFinite(row.contribution)
                            ? row.contribution.toFixed(5)
                            : String(row.contribution ?? "0")}
                        </em>
                      </div>
                    </div>
                  ))}

                {/* Footer */}
                {!loading && (
                  <div
                    className="van-list__finished-text"
                    style={{ textAlign: "center", padding: "12px 0" }}
                  >
                    {(t("end") || "End")}.
                  </div>
                )}
                <div className="van-list__placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SupportLink />
      <CustomLoader />
    </div>
  );
};

export default TeamBonusRecords;
