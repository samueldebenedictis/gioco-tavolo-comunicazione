/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["dist"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
