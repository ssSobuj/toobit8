import { Link } from "react-router-dom";

const HomeUserInfo = ({ userInfo }) => {
  return (
    <div data-v-c2ad30f3="" className="show-top">
      <div data-v-c2ad30f3="" className="user-info">
        <div data-v-c2ad30f3="" className="user">
          <div data-v-c2ad30f3="" className="flex">
            <img data-v-c2ad30f3="" src="/assets/avatar2-4af94cd9.jpg" />
            <div data-v-c2ad30f3="" className="user-text">
              <span data-v-c2ad30f3="">Hello</span>
              <div data-v-c2ad30f3="" className="name">
                {userInfo?.user?.email
                  ? userInfo.user.email
                  : userInfo?.user?.phone}
              </div>
              <div data-v-c2ad30f3="" className="level">
                {userInfo?.user?.my_vip}0 星级
              </div>
            </div>
          </div>
          <div data-v-c2ad30f3="" className="user-link">
            <a data-v-c2ad30f3="" href="#/account/balance" className="">
              <div
                data-v-c2ad30f3=""
                className="i-material-symbols:account-balance-outline-rounded text-24px"
              ></div>
            </a>
          </div>
        </div>
        <div data-v-c2ad30f3="" className="wallet">
          <div data-v-c2ad30f3="" className="wallet-title">
            Wallet
          </div>
          <div data-v-c2ad30f3="" className="money">
            <span data-v-c2ad30f3="">$</span>
            {parseFloat(userInfo?.user?.withdraw_balance || 0).toFixed(2)}
          </div>
        </div>
      </div>
      <div data-v-c2ad30f3="" className="tools-part">
        <Link
          to="/recharge-method"
          data-v-c2ad30f3=""
          className="part recharge"
        >
          <div data-v-c2ad30f3="" className="icon rd-50% bg-$primary">
            <div
              data-v-c2ad30f3=""
              className="i-material-symbols:attach-money text-30px c-$btn-text"
            ></div>
          </div>
          <div data-v-c2ad30f3="" className="label">
            Recharge
          </div>
        </Link>
        <Link to="/withdraw" data-v-c2ad30f3="" className="part withdraw">
          <div data-v-c2ad30f3="" className="icon rd-50% bg-$btn-bg">
            <div
              data-v-c2ad30f3=""
              className="i-mingcute:receive-money-line text-30px c-$btn-text"
            ></div>
          </div>
          <div data-v-c2ad30f3="" className="label">
            Withdraw
          </div>
        </Link>
        <div data-v-c2ad30f3="" className="part download">
          <div data-v-c2ad30f3="" className="icon rd-50% bg-$btn-text">
            <div
              data-v-c2ad30f3=""
              className="i-line-md:download-outline-loop text-30px c-$primary"
            ></div>
          </div>
          <div data-v-c2ad30f3="" className="label">
            App
          </div>
        </div>
        <Link to="/company-profile" data-v-c2ad30f3="" className="part company">
          <div data-v-c2ad30f3="" className="icon rd-50% bg-$text-white">
            <div
              data-v-c2ad30f3=""
              className="i-iconoir:city text-30px c-$text-black"
            ></div>
          </div>
          <div data-v-c2ad30f3="" className="label">
            Company Profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeUserInfo;
