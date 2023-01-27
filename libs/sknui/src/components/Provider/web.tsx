import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "../../theme/components/ThemeProvider";
import { theme } from "../../theme/default/theme";

const globalStyles = {
  "*": {
    boxSizing: "border-box",
  },
  html: {
    minHeight: "100%",
  },
  "html, body, #__next": {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  body: {
    fontFamily: "-apple-system, sans-serif",
  },
};

const appTheme = extendTheme({
  styles: {
    global: globalStyles,
  },
  ...theme,
});

interface ProviderProps {
  children: React.ReactNode;
}
export function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={appTheme}>{children}</ChakraProvider>
    </ThemeProvider>
  );
}
