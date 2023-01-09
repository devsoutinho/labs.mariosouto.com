import React from "react";
import {
  Box,
  Text,
  useTheme,
  ScreenContainer,
  Touchable,
} from "@devsoutinho/sknui/web";

const message = "Olá pessoas";

export function HomeScreen() {
  const { theme } = useTheme();

  return (
    <ScreenContainer>
      <Box
        styleSheet={{
          flex: 1,
          margin: "20px",
          padding: "20px",
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
        <Touchable>
          <Text
            styleSheet={{
              color: "#000",
            }}
          >
            Go to Storybook
          </Text>
        </Touchable>
      </Box>
      <Box
        styleSheet={{
          height: "1000px",
          margin: "20px",
          padding: "20px",
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
        <Touchable>
          <Text
            styleSheet={{
              color: "#000",
            }}
          >
            Go to Storybook
          </Text>
        </Touchable>
      </Box>
    </ScreenContainer>
  );
}
