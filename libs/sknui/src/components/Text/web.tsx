import React from "react";
import { useTheme } from "../../theme/components/ThemeProvider";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { TypographyToken } from "../../theme/default/typography";
import { ResponsiveValue } from "../../theme/StyleSheet/common";
import { parseResponsiveToken } from "./logic/parseTypographyToken";
import { BoxPrimal } from "../primal/web";

const inlineTags = [
  "span",
  "a",
  "strong",
  "em",
  "small",
  "s",
  "cite",
  "q",
  "dfn",
  "abbr",
  "data",
  "time",
  "code",
  "var",
  "samp",
  "kbd",
  "sub",
  "sup",
  "i",
  "b",
  "u",
  "mark",
  "ruby",
  "rt",
  "rp",
  "bdi",
  "bdo",
  "span",
  "br",
  "wbr",
];

interface TextProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  styleSheet?: StyleSheet;
  typographyToken?: ResponsiveValue<TypographyToken>;
  children: React.ReactNode;
}
export function Text({
  typographyToken,
  styleSheet,
  children,
  tag,
}: TextProps) {
  const { theme } = useTheme();
  const Tag = tag || "p";

  const typographyStyles = parseResponsiveToken(
    typographyToken,
    theme.typography,
    theme.typography.body2
  );

  return (
    <BoxPrimal
      tag={Tag}
      styleSheet={{
        display: inlineTags.includes(Tag) ? "inline" : "block",
        ...typographyStyles,
        ...styleSheet,
      }}
    >
      {children}
    </BoxPrimal>
  );
}
