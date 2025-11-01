import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const TotalBalance = ({ totalBalance }) => {
  const { t } = useTranslation();

  return (
    <div className="top-bar">
      <div className="user-info">
        <div className="user-money">
          <label>{t("total_balance")}</label>
          <em>{totalBalance}</em> USDT
        </div>
        <div class="flex-wrap" style={{paddingBottom:"5px"}}>
          <Link to="/deposit" class="btn"><i class="icon icon-in"></i><span>{t("deposit")}</span></Link>
          <Link to="/withdraw" class="btn"><i class="icon icon-out"></i><span>{t("withdrawal")}</span></Link>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
