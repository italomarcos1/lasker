import React from "react";

import { Container, Image, Content } from "./styles";
import { Title, SubTitle, Description } from "@/styles/home";
import { AlternateContent } from "~/types";

type AlternateContainerProps = {
  orientation?: string;
  content: AlternateContent;
};

export default function AlternateContainer({
  orientation = "left",
  content,
}: AlternateContainerProps) {
  return (
    <Container orientation={orientation}>
      <Image orientation={orientation}></Image>
      <Content orientation={orientation}>
        <Title>{content.title}</Title>
        <SubTitle>{content.subtitle}</SubTitle>
        <Description>{content.content}</Description>
      </Content>
    </Container>
  );
}
