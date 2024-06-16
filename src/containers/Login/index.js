import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerInput,
  LoginImg,
  A,
  P,
  ErrorsInput
} from "./styles";
import { Botao } from "../../conponents/botao";

import loginImg from "../../assets/logo.png";

export const Login = () => {
  const schema = Yup.object().shape({
    Email: Yup
    .string()
    .email("erro nas caracteristcas do email  ")
    .required("email e obrigatorio "),
    password: Yup
    .string()
    .min(6 ,"A senha precisa ter no minimo 6 caracteres ")
    .required("a senha e obrigatorio "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

 
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <ContainerLeft />

      <ContainerRight noValidate  onSubmit={handleSubmit(onSubmit)}>
        <LoginImg src={loginImg} />
        <h1>login</h1>

        <ContainerInput>
          <label>nome </label>
          <input type="email" {...register("Email")}
          error={errors?.Email.messagel} />

          <ErrorsInput>{errors?.Email.message}</ErrorsInput>
        </ContainerInput>

        <ContainerInput>
          <label>senha</label>
          <input type="password" {...register("password")}
           error={errors?.password.messagel}/>

          <ErrorsInput>{errors?.password.message}</ErrorsInput>
        </ContainerInput>
        <Botao type="submit">entrar</Botao>

        <P>
          nao possui conta?<A> clique aqui</A>
        </P>
      </ContainerRight>
    </Container>
  );
};
