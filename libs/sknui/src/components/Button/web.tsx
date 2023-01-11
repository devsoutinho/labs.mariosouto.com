import React from "react";
import { useTheme } from "../../theme/web";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Text, Touchable } from "../web";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "accent" | "ghost" | "destructive";
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export function Button({
  variant,
  styleSheet,
  children,
  prefix,
  suffix,
}: ButtonProps) {
  const { theme } = useTheme();
  const PrefixComponent = prefix;
  const SuffixComponent = suffix;

  const stylesByVariant = {
    primary: {
      color: theme.colors.neutral.x000,
      backgroundColor: theme.colors.primary.x500,
      boxShadow: theme.shadow.default,
      _focusVisible: {
        boxShadow: `${theme.colors.neutral.x000} 0px 0px 0px 2px, ${theme.colors.primary.x500} 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      },
    },
    secondary: {
      color: theme.colors.neutral.x500,
      backgroundColor: theme.colors.neutral.x000,
      borderStyle: "solid",
      borderWidth: theme.spacing.x_unit,
      borderColor: theme.colors.neutral.x300,
      boxShadow: theme.shadow.default,
      _focusVisible: {
        boxShadow: `${theme.colors.neutral.x000} 0px 0px 0px 2px, ${theme.colors.neutral.x300} 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      },
    },
    accent: {
      color: theme.colors.neutral.x000,
      backgroundColor: theme.colors.accent.x500,
      boxShadow: theme.shadow.default,
      _focusVisible: {
        boxShadow: `${theme.colors.neutral.x000} 0px 0px 0px 2px, ${theme.colors.accent.x500} 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      },
    },
    ghost: {
      color: theme.colors.primary.x500,
      backgroundColor: theme.colors.neutral.x000,
      boxShadow: theme.shadow.none,
      _focusVisible: {
        boxShadow: `${theme.colors.neutral.x000} 0px 0px 0px 2px, ${theme.colors.primary.x500} 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      },
    },
    destructive: {
      color: theme.colors.neutral.x000,
      backgroundColor: theme.colors.negative.x500,
      boxShadow: theme.shadow.default,
      _focusVisible: {
        boxShadow: `${theme.colors.neutral.x000} 0px 0px 0px 2px, ${theme.colors.negative.x500} 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      },
    },
  };

  const currentVariant = stylesByVariant[variant];
  const { backgroundColor } = stylesByVariant[variant];

  const buttonStyles = {
    borderWidth: theme.spacing.x_unit,
    borderColor: "transparent",
    ...currentVariant,
    backgroundColor,
    overflow: "initial",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    appearance: "none",
    gap: "8px",
    borderRadius: theme.rounded.md,
    paddingY: theme.spacing.x2,
    paddingX: theme.spacing.x4,
    _placeholder: {
      color: theme.colors.neutral.x400,
    },
    _hover: {
      opacity: 0.8,
    },
    _focusVisible: {
      ...currentVariant?._focusVisible,
      outline: `2px solid transparent`,
      outlineOffset: "2px",
    },
  };

  return (
    <Touchable
      styleSheet={{
        ...styleSheet,
        ...(buttonStyles as unknown as StyleSheet),
      }}
    >
      {PrefixComponent}
      <Text>{children}</Text>
      {SuffixComponent}
    </Touchable>
  );
}

Button.defaultProps = {
  variant: "primary",
};
