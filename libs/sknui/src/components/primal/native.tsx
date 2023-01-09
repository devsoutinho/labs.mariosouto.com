import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/native";

function parseValue(receivedValue: string | number) {
  if (typeof receivedValue === "number") {
    return receivedValue;
  }

  const endsWithPX = receivedValue.endsWith("px");
  if (endsWithPX) {
    return parseInt(receivedValue.replace("px", ""), 10);
  }

  return receivedValue;
}

function reduceStyleSheet(styleSheet?: StyleSheet) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.entries(styleSheet || {}).reduce<any>((acc, [key, value]) => {
    if (typeof value === "object") {
      return {
        ...acc,
        [key]: parseValue(value.xs),
      };
    }
    return {
      ...acc,
      [key]: parseValue(value),
    };
  }, {});
}

interface BoxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export function BoxPrimal({ as, styleSheet, ...props }: BoxProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = as;
  return <Component style={reduceStyleSheet(styleSheet)} {...props} />;
}
