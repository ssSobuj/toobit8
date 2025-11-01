import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import ring from "../../assets/images/ring.png";
import headphone from "../../assets/images/headphone.png";
import LanguagePopUp from "./LanguagePopUp";
import { Link, useNavigate } from "react-router-dom";

function RegisterHeader({ userName }) {
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

  // Get the current language from i18n
  const currentLanguage = i18n.language || "en"; // Default to 'en' if undefined

  // Function to display the language in readable form
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

  // Function to change the language
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode); // Change language in i18n
    localStorage.setItem("language", languageCode); // Store the selected language in localStorage
    setIsLanguageVisible(false); // Close the language popup after selection
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="uni-view flex-between alcenter h110 plr30 uni-nav-bar">
      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        changeLanguage={changeLanguage} // Pass the updated changeLanguage function
      />
      <div className="uni-navigator flex alcenter arrow" onClick={goBack}>
        <div
          className="uni-image mr10 img-arrow-left"
          style={{ color: "#fff" }}
        ></div>
        <div className="uni-view ft30 font-bold">Register</div>
      </div>
      <div className="uni-view flex alcenter">
        <div onClick={toggleLangPopup} style={{ cursor: "pointer" }}>
          <span className="switch-lang type ft26 van-popover__wrapper">
            <span id="languageSelect">{displayLanguage}</span>
            <i
              id="dropArrow"
              className="icon-arrow van-icon van-icon-arrow-down"
            ></i>
          </span>
        </div>

        <Link
          to="/mineinformation"
          className="uni-navigator header-icon flex-center"
        >
          <div className="uni-image">
            <img src={ring} alt="Notification" />
          </div>
          <div className="uni-view counter"></div>
        </Link>
        <a href="#" className="header-icon flex-center">
          <div className="uni-image">
            <img src={headphone} alt="Support" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default RegisterHeader;
