import React from "react";
import { useTranslation } from "react-i18next";
import SingleHeader from "./extra/SingleHeader";

import crypto_icon1 from "../assets/images/crypto_icon1.png";
import crypto_icon2 from "../assets/images/crypto_icon2.png";
import crypto_icon3 from "../assets/images/crypto_icon3.png";
import crypto_icon4 from "../assets/images/crypto_icon4.png";
import sol_icon_new from "../assets/images/sol_icon_new.png";
import CustomLoader from "./extra/customLoader";

import { useEffect, useState } from "react";
import axios from "axios";

const QuantifyRecords = () => {
  const { t } = useTranslation();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/record");
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function formatDateTime(dateString) {
    if (!dateString) return "N/A";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "N/A";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full layout-tab-bar px-mg"
        >
          <SingleHeader pageName={t("quantify_records")}></SingleHeader>
          {/* header ends */}
          <div className="p-3 pt-5">
            {data?.tradings?.map((trading, index) => (
              <div
                className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text base-quantify-record my-4 bg-$bg-weight border border-solid border-$primary p-4 shadow"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center font-bold">
                    <img className="mr-3 h-5 w-5" src={sol_icon_new} alt="" />
                    <div>SOL/USDT</div>
                  </div>
                  <div className="text-sm text-$primary">{t("finish")}</div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-xs text-$text-gray">
                      {t("execute_position")}
                    </div>
                    <div className="mt-1 text-sm">0.000000</div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-xs text-$text-gray">
                      {" "}
                      {t("buy_platform")}
                    </div>
                    <div className="mt-1 text-sm">Huobi</div>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-xs text-$text-gray">
                      {t("purchase_price")}
                    </div>
                    <div className="mt-1 text-sm">169.85530000</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-xs text-$text-gray">{t("time")}</div>
                    <div className="mt-1 text-xs">
                      {formatDateTime(trading?.created_at)}
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-xs text-$text-gray">
                      {t("sales_platform")}
                    </div>
                    <div className="mt-1 text-sm">OKX</div>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-xs text-$text-gray">
                      {t("selling_price")}
                    </div>
                    <div className="mt-1 text-sm">169.86910000</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-xs text-$text-gray">
                      {t("service_charge")}
                    </div>
                    <div className="mt-1 text-sm">0.0000</div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-xs text-$text-gray">{t("profit")}</div>
                    <div className="mt-1 text-sm text-green-500">
                      {" "}
                      +{trading?.amount || 0.0}
                    </div>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-xs text-$text-gray">{t("model")}</div>
                    <div className="mt-1 text-sm">{t("vip_model")}</div>
                  </div>
                </div>

                <div className="mt-5 text-sm font-bold">
                  {t("quantitative_strategy")}
                </div>

                <div
                  className="mt-4 celue rounded-lg px-3 py-3"
                  style={{ backgroundColor: "#44454b" }}
                >
                  <div className="flex items-center">
                    <div className="rounded-2xl bg-$primary px-2 py-1 text-xs text-white">
                      {t("popular")}
                    </div>
                    <div className="ml-2 flex-1 text-sm font-bold">
                      {t("cryptocurrency_trading")}
                    </div>
                    <div className="flex items-center">
                      <div className="text-primary-9 text-xs">{t("check")}</div>
                      <i
                        className="van-badge__wrapper van-icon van-icon-play"
                        style={{ color: "rgb(9, 196, 151)" }}
                      ></i>
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="mt-3 flex items-center">
                      <img
                        className="h-5 w-5 object-center"
                        src={crypto_icon1}
                        alt=""
                      />
                      <div className="ml-2 flex-1 text-xs">Huobi</div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <img
                        className="h-5 w-5 object-center"
                        src={crypto_icon2}
                        alt=""
                      />
                      <div className="ml-2 flex-1 text-xs">Binance</div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <img
                        className="h-5 w-5 object-center"
                        src={crypto_icon3}
                        alt=""
                      />
                      <div className="ml-2 flex-1 text-xs">Coinbase</div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <img
                        className="h-5 w-5 object-center"
                        src={crypto_icon4}
                        alt=""
                      />
                      <div className="ml-2 flex-1 text-xs">OKX</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div data-v-156e3583 className="base-list a-t-17">
              {/* other potential list items */}
              <div data-v-156e3583 className="no-more text-center">
                {t("no_more_data")}
              </div>
            </div>
          </div>
          <CustomLoader />
        </div>
      </div>
    </div>
  );
};

export default QuantifyRecords;
