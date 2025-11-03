
import React, { useEffect, useState } from "react";
import noticeImg from "../../../assets/images/announcemodl_image.png";

const HomeNoticePopup = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Show modal on first load
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div style={{ position: "fixed", zIndex: 9999, inset: 0, background: "rgba(24,26,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-xs w-full p-3 sm:max-w-sm sm:p-4 relative transform transition-all scale-100" style={{ minWidth: 320 }}>
        <button
          style={{ position: 'absolute', top: 12, right: 12, zIndex: 2, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          onClick={() => setShow(false)}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-4 h-4" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </button>
        <div className="flex items-center gap-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-5 h-5 text-purple-600" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
          <h2 id="notice-popup" className="text-sm font-semibold text-gray-800 dark:text-gray-100">NOTICE</h2>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Don’t forget to reinvest your earnings and grow your wealth every day!</p>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">With compound interest, your money works for you - earning not only on your initial investment but also on your profits.</p>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Maximize your potential and watch your earnings multiply.</p>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Don’t miss this opportunity - let’s compound and grow together!</p>
        <div className="flex justify-center mb-3 sm:mb-4">
          <img alt="Grow Wealth" className="w-32 sm:w-40 object-contain" src={noticeImg} />
        </div>
        <div className="flex justify-end gap-2">
          <button className="text-xs px-2 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition" onClick={() => setShow(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default HomeNoticePopup;
