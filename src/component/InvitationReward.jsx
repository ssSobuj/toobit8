// src/component/InvitationReward.jsx
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

import CustomLoader from "./extra/customLoader";
import SupportLink from "./extra/supportLink";
import SingleHeader from "./extra/SingleHeader";
import ErrorAlert from "./extra/ErrorAlert";
import Loader from "./extra/loader";

// UPDATED milestone thresholds & rewards per client
const MILESTONES = [
  { threshold: 3,   reward_usdt: 5,    label: "1" },
  { threshold: 8,   reward_usdt: 10,   label: "2" },
  { threshold: 20,  reward_usdt: 25,   label: "3" },
  { threshold: 48,  reward_usdt: 60,   label: "4" },
  { threshold: 92,  reward_usdt: 135,  label: "5" },
  { threshold: 188, reward_usdt: 290,  label: "6" },
  { threshold: 375, reward_usdt: 500,  label: "7" },
  { threshold: 730, reward_usdt: 1000, label: "8" },
];

const InvitationReward = () => {
  const { t } = useTranslation();

  const [activeTab] = useState("invite");
  const [invitedCount, setInvitedCount] = useState(0);
  // From server: [{ id, threshold, reward_usdt, status }]
  const [serverMilestones, setServerMilestones] = useState([]);
  const [perInviteBonus, setPerInviteBonus] = useState(2);
  const [firstRechargeMin, setFirstRechargeMin] = useState(15);

  const [isLoader, setIsLoader] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");

  // Merge static milestone list with server states (id, status)
  const rows = useMemo(() => {
    return MILESTONES.map((m) => {
      const hit = serverMilestones.find((s) => s.threshold === m.threshold);
      return {
        threshold: m.threshold,
        reward_usdt: m.reward_usdt,
        label: m.label,
        id: hit?.id,
        status: hit?.status, // "claimable" | "claimed"
      };
    });
  }, [serverMilestones]);

  // Load summary from backend (requires user to be authenticated)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setIsLoader(true);
        const { data } = await axios.get("/api/rewards/summary");
        if (!mounted) return;

        setInvitedCount(data?.activeL1 || 0);
        setServerMilestones(data?.milestones || []);
        setPerInviteBonus(
          typeof data?.perInviteBonus === "number" ? data.perInviteBonus : 2
        );
        setFirstRechargeMin(
          typeof data?.firstRechargeMin === "number" ? data.firstRechargeMin : 15
        );
      } catch (err) {
        setMessage("Failed to load invite rewards.");
        setErrorAlert(true);
        setTimeout(() => setErrorAlert(false), 2000);
      } finally {
        setIsLoader(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const claim = async (id) => {
    if (!id) return; // safety
    try {
      setIsLoader(true);
      await axios.post(`api/rewards/milestones/${id}/claim`);
      // Optimistically mark as claimed
      setServerMilestones((prev) =>
        prev.map((m) => (m.id === id ? { ...m, status: "claimed" } : m))
      );
      setMessage("Reward claimed successfully.");
      setErrorAlert(true);
    } catch (err) {
      setMessage("Unable to claim reward. Please try again.");
      setErrorAlert(true);
    } finally {
      setTimeout(() => setErrorAlert(false), 2000);
      setIsLoader(false);
    }
  };

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      {errorAlert && <ErrorAlert errorTxt={message} />}
      <CustomLoader />
      {isLoader && <Loader />}

      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={t("activity")} />
          <div className="p-$mg">
            <div className="mt-10px">
              {activeTab === "invite" && (
                <div className="container-card relative rd-$card-radius p-$mg c-$btn-text mt-10px">
                  <div>{t("invite_top_up_rewards")}</div>

                  <div className="mt-10px">
                    {t("number_of_invited_people")}{" "}
                    <span className="ml-4px text-$primary font-bold">
                      {invitedCount}
                    </span>
                  </div>

                  <div className="my-10px">
                    <div className="flex items-center">
                      <span>{t("invitation_rewards_label")}</span>
                      <span className="text-$primary font-bold ml-5px">
                        {perInviteBonus} {t("usdt_automatic_distribution")}
                      </span>
                    </div>
                    <div className="mt-5px flex items-center flex-wrap">
                      <span className="shrink-0">
                        {t("invitee_first_recharge_needs_to_be_in")}
                      </span>
                      <span className="text-$primary font-bold shrink-0">
                        {firstRechargeMin} USDT
                      </span>
                      <span className="shrink-0">{t("above")}</span>
                    </div>
                    <div className="mt-5px">{t("tiered_rewards_intro")}</div>
                  </div>

                  <div role="separator" className="van-divider van-divider--hairline" />

                  {/* Header row */}
                  <div className="van-row text-center">
                    <div className="van-col van-col--2">
                      <div className="font-bold">{t("level")}</div>
                    </div>
                    <div className="van-col van-col--7">
                      <div className="font-bold">{t("count")}</div>
                    </div>
                    <div className="van-col van-col--7">
                      <div className="font-bold">{t("award")}</div>
                    </div>
                    <div className="van-col van-col--7">
                      <div className="font-bold">{t("receive")}</div>
                    </div>
                  </div>
                  <div role="separator" className="van-divider van-divider--hairline" />

                  {/* Unlimited auto row */}
                  <div className="van-row text-center h-40px flex items-center">
                    <div className="van-col van-col--2">
                      <div className="text-12px">-</div>
                    </div>
                    <div className="van-col van-col--7">
                      <div className="text-12px">{t("unlimited")}</div>
                    </div>
                    <div className="van-col van-col--7">
                      <div className="text-12px">{perInviteBonus} USDT</div>
                    </div>
                    <div className="van-col van-col--7">
                      <div className="text-12px opacity-60">{t("auto")}</div>
                    </div>
                  </div>

                  {/* Milestone rows */}
                  {rows.map((r) => {
                    const remaining = Math.max(0, r.threshold - invitedCount);
                    const canClaim = r.status === "claimable" && remaining === 0;
                    const claimed = r.status === "claimed";
                    return (
                      <div
                        key={r.threshold}
                        className="van-row text-center h-40px flex items-center"
                      >
                        <div className="van-col van-col--2">
                          <div className="text-12px">{r.label}</div>
                        </div>
                        <div className="van-col van-col--7">
                          <div className="text-12px">{r.threshold}</div>
                        </div>
                        <div className="van-col van-col--7">
                          <div className="text-12px">{r.reward_usdt} USDT</div>
                        </div>
                        <div className="van-col van-col--7">
                          <div className="text-12px">
                            {canClaim && (
                              <button
                                className="bg-$primary px-10px py-5px rounded mx-auto"
                                onClick={() => claim(r.id)}
                              >
                                {t("receive")}
                              </button>
                            )}
                            {claimed && (
                              <span className="opacity-60">{t("claimed")}</span>
                            )}
                            {!canClaim && !claimed && (
                              <div className="bg-$primary px-10px py-5px rounded mx-auto opacity-70">
                                {`${t("remaining")}${remaining}`}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <SupportLink />
      <CustomLoader />
    </div>
  );
};

export default InvitationReward;
