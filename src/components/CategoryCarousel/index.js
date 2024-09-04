import React, { useEffect, useState } from "react";
import { 
  CategoryImg, 
  Container,
  ContaineItems,
  ImgCategory,
  Button } from "./styles";
import Category from "../../assets/CATEGORIAS.png";
import api from "../../services/Api";
import Carousel from "react-elastic-carousel";

export const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("categories");

      setCategories(data);
    }

    loadCategorias();
  }, []);

const breakPoints =[
  {width:1,itemsToShow:1},
  {width:400,itemsToShow:2},
  {width:600,itemsToShow:3},
  {width:900,itemsToShow:4},
 
]



  return (
    <Container>
      <CategoryImg src={Category} alt="image categoria" />

      <Carousel itemsToShow={3} style={{width:'90%'}} breakPoints={breakPoints}>

        {categories &&
          categories.map(category => (
            <ContaineItems key={category.id}>
              <ImgCategory src={category.url} alt="foto da categoria" />
              <Button
            to={{   
              pathname: '/produtos',
              status: {categoryId:category.id}}
           
            }
              
              >{category.name}</Button>
            </ContaineItems>
          )
            
          )}
      </Carousel>
    </Container>
  );
};
