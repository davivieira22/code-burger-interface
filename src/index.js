import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyled from "./styles/GlobalStyled";
import { Login } from "./containers/Login";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./hooks/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Login />
    </UserProvider>

    <ToastContainer autoClose={3000} theme="colored" />

    <GlobalStyled />
  </React.StrictMode>
);
