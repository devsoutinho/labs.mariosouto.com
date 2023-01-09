import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "../../theme/components/ThemeProvider";
import { theme } from "../../theme/default/theme";

const appTheme = extendTheme(theme);

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
