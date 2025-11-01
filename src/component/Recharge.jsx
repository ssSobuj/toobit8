import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

// Images Import
import bnb_icon from "../assets/images/bnb_icon.png";
import trx_icon from "../assets/images/trx_icon.png";
import eth_icon from "../assets/images/eth_icon.png";
import bep20_usdt_icon from "../assets/images/bep20_usdt_icon.png";
import erc20_usdt_icon from "../assets/images/erc20_usdt_icon.png";
import trc20_usdt_icon from "../assets/images/trc20_usdt_icon.png";
import doge_icon from "../assets/images/doge_icon.png";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import SingleHeader from "./extra/SingleHeader";

const recharge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");
  const { t } = useTranslation();

  const [data, setData] = useState({});
  const [rates, setRates] = useState({});

  const goBack = () => navigate(-1);
  const rechargeRecord = () => navigate("/recharge-record");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch available currencies from your API
        const response = await axios.get("api/currency");
        setData(response.data);

        // Fetch real-time conversion rates from CoinGecko
        const ratesResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "tether,tron,binancecoin,ethereum,dogecoin",
              vs_currencies: "usd",
            },
          }
        );

        const prices = ratesResponse.data;
        const trxToUsd = prices.tron.usd;
        const usdtToUsd = prices.tether.usd;
        const bnbToUsd = prices.binancecoin.usd;
        const ethToUsd = prices.ethereum.usd;
        const dogeToUsd = prices.dogecoin.usd;

        // Convert from USDT to target coin
        setRates({
          USDT_TRC20: 1, // 1 USDT = 1 USDT
          USDT_BEP20: 1,
          USDT_ERC20: 1,
          TRX: usdtToUsd / trxToUsd, // USDT ➜ TRX
          BNB: usdtToUsd / bnbToUsd, // USDT ➜ BNB
          ETH: usdtToUsd / ethToUsd, // USDT ➜ ETH
          DOGE: usdtToUsd / dogeToUsd, // USDT ➜ DOGE
          trxToUsd: trxToUsd,
          bnbToUsd: bnbToUsd,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{minHeight:"100vh"}}>
        <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={t('recharge')}></SingleHeader>
          <div data-v-7e57a101="" className="p-$mg">
            <div data-v-7e57a101="" className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text py-0!">
              <Link to={`/transfer-to-smart-account?method=USDT&type=basic`} data-v-7e57a101 className="recharge-item">
                <div data-v-7e57a101 className="flex items-center">
                  <img
                    data-v-7e57a101
                    src={trc20_usdt_icon}
                    className="w-26.48px h-26.48px shrink-0"
                  />
                  <span data-v-7e57a101 className="name">TRC20-USDT</span>
                </div>
                <div data-v-7e57a101 className="flex items-center">
                  <div data-v-7e57a101 className="i-material-symbols:arrow-forward-ios text-$text-gray w-20px h-20px"></div>
                </div>
              </Link>
              {/* ends */}
              <Link to={`/transfer-to-smart-account?method=TRX&type=basic`} data-v-7e57a101 className="recharge-item">
                <div data-v-7e57a101 className="flex items-center">
                  <img
                    data-v-7e57a101
                    src={trx_icon}
                    className="w-26.48px h-26.48px shrink-0"
                  />
                  <span data-v-7e57a101 className="name">TRX</span>
                </div>
                <div data-v-7e57a101 className="flex items-center">
                  <div data-v-7e57a101 className="i-material-symbols:arrow-forward-ios text-$text-gray w-20px h-20px"></div>
                </div>
              </Link>
              {/* ends */}
              <Link to={`/transfer-to-smart-account?method=BEP20&type=basic`} data-v-7e57a101 className="recharge-item">
                <div data-v-7e57a101 className="flex items-center">
                  <img
                    data-v-7e57a101
                    src={bep20_usdt_icon}
                    className="w-26.48px h-26.48px shrink-0"
                  />
                  <span data-v-7e57a101 className="name">BEP20-USDT</span>
                </div>
                <div data-v-7e57a101 className="flex items-center">
                  <div data-v-7e57a101 className="i-material-symbols:arrow-forward-ios text-$text-gray w-20px h-20px"></div>
                </div>
              </Link>
              {/* ends */}
              <Link to={`/transfer-to-smart-account?method=BNB&type=basic`} data-v-7e57a101 className="recharge-item">
                <div data-v-7e57a101 className="flex items-center">
                  <img
                    data-v-7e57a101
                    src={bnb_icon}
                    className="w-26.48px h-26.48px shrink-0"
                  />
                  <span data-v-7e57a101 className="name">BNB</span>
                </div>
                <div data-v-7e57a101 className="flex items-center">
                  <div data-v-7e57a101 className="i-material-symbols:arrow-forward-ios text-$text-gray w-20px h-20px"></div>
                </div>
              </Link>
              {/* ends */}
            </div>
          </div>
        </div>
        <SupportLink></SupportLink>
        <CustomLoader></CustomLoader>
      </div>

    </div>
  );
};

export default recharge;
