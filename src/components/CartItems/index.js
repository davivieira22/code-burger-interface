import React from "react";
import { useCart } from "../../hooks/CartContext";
import { Container, Header, Body, EmptyCart } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

export const CartItems = () => {
  const { cartProducts,increaseProducts,cardLess } = useCart();
  console.log(cartProducts);

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>preço</p>
        <p style={{ paddingRight: 30 }}>quantidade</p>
        <p>total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt="imagem do produto" />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={()=>cardLess(product.id)}>-</button>
              <p>{product.quantity} </p>
              <button onClick={()=> increaseProducts(product.id) }>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>o carrinho esta vazio</EmptyCart>
      )}
    </Container>
  );
};
