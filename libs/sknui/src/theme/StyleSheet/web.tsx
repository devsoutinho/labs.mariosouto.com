import { StyleProps } from "@chakra-ui/system";
import {
  ResponsiveValue,
  Width,
  Display,
  Color,
  Flex,
  AlignItems,
  JustifyContent,
  FlexDirection,
  FlexWrap,
} from "./common";

type StylePropsKeys = Partial<StyleProps>;

export type StyleSheet = StylePropsKeys & {
  display?: ResponsiveValue<Display>;
  width?: ResponsiveValue<Width>;
  color?: ResponsiveValue<Color>;
  flex?: ResponsiveValue<Flex>;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
};
