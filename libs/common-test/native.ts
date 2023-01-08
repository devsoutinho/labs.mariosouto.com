import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  testEnvironment: "node",
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    "node_modules/(?!expo-status-bar)",
  ],
  clearMocks: true,
};

export default config;
