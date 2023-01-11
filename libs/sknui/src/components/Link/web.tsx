import React from "react";
import { Display } from "../../theme/StyleSheet/common";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Touchable } from "../web";

interface LinkProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  href: string;
}
export function Link({
  styleSheet,
  children,
  href,
  prefix,
  suffix,
  ...props
}: LinkProps) {
  const PrefixComponent = prefix;
  const SuffixComponent = suffix;

  const linkStyles: StyleSheet = {
    display: "inline" as Display,
    textDecoration: "underline",
    _hover: {
      opacity: 0.6,
    },
  };

  return (
    <Touchable
      href={href}
      styleSheet={{
        ...linkStyles,
        ...styleSheet,
      }}
      {...props}
    >
      {PrefixComponent}
      {children}
      {SuffixComponent}
    </Touchable>
  );
}
