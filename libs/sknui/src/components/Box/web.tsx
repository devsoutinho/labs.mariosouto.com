import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { BoxPrimal } from "../primal/web";

interface BoxProps {
  tag?: string;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export function Box({ styleSheet, children, ...props }: BoxProps) {
  return (
    <BoxPrimal
      styleSheet={{
        display: "flex",
        flexDirection: "column",
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </BoxPrimal>
  );
}
