import React from "react";
import { Box } from "../Box/web";
import { StyleSheet } from "../../theme/StyleSheet/web";

interface ImageProps {
  src?: string;
  alt: string;
  styleSheet?: StyleSheet;
}
export function Image({ src, alt, styleSheet }: ImageProps) {
  const { objectFit, objectPosition, borderRadius, ...pictureStyleSheet } =
    styleSheet || {};

  return (
    <Box tag="picture" styleSheet={pictureStyleSheet}>
      <Box
        tag="img"
        src={src}
        alt={alt}
        style={{
          borderRadius,
          objectPosition,
          objectFit: objectFit || "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}
