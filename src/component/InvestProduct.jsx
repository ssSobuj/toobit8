import { useEffect, useState } from "react";
import ExtraHeader from "./extra/ExtraHeader";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./extra/Alert";
import SingleHeader from "./extra/SingleHeader";

import ErrorAlert from "./extra/ErrorAlert";
import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";

const InvestProduct = () => {
  const [data, setData] = useState();
  const [inputValue, setInputValue] = useState(1);
  const [slug, setSlug] = useState(null);
  const navigate = useNavigate();
  const [dailyInterest, setdailyInterest] = useState(0);

  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const handleIncrement = () => {
    setInputValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setInputValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  };

  //   modal handle
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  //   confirm loader
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const handleConfirm = async () => {
    const { t } = i18n; // not used here, but kept to mirror original imports
    setIsConfirmLoading(true);
    setIsModalVisible(false);

    // Prepare the payload
    const payload = {
      slug,
      prevalue: inputValue,
    };

    try {
      // Make the POST request using axios
      const response = await axios.post("api/invest/submit", payload);

      setErrorAlert(true);
      setMessage(response.data.message);

      if (response.data.status === true) {
        // Log and handle the response
        setTimeout(() => {
          setIsConfirm(true);
          setIsConfirmLoading(false);
          // After an additional 1 second, reset isConfirm
          setTimeout(() => {
            setIsConfirm(false);
            navigate("/invest/records");
          }, 1000);
        }, 3000);
      } else {
        setIsConfirmLoading(false);
        setTimeout(() => {
          setErrorAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setTimeout(() => {}, 1000);
    }
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Parse slug from hash route (e.g., #/invest-product/my-product)
        const hashPath = window.location.hash || "";
        const slugMatch = hashPath.match(/\/invest-product\/([^/?#]+)/);

        if (!slugMatch || !slugMatch[1]) {
          console.error("No product slug found in URL.");
          return;
        }

        const productSlug = slugMatch[1];
        const response = await axios.get(`api/product/${productSlug}`);
        setData(response.data);
        setSlug(productSlug);

        // Prefer product.daily_interest; fall back to response.dailyInterest or 0
        const di =
          response?.data?.product?.daily_interest ??
          response?.data?.dailyInterest ??
          0;
        setdailyInterest(Number(di) || 0);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // ------ Derived numbers for estimate ------
  const unitPrice = Number(data?.product?.starting_amount ?? 0);
  const qty = Number(inputValue ?? 0);
  const cycleDays = Number(data?.product?.cycle ?? 0);
  const ratePct = Number(dailyInterest ?? 0); // e.g., 2.5 means 2.5%
  const rate = ratePct / 100;

  const principalTotal = +(unitPrice * qty).toFixed(2);
  const estimatedRevenue = +(principalTotal * rate * cycleDays).toFixed(2);
  const totalPrincipalAndInterest = +(principalTotal + estimatedRevenue).toFixed(2);
  // ------------------------------------------

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider">
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          {errorAlert && <ErrorAlert errorTxt={message} />}
          <CustomLoader />
          {isLoader && <Loader />}

          <SingleHeader pageName={t("smart_investment")}></SingleHeader>
          <div data-v-db0879f4="" className="product_purchase p-$mg">
            <div
              data-v-db0879f4=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
            >
              <h3
                data-v-db0879f4=""
                className="base-section-title mb-10px mb-10px"
              >
                {data?.product?.title || t("product")}
              </h3>

              <div data-v-db0879f4="" className="cell-item">
                <span data-v-db0879f4="" className="title">
                  {t("available_balance")}
                </span>
                <span data-v-db0879f4="">
                  {data?.promotional_balance} USDT
                </span>
              </div>

              <div data-v-db0879f4="" className="cell-item">
                <span data-v-db0879f4="" className="title">
                  {t("price")}
                </span>
                <span data-v-db0879f4="">
                  {data?.product?.starting_amount} USDT
                </span>
              </div>

              <div data-v-db0879f4="" className="cell-item">
                <span data-v-db0879f4="" className="title">
                  {t("limit_quantity")}
                </span>
                <span data-v-db0879f4="">{t("not_limited")}</span>
              </div>

              <div data-v-db0879f4="" className="cell-item">
                <span data-v-db0879f4="" className="title">
                  {t("purchase_quantity")}
                </span>
                <span data-v-db0879f4>
                  <div data-v-db0879f4 role="group" className="van-stepper">
                    <button
                      type="button"
                      className={`van-stepper__minus ${
                        inputValue > 1 ? "" : "van-stepper__minus--disabled"
                      }`}
                      aria-disabled={inputValue <= 1}
                      onClick={handleDecrement}
                    />
                    <input
                      type="tel"
                      role="spinbutton"
                      className="van-stepper__input"
                      value={inputValue}
                      inputMode="numeric"
                      onChange={(e) =>
                        setInputValue(Math.max(1, Number(e.target.value) || 1))
                      }
                    />
                    <button
                      type="button"
                      className="van-stepper__plus van-haptics-feedback"
                      onClick={handleIncrement}
                    />
                  </div>
                </span>
              </div>

              <div data-v-db0879f4="" className="cell-item">
                <span data-v-db0879f4="" className="title">
                  {t("cycle")}
                </span>
                <span data-v-db0879f4="">
                  {data?.product?.cycle} {t("day")}
                </span>
              </div>

              <div data-v-db0879f4="" className="cell-item">
                <span data-v-db0879f4="" className="title">
                  {t("daily_interest_rate")}
                </span>
                <span data-v-db0879f4="">
                  {data?.product?.daily_interest}-{data?.product?.interest_to}%
                </span>
              </div>
            </div>

            {/* ends */}
            <a
              data-v-db0879f4
              onClick={toggleModal}
              className=":uno: base-main-btn flex items-center justify-center my-15px! w-full!"
            >
              <div className="base-main-btn-content">
                {data?.product?.starting_amount} USDT {t("invest")}
              </div>
            </a>
            {/* ends */}

            <div
              data-v-db0879f4
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
            >
              <div data-v-db0879f4="" className="cell-title">
                {t("project_rule")}
              </div>

              <div data-v-db0879f4="" className="cell-item">
                <span data-v-db0879f4 className="title">
                  {t("repayment")}
                </span>
                <span data-v-db0879f4>{t("maturity_principal_interest")}</span>
              </div>

              <div data-v-db0879f4 className="cell-item">
                <span data-v-db0879f4 className="title">
                  {t("unit_price")}
                </span>
                <span data-v-db0879f4>
                  {data?.product?.starting_amount} USDT
                </span>
              </div>

              <div data-v-db0879f4 className="cell-item">
                <span data-v-db0879f4 className="title">
                  {t("amount")}
                </span>
                <span data-v-db0879f4>{inputValue}</span>
              </div>

              <div data-v-db0879f4 className="cell-item">
                <span data-v-db0879f4 className="title">
                  {t("daily_return")}
                </span>
                <span data-v-db0879f4>{ratePct}%</span>
              </div>

              <div data-v-db0879f4 className="cell-item">
                <span data-v-db0879f4 className="title">
                  {t("invest_cycle")}
                </span>
                <span data-v-db0879f4>{data?.product?.cycle}{t("day")}</span>
              </div>

              <div data-v-db0879f4 className="cell-item">
                <span data-v-db0879f4 className="title">
                  {t("estimated_revenue")}
                </span>
                <span>
                  {unitPrice} * {inputValue} * {ratePct}% * {cycleDays} {t("day")} ={" "}
                  {t("total_income")} {estimatedRevenue.toFixed(2)} USDT + {t("principal")}{" "}
                  {principalTotal.toFixed(2)} USDT = {t("total_principal_and_interest")}{" "}
                  {totalPrincipalAndInterest.toFixed(2)} USDT
                </span>
              </div>
            </div>
            {/* ends */}

            <div
              data-v-db0879f4=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
              mt-15px=""
            >
              <div data-v-db0879f4="" className="cell-title">
                {t("project_introduction")}
              </div>
              <div
                data-v-db0879f4=""
                className="rich-text text-base mt-20px"
                style={{ direction: "ltr" }}
              >
                {data?.product?.introduction}
              </div>
            </div>
            {/* ends */}
          </div>
        </div>
      </div>

      {/* popup */}
      <div
        id="logOutFadeBg"
        className={`van-overlay trsx ${isModalVisible ? "modal-open" : ""}`}
        style={{ zIndex: "2011" }}
      ></div>
      <div
        role="dialog"
        tabIndex={0}
        className="van-popup van-popup--center van-dialog"
        style={isModalVisible ? { zIndex: 2012 } : { display: "none" }}
      >
        <div className="van-dialog__content van-dialog__content--isolated">
          <div className="van-dialog__message">
            {t("balance_not_enough_recharge", { amount: 30 })}
          </div>
        </div>
        <div className="van-hairline--top van-dialog__footer">
          <button
            type="button"
            className="van-button van-button--default van-button--large van-dialog__cancel"
            onClick={toggleModal}
          >
            <div className="van-button__content">
              <span className="van-button__text">{t("cancel")}</span>
            </div>
          </button>
          <button
            type="button"
            className="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left"
            onClick={handleConfirm}
          >
            <div className="van-button__content">
              <span className="van-button__text">{t("confirm")}</span>
            </div>
          </button>
        </div>
      </div>
      {/* popup ends */}

      {isConfirmLoading && (
        <div
          role="dialog"
          tabIndex={0}
          className="van-popup van-popup--center van-toast van-toast--middle van-toast--loading"
          style={{ zIndex: 2003, display: "flex" }}
        >
          <div
            className="van-loading van-loading--spinner van-toast__loading"
            aria-live="polite"
            aria-busy="true"
          >
            <span className="van-loading__spinner van-loading__spinner--spinner">
              <i className="van-loading__line van-loading__line--1"></i>
              <i className="van-loading__line van-loading__line--2"></i>
              <i className="van-loading__line van-loading__line--3"></i>
              <i className="van-loading__line van-loading__line--4"></i>
              <i className="van-loading__line van-loading__line--5"></i>
              <i className="van-loading__line van-loading__line--6"></i>
              <i className="van-loading__line van-loading__line--7"></i>
              <i className="van-loading__line van-loading__line--8"></i>
              <i className="van-loading__line van-loading__line--9"></i>
              <i className="van-loading__line van-loading__line--10"></i>
              <i className="van-loading__line van-loading__line--11"></i>
              <i className="van-loading__line van-loading__line--12"></i>
            </span>
          </div>
        </div>
      )}
      {/* Loading ends */}

      <div
        id="copyAlert"
        className={`van-toast van-toast--middle van-toast--success ${
          isConfirm ? "d-block" : "d-none"
        }`}
        style={{ zIndex: "2057" }}
      >
        <i className="van-icon van-icon-success van-toast__icon"></i>
        <div className="van-toast__text">{t("ok")}</div>
      </div>
      {/* done alert ends */}

      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default InvestProduct;
