// src/Pages/extra/Header.jsx
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo2.png";
import noticeIcon from "../../assets/images/notice-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const languageLabel = languageMap[currentLanguage] || currentLanguage;

  const headerRef = useRef(null);
  const navigate = useNavigate();

  // NEW: unread state
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 90;
      const value = Math.min(scrollTop / maxScroll, 1);
      if (headerRef.current) {
        headerRef.current.style.setProperty("--47031f5d", value.toFixed(2));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW: check notification count once on mount
  useEffect(() => {
    const fetchUnread = async () => {
      try {
        const res = await axios.get("api/notification");
        const count = res?.data?.notificationCount ?? 0;
        setHasUnread(count > 0);
      } catch (e) {
        console.error("Failed to fetch notification count", e);
        setHasUnread(false);
      }
    };
    fetchUnread();
  }, []);

  const goNotice = () => {
    navigate("/notice");
  };

  return (
    <header ref={headerRef} className="nav-bar-wrap" style={{ "--47031f5d": "0" }}>
      <div className="nav-bar px-1">
        <div id="navBarItem19" className="nav-bar-content h-full w-full">
          <div className="left name font-playgram">
            <div className="base-logo flex items-center small-logo">
              <img
                className="site-img h-full w-full rd-50%"
                src={logo}
                draggable="false"
                alt="logo"
                style={{ minWidth: "40px", minHeight: "40px" }}
              />
            </div>
            <span className="font-playgram text-truncate ml-1">TOBBIT</span>
          </div>

          <div className="right">
            <div className="mr-8px flex items-center">
              {/* ONLY change here: rotate + dot are conditional based on hasUnread */}
              <div
                className={`${hasUnread ? "rotate" : ""} base-alarm-logo-btn cursor-pointer mr-0`}
                onClick={goNotice}
              >
                <img src={noticeIcon} className="w-20px h-20px" alt="alarm" />
                {hasUnread && <div className="dot"></div>}
              </div>
            </div>

            <Link to="/lang" className="base-lang-wrap cursor-pointer">
              <FontAwesomeIcon
                className="svg-icon 1-lang :uno: mr-3px text-16px :uno: mr-3px text-16px"
                icon={faGlobe}
              />
              <span>{languageLabel === "en-US" ? "English" : languageLabel}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
