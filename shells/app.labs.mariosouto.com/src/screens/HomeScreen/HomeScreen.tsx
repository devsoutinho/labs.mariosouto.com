import React from "react";
import { Box, Text } from "@devsoutinho/sknui/native";
import { message } from "@src/screens/HomeScreen/message";
import { StatusBar } from "expo-status-bar";
import { NavigationContext } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";


export function HomeScreen({}: RootStackHomeScreenProps) {
  const navigation = React.useContext(NavigationContext);

  return (
    <>
      <StatusBar style="auto" />
      <Box
        styleSheet={{
          flex: 1,
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          styleSheet={{
            color: "#fff",
          }}
        >
          {message}
        </Text>
        <TouchableOpacity
          onPress={() => navigation?.navigate('storybook')}
        >
          <Text
            styleSheet={{
              color: "#fff",
            }}
          >
            Go to Storybook
          </Text>
        </TouchableOpacity>
      </Box>
    </>
  );
}
