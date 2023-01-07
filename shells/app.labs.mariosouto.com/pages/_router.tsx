import { Box } from "@devsoutinho/sknui/native";
import Home from "./index";
import { StorybookScreen } from "./storybook";

export default function Router() {
  return (
    <Box
      styleSheet={{
        flex: 1,
      }}
    >
      <Home />
      <StorybookScreen />
    </Box>
  );
}
