import React from "react";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";

import CompanyDoc from "../assets/images/company-document.png";

const CompanyProfile = () => {
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={"Company Profile"} />
          <div className="px-3 pb-30px">
            <div
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
              style={{ direction: "ltr" }}
            >
              <div className="rich-text text-base">
                <p>
                  <strong>MEASURE FOR MEASURE LTD</strong> was founded in London,
                  UK in 2004 and is committed to becoming a leading enterprise
                  in the field of blockchain-based intelligent trading.
                </p>
                <br />
                <p>
                  <strong>TOBBIT</strong> is an advanced quantitative
                  trading system powered by artificial intelligence technology.
                  Its core capability lies in the automatic execution of trading
                  strategies to maximize investment returns while minimizing
                  risk. Specifically, TOBBIT transforms investment
                  decisions into executable computer algorithms, enabling
                  transparent, efficient, and rapid trading operations that
                  adapt seamlessly to real-time market fluctuations.
                </p>
                <br />
                <p>
                  TOBBIT’s trading strategies are grounded in modern
                  mathematics, statistics, machine learning, and continuous
                  analysis of market trends and digital asset prices to
                  determine the most effective trading actions. Through complex
                  algorithms and modeling, the system evaluates market risks and
                  investment opportunities, automatically optimizing portfolio
                  allocations in response to changing expectations of risk and
                  return.
                </p>
                <br />
                <p>
                  This fully automated approach eliminates human error, enhances
                  transactional accuracy, and ensures consistent adaptation to
                  volatile and uncertain market conditions.
                </p>
                <br />
                <p>
                  In essence, TOBBIT is a next-generation quantitative
                  trading system that merges artificial intelligence with modern
                  financial theory to automatically implement strategies aimed
                  at maximizing profit and minimizing risk.
                </p>
                <br />
                <p>
                  <strong>Company Name:</strong> MEASURE FOR MEASURE LTD
                </p>
                <p>
                  <strong>Company Number:</strong> 05159804
                </p>
                <p>
                  <strong>Date of Incorporation:</strong> 22 June 2004
                </p>
                <p>
                  <strong>Registered Office:</strong> 2 Stamford Square, London,
                  SW15 2BF, United Kingdom
                </p>
              </div>

              <div style={{ textAlign: "center", marginTop: 20 }}>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
