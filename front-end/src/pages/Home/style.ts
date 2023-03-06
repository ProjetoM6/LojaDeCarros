import styled from "styled-components";

const ContainerProfilePage = styled.div`
  background-color: var(--color-grey-8);
  main {
    margin-bottom: 18vh;
  }

  .azul {
    width: 100%;
    background-color: var(--color-brand-1);
    margin: 0 auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    position: absolute;
    left: 300px;
    top: 60px;

    h2 {
      font-family: "Lexend";
      color: var(--white-fixed);
      text-align: center;
    }

    p {
      font-family: "Inter";
      color: var(--white-fixed);
      margin: 20px 0;
    }
  }

  .divButton {
    display: flex;

    button {
      font-family: "Inter";
      background-color: var(--color-brand-1);
      color: var(--white-fixed);
      border-color: var(--white-fixed);
      border-radius: 4px;
      width: 100%;
      padding: 10px 40px;
      margin: 20px 10px;
      cursor: pointer;
    }

    button:hover {
      font-size: 14px;
      border: white 1px solid;
    }
  }
  .ContainerAdverts {
    margin: 20vh auto;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .azul {
      margin: 0;
    }

    .container {
      width: 85%;
      position: absolute;
      left: 30px;
      top: 30px;
      margin: 0 auto;

      h2 {
        font-size: 32px;
        text-align: center;
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }

    .divButton {
      display: flex;
      flex-direction: column;
      width: 100%;

      button {
        margin: 4px 0;
        width: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    .ContainerUser {
      max-width: 70vw;
      left: 15%;
    }
  }
`;

export default ContainerProfilePage;
