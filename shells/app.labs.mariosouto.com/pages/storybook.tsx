import { Box, Text } from "@devsoutinho/sknui/native";

export function StorybookScreen() {
  return (
    <Box
      styleSheet={{
        flex: 1,
      }}
    >
      <Text>Storybook</Text>
      {["Box", "Text"].map((component) => (
        <Text key={component}>{component}</Text>
      ))}
    </Box>
  );
}
