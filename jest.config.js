/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["dist","e2e"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
