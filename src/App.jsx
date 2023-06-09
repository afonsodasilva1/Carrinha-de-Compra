import { GlobalStyle } from "./styles/GlobalStyle";
import CarrinhoContent from "./components/CarrinhoContent/CarrinhoContent";
import Container from "./components/Container/Container";


export default function App() {
  return (
    <>
      <Container>
        <CarrinhoContent />
      </Container>
      <GlobalStyle />
    </>
  )
}