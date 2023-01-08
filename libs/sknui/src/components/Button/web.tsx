import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Touchable } from "../web";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export function Button({ styleSheet, children, prefix, suffix }: ButtonProps) {
  const PrefixComponent = prefix;
  const SuffixComponent = suffix;

  return (
    <Touchable
      styleSheet={{
        display: "flex",
        gap: "8px",
        ...styleSheet,
      }}
    >
      {PrefixComponent}
      {children}
      {SuffixComponent}
    </Touchable>
  );
}
