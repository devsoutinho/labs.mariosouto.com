/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleProps } from "@chakra-ui/system";
import { ResponsiveValue, StyleSheetCommon } from "./common";

type StylePropsKeys = Partial<keyof StyleProps>;

type StyleSheetBase = Partial<Record<StylePropsKeys, ResponsiveValue<unknown>>>;

export type StyleSheet = StyleSheetBase & StyleSheetCommon;
