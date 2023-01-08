import React from 'react';
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Box } from "../web";

interface IconProps {
  name?: string;
  styleSheet?: StyleSheet;
}
export function Icon({ name, styleSheet }: IconProps) {
  return (
    <Box styleSheet={styleSheet}>
      {name}
    </Box>
  );
}
