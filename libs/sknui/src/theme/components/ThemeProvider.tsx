import React from "react";
import { Theme, theme } from "../default/theme";

interface ThemeContext {
  theme: Theme;
}
const ThemeContext = React.createContext({
  theme,
});

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
