import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "../../theme/native";

interface TouchableProps {
  children: React.ReactNode;
  onTap?: () => void;
  disabled?: boolean;
  styleSheet?: StyleSheet;
}
export function Touchable({
  children,
  onTap,
  disabled,
  styleSheet,
}: TouchableProps) {
  return (
    <TouchableOpacity
      onPress={onTap}
      style={
        {
          backgroundColor: disabled ? "red" : "transparent",
          ...styleSheet,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }
    >
      {children}
    </TouchableOpacity>
  );
}

Touchable.defaultProps = {};
