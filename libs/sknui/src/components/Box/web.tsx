import React from 'react';
import { StyleSheet } from "../../theme/StyleSheet/web";

interface BoxProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}
export function Box({ styleSheet, children }: BoxProps) {
  return <div style={{
    display: "flex",
    ...styleSheet,
  }}>
    {children}
  </div>;
}
