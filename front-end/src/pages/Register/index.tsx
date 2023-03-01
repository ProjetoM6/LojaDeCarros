import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { RegisterPage } from "./style";

const Register = () => {
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
    <RegisterPage>
      <AppHeader />
      <div className="geral">
        <div className="container">
          <h1 className="heading-5-500">Cadastro</h1>
          <form className="form">
            <div className="info">
              <h2>Informações pessoais</h2>
              <label>Nome</label>
              <input
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              {/* {errors.name && <span>{errors.name.message}</span>} */}
              <label>E-mail</label>
              <input
                type="text"
                placeholder="Digite aqui seu e-mail"
                {...register("email")}
              />
              {/* {errors.email && <span>{errors.email.message}</span>} */}
              <label>CPF</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                {...register("cpf")}
              />
              {/* {errors.cpf && <span>{errors.cpf.message}</span>} */}
              <label>Celular</label>
              <input
                type="text"
                placeholder="(DDD) 00000-0000"
                {...register("phone")}
              />
              {/* {errors.phone && <span>{errors.phone.message}</span>} */}
              <label>Data de nascimento</label>
              <input
                type="text"
                placeholder="00/00/0000"
                {...register("date_of_birth")}
              />
              {/* {errors.date_of_birth && <span>{errors.date_of_birth.message}</span>} */}
              <label>Descrição</label>
              <input
                className="description"
                type="text"
                placeholder="Digitar descrição"
                {...register("description")}
              />
              {/* {errors.description && <span>{errors.description.message}</span>} */}

              <h2>Informações de endereço</h2>

              <label>CEP</label>
              <input type="text" placeholder="00000-000" {...register("cep")} />
              {/* {errors.cep && <span>{errors.cep.message}</span>} */}

                <label>Estado</label>
                <input
                  type="text"
                  placeholder="Digitar estado"
                  {...register("state")}
                />
                {/* {errors.state && <span>{errors.state.message}</span>} */}

                <label>Cidade</label>
                <input
                  type="text"
                  placeholder="Digitar cidade"
                  {...register("city")}
                />
                {/* {errors.city && <span>{errors.city.message}</span>} */}

              <label>Rua</label>
              <input
                type="text"
                placeholder="Digitar rua"
                {...register("street")}
              />
              {/* {errors.street && <span>{errors.street.message}</span>} */}

                <label>Número</label>
                <input
                  type="text"
                  placeholder="Digitar número"
                  {...register("number")}
                />
                {/* {errors.number && <span>{errors.number.message}</span>} */}

                <label>Complemento</label>
                <input
                  type="text"
                  placeholder="Ex: Apt 307"
                  {...register("complement")}
                />
                {/* {errors.complement && <span>{errors.complement.message}</span>} */}

              <h3>Tipo de conta</h3>

              <div className="divRadio">
                <label>Comprador</label>
                <input type="radio" value="Buyer" {...register("typeCount")} />
                {/* {errors.typeCount && <span>{errors.typeCount.message}</span>} */}

                <label>Anunciante</label>
                <input type="radio" value="Seller" {...register("typeCount")} />
                {/* {errors.typeCount && <span>{errors.typeCount.message}</span>} */}
              </div>
              <label>Senha</label>
              <input
                type="text"
                placeholder="Digite aqui sua senha"
                {...register("senha")}
              />
              {/* {errors.senha && <span>{errors.senha.message}</span>} */}

              <label>Confirmar senha</label>
              <input
                type="text"
                placeholder="Digite novamente sua senha"
                {...register("confirmarSenha")}
              />
              <div className="divButton">
                <button type="submit">Finalizar cadastro</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </RegisterPage>
  );
};

export default Register;
