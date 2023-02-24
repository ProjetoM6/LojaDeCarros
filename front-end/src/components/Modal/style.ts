import styled from "styled-components";

const ModalStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  div {
    background-color: red;
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 400px;
    min-height: auto;
    margin: 5vh auto;
    position: relative;
    background-color: var(--grey-2);
    border-radius: 0 0 5px 5px;
    align-items: center;

    .closeModal {
      padding: 0px;
      height: 28px;
      position: absolute;
      right: 30px;
      top: 10px;
      background-color: transparent;
      border: none;
      svg {
        path {
          color: var(--color-grey-4);
          &:hover {
            color: var(--color-grey-3);
          }
        }
      }
    }
    .header {
      border-radius: 5px 5px 0 0;
    }
    form {
      border-radius: 0;
      width: 90%;
    }
  }
  header {
    min-height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px 0 25px;
    background-color: var(--grey-2);
    border-radius: 5px 5px 0 0;
    h3 {
      min-height: 100%;
      color: var(--color-primary);
    }
  }
`;

export default ModalStyled;
