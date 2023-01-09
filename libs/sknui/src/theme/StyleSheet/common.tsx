import { Breakpoints } from "../default/theme";

export type ResponsiveValue<Type> = Partial<Record<Breakpoints, Type>> | Type;

export type NumericValue = string | number;
export type Display = "flex" | "inline-flex" | "none";
export type Color = string;
export type BackgroundColor = Color;
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

export type StyleSheetCommon = {
  display?: ResponsiveValue<Display>;
  width?: ResponsiveValue<NumericValue>;
  height?: ResponsiveValue<NumericValue>;
  margin?: ResponsiveValue<NumericValue>;
  padding?: ResponsiveValue<NumericValue>;
  backgroundColor?: ResponsiveValue<BackgroundColor>;
  color?: ResponsiveValue<Color>;
  flex?: ResponsiveValue<Flex>;
  alignItems?: ResponsiveValue<AlignItems>;
  justifyContent?: ResponsiveValue<JustifyContent>;
  flexDirection?: ResponsiveValue<FlexDirection>;
  flexWrap?: ResponsiveValue<FlexWrap>;
  overflow?: never;
};
