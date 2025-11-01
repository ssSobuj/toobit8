import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

import AuthTop from "../extra/authTopPart";
import SupportLink from "../extra/supportLink";
import CustomLoader from "../extra/customLoader";

function EmailVerify() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReminder, setShowReminder] = useState(true); // ⬅️ red reminder toggle

  // Hide red reminder after 10s
  useEffect(() => {
    const timer = setTimeout(() => setShowReminder(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Extract ?code=... from either hash routes (#/verify?code=123456) or normal routes (?code=123456)
  useEffect(() => {
    const parseCode = () => {
      const hash = window.location.hash || "";
      const hashQuery = hash.includes("?") ? hash.split("?")[1] : "";
      const fromHash = new URLSearchParams(hashQuery).get("code");

      const fromSearch = new URLSearchParams(window.location.search).get("code");

      const found = fromHash || fromSearch;
      if (found) setCode(found);
    };
    parseCode();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("verificationToken");
    if (!token) {
      enqueueSnackbar("Verification token not found. Please register again.", { variant: "warning" });
      return;
    }

    if (!code || String(code).trim().length < 6) {
      enqueueSnackbar("Please enter a valid verification code.", { variant: "warning" });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/verify-email", { token, code });
      const data = res?.data || {};

      if (data.success) {
        localStorage.removeItem("verificationToken");
        enqueueSnackbar("Email verified successfully!", { variant: "success" });

        const authToken = data?.data?.token;
        if (authToken) {
          localStorage.setItem("token", authToken);
          axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
        }

        setTimeout(() => navigate("/home"), 1200);
      } else {
        enqueueSnackbar(data.message || "Verification failed.", { variant: "error" });
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Verification failed. Try again.", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="app" className="a-t-30 no-1">
      <div className="login">
        <div className=":uno: container-login relative c-1">
          <AuthTop />
          {loading && <CustomLoader />}

          {/* header ends */}
          <div className="login-content">
            <div className=":uno: container-form w-full rd-1radius">
              <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4" style={{ fontSize: "24px", fontWeight: 600 }}>
                  {t("email_verification")}
                </h2>

                {/* 🔴 Red reminder (auto-hides after 10s) */}
                {showReminder && (
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "#ef4444",
                      color: "#fff",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      lineHeight: 1.4,
                    }}
                  >
                    {t("check_inbox_and_spam_html")}
                  </div>
                )}

                <div className="base-input is-text mt-0!">
                  <div className="input-box" style={{ borderRadius: "10px" }}>
                    <div className="input-left-slot"></div>
                    <input
                      type="text"
                      autoComplete="one-time-code"
                      placeholder={t("enter_your_verification_code")}
                      className="w-full"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                <div className="login-tools" style={{ marginTop: "30px" }}>
                  <button
                    className=":uno: base-main-btn flex items-center justify-center"
                    type="submit"
                    disabled={loading}
                  >
                    <div className="base-main-btn-content">
                      <span>{loading ? t("verifying") : t("verify_email")}</span>
                    </div>
                  </button>

                  <Link to="/home" className="w-full block text-center mt-16px">
                    {t("go_to_homepage")}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SupportLink />
    </div>
  );
}

export default EmailVerify;
