import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomLoader from "./extra/customLoader";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ExtraHeader from "./extra/ExtraHeader";
import SingleHeader from "./extra/SingleHeader";

const Team = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  // team details show
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);
  // team modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const { t } = useTranslation();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/team");
        setData(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [isReportShow, setIsReportShow] = useState(false);
  const handleReportShow = () => {
    setIsReportShow(!isReportShow);
  };

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider">
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          <SingleHeader pageName={t("team")}></SingleHeader>
          <div style={{ paddingBottom: "10px" }}>
            <div data-v-83154288="" className="p-$mg">
              <div
                data-v-83154288=""
                className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text shadow-$shadow"
              >
                <div
                  data-v-83154288=""
                  className="text-center text-sm text-$text-gray mt-20px"
                >
                  {t("commission")}
                </div>
                <div
                  data-v-83154288=""
                  className="text-center font-bold text-2xl mt-20px"
                >
                  USDT {data?.bonus}
                </div>
                <Link
                  to="/team-bonus-records"
                  data-v-83154288=""
                  className="px-10px rounded text-white bg-$primary py-4px inline-block ml-50% translate-x-[-50%] mt-20px mb-20px"
                >
                  {t("commission_records")}
                </Link>
              </div>
              {/* ends */}
              <div
                data-v-83154288=""
                className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text shadow-$shadow mt-10px! p-0!"
              >
                <div data-v-83154288 className="record-cell">
                  <div data-v-83154288 className="flex items-center shrink-0">
                    <div
                      data-v-83154288
                      className="i-material-symbols:group w-20px h-20px mr-5px"
                    ></div>
                    <span data-v-83154288>{t("total_people")}</span>
                  </div>
                  <div data-v-83154288>{data?.teamsize || 0}</div>
                </div>
                {/* ends */}
                <div data-v-83154288 className="record-cell">
                  <div data-v-83154288 className="flex items-center shrink-0">
                    <div
                      data-v-83154288
                      className="i-material-symbols:group w-20px h-20px mr-5px"
                    ></div>
                    <span data-v-83154288>
                      {t("valid_invitation_people_number")}
                    </span>
                  </div>
                  <div data-v-83154288>{data?.valUser}</div>
                </div>
                {/* ends */}
                <div
                  data-v-83154288
                  className="record-cell transition-all ease-in"
                >
                  <div
                    data-v-83154288
                    className="flex w-full items-center justify-between"
                    onClick={handleReportShow}
                  >
                    <div
                      data-v-83154288=""
                      className="flex items-center shrink-0"
                    >
                      <div
                        data-v-83154288=""
                        className="i-material-symbols:group w-20px h-20px mr-5px"
                      ></div>
                      <span data-v-83154288="">{t("team_report")}</span>
                    </div>
                    {/* contain ends */}
                    <div data-v-83154288="" className="flex items-center">
                      <div
                        data-v-83154288=""
                        className={`i-material-symbols-light:arrow-forward-ios-rounded w-20px h-20px ${
                          isReportShow ? "rotate-90" : ""
                        } ml-10px`}
                      ></div>
                    </div>
                    {/* contain ends */}
                  </div>
                  {/* ends flex div */}
                  {isReportShow && (
                    <div data-v-83154288="" className="w-full my-10px">
                      <div
                        data-v-83154288=""
                        className="w-full flex items-center"
                      >
                        {/* <input
                          type="date"
                          className="cursor-pointer items-center min-w-200px border border-solid border-$border-color rd px-10px py-5px text-black"
                        />
                        <div
                          data-v-83154288=""
                          className="bg-$primary px-10px py-5px rd ml-10px text-white"
                        >
                          Search
                        </div> */}
                      </div>
                      <div data-v-83154288="" className="mt-10px">
                        <div data-v-83154288="" className="my-5px">
                          {t("team_total_recharge")}{" "}
                          {Number(data?.totalDepositSum ?? 0).toFixed(2)} USDT
                        </div>
                        <div data-v-83154288="" className="my-5px">
                          {t("team_total_withdrawal")}{" "}
                          {Number(data?.totalWithdrawSum ?? 0).toFixed(2)} USDT
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link data-v-83154288 className="record-cell" to="/team/1">
                  <div data-v-83154288 className="flex items-center shrink-0">
                    <div
                      data-v-83154288
                      className="i-material-symbols:group w-20px h-20px mr-5px"
                    ></div>
                    <span data-v-83154288>{t("level_1")}</span>
                  </div>
                  <div data-v-83154288 className="flex items-center">
                    <div data-v-83154288 className="text-12px">
                      <div data-v-83154288>
                        {t("total_valid_label")} {data?.refer_lvel1 || 0}/
                        {data?.val_lvel1 || 0}
                      </div>
                      <div data-v-83154288 className="mt-10px">
                        {t("get_commission_label")}{" "}
                        {Number(data?.sumcom_lvel1 ?? 0).toLocaleString(
                          undefined,
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </div>
                    </div>
                    <div
                      data-v-83154288
                      className="i-material-symbols-light:arrow-forward-ios-rounded w-20px h-20px ml-10px"
                    ></div>
                  </div>
                </Link>

                <Link data-v-83154288 className="record-cell" to="/team/2">
                  <div data-v-83154288 className="flex items-center shrink-0">
                    <div
                      data-v-83154288
                      className="i-material-symbols:group w-20px h-20px mr-5px"
                    ></div>
                    <span data-v-83154288>{t("level_2")}</span>
                  </div>
                  <div data-v-83154288 className="flex items-center">
                    <div data-v-83154288 className="text-12px">
                      <div data-v-83154288>
                        {t("total_valid_label")} {data?.refer_lvel2 || 0}/
                        {data?.val_lvel2 || 0}
                      </div>
                      <div data-v-83154288 className="mt-10px">
                        {t("get_commission_label")}{" "}
                        {Number(data?.sumcom_lvel2 ?? 0).toLocaleString(
                          undefined,
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </div>
                    </div>
                    <div
                      data-v-83154288
                      className="i-material-symbols-light:arrow-forward-ios-rounded w-20px h-20px ml-10px"
                    ></div>
                  </div>
                </Link>

                <Link data-v-83154288 className="record-cell" to="/team/3">
                  <div data-v-83154288 className="flex items-center shrink-0">
                    <div
                      data-v-83154288
                      className="i-material-symbols:group w-20px h-20px mr-5px"
                    ></div>
                    <span data-v-83154288>{t("level_3")}</span>
                  </div>
                  <div data-v-83154288 className="flex items-center">
                    <div data-v-83154288 className="text-12px">
                      <div data-v-83154288>
                        {t("total_valid_label")} {data?.refer_lvel3 || 0}/
                        {data?.val_lvel3 || 0}
                      </div>
                      <div data-v-83154288 className="mt-10px">
                        {t("get_commission_label")}{" "}
                        {Number(data?.sumcom_lvel3 ?? 0).toLocaleString(
                          undefined,
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </div>
                    </div>
                    <div
                      data-v-83154288
                      className="i-material-symbols-light:arrow-forward-ios-rounded w-20px h-20px ml-10px"
                    ></div>
                  </div>
                </Link>
              </div>
              {/* container-card ends */}
              <div
                data-v-83154288
                className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-$mg py-20px!"
              >
                <div data-v-83154288 className="text-center text-xl">
                  {t("invite_friends")}
                </div>
                <Link
                  to="/share"
                  data-v-83154288
                  className="btn-$btn-text mt-16px text-white w-200px mx-auto h-33px px-$mg cursor-pointer rounded bg-$primary text-sm flex items-center justify-center"
                >
                  {t("now_go")}
                </Link>
              </div>
              {/* container-card ends */}
            </div>
          </div>
          <SupportLink></SupportLink>
          <CustomLoader></CustomLoader>
        </div>
      </div>

      {/* Header ends */}

      {/* main ends */}
      {/* <div
        id="teamOverlay"
        className={`van-overlay trsx ${isModalVisible ? "modal-open" : ""}`}
        style={{ zIndex: "2021" }}
      ></div>
      <div
        id="teamModal"
        role="dialog"
        aria-labelledby="In progress"
        className={`dialog-usermsg van-dialog trsx ${
          isModalVisible ? "modal-open" : ""
        }`}
        style={{ zIndex: "2022" }}
      >
        <div
          className="van-dialog__header"
          style={{ paddingLeft: "20px", textAlign: "left" }}
        >
          {t("in_progress")}
        </div>
        <div className="van-dialog__content">
          <dl className="running-team-info">
            <dt>{t("number_of_investments")}:</dt>
            <dd>{data?.totalInvest}</dd>
            <dt>{t("total_investment")}:</dt>
            <dd>{data?.investAmount}</dd>
            <dt>{t("subordinate_investment_amount")}:</dt>
            <dd>0.00</dd>
          </dl>
        </div>

        <div className="van-hairline--top van-dialog__footer">
          <button
            className="van-button van-button--default van-button--large van-dialog__confirm"
            onClick={toggleModal}
          >
            <div className="van-button__content">
              <span className="van-button__text">{t("confirm")}</span>
            </div>
          </button>
        </div>
      </div> */}
      {/* team modal ends */}
    </div>
  );
};

export default Team;
