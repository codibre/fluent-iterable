import { fluentObject } from '../src';
import expect from './tools';

describe(fluentObject.name, () => {
  it('should transform an object in a iterable which iterates over its entries', () => {
    const iterable = fluentObject({ a: 1, b: 2, c: 3 });

    expect(iterable.toArray()).to.be.eql([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
