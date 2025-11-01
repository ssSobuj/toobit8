import { useTranslation } from "react-i18next";
import CustomLoader from "./extra/customLoader";
import ExtraHeader from "./extra/ExtraHeader";
import SupportLink from "./extra/supportLink";
import SingleHeader from "./extra/SingleHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

import glLogo from "../assets/images/logo.png";
const Activity = () => {
    const { t } = useTranslation();
    return (
        <div id="app" data-v-app="" className="a-t-30 no-1">
            <div className="van-config-provider" style={{ minHeight: "100vh" }}>
                <div data-v-f5703ed9="" className="box-border min-h-full w-full pt-45px">
                    <SingleHeader pageName={"Acitivity"}></SingleHeader>
                    <div className="p-$mg">
                        <div data-v-1b3f4761="" className="mt-16px">
                            <div
                                data-v-1b3f4761=""
                                className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text w-full mt-10px"
                            >

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

                                <div
                                    data-v-1b3f4761=""
                                    className="w-full cursor-pointer overflow-hidden mt-8px p-8px! border-b border-solid border-$border-color last:border-b-0"
                                >
                                    <Link to="/recharge-rewards" className="flex items-start">
                                        <img
                                            className="w-80px h-80px rounded-12px shrink-0 mr-10px"
                                            src={glLogo}
                                            alt="Registration Reward"
                                        />
                                        <div>
                                            <div className="text-sm truncate-2">Recharge Reward ▷</div>
                                            <div className="text-xs mt-4px text-$text-gray truncate-2">
                                                Every time you invite friends to make a deposit, you can get a percentage bonus.
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* ends */}
                </div>
            </div>

            <SupportLink></SupportLink>
            <CustomLoader></CustomLoader>
        </div>
    );
};

export default Activity;
