import React from "react";
import {
  Section,
  Card,
  ContactButton,
  ContactButtonIcon,
  CardDescription,
  CardTitle,
  CardWrapper,
  AboutSection,
  AboutDescription,
  AboutImage,
  AboutTitle,
} from "@/styles/BottomSecMainStyle";

const cards = [
  {
    id: 1,
    title: "Nossa equipe está pronta e preparada para recebê-lo",
    description:
      "Entre em contato clicando no botão abaixo e agende uma reunião.",
  },
  {
    id: 2,
    title: "Nosso time de advogados irá analisar o seu caso",
    description: "A partir daí todo o suporte necessário será dado.",
  },
  {
    id: 3,
    title:
      "Nossos especialistas estão preparados para trabalhar em seu processo",
    description:
      "Todos os seus direitos serão garantidos e as melhores decisões serão tomadas.",
  },
];

const BottomSecMain = () => {
  const [animateCards, setAnimateCards] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const sectionPosition = document.getElementById("cards-section").offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (
      scrollPosition > sectionPosition - windowHeight + 100 &&
      !animateCards
    ) {
      setAnimateCards(true);
    }
  }, [animateCards]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Section id="cards-section">
        <CardWrapper>
          {cards.map((card) => (
            <Card key={card.id} className={animateCards ? "animate" : ""}>
              <div>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </div>
            </Card>
          ))}
          <ContactButton>
            <ContactButtonIcon
              src="whatsapp.svg"
              alt="WhatsApp Icon"
              width={20}
              height={20}
            />
            Fale conosco pelo WhatsApp
          </ContactButton>
        </CardWrapper>
      </Section>

      <AboutSection>
        <AboutTitle>Sobre nós</AboutTitle>
        <div>
          <AboutImage
            src="/escritório.jpg"
            alt="Foto do escritório"
            width={300}
            height={200}
          />
          <AboutDescription>
            Somos um escritório altamente especializado em Direito Trabalhista,
            com expertise em oferecer serviços de consultoria e assessoria
            jurídica para empresas e trabalhadores em todas as áreas do Direito do
            Trabalho. Atuamos em diversos aspectos trabalhistas, incluindo
            contratação, rescisão, férias, horas extras, acidentes de trabalho,
            entre outros. Nossa missão é defender os direitos dos nossos clientes
            com dedicação e comprometimento, sempre oferecendo soluções eficazes e
            personalizadas para cada caso.{" "}
          </AboutDescription>
        </div>
      </AboutSection>
    </>
  );
};

export default BottomSecMain;
