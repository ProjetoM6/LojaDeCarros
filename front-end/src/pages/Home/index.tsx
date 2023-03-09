import { useContext, useEffect, useState } from "react";
import AdShowcase from "../../components/AdShowcase";
import AuctionShowcase from "../../components/AuctionShowcase";
import Footer from "../../components/Footer";
import FormCreateAnnouncement from "../../components/Forms/CreateAnnouncement";
import AppHeader from "../../components/Header";
import Modal from "../../components/Modal";
import { AuthContext } from "../../context/AuthContext";
import { IAnnouncement } from "../../context/interfaces";
import api from "../../services";
import ContainerProfilePage from "./style";
import FormEditProfile from "../../components/Forms/EditUserForm/index";
import FormEditAddress from "../../components/Forms/EditAddress/index";

const Homepage = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const {
    user,
    isOpenModalEditUser,
    setIsOpenModalEditUser,
    setIsOpenModalEditAddress,
    isOpenModalEditAddress,
  } = useContext(AuthContext);

  useEffect(() => {
    const requestAllAnnouncement = async () => {
      try {
        const res = await api.get("/user/announcement");
        setAnnouncements(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    requestAllAnnouncement();
  }, []);

  return (
    <ContainerProfilePage>
      {isOpenModalEditUser && (
        <Modal
          isOpenModal={isOpenModalEditUser}
          setIsOpenModal={setIsOpenModalEditUser}
        >
          <FormEditProfile />
        </Modal>
      )}

      {isOpenModalEditAddress && (
        <Modal
          isOpenModal={isOpenModalEditAddress}
          setIsOpenModal={setIsOpenModalEditAddress}
        >
          <FormEditAddress />
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

        <AuctionShowcase />

        <AdShowcase
          type="car"
          title="Carros"
          announcements={announcements}
        ></AdShowcase>
        <AdShowcase
          type="motocycle"
          title="Motos"
          announcements={announcements}
        ></AdShowcase>
      </main>
      <Footer />
    </ContainerProfilePage>
  );
};

export default Homepage;
