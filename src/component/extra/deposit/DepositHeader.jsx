import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import ring from "../../../assets/images/ring.png";
import headphone from "../../../assets/images/headphone.png";
import { useNavigate } from "react-router-dom";
function DepositHeader({ toggleLangPopup, toggleTelegramPopUp }) {
  const { t, i18n } = useTranslation();

  // Set default language on first visit
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (!savedLanguage) {
      i18n.changeLanguage("en"); // Set English as default language
      localStorage.setItem("language", "en"); // Store default language in localStorage
    }
  }, [i18n]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };
  // Get the current language from i18n
  const currentLanguage = i18n.language || "en"; // Default to 'en' if undefined
  const displayLanguage =
    currentLanguage === "en"
      ? "English"
      : currentLanguage === "sr"
      ? "Serbian"
      : currentLanguage === "fr"
      ? "France"
      : currentLanguage === "hr"
      ? "Croatian"
      : currentLanguage === "el"
      ? "Greek"
      : currentLanguage === "sq"
      ? "Albanian"
      : currentLanguage === "ro"
      ? "Romanian"
      : currentLanguage === "bg"
      ? "Bulgarian"
      : currentLanguage === "de"
      ? "Germany"
      : currentLanguage === "bn"
      ? "বাংলা"
      : currentLanguage === "mk"
      ? "Macedonian"
      : currentLanguage === "es"
      ? "Spain"
      : currentLanguage === "tr"
      ? "Turkey"
      : currentLanguage;

  return (
    <div className="uni-view flex-between alcenter h110 plr30 uni-nav-bar">
      <div className="uni-navigator flex alcenter arrow" onClick={goBack}>
        <div className="uni-image mr10 icon-arrow-left"></div>
        <div className="uni-view ft30 font-bold">Recharge</div>
      </div>
      <div className="uni-view flex alcenter">
        <div onClick={toggleLangPopup}>
          <span className="switch-lang type ft26 van-popover__wrapper">
            <span id="languageSelect">{displayLanguage}</span>
            <i
              id="dropArrow"
              className="icon-arrow van-icon van-icon-arrow-down"
            ></i>
          </span>
        </div>

        <div className="uni-navigator header-icon flex-center">
          <div className="uni-image">
            <img src={ring} />
          </div>
          <div className="uni-view counter"></div>
        </div>
        <a href="#" className="header-icon flex-center">
          <div className="uni-image">
            <img src={headphone} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default DepositHeader;
