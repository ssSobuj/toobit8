import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useState } from "react";

import SingleHeader from "./extra/SingleHeader";

import ErrorAlert from "./extra/ErrorAlert";
import CustomLoader from "./extra/customLoader";
import Loader from "./extra/loader";

const WalletFunds = () => {
  const { t } = useTranslation();
  const [data, setData] = useState();
  const [amount, setAmount] = useState("");

  const [errorAlert, setErrorAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/me`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);
    try {
      const formData = { amount };

      const response = await axios.post("api/transfer", formData);

      setErrorAlert(true);
      setMessage(response.data.message);
      setTimeout(() => {
        setErrorAlert(false);
        if (response.data.status === true) {
          window.location.reload();
        }
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        setErrorAlert(false);
      }, 2000);
    } finally {
      setIsLoader(false);
    }
  };

  // kept for parity with original (not used)
  const [activeId, setActiveId] = useState(2);

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      {errorAlert && <ErrorAlert errorTxt={message} />}
      <CustomLoader />
      {isLoader && <Loader />}

      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          <SingleHeader pageName={t("wallet_found")} />
          <div data-v-8638f725="" className="transfer-wrap p-$mg">
            <div data-v-8638f725 className={`transfer-type active`}>
              <div
                data-v-8638f725
                className="transfer-type-item w-[calc((100%-30px)/2)] text-center"
              >
                <div data-v-8638f725 className="text-xs">
                  {t("profit_assets")}
                </div>
                <div data-v-8638f725 className="font-mono text-xl font-bold">
                  {(
                    (parseFloat(data?.user?.promotional_balance) || 0) +
                    (parseFloat(data?.user?.withdraw_balance) || 0)
                  ).toFixed(2)}{" "}
                  USDT
                </div>
              </div>

              <div
                data-v-8638f725
                className=":uno: transfer-icon ml-10px mr-10px h-40px w-40px flex shrink-0 items-center justify-center rd-50% bg-$primary"
              >
                <div
                  data-v-8638f725
                  className="i-lets-icons:transfer-right text-26px text-white"
                ></div>
              </div>

              <div
                data-v-8638f725
                className="transfer-type-item w-[calc((100%-30px)/2)] text-center"
              >
                <div data-v-8638f725 className="text-xs">
                  {t("quantitative_account")}
                </div>
                <div data-v-8638f725 className="font-mono text-lg font-bold">
                  {data?.user?.balance || 0} USDT
                </div>
              </div>
            </div>

            {/* form */}
            <div
              data-v-8638f725
              className=":uno: container-form w-full rd-$radius"
            >
              <form data-v-8638f725 onSubmit={handleSubmit}>
                <div data-v-8638f725 className="base-input is-number mt-0">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type="number"
                      autoComplete="off"
                      placeholder={t("transfer_amount")}
                      className="w-full"
                      name=""
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                <div data-v-8638f725 className="base-input is-password">
                  <div className="input-box">
                    <div className="input-left-slot"></div>
                    <input
                      type="password"
                      autoComplete="off"
                      placeholder={t("security_password")}
                      className="w-full"
                      name=""
                    />
                    <div className="input-pwd-eye-slot cursor-pointer">
                      <div className="input-pwd-eye">
                        <div className="i-mdi-eye-outline"></div>
                      </div>
                    </div>
                    <div className="input-right-slot"></div>
                  </div>
                </div>

                <a
                  data-v-8638f725
                  className=":uno: base-main-btn flex items-center justify-center"
                  onClick={handleSubmit}
                >
                  <div className="base-main-btn-content">{t("confirm")}</div>
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

export default WalletFunds;
