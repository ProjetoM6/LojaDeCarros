import styled from "styled-components";
interface IPropsButton {
  width: "big" | "medium" | string;
  color: string;
  background: string;
  borderColor?: string;
  hover: string;
  colorHover?: string;
}
const Button = styled.button<IPropsButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  border: 1.5px solid;
  border-color: ${(props) => props.borderColor || "transparent"};
  border-radius: 4px;
  height: 38px;
  width: ${(props) =>
    props.width === "larger"
      ? "160px"
      : props.width === "big"
      ? "105px"
      : props.width === "medium"
      ? "80px"
      : props.width};
  color: ${(props) => props.color || "blue"};
  background: ${(props) => props.background || "var(--color-grey-0)"};

  &:hover {
    color: ${(props) => props.colorHover};
    background-color: ${(props) => props.hover};
    cursor: pointer;
  }
`;

export default Button;
