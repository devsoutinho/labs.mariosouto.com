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
        ...styleSheet,
      }}
      onClick={onTap}
      {...props}
    >
      {children}
    </Tag>
  );
}
