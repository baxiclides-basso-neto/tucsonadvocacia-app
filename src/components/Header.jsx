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
            Você sabe quais são seus direitos na rescisão do contrato de
            trabalho?
          </Title>
          <SubTitle>
            Você sabia que pode ter verbas rescisórias a receber?
          </SubTitle>
          <ContactButton>
            <ContactButtonIcon
              src="whatsapp.svg"
              alt="WhatsApp Icon"
              width={30}
              height={30}
            />
            Fale conosco agora
          </ContactButton>
        </HeaderDescSection>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
