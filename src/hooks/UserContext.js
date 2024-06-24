import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const user = { name: "david ", age: 25 };
  const outroUser = { name: "larissa", age: 25 };
  return (
    <UserContext.Provider value={{user, outroUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with UserContext");
  }

  return context;
};

UserProvider.prototypes = {
  children: PropTypes.node,
};
