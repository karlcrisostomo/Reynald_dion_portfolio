"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context for managing blur
const StyledContext = createContext();

// Create a custom hook to access the context
export const useStyledContext = () => {
  return useContext(StyledContext);
};

// Create a provider component to wrap your application
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
