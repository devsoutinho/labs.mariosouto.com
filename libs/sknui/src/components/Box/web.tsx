import React from 'react';
import { StyleSheet } from "../../theme/StyleSheet/web";

interface BoxProps {
  tag?: string;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}
export function Box({ tag, styleSheet, children }: BoxProps) {
  const Tag = tag || "div" as any;
  return <Tag style={{
    display: "flex",
    flexDirection: "column",
    ...styleSheet,
  }}>
    {children}
  </Tag>;
}
