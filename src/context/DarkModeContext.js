import React, { createContext, useContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ darkMode, children }) => (
  <DarkModeContext.Provider value={useState(darkMode)}>
    {children}
  </DarkModeContext.Provider>
);

export const useDarkModeValue = () => useContext(DarkModeContext);
