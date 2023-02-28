import { Link } from "react-scroll";
import { Wrapper } from "./style";
import logoFooter from "../../assets/icons/footerImg.png"

export default function Footer({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <img src={logoFooter} alt="Logo Footer" />
      <span>@2022 - Todos os direitos reservados.</span>
      <Link to="top" spy={true} smooth={true} offset={0} duration={100}>
        <button style={{ transform: "rotate(90deg)" }}>&#10094;</button>
      </Link>
    </Wrapper>
  );
}
