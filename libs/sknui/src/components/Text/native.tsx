import React from "react";
import { Text as RNText } from "react-native";
import { BoxPrimal } from "../primal/native";
import { TypographyToken } from "../../theme/default/typography";
import { ResponsiveValue } from "../../theme/StyleSheet/common";
import { useTheme } from "../../theme/components/ThemeProvider";
import { StyleSheet } from "../../theme/StyleSheet/native";

import { parseResponsiveToken } from "./logic/parseTypographyToken";

interface TextProps {
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  typographyToken?: ResponsiveValue<TypographyToken>;
}
export function Text({ styleSheet, children, typographyToken }: TextProps) {
  const { theme } = useTheme();
  const typographyStyles = parseResponsiveToken(
    typographyToken,
    theme.typography,
    theme.typography.body2
  );

  return (
    <BoxPrimal
      as={RNText}
      styleSheet={{
        ...styleSheet,
        ...typographyStyles,
      }}
    >
      {children}
    </BoxPrimal>
  );
}

Text.defaultProps = {
  typographyToken: "body2",
};
