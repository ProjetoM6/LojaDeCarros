import styled from "styled-components";

const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 15px;
  position: relative;
  &:hover {
    .imgProduct {
      border: 2px solid var(--color-brand-2);
    }
  }
  .imgProduct {
    background-color: var(--color-grey-7);
    width: 100%;
    border: 2px solid transparent;
  }
  .ContainerFlexColumn {
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }

  .advertiser {
    display: flex;
    align-items: center;
    gap: 10px;
    .imgAdvertiser {
      max-width: 32px;
      min-height: 32px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .ContainerFlexRow {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .ContainerInfoKmYear {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
  .SpanInfos {
    width: auto;
    color: var(--color-brand-1);
    background-color: var(--color-brand-4);
  }

  .ContainerFlexRowButtons {
    display: flex;
    width: 100%;
    gap: 20px;
  }
`;

interface IPropsIsActive {
  isActive: boolean;
}

export const IsActive = styled.div<IPropsIsActive>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: ${(props) =>
    props.isActive ? "var(--color-brand-1)" : "var(--color-grey-4)"};
  position: absolute;
  left: 16px;
  top: 10px;
  p {
    color: var(--white-fixed);
  }
`;

export default ProductCardStyled;
