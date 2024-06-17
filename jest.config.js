const jestConfig = {
  verbose: true,
  testMatch: ["**/__tests__/*.test.js"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  setupFiles: ["<rootDir>/__mocks__/global-mocks.js"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
  },
  testEnvironment: "jsdom",
};

module.exports = jestConfig;
