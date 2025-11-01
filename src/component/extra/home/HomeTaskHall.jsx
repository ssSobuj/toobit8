import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const HomeTaskHall = ({ showPopup, userData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const clickRecharge = () => {
    navigate("/recharge-method");
  };
  const clickRecharge2 = () => {};

  return (
    <div data-v-c2ad30f3="" className="store">
      <div data-v-c2ad30f3="" className="title">
        {t("task_hall")}
      </div>
      <div data-v-c2ad30f3="" className="store-content">
        <div data-v-c2ad30f3="" className="store-item">
          <div data-v-c2ad30f3="" className="store-img">
            <img
              data-v-c2ad30f3=""
              src="https://api.lilanz6.com/upload/img/66ffa51a7bdc.webp"
              loading="lazy"
            />
            <div data-v-c2ad30f3="" className="lock-img">
              <div
                data-v-c2ad30f3=""
                className="i-solar:lock-keyhole-outline text-30px c-white"
              ></div>
            </div>
          </div>
          <div data-v-c2ad30f3="" className="store-tools">
            <div data-v-c2ad30f3="" className="store-info">
              <div data-v-c2ad30f3="" className="mb-5px flex items-center">
                <div
                  data-v-c2ad30f3=""
                  className="mr-5px text-12px lh-12px c-$text-gray"
                >
                  Order commission
                </div>
                <div data-v-c2ad30f3="" className="top">
                  <div data-v-c2ad30f3="" className="rate font-anton">
                    $3.00
                  </div>
                </div>
              </div>
              <div data-v-c2ad30f3="" className="content">
                <div data-v-c2ad30f3="" className="label">
                  1星级
                </div>
              </div>
            </div>
            <div data-v-c2ad30f3="" className="action-box">
              <div
                data-v-c2ad30f3=""
                className="i-ic:outline-double-arrow"
              ></div>
            </div>
          </div>
        </div>
        {/* store item ends  */}
        <div data-v-c2ad30f3="" className="store-item">
          <div data-v-c2ad30f3="" className="store-img">
            <img
              data-v-c2ad30f3=""
              src="https://api.lilanz6.com/upload/img/66ffa51a7bdc.webp"
              loading="lazy"
            />
            <div data-v-c2ad30f3="" className="lock-img">
              <div
                data-v-c2ad30f3=""
                className="i-solar:lock-keyhole-outline text-30px c-white"
              ></div>
            </div>
          </div>
          <div data-v-c2ad30f3="" className="store-tools">
            <div data-v-c2ad30f3="" className="store-info">
              <div data-v-c2ad30f3="" className="mb-5px flex items-center">
                <div
                  data-v-c2ad30f3=""
                  className="mr-5px text-12px lh-12px c-$text-gray"
                >
                  Order commission
                </div>
                <div data-v-c2ad30f3="" className="top">
                  <div data-v-c2ad30f3="" className="rate font-anton">
                    $3.00
                  </div>
                </div>
              </div>
              <div data-v-c2ad30f3="" className="content">
                <div data-v-c2ad30f3="" className="label">
                  1星级
                </div>
              </div>
            </div>
            <div data-v-c2ad30f3="" className="action-box">
              <div
                data-v-c2ad30f3=""
                className="i-ic:outline-double-arrow"
              ></div>
            </div>
          </div>
        </div>
        {/* store item ends  */}
      </div>

      <div home-content="" className="store-content">
        {userData?.vips?.map((item, index) => (
          <div
            home-content=""
            key={index}
            className={
              item.unlock ? "store-item colorful" : "store-item colorful upgrd"
            }
            onClick={item.unlock ? clickRecharge2 : clickRecharge}
          >
            <div home-content="" className="item-content">
              <div home-content="" className="store-img">
                <img
                  home-content=""
                  src={`${axios.defaults.baseURL}${item.image}`}
                  loading="lazy"
                />

                {item.unlock ? (
                  <div></div>
                ) : (
                  <div home-content="" className="lock-img">
                    <div
                      home-content=""
                      className="i-ic:round-lock text-30px c-$text-white"
                    ></div>
                  </div>
                )}
              </div>
              <div home-content="" className="store-tools">
                <div home-content="" className="store-info">
                  <div home-content="" className="mb-5px">
                    <div
                      home-content=""
                      className="mr-5px text-12px lh-12px c-$text-gray"
                    >
                      {t("order_commission")}
                    </div>
                    <div home-content="" className="top">
                      <div home-content="" className="rate font-anton">
                        $
                        <span home-content="" className="c-$btn-text">
                          {item.income_from}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div home-content="" className="content">
                    <div home-content="" className="label">
                      Fonterra{item.id}
                    </div>
                  </div>
                </div>
                <div home-content="" className="action-box">
                  <div
                    home-content=""
                    className="i-material-symbols:keyboard-double-arrow-right"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTaskHall;
