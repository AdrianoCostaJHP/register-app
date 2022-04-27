import React, { useRef, useEffect, useState, useCallback } from "react";
import { useField } from "@unform/core";
import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

type InputFieldProps = {
  name: string;
  label?: string;
} & InputProps;

const InputField = ({ name, label, ...rest }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <FormControl id={name}>
      {label && <FormLabel fontSize={18}>{label}</FormLabel>}

      <Input
        background="grey.50"
        color="grey.200"
        borderRadius="none"
        border="none"
        w="100%"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
    </FormControl>
  );
};

export default InputField;
