import React, { useEffect, useState } from "react";
import ProductLogo from "../../assets/LogoProduct.png";
import { formatCurrency } from "../../utils/formatCurrency";
import { CardProduct ,Header} from "../../components";
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
} from "./styles";
import api from "../../services/Api";

export const Products = (props) => {
console.log(props)


  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [filterRedProduct, setFilteredProduct] = useState([]);
  useEffect(() => {
    async function loadCategorias() {
      const { data } = await api.get("categories");

      const newCategories = [{ id: 0, name: "todas" }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data: allProduct } = await api.get("products");

      const newProduct = allProduct.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) };
      });
      setProduct(newProduct);
    }
    loadProducts();
    loadCategorias();
  }, []);

  useEffect(()=>{
    if(activeCategory===0){
      setFilteredProduct(product)
    }
    else{   const newFilter= product.filter(
      products => products.category_id === activeCategory)

    

    setFilteredProduct(newFilter)
  }

   
  }, [activeCategory,product])

 

  return (
    <Container>
      <Header/>
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
        {filterRedProduct &&
         filterRedProduct.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  );
};
