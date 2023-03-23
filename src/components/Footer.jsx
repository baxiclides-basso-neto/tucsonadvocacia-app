import React from "react";
import Image from "next/image";
import { Footer } from "@/styles/FooterStyle";
const FooterComponent = () => {
  return (
    <Footer>
      <h4>Rua São Jão Valente, 2904, Campinas - SP, 05675-000, Brasil</h4>
      <div>
        <div>
          <Image
            src="phone-solid.svg"
            alt="Íconte do telefone"
            width={20}
            height={20}
          />
          <span>(11) 99038765</span>
        </div>
      </div>
      <div>
        <div>
          <Image
            src="phone-solid.svg"
            alt="Íconte do telefone"
            width={20}
            height={20}
          />
          <span>tucsonadvogados@gmail.com</span>
        </div>
      </div>
      <h5>&copy; Todos os direitos reservados</h5>
    </Footer>
  );
};

export default FooterComponent;
