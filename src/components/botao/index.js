import React from "react";
import { Button } from "./styles";


export const Botao = ({children,...props}) => {
   
  return <Button {...props}>{children}</Button>;
};
