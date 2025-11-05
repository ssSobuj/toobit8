import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/robot3.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const languageMap = {
  en: "English",
  id: "Indonesia",
  vi: "Tiếng Việt",
  ja: "日本語",
  pt: "Português",
  ar: "عربي",
  th: "ไทย",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  ko: "한국어",
  tr: "Türk",
  ru: "Pусский",
  fa: "فارسی",
  ms: "Melayu",
  bn: "বাংলা",
  az: "Azərbaycan",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
};

function AuthTopPart({ userName }) {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language || "en";
  const languageLabel = languageMap[currentLanguage] || currentLanguage;

  const handleClickIcon = async () => {
    try {
      // Fetch data from API
      const response = await axios.get("api/support2");

      if (response.data.support_url) {
        window.location.href = response.data.support_url;
      }
    } catch (error) {
      // Handle any errors
      console.error("Error fetching data:", error);
    }
  };

  return (
    <header className="top-info relative flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center text-center w-full">
        <div className=":uno: base-logo flex items-center justify-center w-full">
          <img
            className="site-img h-42 w-42 rd-50% mx-auto"
            src={logo}
            draggable="false"
            alt="logo"
            style={{ maxWidth: "180px" }}
          />
        </div>
      </div>
      <div className="top-tools">
        <div></div>
        <Link to="/lang" className="base-lang-wrap">
          <FontAwesomeIcon
            className="svg-icon 1-lang :uno: mr-3px text-16px :uno: mr-3px text-16px"
            icon={faGlobe}
          />
          <span>
            {languageLabel === "en-US" ||
            languageLabel === "en-GB" ||
            languageLabel === "en-UK"
              ? "English"
              : languageLabel}
          </span>
        </Link>
      </div>
    </header>
  );
}

export default AuthTopPart;
