import { useRef, useEffect, useState, useContext } from "react";
import Button from "../../components/Button/style";
import AppHeader from "../../components/Header";
import { AuthContext } from "../../context/AuthContext";
import ContainerViewAdPage, { AsideAdViewPage } from "./style";

const ViewAdPage = () => {
  const { announcementView, initialLetters } = useContext(AuthContext);
  const containerSectionAdRef = useRef<HTMLElement>(null);
  const containerAzul = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState<Number>(0);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    const heigthSectionAdRef = containerSectionAdRef.current?.offsetHeight;
    const heigthAzul = containerAzul.current?.offsetHeight;

    if (heigthSectionAdRef) {
      setMarginTop(heigthSectionAdRef - heigthAzul! + 50);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  return (
    <ContainerViewAdPage marginTopCommentDesktop={marginTop}>
      <AppHeader />
      <main>
        <div className="azul" ref={containerAzul}></div>
        <section className="containerSectionAd" ref={containerSectionAdRef}>
          <div className="containerCoverImage">
            <img
              src={announcementView?.img_cover}
              alt=""
              className="coverImg"
            />
          </div>
          <div className="containerInfosAd">
            <h2 className="--heading-6-600">{announcementView?.title}</h2>
            <div className="containerFlexColumn">
              <div className="containerInfoKmYear">
                <span className="spanInfos">{announcementView?.year}</span>
                <span className="spanInfos">{announcementView?.km} Km</span>
              </div>
              <span className="heading-7-500">{announcementView?.price}</span>
            </div>
            <Button
              width={"medium"}
              background={"var(--color-brand-1)"}
              color="var(--white-fixed)"
              hover="var(--color-brand-2)"
            >
              Comprar
            </Button>
          </div>
          <div className="containerDescription">
            <h2>Descrição</h2>
            <p>{announcementView?.description}</p>
          </div>
        </section>
        <AsideAdViewPage marginTop={marginTop}>
          <div className="containerGallery">
            <h2 className="heading-6-600">Fotos</h2>
            <ul className="gallery">
              <li className="img">
                <img src="" alt="" />
              </li>
            </ul>
          </div>
          <div className="containerAdvertiser">
            <div className="divInitials">
              <p className="pInitials">
                {initialLetters(
                  announcementView?.ownerName || "Nome do anunciante"
                )}
              </p>
            </div>
            <h2>{announcementView?.ownerName || "Nome do anunciante"}</h2>
            <p>
              {announcementView?.ownerDescription ||
                "Descrição do anunciante indisponivel"}
            </p>
            <Button
              background="var(--color-grey-0)"
              color="var(--white-fixed)"
              hover="var(--color-grey-1)"
              width="larger"
            >
              Ver Todos anuncios
            </Button>
          </div>
        </AsideAdViewPage>
        <section className="containerComments">
          <ul className="comments">
            <h2 className="heading-6-600">Comentarios</h2>
            <li className="comment">
              <div className="ownerComent">
                <img src="" alt="" />
                <h3>Júlia Lima</h3>*<span>há 3 dias</span>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </li>
          </ul>
          <div className="makeComment">
            <div className="imgUserName">
              <img src="" alt="" />
              <h2 className="body-2-500">Usuario Logado</h2>
            </div>
            <form action="">
              <textarea name="" id="" cols={30} rows={10}></textarea>
              <Button
                width={"medium"}
                background={"var(--color-brand-1)"}
                color="var(--white-fixed)"
                hover="var(--color-brand-2)"
              >
                Comentar
              </Button>
              <label htmlFor="">
                Gostei muito!
                <input type="radio" name="assessment" value="Gostei muito!" />
              </label>
              <label htmlFor="">
                Incrivel
                <input type="radio" name="assessment" value="Incrivel" />
              </label>
              <label htmlFor="">
                Recomendarei para meus amigos!
                <input
                  type="radio"
                  name="assessment"
                  value="Recomendarei para meus amigos!"
                />
              </label>
            </form>
          </div>
        </section>
      </main>
    </ContainerViewAdPage>
  );
};

export default ViewAdPage;
