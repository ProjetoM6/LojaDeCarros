import ProductCardStyled, { IsActive } from "./style";

import Button from "../Button/style";
import { useState } from "react";
import FormEditAnnouncement from "../Forms/EditAnnouncement";
import Modal from "../Modal";

export interface IProduct {
  Tipo: string;
  Titulo: string;
  Ano: string;
  Quilometragem: string;
  Preço: string;
  Descrição: string;
  TipoDeVeiculo: string;
  imgCapa: string;
  firstImg: string;
  isActive: true;
  ownerId: Number;
  ownerName: string;
  ownnerImg: string;
}

interface ProductProps {
  product: IProduct;
}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);

  const user = { id: 1911 };
  return (
    <>
      {isOpenModalEdit && (
        <Modal
          isOpenModal={isOpenModalEdit}
          setIsOpenModal={setIsOpenModalEdit}
        >
          <FormEditAnnouncement />
        </Modal>
      )}
      <ProductCardStyled>
        <img src={product.imgCapa} alt="" className="imgProduct" />
        {product.ownerId === user.id && (
          <IsActive isActive={product.isActive}>
            <p>{product.isActive ? "Ativo" : "Inativo"}</p>
          </IsActive>
        )}
        <div className="ContainerFlexColumn">
          <h2 className="heading-7-600">{product.Titulo}</h2>
          <p className="body-2-400">{product.Descrição}</p>
          <div className="advertiser">
            {product.ownnerImg && (
              <img src={product.ownnerImg} className="imgAdvertiser" />
            )}
            {product.ownerName && <p>{product.ownerName}</p>}
          </div>
          <div className="ContainerFlexRow">
            <div className="ContainerInfoKmYear">
              <span className="SpanInfos">{product.Quilometragem}</span>
              <span className="SpanInfos">{product.Ano}</span>
            </div>
            <span className="heading-7-500">{product.Preço}</span>
          </div>
          <div className="ContainerFlexRowButtons">
            <Button
              width="medium"
              color="var(--color-grey-0)"
              background="var(--color-grey-7)"
              borderColor="var(--color-grey-0)"
              hover="var(--color-grey-6)"
              onClick={() => setIsOpenModalEdit(true)}
            >
              Editar
            </Button>
            <Button
              width="big"
              color="var(--color-grey-0)"
              background="var(--color-grey-7)"
              borderColor="var(--color-grey-0)"
              hover="var(--color-grey-6)"
            >
              Ver como
            </Button>
          </div>
        </div>
      </ProductCardStyled>
    </>
  );
};

export default ProductCard;
