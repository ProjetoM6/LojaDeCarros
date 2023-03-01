import styled from "styled-components";

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 10px;
  font-family: "Inter";
  font-size: 16px;
  border: 1.5px solid var(--color-grey-6);
  border-radius: 4px;

  &::placeholder {
    color: var(--color-grey-3);
  }
  &:focus {
    border-color: var(--color-grey-1);
  }
`;

export default InputStyled;
