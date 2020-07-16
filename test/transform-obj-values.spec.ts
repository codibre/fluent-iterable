import { expect } from 'chai';
import { transformObjValues } from '../src';

describe('transformObjValues()', () => {
  const keys = transformObjValues(
    {
      a: 1,
      b: 2,
      c: 3,
    },
    ([_a, b]) => b * 2,
  );

  expect(keys).to.be.eql({
    a: 2,
    b: 4,
    c: 6,
  });
});
