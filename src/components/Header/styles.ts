import styled, { css } from "styled-components";

interface SmallHeaderProps {
  smallHeader: boolean;
}

const mobileNone = css`
  @media (max-width: 600px) {
    display: none;
  }
`;

const onlyMobile = css`
  @media (min-width: 600px) {
    display: none;
  }
`;

export const Container = styled.header<SmallHeaderProps>`
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  padding: 0 10% 0 15%;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 144px;

  @media (max-width: 600px) {
    height: ${({ smallHeader }) => (smallHeader ? 56 : 80)}px;

    padding: 0 7.5%;
  }
`;

export const MobileButton = styled.button`
  ${onlyMobile}

  img {
    width: 65%;
  }
`;

export const Logo = styled.strong`
  font-size: 40px;
  line-height: 66%;
  letter-spacing: 0.28px;
  font-family: "Rubik";
  text-transform: uppercase;

  /* ${mobileNone} */

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  height: 48px;
  align-items: center;

  ${mobileNone}

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
