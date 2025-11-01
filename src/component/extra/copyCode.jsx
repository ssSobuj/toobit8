import React, { useState } from "react";

// css import
import "../../assets/css/style.css";

const InviteCode = ({ code, copyText, handleCopyClick }) => {
  const inviteCode = code;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inviteCode)
      .then(() => {
        setAlertMessage("Copied Successfully");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 100000); // Hide alert after 2 seconds
      })
      .catch((err) => {
        setAlertMessage("Failed to copy");
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 20000);
        console.error("Failed to copy: ", err);
      });
    handleCopyClick();
  };

  return (
    <div data-v-ddf5a790="" className="flex items-center">
      <span data-v-ddf5a790="" className="font-anton text-28px">
        {inviteCode}
      </span>
      <div data-v-ddf5a790="" className="btn ml-10px" onClick={copyToClipboard}>
        {copyText}&gt;&gt;
      </div>
    </div>
  );
};

export default InviteCode;
