import { useEffect, useState } from "react";
import { MainTheme, styles } from "../../styles/_theme";

export const useDarkMode = () => {
  const [colorTheme, setTheme] = useState<MainTheme>(styles.lightTheme);

  const setMode = (mode: MainTheme) => {
    if (mode === styles.lightTheme) {
      document.body.dataset.theme = "light";
      window.localStorage.setItem("theme", "light");
    } else {
      document.body.dataset.theme = "dark";
      window.localStorage.setItem("theme", "dark");
    }
    setTheme(mode);
  };

  const toggleTheme = () => {
    colorTheme === styles.lightTheme
      ? setMode(styles.darkTheme)
      : setMode(styles.lightTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    // 이용자가 다크모드를 선호하면 다크 모드로 보여주는 로직
    // 위에 localTheme을 받아서 !localTheme 처리 이유는
    // 처음에는 로컬에 저장된게 없으니 false로 나오기 때문에 true로 바꿔주고
    // 둘다 true일 때만 처리해주기
    window.matchMedia("(prefers-color-scheme:dark)").matches && !localTheme
      ? setMode(styles.darkTheme)
      : localTheme === "dark"
      ? setMode(styles.darkTheme)
      : setMode(styles.lightTheme);
  }, []);
  return { colorTheme, toggleTheme };
};
