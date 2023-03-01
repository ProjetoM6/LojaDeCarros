import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { RegisterPage } from "./style";
import FormRegister from "../../components/Forms/FormRegister";

const Register = () => {
  return (
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
