import { useCallback, useContext, useMemo, useState } from "react";
import Head from "next/head";

import banner from "../../public/background.jpg";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import AlternateContainer from "~/components/AlternateContainer";
import Separator from "~/components/Separator";
import Service from "~/components/Service";
import Input from "~/components/Input";

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
  ContactContent,
  ServicesContent,
} from "@/styles/home";

import { api } from "~/services/api";
import { AlternateContent, Service as IService } from "~/types";

export default function Home() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

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

  const emptyFieldRegex = useMemo(() => new RegExp(/^(?=\w+).*$/), []);

  const isFieldEmpty = useCallback((value) => emptyFieldRegex.test(value), []);

  const handleSubmit = useCallback(async () => {
    try {
      if (!isFieldEmpty(name) || !isFieldEmpty(contact)) {
        console.log("error email");
        console.log(isFieldEmpty(name));
        return;
      }
      console.log("ok email");

      await api.post("/mail", {
        name,
        contact,
      });
    } catch (error) {
      console.log(error);
    }
  }, [name, contact, isFieldEmpty]);

  return (
    <>
      <Head>
        <title>Lasker Media</title>
      </Head>
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
          <ServicesContent>
            {services.map((s) => (
              <Service key={s.title} content={s} />
            ))}
          </ServicesContent>
        </ServicesContainer>
        <Separator />
        <AlternateContainer content={contents[1]} orientation="right" />
        <Separator id="contact" />
        <ContactContainer>
          <ContactContent>
            <Title>Contato</Title>
            <SubTitle>Se interessou? Marque uma consultoria</SubTitle>
            <Description>
              Iremos entrar em contato para saber sobre seu negócio,
              <br />
              totalmente sem compromisso.
              <br />
              <br />E o café é por nossa conta :&#41;
            </Description>
          </ContactContent>
          <Form>
            <Input
              label="Nome"
              placeholder="Seu nome ou de sua empresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Contato"
              placeholder="Seu e-mail ou WhatsApp"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <SendContactButton onClick={handleSubmit}>Enviar</SendContactButton>
          </Form>
        </ContactContainer>
        <Footer />
      </Background>
    </>
  );
}
