import styled, { css } from "styled-components";

export const ButonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  padding: 0.1rem 2rem;
  border-radius: 1rem;
  width:120px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  ${({ btnpageactivated }) =>
    btnpageactivated === true &&
    css`
      background-color: transparent;
      color: #ffffff;
    `}

  ${({ btnpageactivated }) =>
    btnpageactivated !== true &&
    css`
      &:hover {
      opacity: .6;
      }
    `}
`;
