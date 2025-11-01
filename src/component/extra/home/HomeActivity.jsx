import { Link } from "react-router-dom";
import glLogo from "../../../assets/images/logo.png";

const HomeActivity = () => {
    return (
      <div data-v-1b3f4761="" className="mt-16px">
        <div
          data-v-1b3f4761=""
          className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text w-full mt-10px"
        >
          <h3 className="base-section-title">
            <span>Activity</span>
            <Link to="/activity" className="more">
              <span>More</span>
              <div className="i-ic:baseline-arrow-forward-ios"></div>
            </Link>
          </h3>
  
          <div
            data-v-1b3f4761=""
            className="w-full cursor-pointer overflow-hidden mt-8px p-8px! border-b border-solid border-$border-color last:border-b-0"
          >
            <Link to="/invitation-rewards" className="flex items-start">
              <img
                className="w-80px h-80px rounded-12px shrink-0 mr-10px"
                src={glLogo}
                alt="Invitation Reward"
              />
              <div>
                <div className="text-sm truncate-2">Invitation Reward ▷</div>
                <div className="text-xs mt-4px text-$text-gray truncate-2">
                  Invite new users to store values ​​and receive hierarchical rewards.
                </div>
              </div>
            </Link>
          </div>
  
          {/* <div
            data-v-1b3f4761=""
            className="w-full cursor-pointer overflow-hidden mt-8px p-8px! border-b border-solid border-$border-color last:border-b-0"
          >
            <Link to="/registration-rewards" className="flex items-start">
              <img
                className="w-80px h-80px rounded-12px shrink-0 mr-10px"
                src={glLogo}
                alt="Registration Reward"
              />
              <div>
                <div className="text-sm truncate-2">Registration Reward ▷</div>
                <div className="text-xs mt-4px text-$text-gray truncate-2">
                  New user registration rewards 2USDT
                </div>
              </div>
            </Link>
          </div> */}
          
        </div>
      </div>
    );
  };
  
  export default HomeActivity;
  