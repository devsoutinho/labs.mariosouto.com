import { StyleProp, ViewStyle } from "react-native";
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

type StylePropsKeys = Partial<StyleProp<ViewStyle>>;

export type StyleSheet = StylePropsKeys & {
  display?: Display;
  width?: Width;
  color?: Color;
  flex?: Flex;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
};
