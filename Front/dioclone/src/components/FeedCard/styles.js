import styled from "styled-components";

export const CardContainer = styled.div`
  height:570px;
  display:flex;
  flex-direction:column;
  margin-bottom:5rem;

  h1{
    margin:0;
    font-weight:700;
    font-size:1.5rem;
  } 
`;

export const CardBannerContainer = styled.div`
  height:50%;
  
  img{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:.5rem .5rem 0 0;
  }
`;


export const UserContainer = styled.div`
  height:15%;
  width:100%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding-left:1.5rem;
  gap:1rem;
  background-color:#3B4651;
  
`;

export const UserImage = styled.img`
  height:50px;
  width:50px;
  border-radius:50%;
`;

export const UserCardInfos = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;


  p{
    font-weight:400;
    font-size:.8rem;
  }
`

export const CardContent = styled.div`
  height:35%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding: 0 1rem;
  gap:.4rem;
  background-color:#3B4651;
  border-radius: 0 0 .5rem .5rem;

  p{
    font-weight:200;
    font-size:1rem;
    max-width:80%;
    height:80px;
    margin-bottom:.6rem;
  }
`;