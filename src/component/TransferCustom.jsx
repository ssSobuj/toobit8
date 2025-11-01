import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import tranfertosmartacc_qrcode from "../assets/images/tranfertosmartacc_qrcode.png";

import CopyAddress from "./extra/copyAddress";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/loader";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useLocation } from "react-router-dom";

const TransferCustom = () => {
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(true);
  const [data, setData] = useState({});
  const qrCodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(
    data?.depcur?.qrcode
  )}&code=QRCode&eclevel=L`;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const method = queryParams.get("method");
  const type = queryParams.get("type");
  const id = queryParams.get("id");

  const [successVisible, setSuccessVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
        const params = {
          id: id,
        };
        const response = await axios.get("api/deposit/currency", {
          params,
        });
        setData(response.data);
        // console.log(response?.data?.depcur?.qrcode)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const handleClick2 = () => {
    setIsLoader(true);

    setSuccessMessage("Success~");
    setSuccessVisible(true);

    setTimeout(() => {
      setSuccessVisible(false);
      navigate("/me");
      setIsLoader(false);
    }, 2000);
  };
  const { t } = useTranslation();
  return (
    <div id="app">
      <div className="layout-container page-recharge-public">
        <header className="layout-header">
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left" onClick={goBack}>
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
              </div>
              <div className="van-nav-bar__title van-ellipsis">
                {t("transfer_to_smart_account", {
                  type: type.charAt(0).toUpperCase() + type.slice(1),
                })}
              </div>
              <div className="van-nav-bar__right" onClick={rechargeRecord}>
                <span className="van-nav-bar__text">{t("records")}</span>
              </div>
            </div>
          </div>
        </header>
        {isLoader ? <CustomLoader /> : null}
        {isCopy && (
          <div
            id="copyAlert"
            className="van-toast van-toast--middle van-toast--success"
            style={{ zIndex: "2057" }}
          >
            <i className="van-icon van-icon-success van-toast__icon"></i>
            <div className="van-toast__text">{t("copy_successfully")}</div>
          </div>
        )}
        {successVisible && (
          <div
            id="copyAlert"
            className="van-toast van-toast--middle van-toast--success"
            style={{ zIndex: "2057" }}
          >
            <i className="van-icon van-icon-success van-toast__icon"></i>
            <div className="van-toast__text">{successMessage}</div>
          </div>
        )}
        {/* Header ends */}
        <main className="layout-body">
          <div className="layout-main">
            <div className="form-wrap">
              <div className="qrcode-wrap">
                <div className="payment-qrcode">
                  <div className="qrcode-bg">
                    <img
                      className="qrcode"
                      src={qrCodeUrl}
                      style={{ display: "inline-block" }}
                    />
                  </div>
                </div>
                <p className="address-label">{t("address")}</p>
              </div>
              <div className="address-wrap">
                <CopyAddress
                  address={data?.depcur?.address}
                  handleCopyClick={handleCopyClick}
                />

                <div className="foot">
                  <p style={{ marginTop: "0.9rem" }}>
                    {t("please_do_not_top_up_other_non_bnb_assets", {
                      method: data?.depcur?.non,
                    })}{" "}
                    &quot;{t("submit_successfully")}&quot;!
                  </p>
                  <p className="text-danger">
                    {t("if_the_account_has_not_been_received_for_a_long_time")}{" "}
                    &quot;{t("submit_successfully")}&quot; {t("again")}.
                  </p>
                </div>
              </div>
              <div className="btn-wrap">
                <button
                  type="button"
                  className="van-button van-button--primary van-button--normal van-button--block van-button--round"
                  onClick={handleClick2}
                >
                  <div className="van-button__content">
                    <span className="van-button__text">
                      {t("submit_successfully")}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <SupportLink></SupportLink>
    </div>
  );
};

export default TransferCustom;
