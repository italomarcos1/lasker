import React from "react";
import { Service as IService } from "~/types";

import { Content } from "./styles";

type ServiceProps = {
  content: IService;
};

export default function Service({ content }: ServiceProps) {
  return (
    <Content>
      <h2>{content.title}</h2>
      <strong>{content.content}</strong>
      <a href="#">Saiba Mais</a>
    </Content>
  );
}
