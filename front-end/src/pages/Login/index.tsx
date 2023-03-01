import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { LoginPage } from "./style";

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <LoginPage>
      <AppHeader />
      <div className="geral">
        <div className="container">
          <h1 className="heading-5-500">Login</h1>
          <form className="form">
            <div className="info">
              <label>Usuário</label>
              <input
                type="text"
                placeholder="Digitar usuário"
                {...register("email")}
              />
              {/* {errors.email && <span>{errors.email.message}</span>} */}

              <label>Senha</label>
              <input
                type="text"
                placeholder="Digitar senha"
                {...register("senha")}
              />
              {/* {errors.senha && <span>{errors.senha.message}</span>} */}
            </div>

            <a href="#">Esqueci minha senha</a>

            <div className="buttonLogin">
              <button type="submit">Entrar</button>
            </div>
            <p>Ainda não possui conta?</p>
            <div className="buttonRegister">
              <button>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </LoginPage>
  );
};

export default Login;
