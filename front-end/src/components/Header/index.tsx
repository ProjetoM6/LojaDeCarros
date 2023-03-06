import { HeaderContainer } from "./styles";
import logo from "../../assets/icons/Motors shop.png";
import { MainHeaderContent } from "./styles";
import { SideHeaderContent } from "./styles";
import Button from "../Button/style";
import { LoggedUser } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import DropDownMenu from "../DropDownMenu";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const AppHeader = () => {
  const { user, navigate } = useContext(AuthContext);
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <HeaderContainer>
      <MainHeaderContent>
        <img src={logo} alt="Motors Shop Logo" onClick={() => navigate("/")} />
        <nav>
          <a href="#">Carros</a>
          <a href="#">Motos</a>
          <a href="#">Leilão</a>
        </nav>
      </MainHeaderContent>
      {!user ? (
        <SideHeaderContent>
          <a href="login">Fazer Login</a>
          <Button
            width="big"
            color="var(--color-grey-2)"
            background="var(--white-fixed)"
            hover="var(--color-grey-7)"
            borderColor="var(--color-grey-6)"
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </Button>
          <GiHamburgerMenu
            className="mobileMenuIcon"
            size={30}
            onClick={() => setOpenDropDown((prev) => !prev)}
          />
        </SideHeaderContent>
      ) : (
        <SideHeaderContent onClick={() => setOpenDropDown((prev) => !prev)}>
          <LoggedUser>
            <img src={""} alt="" />
            <h2>{user?.name}</h2>
          </LoggedUser>

          <GiHamburgerMenu className="mobileMenuIcon" size={30} />
        </SideHeaderContent>
      )}
      {openDropDown && <DropDownMenu />}
    </HeaderContainer>
  );
};

export default AppHeader;
