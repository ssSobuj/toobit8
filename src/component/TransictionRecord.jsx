import { useNavigate } from "react-router-dom";
import CustomLoader from "./extra/loader";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const TransictionRecord = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [selectedFilter, setSelectedFilter] = useState(t("all"));
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [filterText, setFilterText] = useState(t("all"));
  const [isLoader, setIsLoader] = useState(false);

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  const handleFilterClick = () => {
    if (filterText === t("all")) {
      setFilterText(t("confirm"));
      setIsPopupVisible(true);
    } else {
      setFilterText(t("all"));
      setIsPopupVisible(false);
    }
  };

  const filters = [
    t("all"),
    t("recharge"),
    t("withdrawal"),
    t("giveaway"),
    t("withdrawal_failed"),
    t("purchase"),
    t("income"),
    t("return"),
  ];

  // Fetch data based on selected filter
  const fetchData = async (filter) => {
    setIsLoader(true);
    try {
      const response = await axios.get(`api/transiction`, {
        params: { type: filter !== t("all") ? filter : undefined },
      });
      setData(response.data);
      setIsLoader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(selectedFilter); // Fetch data when component mounts or filter changes
  }, [selectedFilter]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleSelectFilterClick = (filter) => {
    setSelectedFilter(filter);
    fetchData(filter); // Fetch new data based on selected filter
    setIsPopupVisible(false); // Close popup after selection
    setFilterText(filter); // Update the filter text
  };

  return (
    <div id="app">
      <div className="layout-container page-transaction">
        <header
          className="layout-header"
          style={{ position: "fixed", width: "100%", zIndex: "9999" }}
        >
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left" onClick={goBack}>
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
                <span className="van-nav-bar__text">
                  {t("transaction_record")}
                </span>
              </div>
              <div className="van-nav-bar__title van-ellipsis"></div>
              <div className="van-nav-bar__right">
                <div className="header-filter" onClick={handleFilterClick}>
                  <i
                    className="van-icon van-icon-filter-o"
                    style={{ fontSize: "14px", color: "#1989fa" }}
                  >
                    <span id="changeFilterName" style={{ color: "#1989fa" }}>
                      {filterText}
                    </span>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </header>
        {isLoader ? <CustomLoader /> : null}
        <main
          className="layout-body"
          style={{
            paddingBottom: "80px",
            paddingTop: "50px",
            // Responsive margin top
            ...(window.innerWidth >= 330 ? { paddingTop: "75px" } : {}),
            ...(window.innerWidth >= 440 ? { paddingTop: "90px" } : {}),
            ...(window.innerWidth >= 600 ? { paddingTop: "110px" } : {}),
            ...(window.innerWidth >= 720 ? { paddingTop: "130px" } : {}),
          }}
        >
          <div className="layout-main">
            <div className="filter-popup-transaction">
              <div id="viewMask" className="mask"></div>
              <div
                id="viewFilter"
                className={`filter-popup-transaction-body ${
                  isPopupVisible ? "active" : ""
                }`}
              >
                <ul className="cloumn-list">
                  {filters.map((filter, index) => (
                    <li
                      key={index}
                      className={`btn btnSelect ${
                        selectedFilter === filter ? "active" : ""
                      }`}
                      onClick={() => handleSelectFilterClick(filter)}
                    >
                      {filter}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="van-pull-refresh">
              <div
                className="van-pull-refresh__track"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="van-list">
                  {data?.histories?.map((history, index) => (
                    <div className="record-cell van-cell" key={index}>
                      <div className="van-cell__title">
                        <b className="record-label">{history.type}</b>
                        <i className="record-time">
                          {formatDate(history.created_at)}
                        </i>
                      </div>
                      <div className="van-cell__value">
                        <em
                          className={`record-money ${
                            history.sign === "+"
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {history.sign}
                          {history.amount}
                        </em>
                      </div>
                    </div>
                  ))}
                  <div className="van-list__finished-text">{t("end")}.</div>
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

export default TransictionRecord;
