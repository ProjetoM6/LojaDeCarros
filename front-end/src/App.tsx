import CardAuction from "./components/CarAuction";
import AppHeader from "./components/Header";
import Global from "./styles/global";
import "./style.css"
import Button from "./components/Button/style";


const App = () =>{
  return (
    <>
      <Global />
      <AppHeader />
      {/* <CardAuction /> */}
      <main>
        <div className="azul">a</div>
        <section>
          <img src="" alt="" />
          <div>
            <h2>User usuario</h2> 
            <span>tipo de user</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <Button background="var(--color-grey-10)" borderColor="var(--color-brand-1)" color="var(--color-brand-1)" width="larger" hover="">Criar Anuncio</Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
