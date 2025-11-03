import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loader from "../../../component/extra/loader";
import { useState } from "react";
import depositIcon from "../../../assets/images/deposit_icon.png";
import withdrawal_icon from "../../../assets/images/withdrawal_icon.png";
import share_friend_icon from "../../../assets/images/share_friend_icon.png";
import team_icon from "../../../assets/images/team_icon.png";
import app_icon from "../../../assets/images/app_icon.png";
import information_icon from "../../../assets/images/information_icon.png";
import activity_icon from "../../../assets/images/activity-icon-2.png";
import agent_icon from "../../../assets/images/agent-icon.png";
const HomeLinks = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);

  // Detect the user's operating system
  const getOperatingSystem = () => {
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "ios";
    }

    if (/android/i.test(userAgent)) {
      return "apk";
    }

    if (navigator.platform.indexOf("Win") !== -1) {
      return "apk";
    }

    if (navigator.platform.indexOf("Mac") !== -1) {
      return "ios";
    }

    if (navigator.platform.indexOf("Linux") !== -1) {
      return "apk";
    }

    return "Unknown OS";
  };

  const downloadApp = () => {
    const device = getOperatingSystem();
    const domain = window.location.hostname;
    // const domain = 'fonterramall.vip';

    fetchData(device, domain);
  };

  const fetchData = async (device, domain) => {
    try {
      setIsLoader(true);

      const url = `https://fonterramall.com/myapp/api/app/download?os=${device}&domain=${domain}`;

      // Open the new tab
      const newTab = window.open(url, "_blank");

      // Close the tab after 2 seconds
      setTimeout(() => {
        if (newTab) {
          newTab.close();
        }
      }, 2000);

      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      data-v-1b3f4761=""
      className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text tools-part"
      style={{ background:'#103795' }}
    >
      <Link data-v-1b3f4761="" to="/recharge" className="part">
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={depositIcon} />
          </div>
          <div data-v-1b3f4761="" className="label">
            {t("deposit")}
          </div>
        </li>
      </Link>

      <Link data-v-1b3f4761="" to="/withdraw" className="part">
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={withdrawal_icon} />
          </div>
          <div data-v-1b3f4761="" className="label">
            {t("withdrawal")}
          </div>
        </li>
      </Link>

      <Link data-v-1b3f4761="" to="/share" className="part">
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={share_friend_icon} />
          </div>
          <div data-v-1b3f4761="" className="label">
            {t("share_friends")}
          </div>
        </li>
      </Link>

      <Link data-v-1b3f4761="" to="/team" className="part">
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={team_icon} />
          </div>
          <div data-v-1b3f4761="" className="label">
            {t("team")}
          </div>
        </li>
      </Link>

      {/* <Link data-v-1b3f4761=""
        to="/activity"
        className="part"
      >
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={activity_icon} />
          </div>
          <div data-v-1b3f4761="" className="label">Activity</div>
        </li>
      </Link>

  */}

      <Link data-v-1b3f4761="" to="/agent-coperation" className="part">
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={app_icon} />
          </div>
          <div data-v-1b3f4761="" className="label">
            {t("agent_corperation")}
          </div>
        </li>
      </Link>

      <Link data-v-1b3f4761="" to="/information" className="part">
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={information_icon} />
          </div>
          <div data-v-1b3f4761="" className="label">
            {t("information")}
          </div>
        </li>
      </Link>
      <Link data-v-1b3f4761="" to="/invitation-rewards" className="part">
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={activity_icon} />
          </div>
          <div data-v-1b3f4761="" className="label">
            {t("activity")}
          </div>
        </li>
      </Link>

           <Link data-v-1b3f4761=""
        to="#"
        className="part"
      >
        <li data-v-1b3f4761="" className="wrap">
          <div data-v-1b3f4761="" className="img-wrap">
            <img data-v-1b3f4761="" src={app_icon} />
          </div>
          <div data-v-1b3f4761="" className="label">{t("app")}</div>
        </li>
      </Link>

      {isLoader ? <Loader /> : null}
    </div>
  );
};

export default HomeLinks;
