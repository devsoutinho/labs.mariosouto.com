import React from "react";
import { Text as RNText } from "react-native";
import { StyleSheet } from "../../theme/StyleSheet/native";

interface TextProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}
export function Text({ styleSheet, children }: TextProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <RNText style={styleSheet as any}>{children}</RNText>;
}
