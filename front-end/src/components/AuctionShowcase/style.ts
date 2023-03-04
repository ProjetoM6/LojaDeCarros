import styled from "styled-components";

const AuctionShowcaseStyled = styled.section`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 15vh 0px 0px 60px;

  .titleAuction {
    display: flex;
    margin-bottom: 20px;
    font-family: "Lexend";
  }

  .UlAuction {
    display: flex;
    width: 100%;
    overflow-x: auto;
    gap: 20px;
  }

  @media (max-width: 426px) {
    position: relative;
    right: 40px;

    .titleAuction {
      display: flex;
    }
  }
  @media (min-width: 1024px) {
  }
`;

export default AuctionShowcaseStyled;
