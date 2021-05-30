import React, { CSSProperties, InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  style?: CSSProperties;
}

export default function Input({ label, style, ...rest }: InputProps) {
  return (
    <Container style={style}>
      <label>{label}</label>
      <input type="text" {...rest} />
    </Container>
  );
}
