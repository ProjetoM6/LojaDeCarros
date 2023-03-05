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
  return (
    <AdShowcaseStyled>
      <h2 className="TypeOfAd">{title}</h2>
      <ul className="UlAd">
        {announcements!.map(
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
