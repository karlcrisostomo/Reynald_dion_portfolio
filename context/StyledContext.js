"use client";

import  { createContext, useContext, useState } from "react";

const StyledContext = createContext();

export const useStyledContext = () => {
  return useContext(StyledContext);
};

export const StyledContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => [setIsMenuOpen((e) => !e)];
  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
    toggleTheme,
  };

  return (
    <StyledContext.Provider value={contextValue}>
      {children}
    </StyledContext.Provider>
  );
};
