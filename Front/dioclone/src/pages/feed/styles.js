import styled from "styled-components";

export const Main = styled.main`
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  margin: 2rem 5rem;
`;

export const FeedContainer = styled.div`
  height: 80dvh;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
export const TopUsersContent = styled.div`
  margin-left: 10rem;
  height: 70%;
  
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 0 2rem;

  
  h3{
    margin-bottom:2rem;
    color: #FFFFFFB2;
  }
`;
