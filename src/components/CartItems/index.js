import React from "react";
import {useCart} from "../../hooks/CartContext"
import {Container,Header,Body} from "./styles";


export const CartItems = () => {
  const  {cartProducts} = useCart()
console.log(cartProducts)

  return (
    <Container>
      <Header>
 <p></p>
 <p>Itens</p>
 <p>preço</p>
 <p>quantidade</p>
 <p>total</p>
 </Header>
 <Body>

 </Body>

  

    </Container>
  );
};
