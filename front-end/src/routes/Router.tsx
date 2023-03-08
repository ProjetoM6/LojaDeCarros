import { Routes, Route } from "react-router-dom";

import ProfileViewUser from "../pages/ProfileViewUser";

import ProfilePage from "../pages/profile";
import ViewAdPage from "../pages/viewAd";
import Homepage from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import SendResetPassword from "../pages/ResetPassword/sendResetPassword";
import ResetPassword from "../pages/ResetPassword/resetPassword";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sendResetPassword" element={<SendResetPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/saleProfile" element={<ProfileViewUser />} />
      <Route path="/view-ad" element={<ViewAdPage />} />
    </Routes>
  );
};

export default RoutesMain;
