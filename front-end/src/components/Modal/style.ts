import styled from "styled-components";

const ModalStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 9999;

  .modalRef {
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 400px;
    min-height: 100vh;
    margin: 5vh auto;
    position: relative;

    .closeModal {
      height: 28px;
      position: absolute;
      right: 30px;
      top: 23px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      svg {
        path {
          color: var(--color-grey-4);
          &:hover {
            color: var(--color-grey-0);
          }
        }
      }
    }
  }
`;

export default ModalStyled;
