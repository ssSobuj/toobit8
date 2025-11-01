import React from "react";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo-text.webp";
import { Link } from "react-router-dom";

const NoticeDeposit = () => {
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          <SingleHeader></SingleHeader>
          <div className="px-3 pt-20px pb-30px">
            <div
              data-v-0a8d34fc=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text notice-detail-wrap"
              style={{ "--4b9e51a4": "ltr" }}
            >
              <div data-v-0a8d34fc="" className="mb-20px">
                <div data-v-0a8d34fc="" className="title">
                  System Notice
                </div>
                <div
                  data-v-0a8d34fc=""
                  className="mt-4px text-xs text-[var(--text-gray)]"
                >
                  04/05/2025 22:42:35
                </div>
              </div>
              <div data-v-0a8d34fc="">
                <span data-v-0a8d34fc="" className="content d-block">
                  <p>
                    Deposit Success <span style={{color:"green"}}>5.10 USDT</span>
                  </p>
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDeposit;
