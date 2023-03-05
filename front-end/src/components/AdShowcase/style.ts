import styled from "styled-components";

const AdShowcaseStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 15vh 0px 0px 60px;
  .TypeOfAd {
    font-family: "Lexend";
    margin-bottom: 20px;
  }
  .UlAd {
    display: flex;
    width: 100%;
    margin: 0 auto;
    overflow-x: auto;
    gap: 20px;
    font-family: "Lexend";
  }
  @media (max-width: 426px) {
    position: relative;
    right: 40px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export default AdShowcaseStyled;
