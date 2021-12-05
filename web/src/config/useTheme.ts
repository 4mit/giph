import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../util";

export const useTheme = () => {
  const themes = getFromLS("all-themes");
  // setting default theme below
  const [theme, setTheme] = useState(themes.light); // theme object
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setToLS("theme", mode);
    setTheme({
      ...themes[mode],
    });
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(themes[localTheme]) : setTheme(themes.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
