import React, { useContext, useState } from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useInterval from "../../hooks/utils/useInterval";
import { styles } from "../../styles/_theme";
import { ThemeContext } from "../../pages/_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Gnb = () => {
  let timeClicker = moment().format("HH:mm:ss a");
  const date = new Date().getHours();
  const findMeridiem = date < 12 ? "am" : date < 17 ? "hm" : "pm";
  const [realTime, setRealTime] = useState({ timeClicker });

  const { colorTheme, toggleTheme } = useContext(ThemeContext);

  useInterval(() => {
    setRealTime({ ...realTime });
  }, 1000);

  return (
    <GnbWrapper>
      <GnbContent>
        <GnbTitle>
          {findMeridiem === "am"
            ? "Good Morning"
            : findMeridiem === "hm"
            ? "Good Afternoon"
            : "Good Evening, "}
          <span>Voyage</span>
        </GnbTitle>
        <TimeTraker>{timeClicker}</TimeTraker>

        {colorTheme === styles.lightTheme ? (
          <FontAwesomeIcon
            className="icon"
            icon={faMoon}
            spin
            size="xl"
            color="black"
            onClick={toggleTheme}
          />
        ) : (
          <FontAwesomeIcon
            className="icon"
            icon={faSun}
            spin
            size="xl"
            color="black"
            onClick={toggleTheme}
          />
        )}

        <Box>
          <Link href="https://cks612.github.io/resume/" target="_blank">
            <MyImg>
              <Image
                src="https://user-images.githubusercontent.com/66737450/174422458-b4392872-c9d4-4dd2-a9c3-1472a0a47a43.JPG"
                alt="myImg"
                width={30}
                height={30}
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
  padding-top: 20px;
  backdrop-filter: blur(5px);
  z-index: 100;
`;

const GnbContent = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "space-between")};
  ${({ theme }) => theme.commonPadding("10px 10px")};
  width: 100%;

  .icon {
    cursor: pointer;
  }
`;

const Box = styled.div`
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

const MyImg = styled.div`
  ${({ theme }) => theme.flexBox("row", "center", "space-between")};
  ${({ theme }) => theme.border("6px solid", "50%")};
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    pointer-events: none;
  }
`;

const GnbTitle = styled.h1`
  ${({ theme }) => theme.flexBox("row", "center", "")};
  color: ${({ theme }) => theme.PRIMARY_FONT};
  gap: 20px;
  font-family: neon;
  font-size: 1.5em;
`;

const TimeTraker = styled.p`
  color: #fff;
  font-size: 1.5em;
  text-shadow: 0 0 5px #171717, 0 0 20px #171717, 0 0 40px #5da7db,
    0 0 55px #5da7db, 0 0 5px #5da7db;
`;
