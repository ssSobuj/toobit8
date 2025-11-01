import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";
import SingleHeader from "./extra/SingleHeader";
import noData from "../assets/images/no-data.png";
const TeamLevel3 = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={"Level 3"}></SingleHeader>
          <div className="px-3 pb-30px">
            <div
              data-v-e98dae19=""
              className=":uno: bg-$bg-card relative rd-$card-radius p-$mg c-$btn-text text-center mt-4"
              style={{ direction: "ltr" }}
            >
              <div className="van-row">
                <div className="van-col van-col--8">
                  <div className="text-$text-gray">Account</div>
                </div>
                <div className="van-col van-col--8">
                  <div className="text-$text-gray">Last login time</div>
                </div>
                <div className="van-col van-col--8">
                  <div className="text-$text-gray">Total contribution amount</div>
                </div>
              </div>
            </div>
            {/* ends */}
            <div className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-10px px-6px! shadow-$shadow">
              <div className={`"record-cell justify-content-between px-2 ${isVisible ? "d-flex" : "d-none"}`}>
                <i className="record-user van-ellipsis">is*****80</i>
                <i className="record-date">2023-10-08 14:15:53</i>
                <i className="record-money text-success">+0.00</i>
              </div>
              <div data-v-156e3583="" className="base-list a-t-30">
                <div data-v-156e3583="" className="base-list-nodata">
                  <div className="van-empty">
                    <div className="van-empty__image" style={{ width: "80px", height: "80px" }}>
                      <img src={noData} alt="Empty" />
                    </div>
                    <p className="van-empty__description">Empty</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <SupportLink></SupportLink>
      <CustomLoader></CustomLoader>
    </div>
  );
};

export default TeamLevel3;
