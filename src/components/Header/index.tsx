import React, { useCallback, useEffect, useState } from "react";

import { Container, Logo, NavBar, ContactButton, MobileButton } from "./styles";

import menu from "@/public/menu.svg";
import dm from "@/public/dm.svg";

export default function Header() {
  const handleJumpToProductInfo = useCallback((platform) => {
    const separatorPosition = document.getElementById("contact")?.offsetTop;
    // document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

    const position =
      platform === "mobile" ? separatorPosition - 30 : separatorPosition - 140;

    window.scrollTo(0, position);
  }, []);

  const [smallHeader, setSmallHeader] = useState(false);

  const scrollFunction = useCallback(() => {
    setSmallHeader(
      document.body.scrollTop > 120 || document.documentElement.scrollTop > 120
    );
  }, []);

  useEffect(() => console.log(smallHeader), [smallHeader]);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction, true);
  }, []);

  return (
    <Container smallHeader={smallHeader}>
      <MobileButton>
        <img src={menu} alt="" />
      </MobileButton>
      <Logo>Lasker Media</Logo>
      <NavBar>
        <a href="#">Missão</a>
        <a href="#">Serviços</a>
        <a href="#">Sobre</a>
        <ContactButton onClick={() => handleJumpToProductInfo("web")}>
          CONTATE-NOS
        </ContactButton>
      </NavBar>
      <MobileButton onClick={() => handleJumpToProductInfo("mobile")}>
        <img src={dm} alt="" />
      </MobileButton>
    </Container>
  );
}
