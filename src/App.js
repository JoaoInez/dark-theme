import React, { useState } from "react";
import Page from "./components/Page";
import { DarkModeContext } from "./context/DarkModeContext";

const App = () => {
  const darkModeState = useState(false);

  const [darkMode, setDarkMode] = darkModeState;

  return (
    <DarkModeContext.Provider value={darkModeState}>
      <Page />
      <button onClick={() => setDarkMode(!darkMode)}>Change Theme</button>
    </DarkModeContext.Provider>
  );
};

export default App;
