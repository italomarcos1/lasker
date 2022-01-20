import React, { CSSProperties } from "react";

import { Container } from "./styles";

type SeparatorProps = {
  id?: string;
  style?: CSSProperties;
};

export default function Separator({ id, style }: SeparatorProps) {
  return <Container id={id} style={style} />;
}
