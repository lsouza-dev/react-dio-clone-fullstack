import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const UserPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  margin-right: 12px;
`;

export const NameText = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-top:.3rem;
  color: #ffffff;
`;

export const Progress = styled.div`
  width: 180px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23dd7a;
  }
`;

export const UserInfos = styled.div`
  display:flex;
  flex-direction:column;
  width:300px;
`