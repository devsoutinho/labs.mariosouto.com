import * as stories from "@devsoutinho/sknui/storybook/native";
import { Box, Text } from "@devsoutinho/sknui/native";

type Stories = keyof typeof stories;

export function StorybookComponentScreen(props: RootStackStorybookComponentScreenProps) {
  const componentName = props.route.params.componentName;
  const { Component, controls } = stories[componentName as Stories];
  const ComponentToBeRendered = Component as React.ComponentType<any>;
  return (
    <Box
      styleSheet={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Box
        styleSheet={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ComponentToBeRendered {...controls.props} />
      </Box>
      <Box
        styleSheet={{
          flex: 1,
        }}
      >
        <Text>
          Controls!
        </Text>
      </Box>
    </Box>
  );
}
