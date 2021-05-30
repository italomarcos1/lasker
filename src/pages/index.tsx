import banner from "../../public/background.jpg";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import AlternateContainer from "~/components/AlternateContainer";

import {
  Background,
  Banner,
  BannerContainer,
  BannerContent,
  Description,
  SendContactButton,
  ServicesContainer,
  SubTitle,
  Title,
  ContactContainer,
  Form,
} from "@/styles/home";
import Separator from "~/components/Separator";
import Service from "~/components/Service";
import { useMemo } from "react";
import { AlternateContent, Service as IService } from "~/types";
import Input from "~/components/Input";

export default function Home() {
  const services = useMemo<IService[]>(
    () => [
      {
        title: "Tráfego Local",
        content:
          "Colocando seu negócio no mapa, como ter um grande outdoor na região com maior circulação de potenciais clientes: a Internet.",
      },
      {
        title: "Landing Pages",
        content:
          "Criação de sites e apps completos. Seu negócio na internet, 24/7. Trabalhando por e para você, acessível a clientes de todo lugar.",
      },
      {
        title: "Social Media & Branding",
        content:
          "Estabeleça sua personalidade e marque território na Internet. Se torne uma referência na sua área através das redes sociais.",
      },
    ],
    []
  );

  const contents = useMemo<AlternateContent[]>(
    () => [
      {
        title: "Missão e Valores",
        subtitle: "A importância do tráfego local em 2021",
        content:
          "Estabeleça sua personalidade e marque território na Internet. Se torne uma referência na sua área através das redes sociais.",
      },
      {
        title: "Sobre a Lasker Media",
        subtitle: "Quem somos e o que nos motiva",
        content:
          "Agência criada em 2021, no ápice da pandemia. A pioneira do ramo em Brasília, trazendo soluções modernas e adaptadas para o mercado e cenário atual, desde lojas pequenas até grandes empresas.",
      },
    ],
    []
  );

  return (
    <>
      <Header />
      <Background>
        <BannerContainer>
          <Banner src={banner} />
          <BannerContent>
            A solução em
            <br />
            <b> Marketing Digital</b>
            <br />
            tem nome e endereço.
          </BannerContent>
        </BannerContainer>
        <AlternateContainer content={contents[0]} />
        <Separator />
        <ServicesContainer>
          <Title>Serviços</Title>
          <SubTitle>Como realizaremos seus sonhos e metas</SubTitle>
          <div>
            {services.map((s) => (
              <Service content={s} />
            ))}
          </div>
        </ServicesContainer>
        <Separator />
        <AlternateContainer content={contents[1]} orientation="right" />
        <Separator />
        <ContactContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Title>Contato</Title>
            <SubTitle>Se interessou? Marque uma consultoria</SubTitle>
            <Description>
              Preencha seus dados que iremos entrar em contato, <br />
              para saber sobre seu negócio e apresentar nossos
              <br />
              planos, totalmente sem compromisso.
              <br />E o café é por nossa conta :&#41;
            </Description>
          </div>
          <Form>
            <Input label="Nome" placeholder="Seu nome ou de sua empresa" />
            <Input
              label="Contato"
              placeholder="Seu e-mail ou WhatsApp"
              style={{ marginTop: 24 }}
            />
            <SendContactButton>Enviar</SendContactButton>
          </Form>
        </ContactContainer>
        <Footer />
      </Background>
    </>
  );
}
