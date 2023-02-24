import CardAuction from "./components/CarAuction";
import AppHeader from "./components/Header";
import Global from "./styles/global";
import "./style.css";
import Button from "./components/Button/style";
import imgOwner from "./assets/Frame.svg";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Global />
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
        <section className="ContainerAdverts">
          <h2>Carros</h2>
          <ul>
            <ProductCard></ProductCard>
          </ul>
        </section>
        <section className="ContainerAdverts">
          <h2>Motos</h2>
          <ul>
            <ProductCard></ProductCard>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
