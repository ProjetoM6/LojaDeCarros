import * as yup from "yup";

const schemaLogin = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
      "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
    )
    .required("Senha obrigatória"),
});

export default schemaLogin;
