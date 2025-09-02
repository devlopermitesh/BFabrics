import { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverage: true, // ✅ ensures coverage is collected
  coverageDirectory: "coverage", // ✅ all reports will be stored here
  coverageReporters: [
    "text", // shows summary in terminal
    "lcov", // for tools like Codecov
    "html", // ✅ generates detailed HTML report
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
