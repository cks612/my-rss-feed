import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Gnb from "../Gnb";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <MainContainer>
      <Gnb />
      {children}
      <Footer />
    </MainContainer>
  );
};

export default Layout;

export const MainContainer = styled.main`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
`;
