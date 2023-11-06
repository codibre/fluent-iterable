import { expect } from 'chai';
import { fluentForAsync } from '../src';

describe(fluentForAsync.name, () => {
  it('should yield the numbers up to when condition is false', async () => {
    const result = await fluentForAsync(
      Promise.resolve(1),
      async (a) => a < 3,
      async (a) => (a += 1),
    ).toArray();

    expect(result).to.be.eql([1, 2]);
  });
});
