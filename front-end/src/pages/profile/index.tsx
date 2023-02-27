import { useState } from "react";
import AdShowcase from "../../components/AdShowcase";
import Button from "../../components/Button/style";
import CardAuction from "../../components/CarAuction";
import Footer from "../../components/Footer";
import FormCreateAnnouncement from "../../components/Forms/CreateAnnouncement";
import AppHeader from "../../components/Header";
import Modal from "../../components/Modal";
import imgOwner from "../../assets/Frame.svg";
import ContainerProfilePage from "./style";

const ProfilePage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <ContainerProfilePage>
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
    </ContainerProfilePage>
  );
};

export default ProfilePage;
