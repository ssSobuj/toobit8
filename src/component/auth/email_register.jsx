// src/component/auth/Register.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

// fontawesome (kept as in original page)

import AuthTop from "../extra/authTopPart";

import { useTranslation } from "react-i18next";
// all css
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/css/style2.css";
import "../../assets/css/style3.css";
import "../../assets/css/style4.css";
import "../../assets/css/style5.css";
import "../../assets/css/style6.css";
import "../../assets/css/style7.css";
import "../../assets/css/style8.css";
import "../../assets/css/style9.css";

import CustomLoader from "../extra/customLoader";
import SupportLink from "../extra/supportLink";
import { useParams } from "react-router-dom";
import RegisterHeader from "../extra/RegisterHeader";
import TelNumberPopup from "./TelNumberPopup";
import { useSearchParams } from "react-router-dom";

function App() {
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("");
  const [invitation_code, setInvitationcode] = useState("");
  const [mobile_number, setMobilenumber] = useState("");
  const [errors, setErrors] = useState({
    account: "",
    email: "",
    password: "",
    security: "",
    mobile_number: "",
    invitation_code: "",
    vcode: "",
  });
  const [vcode, setVcode] = useState("");
  const [code, setCode] = useState("");

  const { t, i18n } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation(); // useLocation hook to access the URL
  const { ic } = useParams();
  const canvasRef = useRef(null);
  const [searchParams] = useSearchParams();
  const ref = searchParams.get("ref");

  const [isLoader, setIsLoader] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLockRef = useRef(false); // hard lock unaffected by re-renders

  useEffect(() => {
    if (ref && !isNaN(ref)) {
      localStorage.setItem("invitation_code", ref);
      setInvitationcode(ref); // Update state if needed
      navigate("/register"); // Clean URL by removing `ref` param
    } else {
      const storedRef = localStorage.getItem("invitation_code");
      if (storedRef) {
        setInvitationcode(storedRef);
      }
    }

    generateImage();
    setIsLoader(false);
  }, [ref]); // ref changes based on URL

  const validateBeforeSubmit = () => {
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // HARD LOCK: stop if a submit is already in progress
    if (submitLockRef.current) {
      enqueueSnackbar(
        t("request_already_processing") || "Your request is already being processed",
        { variant: "info" }
      );
      return;
    }

    if (!validateBeforeSubmit()) return;

    submitLockRef.current = true;
    setIsSubmitting(true);
    setIsLoader(true);

    const formData = {
      account,
      email,
      password,
      security,
      mobile_number,
      invitation_code,
      vcode,
      code,
    };

    try {
      const response = await axios.post("api/register", formData);

      if (response.data?.errors) {
        setErrors({
          account: response.data.errors.account,
          email: response.data.errors.email,
          password: response.data.errors.password,
          security: response.data.errors.security,
          mobile_number: response.data.errors.mobile_number,
          invitation_code: response.data.errors.invitation_code,
          vcode: response.data.errors.vcode,
        });
      }

      if (response.data?.message === "Unauthorised") {
        enqueueSnackbar(t("credential_not_match") || "This credential do not match", {
          variant: "error",
        });
      }

      const authToken = response.data?.data?.token;
      if (authToken) {
        localStorage.setItem("token", authToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
        navigate("/home");
      }

      if (response?.data?.verification) {
        const verificationToken = response?.data?.token;
        localStorage.setItem("verificationToken", verificationToken);
        navigate("/email-verify");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      enqueueSnackbar(`An error occurred: ${error.message}`, {
        variant: "error",
      });
    } finally {
      setIsLoader(false);
      setIsSubmitting(false);
      submitLockRef.current = false; // RELEASE LOCK
    }
  };

  // password eye
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prev) => !prev);
  };
  // checkbox
  const [checked, setChecked] = useState(true);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  const [selectedCode, setSelectedCode] = useState("+1");

  const handleCountrySelect = (code) => {
    setSelectedCode(code);
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleTelView = () => {
    setIsOpen(!isOpen);
  };

  const generateImage = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate 4-digit random code
    setCode(randomCode);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set exact canvas dimensions
    canvas.width = 100; // Increase width slightly for better spacing
    canvas.height = 40; // Increase height to match number proportions

    // Draw background with noise
    ctx.fillStyle = "#d3d3d3"; // Light gray background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add noise to the background
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.15})`; // Black dots with light opacity
      ctx.fillRect(x, y, 1, 1);
    }

    // Add text with increased height and spacing
    ctx.font = "bold 38px 'Arial'"; // Increase font size for taller numbers
    ctx.fillStyle = "#555"; // Dark gray text color
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Add a slight blur effect
    ctx.shadowColor = "rgba(74, 68, 68, 0.3)";
    ctx.shadowBlur = 2;

    // Adjust spacing for numbers
    const startX = 18; // Starting X position
    const spacing = 22; // Space between each number

    // Adjust the vertical position by a slight offset to move it closer to the middle
    const verticalOffset = 2;

    for (let i = 0; i < randomCode.length; i++) {
      const char = randomCode[i];
      ctx.fillText(
        char,
        startX + i * spacing,
        canvas.height / 2 + verticalOffset
      );
    }

    // Clear shadow to prevent affecting other elements
    ctx.shadowColor = "transparent";
  };

  return (
    <div id="app" className="a-t-30 no-1">
      {isLoader ? <CustomLoader /> : null}
      <div className="register">
        <div className=":uno: container-login relative c-1">
          <AuthTop></AuthTop>
          {/* header ends */}
          <div className="login-content">
            <div className=":uno: container-form w-full rd-1radius">
              <form onSubmit={handleSubmit}>
                <fieldset
                  disabled={isSubmitting}
                  style={{ border: "none", padding: 0, margin: 0 }}
                >
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

                  <div className="base-input is-text">
                    <div className="input-box">
                      <div className="input-left-slot">
                        <div className="flex items-center">
                          <div data-v-c7a345ea="" className="ml-0!">
                            <div data-v-c7a345ea="" onClick={handleTelView}>
                              <span className="input-phone-select">
                                {selectedCode}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="text"
                        autoComplete="off"
                        placeholder={t("Area_code_plus_mobile_number")}
                        className="w-full"
                        onChange={(e) => setMobilenumber(e.target.value)}
                      />
                      <div className="input-right-slot"></div>
                    </div>
                    <div
                      id="accountError"
                      className="van-field__error-message"
                      style={{
                        display: errors.mobile_number ? "block" : "none",
                      }}
                    >
                      {errors.mobile_number}
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
                      style={{
                        display: errors.password ? "block" : "none",
                      }}
                    >
                      {errors.password}
                    </div>
                  </div>

                  <div className="base-input is-password">
                    <div className="input-box">
                      <div className="input-left-slot"></div>
                      <input
                        type={showPassword2 ? "text" : "password"}
                        autoComplete="off"
                        name="password"
                        placeholder={t("security_password")}
                        className="w-full"
                        onChange={(e) => setSecurity(e.target.value)}
                      />
                      <div className="input-pwd-eye-slot cursor-pointer">
                        <div
                          className="input-pwd-eye"
                          onClick={togglePasswordVisibility2}
                        >
                          <div
                            className={
                              showPassword2
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
                      style={{
                        display: errors.security ? "block" : "none",
                      }}
                    >
                      {errors.security}
                    </div>
                  </div>

                  <div className="base-input is-text">
                    <div className="input-box">
                      <div className="input-left-slot"></div>
                      <input
                        type="text"
                        value={invitation_code}
                        autoComplete="off"
                        placeholder={t("recommendation_code")}
                        className="w-full"
                        onChange={(e) => setInvitationcode(e.target.value)}
                        name="invitation_code"
                      />
                      <div className="input-right-slot"></div>
                    </div>
                    <div
                      id="accountError"
                      className="van-field__error-message"
                      style={{
                        display: errors.invitation_code ? "block" : "none",
                      }}
                    >
                      {errors.invitation_code}
                    </div>
                  </div>

                  <div className="mt-20px w-full flex flex-wrap cursor-pointer items-center justify-center text-sm">


                  </div>

                  <div className="login-tools" style={{ marginTop: "30px" }}>
                    <button
                      className=":uno: base-main-btn flex items-center justify-center"
                      type="submit"
                      disabled={isSubmitting || !checked}
                      aria-disabled={isSubmitting || !checked}
                      aria-busy={isSubmitting}
                      style={{ opacity: isSubmitting || !checked ? 0.7 : 1 }}
                    >
                      <div className="base-main-btn-content">
                        <span>
                          {isSubmitting ? t("processing") : t("register")}
                        </span>
                      </div>
                    </button>

                    <div className="mt-20px cursor-pointer text-center text-sm">
                      <span className="text-$text-gray6">
                        {t("already_have_an_account")}
                      </span>
                      <span className="ml-5px text-$primary">
                        <Link to="/">{t("login")}</Link>
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

                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <TelNumberPopup
        handleTelView={handleTelView}
        isOpen={isOpen}
        handleCountrySelect={handleCountrySelect}
        selectedCode={selectedCode}
      />

      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
}

export default App;
