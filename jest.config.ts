import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig: Config = {
  verbose: true,
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  testMatch: ["**/__tests__/*.test.js"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  setupFiles: ["<rootDir>/__mocks__/global-mocks.js"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testEnvironment: "jest-environment-jsdom",
  coverageProvider: "v8",
};

export default createJestConfig(customJestConfig);
