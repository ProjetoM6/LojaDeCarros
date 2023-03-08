import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import FormResetPassword from "../../components/Forms/FormResetPassword/sendResetPassword";
import { SendResetPasswordPage } from "./style";


const SendResetPassword = () => {
  return (
    <SendResetPasswordPage>
      <AppHeader />
      <div className="container">
        <FormResetPassword />
      </div>
      <Footer />
    </SendResetPasswordPage>
  ); 
};

export default SendResetPassword;
