import React, { useState } from "react";
import {
  TopSection,
  BottomSecBtnBox,
  LegalDecisionsBox,
  QuestionsBox,
  ContactButtonIcon,
} from "@/styles/TopSecMainStyle";

const TopSecMain = () => {
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  const toggleSection1 = () => setShowSection1(!showSection1);
  const toggleSection2 = () => setShowSection2(!showSection2);
  const toggleSection3 = () => setShowSection3(!showSection3);
  return (
    <TopSection>
      <QuestionsBox>
        <div>
          <h1>DÚVIDAS?</h1>
          <h2>PERGUNTAS FREQUENTES</h2>
          <hr />
          <div>
            <div onClick={toggleSection1}>
              <span>{showSection1 ? "-" : "+"}</span>
              <span>Como faço para receber os valores?</span>
              {showSection1 && (
                <p>
                  Para receber as verbas rescisórias que não foram pagas, é
                  necessário ingressar com um processo judicial. Trata-se de uma
                  Ação de Cobrança contra a empresa pedindo a restituição dos
                  valores devidos. É importante buscar orientação de um advogado
                  especializado em Direito do Trabalho para entender quais são
                  os direitos e como proceder nesses casos.
                </p>
              )}
            </div>
            <div onClick={toggleSection2}>
              <span>{showSection2 ? "-" : "+"}</span>
              <span>Qual o valor que tenho pra receber?</span>
              {showSection2 && (
                <p>
                  O valor pode variar de acordo com diversos fatores, como o
                  tempo de serviço prestado, o salário recebido, a causa da
                  rescisão do contrato de trabalho e outros. É importante que
                  você consulte um advogado especializado em direito trabalhista
                  para avaliar o seu caso e determinar o valor a que você tem
                  direito.
                </p>
              )}
            </div>

            <div onClick={toggleSection3}>
              <span>{showSection3 ? "-" : "+"}</span>
              <span>
                Quais são as verbas rescisórias que eu deveria ter recebido?
              </span>
              {showSection3 && (
                <p>
                  No geral, as principais verbas são: saldo de salário, aviso
                  prévio, férias proporcionais acrescidas de 1/3, 13º salário
                  proporcional e a multa do Fundo de Garantia do Tempo de
                  Serviço (FGTS) com acréscimo de 40%. Outras verbas podem
                  incluir horas extras, adicional noturno, comissões, entre
                  outras.
                </p>
              )}
            </div>
          </div>
        </div>
      </QuestionsBox>
      <LegalDecisionsBox>
        <h1>EXEMPLOS DE DECISÕES JUDICIAIS</h1>
        <p>
          Em um processo que envolvia verbas rescisórias de um funcionário que
          trabalhou por mais de 10 anos em uma empresa, esta foi condenada a
          pagar uma indenização equivalente a 8 meses de salário do empregado. A
          empresa também teve que arcar com as seguintes verbas rescisórias:
          aviso prévio indenizado, férias proporcionais acrescidas do terço
          constitucional, 13º salário proporcional, multa de 40% sobre o saldo
          do FGTS e liberação das guias para saque do FGTS e seguro desemprego.
          O valor total da condenação foi de <span> R$72.000,00.</span> Fonte:
          Tribunal Regional do Trabalho da 2ª Região - Processo nº
          1001237-93.2016.5.02.0083.
        </p>
        <p>
          Em um caso de rescisão de contrato sem justa causa, uma empresa foi
          condenada a pagar ao ex-funcionário as seguintes verbas rescisórias:
          aviso prévio indenizado, 13º salário proporcional, férias
          proporcionais acrescidas do terço constitucional e multa de 40% sobre
          o saldo do FGTS. O valor total da condenação foi de{" "}
          <span> R$14.000,00.</span>
          Fonte: Tribunal Regional do Trabalho da 3ª Região - Processo nº
          0010900-21.2016.5.03.0039.
        </p>
        <p>
          Em um caso de reconhecimento de vínculo empregatício, uma empresa foi
          condenada a pagar as seguintes verbas rescisórias: aviso prévio
          indenizado, 13º salário proporcional, férias proporcionais acrescidas
          do terço constitucional e multa de 40% sobre o saldo do FGTS. O valor
          total da condenação foi de <span> R$25.000,00.</span> Fonte: Tribunal
          Regional do Trabalho da 1ª Região - Processo nº
          0101161-21.2018.5.01.0057.
        </p>
      </LegalDecisionsBox>
      <BottomSecBtnBox>
        <ContactButtonIcon
          src="/whatsapp.svg"
          alt="Ícone do WhatsApp"
          width={30}
          height={30}
        />
        Fale conosco agora pelo WhatsApp
      </BottomSecBtnBox>
    </TopSection>
  );
};

export default TopSecMain;
