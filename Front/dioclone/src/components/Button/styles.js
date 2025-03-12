import styled, { css } from "styled-components";

export const ButonComponent = styled.button`
  ${({ variant, btnpageactivated }) =>
    variant === "primary" &&
    btnpageactivated === 'false' &&
    css`
      min-width: 167px;

      width: 100%;
      height: 100%;
      background-color: #e4105d;
      border-radius: 2rem;
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: 400;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 2rem;
      }
    `}

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: grey;
      padding: 0.1rem 2rem;
      border-radius: 1rem;
      width: 120px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      color: #ffffff;
    `}


  ${({ btnpageactivated, variant }) =>
    btnpageactivated === 'true' &&
    variant !== "primary" &&
    css`
      background-color: transparent;
    `}

  ${({ btnpageactivated, variant }) =>
    btnpageactivated !== 'true' &&
    variant !== "primary" &&
    css`
      &:hover {
        opacity: 0.6;
      }
    `}

    &:hover{
    cursor:pointer}
`;
