/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import dioImage from "../../assets/logo-dio.png";
import {
  Container,
  ImageContainer,
  MenuRightContainer,
  MenuLeftContainer,
  InputContainer,
  MenuLeftText,
  InputIcon,
  InputText,
  ProfileImage,
} from "./styles";

import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import SearchIcon from "../../assets/search.png";

const Header = ({ authenticated = false }) => {

  
  const navigate = useNavigate();

  const HandleNavigate = (path) =>{
    navigate(`/${path}`);
  }


  return (
    <Container>
      <MenuLeftContainer>
        <ImageContainer>
          <a onClick={() => HandleNavigate('')}><img src={dioImage} alt="Dio Logo" /></a>
        </ImageContainer>
        {authenticated ? (
          <>
            <InputContainer>
              <InputIcon src={SearchIcon} />
              <InputText placeholder="Buscar..." />
            </InputContainer>
            <MenuLeftText>Live Code</MenuLeftText>
            <MenuLeftText>Global</MenuLeftText>
          </>
        ) : null}
      </MenuLeftContainer>
      {authenticated ? (
        <ProfileImage
          src={"https://avatars.githubusercontent.com/u/137304972?v=4"}
        />
      ) : (
        <MenuRightContainer>
          <ButtonComponent text={"Home"} variant="secondary" btnpageactivated={'true'} onClick={() => HandleNavigate('')} />
          <ButtonComponent text={"Entrar"} variant="secondary" onClick={() => HandleNavigate('login')}/>
          <ButtonComponent text={"Cadastrar"} variant="secondary" onClick={() => HandleNavigate('register')}/>
        </MenuRightContainer>
      )}
    </Container>
  );
};

export default Header;
