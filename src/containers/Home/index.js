import React from "react";
import HomeLogo from "../../assets/logo.png";
import {Container,HomeImg} from "./styles";
import { CategoryCarousel,OffersCarousel,Header } from "../../components";

export const Home = () => {
  return (
    <Container>
      <Header/>
   <HomeImg src={HomeLogo} alt="logo da Home"/>
   <CategoryCarousel/>
   <OffersCarousel/>

    </Container>
  );
};
