import {
  AlignItems,
  Color,
  Display,
  Flex,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Width,
} from "./common";

export type StyleSheet = {
  display?: Display;
  width?: Width;
  color?: Color;
  flex?: Flex;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
};
