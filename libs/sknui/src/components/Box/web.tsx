import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { BoxPrimal } from "../primal/web";

interface BoxProps {
  tag?: string;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
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
