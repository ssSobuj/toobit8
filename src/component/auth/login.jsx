import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/style2.css";
import "../../assets/css/style3.css";
import "../../assets/css/style4.css";
import "../../assets/css/style5.css";
import "../../assets/css/style6.css";
import "../../assets/css/style7.css";
import "../../assets/css/style8.css";
import "../../assets/css/style9.css";
import "../../assets/css/style10.css";
import "../../assets/css/style11.css";
import "../../assets/css/checkbox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AuthTop from "../extra/authTopPart";
import SupportLink from "../extra/supportLink";
import ErrorAlert from "../extra/ErrorAlert";
import CustomLoader from "../extra/customLoader";
import Loader from "../extra/loader";

function App() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    account: "",
    password: "",
  });

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoader(true);

    const formData = { account, password };

    try {
      const response = await axios.post("api/login", formData);

      if (response.data.errors) {
        setErrors({
          account: response.data.errors.account,
          password: response.data.errors.password,
        });
      }

      if (response.data.message === "Unauthorised") {
        enqueueSnackbar("These credentials do not match our records.", {
          variant: "error",
        });
      }

      if (response.data && response.data.data && response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data.token}`;
        navigate("/home");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      enqueueSnackbar(`An error occurred: ${error.message}`, {
        variant: "error",
      });
    } finally {
      setIsLoader(false);
    }
  };

  // password eye
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div id="app" className="a-t-30 no-1">
      {/* checkbox + consent styles to match the screenshot */}
      <style>{`
        .consent-wrap {
          background: rgba(255, 204, 0, 0.10);
          border: 1px solid rgba(255, 204, 0, 0.55);
        }
        .round-check {
          appearance: none;
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          border: none;
          margin-top: 2px;
          display: inline-grid;
          place-content: center;
          background: #F5C542; /* warm yellow like screenshot */
          box-shadow: inset 0 0 0 2px rgba(0,0,0,0.15);
          position: relative;
        }
        /* tick mark */
        .round-check::after {
          content: "";
          width: 7px;
          height: 12px;
          border-right: 2px solid #1a1a1a;
          border-bottom: 2px solid #1a1a1a;
          transform: rotate(45deg);
          position: absolute;
          top: 1px;
        }
        /* text tone similar to screenshot */
        .consent-text {
          color: rgba(255,255,255,0.85);
        }
        .consent-text a {
          color: #ffffff;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      `}</style>

      <div className="login">
        <div className=":uno: container-login relative c-1">
          <AuthTop />

          {errorAlert && <ErrorAlert errorTxt={message} />}
          <CustomLoader />
          {isLoader && <Loader />}

          {/* header ends */}
          <div className="login-content">
            <div className=":uno: container-form w-full rd-1radius">
              <form onSubmit={handleSubmit}>
                <div className="base-input is-text mt-0!">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder={t("account")}
                      className="w-full"
                      onChange={(e) => setAccount(e.target.value)}
                    />
                    <div className="input-right-slot"></div>
                  </div>
                  <div
                    id="accountError"
                    className="van-field__error-message"
                    style={{ display: errors.account ? "block" : "none" }}
                  >
                    {errors.account}
                  </div>
                </div>

                <div className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="off"
                      name="password"
                      placeholder={t("login_password")}
                      className="w-full"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div
                        className="input-pwd-eye"
                        onClick={togglePasswordVisibility}
                      >
                        <div
                          className={
                            showPassword
                              ? "i-mdi-eye-outline"
                              : "i-mdi-eye-off-outline"
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                  <div
                    id="loginPasswordError"
                    className="van-field__error-message"
                    style={{ display: errors.password ? "block" : "none" }}
                  >
                    {errors.password}
                  </div>
                </div>

                <div className="login-tools" style={{ marginTop: "20px" }}>
                  <button
                    className=":uno: base-main-btn flex items-center justify-center"
                    type="submit"
                  >
                    <div className="base-main-btn-content">
                      <span>{t("login")}</span>
                    </div>
                  </button>

                  <div className="mt-20px cursor-pointer text-center text-sm">
                    <span className="text-$text-gray6">{t("no_account")}</span>
                    <span className="ml-5px text-$primary">
                      <Link to="/register">{t("register")}</Link>
                    </span>
                  </div>

                  {/* Consent block */}
                  <div className="consent mt-3">
                    {/* Always-checked visual checkbox (not tied to submit) */}
                    <input
                      id="consent-tos"
                      type="checkbox"
                      className="consent__check"
                      defaultChecked
                      readOnly
                      aria-hidden="true"
                    />
                    <label htmlFor="consent-tos" className="consent__text">
                      By continuing with an account located in{" "}
                      <strong>United Kingdom</strong>, you agree to our{" "}
                      <Link to="/terms-of-use">Terms of Service</Link>.
                    </label>
                  </div>

                  {/* “Go to homepage” link intentionally removed per client */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CustomLoader />
      <SupportLink />
    </div>
  );
}

export default App;
