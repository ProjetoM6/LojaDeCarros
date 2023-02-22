import ProductCardStyled, { IsActive } from "./style";
import img from "../../asserts/carroTeste.svg";
import imgOwner from "../../asserts/Frame.svg";
import Button from "../Button/style";
const ProductCard = () => {
  const user = { id: 1911 };
  const product = {
    isActive: true,
    ownerId: 1911,
    ownerName: "anunciante",
    ownnerImg: imgOwner,
  };
  return (
    <ProductCardStyled>
      <img src={img} alt="" className="imgProduct" />
      {product.ownerId === user.id && (
        <IsActive isActive={product.isActive}>
          <p>{product.isActive ? "Ativo" : "Inativo"}</p>
        </IsActive>
      )}
      <div className="ContainerFlexColumn">
        <h2 className="heading-7-600">Product title stays here - max 1 line</h2>
        <p className="body-2-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
        <div className="advertiser">
          {product.ownnerImg && (
            <img src={product.ownnerImg} className="imgAdvertiser" />
          )}
          {product.ownerName && <p>{product.ownerName}</p>}
        </div>
        <div className="ContainerFlexRow">
          <div className="ContainerInfoKmYear">
            <span className="SpanInfos">0 KM</span>
            <span className="SpanInfos">2019</span>
          </div>
          <span className="heading-7-500">R$ 0000,00</span>
        </div>
        <div className="ContainerFlexRowButtons">
          <Button
            width="medium"
            color="var(--color-grey-0)"
            background="var(--color-grey-7)"
            borderColor="var(--color-grey-0)"
            hover="var(--color-grey-6)"
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
  );
};

export default ProductCard;
