// Loader.js
import React, { useState, useEffect } from "react";
import "../../assets/css/custom_loader.css";
import { useTranslation } from "react-i18next";

const CustomLoader = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // This effect can be used to control the visibility of the loader
    // based on actual data loading, not just a fixed timer.
    // For now, it hides after 1.5 seconds.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Hide loader after 1.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!loading) {
    return null; // Don't render anything if loading is false
  }

  // The popupStyle object is defined but not used in the returned JSX.
  // The z-index for the main div is set directly in its style prop.
  const popupStyle = {
    zIndex: 2006, // This value is not being applied
  };

  return (
    <div
      role="dialog"
      tabIndex={0}
      className="van-popup van-popup--center van-toast van-toast--middle van-toast--loading"
      style={{ zIndex: 2003, display: "flex" }} // The zIndex here is applied
    >
      <div
        className="van-loading van-loading--spinner van-toast__loading"
        aria-live="polite"
        aria-busy="true"
      >
        <span className="van-loading__spinner van-loading__spinner--spinner">
          <i className="van-loading__line van-loading__line--1"></i>
          <i className="van-loading__line van-loading__line--2"></i>
          <i className="van-loading__line van-loading__line--3"></i>
          <i className="van-loading__line van-loading__line--4"></i>
          <i className="van-loading__line van-loading__line--5"></i>
          <i className="van-loading__line van-loading__line--6"></i>
          <i className="van-loading__line van-loading__line--7"></i>
          <i className="van-loading__line van-loading__line--8"></i>
          <i className="van-loading__line van-loading__line--9"></i>
          <i className="van-loading__line van-loading__line--10"></i>
          <i className="van-loading__line van-loading__line--11"></i>
          <i className="van-loading__line van-loading__line--12"></i>
        </span>
        {/* If you want to show "Loading..." text, you'd add it here,
            e.g., <p className="van-toast__text">{t("Loading...")}</p> */}
      </div>
    </div>
  );
};

export default CustomLoader;