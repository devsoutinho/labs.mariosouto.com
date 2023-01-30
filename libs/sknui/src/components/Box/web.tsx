import React from "react";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { BoxPrimal } from "../primal/web";

interface BoxProps {
  tag?: string;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
  innerRef?: React.RefObject<HTMLElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export function Box({ styleSheet, children, innerRef, ...props }: BoxProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { maskImage, aspectRatio, ...styleSheetPure } = styleSheet as any;

  return (
    <BoxPrimal
      innerRef={innerRef}
      styleSheet={{
        display: "flex",
        flexDirection: "column",
        ...styleSheetPure,
      }}
      sx={{
        maskImage: maskImage,
        aspectRatio: aspectRatio,
      }}
      {...props}
    >
      {children}
    </BoxPrimal>
  );
}

Box.defaultProps = {
  tag: "div",
  styleSheet: {},
};
