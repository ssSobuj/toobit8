import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const SingleHeader = ({ pageName }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <div data-v-923868a9 data-v-f5703ed9 className="navigation" style={{}}>
      <div data-v-923868a9 className="navigation-content">
        <div data-v-923868a9 className="h-full flex cursor-pointer items-center justify-between">
          <div data-v-923868a9 className="icon i-material-symbols-arrow-back-ios-new-rounded" onClick={handleBackClick}></div>
          <div data-v-923868a9>{pageName}</div>
          <div data-v-923868a9 id="navigation-right">
            <span data-v-923868a9 className="opacity-0"> h </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHeader;
