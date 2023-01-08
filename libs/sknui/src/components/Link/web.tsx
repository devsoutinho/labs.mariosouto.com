import React from 'react';
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Touchable } from "../web";

interface LinkProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  href: string;
}
export function Link({ styleSheet, children, href, prefix, suffix, ...props }: LinkProps) {
  const PrefixComponent = prefix;
  const SuffixComponent = suffix;

  return <Touchable
    href={href}
    styleSheet={{
      display: "flex",
      ...styleSheet,
    }}
    {...props}>
    {PrefixComponent}
    {children}
    {SuffixComponent}
  </Touchable>;
}
