import styled from "styled-components";

const ModalStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 9999;
  .modalRef {
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 400px;
    min-height: auto;
    margin: 5vh auto;
    position: relative;
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
  }
`;

export default ModalStyled;
