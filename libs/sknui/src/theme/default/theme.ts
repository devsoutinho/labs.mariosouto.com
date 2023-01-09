import { DEFAULT_BREAKPOINTS } from "./breakpoints";
import { DEFAULT_COLORS } from "./colors";
import { DEFAULT_TYPOGRAPHY } from "./typography";
export type { Breakpoints } from "./breakpoints";

export const theme = {
  typography: DEFAULT_TYPOGRAPHY,
  colors: DEFAULT_COLORS,
  breakpoints: DEFAULT_BREAKPOINTS,
};

export type Theme = typeof theme;
