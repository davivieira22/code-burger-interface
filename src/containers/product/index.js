import React, { useEffect, useState } from "react";
import ProductLogo from "../../assets/LogoProduct.png";
import {CardProduct} from "../../components/cardProduct";
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
} from "./styles";
import api from "../../services/Api";

export const Products = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [product, setProduct] = useState(0);

  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("categories");

      const newCategories = [{ id: 0, name: "todas" }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get("products");
     
    setProduct(data)
    }
    loadProducts();
    loadCategorias();
  }, []);
  return (
    <Container>
      <ProductsImg src={ProductLogo} alt="logo da Product" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
              isActiveCategory={activeCategory === category.id}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>

      <ProductsContainer>
        {product &&
          product.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  );
};
