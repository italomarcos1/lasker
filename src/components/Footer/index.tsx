import React from "react";
import Link from "next/link";

import { Container, Logo, LinkContent } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Logo>Lasker Media</Logo>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link href="/">
          <LinkContent>Política de Privacidade</LinkContent>
        </Link>
        <Link href="/">
          <LinkContent>Sobre</LinkContent>
        </Link>
        <Link href="https://instagram.com/laskermedia" passHref>
          <LinkContent target="_blank">Instagram</LinkContent>
        </Link>
        <Link href="https://facebook.com/laskermedia" passHref>
          <LinkContent target="_blank">Facebook</LinkContent>
        </Link>
      </div>
    </Container>
  );
}
