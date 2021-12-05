import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import MainLayout from "./layout/MainLayout";
// import "./App.css";
import { themeConf } from "./config/themeConfig";
import { GlobalStyles } from "./GlobalStyles";
import { useTheme } from "./config/useTheme";
import { setToLS } from "./util";
import GiphyContainer from "./pages/GiphyContainer";
import Header from "./components/Header";

function App() {
  setToLS("all-themes", themeConf);

  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<any>(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  const themeSwitcher = (mode: string) => {
    setMode(mode);
  };

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Header themeSwitcher={themeSwitcher} theme={selectedTheme} />
          <MainLayout theme={selectedTheme}>
            <GiphyContainer />
          </MainLayout>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
