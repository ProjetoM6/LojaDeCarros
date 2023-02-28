import { Routes, Route } from "react-router-dom";

import ProfileViewUser from "../pages/ProfileViewUser";

import ProfilePage from "../pages/profile";
import ViewAdPage from "../pages/viewAd";
import Homepage from "../pages/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/view-ad" element={<ViewAdPage />} />
      <Route path="/saleProfile" element={<ProfileViewUser />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
};

export default RoutesMain;
