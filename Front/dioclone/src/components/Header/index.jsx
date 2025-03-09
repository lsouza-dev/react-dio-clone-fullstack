import React from 'react'
import dioImage from "../../assets/logo-dio.png";
import {
  Container,
  MenuImage,
  ImageContainer,
  MenuRightContainer,
  MenuButton,
  MenuLeftContainer,
  InputContainer,
  MenuLeftText,
  InputIcon,
  InputText,
} from "./styles";

import ButtonComponent from "../../components/Button";
import SearchIcon from '../../assets/search.png';

const Header = () => {
  return (
    <Container>
      <MenuLeftContainer>
        <ImageContainer>
          <MenuImage src={dioImage} />
        </ImageContainer>
        <InputContainer>
          <InputIcon src={SearchIcon}  />
          <InputText placeholder='Buscar...' />
        </InputContainer>
        <MenuLeftText>Live Code</MenuLeftText>
        <MenuLeftText>Global</MenuLeftText>
      </MenuLeftContainer>
      <MenuRightContainer>
        <ButtonComponent text={"Menu"} btnpageactivated={true} />
        <ButtonComponent text={"Cadastro"} btnpageactivated={false} />
        <ButtonComponent text={"Login"} btnpageactivated={false} />
      </MenuRightContainer>
    </Container>
  )
}

export default Header