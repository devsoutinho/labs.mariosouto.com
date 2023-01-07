import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Text } from "@devsoutinho/sknui/native";

export function StorybookComponentScreen(props: RootStackStorybookComponentScreenProps) {
  
  console.warn(props);

  return (
    <Box
      styleSheet={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Text>
        Box
      </Text>
    </Box>
  );
}
