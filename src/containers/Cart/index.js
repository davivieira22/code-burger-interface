import React from "react";
import CartLogo from "../../assets/cartPro.png";
import {Container,CartImg} from "./styles";
import {CartItems } from "../../components";

export const Cart = () => {
  return (
    <Container>
   <CartImg src={CartLogo} alt="logo do carinho"/>
  <CartItems/>

    </Container>
  );
};
