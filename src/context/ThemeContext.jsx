import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = (children) => {
  function toggleTheme() {}
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
