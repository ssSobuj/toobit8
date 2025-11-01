import React from "react";
import getbenifit from "../assets/images/getbenifit.jpg";
import ExtraHeader from "./extra/ExtraHeader";
import { useTranslation } from "react-i18next";

const Energy = () => {
  const { t } = useTranslation();
  return (
    <div className="layout-container page-help">
      <ExtraHeader pageName={t("energy")}></ExtraHeader>
      <main
        className="layout-body"
        style={{
          paddingBottom: "80px",
          paddingTop: "50px",
          // Responsive margin top
          ...(window.innerWidth >= 330 ? { paddingTop: "75px" } : {}),
          ...(window.innerWidth >= 440 ? { paddingTop: "90px" } : {}),
          ...(window.innerWidth >= 600 ? { paddingTop: "110px" } : {}),
          ...(window.innerWidth >= 720 ? { paddingTop: "130px" } : {}),
        }}
      >
        <div className="layout-main">
          <div
            className="help-content"
            style={{ fontSize: "3.46667vw", padding: "4vw", lineHeight: "1.5" }}
          >
            <div className="help-content">
              <p>{t("energy_each_instruction")}</p>
              <p>{t("the_current_offical_unit_price")}</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Energy;
