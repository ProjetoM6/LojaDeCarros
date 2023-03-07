import * as yup from "yup";

const schemaSendResetPassword = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido")
});

export default schemaSendResetPassword;