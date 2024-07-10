import React, { useEffect, useState } from "react";
import { CategoryImg, Container} from "./styles";
import Category from "../../assets/CATEGORIAS.png";
import api from "../../services/Api";
import Carousel from "react-elastic-carousel";

export const CategoryCarousel = () => {

  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("categories");

      setCategories(data)
    }

    loadCategorias();
  },[]);

  return (
    <Container>
      <CategoryImg src={Category} alt="image categoria" />

      <Carousel itemsToShow={4}>
        {
          Categories && Categories.map(Category =>{
          <div key={Category.id}> <img src={Category.url} alt="foto da categoria "/>
            <button>{Category.name}</button>
            </div>
          })
           
        }
       
      </Carousel>
    </Container>
  );
};
