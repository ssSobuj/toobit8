import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import ring from "../../assets/images/ring.png";
import headphone from "../../assets/images/headphone.png";
import LanguagePopUp from "./LanguagePopUp";
import { Link, useNavigate } from "react-router-dom";

function ExtraHeader({ pageName }) {
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
    <header className="layout-header" style={{ position: "fixed", width: "100%", zIndex: "9999" }}>
      <div className="van-nav-bar van-hairline--bottom">
        <div className="van-nav-bar__content">
          <div className="van-nav-bar__left" onClick={goBack}>
            <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
            <span className="van-nav-bar__text">{pageName}</span>
          </div>
          <div className="van-nav-bar__title van-ellipsis"></div>
        </div>
      </div>
    </header>
  );
}

export default ExtraHeader;
