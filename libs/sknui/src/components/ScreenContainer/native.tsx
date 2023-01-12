import { ScrollView } from "react-native";
import { Box } from "../Box/native";

interface ScreenContainer {
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}
export function ScreenContainer({ children, styleSheet }: ScreenContainer) {
  return (
    <Box styleSheet={{ flex: 1, flexDirection: "column", ...styleSheet }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
    </Box>
  );
}
