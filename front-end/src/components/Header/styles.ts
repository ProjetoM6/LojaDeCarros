import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .buttons {
    text-decoration: none;
    color: var(--color-grey-2);
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .buttons:hover{
    text-decoration: underline;
  }
`;

export const MainHeaderContent = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin-left: 60px;
    cursor: pointer;
  }
  nav {
    display: flex;
    gap: 44px;
    margin-right: 55px;
  }
  @media (max-width: 650px) {
    nav {
      display: none;
    }
  }
`;

export const SideHeaderContent = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  gap: 44px;
  align-items: center;
  justify-content: center;
  a {
    display: none;
  }
  button {
    display: none;
  }
  @media (min-width: 650px) {
    border-left: 2px solid var(--color-grey-6);
    .mobileMenuIcon {
      display: none;
    }
    a {
      display: block;
    }
    button {
      display: block;
    }
  }
`;

export const LoggedUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--color-grey-2);
  }
  @media (max-width: 650px) {
    img {
      display: none;
    }
    h2 {
      display: none;
    }
  }
`;
