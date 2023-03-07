import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { FormStyled } from "../style";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Button from "../../Button/style";
import Input from "../../Input";
import schemaSendResetPassword from "../../../validators/schemaSendResetPassword";

const FormSendResetPassword = () => {
  const { requestSendResetPassword } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schemaSendResetPassword),
  });

  return (
    <FormStyled className="form" onSubmit={handleSubmit(requestSendResetPassword)}>
      <h1>Esqueceu a senha?</h1>
      <p>Insira seu e-mail cadastrado para enviarmos um link de recuperação de senha :)</p>
      <Input
        label="E-mail"
        placeholder="Insira seu e-mail"
        name="email"
        register={register}
      />
      <Button
        background="var(--color-brand-1)"
        color="var(--white-fixed)"
        width="100%"
        hover="var(--color-brand-2)"
      >
        Enviar
      </Button>
    </FormStyled>
  );
};

export default FormSendResetPassword;
