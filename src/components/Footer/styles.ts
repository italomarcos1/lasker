import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 360px;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  margin-top: 272px;
  padding: 2% 20%;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media (max-width: 600px) {
    padding: 7.5% 5%;
    height: auto;
    margin-top: 136px;
  }

  p {
    margin-top: 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 32px;
  }
`;

export const Logo = styled.strong`
  font-size: 40px;
  line-height: 66%;
  letter-spacing: 0.28px;
  font-family: "Rubik";
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 32px;
    margin-bottom: 48px;
  }
`;

export const LinkContent = styled.a`
  font-size: 24px;
  line-height: 110%;
  /* background-color: #f90; */
  /* text-align: center; */

  & + a {
    margin-top: 24px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    text-align: left;

    & + a {
      margin-top: 20px;
    }
  }
`;
