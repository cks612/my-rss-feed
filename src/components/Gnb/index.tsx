import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Gnb = () => {
  return (
    <GnbWrapper>
      <GnbContent>
        <h1>Voyage Tech Blog Feed</h1>
        <Box>
          <Link href="https://cks612.github.io/resume/" target="_blank">
            <MyImg>
              <Image
                src="https://user-images.githubusercontent.com/66737450/174422458-b4392872-c9d4-4dd2-a9c3-1472a0a47a43.JPG"
                alt="myImg"
                width={30}
                height={30}
                unoptimized={true}
              />
            </MyImg>
          </Link>
        </Box>
      </GnbContent>
    </GnbWrapper>
  );
};

export default Gnb;

const GnbWrapper = styled.nav`
  position: fixed;
  display: flex;
  max-width: 700px;
  width: 100%;
  height: 50px;
  padding-top: 20px;
  backdrop-filter: blur(5px);
  z-index: 100;
`;

const GnbContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 10px;

  h1 {
    font-size: 1.5em;
    font-weight: 900;
  }
`;

const Box = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
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

const MyImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid #070a1c;
  border-radius: 50%;
  overflow: hidden;

  cursor: pointer;
  img {
    object-fit: cover;
    pointer-events: none;
  }
`;
