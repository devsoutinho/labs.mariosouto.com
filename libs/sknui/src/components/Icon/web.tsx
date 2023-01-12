import React from "react";
import { DEFAULT_SPACING } from "../../theme/default/spacing";
import { useTheme } from "../../theme/web";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Box } from "../web";
import { iconList } from "./iconList";

export type IconNames = keyof typeof iconList;

interface IconProps {
  name: IconNames;
  styleSheet?: StyleSheet;
  size?: keyof typeof DEFAULT_SPACING;
}

export function Icon({ name, styleSheet, size, ...props }: IconProps) {
  const { theme } = useTheme();
  const iconSize = theme.spacing[size || "x6"];
  const Path = iconList[name].icon;
  return (
    <Box
      tag="svg"
      styleSheet={{
        ...styleSheet,
        fill: "currentColor",
        width: iconSize,
        height: iconSize,
      }}
      {...props}
    >
      <>
        <title>{name}</title>
        <Path />
      </>
    </Box>
  );
}

Icon.defaultProps = {
  size: "x6",
};
