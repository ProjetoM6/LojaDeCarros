import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { FormStyled } from "../style";
import schemaLogin from "../../../validators/schemaLogin";
import Button from "../../Button/style";
import Input from "../../Input";
import api from "../../../services";

import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();

  const requestLogin = async (data: FieldValues) => {
    try {
      const res = await api.post("/user/login", data);
      navigate("/profile");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    return;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <FormStyled onSubmit={handleSubmit(requestLogin)}>
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
        type="password"
        autoComplete="false"
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
        onClick={() => navigate("/register")}
      >
        Cadastrar
      </Button>
    </FormStyled>
  );
};

export default FormLogin;
