import 'jest-callslike';
import 'jest-extended';
const matchers = require('jest-extended');
expect.extend(matchers);

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
});
