import { useContext, useState } from "react";
import AdShowcase from "../../components/AdShowcase";
import Button from "../../components/Button/style";
import Footer from "../../components/Footer";
import FormCreateAnnouncement from "../../components/Forms/CreateAnnouncement";
import AppHeader from "../../components/Header";
import Modal from "../../components/Modal";
import imgOwner from "../../assets/Frame.svg";
import ContainerProfilePage from "./style";
import AuctionShowcase from "../../components/AuctionShowcase";
import { AuthContext } from "../../context/AuthContext";
import FormEditAnnouncement from "../../components/Forms/EditAnnouncement";
import FormDeleteAnnouncement from "../../components/Forms/DeleteAnnouncement";

const ProfilePage = () => {
  const {
    user,
    announcementUser,
    isLoading,
    navigate,
    isOpenModalCreate,
    setIsOpenModalCreate,
    isOpenModalEdit,
    setIsOpenModalEdit,
    isOpenModalDelete,
    setIsOpenModalDelete,
    initialLetters,
  } = useContext(AuthContext);

  console.log(isOpenModalCreate, isOpenModalEdit);

  if (isLoading) return <h1 className="loading">Carregando ...</h1>;

  if (!user) {
    navigate("/");
  }

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

      {isOpenModalEdit && (
        <Modal
          isOpenModal={isOpenModalEdit}
          setIsOpenModal={setIsOpenModalEdit}
        >
          <FormEditAnnouncement />
        </Modal>
      )}
      {isOpenModalDelete && (
        <Modal
          isOpenModal={isOpenModalDelete}
          setIsOpenModal={setIsOpenModalDelete}
        >
          <FormDeleteAnnouncement />
        </Modal>
      )}

      <AppHeader />
      <main>
        <div className="azul">
          <section className="ContainerUser">
            <div className="ContainerInfos">
              {/* <img src={imgOwner} className="ImgUser" /> */}
              <div className="divInitials">
                <p className="pInitials">{initialLetters(user!.name)}</p>
              </div>
              <div className="TypeUser">
                <h2>{user?.name}</h2>
                <span>{user?.type}</span>
              </div>
              <p>{user?.description}</p>
              <Button
                background="var(--color-grey-10)"
                borderColor="var(--color-brand-1)"
                color="var(--color-brand-1)"
                width="larger"
                hover="var(--color-brand-1)"
                colorHover="var(--white-fixed)"
                onClick={() => setIsOpenModalCreate(true)}
              >
                Criar Anuncio
              </Button>
            </div>
          </section>
        </div>
        <AuctionShowcase />
        <AdShowcase
          type="car"
          title="Carros"
          announcements={announcementUser}
        ></AdShowcase>
        <AdShowcase
          type="motocycle"
          title="Motos"
          announcements={announcementUser}
        ></AdShowcase>
      </main>
      <Footer />
    </ContainerProfilePage>
  );
};

export default ProfilePage;
