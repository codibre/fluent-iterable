import { isIterable } from '../../src';

describe(isIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isIterable([1, 2, 3]);

    expect(result).toBe(true);
  });

  it('should return false when object is not an iterable', () => {
    const result = isIterable({ a: 1, b: 2, c: 3 });

    expect(result).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isIterable(undefined)).toBe(false);
  });
});
