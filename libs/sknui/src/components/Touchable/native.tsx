import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from "../../theme/native";

interface TouchableProps {
  children: React.ReactNode;
  onPress?: () => void;
  styleSheet?: StyleSheet;
}
export function Touchable({ children, onPress, styleSheet }: TouchableProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styleSheet}
    >
      {children}
    </TouchableOpacity>
  )
}

Touchable.defaultProps = {};
