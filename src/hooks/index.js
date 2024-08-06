import React from "react";
import PropTypes from "prop-types";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

export const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
);

AppProvider.prototypes = {
  children: PropTypes.node,
};


