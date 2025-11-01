import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/css/style2.css";
import "../assets/css/style3.css";
import "../assets/css/style4.css";
import "../assets/css/style5.css";
import "../assets/css/style6.css";
import "../assets/css/style7.css";
import "../assets/css/style8.css";
import "../assets/css/style9.css";
import "../assets/css/style10.css";
import "../assets/css/style11.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import home_4side from "../assets/images/home_4side.png";
import pie_chart from "../assets/images/pie_chart.png";
import performdatadisplay_reward from "../assets/images/performdatadisplay_reward.png";
//component
import Navbar from "./partial/navbar";
import Header from "./extra/Header";
import CustomLoader from "./extra/customLoader";
import { Link, useNavigate } from "react-router-dom";
import HomeNotice from "./extra/home/HomeNotice";
import HomeLinks from "./extra/home/HomeLinks";
import SupportLink from "./extra/supportLink";
import HomeCycleInvest from "./extra/home/HomeCycleInvest";
import HomeQuotes from "./extra/home/HomeQuotes";
import HomeWithdrawal from "./extra/home/HomeWithdrawal";
import Announcement from "./extra/anouncement";
import HomeSlider from "./extra/home/HomeSlider";
import HomeBg from "../assets/images/home-bg.jpeg";

import { useState, useEffect } from "react";
import AuthTopPart from "./extra/authTopPart";
import HomeAssert from "./extra/home/HomeAssert";
import HomeActivity from "./extra/home/HomeActivity";
import GlobalPartner from "./extra/home/GlobalPartner";
import HomeNoticePopup from "./extra/home/HomeNoticePopup";

const home = () => {
  const [data, setData] = useState();
  const { t, i18n } = useTranslation();
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const endpoint = token ? "api/home" : "api/home2";
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider">
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full layout-tab-bar px-mg"
        >
          <Header />
          {/* header ends */}
          <div data-v-1b3f4761="" data-v-f5703ed9="" className="index-wrap c-1">
            <HomeNotice></HomeNotice>
            <HomeSlider></HomeSlider>
            <HomeAssert data={data}></HomeAssert>
            <HomeLinks></HomeLinks>
            {/* <HomeActivity></HomeActivity> */}
            <HomeQuotes></HomeQuotes>
            <HomeWithdrawal></HomeWithdrawal>
            <GlobalPartner></GlobalPartner>
          </div>
          <Navbar></Navbar>
        </div>
      </div>

      {/* layout-tab-bar end */}
      {/* <Announcement></Announcement> */}
      <HomeNoticePopup data={data} />
      <CustomLoader />
      <SupportLink />
    </div>
  );
};

export default home;
