import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LanguagePopUp = () => {
  const { i18n } = useTranslation();
  const [isLanguageVisible, setIsLanguageVisible] = useState(true);

  // Set default language on first visit
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (!savedLanguage) {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const currentLanguage = i18n.language || "en";

  // Only the requested languages
  const allLanguages = [
    { value: "ar", label: "Arabic" },
    { value: "en", label: "English" },
    { value: "zh-CN", label: "China" },
    { value: "tr", label: "Turkey" },
    { value: "it", label: "Italy" },
    { value: "ru", label: "Russian" },
    { value: "mk", label: "Macedonian" },
    { value: "sr", label: "Serbian" },
    { value: "id", label: "Indonesia" },
    { value: "es", label: "Spanish" },
    { value: "pt", label: "Portugal" },
    { value: "fr", label: "France" },
    { value: "ko", label: "Korea" },
  ];

  // Optional: derive a display name only from the allowed list
  const displayLanguage =
    allLanguages.find((l) => l.value === currentLanguage)?.label ||
    currentLanguage;

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem("language", languageCode);
    setIsLanguageVisible(false);
  };
  const navigate = useNavigate();

  const selectLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem("language", languageCode);
    setIsLanguageVisible(false);
    navigate(-1);
  };

  const goBack = () => {
    navigate(-1);
  };

  if (!isLanguageVisible) return null;

  return (
    <div
      id="app"
      data-v-app=""
      className="a-t-30 no-1"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="van-config-provider">
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          <div data-v-923868a9="" data-v-f5703ed9="" className="navigation">
            <div data-v-923868a9="" className="navigation-content">
              <div
                data-v-923868a9=""
                className="h-full flex cursor-pointer items-center justify-between"
              >
                <div
                  data-v-923868a9=""
                  className="icon i-material-symbols-arrow-back-ios-new-rounded"
                  onClick={goBack}
                ></div>
                <div data-v-923868a9="">language</div>
                <div data-v-923868a9="" id="navigation-right">
                  <span data-v-923868a9="" className="opacity-0">
                    {" "}
                    h{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* navigation ends */}
          <div data-v-206f8022="" className="lang-wrap">
            <div className=":uno: container-card relative rd-1card-radius p-1mg c-1btn-text shadow-1shadow">
              {allLanguages.map((language, index) => (
                <div
                  data-v-206f8022=""
                  className="lang-cell"
                  onClick={() => selectLanguage(language.value)}
                  key={index}
                >
                  <span data-v-206f8022="">{language.label}</span>
                  {currentLanguage === language.value && (
                    <div
                      data-v-206f8022=""
                      className="i-ic:round-check h-20px w-20px text-$primary"
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Optional: show current selection somewhere if needed */}
          {/* <div className="text-center mt-4 text-sm opacity-70">{displayLanguage}</div> */}
        </div>
      </div>
    </div>
  );
};

export default LanguagePopUp;
