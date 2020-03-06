module.exports = {
  roots: [
    '<rootDir>/apps',
    '<rootDir>/core'
  ],
  collectCoverageFrom: [
    '{apps,core}/**/*.{js,jsx,ts,tsx}',
    '!**/dist/**'
  ],
  setupFiles: [
    'react-app-polyfill/jsdom'
  ],
  setupFilesAfterEnv: [],
  testMatch: [
    '<rootDir>/apps/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/core/**/*.test.{js,jsx,ts,tsx}'
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/toolchain/default/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/toolchain/default/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'
  ],
  modulePaths: [
    '<rootDir>'
  ],
  reporters: [
    'default',
    'jest-junit'
  ]
};
