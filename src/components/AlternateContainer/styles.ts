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
`;

export const Image = styled.img<OrientationProps>`
  width: 546px;
  height: 366px;
  border-radius: 4px;
  background-color: #666;
  margin-left: ${({ orientation }) => (orientation === "left" ? 0 : 96)}px;
`;

export const Content = styled.nav<OrientationProps>`
  display: flex;
  flex-direction: column;
  margin-left: 96px;
  max-width: 42%;
  margin-left: ${({ orientation }) => (orientation === "left" ? 96 : 0)}px;
`;
