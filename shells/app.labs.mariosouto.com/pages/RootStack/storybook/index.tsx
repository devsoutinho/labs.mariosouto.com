import React from "react";
import { Box, Text, Touchable } from "@devsoutinho/sknui/native";
import * as stories from "@devsoutinho/sknui/storybook/native";

const allStoryNames = Object.keys(stories);

export function StorybookScreen({ navigation }: RootStackStorybookScreenProps) {
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
        {allStoryNames.map((componentName) => (
          <Touchable
            key={componentName}
            styleSheet={{
              padding: 15,
              backgroundColor: "#eee",
              marginBottom: 1,
            }}
            onTap={() => {
              navigation.navigate("storybook/[componentName]", {
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
