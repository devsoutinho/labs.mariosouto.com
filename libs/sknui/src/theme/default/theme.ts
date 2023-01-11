import { DEFAULT_BREAKPOINTS } from "./breakpoints";
import { DEFAULT_COLORS } from "./colors";
import { DEFAULT_TYPOGRAPHY } from "./typography";
import { DEFAULT_SPACING } from "./spacing";
import { DEFAULT_ROUNDED } from "./rounded";
import { DEFAULT_SHADOW } from "./shadow";
export type { Breakpoints } from "./breakpoints";

export const theme = {
  typography: DEFAULT_TYPOGRAPHY,
  colors: DEFAULT_COLORS,
  breakpoints: DEFAULT_BREAKPOINTS,
  spacing: DEFAULT_SPACING,
  rounded: DEFAULT_ROUNDED,
  shadow: DEFAULT_SHADOW,
} as const;

export type Theme = typeof theme;
