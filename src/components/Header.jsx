import React from "react";

import {
  HeaderWrapper,
  ContactButton,
  ContactButtonIcon,
  HeaderContent,
  HeaderDescSection,
  LogoSection,
  LogoText,
  SubTitle,
  Title,
  BackgroundImage,
} from "@/styles/HeaderStyle";

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <BackgroundImage />
      <HeaderContent>
        <LogoSection>
          <LogoText>Logo</LogoText>
        </LogoSection>
        <HeaderDescSection>
          <Title>
            Advogados Trabalhistas
          </Title>
          <SubTitle>
            Você sabia que pode ter verbas rescisórias a receber?
          </SubTitle>
          <ContactButton>
            <ContactButtonIcon
              src="whatsapp.svg"
              alt="WhatsApp Icon"
              width={20}
              height={20}
            />
            Fale conosco pelo WhatsApp
          </ContactButton>
        </HeaderDescSection>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
