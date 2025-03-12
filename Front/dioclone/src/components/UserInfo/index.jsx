import React from "react";
import { Container, NameText, Progress, UserPicture,UserInfos } from "./styles";

const UserInfo = ({ nome, image, percentual }) => {
  return <Container>
    <UserPicture src={image} />
    <UserInfos>
      <NameText>{nome}</NameText>
      <Progress percentual={percentual} />
    </UserInfos>
    
  </Container>;
};

export default UserInfo;