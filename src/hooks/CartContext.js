import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const upDataLocalStorage = async (product) =>{
    await localStorage.setItem(
      "codeburger:cartInfo",
      JSON.stringify(product)
    );

  }

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newCartProducts = [];

    if (cartIndex >= 0) {
      newCartProducts = cartProducts;

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1;

      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }
    await upDataLocalStorage(newCartProducts)
   
  };
  const deleteProduct = async (productId) => {
    const newCard = cartProducts.filter((product) => product.id !== productId);

    setCartProducts(newCard);
    await upDataLocalStorage(newCard)
  };
  const increaseProducts = async (productId) => {
    const newCard = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });
    setCartProducts(newCard);
    await upDataLocalStorage(newCard)
  };

  const cardLess = async (productId) => {
    const cardIndex = cartProducts.findIndex((p) => p.id === productId);

    if (cartProducts[cardIndex].quantity > 1) {
      const Less = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
      setCartProducts(Less);
      
      await upDataLocalStorage(Less)
    }else{
      deleteProduct(productId)
    }
  };

  useEffect(() => {
    const loadUseDate = async () => {
      const clientCartData = await localStorage.getItem("codeburger:cartInfo");

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };
    loadUseDate();
  }, []);

  return (
    <CartContext.Provider
      value={{ putProductInCart, cartProducts, increaseProducts, cardLess }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used with UserContext");
  }

  return context;
};

CartProvider.prototypes = {
  children: PropTypes.node,
};
