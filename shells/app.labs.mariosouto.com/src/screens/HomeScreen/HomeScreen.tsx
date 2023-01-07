import { Box, Text } from "@devsoutinho/sknui/native";
import { message } from "@src/screens/HomeScreen/message";

export function HomeScreen() {
  return (
    <Box
      styleSheet={{
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
