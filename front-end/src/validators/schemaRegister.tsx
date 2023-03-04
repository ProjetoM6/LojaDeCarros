import * as yup from "yup";

const formSchemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  cpf: yup.string().required("CPF obrigatório"),
  phone: yup.string().required("Numero obrigatório"),
  date_of_birth: yup.string().required("Data de nascimento obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
  cep: yup.string().required("CEP obrigatório"),
  state: yup.string().required("Estado obrigatório"),
  city: yup.string().required("Cidade obrigatóri"),
  street: yup.string().required("Rua obrigatória"),
  number: yup.string().required("Numero obrigatório"),
  complement: yup.string().required("Complemento obrigatório"),
  type: yup.string().required("Tipo de conta obrigatório"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
      "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
    )
    .required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais."),
});

export default formSchemaRegister;
