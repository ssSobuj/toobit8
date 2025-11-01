import React from "react";
import Certificate from "../assets/images/certificate.png";
import ExtraHeader from "./extra/ExtraHeader";
import { useTranslation } from "react-i18next";

const Bandwith = () => {
  const { t } = useTranslation();
  return (
    <div className="layout-container page-help">
      <ExtraHeader pageName={t("bandwidth")}></ExtraHeader>
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
              {/* <p>{t("bandwith_all_types")}</p>
                        <p>{t("the_unit_price_of_the_targe")}</p>
                        <p>&nbsp;</p> */}
              <h5>
                <strong>{t("chain_quant_ltd")}</strong>
              </h5>
              <p>
                <strong>{t("driving_the_future_of_ai")}</strong>
              </p>
              <p>{t("at_chain_quant_we_harness")}</p>
              <hr />
              <p>
                <strong>{t("core_services")}</strong>
              </p>
              <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
                <li>{t("ai_solutions")}</li>
                <li>{t("big_data_analytics")}</li>
                <li>{t("automation_integration")}</li>
                <li>{t("strategic_industry_consulting")}</li>
              </ul>
              <hr />
              <p>
                <strong>{t("our_core_values")}</strong>
              </p>
              <ul style={{ listStyleType: "disc", marginLeft: "8vw" }}>
                <li>{t("innovation_driven")}</li>
                <li>{t("client_centric")}</li>
                <li>{t("integrity_accountability")}</li>
              </ul>
              <hr />
              <p>
                <strong>{t("vision")}</strong>
              </p>
              <p>{t("to_lead_globally_in_ai")}</p>
              <hr />
              <p>
                <strong>{t("innovation_philosophy")}</strong>
              </p>
              <p>{t("we_pioneer_the_smart_ecosystem")}</p>
              <hr />
              <p>
                <strong>{t("corporate_information")}</strong>
              </p>
              <p>
                <strong>{t("legal_name")}</strong>: CHAIN QUANT LTD
              </p>
              <p>
                <strong>{t("company_number")}</strong>: 15844129
              </p>
              <p>
                <strong>{t("incorporation_date")}</strong>: 17 July 2024
              </p>
              <p>
                <strong>{t("registered_address")}</strong>: 6 Chigwell Lane,
                Loughton, England, IG10 3RW
              </p>
              <p>
                {t("for_official_filings")}:{" "}
                <a href="https://service.gov.uk/" target="_blank">
                  {t("uk_government_registry")}
                </a>
              </p>
              <hr />
              <img
                src={Certificate}
                alt={t("certificate_image_alt")}
                style={{ width: "100%", marginTop: "2vw" }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bandwith;
