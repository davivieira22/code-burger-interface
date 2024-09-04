import React, { useEffect, useState } from "react";
import api from "../../services/Api";
import {
  Container,
  OfferImg,
  OfferItems,
  OfferImagem,
  OfferButton,
} from "./style";
import ImgOff from "../../assets/OFERTAS.png";
import Carousel from "react-elastic-carousel";
import {formatCurrency} from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";
export const OffersCarousel = () => {
  const [offers, setOffers] = useState([]);
  const {putProductInCart}=useCart()
  const Navigate = useNavigate();

  useEffect(() => {
    const offer = async () => {
      const { data } = await api.get("products");
      const onlyoffers = data.filter((product) => product.offer).map(product=>{
        return{...product,formatedPrice:formatCurrency(product.price)}
      })


      setOffers(onlyoffers);
    };
    offer();
  }, []);

  const breakPoints =[
    {width:1,itemsToShow:1},
    {width:400,itemsToShow:2},
    {width:600,itemsToShow:3},
    {width:900,itemsToShow:4},
   
  ]

  return (
    <Container>
      <OfferImg src={ImgOff} alt="foto da oferta " />
      <Carousel itemsToShow={4} style={{width:'90%'}} breakPoints={breakPoints}>
        {offers &&
          offers.map((offers) => (
            <OfferItems key={offers.id}>
              <OfferImagem src={offers.url} alt="foto do produto" />
              <p>{offers.name}</p>
              <p>{offers.formatedPrice} </p>
              <OfferButton onClick={() =>{putProductInCart(offers)
                  Navigate("/carinho")


                } 
              }
                
                >fazer pedido!</OfferButton>
            </OfferItems>
          ))}
      </Carousel>
    </Container>
  );
};
