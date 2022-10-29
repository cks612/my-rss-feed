import React from "react";
import styled from "styled-components";

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

const FooterContainer = styled.footer`
  padding: 32px 24px;
  text-align: center;
  color: ${({ theme }) => theme.FEED_FOOTER};
  font-size: 14px;

  a {
    all: unset;
    text-decoration: underline;
    cursor: pointer;
  }
`;
