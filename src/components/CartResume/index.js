import React, { useState, useEffect } from "react";
import { Botao } from "../botao";
import { Container } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import api from "../../services/Api"
import {toast} from "react-toastify"

export const CartResume = () => {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliverytex] = useState(5);
  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts, deliverytex]);

const submitOrder = async () =>{
  const order = cartProducts.map(product => {
    return { id:product.id , quantity:product.quantity }
  })

  await toast.promise(  api.post("orders", { products: order }),{
    pending:"enviando pedido....",
    success:"seu pedido foi enviado ",
    error:"erro no sistema tente outra vez"
  })
  
  
  

}
 

  return (
    <div>
      <Container>
        <div className="Container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="itens">itens</p>
          <p className="itens-price"> {formatCurrency(finalPrice)}</p>
          <p className="tex">taxa de entrega</p>
          <p className="velue-tex">{formatCurrency(deliverytex)}</p>
        </div>
        <div className="container-end">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliverytex)}</p>
        </div>
        <Botao  style={{ width: "100%", margintop: "30px" }}  onClick= {submitOrder}  >
          finalizar pedido
        </Botao>
      </Container>
    </div>
  );
};
