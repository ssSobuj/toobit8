import CopyLink from "./extra/copyLink";
import CustomLoader from "./extra/customLoader";
import qrcode from "../assets/images/qrcode.png";
import invitation_code_image from "../assets/images/invitation_code_image.png";
import inviteSideIcon from "../assets/images/invite-sideicon.png"; // Use your actual image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./partial/navbar";
import Header from "./extra/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import SupportLink from "./extra/supportLink";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import axios from "axios";
import QRCode from "qrcode";
import CopyShareCode from "./extra/CopyShareCode";

import "../assets/css/share.css";

const Share = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyAlert = () => {
    setIsCopied(true);
    const timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  };
  const { t } = useTranslation();
  const [data, setData] = useState({});
  const [qrCodeData, setQrCodeData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoader(true); // Show loader during initial data fetch
      try {
        const response = await axios.get("api/team");

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoader(false); // Hide loader after data is fetched
      }
    };

    fetchData();
  }, []);

  const invitationLink = `${window.location.origin}/#/register?ref=${
    data?.user?.invitation_code || "000000"
  }`;
  const encodedLink = encodeURIComponent(invitationLink);

  useEffect(() => {
    // Generate QR code
    QRCode.toDataURL(invitationLink, { errorCorrectionLevel: "L" })
      .then((url) => {
        setQrCodeData(url);
      })
      .catch((err) => {
        console.error("Error generating QR Code", err);
      });
  }, [invitationLink]);
  const [activeTab, setActiveTab] = useState("recharge");
  const [invitedCount, setInvitedCount] = useState(0);

  return (
    <div
      id="app"
      data-v-app=""
      className="a-t-30 no-1"
      style={{ position: "relative" }}
    >
      {/* Invite Side Icon - move here! */}
      <img
        src={inviteSideIcon}
        alt="Invite Side Icon"
        style={{
          position: "absolute",
          right: "0px",
          top: "120px", // adjust as needed
          width: "80px",
          height: "auto",
          // zIndex: 1000,
          margin: 0,
          padding: 0,
          pointerEvents: "none",
        }}
      />
      <div className="van-config-provider">
        <div
          data-v-f5703ed9=""
          className="box-border min-h-full w-full layout-tab-bar px-mg"
        >
          <Header />
          {/* header ends */}
          <div data-v-377ee6c6="" data-v-f5703ed9="" className="team-wrap">
            <div data-v-377ee6c6="" className="team-wrap-content">
              <div data-v-377ee6c6="" className="share-card">
                <div
                  data-v-377ee6c6=""
                  className="h-170px relative z-1 w-full flex justify-center items-center"
                >
                  <div
                    data-v-377ee6c6=""
                    className="flex justify-center mt-10px"
                  >
                    <div
                      data-v-377ee6c6=""
                      className=":uno: h-164px w-164px flex items-center justify-center border border-$border-color bg-white backdrop-filter backdrop-blur-4px rd-10px shadow-$box-shadow"
                    >
                      <div
                        data-v-377ee6c6=""
                        className="inviteQrcode"
                        title={invitationLink}
                      >
                        <img src={qrCodeData} style={{ maxWidth: "140px" }} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* share qr code ends */}
                <div
                  data-v-377ee6c6=""
                  className="relative z-1 mt-20px text-white"
                >
                  <div data-v-377ee6c6="">{t("build_team_rewards")}</div>
                </div>
                {/* ends */}
                <div data-v-377ee6c6="" className="relative z-1 mt-$mg">
                  <div data-v-377ee6c6="" className="text-13px">
                    {" "}
                    {t("my_invitation_code")}
                  </div>
                  <CopyShareCode
                    code={data?.user?.invitation_code || "000000"}
                    copyText={t("copy")}
                    handleCopyAlert={handleCopyAlert}
                  />
                  <div data-v-377ee6c6="" className="mt-5px text-13px lh-15px">
                    {t("invite_link")}
                  </div>
                  <CopyLink
                    code={invitationLink}
                    copyText={t("copy")}
                    handleCopyAlert={handleCopyAlert}
                  ></CopyLink>
                </div>
                {/* ends  */}
                <div
                  data-v-377ee6c6=""
                  role="separator"
                  className="van-divider van-divider--hairline mt-20px z-1 relative"
                ></div>
                {/* ends */}
                <div
                  data-v-377ee6c6=""
                  className="text-center font-bold mb-10px mt-20px text-white z-1 relative"
                >
                  {t("share_to")}
                </div>

                <div className="flex justify-center relative z-1">
                  {/* Twitter/X */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodedLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10px w-40px h-40px flex items-center justify-center rd-full text-$primary border border-solid border-$primary bg-$bg-card2"
                  >
                    <div className="i-line-md:twitter-x w-20px h-20px"></div>
                  </a>

                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10px w-40px h-40px flex items-center justify-center rd-full text-$primary border border-solid border-$primary bg-$bg-card2"
                  >
                    <div className="i-line-md:facebook w-20px h-20px"></div>
                  </a>

                  {/* Telegram */}
                  <a
                    href={`https://t.me/share/url?url=${encodedLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10px w-40px h-40px flex items-center justify-center rd-full text-$primary border border-solid border-$primary bg-$bg-card2"
                  >
                    <div className="i-line-md:telegram w-20px h-20px"></div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10px w-40px h-40px flex items-center justify-center rd-full text-$primary border border-solid border-$primary bg-$bg-card2"
                  >
                    <div className="i-line-md:linkedin w-20px h-20px"></div>
                  </a>

                  {/* LINE */}
                  <a
                    href={`https://social-plugins.line.me/lineit/share?url=${encodedLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10px w-40px h-40px flex items-center justify-center rd-full text-$primary border border-solid border-$primary bg-$bg-card2"
                  >
                    <div className="i-lineicons:line w-20px h-20px"></div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/?text=${encodedLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10px w-40px h-40px flex items-center justify-center rd-full text-$primary border border-solid border-$primary bg-$bg-card2"
                  >
                    <div className="i-mingcute:whatsapp-fill w-20px h-20px"></div>
                  </a>
                </div>

                {/* ends */}
              </div>
              {/* share card ends  */}
              <Link
                to="/team"
                data-v-377ee6c6=""
                className=":uno: base-main-btn flex items-center justify-center z-1 relative z-1 relative"
              >
                <div className="base-main-btn-content">
                  {t("view_the_team")}
                </div>
              </Link>
            </div>
            {/* team-wrap-content ends */}
            <div className="flex items-center w-full px-11px pt-16px pb-22px bg-$bg-card">
              <div
                className={`mr-30px font-bold text-lg cursor-pointer text-white ${
                  activeTab === "recharge"
                    ? "border-b-2px border-solid border-$primary text-$primary!"
                    : ""
                }`}
                onClick={() => setActiveTab("recharge")}
              >
                {t("recharge")}
              </div>
              <div
                className={`mr-30px font-bold text-lg cursor-pointer text-white  ${
                  activeTab === "dailyCommisions"
                    ? "border-b-2px border-solid border-$primary text-$primary!"
                    : ""
                }`}
                onClick={() => setActiveTab("dailyCommisions")}
              >
                {t("daily_commissions")}
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-10px">
              {activeTab === "recharge" && (
                <div className="p-$mg bg-$bg-card text-white" >
                  {t("invited_friends_recharge_rebates")}
                  <div className="reward_list">
                    <div className="reward_box :uno: container-card relative rd-$card-radius c-$btn-text">
                      <table className="ui-table">
                        <thead>
                          <tr>
                            <th>{t("level")}</th>
                            <th>{t("recharge_rebate")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{t("level_1")}</td>
                            <td>7%</td>
                          </tr>
                          <tr>
                            <td>{t("level_2")}</td>
                            <td>2%</td>
                          </tr>
                          <tr>
                            <td>{t("level_3")}</td>
                            <td>1%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "dailyCommisions" && (
                <div className="p-$mg bg-$bg-card text-white">
                  {t("invited_friends_daily_commissions")}
                  <div className="reward_list">
                    <div className="reward_box :uno: container-card relative rd-$card-radius c-$btn-text">
                      <table className="ui-table">
                        <thead>
                          <tr>
                            <th>{t("level")}</th>
                            <th>{t("quantify_rebate")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{t("level_1")}</td>
                            <td>10%</td>
                          </tr>
                          <tr>
                            <td>{t("level_2")}</td>
                            <td>5%</td>
                          </tr>
                          <tr>
                            <td>{t("level_3")}</td>
                            <td>3%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* ends */}
          </div>
          <Navbar></Navbar>
        </div>
      </div>

      {/* layout-tab-bar end */}
      <CustomLoader />
      <SupportLink />
      <div
        id="copyAlert"
        className={`van-toast van-toast--middle van-toast--success ${
          isCopied ? "d-flex" : "d-none"
        }`}
        style={{ zIndex: "2057" }}
      >
        <i className="van-icon van-icon-success van-toast__icon"></i>
        <div className="van-toast__text">{t("copy_successfully")}</div>
      </div>
      <div
        role="dialog"
        tabindex="0"
        className="van-popup van-popup--center van-toast van-toast--middle van-toast--text"
        style={
          isCopied ? { zIndex: "2015", display: "flex" } : { display: "none" }
        }
      >
        <div class="van-toast__text">{t("copy_successfully")}</div>
      </div>
      {/* copy alert ends */}
    </div>
  );
};

export default Share;
