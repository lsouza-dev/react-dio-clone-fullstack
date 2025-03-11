import React from "react";
import { InputText, InputContainer,IconContainer } from "./style";

const Input = ({ text, placeholder,InputIcon }) => {
  return (
    <>
      <InputContainer>
        <IconContainer>
          {<InputIcon/>}
        </IconContainer>
        <InputText placeholder={placeholder} />
      </InputContainer>
    </>
  );
};

export default Input;
