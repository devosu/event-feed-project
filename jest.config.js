// ./jest.config.js
//
// (NextJS-compatible) Jest configuration file for the project.

import nextJest from 'next/jest.js';

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest.
// NOTE: jsdom is imported from the jest-environment-jsdom module,
// jest-environment-jsdom depends on deprecated abab and domexception libraries.
// No fix is available yet, so we have to use the deprecated libraries.
const config = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageProvider: 'v8',
  errorOnDeprecated: true,
  showSeed: false,
  randomize: false,
  verbose: true,
  reporters: [
    [
      'jest-github-actions-reporter',
      {
        silent: false,
      },
    ],
    'default',
    'summary',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
