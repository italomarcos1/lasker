import styled from "styled-components";

type OrientationProps = {
  orientation: string;
};

export const Container = styled.div<OrientationProps>`
  width: 100%;
  display: flex;
  padding-left: 120px;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  flex-direction: ${({ orientation }) =>
    orientation === "left" ? "row" : "row-reverse"};

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 60px;
    padding-left: 0;
  }
`;

export const Image = styled.img<OrientationProps>`
  width: 546px;
  height: 366px;
  border-radius: 4px;
  background-color: #666;
  margin-left: ${({ orientation }) => (orientation === "left" ? 0 : 96)}px;

  object-fit: cover;

  @media (max-width: 600px) {
    width: 90%;
    height: 20%;
    margin-left: 0;
  }
`;

export const Content = styled.nav<OrientationProps>`
  display: flex;
  flex-direction: column;
  margin-left: 96px;
  max-width: 42%;
  margin-left: ${({ orientation }) => (orientation === "left" ? 96 : 0)}px;

  @media (max-width: 600px) {
    margin-left: 0;
    /* width: 80%; */
    max-width: 80%;
  }
`;
