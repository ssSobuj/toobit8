import React from "react";
import SingleHeader from "./extra/SingleHeader";
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo-text.webp";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";

const TermsOfUse = () => {
  const { t } = useTranslation();
  return (
    <div id="app" data-v-app="" className="a-t-30 no-1">
      <div className="van-config-provider" style={{ minHeight: "100vh" }}>
        <div className="box-border min-h-full w-full pt-45px">
          <SingleHeader pageName={"Privacy Policy"} />
          <div className="px-3 pb-30px">
            <div
              className="container-card relative rd-$card-radius p-$mg c-$btn-text mt-4"
              style={{ direction: "ltr" }}
            >
              <div className="rich-text text-base">
                <h2>
                  <strong>Privacy Policy</strong>
                </h2>
                <p>
                  <em>Effective Date: September 21, 2025</em>
                </p>

                <h3>
                  <strong>1. Introduction</strong>
                </h3>
                <p>
                  Toobit for Toobit Ltd. (<strong>“Toobit”</strong>, “we,” “us,”
                  or “our”) is committed to safeguarding your privacy and
                  personal information. This Privacy Policy describes in detail
                  the types of data we collect, how we use it, how we protect
                  it, and your rights regarding your data when you use our
                  websites, mobile apps, and other related services
                  (collectively, the “Services”). By using our Services, you
                  agree to the practices set out in this policy.
                </p>

                <h3>
                  <strong>2. Information We Collect</strong>
                </h3>

                <p>
                  <strong>Information You Provide:</strong>
                </p>
                <ul>
                  <li>
                    Contact details such as your name, email address, and phone
                    number.
                  </li>
                  <li>Login credentials including username and password.</li>
                  <li>
                    Payment information, billing details, and transaction
                    history.
                  </li>
                  <li>
                    Account settings, communication preferences, and profile
                    details.
                  </li>
                  <li>Content you upload, share, or create on our platform.</li>
                </ul>

                <p>
                  <strong>Information We Collect Automatically:</strong>
                </p>
                <ul>
                  <li>
                    Technical information such as IP address, device
                    identifiers, browser type, and operating system.
                  </li>
                  <li>
                    Usage data including log-in times, features accessed, videos
                    watched, music played, and general interaction patterns.
                  </li>
                  <li>
                    Location information if you allow access through your
                    device.
                  </li>
                  <li>
                    Cookies, pixels, and tracking technologies used to improve
                    functionality and measure performance.
                  </li>
                </ul>

                <p>
                  <strong>Information From Other Sources:</strong>
                </p>
                <ul>
                  <li>
                    Verification data, analytics, or partner-provided
                    information that helps us ensure your identity and deliver
                    services securely.
                  </li>
                </ul>

                <h3>
                  <strong>3. How We Use Your Information</strong>
                </h3>
                <p>
                  Your information is used for legitimate business purposes,
                  including:
                </p>
                <ul>
                  <li>Managing and verifying your account.</li>
                  <li>
                    Processing payments, subscriptions, and withdrawals
                    securely.
                  </li>
                  <li>
                    Providing customer support and responding to your requests.
                  </li>
                  <li>
                    Protecting against fraud, abuse, or unauthorized activity.
                  </li>
                  <li>
                    Enhancing the functionality and personalization of our
                    Services.
                  </li>
                  <li>
                    Communicating updates, promotions, and service notices (with
                    your consent where required).
                  </li>
                  <li>
                    Complying with applicable laws and regulatory requirements.
                  </li>
                </ul>

                <h3>
                  <strong>4. How We Share Your Information</strong>
                </h3>
                <p>
                  We do not sell your information. However, we may share it in
                  limited circumstances:
                </p>
                <ul>
                  <li>
                    With service providers (payment processors, hosting
                    partners, analytics providers) who help us operate
                    efficiently.
                  </li>
                  <li>
                    With financial institutions or payment networks to process
                    authorized transactions.
                  </li>
                  <li>
                    With law enforcement or government authorities where legally
                    required.
                  </li>
                  <li>
                    With affiliates or trusted partners within Toobit for Toobit
                    Ltd. group structures.
                  </li>
                  <li>
                    In the case of a business restructuring, merger, or
                    acquisition.
                  </li>
                </ul>

                <h3>
                  <strong>5. Data Retention and Security</strong>
                </h3>
                <p>
                  We retain your personal data only for as long as it is
                  necessary for the purposes outlined above or as legally
                  required. We employ strict organizational, technical, and
                  administrative measures to safeguard data from unauthorized
                  access, alteration, disclosure, or destruction. Despite these
                  measures, no system is entirely foolproof, and absolute
                  security cannot be guaranteed.
                </p>

                <h3>
                  <strong>6. International Data Transfers</strong>
                </h3>
                <p>
                  Your data may be transferred to and stored in countries
                  outside your country of residence. Where international
                  transfers occur, we implement legal safeguards such as
                  contractual clauses and security protocols to ensure your
                  information remains protected.
                </p>

                <h3>
                  <strong>7. Your Rights</strong>
                </h3>
                <p>
                  You have rights over your personal data, including the ability
                  to:
                </p>
                <ul>
                  <li>
                    <strong>Access:</strong> Request details about the
                    information we hold on you.
                  </li>
                  <li>
                    <strong>Correct:</strong> Ask for inaccurate or incomplete
                    data to be updated.
                  </li>
                  <li>
                    <strong>Delete:</strong> Request that we erase your personal
                    data where legally permissible.
                  </li>
                  <li>
                    <strong>Restrict:</strong> Limit how your information is
                    used in certain circumstances.
                  </li>
                  <li>
                    <strong>Portability:</strong> Receive your information in a
                    machine-readable format to transfer elsewhere.
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Revoke permissions you
                    previously gave, such as for marketing.
                  </li>
                </ul>
                <p>
                  To exercise these rights, email us at:{" "}
                  <a href="mailto:samadkhan485p@gmail.com">
                    samadkhan485p@gmail.com
                  </a>
                  .
                </p>

                <h3>
                  <strong>8. Children’s Privacy</strong>
                </h3>
                <p>
                  Our Services are not intended for children under 13 years old.
                  We do not knowingly collect personal data from children. If
                  such information is discovered, we will delete it immediately.
                </p>

                <h3>
                  <strong>9. Updates to This Privacy Policy</strong>
                </h3>
                <p>
                  We may update this Privacy Policy periodically to reflect
                  legal, technical, or business changes. When updates are
                  significant, we will notify you directly or provide clear
                  notice within our Services. Your continued use of the Services
                  after updates signifies your acceptance of the revised terms.
                </p>

                <h3>
                  <strong>10. Contact Us</strong>
                </h3>
                <p>
                  If you have questions, concerns, or complaints about this
                  Privacy Policy or how your information is handled, please
                  contact us at:
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:samadkhan485p@gmail.com">
                    samadkhan485p@gmail.com
                  </a>
                  <br />
                  <strong>Toobit for Toobit LTD</strong>
                </p>
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

export default TermsOfUse;
