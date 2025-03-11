import React from "react";
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
  ProfileImage,
} from "./styles";

import ButtonComponent from "../../components/Button";
import SearchIcon from "../../assets/search.png";

const Header = ({ authenticated = false }) => {
  return (
    <Container>
      <MenuLeftContainer>
        <ImageContainer>
          <img src={dioImage} alt="Dio Logo" />
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
          <ButtonComponent text={"Home"} variant="secondary" btnpageactivated={true} />
          <ButtonComponent text={"Entrar"} variant="secondary" btnpageactivated={false} />
          <ButtonComponent text={"Cadastrar"} variant="secondary" btnpageactivated={false} />
        </MenuRightContainer>
      )}
    </Container>
  );
};

export default Header;
