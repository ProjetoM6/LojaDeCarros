import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-grey-8);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80.4vh;
    font-family: "Inter";
    font-size: 12px;
    font-weight: 500;
    border-radius: 4px;
    background-color: var(--color-grey-8);
    form {
      justify-content: space-between;
      margin: 0 auto;
      width: 300px;
      height: 400px;
      .text {
        text-align: center;
      }
    }
  }
`;
