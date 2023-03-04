import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { RegisterPage } from "./style";
import FormRegister from "../../components/Forms/FormRegister";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Register = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <Navigate to="/profile" replace />
  ) : (
    <RegisterPage>
      <AppHeader />
      <div className="container">
        <FormRegister />
      </div>
      <Footer />
    </RegisterPage>
  );
};

export default Register;
