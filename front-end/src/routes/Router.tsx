import { Routes, Route } from "react-router-dom";

import ProfileViewUser from "../pages/ProfileViewUser";

import ProfilePage from "../pages/profile";
import ViewAdPage from "../pages/viewAd";
import Homepage from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/view-ad" element={<ViewAdPage />} />
      <Route path="/saleProfile" element={<ProfileViewUser />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesMain;
