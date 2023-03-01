import styled from "styled-components";

export const RegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-grey-8);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    font-family: "Inter";
    font-size: 12px;
    font-weight: 500;
    border-radius: 4px;
    margin: 5vh 0 5vh 0;
    background-color: var(--color-grey-8);
    form {
      justify-content: space-between;
      margin: 0 auto;
      width: 300px;
      height: auto;

      .divRadio {
        display: flex;
        gap: 10px;
      }
      .text {
        text-align: center;
      }
    }
  }
`;
