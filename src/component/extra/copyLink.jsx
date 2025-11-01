import React, { useState } from "react";

// css import
import "../../assets/css/style.css";

const InviteLink = ({ code, copyText, handleCopyAlert }) => {
  const inviteLink = code;
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
    handleCopyAlert();
  };
  return (

    <div data-v-377ee6c6="" className="mt-2px flex items-center">
      <span data-v-377ee6c6="" className="link text-15px" title={inviteLink}>{inviteLink}</span>
      <div data-v-377ee6c6="" className="btn ml-10px" onClick={copyToClipboard}>{copyText}</div>
    </div>
  );
};

export default InviteLink;
