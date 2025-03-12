import styled from "styled-components";

export const Main = styled.main`
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justifu-content: center;
  margin: 0 5rem;
`;

export const TextContainer = styled.div`
  font-size: 2.3rem;
  font-weight: 700;
  height: 70%;
  width: 60%;
`;

export const Text = styled.h3`
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 75%;
  height: 40px;
  margin: 0.2rem 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin:2rem 0 0 5rem;
  
`;

export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 12px;
`;

export const FormSubtitle = styled.h3`
  font-weight: 300;
  font-size: 1.6rem;
  margin-bottom: 24px;
`;

export const FieldsContainer = styled.div`
  height: 60%;
  width: 75%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;


  & > div {
    margin-bottom: 0.5rem;
  }
`;

export const ActionContainer = styled.div`
  height: 30px;
  width: 75%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  a {
    text-decoration: none;
    cursor:pointer;
  }

  .login {
    color: #23dd7a;
  }
`;
