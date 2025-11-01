import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleHeader from "./extra/SingleHeader";

import noData from "../assets/images/no-data.png";

const TeamLevel1 = () => {
  const navigate = useNavigate();
  const { level } = useParams();
  const { t } = useTranslation();
  const [data, setData] = useState();

  const goBack = () => {
    navigate(-1);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/team/details?level=${level}`);
        setData(response.data);
        setTimeout(() => {
          setIsVisible(true);
        }, 500);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [level]); // Add 'level' as a dependency

  const formatPhoneOrEmail = (input) => {
    if (!input || input.length < 4) return input; // Handle edge cases

    const firstTwo = input.substring(0, 2); // First two characters
    const lastTwo = input.slice(-2); // Last two characters
    const middleStars = "*".repeat(input.length - 4); // Replace middle with stars

    return `${firstTwo}${middleStars}${lastTwo}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={"Level 1"}></SingleHeader>
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
              {data?.rebetas?.map((rebeta, index) => {
                return (
                  <div className="record-cell justify-content-between d-flex px-2 text-center" key={index}>
                    <i className="record-user van-ellipsis">
                      {formatPhoneOrEmail(rebeta.email_phone)}
                    </i>
                    <i className="record-date">
                      {formatDate(rebeta.joining_date)}
                    </i>
                    <i className="record-money text-success">
                      +{rebeta.commission}
                    </i>
                  </div>
                );
              })}
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

export default TeamLevel1;
