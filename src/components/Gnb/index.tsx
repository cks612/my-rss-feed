import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "@styles/_theme";
import { ThemeContext } from "pages/_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import * as S from "@styles/components/_gnbStyles";
import dynamic from "next/dynamic";

const TimeClicker = dynamic(() => import("@components/Clock"), {
  ssr: false,
});

const Gnb = () => {
  const date = new Date().getHours();
  const findMeridiem = date < 12 ? "am" : date < 17 ? "hm" : "pm";

  const { colorTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.GnbWrapper>
      <S.GnbContent>
        <S.GnbTitle>
          {findMeridiem === "am"
            ? "Good Morning, "
            : findMeridiem === "hm"
            ? "Good Afternoon, "
            : "Good Evening, "}
          Voyage
        </S.GnbTitle>
        <TimeClicker />

        {colorTheme === styles.lightTheme ? (
          <FontAwesomeIcon
            className="icon"
            icon={faMoon}
            spin
            size="xl"
            width={20}
            color="black"
            onClick={toggleTheme}
          />
        ) : (
          <FontAwesomeIcon
            className="icon"
            icon={faSun}
            spin
            width={20}
            size="xl"
            color="white"
            onClick={toggleTheme}
          />
        )}

        <S.Box>
          <Link
            rel="preload"
            as="image"
            href="https://cks612.github.io/resume/"
            target="_blank"
          >
            <S.MyImg>
              <Image
                src="https://user-images.githubusercontent.com/66737450/174422458-b4392872-c9d4-4dd2-a9c3-1472a0a47a43.JPG"
                alt="myImg"
                width={30}
                height={30}
                objectFit="cover"
                layout="fixed"
              />
            </S.MyImg>
          </Link>
        </S.Box>
      </S.GnbContent>
    </S.GnbWrapper>
  );
};

export default Gnb;
