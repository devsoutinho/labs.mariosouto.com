import React from "react";
import { StyleSheet } from "../../theme/StyleSheet";

interface TextProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}
export function Text({ styleSheet, children, tag }: TextProps) {
  const Tag = tag || "p";

  return <Tag style={styleSheet}>{children}</Tag>;
}