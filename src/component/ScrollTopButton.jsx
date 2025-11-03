import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // tuned for mobile:
    const CHECK_SCROLL_PX = 600; // show after ~100px scroll on mobile
    const EXTRA_PAGE_HEIGHT = 200; // consider page "long" if it's this much taller than viewport
    const opts = { passive: true };

    const check = () => {
      const scrolled = window.scrollY > CHECK_SCROLL_PX;
      const longPage =
        document.documentElement.scrollHeight >
        window.innerHeight + EXTRA_PAGE_HEIGHT;
      // show on mobile when scrolled and page is long enough
      setVisible(scrolled && longPage);
    };

    check();
    window.addEventListener("scroll", check, opts);
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check, opts);
      window.removeEventListener("resize", check);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={goTop}
      className="d-inline-flex align-items-center justify-content-center"
      style={{
        position: "fixed",
        right: 16,
        bottom: 64,
        width: 40,
        height: 40,
        borderRadius: "8px", // rounded corners instead of circular
        background: "linear-gradient(135deg,#015CFF, #FFD700, #0e3784ff)", // gold to blue gradient
        color: "#1F2937", // darker color for the arrow
        border: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        zIndex: 1050,
        transition: "opacity .18s ease, transform .18s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
        style={{ color: "#1F2937" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5h14M12 5v14M8 9l4-4 4 4"
        />
      </svg>
    </button>
  );
}
