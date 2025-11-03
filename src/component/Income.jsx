import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

import Header from "./extra/Header";
import Navbar from "./partial/navbar";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";

import IncomeTop from "./extra/Income/IncomeTop";
import IncomeQuantify from "./extra/Income/IncomeQuantify";
import IncomeLevel from "./extra/Income/IncomeLevel";
import IncomePartners from "./extra/Income/IncomePartners";
import IncomeUnlockPopup from "./extra/Income/IncomeUnlockPopup";
import IncomeStartPopup from "./extra/Income/IncomeStartPopup";

import "../assets/css/income.css";

const Income = () => {
  const { t } = useTranslation(); // kept in case child components rely on i18n context
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [isLoader, setIsLoader] = useState(true);

  // success feedback that existed but wasn’t rendered before
  const [successVisible, setSuccessVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [isUnlockLevel, setIsUnlockLevel] = useState(false);
  const [minUnclock, setMinUnclock] = useState(0);

  const [startIncome, setStartIncome] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false); // prevent double taps
  const hideSuccessTimeout = useRef(null);

  // Fetch page data
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios.get("api/task", { signal: controller.signal });
        setData(res.data || {});
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.error("Error fetching data:", err);
      } finally {
        setIsLoader(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
      if (hideSuccessTimeout.current) clearTimeout(hideSuccessTimeout.current);
    };
  }, []);

  // Unlock Level handlers
  const handleUnlockLevel = (min) => {
    setMinUnclock(Number(min) || 0);
    setIsUnlockLevel(true);
  };
  const handleCancelUnlock = () => setIsUnlockLevel(false);

  // Start Income handlers
  const handleStartIncome = async () => {
    if (isCompleting) return; // guard
    setStartIncome(false); // close the popup immediately
    await toComplete();
  };

  const toComplete = async () => {
    setIsLoader(true);
    setIsCompleting(true);
    try {
      const res = await axios.get("api/task/complete");
      const msg = res?.data?.message || t("common.success") || "Success";
      setSuccessMessage(msg);
      setSuccessVisible(true);

      hideSuccessTimeout.current = setTimeout(() => {
        setSuccessVisible(false);
        navigate("/quantify-records");
      }, 1500);
    } catch (err) {
      console.error("Error completing task:", err);
      setSuccessMessage(t("common.error") || "Something went wrong");
      setSuccessVisible(true);
      hideSuccessTimeout.current = setTimeout(() => {
        setSuccessVisible(false);
      }, 2000);
    } finally {
      setIsLoader(false);
      setIsCompleting(false);
    }
  };

  // Memoize simple class names
  const wrapperCls = useMemo(
    () => "box-border min-h-full w-full layout-tab-bar px-mg",
    []
  );

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider">
        <div data-v-f5703ed9="" className={wrapperCls}>
          <Header />

          {/* transient success banner */}
          {successVisible && (
            <div
              className="mx-auto my-3 w-[92%] rounded-md bg-green-600/10 px-3 py-2 text-sm text-green-700"
              role="status"
            >
              {successMessage}
            </div>
          )}

          <div className="pb-60px mt-4">
            <div data-v-ca6100e8="" className="quan-wrap pt-61px pb-80px">
              <IncomeTop data={data} />
              <IncomeQuantify setStartIncome={setStartIncome} data={data} />
              <IncomeLevel handleUnlockLevel={handleUnlockLevel} data={data} />
              <IncomePartners />
            </div>

            <Navbar />
          </div>

          {/* Popups */}
          {isUnlockLevel && (
            <IncomeUnlockPopup
              handleCancel={handleCancelUnlock}
              minUnclock={minUnclock}
            />
          )}

          {startIncome && (
            <IncomeStartPopup
              handleStartIncome={handleStartIncome}
              data={data}
              isSubmitting={isCompleting}
            />
          )}

          {/* Loader only when active */}
          {isLoader && <CustomLoader />}

          <SupportLink />
        </div>
      </div>
    </div>
  );
};

export default Income;
