import { ScrollView } from "react-native";
import { Box } from "../Box/native";

interface ScreenContainer {
  children: React.ReactNode;
}
export function ScreenContainer({ children }: ScreenContainer) {
  return (
    <Box styleSheet={{ flex: 1, flexDirection: "column" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
    </Box>
  );
}
