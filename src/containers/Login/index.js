import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useUser } from "../../hooks/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/Api";
import { toast } from "react-toastify";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerInput,
  LoginImg,
  A,
  P,
  ErrorsInput,
} from "./styles";
import { Botao } from "../../components/botao";

import loginImg from "../../assets/logo.png";

export const Login = () => {
const users =useUser()

console.log(users)

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

  const onSubmit = async (Data) => {
    const response = await toast.promise(
      api.post("session", {
        email: Data.email,
        password: Data.password,
      }),
      {
        pending: "verificando dados ",
        success: "seja bem vindo(a) ao code-burger",
        error: "algo esta errado verifigue seus dados",
      }
    );

    console.log(response);
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
          nao possui conta?<A> clique aqui</A>
        </P>
      </ContainerRight>
    </Container>
  );
};
