import { Routes, Route } from "react-router-dom";
import ProfilePage from "../pages/profile";
import ViewAdPage from "../pages/viewAd";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/view-ad" element={<ViewAdPage />} />
      <Route path="/teste" />
    </Routes>
  );
};

export default RoutesMain;
