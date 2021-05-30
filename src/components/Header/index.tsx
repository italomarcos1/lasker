import React from "react";

import { Container, Logo, NavBar, ContactButton } from "./styles";

export default function Header() {
  return (
    <Container>
      <Logo>Lasker Media</Logo>
      <NavBar>
        <a href="#">Missão</a>
        <a href="#">Serviços</a>
        <a href="#">Sobre</a>
        <ContactButton>CONTATE-NOS</ContactButton>
      </NavBar>
    </Container>
  );
}
