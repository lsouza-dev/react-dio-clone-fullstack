import styled from "styled-components";

export const InputContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  border-bottom: 1px solid #3B3450;
  margin:1rem 0 0;
  `
  
  export const InputText = styled.input`
  background-color:transparent;
  border:0;
  width:100%;
  height:40px;
  font-size:1.3rem;
  color:#FFFFFF;
`

export const IconContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:40px;
  height:40px;
  margin-right:.4rem;
  color: #8647AD;
`

export const ErrorText = styled.p`
  font-size:1rem;
  color:red;
  margin:.6rem;
`