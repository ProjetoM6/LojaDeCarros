import styled from "styled-components";

export const LoginPage = styled.div`
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
      padding: 60px;
      font-family: "Inter";
      font-size: 12px;
      font-weight: 500;
      border-radius: 4px;
      background-color: var(--color-grey-10);
    }

    h1 {
      font-family: "Lexend";
      margin-bottom: 20px;
    }

    .info {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 600;
      }

      input {
        border-radius: 4px;
        border: 1.5px solid #f1f3f5;
        padding: 4px 16px;
        margin: 4px 0;
        background-color: var(--color-grey-8);
        margin: 10px 0;
      }

      input:focus {
        outline: 1.5px solid #5126ea;
      }
    }

    a {
      color: var(--color-grey-2);
      position: relative;
      left: 80px;
      margin: 20px 0;
      text-decoration: none;
    }

    .buttonLogin {
      display: flex;
      justify-content: center;
      margin: 20px 0;

      button {
        width: 100%;
        background-color: var(--color-brand-1);
        color: var(--white-fixed);
        font-weight: 600;
        border: 1.5px solid #4529e6;
        border-radius: 4px;
        padding: 12px 28px;
        cursor: pointer;
      }
    }

    button:hover {
      background-color: var(--color-brand-3);
    }

    p {
      font-family: "Inter";
      text-align: center;
      margin: 20px 0;
    }

    .buttonRegister {
      display: flex;
      justify-content: center;
      margin: 10px 0;

      button {
        width: 100%;
        background-color: var(--color-grey-10);
        color: var(--color-grey-0);
        border-color: var(--color-grey-3);
        font-weight: 600;
        border-radius: 4px;
        padding: 12px 28px;
        cursor: pointer;
      }
    }
  }
`;
