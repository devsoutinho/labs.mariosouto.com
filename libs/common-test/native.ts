import type { Config } from "@jest/types";

const esModules = ['@react-native', "react-native"].join('|');

const config: Config.InitialOptions = {
  preset: 'react-native',
  // setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    "node_modules/(?!expo-status-bar)",
    `node_modules/(?!${esModules})`,

  ],
  clearMocks: true,
  transform: {
    [`(${esModules}).+\\.js$`]: 'babel-jest',
  }
};

export default config;
