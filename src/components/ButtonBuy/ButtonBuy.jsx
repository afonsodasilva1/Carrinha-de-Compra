import styled from "styled-components";
// import { total } from "../CarrinhoContent/CarrinhoContent";
const Button = styled.button`

  width: 100%;
  background: var(--bg-green-primary);
  border-radius: 0.4rem;
  color: var(--bg-white);

  padding: 1.2rem 0;
  border: none;
  outline: none;

  cursor: pointer;
  transtion: background 0.4s ease;

  &:hover{
    background: var(--bg-green-secondary);
  }
`;

export function ButtonBuy(){

  function verifyItems(total) {
    if(total !== 0){
      alert(`Items comprado(s) com sucesso! \nTotal: ${total} KZ `);
    }else{
      alert("Adicione primeiro um produto");
    }
  }
  return (
    <Button onClick={() => verifyItems(total)}>
      Finalizar compra
    </Button>
  )
}