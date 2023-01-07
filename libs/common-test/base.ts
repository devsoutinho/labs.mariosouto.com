import type { Config } from "@jest/types";
import path from "path";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  verbose: true,
  transformIgnorePatterns: [
    "node_modules/(?!axios)",
  ],
  setupFilesAfterEnv: [
    path.join("<rootDir>", ".config", "test", "jest.setuptests.js"),
  ],
  transform: {
    '\\.[jt]sx?$': ['babel-jest', {
      configFile: path.resolve(__dirname, '.babelrc'),
    }],
  },
  snapshotSerializers: [],
  clearMocks: true,
};

export default config;
