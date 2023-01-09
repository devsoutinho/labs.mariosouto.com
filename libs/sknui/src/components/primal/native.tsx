/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/native";

function parseValue(
  receivedValue: string | number,
  property: string,
  styleSheet?: StyleSheet
) {
  if (!receivedValue) return undefined;

  if (property === "fontWeight") {
    return `${receivedValue}`;
  }

  if (property === "fontSize" && typeof receivedValue === "string") {
    const value = parseInt(receivedValue.replace("px", ""), 10);
    return value;
  }

  if (property === "lineHeight") {
    const fontSize = parseValue(
      ((styleSheet?.fontSize as any)?.xs as any) || styleSheet?.fontSize,
      "fontSize",
      styleSheet as any
    ) as any;
    return Number(fontSize) * Number(receivedValue);
  }

  if (typeof receivedValue === "number") {
    return receivedValue;
  }

  const endsWithPX = receivedValue?.endsWith("px");
  if (endsWithPX) {
    return parseInt(receivedValue.replace("px", ""), 10);
  }

  return receivedValue;
}

function reduceStyleSheet(styleSheet?: StyleSheet) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.entries(styleSheet || {}).reduce<any>(
    (acc, [property, value]) => {
      if (typeof value === "object") {
        return {
          ...acc,
          [property]: parseValue(value.xs, property, styleSheet),
        };
      }
      return {
        ...acc,
        [property]: parseValue(value, property, styleSheet),
      };
    },
    {}
  );
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
