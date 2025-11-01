import React from 'react';
import { useTranslation } from "react-i18next";

const UserInfo = ({data , handleCopy , userLevel}) => {
    const { t } = useTranslation();

    return (
        <div data-v-fba32ec4="" className="user-info">
            <div data-v-fba32ec4="" className="w-full">
                <div data-v-fba32ec4="" className="flex flex-1 items-center">
                    <div data-v-fba32ec4="" className="max-w-200px text-truncate flex items-center">
                        {t("hello_username", { username: data?.user?.username })}
                        <div data-v-fba32ec4="" onClick={handleCopy} className="i-material-symbols:content-copy w-18px h-18px ml-4px"></div>
                    </div>
                    <div data-v-fba32ec4 className="ml-5px flex items-center">
                        <div data-v-fba32ec4 className="level">{data?.user?.my_vip}</div>
                    </div>
                </div>
                <div data-v-fba32ec4 className="back-hint flex items-center text-12px c-$text-white">
                    {t("welcome_back")}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;