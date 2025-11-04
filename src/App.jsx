import axios from "axios";
import { HashRouter, Route, Routes } from "react-router-dom";

//all css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//all component
import Login from "./component/auth/login";
import PhoneLogin from "./component/auth/phone_login";
import EmailRegister from "./component/auth/email_register";
import PhoneRegister from "./component/auth/phone_register";
import Check from "./component/extra/check";
import CustomSnackbarProvider from "./component/extra/SnackbarProvider";
import PrivateRoute from "./component/auth/PrivateRoute";
import ScrollTopButton from "./component/ScrollTopButton.jsx";

// all protected routes
import Home from "./component/home";
import Me from "./component/me";
import Team from "./component/team";
import Recharge from "./component/Recharge";
import Withdraw from "./component/withdraw";
import WithdrawRecord from "./component/withdrawRecord";
import ChangePassword from "./component/changePassword";
import AuthRoute from "./component/auth/AuthRoute";
import Share from "./component/Share";
import Income from "./component/Income";
import Invest from "./component/Invest";
import CycleInvest from "./component/CycleInvest";
import InvestRecord from "./component/InvestRecord";
import TransictionRecord from "./component/TransictionRecord";
import Deposit from "./component/Deposit";
import TransferToSmartAccount from "./component/TransferToSmartAccount";
import TransferCustom from "./component/TransferCustom";
import RechargeRecord from "./component/RechargeRecord";
import DigitalCurrencyWallet from "./component/DigitalCurrencyWallet";
import TeamBonusRecords from "./component/TeamBonusRecords";
import TeamLevel1 from "./component/TeamLevel1";
import TeamLevel2 from "./component/TeamLevel2";
import TeamLevel3 from "./component/TeamLevel3";
import WalletFunds from "./component/WalletFunds";
import ModifyLoginPassword from "./component/ModifyLoginPassword";
import ModifyPaymentPassword from "./component/ModifyPaymentPassword";
import MineInformation from "./component/MineInformation";
import MineInfoMessage from "./component/MineInfoMessage";
import InvestProduct from "./component/InvestProduct";
import InvitationReward from "./component/InvitationReward";
import Infromation from "./component/Infromation";
import ForgotPassword from "./component/auth/ForgotPassword";
import GetBenifit from "./component/GetBenifit";
import WaveField from "./component/WaveField";
import Bandwith from "./component/Bandwidth";
import Energy from "./component/Energy";
import Agreement from "./component/agreement";
import BasicInvest from "./component/BasicInvest";
import ScrollToTop from "./component/ScrollToTop";
import LanguagePopUp from "./component/extra/LanguagePopUp";
import Financial from "./component/Financial";
import Activity from "./component/Acitivity";
import RegistrationRewards from "./component/RegistrationRewards";
import RechargeRewards from "./component/RechargeRewards";
import CompanyProfile from "./component/CompanyProfile";
import ThingsToNote from "./component/ThingsToNote";
import AboutUs from "./component/AboutUs";
import AgentCoperation from "./component/AgenetCopretation";
import Notice from "./component/Notice";
import NoticeView from "./component/NoticeView";
import TermsOfUse from "./component/TermsOfUse";
import PrivacyPolicy from "./component/PrivacyPolicy";
import QuantifyRecords from "./component/QuantifyRecords";
import EmailVerify from "./component/auth/EmailVerify";
import NoticeWithdraw from "./component/NoticeWithdraw";
import NoticeDeposit from "./component/NoticeDeposit";
import InvitationRewardNew from "./component/InvitationRewardNew.jsx";
import DailyCart from "./component/DailyCart.jsx";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "";

  return (
    <div id="main">
      <CustomSnackbarProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/phone-login"
              element={
                <AuthRoute>
                  <PhoneLogin />
                </AuthRoute>
              }
            />
            <Route
              path="/register"
              element={
                <AuthRoute>
                  <EmailRegister />
                </AuthRoute>
              }
            />
            <Route path="/email-verify" element={<EmailVerify />} />

            <Route
              path="/phone-register"
              element={
                <AuthRoute>
                  <PhoneRegister />
                </AuthRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <AuthRoute>
                  <ForgotPassword />
                </AuthRoute>
              }
            />
            <Route
              path="/agreement"
              element={
                <AuthRoute>
                  <Agreement />
                </AuthRoute>
              }
            />
            <Route path="/check" element={<Check />} />

            {/* all protected routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/mineinformation" element={<MineInformation />} />
            <Route
              path="/mineinformation-message"
              element={<MineInfoMessage />}
            />

            <Route
              path="/works"
              element={
                <PrivateRoute>
                  <Income />
                </PrivateRoute>
              }
            />
            <Route path="/quantify-records" element={<QuantifyRecords />} />
            <Route
              path="/me"
              element={
                <PrivateRoute>
                  <Me />
                </PrivateRoute>
              }
            />
            <Route
              path="/share"
              element={
                <PrivateRoute>
                  <Share />
                </PrivateRoute>
              }
            />
            <Route
              path="/invitation-rewards"
              element={<InvitationRewardNew />}
            />
            <Route path="/daily-chart" element={<DailyCart />} />
            <Route
              path="/registration-rewards"
              element={<RegistrationRewards />}
            />
            <Route path="/recharge-rewards" element={<RechargeRewards />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/things-to-note" element={<ThingsToNote />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/agent-coperation" element={<AgentCoperation />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/notice/:id" element={<NoticeView />} />
            <Route path="/notice/content" element={<NoticeView />} />
            <Route path="/notice/withdraw" element={<NoticeWithdraw />} />
            <Route path="/notice/deposit" element={<NoticeDeposit />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/invest"
              element={
                <PrivateRoute>
                  <Invest />
                </PrivateRoute>
              }
            />
            <Route
              path="/invest/basic-invest"
              element={
                <PrivateRoute>
                  <BasicInvest />
                </PrivateRoute>
              }
            />
            <Route
              path="/invest/cycle-investing"
              element={
                <PrivateRoute>
                  <CycleInvest />
                </PrivateRoute>
              }
            />
            <Route path="/invest/records" element={<InvestRecord />} />
            <Route
              path="/getbenifit"
              element={
                <PrivateRoute>
                  <GetBenifit />
                </PrivateRoute>
              }
            />
            <Route
              path="/wavefield"
              element={
                <PrivateRoute>
                  <WaveField />
                </PrivateRoute>
              }
            />
            <Route
              path="/bandwith"
              element={
                <PrivateRoute>
                  <Bandwith />
                </PrivateRoute>
              }
            />
            <Route
              path="/energy"
              element={
                <PrivateRoute>
                  <Energy />
                </PrivateRoute>
              }
            />
            <Route
              path="/invest-product/:id"
              element={
                <PrivateRoute>
                  <InvestProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/recharge-record"
              element={
                <PrivateRoute>
                  <RechargeRecord />
                </PrivateRoute>
              }
            />
            <Route
              path="/transiction-records"
              element={
                <PrivateRoute>
                  <TransictionRecord />
                </PrivateRoute>
              }
            />
            <Route
              path="/financial"
              element={
                <PrivateRoute>
                  <Financial />
                </PrivateRoute>
              }
            />
            <Route
              path="/deposit"
              element={
                <PrivateRoute>
                  <Deposit />
                </PrivateRoute>
              }
            />
            <Route
              path="/transfer-to-smart-account"
              element={
                <PrivateRoute>
                  <TransferToSmartAccount />
                </PrivateRoute>
              }
            />
            <Route
              path="/transfer/custom"
              element={
                <PrivateRoute>
                  <TransferCustom />
                </PrivateRoute>
              }
            />
            <Route
              path="/team"
              element={
                <PrivateRoute>
                  <Team />
                </PrivateRoute>
              }
            />
            <Route
              path="/team-bonus-records"
              element={
                <PrivateRoute>
                  <TeamBonusRecords />
                </PrivateRoute>
              }
            />
            <Route
              path="/team/:level"
              element={
                <PrivateRoute>
                  <TeamLevel2 />
                </PrivateRoute>
              }
            />
            <Route
              path="/wallet-founds"
              element={
                <PrivateRoute>
                  <WalletFunds />
                </PrivateRoute>
              }
            />
            <Route
              path="/recharge"
              element={
                <PrivateRoute>
                  <Recharge />
                </PrivateRoute>
              }
            />
            <Route
              path="/withdraw"
              element={
                <PrivateRoute>
                  <Withdraw />
                </PrivateRoute>
              }
            />

            <Route
              path="/digital-currency-wallet"
              element={
                <PrivateRoute>
                  <DigitalCurrencyWallet />
                </PrivateRoute>
              }
            />
            <Route
              path="/withdraw-records"
              element={
                <PrivateRoute>
                  <WithdrawRecord />
                </PrivateRoute>
              }
            />
            <Route path="/information" element={<Infromation />} />
            <Route
              path="/change-password"
              element={
                <PrivateRoute>
                  <ChangePassword />
                </PrivateRoute>
              }
            />
            <Route
              path="/modify-login-password"
              element={
                <PrivateRoute>
                  <ModifyLoginPassword />
                </PrivateRoute>
              }
            />
            <Route
              path="/modify-payment-password"
              element={
                <PrivateRoute>
                  <ModifyPaymentPassword />
                </PrivateRoute>
              }
            />
            <Route path="/lang" element={<LanguagePopUp />} />
          </Routes>
        </HashRouter>
      </CustomSnackbarProvider>
      <ScrollTopButton />
    </div>
  );
}

export default App;
