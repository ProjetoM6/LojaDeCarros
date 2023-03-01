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

  .divP button {
    width: 78%;
    margin: 10px 0;
    padding: 6px;
    border: 1.5px solid var(--color-brand-4);
    border-radius: 4px;
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    font-family: "Inter";
    cursor: pointer;
  }

  .DivButtons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
`;

/// ** Modal Editar ** ///

export const EditFormStyled = styled.form`
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

  .DivRadio {
    display: flex;
    flex-direction: column;
    font-family: "Inter";

    h2 {
      margin: 6px 0;
    }

    input {
      width: 20%;
    }

    .DisplayFlex {
      display: flex;
      justify-content: center;
    }
  }

  .DivInfo {
    display: flex;
    flex-direction: column;
    font-family: "Inter";

    h2 {
      margin: 6px 0;
    }

    label {
      margin: 4px 0;
    }

    input {
      width: 100%;
      padding: 4px 0;
      border: none;
      font-family: "Inter";
      margin: 0 6px;
    }

    .description {
      padding: 14px 0;
    }
    .DisplayFlex {
      display: flex;
      justify-content: center;
    }
  }

  .divP button {
    width: 78%;
    margin: 10px 0;
    padding: 6px;
    border: 1.5px solid var(--color-brand-4);
    border-radius: 4px;
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    font-family: "Inter";
    cursor: pointer;
  }

  .divP button:hover {
    border: 1.5px solid var(--color-brand-1);
    background-color: var(--color-brand-1);
    color: var(--white-fixed);
  }

  .DivButtons {
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: "Inter";
    position: relative;
  }

  .DivButtons .delete {
    width: 50%;
    background-color: var(--color-grey-6);
    border: none;
    border-radius: 4px;
    margin: 0 8px;
  }

  .DivButtons .delete:hover {
    cursor: pointer;
    background-color: var(--color-alert-1);
    color: var(--white-fixed);
  }

  .DivButtons .edit {
    width: 40%;
    padding: 12px 0;
    background-color: var(--color-brand-3);
    color: var(--color-brand-4);
    border: none;
    border-radius: 4px;
  }

  .DivButtons .edit:hover {
    cursor: pointer;
    background-color: var(--color-brand-1);
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
