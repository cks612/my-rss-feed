import styled from "styled-components";

export const GnbWrapper = styled.nav`
  ${({ theme }) => theme.commonPadding("10px 10px")};
  position: fixed;
  top: 0;
  max-width: 700px;
  width: 100%;
  backdrop-filter: blur(5px);
  z-index: 100;
`;

export const GnbContent = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "space-between")};
  width: 100%;

  .icon {
    cursor: pointer;
  }
`;

export const Box = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  overflow: hidden;

  &::before {
    ${({ theme }) => theme.widthHeightSize("100%", "100%")}
    content: "";
    position: absolute;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transition: 0.5s;
    animation: borderAnimate 4s linear infinite;
  }

  @keyframes borderAnimate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const MyImg = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "space-between")};
  ${({ theme }) => theme.border("6px solid", "50%")};
  overflow: hidden;
  cursor: pointer;
`;

export const GnbTitle = styled.h1`
  ${({ theme }) => theme.flexBox("row", "center", "")};
  color: ${({ theme }) => theme.PRIMARY_FONT};
  gap: 20px;
  font-family: "Neon";
  font-size: 1.3em;
`;

export const TimeTraker = styled.p`
  color: #fff;
  font-size: 1.3em;
  text-shadow: 0 0 5px #171717, 0 0 20px #171717, 0 0 40px #5da7db,
    0 0 55px #5da7db, 0 0 5px #5da7db;
`;
