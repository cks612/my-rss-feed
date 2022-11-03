import styled from "styled-components";

export const FooterContainer = styled.footer`
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
