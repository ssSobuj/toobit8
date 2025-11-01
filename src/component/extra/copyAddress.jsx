import React, { useState } from "react";

// css import
import "../../assets/css/style.css";
import { useTranslation } from "react-i18next";

const copyAddress = ({ address, handleCopyClick }) => {
  const inviteLink = address;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        setAlertMessage("Copied Successfully");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000); // Hide alert after 2 seconds
      })
      .catch((err) => {
        setAlertMessage("Failed to copy");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2000);
        console.error("Failed to copy: ", err);
      });
    handleCopyClick();
  };
  const { t } = useTranslation();

  return (
    <div>
      <div data-v-1a8f829d="" className="copy-address base-input">
        <span data-v-1a8f829d="" className=":uno: text-13px">{inviteLink || "TWeQc9iMobGQeL9FuycLJXxykGmrHZTrnt"}</span>
      </div>
      <div data-v-1a8f829d="" className="btn cp" onClick={copyToClipboard}>
        <span data-v-1a8f829d="">{t("copy")}</span>
      </div>
    </div>
  );
};

export default copyAddress;
