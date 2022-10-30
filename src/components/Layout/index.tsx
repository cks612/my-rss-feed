import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Gnb = dynamic(() => import("../Gnb"), {
  ssr: false,
});

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
