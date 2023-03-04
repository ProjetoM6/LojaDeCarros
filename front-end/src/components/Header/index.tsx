import { HeaderContainer } from "./styles";
import logo from "../../assets/icons/Motors shop.png";
import { MainHeaderContent } from "./styles";
import { SideHeaderContent } from "./styles";
import Button from "../Button/style";
import { LoggedUser } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import DropDownMenu from "../DropDownMenu";

const AppHeader = () => {
  const token = true;
  const user = {
    name: "Raimundo",
    img: "https://i.stack.imgur.com/YaL3s.jpg",
  };
  return (
    <HeaderContainer>
      <MainHeaderContent>
        <img src={logo} alt="Motors Shop Logo" />
        <nav>
          <a href="#">Carros</a>
          <a href="#">Motos</a>
          <a href="#">Leilão</a>
        </nav>
      </MainHeaderContent>
      {!token ? (
        <SideHeaderContent>
          <a href="#">Fazer Login</a>
          <Button
            width="big"
            color="var(--color-grey-2)"
            background="var(--white-fixed)"
            hover="var(--color-grey-7)"
            borderColor="var(--color-grey-6)"
          >
            Cadastrar
          </Button>
        </SideHeaderContent>
      ) : (
        <SideHeaderContent>
          <LoggedUser>
            <img src={user.img} alt="" />
            <h2>{user.name}</h2>
          </LoggedUser>

          <GiHamburgerMenu className="mobileMenuIcon" size={30} />
        </SideHeaderContent>
      )}
      <DropDownMenu />
    </HeaderContainer>
  );
};

export default AppHeader;
