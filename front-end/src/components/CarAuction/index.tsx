import CarAuctionStyled, { TimerComponent } from "./style";
import timerIcon from "../../assets/icons/timer.svg";
import carAuction1 from "../../assets/carAuction1.svg";
import Button from "../Button/style";

const CardAuction = () => {
  return (
    <CarAuctionStyled>
      <TimerComponent>
        <img src={timerIcon} alt="" className="timerIcon" />
        <span className="heading-7-500">02:00:00</span>
      </TimerComponent>
      <div className="bodyAuction">
        <img src={carAuction1} alt="" className="imgCarAuction" />
        <div className="ContainerFlexColumn">
          <h2 className="heading-6-600">
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes
          </h2>
          <p className="body-1-400 description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry, lorem...
          </p>
        </div>
        <div className="ContainerFlexRow">
          <div className="ContainerInfoKmYearCarAuction">
            <span className="SpanInfosCarAuction">0 KM</span>
            <span className="SpanInfosCarAuction">2019</span>
          </div>
          <span className="heading-7-500">R$ 0000,00</span>
        </div>
      </div>
      <div className="ContainerFooterAuction">
        {true ? (
          <>
            <Button
              width="big"
              color="var(--white-fixed)"
              background="var(--color-brand-1)"
              borderColor="var(--white-fixed)"
              hover="var(--color-brand-2)"
            >
              Editar
            </Button>
            <Button
              width="big"
              color="var(--white-fixed)"
              background="var(--color-brand-1)"
              borderColor="var(--white-fixed)"
              hover="var(--color-brand-2)"
            >
              Ver como
            </Button>
          </>
        ) : (
          <p>Acessar pagina do leião</p>
        )}
      </div>
    </CarAuctionStyled>
  );
};

export default CardAuction;
