import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { LoginPage } from "./style";
import FormLogin from "../../components/Forms/FormLogin";

const Login = () => {
  return (
    <LoginPage>
      <AppHeader />
      <div className="container">
        <FormLogin />
      </div>
      <Footer />
    </LoginPage>
  );
};

export default Login;
