import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const RechargeRecord = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { t } = useTranslation();
  const [data, setData] = useState({ deposites: [] });
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true);
      try {
        const response = await axios.get("api/deposits");
        setData(response.data); // Set data from response
        setIsLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false);
      }
    };

    fetchData();
  }, []);
  

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div id="app">
      <div className="layout-container page-recharge-record">
        <header className="layout-header">
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div id="recBack" onClick={goBack} className="van-nav-bar__left">
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
                <span className="van-nav-bar__text">
                  {t("recharge_record")}
                </span>
              </div>
              <div className="van-nav-bar__title van-ellipsis"></div>
            </div>
          </div>
        </header>
        {isLoader ? <CustomLoader /> : null}
        <main className="layout-body">
          <div className="layout-main">
            <div className="van-pull-refresh">
              <div
                className="van-pull-refresh__track"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="van-pull-refresh__head"></div>
                <div role="feed" className="van-list">
                  {isLoader ? (
                    <CustomLoader />
                  ) : data.deposites.length > 0 ? (
                    data.deposites.map((deposit, index) => (
                      <div className="record-cell" key={index}>
                        <div className="cell-body">
                          <div className="cell-left">
                            <b className="record-label">{t("successful")}</b>
                            <i className="record-time">
                              {formatDateTime(deposit.created_at)}
                            </i>
                          </div>
                          <div className="cell-right">
                            <em className="record-money text-success">
                              +{deposit.amount}
                            </em>
                            <div>TRX({deposit.amount})</div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                  <div className="van-list__finished-text">{t("end")}.</div>

                  <div className="van-list__placeholder"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <SupportLink></SupportLink>
    </div>
  );
};

export default RechargeRecord;
