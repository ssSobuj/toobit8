// Loader.js
import "../../assets/css/custom_loader.css";

const CustomLoader = () => {
  return (
    <div
      role="dialog"
      tabIndex={0}
      className="van-popup van-popup--center van-toast van-toast--middle van-toast--loading"
      style={{ zIndex: 2003, display: "flex" }}
    >
      <div
        className="van-loading van-loading--spinner van-toast__loading"
        aria-live="polite"
        aria-busy="true"
      >
        <span className="van-loading__spinner van-loading__spinner--spinner">
          <i className="van-loading__line van-loading__line--1"></i>
          <i className="van-loading__line van-loading__line--2"></i>
          <i className="van-loading__line van-loading__line--3"></i>
          <i className="van-loading__line van-loading__line--4"></i>
          <i className="van-loading__line van-loading__line--5"></i>
          <i className="van-loading__line van-loading__line--6"></i>
          <i className="van-loading__line van-loading__line--7"></i>
          <i className="van-loading__line van-loading__line--8"></i>
          <i className="van-loading__line van-loading__line--9"></i>
          <i className="van-loading__line van-loading__line--10"></i>
          <i className="van-loading__line van-loading__line--11"></i>
          <i className="van-loading__line van-loading__line--12"></i>
        </span>
      </div>
    </div>

  );
};

export default CustomLoader;
