import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { Box, Text, Touchable } from "@devsoutinho/sknui/native";

export function StorybookScreen({}: RootStackStorybookScreenProps) {
  const navigation = React.useContext(NavigationContext);
  return (
    <Box
      styleSheet={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Box
        styleSheet={{
          marginBottom: 20,
        }}
      >
        {["Box", "Text"].map((componentName) => (
          <Touchable
            key={componentName}
            styleSheet={{
              padding: 10,
              backgroundColor: "#eee",
              marginBottom: 1,
            }}
            onPress={() => {
              navigation?.navigate("storybook/[componentName]", {
                componentName,
              });
            }}
          >
            <Text key={componentName}
              styleSheet={{
                fontSize: 20,
              }}
            >{componentName}</Text>
          </Touchable>
        ))}
      </Box>
    </Box>
  );
}
