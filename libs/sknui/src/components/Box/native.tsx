import React from "react";
import { View } from "react-native";
import { StyleSheet } from "../../theme/StyleSheet/native";

interface BoxProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}
export function Box({ styleSheet, children }: BoxProps) {
  return <View style={styleSheet as any}>{children}</View>;
}
