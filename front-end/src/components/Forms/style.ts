import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--white-fixed);
  margin: 0 auto;
  padding: 20px;
  gap: 20px;

  .TitleForm {
    display: flex;
    flex-direction: column;
    gap: 38px;
    height: 10vh;
    h1 {
      margin: 6px 0;
    }

    h2 {
      margin: 10px 0;
    }
  }

  .DivInfo {
    display: flex;
    flex-direction: column;

    .DivRadio {
      width: 100%;
    }

    h2 {
      margin: 10px 0;
    }

    input {
      width: 100%;
      padding: 4px 0;
      border: none;
    }
    .DisplayFlex {
      display: flex;
    }
  }

  .DivButtons {
    display: flex;
  }
`;

export const FormButton = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .radio {
    list-style: none;
  }
`;

export const FormInfo = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }

  input {
    width: 100%;
    padding: 4px 0;
    border: none;
  }
`;

export const NumberInfo = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  input {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const ImgInfo = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin: 10px 0;
  }

  input {
    width: 100%;
    padding: 4px;
    border: none;
  }
`;

export const FinalButton = styled.form`
  display: flex;
  flex-direction: row;
  /* margin: 0 auto; */

  .cancel button {
    width: 90%;
    padding: 20px;
    background-color: var(--color-grey-6);
    border: none;
    border-radius: 4px;
    margin: 0 4px;
  }

  .cancel button:hover {
    cursor: pointer;
    background-color: var(--color-alert-1);
    color: var(--white-fixed);
  }

  .create button {
    width: 100%;
    padding: 20px;
    background-color: var(--color-brand-3);
    color: var(--color-brand-4);
    border: none;
    border-radius: 4px;
  }

  .create button:hover {
    cursor: pointer;
    background-color: var(--color-brand-1);
  }
`;
