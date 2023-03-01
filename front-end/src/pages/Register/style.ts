import styled from "styled-components";

export const RegisterPage = styled.div`
  .geral {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background-color: var(--color-grey-8);

    .container {
      padding: 30px;
      font-family: "Inter";
      font-size: 12px;
      font-weight: 500;
      border-radius: 4px;
      background-color: var(--color-grey-10);
      margin-top: 40px;
      margin-bottom: 40px;
    }

    h1 {
      font-family: "Lexend";
      margin-bottom: 20px;
    }

    h2 {
      font-size: 14px;
      margin-bottom: 10px;
    }

    label {
      font-weight: 600;
    }

    input {
      border-radius: 4px;
      border: 1.5px solid #f1f3f5;
      padding: 4px 16px;
      margin: 4px 0;
      background-color: var(--color-grey-8);
    }

    .description {
      padding: 20px;
    }

    input:focus {
      outline: 1.5px solid #5126ea;
    }

    .info {
      display: flex;
      flex-direction: column;

      h2 {
        margin: 10px 0;
      }

      h3 {
        margin: 10px 0;
      }
    }

    .displayFlex{
      display: flex;
      align-items: center;
    }

    .divRadio{
        display: flex;
        justify-content: center;
    }

    .divButton{
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }

    button{
        width: 100%;
        background-color: var(--color-brand-1);
        color: var(--white-fixed);
        font-weight: 600;
        border: 1.5px solid #4529E6;
        border-radius: 4px;
        padding: 12px 28px;
        cursor: pointer;
    }

    button:hover{
        background-color: var(--color-brand-3);
    }
  }
`;
