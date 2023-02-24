import {
  FormStyled,
  FormButton,
  FormInfo,
  NumberInfo,
  FinalButton,
  ImgInfo,
} from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormCreateAnnouncement = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    year: yup.string().required("Campo obrigatório"),
    km: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    imgCover: yup.string().required("Campo obrigatório"),
    imgGallery: yup.string().required("Campo obrigatório"),
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
      <h1 className="heading-7-500">Criar anuncio</h1>
      <h2 className="body-2-500">Tipo de anuncio</h2>
      <FormButton>
        <div className="radio">
          <label htmlFor="">
            Venda
            <input type="radio" id="" />
          </label>
        </div>
        <div className="radio">
          <label htmlFor="">
            Leilão
            <input type="radio" />
          </label>
        </div>
      </FormButton>
      <FormInfo>
        <h2 className="body-2-500">Informações do veiculo</h2>
        <label className="body-2-500">
          Titulo
          <input
            type="text"
            placeholder="Digitar titulo"
            {...register("title")}
          />
        </label>
        <NumberInfo>
          <label className="body-2-500">
            Ano
            <input
              type="number"
              placeholder="Digitar ano"
              {...register("year")}
            />
          </label>
          <label className="body-2-500">
            Quilometragem
            <input type="number" placeholder="0" {...register("km")} />
          </label>
          <label className="body-2-500">
            Preço
            <input
              type="text"
              placeholder="Digitar preço"
              {...register("price")}
            />
          </label>
        </NumberInfo>
        <label className="body-2-500">
          Descrição
          <input
            className="description"
            type="text"
            placeholder="Digitar descrição"
            {...register("description")}
          />
        </label>
      </FormInfo>
      <h2 className="body-2-500">Tipo de veiculo</h2>
      <FormButton>
        <button>Carro</button>
        <button>Moto</button>
      </FormButton>
      <ImgInfo>
        <label className="body-2-500">
          Imagem da capa
          <input
            type="text"
            placeholder="Inserir URL da imagem"
            {...register("imgCover")}
          />
        </label>
        <label className="body-2-500">
          1ª Imagem da galeria
          <input
            type="text"
            placeholder="Inserir URL da imagem"
            {...register("imgGallery")}
          />
        </label>
      </ImgInfo>
      <FinalButton>
        <div className="cancel">
          <button>Cancelar</button>
        </div>
        <div className="create">
          <button>Criar anúncio</button>
        </div>
      </FinalButton>
    </FormStyled>
  );
};

export default FormCreateAnnouncement;
