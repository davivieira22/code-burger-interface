import React from "react";
import HomeLogo from "../../assets/logo.png";
import {Container,HomeImg} from "./styles";
import { CategoryCarousel,OffersCarosel } from "../../components";

export const Home = () => {
  return (
    <Container>
   <HomeImg src={HomeLogo} alt="logo da Home"/>
   <CategoryCarousel/>
   <OffersCarosel/>

    </Container>
  );
};
