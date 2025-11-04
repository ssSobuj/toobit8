import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"; // Optional, if using Axios

const Navbar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/checkdepo");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data immediately when the component mounts
    fetchData();
  }, []);

  return (
    <footer
      data-v-f5703ed9
      className="tab-bar-wrap tab-bar-wrap-30 fixed bottom-0 z-2"
      style={{ "--e0f11642": "20%" }}
    >
      <div className="tab-bar">
        <NavLink to="/home" className="tab-item">
          <div data-v-28e06567="" className="tab-item-inner">
            <div className="tab-item-icon i-mingcute:home-6-fill c-$text-gray"></div>
            <div data-v-28e06567="" className="tab-item-label">
              {t("home")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/works" className="tab-item">
          <div data-v-28e06567="" className="tab-item-inner">
            <div className="tab-item-icon i-mingcute:task-fill c-$text-gray"></div>
            <div data-v-28e06567="" className="tab-item-label">
              {t("Income")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/invitation-rewards" className="tab-item">
          <div data-v-28e06567="" className="tab-item-inner">
            <div className="tab-item-icon i-material-symbols:group-work c-$text-gray"></div>
            <div data-v-28e06567="" className="tab-item-label">
              {t("invest")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/share" className="tab-item">
          <div data-v-28e06567="" className="tab-item-inner">
            <div className="tab-item-icon i-icon-park-solid:vip-one c-$text-gray"></div>
            <div data-v-28e06567="" className="tab-item-label">
              {t("share_friends")}
            </div>
          </div>
        </NavLink>
        <NavLink to="/me" className="tab-item">
          <div data-v-28e06567="" className="tab-item-inner">
            <div className="tab-item-icon i-ic:baseline-account-balance c-$text-gray"></div>
            <div data-v-28e06567="" className="tab-item-label">
              {t("mine")}
            </div>
          </div>
        </NavLink>
      </div>
    </footer>
  );
};

export default Navbar;
