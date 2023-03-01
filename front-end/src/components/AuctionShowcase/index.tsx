import CardAuction from "../CarAuction";
import AuctionShowcaseStyled from "./style";

const AuctionShowcase = () => {
  return (
    <AuctionShowcaseStyled>
      <h2 className="titleAuction">Leilão</h2>
      <ul className="UlAuction">
        <CardAuction />
        <CardAuction />
      </ul>
    </AuctionShowcaseStyled>
  );
};

export default AuctionShowcase;
