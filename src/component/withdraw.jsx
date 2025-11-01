import { Link, useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import Alert from "./extra/Alert";
import { useTranslation } from "react-i18next";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";

import ErrorAlert from "./extra/ErrorAlert";
import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";

const Withdraw = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({});
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [inputshow, setInputshow] = useState("");
  const [amount, setAmount] = useState(0);
  const [showAlertPopup, setShowAlertPopup] = useState(false);
  const [password, setPassword] = useState("");

  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const [withdrawAddress, setWithdrawAddress] = useState(false);
  const [statusWithdraw, setStatusWithdraw] = useState(false);
  const [depositamount, setDepositAmount] = useState(0);
  const [link, setLink] = useState("");

  const [selected, setSelected] = useState("BEP20-USDT");
  const options = ["BEP20-USDT"];
  // const options = ["BEP20-USDT", "TRC20-USDT", "TRC20-TRX"];
  const [vat, setVat] = useState(0); // kept for compatibility, not used in fee math now
  const [withdrawBalance, setWithdrawBalance] = useState(0);
  const [withdrawType, setWithdrawType] = useState("USDT");
  const [conversion, setConversion] = useState(0);
  const [usdbalance, setUsdbalance] = useState(0);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === "TRC20-USDT") {
      setVat(1);
    } else {
      setVat(0);
    }

    if (option === "BEP20-USDT") {
      setWithdrawType("USDT");
      setWithdrawBalance(usdbalance);
      setInputshow(address2);
    } else if (option === "TRC20-USDT") {
      setWithdrawType("USDT");
      setWithdrawBalance(usdbalance);
      setInputshow(address);
    } else if (option === "TRC20-TRX") {
      setWithdrawType("TRX");
      setWithdrawBalance(usdbalance / conversion);
      setInputshow(address);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true);
      try {
        const response = await axios.get("api/withdraw");
        setData(response.data);
        setAddress(response.data.user.crypto_address || "");
        setAddress2(response.data.user.crypto_address2 || "");
        setInputshow(response.data.user.crypto_address2);

        setStatusWithdraw(response.data.statusWithdraw);
        setWithdrawBalance(response.data.withdrawBal);
        setConversion(response.data.settingtrx.conversion);
        setUsdbalance(response.data.withdrawBal);

        setIsLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoader(false);
      }
    };

    fetchData();
  }, []);

  const handleCancel = () => {
    setShowAlertPopup(false);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);

    try {
      let type = "";

      if (selected === "BEP20-USDT") {
        type = "BEP20";
      } else if (selected === "TRC20-USDT") {
        type = "USDT";
      } else if (selected === "TRC20-TRX") {
        type = "TRX";
      }

      const formData = {
        amount,
        address: inputshow,
        password,
        type: type,
      };

      const response = await axios.post("api/withdraw", formData);
      setErrorAlert(true);
      if (response.data.status === "energy") {
        setShowAlertPopup(true);
        setDepositAmount(response.data.amount);
        setLink(response.data.link);
      } else {
        setMessage(response.data.message);
        setIsLoader(false);
        setTimeout(() => {
          setErrorAlert(false);
          if (response.data.status) {
            navigate("/home");
          }
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoader(false);
    }
  };

  const withdrawRecord = () => {
    navigate("/financial");
  };

  const { t } = useTranslation();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const handlePasswordShow = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  // ---------- Client's Withdrawal Fee Tiers ----------
  // 0–99   -> 9%
  // 100–499 -> 3%
  // 500–999 -> 0%
  // (≥500 is treated as 0% to match the client's requirement.)
  const getFeeRate = (amt) => {
    const a = Number(amt) || 0;
    if (a >= 0 && a < 100) return 0.09;
    if (a >= 100 && a < 500) return 0.03;
    if (a >= 500) return 0.0;
    return 0.0;
  };

  const numericAmount = useMemo(() => Number(amount) || 0, [amount]);
  const feeRate = useMemo(() => getFeeRate(numericAmount), [numericAmount]);
  const feeAmount = useMemo(() => +(numericAmount * feeRate).toFixed(2), [numericAmount, feeRate]);
  const receiptAmount = useMemo(
    () => Math.max(+(numericAmount - feeAmount).toFixed(2), 0),
    [numericAmount, feeAmount]
  );
  // ---------------------------------------------------

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

          <SingleHeader pageName={t('withdraw')}></SingleHeader>
          <div data-v-e14b897c="" className="withdraw-wrap p-$mg">
            <div
              data-v-e14b897c=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
            >
              <div data-v-e14b897c className=":uno: flex items-center">
                <div data-v-e14b897c className="shrink-0">
                  <div
                    data-v-e14b897c
                    className=":uno: text-left text-13px lh-20px c-red"
                  >
                    {t('twenty_four_hour_withdrawal')}
                  </div>
                </div>
                <a
                  data-v-e14b897c=""
                  className="ml-auto shrink-0 text-xl"
                  onClick={withdrawRecord}
                >
                  <div
                    data-v-e14b897c
                    className="i-material-symbols:receipt text-$primary"
                  ></div>
                </a>
              </div>
              {/* ends */}
              <div data-v-e14b897c className="number">
                <div data-v-e14b897c className="title">
                  {t('withdrawable')}
                </div>
                <div data-v-e14b897c className="num">
                  {(withdrawBalance || 0).toFixed(2)}{" "}
                  <span data-v-e14b897c>{withdrawType}</span>
                </div>
                <div data-v-e14b897c className="mt-$mg! flex! items-center">
                  <div data-v-e14b897c>{t('amount_to_be_processed')}</div>
                  <div data-v-e14b897c className="ml-10px text-amber">
                    {amount} USDT
                  </div>
                </div>
              </div>
              {/* ends */}
              <div data-v-e14b897c className="pay-type">
                <div data-v-e14b897c className="shrink-0">
                  {t('payment_method')}
                </div>
                <div
                  data-v-e14b897c
                  className="flex items-center flex-wrap mt-10px"
                >
                  {options.map((option) => (
                    <li
                      key={option}
                      data-v-e14b897c=""
                      className={`h-30px rd mr-10px mb-10px px-15px leading-30px inline-block border border-solid border-$text-gray text-$text-gray cursor-pointer ${
                        selected === option
                          ? "bg-$primary! border-$primary! text-white!"
                          : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </div>
              </div>
              {/* ends */}
              <form onSubmit={handleSubmit}>
                <div data-v-e14b897c className="base-input is-number">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder={t('withdrawal_limit_range')}
                      className="w-full"
                      name=""
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <div className="input-right-slot"></div>
                  </div>
                </div>
                {/* ends */}
                <div data-v-e14b897c className="base-input is-textarea">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <textarea
                      autoComplete="off"
                      className="w-full"
                      placeholder={t('withdrawal_address')}
                      onChange={(e) => setInputshow(e.target.value)}
                      value={inputshow ? inputshow : ""}
                    ></textarea>
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                {/* ends */}
                <div data-v-e14b897c className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      autoComplete="off"
                      placeholder={t('security_password')}
                      className="w-full"
                      type={isPasswordShow ? "text" : "password"}
                      name=""
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div
                        className="input-pwd-eye"
                        onClick={handlePasswordShow}
                      >
                        <div
                          className={
                            isPasswordShow
                              ? "i-mdi-eye-off-outline"
                              : "i-mdi-eye-outline"
                          }
                        ></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>
                {/* ends */}

                {/* Handling Fee (tiered) */}
                <div
                  data-v-e14b897c
                  className="mt-10px flex items-center justify-between"
                >
                  <span data-v-e14b897c className="text-sm text-$text-gray">
                    {t('handling_fee')}
                  </span>
                  <div
                    data-v-e14b897c
                    className="text-sm text-$text-gray text-right"
                  >
                    {(feeRate * 100).toFixed(0)}% ({feeAmount} {withdrawType})
                  </div>
                </div>

                {/* Receipt after fee */}
                <div
                  data-v-e14b897c
                  className="mt-10px flex items-center justify-between"
                >
                  <span data-v-e14b897c className="text-sm text-$text-gray">
                    {t('receipt')}
                  </span>
                  <div data-v-e14b897c className="text-sm text-green">
                    {receiptAmount} {withdrawType}
                  </div>
                </div>

                <button
                  data-v-e14b897c
                  type="submit"
                  className=":uno: base-main-btn flex items-center justify-center"
                >
                  <div className="base-main-btn-content">
                    <span data-v-e14b897c>{t('confirm')}</span>
                  </div>
                </button>
              </form>
              {/* ends */}
            </div>
            {/* ends */}
            <h3
              data-v-e14b897c=""
              className="base-section-title mt-40px mt-40px"
            >
              {t('withdrawal_note')}
            </h3>
            <div
              data-v-18049dad
              data-v-e14b897c
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4 shadow-$shadow! shadow-$shadow!"
              style={{ direction: "ltr" }}
            >
              <div data-v-18049dad className="rich-text text-base">
                <div>
                  <p className="break-words" dir="auto">
                    <strong>{t('withdrawal_policy_title')}</strong>
                  </p>
                  <ul
                    className="marker:text-secondary"
                    dir="auto"
                    style={{ listStyleType: "disc" }}
                  >
                    <li className="break-words">
                      <strong>• {t('minimum_withdrawal_amount')}:</strong> 7 USDT
                    </li>
                    <li className="break-words">
                      <strong>• {t('withdrawal_fee')}:</strong> <br />
                      <ul
                        className="marker:text-secondary"
                        dir="auto"
                        style={{ paddingLeft: "10px" }}
                      >
                        <li className="break-words" style={{ fontSize: "15px" }}>
                          <strong>• 0–99 USDT:</strong> 9%
                        </li>
                        <li className="break-words" style={{ fontSize: "15px" }}>
                          <strong>• 100–499 USDT:</strong> 3%
                        </li>
                        <li className="break-words" style={{ fontSize: "15px" }}>
                          <strong>• 500-9999 USDT:</strong> 0%
                        </li>
                      </ul>
                    </li>
                    <li className="break-words">
                      <strong>• {t('withdrawal_frequency')}:</strong> {t('withdrawal_frequency_desc')}
                    </li>
                    <li className="break-words">
                      <strong>• {t('processing_time')}:</strong> {t('processing_time_desc')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ends note  */}
          </div>
        </div>
      </div>

      {showAlertPopup && <div className="van-overlay"></div>}
      {showAlertPopup && (
        <div
          id="homeModal"
          className={`notice-model van-dialog trsx modal-open`}
          style={{ zIndex: "2009", width: "75%" }}
        >
          <div
            className="van-dialog__header withdraw_header"
            style={{
              fontSize: "16px",
              textAlign: "center",
              fontWeight: "500",
              color: "#fff",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            {t("mining_machine_energy_failure", { amount: depositamount })}!
          </div>
          <div className="van-dialog__content">
            <div
              className="content-holder"
              style={{ padding: "10px", height: "150px", overflowY: "scroll" }}
            >
              <p style={{ fontSize: "14px" }}>{t("dear_user")}</p>
              <p style={{ color: "red", fontSize: "14px" }}>
                {t("note_to_avoid")}
              </p>
            </div>

            <div
              className="notice-model-btns"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(1,1fr)",
                height: "auto",
                gap: "10px",
                padding: "15px 20px",
              }}
            >
              <Link
                to="/deposit"
                className={`btn`}
                style={{ background: "#ddbb40" }}
              >
                {t("go_to_recharge")}
              </Link>
              <button
                type="button"
                className="btn"
                style={{ background: "#ddbb40" }}
              >
                {t("telegram_customer_service")}
              </button>
              <button
                className={`btn`}
                id="homeModalNest"
                style={{ color: "#000", background: "#bebebe" }}
                onClick={handleCancel}
              >
                {t("cancel")}
              </button>
            </div>
          </div>
          <div className="van-hairline--top van-dialog__footer"></div>
        </div>
      )}

      <CustomLoader />

      <SupportLink></SupportLink>
    </div>
  );
};

export default Withdraw;
