import React, { useEffect, useState } from "react";
import { DropDownMenuContainer, MobileLoggedUser } from "./styles";
import Button from "../Button/style";

const DropDownMenu = () => {
  const [isMobile, setMobile] = useState(false);

  const user = {
    name: "Raimundo",
    img: "https://i.stack.imgur.com/YaL3s.jpg",
  };
  const token = true;
  return (
    <DropDownMenuContainer>
      <nav className="mobileButtons">
        <a href="#">Carros</a>
        <a href="#">Motos</a>
        <a href="#">Leilão</a>
      </nav>
      {token && (
        <nav>
          <a href="#">Editar Perfil</a>
          <a href="#">Editar endereço</a>
          <a href="#">Meus Anúncios</a>
          <a href="#">Sair</a>
        </nav>
      )}

      {!token ? (
        <div>
          <button>Fazer Login</button>
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
      ) : (
        <MobileLoggedUser>
          <img src={user.img} alt="" />
          <h2>{user.name}</h2>
        </MobileLoggedUser>
      )}
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
