import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  ImageProducts,
  ProductName,
  ProductPrice,
  
} from "./styles";

import {Botao}  from "../botao"

export const CardProduct = ({ product }) => {
  return (
    <Container>
      <ImageProducts src={product.url} alt="imagem do produto" />
      <div>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
      <Botao style={ {width:'100%'}}>Adicionar</Botao>
      </div>
    </Container>

  );
};

CardProduct.propTypes = {
  product: PropTypes.object,
};
