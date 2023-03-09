import styled from "styled-components";

const CarAuctionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 45vw;
  min-height: 400px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  border-radius: 4px 4px 0px 0px;
  position: relative;
  font-family: "Lexend";
  overflow-y: hidden;

  .bodyAuction {
    min-height: 300px;
    padding: 0 50px;
    top: 90px;
    right: 30px;
    position: absolute;
    .imgCarAuction {
      width: 100%;
      object-fit: cover;
    }
    .ContainerFlexRow {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      position: absolute;
      bottom: 80px;
    }

    .ContainerFlexColumn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: absolute;
      top: 10px;
      left: 40px;
      min-height: 50%;
      h2 {
        color: var(--white-fixed);
      }
      .description {
        color: var(--color-grey-5);
      }
    }

    .ContainerInfoKmYearCarAuction {
      display: flex;
      gap: 12px;
      justify-content: space-between;
      width: 30%;

      .SpanInfosCarAuction {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 50px;
        height: 32px;
        color: var(--color-brand-1);
        background-color: var(--color-brand-4);
        border-radius: 4px;
      
      }
    }
    .value{
        color: var(--white-fixed);
      }
  }
  .ContainerFooterAuction {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    gap: 20px;
    background-color: var(--color-brand-1);
    position: absolute;
    bottom: 0;
    cursor: pointer;
  }

  .footerAuction{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
    
    p{
      color: var(--white-fixed);
    }
  }

  .ContainerFooterAuction:hover{
    background-color: var(--color-brand-2);
  }

  .divIcon{
    display: flex;
    font-size: 30px;
    color: var(--white-fixed)
  }

  @media (max-width: 768px){
    .bodyAuction{
      position: relative;
      right: 20px;
    }

    .ContainerFlexColumn{

    }
  }

  @media (min-width: 768px) {
    .bodyAuction {
      .imgCarAuction {
      }
      .ContainerFlexRow {
      }

      .ContainerFlexColumn {
        h2 {
        }
        .description {
        }
      }

      .ContainerInfoKmYearCarAuction {
        .SpanInfosCarAuction {
        }
      }
    }
    .ContainerFooterAuction {
    }

    .whiteFixed {
    }
  }

  @media (min-width: 1024px) {
    .bodyAuction {
      .imgCarAuction {
      }
      .ContainerFlexRow {
      }

      .ContainerFlexColumn {
        h2 {
        }
        .description {
        }
      }

      .ContainerInfoKmYearCarAuction {
        .SpanInfosCarAuction {
        }
      }
    }
    .ContainerFooterAuction {
    }

    .whiteFixed {
    }
  }
`;

export const TimerComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 36px;
  border-radius: 32px;
  background-color: var(--white-fixed);
  position: absolute;
  top: 33px;
  left: 22px;
`;

export default CarAuctionStyled;
