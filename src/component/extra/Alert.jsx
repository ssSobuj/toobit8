import React from "react";

const Alert = ({ errorAlert, errorMessage, successAlert, successMessage }) => {
  return (
    <div>
      {errorAlert && (
        <div
          id="copyAlert"
          className="van-toast van-toast--middle van-toast--fail"
          style={{ zIndex: "2057" }}
        >
          <i className="van-icon van-icon-close van-toast__icon"></i>
          <div className="van-toast__text">{errorMessage}</div>
        </div>
      )}
      {successAlert && (
        <div
          id="copyAlert"
          className="van-toast van-toast--middle van-toast--success"
          style={{ zIndex: "2057" }}
        >
          <i className="van-icon van-icon-success van-toast__icon"></i>
          <div className="van-toast__text">{successMessage}</div>
        </div>
      )}
    </div>
  );
};

export default Alert;
