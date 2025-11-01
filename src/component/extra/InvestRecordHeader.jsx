import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import ring from "../../assets/images/ring.png";
import logo from "../../assets/images/logo.png";
import headphone from "../../assets/images/headphone.png";
import LanguagePopUp from "./LanguagePopUp";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function InvestRecordHeader({ userName }) {
  const { t, i18n } = useTranslation();

  // Set default language on first visit
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (!savedLanguage) {
      i18n.changeLanguage("en"); // Set English as default language
      localStorage.setItem("language", "en"); // Store default language in localStorage
    } else {
      i18n.changeLanguage(savedLanguage); // Use the saved language if available
    }
  }, [i18n]);

  // Language popup state
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);
  const toggleLangPopup = () => {
    setIsLanguageVisible(!isLanguageVisible);
  };

  const currentLanguage = i18n.language || "en"; // Default to 'en' if undefined
  const displayLanguage =
    currentLanguage === "en"
      ? "English"
      : currentLanguage === "id"
      ? "Indonesian"
      : currentLanguage === "vi"
      ? "Vietnamese"
      : currentLanguage === "ja"
      ? "Japanese"
      : currentLanguage === "pt"
      ? "Portuguese"
      : currentLanguage === "ar"
      ? "Arabic"
      : currentLanguage === "th"
      ? "Thai"
      : currentLanguage === "es"
      ? "Spanish"
      : currentLanguage === "de"
      ? "German"
      : currentLanguage === "fr"
      ? "French"
      : currentLanguage === "it"
      ? "Italian"
      : currentLanguage === "ko"
      ? "Korean"
      : currentLanguage === "tr"
      ? "Turkish"
      : currentLanguage === "ru"
      ? "Russian"
      : currentLanguage === "fa"
      ? "Persian"
      : currentLanguage === "ms"
      ? "Malay"
      : currentLanguage === "bn"
      ? "Bengali"
      : currentLanguage === "az"
      ? "Azerbaijani"
      : currentLanguage === "zh-CN"
      ? "Simplified Chinese"
      : currentLanguage === "zh-TW"
      ? "Traditional Chinese"
      : currentLanguage;

  // Function to change the language
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode); // Change language in i18n
    localStorage.setItem("language", languageCode); // Store the selected language in localStorage
    setIsLanguageVisible(false); // Close the language popup after selection
  };

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
    <header
      className="layout-header"
      style={{ position: "fixed", width: "100%", zIndex: "9999" }}
    >
      <div className="layout-nav-bar style2 van-nav-bar van-hairline--bottom">
        <div className="van-nav-bar__content">
          <div className="van-nav-bar__left">
            <img src={logo} className="navbar-logo" />
          </div>
          <div className="van-nav-bar__title van-ellipsis"></div>
          <div className="van-nav-bar__right">
            <span>
              <a href="#" className="btn btn-download-app">
                <i className="icon"></i>
                <span>App</span>
              </a>
            </span>
            <span>
              <div onClick={toggleLangPopup} className="switch-lang"></div>

              <LanguagePopUp
                isLanguageVisible={isLanguageVisible}
                toggleLangPopup={toggleLangPopup}
                changeLanguage={changeLanguage} // Pass the updated changeLanguage function
              />
            </span>
            <Link
              to="mineInformation"
              className="navbar-notice router-link-active"
            ></Link>
          </div>
        </div>
      </div>
      <div class="tab-container head-tabs" style={{ paddingTop: "20px" }}>
        <div class="tabs ">
          <Link to="/invest/basic-invest" className="tab tab-item " data-id="0">
            {t("basic_investment")}
          </Link>

          <Link to="/invest" className="tab tab-item " data-id="0">
            {t("cyclical_investing")}
          </Link>
          <Link
            to="/invest/records"
            className="tab tab-item active"
            data-id="1"
          >
            {t("record")}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default InvestRecordHeader;
