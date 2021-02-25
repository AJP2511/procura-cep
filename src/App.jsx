import React, { useContext } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import { MainContainer, CenterContainer } from "./App.style";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./themes";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  const { theme } = useContext(GlobalContext);

  const themeSelector = () => {
    if (theme === "dark") return dark;
    else return light;
  };

  return (
    <ThemeProvider theme={themeSelector}>
      <GlobalStyle />
      <MainContainer>
        <Header />
        <CenterContainer>
          <LeftSide />
          <RightSide />
        </CenterContainer>
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
