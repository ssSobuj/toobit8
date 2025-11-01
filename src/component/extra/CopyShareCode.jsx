import React, { useState } from "react";

const CopyShareCode = ({ code, copyText, handleCopyAlert }) => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(code)
            .then(() => {
                setAlertMessage("Copied Successfully");
                setAlertVisible(true);
                setTimeout(() => setAlertVisible(false), 2000); // 2 seconds
                handleCopyAlert?.("success");
            })
            .catch((err) => {
                setAlertMessage("Failed to copy");
                setAlertVisible(true);
                setTimeout(() => setAlertVisible(false), 2000);
                console.error("Failed to copy: ", err);
                handleCopyAlert?.("error");
            });
    };

    return (
        <div data-v-377ee6c6="" className="flex items-center">
            <span data-v-377ee6c6="" className="font-anton text-28px">{code}</span>
            <div data-v-377ee6c6="" className="btn ml-10px cursor-pointer" onClick={copyToClipboard}>
                {copyText}
            </div>
          
        </div>
    );
};

export default CopyShareCode;
