import { useEffect, useState } from "react";
import { MainTheme, styles } from "../../styles/_theme";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<MainTheme>(styles.lightTheme);
  console.log(theme);
  console.log("=========================");

  const setMode = (mode: MainTheme) => {
    mode === styles.lightTheme
      ? window.localStorage.setItem("theme", "light")
      : window.localStorage.setItem("theme", "dark");
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === styles.lightTheme
      ? setMode(styles.darkTheme)
      : setMode(styles.lightTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme !== null) {
      if (localTheme === "dark") {
        setTheme(styles.darkTheme);
      } else {
        setTheme(styles.lightTheme);
      }
    }
  }, []);

  return { theme, toggleTheme };
};
