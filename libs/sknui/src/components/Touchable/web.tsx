import React from "react";
import { StyleSheet } from "../../theme/web";

interface TouchableProps {
  href?: string;
  children: React.ReactNode;
  onTap?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  styleSheet?: StyleSheet;
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
  return (
    <Tag
      href={href}
      style={{
        background: "transparent",
        border: "none",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(styleSheet as unknown as any),
      }}
      onClick={onTap}
      {...props}
    >
      {children}
    </Tag>
  );
}
