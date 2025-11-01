import mine_team_icon from "../../../assets/images/mine_team_icon.png";
import mine_wallet_icon from "../../../assets/images/mine_wallet_icon.png";
import mine_changepassword_icon from "../../../assets/images/mine_changepassword_icon.png";
import mine_sharefriend_icon from "../../../assets/images/mine_sharefriend_icon.png";
import mine_notification_icon from "../../../assets/images/mine_notification_icon.png";
import mine_app_icon from "../../../assets/images/mine_app_icon.png";
import mine_logout_icon from "../../../assets/images/mine_logout_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MineLinks = ({ handleLogout }) => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <div
      data-v-fba32ec4
      className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-19px"
    >
      <h3 data-v-fba32ec4 className="base-section-title">
        {t("app_services")}
      </h3>
      <div data-v-fba32ec4 className="secondary-tools-part">
        <Link data-v-fba32ec4 to="/financial" className="">
          <div data-v-fba32ec4 className="item">
            <div data-v-fba32ec4>
              <div data-v-fba32ec4 className="icon-box">
                <div
                  data-v-fba32ec4
                  className="icon i-material-symbols:trending-up"
                ></div>
              </div>
              <div data-v-fba32ec4 className="label">
                {t('detail')}
              </div>
            </div>
          </div>
        </Link>
        <Link data-v-fba32ec4 to="/wallet-founds" className="">
          <div data-v-fba32ec4 className="item">
            <div data-v-fba32ec4>
              <div data-v-fba32ec4 className="icon-box">
                <div
                  data-v-fba32ec4
                  className="icon i-solar:transfer-vertical-line-duotone"
                ></div>
              </div>
              <div data-v-fba32ec4 className="label">
                {t('transfer')}
              </div>
            </div>
          </div>
        </Link>
        <Link data-v-fba32ec4 to="/information" className="">
          <div data-v-fba32ec4 className="item">
            <div data-v-fba32ec4>
              <div data-v-fba32ec4 className="icon-box">
                <div
                  data-v-fba32ec4
                  className="icon i-ic:baseline-newspaper"
                ></div>
              </div>
              <div data-v-fba32ec4 className="label">
                {t('news')}
              </div>
            </div>
          </div>
        </Link>
        <Link data-v-fba32ec4 to="/change-password" className="">
          <div data-v-fba32ec4 className="item">
            <div data-v-fba32ec4>
              <div data-v-fba32ec4 className="icon-box">
                <div
                  data-v-fba32ec4
                  className="icon i-material-symbols:security"
                ></div>
              </div>
              <div data-v-fba32ec4 className="label">
                {t('security_center')}
              </div>
            </div>
          </div>
        </Link>
        <Link data-v-fba32ec4 to="/company-profile" className="">
          <div data-v-fba32ec4 className="item">
            <div data-v-fba32ec4>
              <div data-v-fba32ec4 className="icon-box">
                <div
                  data-v-fba32ec4
                  className="icon i-ic:round-question-answer"
                ></div>
              </div>
              <div data-v-fba32ec4 className="label">
                {t('company_profile')}
              </div>
            </div>
          </div>
        </Link>
        {/* <Link data-v-fba32ec4 to="/things-to-note" className="">
          <div data-v-fba32ec4 className="item">
            <div data-v-fba32ec4>
              <div data-v-fba32ec4 className="icon-box">
                <div data-v-fba32ec4 className="icon i-ic:round-question-answer"></div>
              </div>
              <div data-v-fba32ec4 className="label">Things to note</div>
            </div>
          </div>
        </Link> */}
        <Link data-v-fba32ec4 to="/about-us" className="">
          <div data-v-fba32ec4 className="item">
            <div data-v-fba32ec4>
              <div data-v-fba32ec4 className="icon-box">
                <div
                  data-v-fba32ec4
                  className="icon i-ic:round-question-answer"
                ></div>
              </div>
              <div data-v-fba32ec4 className="label">
                {t('about_us')}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MineLinks;
