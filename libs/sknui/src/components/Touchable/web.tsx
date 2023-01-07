import React from 'react';
import { StyleSheet } from "../../theme/web";

interface TouchableProps {
  children: React.ReactNode;
  onPress?: React.MouseEventHandler<HTMLButtonElement>;
  styleSheet?: StyleSheet;
}
export function Touchable({ styleSheet, children, onPress }: TouchableProps) {
  const Tag = "button";
  return (
    <Tag style={{
      background: "transparent",
      border: "none",
      ...styleSheet,
    }} onClick={onPress}>
      {children}
    </Tag>
  )
}
