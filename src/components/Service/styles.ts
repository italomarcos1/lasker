import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30%;
  text-align: center;

  /* background-color: #f90; */

  h2 {
    font-size: 36px;
    line-height: 36px;

    @media (max-width: 600px) {
      font-size: 26px;
      /* line-height: 32px; */
    }
  }

  strong {
    margin-top: 24px;
    font-size: 24px;
    line-height: 36px;
    font-weight: lighter;

    @media (max-width: 600px) {
      font-size: 18px;
      margin-top: 16px;
      line-height: 30px;
    }
  }

  a {
    margin-top: 36px;
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;

    display: none;

    @media (max-width: 600px) {
      font-size: 24px;
      margin-top: 24px;

      /* line-height: 32px; */
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
    margin-top: 24px;

    & + div {
      margin-top: 40px;
    }
  }
`;
