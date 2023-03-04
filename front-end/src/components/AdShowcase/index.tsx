import { useState } from "react";
import AdShowcaseStyled from "./style";
import imgOwner from "../../assets/Frame.svg";
import img from "../../assets/carroTeste.svg";
import ProductCard from "../ProductCard";
import { IAnnouncement } from "../../context/interfaces";

interface IAdShowCase {
  type: string;
  title: string;
  announcements: IAnnouncement[] | [] | undefined;
}
const AdShowcase = ({ type, title, announcements }: IAdShowCase) => {
  announcements = [
    {
      id: "123123g1123gg",
      type: "sell",
      title: "MOTO MOTO MOTO",
      year: "2020",
      km: "0 km",
      price: "R$ 10.000,00",
      type_vehicle: "moto",
      img_cover: img,
      createdAt: new Date(),
      isActive: true,
      description: "Opcional",
      ownerId: "1911",
      ownerName: "Anunciante Teste",
      ownnerImg: imgOwner,
    },
    {
      id: "123123ggg",
      type: "sell",
      title: "CARRO CARRO CARRO",
      year: "2020",
      km: "0 km",
      price: "R$ 10.000,00",
      type_vehicle: "carro",
      img_cover: img,
      createdAt: new Date(),
      isActive: true,
      description: "Opcional",
      ownerId: "1911",
      ownerName: "Anunciante Teste",
      ownnerImg: imgOwner,
    },
  ];
  return (
    <AdShowcaseStyled>
      <h2 className="TypeOfAd">{title}</h2>
      <ul className="UlAd">
        {announcements.map(
          (product: IAnnouncement) =>
            product.type_vehicle === type && (
              <ProductCard product={product} key={product.id} />
            )
        )}
      </ul>
    </AdShowcaseStyled>
  );
};

export default AdShowcase;
