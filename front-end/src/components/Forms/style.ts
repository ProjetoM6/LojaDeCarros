import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: var(--white-fixed);
  padding: 20px;
  gap: 8px;
  border-radius: 8px;

  .title {
    margin: 6px 0;
    font-family: "Lexend";
  }

  .subTitle {
    margin: 6px 0;
    font-family: "Lexend";
  }

  .divInputRadio {
    display: flex;
    justify-content: space-around;
    gap: 2vw;
  }

  .description {
    padding: 10px;
    border: 1.5px solid var(--color-grey-6);
  }

  .DisplayFlex {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .DivButtons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
  .DivButtonsEdit {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
`;

/// ** Modal Excluir ** ///

export const DeleteFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: var(--white-fixed);
  padding: 20px;
  gap: 8px;
  border-radius: 8px;

  .TitleForm {
    display: flex;
    flex-direction: column;

    h1 {
      margin: 6px 0;
      font-family: "Lexend";
    }
  }

  .SubTitle {
    display: flex;
    margin: 10px 0;
  }

  h2 {
    font-family: "Lexend";
  }

  .divP {
    display: flex;
    margin: 10px 0;
  }

  p {
    font-family: "Inter";
  }

  .DivButtons {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    font-family: "Inter";
    position: relative;
    left: 150px;
  }

  .DivButtons .cancel {
    width: 30%;
    background-color: var(--color-grey-6);
    border: none;
    border-radius: 4px;
    font-family: "Inter";
  }

  .DivButtons .cancel:hover {
    cursor: pointer;
    background-color: var(--color-alert-1);
    color: var(--white-fixed);
  }

  .DivButtons .delete {
    width: 60%;
    padding: 12px 0;
    background-color: var(--color-alert-2);
    color: var(--color-alert-1);
    border: none;
    border-radius: 4px;
    font-family: "Inter";
  }

  .DivButtons .delete:hover {
    cursor: pointer;
    background-color: var(--color-alert-1);
    color: var(--white-fixed);
  }
`;
