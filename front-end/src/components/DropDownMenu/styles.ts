import styled from "styled-components";

export const DropDownMenuContainer = styled.div`
  width: 100%;
  height: 445px;
  background-color: white;
  position: absolute;
  top: 5.2rem;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  nav {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-top: 32px;
    margin-bottom: 64px;
    gap: 44px;
  }
  div {
    border-top: 2px solid var(--color-grey-6);
    height: 200px;
    gap: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      margin-left: 16px;
      padding-top: 32px;
    }
    button {
      margin: auto;
      margin-top: 0;
    }
  }
`;
