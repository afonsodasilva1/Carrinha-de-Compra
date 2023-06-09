import { useState } from "react";
import { Carrinho } from "./style";
import { ButtonBuy } from "../ButtonBuy/ButtonBuy";

const produts = {
  PC: {
    img: {
      src: "",
      alt: "Computador",
    },
    desc: "Computador gamer",
    price: "250.000",
  },
  TECLADO: {
    img: {
      src: "",
      alt: "Teclado",
    },
    desc: "Teclado luminoso",
    price: "8.000",
  },

  MOUSE: {
    img: {
      src: "",
      alt: "Mouse",
    },
    desc: "Mouse simples preto",
    price: "5.000",
  },

  PLACAGRAFICA: {
    img: {
      src: "",
      alt: "Placa grafica",
    },
    desc: "Placa de video GTX 2GB",
    price: "20.000",
  },
};

const totalPrices = () => {
  return Object.entries(produts)
    .map(([key, value]) => {
      return Number(value.price.replace(".", ""));
    })
    .reduce((first, last) => first + last);
};

const total = totalPrices();

export default function CarrinhoContent() {
  const prodctSize = Object.keys(produts).length;
  const [items, setItems] = useState(produts); // good
  const [totalPrice, setTotalPrice] = useState(0);


  return (
    <Carrinho>
      <header>
        <h1>Seu carrinho tem {prodctSize} Items</h1>
      </header>
      <ul>
        {Object.entries(produts).map(([key, value]) => {
          return (
            <li className="item" key={key}>
              <div className="description">
                <span>{value.desc}</span>
                <div className="price">
                  <strong>{value.price}, 00 KZ</strong>
                  <button
                    onClick={() => { 
                      setTotalPrice()
                    }}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <footer>
        <header>
          <p>
            {" "}
            Total: <span>{totalPrice}, 00 KZ</span>
          </p>
        </header>
        <ButtonBuy />
      </footer>
    </Carrinho>
  );
}
