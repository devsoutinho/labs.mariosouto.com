import { DEFAULT_BREAKPOINTS } from "./breakpoints";
import { DEFAULT_COLORS } from "./colors";
export type { Breakpoints } from "./breakpoints";

export const theme = {
  colors: DEFAULT_COLORS,
  breakpoints: DEFAULT_BREAKPOINTS,
};

export type Theme = typeof theme;
