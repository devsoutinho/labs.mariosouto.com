import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from "../../theme/native";

interface TouchableProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  styleSheet?: StyleSheet;
}
export function Touchable({ children, onPress, disabled, styleSheet }: TouchableProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: disabled ? "red" : "transparent",
        ...styleSheet,
      }}
    >
      {children}
    </TouchableOpacity>
  )
}

Touchable.defaultProps = {};
