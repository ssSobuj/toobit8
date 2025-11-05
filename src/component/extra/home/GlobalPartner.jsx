import wazirX from "../../../assets/images/wazirX.png";
import coindcx from "../../../assets/images/coindcx.png";
import okey from "../../../assets/images/okex.png";
import bitmain from "../../../assets/images/bitmain.png";
import binance from "../../../assets/images/binance.png";
import huobi from "../../../assets/images/huobi.png";
import tron from "../../../assets/images/tron_image.png";
import least_authority from "../../../assets/images/least_authority.png";
import coinbase from "../../../assets/images/coinbase.png";
import { useTranslation } from "react-i18next";
const GlobalPartner = () => {
  const { t } = useTranslation();
  return (
    <div
      data-v-1b3f4761=""
      className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text global-partner mt-16px"
    >
      <div data-v-1b3f4761="" className="base-section-title">
        {t("global_partners")}
      </div>
      <div className="grid-wrap">
        <div className="grid-item">
          <img src={wazirX} alt="" />
        </div>
        <div className="grid-item">
          <img src={coindcx} alt="" />
        </div>
        <div className="grid-item">
          <img src={bitmain} alt="" />
        </div>
        <div className="grid-item">
          <img src={tron} alt="" />
        </div>
        <div className="grid-item">
          <img src={binance} alt="" />
        </div>
        <div className="grid-item">
          <img src={coinbase} alt="" />
        </div>
        <div className="grid-item">
          <img src={huobi} alt="" />
        </div>
        <div href="#" className="grid-item">
          <img src={okey} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GlobalPartner;
