import React from "react";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";

import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";

const AboutUs = () => {
  const { t } = useTranslation();

  const img1 = new URL("../assets/images/aboutus/IMG_6617.PNG", import.meta.url)
    .href;
  const img2 = new URL("../assets/images/aboutus/IMG_6618.PNG", import.meta.url)
    .href;
  const img3 = new URL("../assets/images/aboutus/IMG_6619.PNG", import.meta.url)
    .href;

  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={t("about_us")} />
          <div className="px-3 pb-30px">
            <div
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
              style={{ direction: "ltr" }}
            >
              {/* Images only — no text */}
              <div style={{ display: "grid", gap: 16 }}>
                <img src={img1} alt="About us image 1" style={{ width: "100%", height: "auto", borderRadius: 8 }} />
                <img src={img2} alt="About us image 2" style={{ width: "100%", height: "auto", borderRadius: 8 }} />
                <img src={img3} alt="About us image 3" style={{ width: "100%", height: "auto", borderRadius: 8 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomLoader />
      <SupportLink />
    </div>
  );
};

export default AboutUs;
