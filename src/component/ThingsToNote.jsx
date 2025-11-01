import React from "react";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo-text.webp";

const ThingsToNote = () => {
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          <SingleHeader pageName={"Things To Note"}></SingleHeader>
          <div className="px-3 pb-30px">
            <div
              data-v-e98dae19=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
              style={{ direction: "ltr" }}
            >
              <div data-v-e98dae19="" className="rich-text text-base">
                <p>JASMY QUANT Prohibited Matters:</p>
                <p>
                  1. It is strictly prohibited for an individual to register
                  multiple JASMY QUANT accounts.
                </p>
                <p>
                  2. Hiring others to maliciously boost your GROK version level
                  is not allowed.
                </p>
                <p>
                  3. Intentional misuse or waste of company resources is
                  forbidden.
                </p>
                <p>
                  4. Theft of company or user assets, in any form, is strictly
                  prohibited.
                </p>
                <p>
                  5. Impersonating JASMY QUANT QUANTROK’s official
                  administrators is prohibited.
                </p>
                <p>
                  6. Defamation, spreading false information, or engaging in
                  offensive behavior toward JASMY QUANT is not allowed.
                </p>
                <p>
                  7. JASMY QUANT will protect its legal rights, and each user is
                  fully responsible for the behavior of their referrals or
                  subordinates.
                </p>
                <p>
                  8. JASMY QUANT reserves the right to final interpretation of
                  all terms, rules, and content.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>JASMY QUANT Financial Security Tips:</p>
                <p>
                  1. Never share your account credentials (account number or
                  password) with strangers to prevent theft.
                </p>
                <p>
                  2. Each user is assigned a unique, exclusive JASMY QUANT
                  recharge address—always transfer only to your own address.
                </p>
                <p>
                  3. Beware of any unofficial or fraudulent recharge addresses
                  provided by impersonators claiming to be JASMY QUANT managers.
                </p>
                <p>
                  4. Withdrawals must be made only to a cryptocurrency wallet
                  that is real-name verified and owned by the account holder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToNote;
