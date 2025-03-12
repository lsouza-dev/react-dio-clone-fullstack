import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Banner from '../../assets/banner.svg'
import { Main, Text, TextContainer, ButtonContainer, BannerContainer,TextHighlight } from "./styles";
import {useNavigate} from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate();

  const HandleNavigate = (path) =>{
    navigate(`/${path}`);
  }

  return (
    <>
      <Header  />
      <Main>
        <TextContainer>
          <TextHighlight>Implemente</TextHighlight>
          <Text>o seu futuro global agora</Text>
          <p>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </p>
          <ButtonContainer>
            <Button text={'Começar agora'} variant="primary"  btnpageactivated={'false'} onClick={() => HandleNavigate('register')} />
          </ButtonContainer>
        </TextContainer>
        <BannerContainer>
          <img src={Banner} alt="Banner" />
        </BannerContainer>
      </Main>
    </>
  );
};

export default Home;
