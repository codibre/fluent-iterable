import { fluent, isFluentIterable } from '../src';
import expect from './tools';

describe(isFluentIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isFluentIterable(fluent([1, 2, 3]));

    expect(result).to.be.true;
  });

  it('should return false when object is not an iterable', () => {
    const result = isFluentIterable([1, 2, 3]);

    expect(result).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isFluentIterable(undefined)).to.be.false;
  });
});
