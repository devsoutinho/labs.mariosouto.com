import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";

interface BoxProps {
  tag?: string;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  // receive anything
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export function Box({ tag, styleSheet, children, ...props }: BoxProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = tag || ("div" as any);
  return (
    <Tag
      style={{
        display: "flex",
        flexDirection: "column",
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
