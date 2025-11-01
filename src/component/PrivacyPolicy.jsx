import React from "react";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo-text.webp";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full pt-45px"
        >
          <SingleHeader pageName={"Privacy Policy"}></SingleHeader>
          <div className="px-3 pb-30px">
            <div
              data-v-e98dae19=""
              className=":uno: container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
              style={{ direction: "ltr" }}
            >
              <div data-v-e98dae19="" className="rich-text text-base">
                <p>JASMY QUANT’s Privacy Policy</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>1. Introduction</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  Welcome to JASMY QUANT! This Privacy Policy outlines how we
                  collect, use, disclose and protect your personal information
                  when you use our website or services.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>2. Information we collect</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  2.1 Personal information: When you register on our platform,
                  subscribe to our services or use our features, we may collect
                  personal information, including but not limited to your name,
                  email address, contact information and payment information.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  2.2 Financial Information: During the course of trading
                  activities, we may collect financial information, such as
                  transaction history, account balances and other details
                  related to financial transactions.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>3. How we use your information</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  3.1 Providing Services: We use your personal and financial
                  information to provide and improve our trading services,
                  process transactions and provide customer support.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  3.2 Communications: We may use your contact information to
                  send important updates, newsletters and promotional materials.
                  You can opt out of these communications at any time.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  3.3 Analysis and Improvement: We analyze user behavior and
                  preferences to enhance our website, services and user
                  experience.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>4. Information sharing</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  We will not sell, trade or disclose your personal information
                  to third parties without your consent, except as required by
                  law or to fulfill contractual obligations in connection with
                  transactional activities.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>5. Data security</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  We implement security measures to protect your personal and
                  financial information from unauthorized access, disclosure,
                  alteration and destruction. However, no data transmission over
                  the Internet or storage system is 100% secure. Please keep
                  your login credentials secure.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>6. Cookies and similar technologies</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  We use cookies and similar technologies to enhance your
                  experience, analyze usage patterns and personalize content.
                  You can manage your cookie preferences through your browser
                  settings.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>7. Third-party links</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of those
                  websites. Please review the third party's privacy policy
                  before providing any personal information.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>8. Children’s Privacy</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  JASMY QUANT is not intended for individuals under the age of
                  18. We do not knowingly collect or store information from
                  individuals under the age of 18.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>9. Changes to this Privacy Policy</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  We reserve the right to regularly update this privacy policy.
                  We will notify you of significant changes by email or through
                  a prominent notice on our website.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>10. Contact us</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us glgrok.ai@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomLoader></CustomLoader>
      <SupportLink></SupportLink>
    </div>
  );
};

export default PrivacyPolicy;
