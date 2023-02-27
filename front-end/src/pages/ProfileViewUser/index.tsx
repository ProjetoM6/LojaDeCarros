import imgOwner from "../../assets/Frame.svg";
import AdShowcase from "../../components/AdShowcase";
import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
const ProfileViewUser = () => {
  return (
    <>
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
            </div>
          </section>
        </div>

        <AdShowcase type="carro" title="Carros"></AdShowcase>
        <AdShowcase type="moto" title="Motos"></AdShowcase>
      </main>
      <Footer />
    </>
  );
};

export default ProfileViewUser;
