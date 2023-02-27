import { EditFormStyled } from "../style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Modal from "../../Modal";
import FormDeleteAnnouncement from "../DeleteAnnouncement";

const FormEditAnnouncement = () => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const formSchema = yup.object().shape({
    type: yup.string().required("Escolha uma opção"),
    title: yup.string().required("Campo obrigatório"),
    year: yup.string().required("Campo obrigatório"),
    km: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    typeVeichle: yup.string().required("Campo obrigatório"),
    published: yup.string().required("Campo obrigatório"),
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
    <>
      {isOpenModalDelete && (
        <Modal
          isOpenModal={isOpenModalDelete}
          setIsOpenModal={setIsOpenModalDelete}
        >
          <FormDeleteAnnouncement />
        </Modal>
      )}
      <EditFormStyled onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="TitleForm">
          <h1 className="heading-7-500">Editar anuncio</h1>
        </div>
        <div className="DivRadio">
          <h2 className="body-2-500">Tipo de anuncio</h2>
          <div className="DisplayFlex">
            <label htmlFor="Type">
              Venda
              <input type="radio" id="" value="Sell" {...register("type")} />
            </label>
            <label htmlFor="">
              Leilão
              <input type="radio" value="Auction" {...register("type")} />
            </label>
          </div>
        </div>
        <div className="DivInfo">
          <h2 className="body-2-500">Informações do veiculo</h2>
          <label className="body-2-500">
            Titulo
            <input
              type="text"
              placeholder="Digitar titulo"
              {...register("title")}
            />
          </label>
          <div className="DisplayFlex">
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
          </div>
          <label className="body-2-500">
            Descrição
            <input
              className="description"
              type="text"
              placeholder="Digitar descrição"
              {...register("description")}
            />
          </label>
        </div>
        <div className="DivInfo">
          <h2 className="body-2-500">Tipo de veiculo</h2>
          <div className="DisplayFlex">
            <label htmlFor="Type">
              Carro
              <input
                type="radio"
                id=""
                value="Car"
                {...register("typeVeichle")}
              />
            </label>
            <label htmlFor="">
              Moto
              <input
                type="radio"
                id=""
                value="Motocycle"
                {...register("typeVeichle")}
              />
            </label>
          </div>
          <div className="DivInfo">
            <h2 className="body-2-500">Publicado</h2>
            <div className="DisplayFlex">
              <label htmlFor="Type">
                Sim
                <input
                  type="radio"
                  id="bb"
                  value="Yes"
                  {...register("published")}
                />
              </label>
              <label htmlFor="">
                Não
                <input
                  type="radio"
                  id="aa"
                  value="No"
                  {...register("published")}
                />
              </label>
            </div>
          </div>
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
          <label className="body-2-500">
            2ª Imagem da galeria
            <input
              type="text"
              placeholder="Inserir URL da imagem"
              {...register("imgGallery")}
            />
          </label>
        </div>
        <div className="divP body-2-400">
          <button>Adicionar campo para imagem da galeria</button>
        </div>
        <div className="DivButtons">
          <button onClick={() => setIsOpenModalDelete(true)} className="delete">
            Excluir anúncio
          </button>
          <button className="edit">Editar anúncio</button>
        </div>
      </EditFormStyled>
    </>
  );
};

export default FormEditAnnouncement;
