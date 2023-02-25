import { useState } from "react";
import AdShowcaseStyled from "./style";
import imgOwner from "../../assets/Frame.svg";
import img from "../../assets/carroTeste.svg";
import ProductCard, { IProduct } from "../ProductCard";

interface IAdShowCase {
  type: string;
  title: string;
}
const AdShowcase = ({ type, title }: IAdShowCase) => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      Tipo: "Sell",
      Titulo: "MOTO MOTO MOTO",
      Ano: "2020",
      Quilometragem: "0 km",
      Preço: "10.000",
      Descrição: "Opcional",
      TipoDeVeiculo: "moto",
      imgCapa: img,
      firstImg: "URL DA IMAGEM",
      isActive: true,
      ownerId: 1911,
      ownerName: "anunciante",
      ownnerImg: imgOwner,
    },
    {
      Tipo: "Sell",
      Titulo: "Ford bla bla",
      Ano: "2020",
      Quilometragem: "0 km",
      Preço: "10.000",
      Descrição: "Opcional",
      TipoDeVeiculo: "carro",
      imgCapa: img,
      firstImg: "URL DA IMAGEM",
      isActive: true,
      ownerId: 1911,
      ownerName: "anunciante",
      ownnerImg: imgOwner,
    },
    {
      Tipo: "Sell",
      Titulo: "Ford bla bla",
      Ano: "2020",
      Quilometragem: "0 km",
      Preço: "10.000",
      Descrição: "Opcional",
      TipoDeVeiculo: "carro",
      imgCapa: img,
      firstImg: "URL DA IMAGEM",
      isActive: true,
      ownerId: 1911,
      ownerName: "anunciante",
      ownnerImg: imgOwner,
    },
    {
      Tipo: "Sell",
      Titulo: "Ford bla bla",
      Ano: "2020",
      Quilometragem: "0 km",
      Preço: "10.000",
      Descrição: "Opcional",
      TipoDeVeiculo: "carro",
      imgCapa: img,
      firstImg: "URL DA IMAGEM",
      isActive: true,
      ownerId: 1911,
      ownerName: "anunciante",
      ownnerImg: imgOwner,
    },
    {
      Tipo: "Sell",
      Titulo: "Ford bla bla",
      Ano: "2020",
      Quilometragem: "0 km",
      Preço: "10.000",
      Descrição: "Opcional",
      TipoDeVeiculo: "carro",
      imgCapa: img,
      firstImg: "URL DA IMAGEM",
      isActive: true,
      ownerId: 1911,
      ownerName: "anunciante",
      ownnerImg: imgOwner,
    },
    {
      Tipo: "Sell",
      Titulo: "Ford bla bla",
      Ano: "2020",
      Quilometragem: "0 km",
      Preço: "10.000",
      Descrição: "Opcional",
      TipoDeVeiculo: "carro",
      imgCapa: img,
      firstImg: "URL DA IMAGEM",
      isActive: true,
      ownerId: 1911,
      ownerName: "anunciante",
      ownnerImg: imgOwner,
    },
    {
      Tipo: "Sell",
      Titulo: "Ford bla bla",
      Ano: "2020",
      Quilometragem: "0 km",
      Preço: "10.000",
      Descrição: "Opcional",
      TipoDeVeiculo: "carro",
      imgCapa: img,
      firstImg: "URL DA IMAGEM",
      isActive: true,
      ownerId: 1911,
      ownerName: "anunciante",
      ownnerImg: imgOwner,
    },
    {
      Tipo: "Sell",
      Titulo: "Ford bla bla",
      Ano: "2020",
      Quilometragem: "0 km",
      Preço: "10.000",
      Descrição: "Opcional",
      TipoDeVeiculo: "carro",
      imgCapa: img,
      firstImg: "URL DA IMAGEM",
      isActive: true,
      ownerId: 1911,
      ownerName: "anunciante",
      ownnerImg: imgOwner,
    },
  ]);
  return (
    <AdShowcaseStyled>
      <h2 className="TypeOfAd">{title}</h2>
      <ul className="UlAd">
        {products.map((product: IProduct) =>
          product.TipoDeVeiculo === type ? (
            <ProductCard product={product} />
          ) : (
            <></>
          )
        )}
      </ul>
    </AdShowcaseStyled>
  );
};

export default AdShowcase;
