import { Link } from "react-router-dom";
import AuthTop from "./extra/authTopPart";
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
// images import
import tron_love_machine from "../assets/images/tron_love_machine.jpg";
import tron_love_wind from "../assets/images/tron_love_wind.jpg";
import tron_love_hydroulic from "../assets/images/tron_love_hydroulic.jpg";
import tron_love_difi from "../assets/images/tron_love_difi.jpg";
import tron_love_blockchain from "../assets/images/tron_love_blockchain.jpg";
import tron_love_cloud from "../assets/images/tron_love_cloud.jpg";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";

import React, { useState, useEffect } from "react";

import axios from "axios";

const CycleInvest = () => {
  const { t } = useTranslation();
  const [data, setData] = useState("");
  const [baseUrl, setBaseUrl] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/cycle");

        setData(response.data);
        const baseUrl = axios.defaults.baseURL;
        setBaseUrl(baseUrl);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div id="app">
      <div className="uni-page">
        <div className="uni-page-wrapper">
          <div className="uni-page-body">
            <div className="uni-view invest-list-container">
              <AuthTop></AuthTop>
              <div className="uni-view mlr30">
                <div className="tab-container">
                  <div className="invtab tabs uni-view tabs bg-white h80 flex alcenter mb30 ">
                    {/* <Link
                      id="basic"
                      className="tab uni-view tab-item flex-one flex-center tab_link non-active"
                      to="/invest"
                    >
                      {t("basic_investment")}
                    </Link> */}
                    <Link
                      id="cyclic"
                      className="tab uni-view tab-item flex-one flex-center tab_link  active"
                      style={{ textAlign: "left" }}
                      to="/invest/cycle-investing"
                    >
                      {t("cyclical_investing")}
                    </Link>
                    <Link
                      className="tab uni-view tab-item flex-one flex-center tab_link  non-active"
                      to="/invest/records"
                    >
                      {t("record")}
                    </Link>
                  </div>
                  {/* tabs ends */}
                  <div className="pledge-rules">
                    <div className="tab-content">
                      <div className="uni-view product-list-box flex">
                        {data?.products?.map((product, index) => {
                          return (
                            <Link
                              to={`/invest-product/${product.slug}`}
                              className="uni-navigator col text-white"
                              key={index}
                            >
                              <div className="uni-view product-item">
                                <div className="uni-image">
                                  <img src={`${baseUrl}${product.image}`} />
                                </div>
                                <div className="uni-view c-white mt10 mb10">
                                  {product.title}
                                </div>
                                <div className="uni-view ft26 word">
                                  {product.daily_interest}-{product.interest_to}
                                  %
                                </div>
                                <div className="uni-view ft26 word">
                                  {t("cycle")}:{product.cycle} {t("day")}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* ends content */}
                </div>
                {/* tabcontainer ends */}
                <Navbar></Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SupportLink></SupportLink>
      <CustomLoader />
    </div>
  );
};

export default CycleInvest;
