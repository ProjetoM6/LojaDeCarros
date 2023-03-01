import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../Button/style";
import Input from "../../Input";
import { FormStyled } from "../style";

const FormLogin = () => {
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
    <FormStyled onSubmit={handleSubmit((data) => console.log(data))}>
      <h1>Login</h1>
      <Input
        label="Usuário"
        placeholder="Digitar seu usuário"
        name="email"
        register={register}
      />
      {/* {errors.email && <span>{errors.email.message}</span>} */}
      <Input
        label="Senha"
        placeholder="Digitar sua senha"
        name="password"
        register={register}
      />
      {/*  {errors.senha && <span>{errors.senha.message}</span>} */}
      <a href="#">Esqueci minha senha</a>
      <Button
        background="var(--color-brand-1)"
        color="var(--white-fixed)"
        width="100%"
        hover="var(--color-brand-2)"
      >
        Entrar
      </Button>
      <p className="text">Ainda não possui conta?</p>
      <Button
        background="var(--color-brand-1)"
        color="var(--white-fixed)"
        width="100%"
        hover="var(--color-brand-2)"
      >
        Cadastrar
      </Button>
    </FormStyled>
  );
};

export default FormLogin;
