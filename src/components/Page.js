import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import GlobalStyle from "../styles/globalStyle";
import Navbar from "./Navbar";
import { useDarkModeValue } from "../context/DarkModeContext";

const Page = () => {
  const [darkMode] = useDarkModeValue();

  return (
    <React.Fragment>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Navbar />
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Page;
