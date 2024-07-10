import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyled from "./styles/GlobalStyled";
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./hooks/UserContext";
import { router } from './routes/routes';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
   

    </UserProvider>
      
 

    <ToastContainer autoClose={3000} theme="colored" />

    <GlobalStyled />
  </React.StrictMode>
);
