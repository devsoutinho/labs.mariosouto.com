import React from 'react';

interface BoxProps {
  children: React.ReactNode;
}
export function Box({ children }: BoxProps) {
  return <div>{children}</div>;
}