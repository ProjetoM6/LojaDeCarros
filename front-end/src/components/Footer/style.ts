import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: var(--color-grey-0);
  color: var(--white-fixed);
  border: none;
  padding: 45px 4vw;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-family: "Inter";
  }

  a{
    width: 40px;
  }

  button{
    width: 100%;
    padding: 10px;
    background-color: var(--color-grey-1);
    border: none;
    color: var(--white-fixed);
    cursor: pointer;
  }


  @media (max-width: 768px) {
    flex-direction: column;

    span {
      font-size: 15px;
      margin: 30px 0;
    }

    button{
      margin: 20px 0;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 13px;
    }
  }
`;