import { StyleProp, ViewStyle } from "react-native";
import { ResponsiveValue, StyleSheetCommon } from "./common";

type StylePropsKeys = Partial<keyof StyleProp<ViewStyle>>;

type StyleSheetBase = Partial<Record<StylePropsKeys, ResponsiveValue<unknown>>>;

export type StyleSheet = StyleSheetBase & StyleSheetCommon;
