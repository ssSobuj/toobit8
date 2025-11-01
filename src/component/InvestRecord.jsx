import { Link } from "react-router-dom";
import AuthTop from "./extra/authTopPart";
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import InvestHeader from "./extra/InvestHeader";
import InvestRecordHeader from "./extra/InvestRecordHeader";
import Header from "./extra/Header";
import InvestEmpty from "./extra/Invest/InvestEmpty";
import InvestPackageList from "./extra/Invest/InvestPackageList";

const InvestRecord = () => {
  const { t } = useTranslation();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/invest/records");
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `[${year}-${month}-${day} ${hours}:${minutes}:${seconds}]`;
  };

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full layout-tab-bar px-mg"
        >
          <Header />
          {/* header ends */}
          <div data-v-ede7987f="" data-v-f5703ed9="" className="invest-wrap">
            {/* invest tabs starts */}
            <div
              data-v-ede7987f=""
              className="top-wrap z-2 w-full flex flex-col rounded-b-xl space-y-3"
            >
              <div
                data-v-ede7987f=""
                className="mr-24 w-full flex items-center justify-between"
              >
                <div
                  data-v-ede7987f=""
                  className=":uno: base-user-tab flex items-center justify-center w-full"
                  style={{ "--84f29e72": "2" }}
                >
                  <Link
                    to="/invest/basic-invest"
                    className=":uno: tab-item h-full flex cursor-pointer items-center justify-center"
                  >
                    <div className="text-center">{t("smart_investment")}</div>
                  </Link>
                  <Link
                    to="/invest/records"
                    className=":uno: tab-item h-full flex cursor-pointer items-center justify-center active"
                  >
                    <div className="text-center">{t("invest_record")}</div>
                  </Link>
                </div>
              </div>
            </div>
            {/* invest tabs ends */}
            <div
              data-v-ede7987f=""
              className="mt-10px invset-level-wrap"
              // style={{ display: "none" }}
            >
              <div role="feed" className="van-list">
                {data?.invests?.map((invest, index) => {
                  return (
                    <div className="bingo-orders record-cell" key={index}>
                      <span className="cell-left">
                        <i className="text-weight">{invest.product.title}</i>
                        <i>
                          {t("valid_period")}({t("day")}):{" "}
                          {invest.product.cycle}
                        </i>
                        <i>
                          {t("remaining_days")}: {invest.remaining_days}
                        </i>
                        <i>{formatDate(invest.created_at)}</i>
                        <i>
                          <em>
                            {t("status")}:
                            <i className="text-success">{t("running")}</i>
                          </em>
                        </i>
                      </span>
                      <span className="cell-right">
                        <i>
                          {t("quantity")}: {invest.qty}
                        </i>
                        <i>
                          {t("amount")}: {invest.amount}
                        </i>
                        <i>
                          {t("return")}: {invest.return}
                        </i>
                        <i>
                          {t("profit")}: {invest.profit}
                        </i>
                      </span>
                    </div>
                  );
                })}

                {/* {data?.deposum > 0 ? (
                  <div className="bingo-orders record-cell">
                    <span className="cell-left">
                      <i className="text-weight">{t("equity_pledge")}</i>
                      <i>
                        {t("valid_period")} ({t("day")}): {data?.cycle}
                      </i>
                      <i>
                        {t("remaining_days")}: {data?.myday}
                      </i>
                      <i>{formatDate(data?.data)}</i>
                      <i>
                        <em>
                          {t("status")}:
                          <i className="text-success">{t("running")}</i>
                        </em>
                      </i>
                    </span>
                    <span className="cell-right">
                      <i>{t("quantity")}: 1</i>
                      <i>
                        {t("amount")}: {data?.deposite}
                      </i>
                      <i>
                        {t("return")}: {data?.return}
                      </i>
                      <i>
                        {t("profit")}: {data.return}
                      </i>
                    </span>
                  </div>
                ) : null} */}

                <div className="van-list__finished-text">{t("end")}.</div>
                <div className="van-list__placeholder"></div>
              </div>
            </div>

            {!data?.invests?.length && !data?.deposum && <InvestEmpty />}
          </div>
          <Navbar></Navbar>
        </div>
      </div>

      {/* layout-tab-bar end */}
      <CustomLoader />
      <SupportLink />
    </div>
  );
};

export default InvestRecord;
