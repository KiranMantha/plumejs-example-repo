module.exports = {
  testEnvironment: "node",
  setupFiles: [
    '<rootDir>/config/jest.setup.js'
  ],
  displayName: 'PLUMEJS',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    "**/src/**/*.ts"
  ],
  //testMatch: ['<rootDir>/__tests__/+(*.)+(test|spec).+(ts)$'],
  testRegex: '(/__tests__/.*(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  //testRegex: '(/__tests__/.*(\\|/.)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions:  ["ts", "tsx", "js", "jsx", "json", "node"],
  //transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: '<rootDir>/tsconfig.json'
    }
  }
  //testNamePattern: "component"
};