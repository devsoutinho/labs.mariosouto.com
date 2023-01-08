import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Box } from "../web";

interface FormProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
export function Form({ styleSheet, children, onSubmit }: FormProps) {
  const tag = "form";

  return (
    <Box
      tag={tag}
      styleSheet={{
        ...styleSheet,
      }}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        onSubmit?.(event);
      }}
    >
      {children}
    </Box>
  );
}
