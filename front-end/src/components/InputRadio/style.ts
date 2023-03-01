import styled from "styled-components";

const InputRadioStyled = styled.div`
  position: relative;
  width: 50%;
  height: 48px;
  background: var(--white-fixed);

  .labelRadio {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;

    .textSelect {
      z-index: 1;
    }
    .inputRadio[type="radio"] {
      all: unset;
      width: 100%;
      height: 100%;
      position: absolute;
      border: 1.5px solid var(--color-grey-4);
      border-radius: 4px;
    }
    .inputRadio[type="radio"]:checked {
      background-color: var(--color-brand-1);
      border-color: var(--color-brand-1);
    }
    .inputRadio[type="radio"]:checked + span {
      color: var(--white-fixed);
    }
  }
`;

export default InputRadioStyled;
