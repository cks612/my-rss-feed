import React from "react";
import { FooterContainer } from "@styles/components/_footerStyles";

const Footer = () => {
  return (
    <FooterContainer>
      ©{" "}
      <a href="https://github.com/cks612" target="_blank" rel="noreferrer">
        voyageDev
      </a>
      , Built with Next.js
    </FooterContainer>
  );
};

export default Footer;
