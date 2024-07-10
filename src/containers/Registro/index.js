import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerInput,
  LoginImg,
 
  P,
  ErrorsInput,
} from "./styles";
import { Botao } from "../../components/botao";

import loginImg from "../../assets/logo.png";
import { toast } from "react-toastify";

export const Registro = () => {
const navegate =useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string("o nome e obrigatiro").required("o nome e obrigatorio"),

    email: Yup.string()
      .email("erro nas caracteristcas do email  ")
      .required("email e obrigatorio "),

    password: Yup.string()
      .min(6, "A senha precisa ter no minimo 6 caracteres ")
      .required("a senha e obrigatorio "),

    confirmPassword: Yup.string()
      .min(6, "A senha precisa ter no minimo 6 caracteres ")
      .required("a senha e obrigatorio ")
      .oneOf([Yup.ref("password")], "as senhas devem ser iguais "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (Data) => {
    try {
      const { status } = await api.post(
        "users",
        {
          name: Data.name,
          email: Data.email,
          password: Data.password,
        },
        { validateStatus: () => true }
      );
      if (status === 201 || status === 200) {
        setTimeout(() => {
          navegate('/login')
        },2000);
        toast.success("cadastro criado com sucesso");
      } else if (status === 409) {
        toast.error(" email ja cadastrado fazer logion ");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("falha no sistema tente outra vez ");
    }
  };

  return (
    <Container>
      <ContainerLeft />

      <ContainerRight noValidate onSubmit={handleSubmit(onSubmit)}>
        <LoginImg src={loginImg} />
        <h1>Registrar-se</h1>
        <ContainerInput>
          <label>Nome </label>
          <input
            type="text"
            {...register("name")}
            error={errors?.name?.message}
          />

          <ErrorsInput>{errors?.email?.message}</ErrorsInput>
        </ContainerInput>

        <ContainerInput>
          <label>Emal </label>
          <input
            type="email"
            {...register("email")}
            error={errors?.email?.message}
          />

          <ErrorsInput>{errors?.email?.message}</ErrorsInput>
        </ContainerInput>

        <ContainerInput>
          <label>Senha</label>
          <input
            type="password"
            {...register("password")}
            error={errors?.password?.message}
          />

          <ErrorsInput>{errors?.password?.message}</ErrorsInput>
        </ContainerInput>

        <ContainerInput>
          <label>Confirma senha </label>
          <input
            type="password"
            {...register("confirmPassword")}
            error={errors?.confirmPassword?.message}
          />

          <ErrorsInput>{errors?.confirmPassword?.message}</ErrorsInput>
        </ContainerInput>

        <Botao type="submit">registra</Botao>

        <P>
          se ja possui conta!<Link style={{color: '#9758a6'}}
           to='/login'> clique aqui</Link>
        </P>
      </ContainerRight>
    </Container>
  );
};
