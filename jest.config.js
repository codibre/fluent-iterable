/** @type {import('ts-jest').JestConfigWithTsJest} **/
// Canonical, monorepo-wide Jest config (nestjs-context pattern).
// Each lib re-exports this file from its own jest.config.js so `jest` run
// inside a package dir picks up the shared settings. <rootDir> resolves to
// the package dir at runtime, so per-lib paths stay correct.
module.exports = {
  testRegex: '.spec.ts$',
  preset: 'ts-jest',
  coverageDirectory: './coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverageFrom: ['./src/**/*.ts'],
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    'jest-extended/all',
    '<rootDir>/test/jest-setup.ts'
  ],
};
