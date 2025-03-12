import React from "react";
import { InputText, InputContainer, IconContainer,ErrorText } from "./style";
import { Controller } from "react-hook-form";

const Input = ({name,type='text',errorMessage, control, placeholder, InputIcon }) => {
  return (
    <>
      <InputContainer>
        <IconContainer>{<InputIcon />}</IconContainer>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText control={control} type={type} placeholder={placeholder} {...field} />
          )}
        />
      </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export default Input;
