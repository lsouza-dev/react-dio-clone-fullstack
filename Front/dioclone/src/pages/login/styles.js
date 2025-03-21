import styled from "styled-components";

export const Main = styled.main`
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justifu-content:center;
  margin: 0 5rem;
`;

export const TextContainer = styled.div`
  font-size: 2.3rem;
  font-weight: 700;
  height: 60%;
`;

export const Text = styled.h3`
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 75%;
  height: 40px;
  margin-top:.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;

export const FormContainer = styled.form`
  height: 60%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
`;

export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 12px;
`;

export const FormSubtitle = styled.h3`
  font-weight: 300;
  font-size: 1.3rem;
  margin-bottom: 24px;
`;


export const FieldsContainer = styled.div`
  height:30%;
  width:75%;
  margin-bottom:1.8rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
`

export const ActionContainer = styled.div`
  margin-top: 2rem;
  height:80px;
  width:75%;

  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

  a{
    text-decoration:none;
    cursor:pointer;
  }
  
  .esqueci{
    color: #E5E044;
  }

  .criar{
    color:#23DD7A;
  }
`;
