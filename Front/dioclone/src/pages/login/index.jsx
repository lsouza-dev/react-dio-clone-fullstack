import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from '../../components/Input';
import {
  Main,
  Text,
  TextContainer,
  FormContainer,
  ButtonContainer,
  FormSubtitle,
  FormTitle,
  ActionContainer,
  FieldsContainer
} from "./styles";
import { MdEmail } from "react-icons/md";

const Home = () => {
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
        <FormContainer>
          <FormTitle>Faça seu Login</FormTitle>
          <FormSubtitle>Faça seu login e make the change._</FormSubtitle>
          <FieldsContainer>
            <Input InputIcon={MdEmail} placeholder={'Email'}></Input>
          </FieldsContainer>
          <ButtonContainer>
            <Button text={'Entrar'} variant="primary" btnpageactivated={false} />
          </ButtonContainer>
          <ActionContainer>
            <a href="" className="esqueci">Esqueci minha senha</a>
            <a href="" className="criar">Criar conta</a>
          </ActionContainer>
        </FormContainer>
      </Main>
    </>
  );
};

export default Home;
