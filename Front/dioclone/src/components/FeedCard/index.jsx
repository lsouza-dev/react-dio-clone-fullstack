import React from "react";
import { CardContainer, CardBannerContainer, UserContainer, UserImage, UserCardInfos, CardContent } from "./styles";

const FeedCard = ({userImg,banner,name,time,title,text,likes}) => {
  return (
    <CardContainer>
      <CardBannerContainer>
        <img
          src={
            banner
          }
          alt="Banner Card"
        />
      </CardBannerContainer>
      <UserContainer>
        <UserImage src={userImg} />
        <UserCardInfos>
          <h1>{name}</h1>
          <p>Há {time} minutos</p>
        </UserCardInfos>
      </UserContainer>
      <CardContent>
        <h1>{title}</h1>
        <p>{text}</p>
        <span>#HTML #CSS #Javascript #REACT #NET #CSHARP</span>
        <span>{likes}</span>
      </CardContent>
    </CardContainer>
  );
};

export default FeedCard;
