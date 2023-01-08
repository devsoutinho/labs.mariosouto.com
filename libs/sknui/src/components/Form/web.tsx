import React from 'react';
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Box } from "../web";

interface FormProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}
export function Form({ styleSheet, children }: FormProps) {
  const tag = "form";

  return <Box tag={tag} styleSheet={{
    ...styleSheet,
  }}>
    {children}
  </Box>;
}
