import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { FormStyled } from "../style";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Button from "../../Button/style";
import Input from "../../Input";
import schemaResetPassword from "../../../validators/schemaResetPassword";

const FormResetPassword = () => {
  const { requestResetPassword } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schemaResetPassword),
  });

  return (
    <FormStyled className="form" onSubmit={handleSubmit(requestResetPassword)}>
      <h1>Altere sua senha :)</h1>
      <Input
        label="Token"
        placeholder="Insira seu token de autenticação"
        name="token"
        register={register}
      />
      <Input
        label="Nova senha"
        placeholder="Insira sua nova senha"
        name="newPassword"
        register={register}
      />
      <Button
        background="var(--color-brand-1)"
        color="var(--white-fixed)"
        width="100%"
        hover="var(--color-brand-2)"
      >
        Alterar senha
      </Button>
    </FormStyled>
  );
};

export default FormResetPassword;