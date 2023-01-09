import React from "react";
import { Box, Text, Touchable, useTheme } from "@devsoutinho/sknui/native";
import { message } from "@src/screens/HomeScreen/message";
import { StatusBar } from "expo-status-bar";

export function HomeScreen({ navigation }: RootStackHomeScreenProps) {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar style="auto" />
      <Box
        styleSheet={{
          flex: 1,
          backgroundColor: {
            xs: theme.colors.primary.x100,
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          styleSheet={{
            color: "#000",
          }}
        >
          {message}
        </Text>
        <Touchable onTap={() => navigation.navigate("storybook")}>
          <Text
            styleSheet={{
              color: "#000",
            }}
          >
            Go to Storybook
          </Text>
        </Touchable>
      </Box>
    </>
  );
}
