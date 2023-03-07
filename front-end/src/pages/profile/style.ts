import styled from "styled-components";

const ContainerProfilePage = styled.div`
  background-color: var(--color-grey-8);
  main {
    margin-bottom: 18vh;
  }

  .azul {
    width: 100%;
    height: 357px;
    background-color: var(--color-brand-1);
    position: relative;
    margin-bottom: 18vh;
  }

  .ContainerUser {
    display: flex;
    z-index: 9;
    width: 90vw;
    margin: 0 auto;
    height: 406px;
    position: absolute;
    background-color: var(--color-grey-10);
    top: 75px;
    left: 5%;
    border-radius: 4px;
  }

  .divInitials {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background-color: var(--color-brand-1);
    .pInitials {
      font-size: 48px;
      color: var(--white-fixed);
    }
  }

  .ContainerInfos {
    display: flex;
    flex-direction: column;
    padding: 50px 22px 0;
    gap: 24px;
  }

  .TypeUser {
    display: flex;
  }

  .ContainerAdverts {
    margin: 20vh auto;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    .ContainerUser {
      max-width: 70vw;
      left: 15%;
    }
  }
`;

export default ContainerProfilePage;
