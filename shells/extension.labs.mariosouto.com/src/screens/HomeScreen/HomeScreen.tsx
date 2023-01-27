import React from "react";
import { Box, Text } from "@devsoutinho/sknui/web";

export function HomeScreen() {
  const [message, setMessage] = React.useState("");
  React.useEffect(() => {
    chrome.storage.local.get(["wordCountApp"], (result) => {
      const { length, totalWords } = result.wordCountApp || {};
      setMessage(
        `Selected text length: ${length} | Selected text total words: ${totalWords}`
      );
    });
  }, []);

  return (
    <Box
      styleSheet={{
        width: "320px",
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        styleSheet={{
          color: "#fff",
        }}
      >
        {message}
      </Text>
    </Box>
  );
}
