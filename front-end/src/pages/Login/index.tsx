import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { LoginPage } from "./style";
import FormLogin from "../../components/Forms/FormLogin";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user } = useContext(AuthContext);
  return (
    <LoginPage>
      <AppHeader />
      <div className="container">
        <FormLogin />
      </div>
      <Footer />
    </LoginPage>
  ); /* user ? (
    <Navigate to="/profile" replace />
  ) : (
    <LoginPage>
      <AppHeader />
      <div className="container">
        <FormLogin />
      </div>
      <Footer />
    </LoginPage>
  ); */
};

export default Login;
