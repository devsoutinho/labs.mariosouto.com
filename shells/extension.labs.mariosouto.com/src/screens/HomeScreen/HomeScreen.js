import React from "react";
import { Box, Text } from "@devsoutinho/sknui";
export function HomeScreen() {
  return React.createElement(
    Box,
    {
      styleSheet: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    React.createElement(
      Text,
      {
        styleSheet: {
          color: "#fff",
        },
      },
      "Ol\u00E1 pessoas!"
    )
  );
}
