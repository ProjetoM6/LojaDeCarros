import styled from "styled-components";

const AuctionShowcaseStyled = styled.section`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 25vh 0px 0px 20px;

  .titleAuction {
    display: none;
    /*     margin-bottom: 20px; */
  }

  .UlAuction {
    display: flex;
    width: 100%;
    overflow-x: auto;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .titleAuction {
      display: block;
    }
  }
  @media (min-width: 1024px) {
  }
`;

export default AuctionShowcaseStyled;
