import React, { CSSProperties } from "react";

import { Container } from "./styles";

type SeparatorProps = {
  style?: CSSProperties;
};

export default function Separator({ style }: SeparatorProps) {
  return <Container style={style} />;
}
