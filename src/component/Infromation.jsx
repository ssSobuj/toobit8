import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";
import SingleHeader from "./extra/SingleHeader";

import logo from "../assets/images/logo-text.webp";

const Infromation = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider">
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          <SingleHeader pageName={t("information")}></SingleHeader>
          <div data-v-f5703ed9="" className="p-$mg pt-30px">
            <div
              data-v-668623a8=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text"
            >
              <div data-v-668623a8 className="timeline-item flex justify-start">
                <div data-v-668623a8 className="pt-5px">
                  <div className="h-20px w-20px flex items-center justify-center border-2 border-$primary rounded-full border-solid">
                    <div className="h-10px w-10px rounded-full bg-$primary"></div>
                  </div>
                </div>
                <div data-v-668623a8 className="ml-10px pb-30px">
                  <h1 className="mb-20px text-xl text-$primary flex items-center">
                    {t("brand_name")}
                  </h1>
                  <div
                    data-v-18049dad
                    data-v-668623a8
                    className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4 shadow-$shadow bg-$bg-card2! after:hidden"
                    style={{ direction: "ltr" }}
                  >
                    <div className="rich-text text-base">
                      <p>
                        <strong>
                          {t("press_release")}
                          <br />
                          {t("press_release_date")}
                        </strong>
                      </p>
                      <p>
                        {t("launch_announcement_prefix")}
                        <strong>{t("brand_name")}</strong>
                        {t("launch_announcement_suffix")}
                      </p>
                      <br />
                      <p>{t("platform_description")}</p>
                      <br />
                      <ul>
                        <p>{t("key_features_title")}</p>
                        <li>
                          <strong>{t("feature_multi_exchange_title")} </strong>{" "}
                          - {t("feature_multi_exchange_desc")}
                        </li>
                        <li>
                          <strong>
                            {t("feature_realtime_arbitrage_title")}{" "}
                          </strong>{" "}
                          – {t("feature_realtime_arbitrage_desc")}
                        </li>
                        <li>
                          <strong>{t("feature_ai_autonomous_title")} </strong>–{" "}
                          {t("feature_ai_autonomous_desc")}
                        </li>
                      </ul>
                      <br />
                      <p>
                        <strong>Toobit</strong> {t("platform_mission")}
                      </p>
                      <p className="mt-3">{t("platform_future_line")}</p>
                    </div>
                  </div>

                  <h1 className="my-20px text-xl text-$primary flex items-center">
                    {t("agent_program_heading")}
                    {/* <div className="i-ic:outline-play-circle-filled-white w-30px h-30px cursor-pointer ml-10px"></div> */}
                  </h1>
                  <div
                    data-v-18049dad
                    data-v-668623a8
                    className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4 shadow-$shadow bg-$bg-card2! after:hidden"
                    style={{ direction: "ltr" }}
                  >
                    <div className="rich-text text-base">
                      <h2>
                        {t("agent_program_headline_prefix")}
                        <strong>{t("brand_name")}</strong>
                        {t("agent_program_headline_suffix")}
                      </h2>
                      <br />
                      <p>{t("agent_program_welcome")}</p>
                      <br />
                      <p>{t("agent_program_revolution")}</p>
                      <br />
                      <p>
                        <strong>{t("agent_program_highlights")}</strong>
                      </p>
                      <br />
                      <p>{t("agent_program_income")}</p>
                      <br />
                      <p>{t("agent_program_tools")}</p>
                      <br />
                      <p>{t("agent_program_growth")}</p>
                      <br />
                      <p>{t("agent_program_closing")}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ends timeline-item */}
              <div data-v-668623a8 className="timeline-item flex justify-start">
                <div data-v-668623a8 className="pt-5px">
                  <div className="h-20px w-20px flex items-center justify-center border-2 border-$primary rounded-full border-solid">
                    <div className="h-10px w-10px rounded-full bg-$primary"></div>
                  </div>
                </div>
              </div>
              {/* ends timeline-item */}
            </div>
          </div>
        </div>
      </div>

      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default Infromation;
