import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";

import axios from "axios";
import Alert from "./extra/Alert";
import { useEffect, useState } from "react";

const DigitalCurrencyWallet = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const [wallet, setWallet] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [errors, setErrors] = useState({
    wallet: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true);
      try {
        const response = await axios.get("api/withdraw");
        setData(response.data);
        setIsLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoader(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoader(true);
    try {
      // Prepare the data to send
      const formData = {
        wallet,
        password,
        confirm_password,
      };

      console.log(formData);
      const response = await axios.post("api/address", formData);
      if (response.data.errors) {
        setErrors({
          wallet: response.data.errors.wallet,
          password: response.data.errors.password,
          confirm_password: response.data.errors.confirm_password,
        });
      }

      setIsLoader(false);
      if (response.data.alert) {
        setErrorAlert(true);
        setErrorMessage(response.data.alert);
        setTimeout(() => {
          setErrorAlert(false);
        }, 2000);
      }
      if (response.data.success) {
        setSuccessAlert(true);
        setSuccessMessage(response.data.success);
        setTimeout(() => {
          setSuccessAlert(false);
          navigate("/withdraw");
        }, 2000);
      }
    } catch (error) {
      setTimeout(() => {
        setErrorAlert(false);
        setSuccessAlert(false);
        setIsLoader(false);
      }, 2000);
    } finally {
      setTimeout(() => {
        setErrorAlert(false);
        setSuccessAlert(false);
        setIsLoader(false);
      }, 2000);
    }
  };

  const goBack = () => {
    navigate(-1);
  };
  const { t } = useTranslation();
  return (
    <div id="app">
      <div className="layout-container page-bank">
        <header className="layout-header">
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left" onClick={goBack}>
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
                <span className="van-nav-bar__text">
                  {t("add_digital_currency_wallet")}
                </span>
              </div>
              <div className="van-nav-bar__title van-ellipsis"></div>
            </div>
          </div>
        </header>
        {isLoader ? <CustomLoader /> : null}
        <Alert
          errorAlert={errorAlert}
          errorMessage={errorMessage}
          successAlert={successAlert}
          successMessage={successMessage}
        />
        <main className="layout-body" style={{paddingTop:"0px"}}>
          <div className="layout-main">
            <form className="form-field-wrap van-form" onSubmit={handleSubmit}>
              <div className="form-field van-cell van-field">
                <div className="van-cell__title van-field__label">
                  <span>{t("address_type")}</span>
                </div>
                <div className="van-cell__value van-field__value">
                  <div className="van-field__body">
                    <div className="van-field__control van-field__control--custom">
                      <div
                        role="radiogroup"
                        className="van-radio-group van-radio-group--horizontal"
                      >
                        <div
                          role="radio"
                          aria-checked="true"
                          className="van-radio van-radio--horizontal"
                        >
                          <div className="van-radio__icon van-radio__icon--round van-radio__icon--checked">
                            <i
                              className="van-icon van-icon-success"
                              style={{
                                borderColor: "rgb(236 193 167)",
                                backgroundColor: "rgb(236 193 167)",
                              }}
                            ></i>
                          </div>
                          <span className="van-radio__label">USDT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-field input-wallet-address van-cell van-field">
                <div className="van-cell__title van-field__label">
                  <span>{t("wallet_address")}</span>
                </div>
                <div className="van-cell__value van-field__value">
                  <div className="van-field__body">
                    <textarea
                      rows="5"
                      name="wallet"
                      placeholder={t("please_enter")}
                      className="van-field__control"
                      onChange={(e) => setWallet(e.target.value)}
                    ></textarea>
                  </div>
                  <div
                    id="walletError"
                    className="van-field__error-message text-white"
                    style={{
                      display: errors.wallet ? "block" : "none",
                    }}
                  >
                    {errors.wallet}
                  </div>
                </div>
              </div>
              <div className="form-field input-wallet-helper van-cell van-field">
                <div className="van-cell__title van-field__label">
                  <span>{t("wallet_address")}</span>
                </div>
                <div className="van-cell__value van-field__value">
                  <div className="van-field__body">
                    <div className="van-field__control van-field__control--custom">
                      <div>
                        {t("start_with")} <span className="text-danger">T</span>
                        ,<span className="text-danger">34</span>-
                        {t("digit_wallet_address")}!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="form-cell-title form-cell-divide">
                {t("set_payment_password")}
              </p>
              <div className="form-field van-cell van-field">
                <div className="van-cell__title van-field__label">
                  <span>{t("password")}</span>
                </div>
                <div className="van-cell__value van-field__value">
                  <div className="van-field__body">
                    <input
                      type="password"
                      name="password"
                      placeholder={t("password")}
                      className="van-field__control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div
                    id="passwordError"
                    className="van-field__error-message text-white"
                    style={{
                      display: errors.password ? "block" : "none",
                    }}
                  >
                    {errors.password}
                  </div>
                </div>
              </div>
              <div className="form-field van-cell van-field">
                <div className="van-cell__title van-field__label">
                  <span>{t("Confirm")}</span>
                </div>
                <div className="van-cell__value van-field__value">
                  <div className="van-field__body">
                    <input
                      type="password"
                      name="confirm_password"
                      placeholder={t("password")}
                      className="van-field__control"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div
                    id="confirmPasswordError"
                    className="van-field__error-message text-white"
                    style={{
                      display: errors.confirm_password ? "block" : "none",
                    }}
                  >
                    {errors.confirm_password}
                  </div>
                </div>
              </div>
              <div className="form-btn-group">
                <button
                  type="submit"
                  className="van-button van-button--default van-button--normal van-button--block"
                  style={{ background: "#ddbb40" }}
                >
                  <div className="van-button__content">
                    <span
                      className="van-button__text"
                      style={{ color: "#282828" }}
                    >
                      {t("continue")}
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <SupportLink></SupportLink>
    </div>
  );
};

export default DigitalCurrencyWallet;
