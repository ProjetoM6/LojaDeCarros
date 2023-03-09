import React, { useEffect, useState, useContext } from "react";
import { DropDownMenuContainer, MobileLoggedUser } from "./styles";
import Button from "../Button/style";

import { AuthContext } from "../../context/AuthContext";

const DropDownMenu = () => {
  const { user, navigate, setIsOpenModalEditUser } = useContext(AuthContext);

  return (
    <DropDownMenuContainer>
      <nav className="mobileButtons">
        <a href="#">Carros</a>
        <a href="#">Motos</a>
        <a href="#">Leilão</a>
      </nav>
      {user && (
        <nav>
          <button onClick={() => setIsOpenModalEditUser(true)}>
            Editar Perfil
          </button>
          <a href="#">Editar endereço</a>
          <a href="#">Meus Anúncios</a>
          <a href="#">Sair</a>
        </nav>
      )}

      {!user ? (
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
          <img src="https://i.stack.imgur.com/YaL3s.jpg" alt="" />
          <h2>{user.name}</h2>
        </MobileLoggedUser>
      )}
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
