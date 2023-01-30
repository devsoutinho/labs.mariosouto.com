import React from "react";
import { BoxPrimal } from "../primal/web";
import { StyleSheet } from "../../theme/StyleSheet/web";

interface TouchableProps {
  href?: string;
  children: React.ReactNode;
  onTap?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  styleSheet?: StyleSheet;
  className?: string;
}
export function Touchable({
  styleSheet,
  children,
  onTap,
  href,
  ...props
}: TouchableProps) {
  const isLink = Boolean(href);
  const Tag = isLink ? "a" : "button";
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
      styleSheet={{
        background: "transparent",
        border: "none",
        transition: "opacity 0.2s",
        _hover: {
          opacity: 0.6,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(styleSheet as unknown as any),
        _focusVisible: {
          ...outlineStyles,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(styleSheet?._focusVisible as unknown as any),
        },
      }}
      onClick={onTap}
      {...props}
    >
      {children}
    </BoxPrimal>
  );
}
