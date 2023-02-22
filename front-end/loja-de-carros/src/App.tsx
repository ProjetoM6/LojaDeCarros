import Button from "./components/Button/style";
import ProductCard from "./components/ProductCard";
import Global from "./styles/global";
function App() {
  return (
    <>
      <Global />
      <ProductCard />
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-grey-0)"
        hover="var(--color-grey-1)"
      >
        Teste 1
      </Button>
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-grey-1)"
        hover="var(--color-grey-2)"
      >
        Teste 2
      </Button>
      <Button
        width="big"
        color="var(--color-grey-2)"
        background="var(--color-grey-6)"
        hover="var(--color-grey-7)"
      >
        Teste 3
      </Button>
      <Button
        width="big"
        color="var(--color-grey-2)"
        background="var(--color-grey-5)"
        hover="var(--color-grey-6)"
      >
        Teste 4
      </Button>
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-grey-5)"
        hover="var(--color-grey-6)"
      >
        Teste 5
      </Button>
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-grey-0)"
        hover="var(--color-grey-1)"
      >
        Teste 6
      </Button>
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-brand-1)"
        hover="var(--color-brand-2)"
      >
        Teste 7
      </Button>
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-brand-2)"
        hover="var(--color-brand-1)"
      >
        Teste 8
      </Button>
      <Button
        width="big"
        color="var(--color-brand-1)"
        background="var(--color-brand-4)"
        hover="var(--white-fixed)"
      >
        Teste 9
      </Button>
      <Button
        width="big"
        color="var(--color-grey-1)"
        background="var(--color-grey-10)"
        hover="var(--color-grey-9)"
      >
        Teste 10
      </Button>
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-grey-10)"
        hover="var(--color-grey-1)"
      >
        Teste 11
      </Button>
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-grey-0)"
        hover="var(--color-grey-1)"
      >
        Teste
      </Button>
      <Button
        width="big"
        color="var(--white-fixed)"
        background="var(--color-grey-0)"
        hover="var(--color-grey-1)"
      >
        Teste
      </Button>
    </>
  );
}

export default App;
