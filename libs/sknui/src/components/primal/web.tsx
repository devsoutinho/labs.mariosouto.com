import React from "react";
import { Box as ChakraBox } from "@chakra-ui/react";
import { StyleSheet } from "../../theme/StyleSheet/web";

interface BoxProps {
  tag?: string;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export function BoxPrimal({ tag, styleSheet, children, ...props }: BoxProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = tag || ("div" as any);
  return (
    <ChakraBox as={Tag} {...styleSheet} {...props}>
      {children}
    </ChakraBox>
  );
}
