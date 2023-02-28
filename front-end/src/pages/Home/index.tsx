import { useState } from "react";
import AdShowcase from "../../components/AdShowcase";
import CardAuction from "../../components/CarAuction";
import Footer from "../../components/Footer";
import FormCreateAnnouncement from "../../components/Forms/CreateAnnouncement";
import AppHeader from "../../components/Header";
import Modal from "../../components/Modal";
import ContainerProfilePage from "./style";

const Homepage = () => {
  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);

  return (
    <ContainerProfilePage>
      {isOpenModalCreate && (
        <Modal
          isOpenModal={isOpenModalCreate}
          setIsOpenModal={setIsOpenModalCreate}
        >
          <FormCreateAnnouncement />
        </Modal>
      )}
      <AppHeader />
      <main>
        <section className="azul">
            <div className="container">
              <h2 className="heading-1-700">
                Velocidade e experiência em um lugar feito para você
              </h2>
              <p className="body-1-400">
                Um ambiente feito para você explorar o seu melhor
              </p>
              <div className="divButton">
                <button>Carros</button>
                <button>Motos</button>
              </div>
            </div>
        </section>

        <section className="ContainerAuction">
          <h2 className="TitleAuction">Leilão</h2>
          <ul className="UlAuction">
            <CardAuction />
            <CardAuction />
          </ul>
        </section>

        <AdShowcase type="carro" title="Carros"></AdShowcase>
        <AdShowcase type="moto" title="Motos"></AdShowcase>
      </main>
      <Footer />
    </ContainerProfilePage>
  );
};

export default Homepage;
