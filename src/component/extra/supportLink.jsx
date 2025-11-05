import { useState, useEffect } from "react";
import telegramIcon from "../../assets/images/telegram-icon.png";
import BotImage from "../../assets/images/girl_mic.jpg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { FaTelegram } from "react-icons/fa";

const SupportLink = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    x: window.innerWidth - 60,
    y: 170,
  });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [data, setData] = useState();

  useEffect(() => {
    const fetchTelegramLink = async () => {
      try {
        const response = await axios.get("api/support");
        setData(response.data); // Assuming response.data contains the links
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTelegramLink();
  }, []);

  const handleDragStart = (e) => {
    setDragging(true);
    const startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const startY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;

    setOffset({
      x: startX - position.x,
      y: startY - position.y,
    });
  };

  const handleDragMove = (e) => {
    if (e.type === "touchmove") e.preventDefault();
    if (!dragging) return;

    const moveX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const moveY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;

    // Calculate new position with offset
    let newX = moveX - offset.x;
    let newY = moveY - offset.y;

    // Limit x and y positions to stay within viewport bounds
    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 200;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleDragMove, { passive: false });
      window.addEventListener("touchend", handleDragEnd);
    } else {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [dragging]);

  const buttonStyle = {
    position: "fixed",
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundImage: `url(${BotImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "none",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "60px",
    // Responsive margin top
    ...(window.innerWidth >= 330 ? { marginTop: "80px" } : {}),
    ...(window.innerWidth >= 440 ? { marginTop: "120px" } : {}),
    ...(window.innerWidth >= 600 ? { marginTop: "130px" } : {}),
    ...(window.innerWidth >= 720 ? { marginTop: "150px" } : {}),
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 998,
    display: isOpen ? "block" : "none",
  };

  const drawerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    background: "linear-gradient(135deg, #005cff, #826E00, #002668)",
    transform: isOpen ? "translateY(0)" : "translateY(100%)",
    transition: "transform 0.3s ease-out",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
    padding: "20px 10px",
    borderRadius: "15px 15px 0 0",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  };

  const descriptionStyle = {
    color: "#fff",
    fontSize: "14px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const telegramButtonStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(56, 94, 189, 1)",
    color: "#fff",
    padding: "5px",
    paddingRight: "10px",
    borderRadius: "10px",
    textDecoration: "none",
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "600",
    gap: "10px",
  };

  return (
    <>
      <button
        aria-label={t("open_support_drawer")}
        style={buttonStyle}
        onClick={() => setIsOpen(!isOpen)}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      ></button>

      <div style={overlayStyle} onClick={() => setIsOpen(false)}></div>

      <div
        style={drawerStyle}
        role="dialog"
        aria-modal="true"
        aria-label={t("online_service")}
      >
        <h2 style={headerStyle}>{t("online_service")}</h2>
        <p style={descriptionStyle}>{t("choose_support_method")}</p>

        <a
          href={data?.support_url}
          style={telegramButtonStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={60} />

          {t("customer_support")}
          <span style={{ fontSize: "15px", marginLeft: "auto" }}>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "12px", color: "#fff" }}
            />
          </span>
        </a>

        <a
          href={data?.support_url2}
          style={telegramButtonStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={60} />
          {t("community_group")}
          <span style={{ fontSize: "15px", marginLeft: "auto" }}>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "12px", color: "#848e9a" }}
            />
          </span>
        </a>
      </div>
    </>
  );
};

export default SupportLink;
