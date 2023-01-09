import { ThemeProvider } from "../../theme/components/ThemeProvider";
import { theme } from "../../theme/default/theme";

interface ProviderProps {
  children: React.ReactNode;
}
export function Provider({ children }: ProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
