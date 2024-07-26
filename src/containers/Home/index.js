import React from "react";
import HomeLogo from "../../assets/logo.png";
import {Container,HomeImg} from "./styles";
import { CategoryCarousel } from "../../components/CategoryCarousel";
import {OffersCarosel} from "../../components/ofertasCarrosel"
export const Home = () => {
  return (
    <Container>
   <HomeImg src={HomeLogo} alt="logo da Home"/>
   <CategoryCarousel/>
   <OffersCarosel/>

    </Container>
  );
};
