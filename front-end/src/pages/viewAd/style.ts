import styled from "styled-components";

const ContainerViewAdPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-8);
  main {
    margin-bottom: 18vh;
    position: relative;
    background: var(--color-grey-8);
    .containerSectionAd {
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: auto;
      width: 90%;
      margin: 0 auto;
      position: absolute;
      top: 40px;
      left: 5%;
      border-radius: 4px;

      .containerCoverImage {
        min-height: 350px;
        width: 100%;
        background-color: var(--color-grey-10);
        border-radius: 4px;
      }

      .containerInfosAd {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        width: 100%;
        padding: 36px 28px;
        gap: 32px;
        background: #fdfdfd;
        border-radius: 4px;
        .--heading-6-600 {
          font-size: 20px;
        }
        .containerFlexColumn {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .containerInfoKmYear {
            display: flex;
            gap: 20px;
            .spanInfos {
              padding: 5px;
              height: 24px;
              color: var(--color-brand-1);
              background-color: var(--color-brand-4);
            }
          }
          .heading-7-500 {
            color: var(--color-grey-1);
            line-height: 20px;
          }
        }
      }
      .containerDescription {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 36px 28px;
        gap: 32px;
        width: 100%;
        height: auto;
        background: var(--color-grey-10);
        border-radius: 4px;
      }
    }
    .containerComments {
      display: flex;
      flex-direction: column;
      margin: 5vh auto;
      gap: 24px;
      width: 90%;
      height: auto;
      border-radius: 4px;
      .comments {
        display: flex;
        flex-direction: column;
        gap: 32px;
        background: var(--color-grey-10);
        padding: 36px 28px;
        .comment {
          display: flex;
          flex-direction: column;
          gap: 16px;
          .ownerComent {
            display: flex;
            align-items: center;
            gap: 8px;
            height: 32px;
            img {
              width: 25px;
              border-radius: 50%;
              object-fit: cover;
            }
          }
        }
      }

      .makeComment {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
        height: auto;
        background: var(--color-grey-10);
        border-radius: 4px;

        .imgUserName {
          display: flex;
          gap: 8px;
          img {
            width: 25px;
            border-radius: 50%;
            object-fit: cover;
          }
          .body-2-500 {
            font-size: 24px;
            color: var(--color-grey-1);
          }
        }
      }
    }
  }

  .azul {
    width: 100%;
    height: 357px;
    background-color: var(--color-brand-1);
  }
`;

interface IAsideAdViewPage {
  marginTop: Number;
}
export const AsideAdViewPage = styled.aside<IAsideAdViewPage>`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  margin-top: ${(props) => `${props.marginTop}px`};
  width: 90%;
  background: var(--color-grey-8);

  .containerGallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 36px 28px;
    gap: 32px;
    width: 100%;
    height: 350px;
    background: var(--color-grey-10);
    border-radius: 4px;
  }

  .containerAdvertiser {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 28px;
    gap: 28px;
    width: 100%;
    height: auto;
    background: var(--color-grey-10);
    border-radius: 4px;
  }
`;

export default ContainerViewAdPage;
