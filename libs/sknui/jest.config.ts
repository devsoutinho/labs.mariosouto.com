import path from "path";
import type { Config } from "@jest/types";
const isNative = process.env.UI_PLATFORM === "native";

const native: Config.InitialOptions = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testRegex: "(/__tests__/.*|(\\.|/)(native.test|native.spec))\\.[jt]sx?$",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};

const web: Config.InitialOptions = {
  testEnvironment: "jsdom",
  verbose: true,
  testRegex: "(/__tests__/.*|(\\.|/)(web.test|web.spec))\\.[jt]sx?$",
  transformIgnorePatterns: ["node_modules/(?!axios)"],
  setupFilesAfterEnv: [
    path.join("<rootDir>", ".config", "test", "web.setuptests.js"),
  ],
  transform: {
    "\\.[jt]sx?$": [
      "babel-jest",
      {
        configFile: path.resolve(__dirname, "babel.config.js"),
      },
    ],
  },
  moduleNameMapper: {
    "^@src/(.*)": "<rootDir>/src/$1",
  },
  snapshotSerializers: [],
  clearMocks: true,
};

const config = isNative ? native : web;

export default config;
