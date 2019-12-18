import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import GlobalStyle from "./styles/globalStyle";

const Circle = styled.div``;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
`;

const Toggle = styled.button`
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.green : theme.gray};
  border-radius: 50px;
  font-size: 1em;
  padding: 2px 0;
  height: auto;
  width: 35px;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  border: none;

  ${Circle} {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: white;
    transform: ${({ darkMode }) =>
      darkMode ? "translateX(17px)" : "translateX(2px)"};
    transition: all 0.1s ease-in-out;
  }
`;

const App = () => {
  const [darkMode, toggleTheme] = useState(false);

  return (
    <React.Fragment>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Container>
            <p>Dark mode</p>
            <Toggle onClick={() => toggleTheme(!darkMode)} darkMode={darkMode}>
              <Circle />
            </Toggle>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
