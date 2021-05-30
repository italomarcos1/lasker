import React, { useCallback } from "react";

import { Container, Logo, NavBar, ContactButton } from "./styles";

export default function Header() {
  const handleJumpToProductInfo = useCallback(() => {
    const separatorPosition = document.getElementById("contact")?.offsetTop;
    console.log(separatorPosition);
    // document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, separatorPosition - 134);
  }, []);

  return (
    <Container>
      <Logo>Lasker Media</Logo>
      <NavBar>
        <a href="#">Missão</a>
        <a href="#">Serviços</a>
        <a href="#">Sobre</a>
        <ContactButton onClick={handleJumpToProductInfo}>
          CONTATE-NOS
        </ContactButton>
      </NavBar>
    </Container>
  );
}
