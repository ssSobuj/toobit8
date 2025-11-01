import { t } from "i18next";

const HomeAssert = ({data}) => {
    return (
      <div data-v-1b3f4761="" className="asserts-part">
        <div data-v-1b3f4761="" className="assert">
          <div data-v-1b3f4761="" className="head">
            <em data-v-1b3f4761="">{t("total_assets")}</em>
          </div>
          <div data-v-1b3f4761="" className="body">
            <em data-v-1b3f4761="">{data?.total || "0.00"}</em>
            <span data-v-1b3f4761="">USDT</span>
          </div>
          <div data-v-1b3f4761="" className="foot">≈ $ {data?.total?.toFixed(2) || "0.00"}</div>
        </div>
  
        <div data-v-1b3f4761="" className="assert">
          <div data-v-1b3f4761="" className="head">
            <em data-v-1b3f4761="">{t("quantitative_account")}</em>
          </div>
          <div data-v-1b3f4761="" className="body">
            <em data-v-1b3f4761="">{ data?.user?.balance || "0.00"}</em>
            <span data-v-1b3f4761="">USDT</span>
          </div>
          <div data-v-1b3f4761="" className="foot">≈ $ { data?.user?.balance || "0.00"}</div>
        </div>
      </div>
    );
  };
  
  export default HomeAssert;
  