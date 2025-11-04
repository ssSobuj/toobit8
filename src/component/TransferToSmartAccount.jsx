import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import CopyAddress from "./extra/copyAddress";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SingleHeader from "./extra/SingleHeader";

import logo from "../assets/images/logo.png";
import trc20_usdt_icon from "../assets/images/trc20_usdt_icon.png";
import erc20_usdt_icon from "../assets/images/erc20_usdt_icon.png";
import trx_icon from "../assets/images/trx_icon.png";
import bnb_icon from "../assets/images/bnb_icon.png";
import bep20_usdt_icon from "../assets/images/bep20_usdt_icon.png";

import ErrorAlert from "./extra/ErrorAlert";
import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";

const TransferToSmartAccount = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const qrCodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(
    data.address_base58
  )}&code=QRCode&eclevel=L`;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const method = queryParams.get("method");
  const [type, setType] = useState("basic");

  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };
  //   copy alert
  const [isCopy, setIsCopy] = useState(false);
  const handleCopyClick = () => {
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };
  const rechargeRecord = () => {
    navigate("/recharge-record");
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true); // Show loader during initial data fetch
      try {
        const response = await axios.get(`api/trxaddress?currency=${method}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    const fetchDeposit = async () => {
      setIsLoader(true);
      try {
        const params = {
          method: method,
          type: type,
        };
        const response = await axios.get("api/deposite-information", {
          params,
        });
        setErrorAlert(true);
        setMessage(response.data.message);

        setTimeout(() => {
          setErrorAlert(false);
          if (response.data.status === "success") {
            navigate("/me");
          }
          setIsLoader(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false); // Hide loader when the request is completed
      }
    };

    fetchDeposit();
  };

  const { t } = useTranslation();

  const [selectAccount, setSelectAccount] = useState("basic");
  const handleSelectAccount = (accountType) => {
    setSelectAccount(accountType);
    setType(accountType);
  };
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
          <SingleHeader pageName={t("recharge")}></SingleHeader>
          <div data-v-1a8f829d="" className="recharge-wrap p-$mg">
            <div
              data-v-1a8f829d=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
            >
              <div
                data-v-1a8f829d=""
                className=":uno: base-logo flex items-center small-logo"
              >
                <img
                  className="site-img h-full w-full rd-50%"
                  src={logo}
                  draggable="false"
                  alt="logo"
                />
                <div className=":uno: site-name ml-8px">TOOBIT</div>
              </div>
              {/* logo ends */}
              <div data-v-1a8f829d className="mt-20px">
                <div
                  data-v-1a8f829d
                  className="bg-yellow text-white text-sm p-10px rounded-$card-radius"
                >
                  {t("note_before_switching_accounts")}
                </div>

                <div
                  data-v-1a8f829d
                  className={`recharge-account ${
                    selectAccount === "basic" ? "active" : ""
                  }`}
                  onClick={() => handleSelectAccount("basic")}
                >
                  <div
                    data-v-1a8f829d
                    className={`w-24px h-24px mr-4px shrink-0 ${
                      selectAccount === "basic"
                        ? "i-material-symbols:check-circle"
                        : "i-ic:twotone-radio-button-unchecked"
                    }`}
                  ></div>
                  <div data-v-1a8f829d>
                    <div data-v-1a8f829d className="text-18px font-bold">
                      {t("flexible_account")}
                    </div>
                    <div
                      data-v-1a8f829d
                      className="mt-10px text-13px opacity-60"
                    >
                      {t("quant_account_desc")}
                    </div>
                  </div>
                </div>

                <div
                  data-v-1a8f829d
                  className={`recharge-account ${
                    selectAccount === "promotional" ? "active" : ""
                  }`}
                  onClick={() => handleSelectAccount("promotional")}
                >
                  <div
                    data-v-1a8f829d
                    className={`w-24px h-24px mr-4px shrink-0 ${
                      selectAccount === "promotional"
                        ? "i-material-symbols:check-circle"
                        : "i-ic:twotone-radio-button-unchecked"
                    }`}
                  ></div>
                  <div data-v-1a8f829d>
                    <div data-v-1a8f829d className="text-18px font-bold">
                      {t("investment_accounts")}
                    </div>
                    <div
                      data-v-1a8f829d
                      className="mt-10px text-13px opacity-60"
                    >
                      {t("investment_account_desc")}
                    </div>
                  </div>
                </div>
              </div>
              {/* ends section ends  */}
              <div
                data-v-1a8f829d
                className="flex items-center my-20px justify-center"
              >
                {(() => {
                  // Use type for both 'basic' and 'promotional' accounts
                  const effectiveType = type;
                  if (
                    method === "USDT" &&
                    (effectiveType === "basic" ||
                      effectiveType === "promotional")
                  ) {
                    return (
                      <>
                        <img
                          data-v-1a8f829d
                          className="w-30px h-30px"
                          src={trc20_usdt_icon}
                          alt="TRC20-USDT icon"
                        />
                        <span
                          data-v-1a8f829d
                          className="ml-4px font-bold c-$btn-text"
                        >
                          TRC20-USDT
                        </span>
                      </>
                    );
                  } else if (
                    method === "TRX" &&
                    (effectiveType === "basic" ||
                      effectiveType === "promotional")
                  ) {
                    return (
                      <>
                        <img
                          data-v-1a8f829d
                          className="w-30px h-30px"
                          src={trx_icon}
                          alt="TRX-USDT icon"
                        />
                        <span
                          data-v-1a8f829d
                          className="ml-4px font-bold c-$btn-text"
                        >
                          TRX-USDT
                        </span>
                      </>
                    );
                  } else if (
                    method === "BEP20" &&
                    (effectiveType === "basic" ||
                      effectiveType === "promotional")
                  ) {
                    return (
                      <>
                        <img
                          data-v-1a8f829d
                          className="w-30px h-30px"
                          src={bep20_usdt_icon}
                          alt="BEP20-USDT icon"
                        />
                        <span
                          data-v-1a8f829d
                          className="ml-4px font-bold c-$btn-text"
                        >
                          BEP20-USDT
                        </span>
                      </>
                    );
                  } else if (
                    method === "BNB" &&
                    (effectiveType === "basic" ||
                      effectiveType === "promotional")
                  ) {
                    return (
                      <>
                        <img
                          data-v-1a8f829d
                          className="w-30px h-30px"
                          src={bnb_icon}
                          alt="BNB-USDT icon"
                        />
                        <span
                          data-v-1a8f829d
                          className="ml-4px font-bold c-$btn-text"
                        >
                          BNB-USDT
                        </span>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <img
                          data-v-1a8f829d
                          className="w-30px h-30px"
                          src={trc20_usdt_icon}
                          alt="TRC20-USDT icon"
                        />
                        <span
                          data-v-1a8f829d
                          className="ml-4px font-bold c-$btn-text"
                        >
                          TRC20-USDT
                        </span>
                      </>
                    );
                  }
                })()}
              </div>
              {/* ends */}
              <div
                data-v-1a8f829d
                className=":uno: mt-25px flex justify-center"
              >
                <div
                  data-v-1a8f829d
                  className=":uno: h-164px w-164px flex items-center justify-center border rd-10px shadow-$box-shadow bg-white"
                >
                  <div
                    data-v-1a8f829d
                    className="qrcode"
                    title="TWeQc9iMobGQeL9FuycLJXxykGmrHZTrnt"
                  >
                    <img
                      alt="Scan me!"
                      src={qrCodeUrl}
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              </div>
              {/* ends */}
              <div
                data-v-1a8f829d=""
                className=":uno: my-$mg text-center text-18px font-bold"
              >
                {t("recharge_address")}
              </div>
              {/* ends */}
              <CopyAddress
                address={data.address_base58}
                handleCopyClick={handleCopyClick}
              />
              {/* ends */}
              <a
                data-v-1a8f829d
                className=":uno: base-main-btn flex items-center justify-center"
              >
                <div className="base-main-btn-content" onClick={handleClick}>
                  {/* Empty comment node */}
                  <span data-v-1a8f829d>{t("recharge_complete")}</span>
                </div>
              </a>
            </div>
            {/* ends container */}
            <div
              data-v-18049dad
              data-v-1a8f829d
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
              style={{ direction: "ltr" }}
            >
              {/* Empty comment nodes */}
              <div data-v-18049dad className="rich-text text-base">
                <p>
                  {t("deposit_instruction_1")} (
                  {method === "USDT" || method === "TRX" ? "TRC20" : "BEP20"}){" "}
                  {t("network_deposit")}
                </p>
                <p>
                  2.{" "}
                  {t("please_do_not_top_up_other_non_bnb_assets", {
                    method,
                  })}{" "}
                  &quot;
                  {t("submit_successfully")}&quot;!
                </p>
                <p>
                  3. {t("if_the_account_has_not_been_received_for_a_long_time")}{" "}
                  &quot;{t("submit_successfully")}&quot; {t("again")}.
                </p>
                {/* <p>4. Minimum deposit is 3 USDT.</p> */}
              </div>
            </div>
          </div>
          <CustomLoader />
          <SupportLink></SupportLink>

          <div
            role="dialog"
            tabindex="0"
            className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
            style={
              isCopy ? { zIndex: "2015", display: "flex" } : { display: "none" }
            }
          >
            <div class="van-toast__text">Copy Success</div>
          </div>
          {/* copy alert ends */}
        </div>
      </div>
    </div>
  );
};

export default TransferToSmartAccount;
