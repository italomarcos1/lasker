import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1f1d1d;
  /* display: flex; */
  /* flex-direction: column; */
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 488px;
`;

export const Banner = styled.img`
  width: 100%;
  height: 488px;
  object-fit: cover;
  margin-top: 144px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 80px;
  }
`;

export const BannerContent = styled.strong`
  font-size: 64px;
  line-height: 74.4px;
  font-weight: 600;
  position: absolute;

  top: 25%;
  left: 15%;

  b {
    color: #e6b32a;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 56px;
  line-height: 50px;
  font-weight: 700;

  @media (max-width: 600px) {
    margin-top: 24px;
    font-size: 32px;
    line-height: 36px;
    width: 100%;
  }
`;

export const SubTitle = styled.small`
  margin-top: 16px;
  font-size: 28px;
  line-height: 36px;
  font-weight: 100;
  color: #cecece;

  @media (max-width: 600px) {
    margin-top: 8px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Description = styled.strong`
  margin-top: 36px;
  font-size: 28px;
  line-height: 36px;

  @media (max-width: 600px) {
    margin-top: 24px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  padding: 0 168px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 0;
    width: 80%;
    margin: 48px auto 0;
  }
`;

export const ServicesContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 56px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 120px;
  margin-top: 112px;
  height: 318px;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
    height: auto;
    margin: 40px auto 0;
    width: 80%;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 422px;
  height: 318px;
  margin-left: 112px;

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    margin-top: 32px;
  }
`;

export const SendContactButton = styled.button`
  width: 422px;
  height: 72px;
  border-radius: 4px;
  background-color: #e6b32a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fbfdfd;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 48px;
  font-size: 28px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 32px;

    font-size: 20px;
  }
`;
