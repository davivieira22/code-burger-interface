import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ImageProducts,
  ProductName,
  ProductPrice,
  
} from "./styles";

import {Botao}  from "../botao"

export const CardProduct = ({ product }) => {
  const {putProductInCart}=useCart()
  const Navigate = useNavigate();

  return (
    <Container>
      <ImageProducts src={product.url} alt="imagem do produto" />
      <div>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.formatedPrice}</ProductPrice>
      <Botao onClick={()=> {putProductInCart(product)
          Navigate("/carinho")
      }} style={ {width:'80%'}}>Adicionar</Botao>
      </div>
    </Container>

  );
};

CardProduct.propTypes = {
  product: PropTypes.object,
};
