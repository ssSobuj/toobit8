import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const HomeNoticePopup = () => {
  const navigate = useNavigate();
  const [showNotice, setShowNotice] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchNotification = async () => {
      setLoading(true);
      try {
        const res = await axios.get("api/notification");
        const count = res?.data?.notificationCount ?? 0;

        if (count > 0) {
          // show popup after 3s
          const timer = setTimeout(() => {
            setShowNotice(true);
          }, 3000);

          return () => clearTimeout(timer);
        }
      } catch (e) {
        console.error("Failed to fetch notification count", e);
      } finally {
        setLoading(false);
      }
    };

    fetchNotification();
  }, []);

  const handleCloseNotice = () => setShowNotice(false);
  const handleConfirm = () => {
    setShowNotice(false);
    navigate("/notice");
  };

  return (
    <div>
      {/* Overlay */}
      <div
        className="van-overlay"
        style={{ zIndex: 2012, ...(!showNotice && { display: "none" }) }}
      ></div>

      {/* Popup */}
      <div
        role="dialog"
        tabIndex={0}
        className="van-popup van-popup--center van-dialog"
        aria-labelledby="notice-popup"
        style={{ zIndex: 2012, ...(!showNotice && { display: "none" }) }}
      >
        <div
          className="van-dialog__header"
          style={{ color: "#fff", fontWeight: 600 }}
        >
          {t('notice')}
        </div>
        <div className="van-dialog__content van-dialog__content--isolated">
          <div className="van-dialog__message">
            {t('unread_messages_alert')}
          </div>
        </div>
        <div className="van-hairline--top van-dialog__footer">
          <button
            type="button"
            className="van-button van-button--default van-button--large van-dialog__cancel"
            onClick={handleCloseNotice}
          >
            <div className="van-button__content">
              <span className="van-button__text">{t('cancel')}</span>
            </div>
          </button>
          <button
            type="button"
            className="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left"
            onClick={handleConfirm}
          >
            <div className="van-button__content">
              <span className="van-button__text">{t('confirm')}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNoticePopup;
