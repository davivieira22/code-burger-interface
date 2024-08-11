import React from "react";
import CartLogo from "../../assets/cartPro.png";
import {Container,CartImg,Wrapper} from "./styles";
import {CartItems,CartResume } from "../../components";

export const Cart = () => {
  return (
    <Container>
   <CartImg src={CartLogo} alt="logo do carinho"/>
   <Wrapper>
  <CartItems/>
  <CartResume/>
  </Wrapper>
    </Container>
  );
};
