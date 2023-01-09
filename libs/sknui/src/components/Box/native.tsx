import React from "react";
import { View } from "react-native";
import { StyleSheet } from "../../theme/StyleSheet/native";
import { BoxPrimal } from "../primal/native";

interface BoxProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}
export function Box({ styleSheet, children, ...props }: BoxProps) {
  return (
    <BoxPrimal as={View} styleSheet={styleSheet} {...props}>
      {children}
    </BoxPrimal>
  );
}
