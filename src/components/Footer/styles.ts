import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 320px;
  background-color: #1b1b1b;
  display: flex;
  margin-top: 272px;
`;

export const Logo = styled.strong`
  font-size: 40px;
  line-height: 66%;
  letter-spacing: 0.28px;
  font-family: "Rubik";
  text-transform: uppercase;
`;

export const NavBar = styled.nav`
  display: flex;
  height: 48px;
  align-items: center;

  a {
    font-size: 24px;
    line-height: 66%;

    & + a {
      margin-left: 40px;
    }
  }
`;

export const ContactButton = styled.button`
  width: 210px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6b32a;
  margin-left: 56px;
  font-size: 21px;
  font-weight: bold;
`;
