import React, { useCallback, useEffect, useState } from "react";
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
import { MdEmail, MdLock, MdPassword, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../service/userApiService";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };

  const [createdUser,SetCreatedUser] = useState(false);

  const schema = yup
    .object({
      nome: yup
        .string()
        .min(5, "Nome muito curto")
        .required("Nome é obrigatório"),
      email: yup
        .string()
        .email("Digite um email válido")
        .required("Email é obrigatório"),
      senha: yup
        .string()
        .min(5, "A senha deve ter no mínimo 5 caraceters")
        .required("Senha é obrigatória"),
    })
    .required();


  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (formData) => {
    let msg = '';

    try {
        const response = await api.post(
            `create?Nome=${encodeURIComponent(formData.nome)}&Email=${encodeURIComponent(formData.email)}&Senha=${encodeURIComponent(formData.senha)}`
        );

        console.log("Resposta da API:", response.data);
        SetCreatedUser(true);
        msg = response.data.mensagem;
    } catch (error) {
        console.error("Erro na requisição:", error);

        try {
            // Converte a resposta de erro para JSON e captura as mensagens
            const errorResponse = JSON.parse(error.request.response);
            msg = Object.values(errorResponse).flat().join("\n"); // Junta todas as mensagens em uma string
        } catch {
            msg = "Erro ao processar resposta do servidor";
        }
    } finally {
        alert(msg);
    }
};


const redirect = useEffect(()=>{
  if(createdUser) handleNavigate('login')
},[createdUser,handleNavigate]);


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
          <FormTitle>Comece agora grátis</FormTitle>
          <FormSubtitle>Crie sua conta e make the change._</FormSubtitle>
          <FieldsContainer>
            <Input
              InputIcon={MdPerson}
              name={"nome"}
              control={control}
              type={"text"}
              errorMessage={errors.nome?.message}
              placeholder={"Nome Completo"}
            />
            <Input
              InputIcon={MdEmail}
              name={"email"}
              control={control}
              type={"email"}
              errorMessage={errors.email?.message}
              placeholder={"E-mail"}
            /><Input
            InputIcon={MdLock}
            name={"senha"}
            control={control}
            type={"password"}
            errorMessage={errors.senha?.message}
            placeholder={"Senha"}
          />
          </FieldsContainer>
          <ButtonContainer>
            <Button
              text={"Criar minha conta"}
              variant="primary"
              btnpageactivated={'false'}
              type={'submit'}
            />
          </ButtonContainer>
          <FormSubtitle>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </FormSubtitle>
          <ActionContainer>
            <span>
              Já tenho conta.{" "}
              <a href onClick={() => handleNavigate("login")} className="login">
                Fazer login
              </a>
            </span>
          </ActionContainer>
        </FormContainer>
      </Main>
    </>
  );
};

export default Home;
