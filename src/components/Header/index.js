import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import Usuario from "../../assets/usuario.png";
import Cart from "../../assets/cart.png";

import {
  Container,
  Containerleft,
  PageLink,
  ContainerRight,
  Line,
  ContainerText,
} from "./styles";

export const Header = () => {
  const Navigate = useNavigate();
  const { logout,userData } = useUser();

  const logoutUser = () => {
    logout();
    Navigate("/login");
  };

  return (
    <Container>
      <Containerleft>
        <PageLink onClick={() => Navigate("/")}>Home</PageLink>
        <PageLink onClick={() => Navigate("/produtos")}>Ver Produtos</PageLink>
      </Containerleft>

      <ContainerRight>
        <PageLink onClick={() => Navigate("/carinho")}>
          <img src={Cart} alt="foto do carrnho " />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Usuario} alt="foto do usuario " />
        </PageLink>

        <ContainerText>
          <p>Ola,{userData.name} </p>
          <PageLink style={{ color: "#9758a6" }} onClick={ logoutUser}>
            sair
          </PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
};
