import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";

interface InputTextProps {
  label?: string;
  styleSheet?: StyleSheet;
}
export function InputText({ label, styleSheet }: InputTextProps) {
  return (
    <label>
      {label}
      <input
        type="text"
        style={
          {
            display: "flex",
            ...styleSheet,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        }
      />
    </label>
  );
}
