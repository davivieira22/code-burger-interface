import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = async (userInfo) => {
    setUserData(userInfo);

    await localStorage.setItem(
      "code-burger:userData",
      JSON.stringify(userInfo)
    );
  };
  useEffect(() => {
    const loadUseDate = async () => {
      const clientInfo = await localStorage.getItem("code-burger:userData");

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };
    loadUseDate();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
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
