import { Box, Text } from "@devsoutinho/sknui/native";

export function StorybookComponentScreen(props: RootStackStorybookComponentScreenProps) {
  return (
    <Box
      styleSheet={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Text>
        {props.route.params.componentName}
      </Text>
    </Box>
  );
}
