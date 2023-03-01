import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormStyled } from "../style";
import Input from "../../Input";
import InputRadio from "../../InputRadio";
import Button from "../../Button/style";

const FormRegister = () => {
  const formSchema = yup.object().shape({
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
    typeCount: yup.string().required("Tipo de conta obrigatório"),
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
      .oneOf([yup.ref("senha")], "As senhas precisam ser iguais."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormStyled className="form">
      <h1 className="heading-5-500">Cadastro</h1>
      <h2>Informações pessoais</h2>
      <Input
        label="Nome"
        placeholder="Digite aqui seu nome"
        name="name"
        register={register}
      />
      {/* {errors.name && <span>{errors.name.message}</span>} */}
      <Input
        label="E-mail"
        placeholder="Digite aqui seu e-mail"
        name="email"
        register={register}
      />
      {/* {errors.email && <span>{errors.email.message}</span>} */}
      <Input
        label="CPF"
        placeholder="000.000.000-00"
        name="cpf"
        register={register}
      />
      {/* {errors.cpf && <span>{errors.cpf.message}</span>} */}
      <Input
        label="Celular"
        placeholder="(DDD) 00000-0000"
        name="phone"
        register={register}
      />
      {/* {errors.phone && <span>{errors.phone.message}</span>} */}
      <Input
        label="Data de nascimento"
        placeholder="00/00/0000"
        name="date_of_birth"
        register={register}
      />
      {/* {errors.date_of_birth && <span>{errors.date_of_birth.message}</span>} */}
      <Input
        label="Descrição"
        placeholder="Digitar descrição"
        name="description"
        register={register}
      />
      {/* {errors.description && <span>{errors.description.message}</span>} */}
      <h2>Informações de endereço</h2>
      <Input
        label="CEP"
        placeholder="00000-000"
        name="cep"
        register={register}
      />
      {/* {errors.cep && <span>{errors.cep.message}</span>} */}
      <Input
        label="Estado"
        placeholder="Digitar estado"
        name="state"
        register={register}
      />
      {/* {errors.state && <span>{errors.state.message}</span>} */}
      <Input
        label="Cidade"
        placeholder="Digitar cidade"
        name="city"
        register={register}
      />
      {/* {errors.city && <span>{errors.city.message}</span>} */}
      <Input
        label="Rua"
        placeholder="Digitar rua"
        name="street"
        register={register}
      />
      {/* {errors.street && <span>{errors.street.message}</span>} */}
      <Input
        label="Número"
        placeholder="Digitar número"
        name="number"
        register={register}
      />
      {/* {errors.number && <span>{errors.number.message}</span>} */}
      <Input
        label="Complemento"
        placeholder="Ex: Apt 307"
        name="complement"
        register={register}
      />
      {/* {errors.complement && <span>{errors.complement.message}</span>} */}
      <h2>Tipo de conta</h2>
      <Input
        label="Complemento"
        placeholder="Ex: Apt 307"
        name="complement"
        register={register}
      />
      <div className="divRadio">
        <InputRadio
          name="typeCount"
          value="Buyer"
          register={register}
          txt={"Comprador"}
        />
        <InputRadio
          name="typeCount"
          value="Seller"
          register={register}
          txt={"Anunciante"}
        />
        {/* {errors.typeCount && <span>{errors.typeCount.message}</span>} */}
      </div>
      <Input
        label="Senha"
        placeholder="Digite aqui sua senha"
        name="senha"
        register={register}
      />
      {/* {errors.senha && <span>{errors.senha.message}</span>} */}
      <Input
        label="Confirmar senha"
        placeholder="Digite novamente sua senha"
        name="confirmarSenha"
        register={register}
      />
      <div className="divButton">
        <Button
          background="var(--color-brand-1)"
          color="var(--white-fixed)"
          hover="var(--color-brand-2)"
          width="100%"
        >
          Finalizar cadastro
        </Button>
      </div>
    </FormStyled>
  );
};

export default FormRegister;
