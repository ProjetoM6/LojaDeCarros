import { FormStyled } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import Input from "../../Input";
import { LabelStyled } from "../../Input/style";
import Button from "../../Button/style";
import { AuthContext } from "../../../context/AuthContext";

const FormEditAddress = () => {
  const formSchema = yup.object().shape({
    cep: yup.string().required("Escolha uma opção"),
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    complement: yup.string().required("Campo obrigatório"),
  });
  const { setIsOpenModalEditUser, isOpenModalEditUser } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  //   const onSubmitFunction = (data) => console.log(data);

  return (
    <>
      <FormStyled onSubmit={handleSubmit((data) => console.log(data))}>
        <h1 className="heading-7-500 title">Editar perfil</h1>
        <h2 className="body-2-500 subTitle">Informações pessoais</h2>

        <Input
          label="Nome"
          name="name"
          placeholder="Digitar nome"
          register={register}
        />
        <div className="DisplayFlex">
          <Input
            label="Email"
            name="email"
            placeholder="exemplo@gmail.com"
            register={register}
            // type={"number"}
          />
          <Input
            label="CPF"
            name="cpf"
            placeholder="000.000.000-00"
            register={register}
            type={"number"}
          />
          <Input
            label="Celular"
            name="phone"
            placeholder="(00)90000-0000"
            register={register}
            type={"number"}
          />
          <Input
            label="Data de Nascimento"
            name="date_of_birth"
            placeholder="00/00/00"
            register={register}
            type={"number"}
          />
        </div>
        <LabelStyled className="body-2-500">
          Descrição
          <textarea
            className="description"
            placeholder="Digitar descrição"
            {...register("description")}
          />
        </LabelStyled>

        <div className="DivButtonsEdit">
          <Button
            background="var(--color-grey-6)"
            color="var(--color-grey-2)"
            hover="var(--color-alert-1)"
            colorHover="var(--white-fixed)"
            width="larger"
            onClick={() => {
              setIsOpenModalEditUser(false);
            }}
          >
            Cancelar
          </Button>
          <Button
            background="var(--color-brand-3)"
            color="var(--color-grey-6)"
            hover="var(--color-brand-1)"
            colorHover="var(--white-fixed)"
            width="larger"
          >
            Salvar alterações
          </Button>
        </div>
      </FormStyled>
    </>
  );
};

export default FormEditProfile;
