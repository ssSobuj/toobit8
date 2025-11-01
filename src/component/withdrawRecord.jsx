//all packages
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

//component
import Navbar from "./partial/navbar";
// import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import SupportLink from "./extra/supportLink";
const withdrawRecord = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };
  const { t } = useTranslation();

  const [data, setData] = useState({ withdraws: [] });
  const [isLoader, setIsLoader] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true);
      try {
        const response = await axios.get("api/withdraws");
        setData(response.data); // Set data from response
        console.log(response.data.withdraws);
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
      <div className="layout-container page-withdraw-record">
        <header className="layout-header" style={{position:"fixed" , width:"100%",zIndex:"9999"}}>
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left" onClick={handleBackClick}>
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
                <span className="van-nav-bar__text">
                  {t("withdrawal_record")}
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
                  <br></br>
                  {isLoader ? (
                    <CustomLoader />
                  ) : data.withdraws.length > 0 ? (
                    data.withdraws.map((withdraw, index) => (
                      <div className="record-cell withdraw_record_cell" key={index} style={{ marginTop: '20%' }}>
                        <div className="cell-body">
                          <div className="cell-left">
                            <b className="record-label">{t("successful")}</b>
                            <i className="record-time">{formatDateTime(withdraw.created_at)}</i>
                          </div>
                          <div className="cell-right">
                            <em className="record-money text-danger">-{withdraw.amount}</em>
                            <span className="money-detail">
                              {t("fee")}: 0.00, {t("to_account")} {withdraw.amount}({withdraw.type})
                            </span>
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
        {/* main ends */}
      </div>
      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default withdrawRecord;
