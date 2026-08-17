/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "testRegex": ".spec.ts$",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  preset: 'ts-jest',
  "coverageDirectory": "./coverage",
  "collectCoverageFrom": [
    "./src/**/*.ts"
  ],
  "testEnvironment": "node",
  "setupFilesAfterEnv": [
    "jest-extended/all",
    "./test/jest-setup.ts"
  ],
  "moduleNameMapper": {
    "^src/(.*)": "<rootDir>/src/$1",
    "^test/(.*)": "<rootDir>/test/$1"
  }
}