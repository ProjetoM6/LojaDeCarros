import React, { useState } from "react";
import Footer from "./components/Footer";
import AppHeader from "./components/Header";
import Modal from "./components/Modal";
import Global from "./styles/global";
import FormCreateAnnouncement from "./components/Forms/CreateAnnouncement";

function App() {

  const [isOpenModal, setIsOpenModal] = useState(true)

  return (
    <>
      <Global />
      { isOpenModal && <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <FormCreateAnnouncement />
      </Modal>}
      <AppHeader />
      {/* <Footer /> */}
    </>
  );
}

export default App;
