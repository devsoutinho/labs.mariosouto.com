import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { BoxPrimal } from "../primal/web";

interface ScreenContainer {
  children: React.ReactNode;
  styleSheet: StyleSheet;
}
export function ScreenContainer({ styleSheet, children }: ScreenContainer) {
  return (
    <BoxPrimal styleSheet={{ flex: 1, flexDirection: "column", ...styleSheet }}>
      {children}
    </BoxPrimal>
  );
}
