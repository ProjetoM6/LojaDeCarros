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

  .ImgUser {
    width: 104px;
    border-radius: 50%;
    object-fit: cover;
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

  .ContainerAuction {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0vh auto;
  }

  .TitleAuction {
    display: none;
  }

  .ContainerAdverts {
    margin: 20vh auto;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .UlAuction {
    display: flex;
    width: 100%;
    margin: 0 auto;
    overflow-x: auto;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    .ContainerUser {
      max-width: 70vw;
      left: 15%;
    }

    .TitleAuction {
      display: block;
    }
  }
`;

export default ContainerProfilePage;
