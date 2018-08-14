module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '/__tests__/.*\\.test\\.(ts|js)$',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/*.d.ts'
  ],
};
