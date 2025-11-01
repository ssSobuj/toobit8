import { useNavigate } from "react-router-dom";
import SupportLink from "../extra/supportLink";
import CustomLoader from "../extra/customLoader";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { t } = useTranslation();
  return (
    <div id="app">
      <div className="layout-container page-forget">
        <header className="layout-header">
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left" onClick={goBack}>
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
                <span className="van-nav-bar__text">
                  {t("forgot_password")}?
                </span>
              </div>
              <div className="van-nav-bar__title van-ellipsis"></div>
            </div>
          </div>
        </header>
        {/* Header ends */}
        <main className="layout-body">
          <div className="layout-main">
            <form className="form-field-group icon-form van-form">
              <div className="form-field van-cell van-field">
                <div className="van-field__left-icon">
                  <i className="iconfont icon-user"></i>
                </div>
                <div className="van-cell__value van-cell__value--alone van-field__value">
                  <div className="van-field__body">
                    <input
                      type="text"
                      name="username"
                      placeholder={t("account")}
                      className="van-field__control"
                    />
                  </div>
                </div>
              </div>
              <div className="form-field van-cell van-field">
                <div className="van-field__left-icon">
                  <i className="iconfont icon-email"></i>
                </div>
                <div className="van-cell__value van-cell__value--alone van-field__value">
                  <div className="van-field__body">
                    <input
                      type="text"
                      name="email"
                      placeholder={t("email")}
                      className="van-field__control"
                    />
                  </div>
                </div>
              </div>
              <div className="form-field van-cell van-field">
                <div className="van-field__left-icon">
                  <i className="iconfont icon-vcode"></i>
                </div>
                <div className="van-cell__value van-cell__value--alone van-field__value">
                  <div className="van-field__body">
                    <input
                      type="text"
                      name="emailCode"
                      placeholder={t("email_verification_code")}
                      className="van-field__control"
                    />
                    <div className="van-field__button">
                      <button className="sms-btn van-button van-button--primary van-button--small">
                        <div className="van-button__content">
                          <span className="van-button__text">{t("otp")}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-field van-cell van-field">
                <div className="van-field__left-icon">
                  <i className="iconfont icon-password"></i>
                </div>
                <div className="van-cell__value van-cell__value--alone van-field__value">
                  <div className="van-field__body">
                    <input
                      type="text"
                      name="newPassword"
                      placeholder={t("enter_a_new_password")}
                      className="van-field__control"
                    />
                  </div>
                </div>
              </div>
              <div className="form-btn-group">
                <button
                  type="submit"
                  className="van-button van-button--default van-button--normal van-button--block"
                  style={{
                    color: "white",
                    background: "#ddbb40",
                    borderColor: "#ddbb40",
                  }}
                >
                  <div className="van-button__content">
                    <span className="van-button__text">{t("submit")}</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </main>
        {/* main ends */}
      </div>
      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default ForgotPassword;
