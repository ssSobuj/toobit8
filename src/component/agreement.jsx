import { useNavigate } from "react-router-dom";
import SupportLink from "./extra/supportLink";
import CustomLoader from "./extra/customLoader";
import { useTranslation } from "react-i18next";

const Agreement = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { t } = useTranslation();
  return (
    <div
      id="app"
      style={{ fontFamily: "'Segoe UI' Tahoma, sans-serif", fontSize: "75%" }}
    >
      <div className="layout-container page-guide theme-white">
        <header className="layout-header">
          <div className="van-nav-bar van-hairline--bottom">
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left" onClick={goBack}>
                <i className="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
                <span className="van-nav-bar__text">{t("Agreement")}</span>
              </div>
              <div className="van-nav-bar__title van-ellipsis"></div>
            </div>
          </div>
        </header>
        {/* Header ends */}
        <main className="layout-body">
          <div className="layout-main">
            <div className="iosPage">
              <div>
                <div className="stepBox">
                  <div className="ci">
                    <div className="outnnerCircle">
                      <span></span>
                    </div>
                    <div className="minLine"></div>
                  </div>
                </div>

                <div className="stepBox">
                  <div className="ci">
                    <div className="outnnerCircle">
                      <span></span>
                    </div>
                    <div className="minLine"></div>
                  </div>
                  <div className="l">
                    <p className="step">
                      <span className="stepTitle">{t("user_agreement")}</span>
                    </p>
                    <div className="tip">
                      <ul>
                        <li>
                          <p>
                            <span
                              style={{ color: "#ff6600,", fontSize: "24px" }}
                            >
                              <li>
                                1.2 Once the user completes the registration, it
                                is deemed that the user allows the platform to
                                send platform-related information to them
                                through SMS, email, APP/server push or other
                                methods.
                              </li>
                            </span>
                            <span
                              style={{ color: "#ff6600,", fontSize: "24px" }}
                            >
                              <li>
                                1.3 Users should ensure that the necessary
                                information such as email address provided when
                                completing the above registration (or changing
                                registration) is true, accurate, and valid; if
                                there is any change in such information, the
                                user should update the information through the
                                platform within three days. If the platform or
                                other users suffer losses due to false or
                                invalid information provided by the user, the
                                user shall bear full responsibility.
                              </li>
                            </span>
                            <span
                              style={{ color: "#ff6600,", fontSize: "24px" }}
                            >
                              <li>
                                1.4 Users should keep their usernames and
                                passwords properly and shall not give, transfer,
                                sell or lend them to others except with the
                                prior written consent of the platform or as
                                otherwise agreed in this agreement; if the user
                                discovers his or her username If your password
                                is used by others, you should notify the
                                platform immediately to avoid losses or
                                expansion of losses. The user is unable to use
                                the platform normally due to network attacks,
                                improper storage of user names and passwords,
                                transfer or lending of user names and passwords,
                                failure to perform notification obligations
                                under this agreement and other related
                                agreements, or other non-platform reasons, or
                                The user shall be solely responsible for any
                                losses suffered, and the platform shall not bear
                                any responsibility.
                              </li>
                            </span>
                            <span
                              style={{ color: "#ff6600,", fontSize: "24px" }}
                            >
                              <li>
                                1.5 Users need to confirm on their own that
                                before starting to register to use the platform,
                                they should have the civil capacity appropriate
                                to their behavior as stipulated in the laws of
                                the United States of America. If the user does
                                not have the aforementioned civil capacity
                                appropriate to the user's behavior, his or her
                                guardian shall bear all legal consequences
                                arising from the user's behavior in accordance
                                with the law (minors should use the platform
                                under the supervision and guidance of their
                                guardian).
                              </li>
                            </span>
                            <span
                              style={{ color: "#ff6600,", fontSize: "24px" }}
                            >
                              <li>
                                1.6 The account registered by the user is set up
                                and kept by the user himself. The platform will
                                not actively ask the user to provide his account
                                password at any time. The platform is not
                                responsible for the losses and consequences
                                caused by the user's active disclosure of the
                                user's account or by others' attacks, fraud,
                                etc. The user shall recover compensation from
                                the infringer through judicial, administrative
                                and other relief channels.
                                <br />
                                1.7 If the following circumstances occur, the
                                platform has the right to withdraw the account
                                registered by the user, the user will no longer
                                be able to log in to the platform, and the
                                corresponding service will be terminated at the
                                same time:
                                <br />
                                <br />
                                (1) It is found that it is not actually used by
                                the registered user;
                                <br />
                                <br />
                                (2) Other circumstances deemed necessary by the
                                platform.
                                <br />
                                <br />
                                1.8 Once the user completes registration, he or
                                she is deemed to have fully understood, accepted
                                and agreed to abide by all the contents of this
                                Agreement and to be subject to the relevant
                                terms of this Agreement. The platform has the
                                right to modify the agreement in accordance with
                                laws, regulations, policies and actual operating
                                conditions, and announce it to users. Once the
                                revised agreement terms are announced by the
                                platform party, they will replace the original
                                terms of this agreement and constitute the
                                entire and latest agreement between the user and
                                the platform party regarding this agreement.
                                Users can check the latest agreement terms at
                                any time in the platform application. If the
                                user does not accept the latest modified terms
                                of the agreement by the platform, he or she may
                                choose to stop using the platform and cancel his
                                or her account. If the user chooses to continue
                                usingplatform, it shall be deemed that the user
                                fully understands, accepts and agrees to abide
                                by the latest terms of the agreement as modified
                                by the platform. The user acknowledges and
                                acknowledges that he has fully understood and
                                understood the relevant contents of this
                                agreement, and does not have any major
                                misunderstandings about this agreement and
                                related contents; at the same time, he
                                acknowledges that the contents of this agreement
                                are not unfair, and that the user and the
                                platform are on an equal footing in the
                                agreement. , users have the right to freely
                                choose whether to accept the agreement or not.
                                <br />
                                <br />
                                <li>Article 2 Service Content</li>
                                <br />
                                <br />
                                2.1 The platform provides users with services
                                for publishing, viewing, and receiving
                                graphic/audio/video information or other files,
                                or for delayed/real-time communication with
                                other users.
                                <br />
                                <br />
                                2.2 As the designer/developer/owner/operator of
                                the platform software, the platform party has
                                the right to update and adjust the platform
                                software from time to time. As long as the user
                                is still a registered user of the platform, it
                                will be deemed that he agrees to any updates
                                made by the platform party. and adjustments.
                                <br />
                                <br />
                                2.3 The platform only provides users with
                                technical support for publishing, viewing, and
                                receiving graphic/audio/video information or
                                other files, or for delayed/real-time
                                communication with other users. Delayed
                                confirmation and delay caused by the user’s own
                                reasons The platform does not assume any
                                responsibility for replies, failure to save on
                                time, operational errors, etc.
                                <br />
                                <br />
                                2.4 Users should know that the platform only
                                provides technical support for behaviors during
                                the use of platform software. The aforementioned
                                behaviors are the user’s own behaviors and have
                                nothing to do with the platform.
                                <br />
                                <br /> 2.5 Users should be aware that the use of
                                platform software may involve the participation
                                of third-party service software (including
                                WhatsApp, Telegram, etc.). Information provision
                                errors, delays in information provision, and
                                information leakage caused by the aforementioned
                                third-party service software, Connection errors,
                                server failures and other situations have
                                nothing to do with the platform.
                                <br />
                                <br />
                                <li>
                                  Article 3 Rights and Obligations of Each Party
                                </li>
                                <br />
                                <br />
                                3.1 User’s rights and obligations
                                <br />
                                <br />
                                3.1.1 Users shall abide by relevant Chinese laws
                                and regulations and the terms of this agreement.
                                <br />
                                <br />
                                3.1.2 All types of information provided by users
                                to the platform should be true, accurate, and
                                complete; all types of information published by
                                users on the platform (including but not limited
                                to graphics, audio, video, etc.) should comply
                                with the relevant laws and regulations of the
                                United States of America. ; Delayed/real-time
                                communication activities conducted by users
                                through the platform should comply with the
                                relevant laws and regulations of the United
                                States of America. If the platform discovers
                                that a user has violated the foregoing
                                agreement, the information provided/released by
                                the user to the platform will no longer be
                                subject to the privacy protection provisions of
                                this contract. The platform has the right to
                                make public, report to government departments,
                                or directly pursue legal liability against the
                                user.
                                <br /> <br />
                                The platform has the right to verify the
                                information provided/published by the user at
                                any time. Any liability and loss caused by the
                                user providing false or incomplete information
                                shall be borne by the user.
                                <br />
                                <br />
                                3.1.3 If a user uses the platform to publish
                                content that is false, infringes on other
                                people's privacy, infringes on other people's
                                intellectual property rights, insults others,
                                spreads rumors and slanders, or other content
                                that violates laws, regulations or public order
                                and good morals, thereby causing damage to the
                                platform, other users or third parties, the
                                aforementioned The user bears all legal
                                consequences and liability for compensation.
                                <br />
                                <br />
                                3.1.4 Users shall not engage in any behavior
                                that damages the rights and interests of the
                                platform party. If a user damages the rights and
                                interests of the platform party, the platform
                                party has the right to require the user to bear
                                liability for compensation. If the circumstances
                                are serious, the platform party will reserve the
                                right to pursue legal liability.
                                <br />
                                <br />
                                3.1.5 The platform party temporarily provides
                                users with the services stipulated in this
                                agreement free of charge, but the platform party
                                reserves the right to charge fees to users in
                                the future. Any fees and payments incurred
                                between users have nothing to do with the
                                platform.
                                <br />
                                <br />
                                3.2 Rights and obligations of the platform party
                                <br />
                                <br />
                                3.2.1 Notify users in a timely manner after
                                changes, updates, and optimizations to the
                                platform.
                                <br />
                                <br />
                                3.2.2 The platform cannot guarantee that the
                                information it provides is free of any errors,
                                defects, malware or viruses. The Platform is not
                                responsible for any damages resulting from the
                                use of (or inability to use) the Platform
                                (unless such damage is caused by the Platform's
                                intent or gross negligence). In addition, we are
                                not liable for any damages resulting from the
                                use (or inability to use) electronic means of
                                communication with the Platform, including but
                                not limited to failure or delay in the
                                transmission of electronic communications,
                                interception of electronic communications by
                                third parties or computer programs used for
                                electronic communications, or Manipulation, and
                                diseaseThe platform is not responsible for any
                                damage caused by poisonous transmission.
                                <br /> <br />
                                <li>Article 4 Other Liability Agreements</li>
                                <br /> <br />
                                4.1 If the platform party fails to provide
                                services as agreed due to force majeure
                                (referring to objective circumstances that
                                cannot be foreseen, avoided and cannot be
                                overcome when stipulating this agreement), the
                                platform party will not be held responsible.
                                <br />
                                <br />
                                4.2 For losses caused by third parties other
                                than the parties to the agreement during the
                                service process, the third party shall bear the
                                legal consequences and liability for
                                compensation.
                                <br />
                                <br />
                                <li>Article 5 User Information</li>
                                <br />
                                <br />
                                5.1 User information includes user personal
                                information and user non-personal information.
                                <br />
                                <br />
                                5.2 User personal information includes but is
                                not limited to the following information: user’s
                                real name, gender, occupation,
                                employment/school, avatar, mobile phone number,
                                IP address, etc.
                                <br />
                                <br />
                                5.3 User non-personal information includes but
                                is not limited to the following information: All
                                information outside the scope of user personal
                                information mentioned in Article 5.2 is general
                                information and does not belong to user personal
                                information; including but not limited to user's
                                request for platform services All recorded
                                information on the platform's server is
                                reflected in its operating status, usage
                                records, usage habits, etc.
                                <br />
                                <br />
                                5.4 Important note: In order to provide
                                customers with the services described in this
                                agreement, the platform may reasonably use user
                                personal information and non-user personal
                                information. Once the user registers, logs in,
                                and uses the platform, it will be deemed that
                                the user fully understands, agrees, and accepts
                                the platform's reasonable use of user
                                information through methods including but not
                                limited to collection, statistics, analysis,
                                use, etc., without any other expression of
                                intention. In order to fully provide users with
                                services including but not limited to the
                                services described in this agreement, the
                                platform may require users to upload user
                                information (including but not limited to
                                address books, etc.). Once the user chooses to
                                upload user information, it will be deemed that
                                the user fully understands and Agree and accept
                                that the platform party will read and reasonably
                                use user information for the purpose of
                                providing services to users.
                                <br />
                                <br />
                                5.5 The user acknowledges that he has fully
                                understood that the purpose of the platform
                                party's use of user information is to provide
                                users with services including the services
                                described in this agreement or services that may
                                be added in the future. The platform party's use
                                of user information includes but is not limited
                                to: collecting, Statistics, analysis, commercial
                                use, etc.; the scope of the platform’s use of
                                user information includes but is not limited to
                                the information defined in Articles 5.2, 5.3,
                                and 5.4 of this Article, etc.
                                <br />
                                <br />
                                5.6 Users can stop using the platform and no
                                longer provide user information to the platform.
                                However, the platform does not assume the
                                responsibility of actively deleting or
                                destroying user information that has been agreed
                                to be used by the platform before, and the
                                platform still has the right to use such user
                                information.
                                <br />
                                <br />
                                5.7 Unless otherwise specifically stated by the
                                user, the platform does not need to pay any fees
                                to the user for the use of user information, and
                                based on the user's agreement to this agreement,
                                there is no need to obtain additional
                                authorization from the user.
                                <br />
                                <br />
                                5.8 The platform respects the legitimate rights
                                of users and will not collect or use user
                                information in a manner that violates laws,
                                administrative regulations and this agreement.
                                <br />
                                <br />
                                5.9 The platform party has nothing to do with
                                the leakage of user information that is not
                                caused by the platform party's violation of this
                                agreement. No user is allowed to use, leak, or
                                disseminate the user information of other users
                                obtained through the platform; if a user commits
                                the aforementioned behavior, the platform does
                                not assume any responsibility, and the
                                aforementioned infringing user shall bear full
                                responsibility. Any platform party or third
                                party other than the user may not use, leak, or
                                disseminate other users’ user information
                                obtained through the platform. If a third party
                                commits the aforementioned behavior, the
                                platform party does not assume any
                                responsibility, and the third party shall bear
                                full responsibility.
                                <br />
                                <br />
                                5.10 The platform does not assume any
                                responsibility for the disclosure of user
                                information in accordance with the requirements
                                of relevant laws and regulations and in
                                accordance with the requirements of relevant
                                government departments/judicial authorities.
                                <br />
                                <br />
                                <li>Article 6 Intellectual Property</li>
                                <br />
                                <br />
                                6.1 The intellectual property rights referred to
                                in this agreement refer to all kinds of
                                intellectual property rights that were valid in
                                the past, currently valid, or will be generated
                                related to the platform services, including but
                                not limited to trademarks, copyrights, computer
                                software, inventions, utility models, Designs
                                and the right to file related applications.
                                <br />
                                <br />
                                6.2 The platform party is the owner of all
                                intellectual property rights related to platform
                                services, and has no right to all intellectual
                                property rights included in the provision of
                                platform services, including...All rights to the
                                text, pictures, graphics, audio and/or video
                                materials, without limitation, are enjoyed and
                                retained complete and independent. Without the
                                consent of the platform party, users and third
                                parties may not directly or indirectly publish,
                                broadcast, rewrite or redistribute the
                                intellectual property rights owned by the
                                platform party or any materials and information
                                provided by the platform party for the purpose
                                of broadcasting or publishing in any media, nor
                                may they Use the aforementioned materials and
                                information for any commercial purposes.
                                <br />
                                <br />
                                6.3 The platform reserves the right to monitor
                                any graphics/audio/videos created by the user
                                and uploaded to the platform, and has the right
                                to take action based on the platform’s
                                independent judgment on any violation of this
                                Agreement or suspected illegality. , illegal
                                content will be deleted. The platform is not
                                responsible for any consequences caused by the
                                deletion of such user works or any losses caused
                                to users.
                                <br />
                                <br />
                                6.4 Intellectual Property Terms shall remain in
                                effect and shall not expire due to the user
                                closing the platform account or stopping the use
                                of platform services.
                                <br />
                                <br />
                                <li>Article 7 Other Disclaimers</li>
                                <br />
                                <br />
                                7.1 All information provided by the platform or
                                users is only provided as it is at the time such
                                information is provided and is for user
                                reference only. The platform does not make any
                                commitment or commitment to the authenticity,
                                accuracy, completeness, applicability, etc. of
                                the aforementioned information. ensure. Users
                                should make their own judgment on the
                                information provided by the platform or other
                                users and bear all risks arising from the use of
                                the aforementioned information, including any
                                reliance or trust on the authenticity, accuracy,
                                completeness or applicability of the
                                information. risk. The platform is not
                                responsible for any losses caused by any
                                behavior of users using information.
                                <br />
                                <br />
                                7.2 For force majeure or reasons that the
                                platform party cannot predict or control
                                (including but not limited to computer viruses
                                or hacker attacks, system instability, improper
                                use of accounts by users, and any other
                                technical, Internet, communication line reasons,
                                etc.) The platform does not assume any
                                responsibility for any losses caused to users or
                                any third party, including but not limited to
                                security issues of user computer information and
                                data, security issues of user personal
                                information, etc.
                                <br />
                                <br />
                                7.3 Users use the platform illegally, in
                                violation of regulations or in violation of this
                                agreement, including but not limited to
                                providing illegal, untrue, improper information,
                                infringing on any legitimate rights and
                                interests of third parties, etc., resulting in
                                losses to the platform or other third parties.
                                For any loss, the user shall bear all legal
                                consequences and liability for damages.
                                <br />
                                <br />
                                7.4 The user fully understands and agrees that
                                in the process of using the platform services,
                                there may be threatening, defamatory,
                                objectionable or illegal content or behavior
                                from any other user, and there may also be
                                harmful content to others. Anonymous,
                                impersonated, or forged information or behaviors
                                that cause infringement of rights (including
                                intellectual property rights). Users must judge
                                the safety and other risks of relevant content,
                                information, and behaviors by themselves, and
                                independently bear the consequences of the above
                                behaviors to the platform and other parties. All
                                legal consequences of damages caused by users or
                                third parties.
                                <br />
                                <br />
                                7.5 The platform party does not make any form of
                                commitment or guarantee, whether explicit or
                                implicit, for all services and content provided
                                by its partners through the platform. The
                                aforementioned commitments or guarantees include
                                but are not limited to: the authenticity,
                                timeliness, suitability for specific purposes,
                                any form of ownership guarantee,
                                non-infringement guarantee, etc. of the services
                                or content provided by third parties through the
                                platform. The platform does not assume any
                                responsibility for any direct, indirect,
                                incidental, special and subsequent damages
                                caused by the aforementioned third-party service
                                content.
                                <br />
                                <br />
                                7.6 While providing information storage space
                                services to users, this platform attaches great
                                importance to the green and healthy Internet
                                environment and the protection of other users’
                                intellectual property rights and other
                                legitimate rights and interests. When uploading
                                and sharing content, users must be careful not
                                to infringe upon the legitimate rights and
                                interests of any individual, enterprise,
                                institution or social group, including but not
                                limited to rights of name, name, reputation,
                                honor, portrait, privacy, intellectual property
                                and other rights, otherwise, users shall bear
                                full legal responsibility for their own actions
                                and any consequences arising therefrom. This
                                platform only provides uploading services for
                                users to share content. This platform does not
                                make any modifications or edits to the content
                                uploaded by users. This platform firmly opposes
                                any violation of the United States of
                                America.Conduct of laws and regulations.
                                <br />
                                <br />
                                7.7 If you believe that the content uploaded by
                                users on this platform (including text,
                                pictures, etc.) infringes upon your legitimate
                                rights and interests, or the content uploaded by
                                users violates relevant laws and regulations,
                                please follow the steps and requirements below
                                to submit relevant Report the material in order
                                to maintain the green environment of the
                                Internet and protect your legitimate rights and
                                interests as much as possible. This platform
                                will comply with relevant laws and regulations
                                based on the materials submitted by the rights
                                holders, and handle them as soon as possible
                                after review and verification. Click the
                                "Report" button and fill in the corresponding
                                information according to the system prompts.
                                Including but not limited to the following:
                                <br />
                                <br />
                                (1) Right holder information
                                <br />
                                <br />
                                (2) Infringing content and requests reported by
                                rights holders: including content requested to
                                be deleted or disconnected and its web page
                                address
                                <br />
                                <br />
                                (3) Proof of rights of the right holder: If
                                intellectual property rights such as copyright,
                                trademark right, patent right, etc. are
                                infringed, the information should be provided
                                including but not limited to the copyright
                                registration certificate, trademark certificate,
                                patent certificate, and the date of the first
                                public publication or release of the work.
                                Certification materials, creative manuscripts,
                                work creation time stamps issued by
                                authoritative organizations, work registration
                                certificates and other ownership certificates
                                that can effectively prove that the right holder
                                has relevant rights; if other legitimate rights
                                and interests such as reputation rights, privacy
                                rights, etc. are infringed, corresponding valid
                                certificates should be provided Proof materials;
                                and a specific list of the alleged infringement
                                and infringement facts. Rights holders should
                                ensure that the information and other relevant
                                materials they provide in the reporting
                                interface are true, legal and valid. All
                                consequences arising from the relevant materials
                                and documents provided by the whistleblower will
                                be borne by the whistleblower. The whistleblower
                                promises to bear and compensate for any losses
                                caused to the platform due to the platform
                                deleting or disconnecting the relevant content
                                based on the whistleblower's notification,
                                including but not limited to the losses caused
                                by the platform's compensation to the person
                                complained or to the user. and damage to the
                                platform’s reputation and goodwill, etc. After
                                receiving the reported information that meets
                                the above requirements, this platform will
                                review it within a reasonable time. If the
                                review is correct, the suspected infringing
                                content will be deleted. If the above conditions
                                are not met, we will reject the reported
                                information and ask you to provide additional
                                corresponding information and materials, but we
                                will not take corresponding measures including
                                deletion or disconnection for the time being.
                                Since the content and complexity of the reported
                                information are different, the cycle required is
                                also different. Please wait patiently.
                                <br />
                                <br />
                                <li>
                                  Article 8 Applicable Law and Dispute
                                  Resolution
                                </li>
                                <br />
                                <br />
                                8.1 The establishment, effectiveness,
                                performance, interpretation of this agreement
                                and any disputes arising from this agreement
                                shall be governed by the relevant laws and
                                regulations of the United States of America.
                                <br />
                                <br />
                                8.2 Any disputes between the user and the
                                platform party related to this agreement shall
                                first be resolved through friendly negotiation.
                                If an agreement cannot be reached through
                                negotiation within thirty days from the date of
                                the dispute, the user agrees to submit the
                                aforementioned dispute to the location of the
                                platform party. proceedings in the courts.
                                <br />
                                <br />
                                8.3 If any provision of this Agreement is wholly
                                or partially invalid or unenforceable for any
                                reason, it will not affect the validity of the
                                other provisions of this Agreement. 8.4 The
                                platform reserves the final right to interpret
                                and modify this Agreement and any terms of this
                                Agreement.
                              </li>
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* main ends */}
      </div>
    </div>
  );
};

export default Agreement;
