import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const HomeNotice = () => {
  const noticeContent = {
    transitionDuration: "755.666s",
    transform: "translateX(-45339.9px)",
  };
  const navigate = useNavigate();
  const handleNotification = () => {
    navigate("/mineinformation");
  };
  const { t } = useTranslation();
  return (

    <div data-v-1b3f4761="" className="notice-info">
      <div data-v-1b3f4761="" className="volume-icon"></div>
      <div data-v-1b3f4761="" role="alert" className="van-notice-bar">
        <div role="marquee" className="van-notice-bar__wrap">
          <div className="van-notice-bar__content">
            {t("home_notice")}
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomeNotice;
