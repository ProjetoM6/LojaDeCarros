import { DeleteFormStyled } from "../style";

const FormDeleteAnnouncement = () => {
  return (
    <DeleteFormStyled>
      <div className="TitleForm">
        <h1 className="heading-7-500">Excluir anuncio</h1>
      </div>
      <div className="SubTitle">
        <h2 className="heading-7-600">Tem certeza que deseja remover este anúncio?</h2>
      </div>
      <div className="divP">
        <p className="body-2-400">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores
        </p>
      </div>
      <div className="DivButtons">
        <button className="cancel">Cancelar</button>
        <button className="delete">Sim, excluir anúncio</button>
      </div>
    </DeleteFormStyled>
  );
};

export default FormDeleteAnnouncement;
