import React from "react";
import HomeLogo from "../../assets/logo.png";
import {Container,HomeImg} from "./styles";
import { CategoryCarousel } from "../../components/CategoryCarousel";
export const Home = () => {
  return (
    <Container>
   <HomeImg src={HomeLogo} alt="logo da Home"/>
   <CategoryCarousel/>
    </Container>
  );
};
