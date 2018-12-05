module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/*.d.ts'
  ],
};
