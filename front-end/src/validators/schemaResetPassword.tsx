import * as yup from "yup";

const schemaResetPassword = yup.object().shape({
  token: yup.string().required("Token obrigatório"),
  newPassword: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
      "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
    )
    .required("Senha obrigatória"),
});

export default schemaResetPassword;