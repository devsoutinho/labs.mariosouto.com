import React from 'react';
import { StyleSheet } from "../../theme/web";

interface TouchableProps {
  children: React.ReactNode;
  onTap?: React.MouseEventHandler<HTMLButtonElement>;
  styleSheet?: StyleSheet;
}
export function Touchable({ styleSheet, children, onTap }: TouchableProps) {
  const Tag = "button";
  return (
    <Tag style={{
      background: "transparent",
      border: "none",
      ...styleSheet,
    }} onClick={onTap}>
      {children}
    </Tag>
  )
}
