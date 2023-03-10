import React, { useEffect, useState, useContext } from "react";
import { DropDownMenuContainer, MobileLoggedUser } from "./styles";
import Button from "../Button/style";

import { AuthContext } from "../../context/AuthContext";

const DropDownMenu = () => {
  const {
    user,
    navigate,
    setIsOpenModalEditUser,
    setIsOpenModalEditAddress,
    isOpenModalEditAddress,
    isOpenModalEditUser,
  } = useContext(AuthContext);

  function logOut() {
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <DropDownMenuContainer>
      <nav className="mobileButtons">
        <button className="buttons">Carros</button>
        <button className="buttons">Motos</button>
        <button className="buttons">Leilão</button>
      </nav>
      {user && (
        <nav>
          <button
            className="buttons"
            onClick={() => setIsOpenModalEditUser(!isOpenModalEditUser)}
          >
            Editar Perfil
          </button>
          <button
            className="buttons"
            onClick={() => setIsOpenModalEditAddress(!isOpenModalEditAddress)}
          >
            Editar endereço
          </button>
          {user.type != "buyer" && <button className="buttons" onClick={()=> (navigate("/profile"))}> Meus Anúncios </button>}

          <button className="buttons" onClick={logOut}>
            Sair
          </button>
        </nav>
      )}

      {!user ? (
        <div>
          <button className="buttons">Fazer Login</button>
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
