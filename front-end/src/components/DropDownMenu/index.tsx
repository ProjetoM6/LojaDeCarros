import React from "react";
import { DropDownMenuContainer } from "./styles";
import Button from "../Button/style";

const DropDownMenu = () => {
  return (
    <DropDownMenuContainer>
      <nav>
        <a href="#">Carros</a>
        <a href="#">Motos</a>
        <a href="#">Leilão</a>
      </nav>
      <div>
        <a href="#">Fazer Login</a>
        <Button
          width="352px"
          color="var(--color-grey-2)"
          background="var(--white-fixed)"
          hover="var(--color-grey-7)"
          borderColor="var(--color-grey-6)"
        >
          Cadastrar
        </Button>
      </div>
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
