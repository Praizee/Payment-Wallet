import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicLayout from "./Pages/Layout/PublicLayout";
import AuthenticatedLayout from "./Pages/Layout/AuthenticatedLayout";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import PinManagement from "./Pages/PinManagement/PinManagement";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import FundWallet from "./Pages/FundWallet/FundWallet";
import BuyRecharge from "./Pages/BuyData/BuyRecharge";
import ElectricityPayment from "./Pages/ElectricityPayment/ElectricityPayment";
import CableSubscription from "./Pages/CableSubscription/CableSubscription";
import Transfer from "./Pages/Transfer/Transfer";
import TransactionHistory from "./Pages/TransactionHistory/TransactionHistory";
import Support from "./Pages/Support/Support";
import Faqs from "./Pages/Faqs/Faqs";
import Settings from "./Pages/Settings/Settings";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import NotFoundPage from "./Pages/404 Page/NotFoundPage";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<AuthenticatedLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          {/* change this back to the index element when the authentication is setup */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pin-management" element={<PinManagement />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="fund-wallet" element={<FundWallet />} />
          <Route path="topup" element={<BuyRecharge />} />
          <Route path="electricity-payment" element={<ElectricityPayment />} />
          <Route path="cable-subscription" element={<CableSubscription />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="transaction-history" element={<TransactionHistory />} />
          <Route path="support" element={<Support />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* This is the catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )

}