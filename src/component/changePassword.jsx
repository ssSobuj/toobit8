import { Link, useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";
import SingleHeader from "./extra/SingleHeader";

const ChangePassword = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const modifyLoginPassword = () => {
    navigate("/modify-login-password");
  };
  const modifyPaymentPassword = () => {
    navigate("/modify-payment-password");
  };
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider">
        <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={t("account_security")}></SingleHeader>
          <div data-v-ada16be2 className="px-3">
            <div
              data-v-ada16be2
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
              mt-4=""
            >
              <Link
                data-v-ada16be2
                to="/modify-login-password"
                className="flex items-center justify-between"
              >
                <span data-v-ada16be2>{t("login_password")}</span>
                <div
                  data-v-ada16be2
                  className="i-material-symbols:arrow-right text-24px text-$primary"
                ></div>
              </Link>
            </div>

            <div
              data-v-ada16be2
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
              mt-4=""
            >
              <Link
                data-v-ada16be2
                to="/modify-payment-password"
                className="flex items-center justify-between"
              >
                <span data-v-ada16be2>{t("security_password")}</span>
                <div
                  data-v-ada16be2
                  className="i-material-symbols:arrow-right text-24px text-$primary"
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default ChangePassword;
