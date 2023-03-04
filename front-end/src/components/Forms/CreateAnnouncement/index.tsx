import { FormStyled } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputRadio from "../../InputRadio";
import Input from "../../Input";
import Button from "../../Button/style";
import { LabelStyled } from "../../Input/style";

const FormCreateAnnouncement = () => {
  const formSchema = yup.object().shape({
    type: yup.string().required("Escolha uma opção"),
    title: yup.string().required("Campo obrigatório"),
    year: yup.string().required("Campo obrigatório"),
    km: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    typeVeichle: yup.string().required("Campo obrigatório"),
    img_Cover: yup.string().required("Campo obrigatório"),
    img_Gallery: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  //   const onSubmitFunction = (data) => console.log(data);

  return (
    <FormStyled onSubmit={handleSubmit((data) => console.log(data))}>
      <h1 className="heading-7-500 title">Criar anuncio</h1>
      <h2 className="body-2-500 subTitle">Tipo de anuncio</h2>
      <div className="divInputRadio">
        <InputRadio
          value={"sell"}
          name={"type"}
          register={register}
          txt={"Sell"}
        />
        <InputRadio
          value={"auction"}
          name={"type"}
          register={register}
          txt={"Auction"}
        />
      </div>
      <h2 className="body-2-500 subTitle">Informações do veiculo</h2>
      <Input
        label="Titulo"
        name="title"
        placeholder="Digitar titulo"
        register={register}
      />
      <div className="DisplayFlex">
        <Input
          label="Ano"
          name="year"
          placeholder="Digitar ano"
          register={register}
          type={"number"}
        />
        <Input
          label="Quilometragem"
          name="km"
          placeholder="0 Km"
          register={register}
          type={"number"}
        />
        <Input
          label="Preço"
          name="price"
          placeholder="Digitar o preço"
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
      <h2 className="body-2-500 subTitle">Tipo de veiculo</h2>
      <div className="divInputRadio">
        <InputRadio
          value={"car"}
          register={register}
          name={"typeVeichle"}
          txt={"Carro"}
        />
        <InputRadio
          value={"motocycle"}
          register={register}
          name={"typeVeichle"}
          txt={"Moto"}
        />
      </div>
      <Input
        label="Imagem da capa"
        name="imgCover"
        placeholder="Inserir URL da imagem"
        register={register}
      />
      <Input
        label="1ª Imagem da galeria"
        name="imgGallery"
        placeholder="Inserir URL da imagem"
        register={register}
      />
      <Button
        background="var(--color-brand-4)"
        color="var(--color-brand-1)"
        hover="var(--color-brand-1)"
        width="300px"
        colorHover="var(--white-fixed)"
      >
        Adicionar campo para imagem da galeria
      </Button>
      <div className="DivButtons">
        <Button
          background="var(--color-grey-6)"
          color="var(--color-grey-2)"
          hover="var(--color-alert-1)"
          colorHover="var(--white-fixed)"
          width="medium"
          onClick={() => console.log("fechar o modal")}
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
          Criar anúncio
        </Button>
      </div>
    </FormStyled>
  );
};

export default FormCreateAnnouncement;
