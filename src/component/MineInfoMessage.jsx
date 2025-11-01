import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";

const MineInfoMessage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const mineAnnouncement = () => {
    navigate("/mineinformation");
  };
  const mineMessage = () => {
    navigate("/mineinformation-message");
  };
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);
  const { t } = useTranslation();
  return (
    <div id="app">
      <div className="layout-container page-announcement">
        <header
          className="layout-header"
          style={{ position: "fixed", width: "100%", zIndex: "9999" }}
        >
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left" onClick={goBack}>
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
              </div>
              <div className="van-nav-bar__title van-ellipsis">
                <button
                  id="announceBtn"
                  onClick={mineAnnouncement}
                  className="btn btn-nav"
                >
                  {t("announcement")}
                </button>
                <button
                  id="messageBtn"
                  onClick={mineMessage}
                  className="btn btn-nav active"
                >
                  {t("my_message")}
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* header ends */}
        <main
          className="layout-body"
          style={{
            paddingTop: "40px",
            // Responsive margin top
            ...(window.innerWidth >= 330 ? { paddingTop: "60px" } : {}),
            ...(window.innerWidth >= 440 ? { paddingTop: "110px" } : {}),
            ...(window.innerWidth >= 600 ? { paddingTop: "130px" } : {}),
            ...(window.innerWidth >= 720 ? { paddingTop: "150px" } : {}),
          }}
        >
          <div className="layout-main">
            <div className="van-pull-refresh">
              <div
                className="van-pull-refresh__track"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="van-pull-refresh__head"></div>
                <div role="feed" className="van-list">
                  <ul
                    id="messageList"
                    className={`notice-list ${
                      isVisible ? "d-block" : "d-none"
                    }`}
                  >
                    <li className="msg" style={{ display: "none" }}>
                      <i className="icon-wrap">
                        <i
                          className="van-icon van-icon-volume-o"
                          style={{
                            color: "rgb(153, 153, 153)",
                            fontSize: "16px",
                          }}
                        ></i>
                      </i>
                      <b className="msg-title">
                        <em>【{t("income_has_arrived")}】</em>
                      </b>
                      <p className="msg-content">
                        {t("level")}: VIP1, {t("profit_received")}: 1.0000 USDT,{" "}
                        {t("time")}: 2024-01-02 02:42:33
                      </p>
                      <span className="msg-date">2024-01-02 02:42:34</span>
                    </li>
                  </ul>
                  <div id="loadingShow" className="van-list__finished-text">
                    {isVisible ? `${t("end")}` : `${t("loading")}...`}
                  </div>

                  <div className="van-list__placeholder"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default MineInfoMessage;
