import React, { useState } from "react";
import Footer from "./components/Footer";
import CardAuction from "./components/CarAuction";
import AppHeader from "./components/Header";
import Modal from "./components/Modal";
import Global from "./styles/global";
import FormCreateAnnouncement from "./components/Forms/CreateAnnouncement";
import "./style.css";
import Button from "./components/Button/style";
import imgOwner from "./assets/Frame.svg";
import AdShowcase from "./components/AdShowcase";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Global />
      {isOpenModal && (
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
          <FormCreateAnnouncement />
        </Modal>
      )}
      <AppHeader />
      <main>
        <div className="azul">
          <section className="ContainerUser">
            <div className="ContainerInfos">
              <img src={imgOwner} className="ImgUser" />
              <div className="TypeUser">
                <h2>User usuario</h2>
                <span>tipo de user</span>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button
                background="var(--color-grey-10)"
                borderColor="var(--color-brand-1)"
                color="var(--color-brand-1)"
                width="larger"
                hover=""
                onClick={() => setIsOpenModal(true)}
              >
                Criar Anuncio
              </Button>
            </div>
          </section>
        </div>

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
    </>
  );
}

export default App;
