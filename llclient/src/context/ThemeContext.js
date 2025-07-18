import React, { createContext, useContext, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    mode: 'dark',
    background: { default: '#0a0a0a', paper: '#181818' },
    text: { primary: '#e0e0e0' },
    primary: { main: '#8a0037' }, // deep crimson
    secondary: { main: '#4b006e' }, // deep violet
    accent: { main: '#bfa14a' }, // gold
  },
  typography: {
    fontFamily: 'Cinzel, EB Garamond, serif',
  },
};

const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const theme = useMemo(() => createTheme(themeOptions), []);
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext); 