import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { useState } from "react";

import Alert from "./extra/Alert";
import SingleHeader from "./extra/SingleHeader";

import ErrorAlert from "./extra/ErrorAlert";
import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";

const ModifyPaymentPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [payment_password, setPaymentPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoader(true);
    try {
      const formData = {
        payment_password,
        new_password,
        confirm_password,
        type: "payment",
      };

      const response = await axios.post("api/password", formData);

      if (response.data.status === true) {
        setErrorAlert(true);
        setMessage(response.data.message);
        setTimeout(() => {
          setErrorAlert(false);
          window.location.reload();
        }, 2000);
      } else {
        setErrorAlert(true);
        setMessage(response.data.message);
        setTimeout(() => {
          setErrorAlert(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoader(false);
    }
  };

  const goBack = () => {
    navigate(-1);
  };
  const [showLogginPass, setShowLogginPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const handleLogginPass = () => setShowLogginPass(!showLogginPass);
  const handleNewPass = () => setShowNewPass(!showNewPass);
  const handleConfirmPass = () => setShowConfirmPass(!showConfirmPass);

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      {errorAlert && <ErrorAlert errorTxt={message} />}
      <CustomLoader />
      {isLoader && <Loader />}

      <div className="van-config-provider">
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          <SingleHeader pageName={t("modify_payment_password")} />

          <div data-v-76442317 data-v-f5703ed9="" className="change-pwd-wrap px-3">
            <div
              data-v-76442317=""
              className=":uno: container-form w-full rd-$radius"
            >
              <form data-v-76442317="" onSubmit={handleSubmit}>
                <div data-v-76442317="" className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      autoComplete="off"
                      placeholder={t("old_payment_password")}
                      className="w-full"
                      type={showLogginPass ? "text" : "password"}
                      name="payment_password"
                      onChange={(e) => setPaymentPassword(e.target.value)}
                    />
                    <div
                      className="input-pwd-eye-slot cursor-pointer"
                      onClick={handleLogginPass}
                    >
                      <div className="input-pwd-eye">
                        <div
                          className={
                            showLogginPass
                              ? "i-mdi-eye-off-outline"
                              : "i-mdi-eye-outline"
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                <div data-v-76442317="" className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      autoComplete="off"
                      placeholder={t("new_payment_password")}
                      className="w-full"
                      type={showNewPass ? "text" : "password"}
                      name=""
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <div
                      className="input-pwd-eye-slot cursor-pointer"
                      onClick={handleNewPass}
                    >
                      <div className="input-pwd-eye">
                        <div
                          className={
                            showNewPass
                              ? "i-mdi-eye-off-outline"
                              : "i-mdi-eye-outline"
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                <div data-v-76442317="" className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      autoComplete="off"
                      placeholder={t("confirm_password")}
                      className="w-full"
                      type={showConfirmPass ? "text" : "password"}
                      name=""
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div
                      className="input-pwd-eye-slot cursor-pointer"
                      onClick={handleConfirmPass}
                    >
                      <div className="input-pwd-eye">
                        <div
                          className={
                            showConfirmPass
                              ? "i-mdi-eye-off-outline"
                              : "i-mdi-eye-outline"
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                <a
                  data-v-76442317=""
                  className=":uno: base-main-btn flex items-center justify-center"
                >
                  <button type="submit" className="base-main-btn-content">
                    {t("confirm")}
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SupportLink />
    </div>
  );
};

export default ModifyPaymentPassword;
