import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  clearMocks: true,
};

export default config;
