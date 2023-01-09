import { Breakpoints } from "../default/theme";

export type ResponsiveValue<Type> = Partial<Record<Breakpoints, Type>> | Type;

export type Width = string;
export type Display = "flex" | "inline-flex" | "none";
export type Color = string;
export type AlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";
export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type Flex = string | number;
