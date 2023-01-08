import React from 'react';
import { StyleSheet } from "../../theme/StyleSheet/web";

interface BoxProps {
  tag?: string;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  // receive anything
  [key: string]: any;
}
export function Box({ tag, styleSheet, children, ...props }: BoxProps) {
  const Tag = tag || "div" as any;
  return <Tag style={{
    display: "flex",
    flexDirection: "column",
    ...styleSheet,
  }} {...props}>
    {children}
  </Tag>;
}
