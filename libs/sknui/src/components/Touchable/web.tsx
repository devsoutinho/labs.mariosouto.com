import React from "react";
import { BoxPrimal } from "../primal/web";
import { StyleSheet } from "../../theme/StyleSheet/web";

interface TouchableProps {
  href?: string;
  children: React.ReactNode;
  onTap?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  styleSheet?: StyleSheet;
  className?: string;
  disabled?: boolean;
}
export function Touchable({
  styleSheet,
  children,
  onTap,
  href,
  disabled,
  ...props
}: TouchableProps) {
  const isLink = Boolean(href);
  const Tag = isLink ? "a" : "button";
  const isExternal = href?.startsWith("http");
  const outlineStyles = isLink
    ? {
        borderRadius: "2px",
        outline: "2px solid currentColor",
      }
    : {
        outline: "2px solid red",
        outlineOffset: "2px",
      };

  return (
    <BoxPrimal
      tag={Tag}
      href={href}
      target={isLink ? isExternal && "_blank" : undefined}
      styleSheet={{
        background: "transparent",
        border: "none",
        transition: "opacity 0.2s",
        _hover: {
          opacity: 0.6,
        },
        ...(disabled && {
          opacity: 0.4,
          cursor: "not-allowed",
          _hover: {},
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(styleSheet as unknown as any),
        _focusVisible: {
          ...outlineStyles,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(styleSheet?._focusVisible as unknown as any),
        },
      }}
      onClick={onTap}
      disabled={disabled}
      {...props}
    >
      {children}
    </BoxPrimal>
  );
}
