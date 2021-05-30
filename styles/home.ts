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
`;

export const Title = styled.h1`
  font-size: 56px;
  line-height: 50px;
  font-weight: 700;
`;

export const SubTitle = styled.small`
  margin-top: 16px;
  font-size: 28px;
  line-height: 36px;
  font-weight: 100;
  color: #d8d8d8;
`;

export const Description = styled.strong`
  margin-top: 36px;
  font-size: 28px;
  line-height: 36px;
`;

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  padding: 0 168px;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
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
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 422px;
  height: 318px;
  margin-left: 112px;
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
`;
