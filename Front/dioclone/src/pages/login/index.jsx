import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Main,
  Text,
  TextContainer,
  FormContainer,
  ButtonContainer,
  FormSubtitle,
  FormTitle,
  ActionContainer,
  FieldsContainer,
} from "./styles";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../service/userApiService";
import { useState,useEffect } from "react";

const Home = () => {

  const [usuario, setUsuario] = useState(null)

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um email válido.")
        .required("O email é obrigatório"),
      senha: yup
        .string()
        .min(5, "A senha deve ter no mínimo 5 caraceters")
        .required("A senha é obrigatória"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (formData) => {
    let msg = '';
    try {
        const response = await api.post(
            `login?Email=${encodeURIComponent(formData.email)}&Senha=${encodeURIComponent(formData.senha)}`
        );
        console.log("Resposta da API:", response.data);
        msg = response.data.mensagem;
        setUsuario(response.data.usuario);

    } catch (error) {
        console.error("Erro na requisição:", error);
        try {
            // Tenta converter a resposta de erro para JSON e pegar a mensagem
            const errorResponse = JSON.parse(error.request.response);
            msg = errorResponse.mensagem || "Erro desconhecido";
        } catch {
            msg = "Erro ao processar resposta do servidor";
        }
    } finally {
        alert(msg);
    }
};

  const login = useEffect(() =>{
    if(usuario) handleNavigate('feed')
  },[usuario,handleNavigate]);
      


  return (
    <>
      <Header />
      <Main>
        <TextContainer>
          <Text>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Text>
        </TextContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Faça seu Login</FormTitle>
          <FormSubtitle>Faça seu login e make the change._</FormSubtitle>
          <FieldsContainer>
            <Input
              name={"email"}
              control={control}
              InputIcon={MdEmail}
              placeholder={"E-mail"}
              errorMessage={errors.email?.message}
            />
            <Input
              name={"senha"}
              control={control}
              InputIcon={MdLock}
              placeholder={"Senha"}
              type={"password"}
              errorMessage={errors.senha?.message}
            />
          </FieldsContainer>
          <ButtonContainer>
            <Button
              text={"Entrar"}
              type="submit"
              variant="primary"
              btnpageactivated={"false"}
            />
          </ButtonContainer>
          <ActionContainer>
            <a href onClick={() => handleNavigate("login")} className="esqueci">
              Esqueci minha senha
            </a>
            <a
              href
              onClick={() => handleNavigate("register")}
              className="criar"
            >
              Criar conta
            </a>
          </ActionContainer>
        </FormContainer>
      </Main>
    </>
  );
};

export default Home;
