import { Routes, Route } from "react-router-dom";
import ProfileViewUser from "../pages/ProfileViewUser";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/saleProfile" element={<ProfileViewUser />} />
    </Routes>
  );
}
