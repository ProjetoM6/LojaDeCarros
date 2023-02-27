import React, { useEffect, useState } from "react";
import { DropDownMenuContainer, MobileLoggedUser } from "./styles";
import Button from "../Button/style";

const DropDownMenu = () => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 650) {
      setMobile(true);
    }
  }, [window.innerWidth]);
  const user = {
    name: "Raimundo",
    img: "https://i.stack.imgur.com/YaL3s.jpg",
  };
  const token = true;
  return (
    <DropDownMenuContainer>
      {isMobile && (
        <nav>
          <a href="#">manga</a>
          <a href="#">Motos</a>
          <a href="#">Leilão</a>
        </nav>
      )}
      {!token ? (
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
