import { Link, useNavigate } from "react-router-dom";
import Navbar from "./partial/navbar";
import CustomLoader from "./extra/customLoader";
import Header from "./extra/Header";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import axios from "axios";
import InvestHeader from "./extra/InvestHeader";
const Invest = () => {
  const navigate = useNavigate();
  const inviteReward = () => {
    navigate("/invitation-rewards");
  };
  const deposit = () => {
    navigate("/deposit");
  };
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
      <div className="layout-container invest-list-container investList">
        <InvestHeader></InvestHeader>
        <main
          className="layout-body"
          style={{
            paddingTop: "80px",
            // Responsive margin top
            ...(window.innerWidth >= 330 ? { paddingTop: "110px" } : {}),
            ...(window.innerWidth >= 440 ? { paddingTop: "160px" } : {}),
            ...(window.innerWidth >= 600 ? { paddingTop: "200px" } : {}),
            ...(window.innerWidth >= 720 ? { paddingTop: "230px" } : {}),
          }}
        >
          <div className="layout-main">
            <div className="tab-content">
              <div className="invest-list-wrap">
                <div class="uni-view link_icon">
                  <Link to="/deposit" class="uni-navigator item">
                    {t("deposit")}
                  </Link>
                  <Link to="/withdraw" class="uni-navigator item">
                    {t("withdrawal")}
                  </Link>
                </div>
                {/* ends */}
                <div className="product-list-boxs">
                  <div className="uni-view product-list-box">
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
                              {product.daily_interest}-{product.interest_to}%
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
            </div>
          </div>
        </main>
        <Navbar></Navbar>
      </div>
      <SupportLink></SupportLink>
      <CustomLoader />
    </div>
  );
};

export default Invest;
