import styled from 'styled-components'

export const Main  = styled.main`
  height:calc(100vh - 60px);
  display: grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  margin:0 5rem;
`

export const TextContainer = styled.div`
  height: 70%;
  width:60%;
  font-size:2.7rem;
  font-weight:700;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  gap: 1rem;

  p{
    font-size:1.3rem;
    font-weight:400;
  }
`

export const TextHighlight = styled.h3`
  color:#E4105D;
  // margin-bottom:1rem;
`

export const Text = styled.h3`
 margin-bottom:1rem;
`


export const ButtonContainer = styled.div`
  width:50%;
  height:40px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:4.5rem;
`


export const BannerContainer = styled.div`
  height: 70%;
  display:flex;
`