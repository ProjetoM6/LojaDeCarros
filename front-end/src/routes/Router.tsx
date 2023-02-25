import { Routes, Route } from "react-router-dom";
import ProfileViewUser from "../pages/ProfileViewUser";

export default function Router() {
  return (
    <Routes>
      <Route path="/profile" element={<ProfileViewUser />} />
    </Routes>
  );
}
