import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useUser } from "../../hooks/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/Api";
import { toast } from "react-toastify";
import { Link ,} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Botao } from "../../components";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerInput,
  LoginImg,

  P,
  ErrorsInput,

} from "./styles";


import loginImg from "../../assets/codeburgerlogo.png";


export const Login = () => {
  const navegate = useNavigate();
  
  const { putUserData} = useUser();
  
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("erro nas caracteristcas do email  ")
      .required("email e obrigatorio "),
    password: Yup.string()
      .min(6, "A senha precisa ter no minimo 6 caracteres ")
      .required("a senha e obrigatorio "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("session", {
        email: clientData.email,
        password: clientData.password,
     
      }),
      {
        pending: "verificando dados ",
        success:'seja bem-vindo ao code-burger',
        error: "algo esta errado verifigue seus dados",
      }
    );

    putUserData(data);
 

    setTimeout(()=>{

      if(data.admin){ 
      
        navegate('/pedidos')
      } 
      else{
         navegate('/')}
     

    },2000)
    
  };

  return (
    <Container>
      <ContainerLeft />

      <ContainerRight noValidate onSubmit={handleSubmit(onSubmit)}>
        <LoginImg src={loginImg} />
        <h1>login</h1>

        <ContainerInput>
          <label>nome </label>
          <input
            type="email"
            {...register("email")}
            error={errors?.email?.message}
          />

          <ErrorsInput>{errors?.email?.message}</ErrorsInput>
        </ContainerInput>

        <ContainerInput>
          <label>senha</label>
          <input
            type="password"
            {...register("password")}
            error={errors?.password?.message}
          />

          <ErrorsInput>{errors?.password?.message}</ErrorsInput>
        </ContainerInput>
        <Botao type="submit">entrar</Botao>

        <P>
          nao possui conta?<Link style={{color:'#9758a6'
          }} to="/cadastro"> clique aqui</Link>
        </P>
      </ContainerRight>
    </Container>
  );
};
