module.exports = {
  testEnvironment: "@happy-dom/jest-environment",
  setupFilesAfterEnv: [
    '<rootDir>/config/jest.setup.js'
  ],
  displayName: 'PLUMEJS',
  preset: 'ts-jest/presets/js-with-ts-esm',
  roots: ['<rootDir>/src/'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  // testMatch: ['**/+(index.)+(spec).+(ts)'], // to test single file,
  transform: {
    //'^.+\\.ts$': 'ts-jest'
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@plumejs/core|@plumejs/router|@plumejs/ui)/)",
  ],
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: '<rootDir>/tsconfig.json',
      compiler: 'ttypescript'
    }
  }
};