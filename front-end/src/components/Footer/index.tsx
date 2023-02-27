import { Link } from "react-scroll";
// import NegativeButton from '../buttons/negative';
import { Wrapper } from "./style";

export default function Footer({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <h1>Motors shop</h1>
      <span>@2022 - Todos os direitos reservados.</span>
      <Link to="top" spy={true} smooth={true} offset={0} duration={100}>
        <button style={{ transform: "rotate(90deg)" }}>&#10094;</button>
      </Link>
    </Wrapper>
  );
}
