module.exports = {
  collectCoverageFrom: [
    '{apps,core}/**/*.{ts,tsx}',
    '!**/dist/**'
  ],
  testMatch: [
    '<rootDir>/apps/**/*.test.{jsx,tsx}',
    '<rootDir>/core/**/*.test.{jsx,tsx}'
  ],
  moduleNameMapper: {
    '^~core(.*)$': '<rootDir>/core$1',
    '^~apps(.*)$': '<rootDir>/apps$1'
  },
  modulePaths: [
    '<rootDir>'
  ],
  reporters: [
    'default',
    'jest-junit'
  ]
};
