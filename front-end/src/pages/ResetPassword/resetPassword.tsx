import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import FormResetPassword from "../../components/Forms/FormResetPassword/resetPassword";
import { ResetPasswordPage } from "./style";

const ResetPassword = () => {
  return (
    <ResetPasswordPage>
      <AppHeader />
      <div className="container">
        <FormResetPassword />
      </div>
      <Footer />
    </ResetPasswordPage>
  ); 
};

export default ResetPassword;
