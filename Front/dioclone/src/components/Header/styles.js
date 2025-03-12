import styled from "styled-components";

export const Container = styled.div`
  height:60px;
  display: flex;
  flex-direction:row;
  padding: 0 4rem;
  justify-content:space-between;
  align-items:center;
  background-color: #151515;

  a{
  cursor:pointer;
  }
`

export const ImageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:1rem;
`

export const InputContainer = styled.div`
  height:35px;
  width:250px;
  border-radius:.5rem;
  background-color:#2D2D37;
  display:flex;
  justify-content:flex-start;
  padding: 0 0 0 .25rem;
  align-items:center;
  gap:5px;
`

export const InputIcon = styled.img`
  margin: .2rem;
`

export const InputText = styled.input`
  width:100%;
  height:100%;
  border-radius:.6rem;
  background-color:#2D2D37;
  padding: 0 .4rem;
  color:#FFFFFF;
  border:0;
`

export const MenuLeftContainer = styled.div`
  // width:100px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  gap:1rem;

  img{
    height:25px;
  }
`

export const MenuLeftText = styled.p`
  font-size:1rem;
  font-weight:500;
  margin: 0 .5rem;
`

export const MenuRightContainer = styled.div`
  height:100%;
  width:25%;
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap: 1rem;
`


export const ProfileContainer = styled.div`
  width:60px;
  height:60px;
`

export const ProfileImage = styled.img`
  border-radius:50%;
  height:90%;
  border: 1px solid #FFFFFF;
`
