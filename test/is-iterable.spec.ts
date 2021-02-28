import { isIterable } from '../src';
import expect from './tools';

describe(isIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isIterable([1, 2, 3]);

    expect(result).to.be.true;
  });

  it('should return false when object is not an iterable', () => {
    const result = isIterable({ a: 1, b: 2, c: 3 });

    expect(result).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isIterable(undefined)).to.be.false;
  });
});
