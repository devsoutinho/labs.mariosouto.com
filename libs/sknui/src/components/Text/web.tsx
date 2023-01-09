import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";

interface TextProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}
export function Text({ styleSheet, children, tag }: TextProps) {
  const Tag = tag || "p";

  return (
    <Tag
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(styleSheet as any),
      }}
    >
      {children}
    </Tag>
  );
}
