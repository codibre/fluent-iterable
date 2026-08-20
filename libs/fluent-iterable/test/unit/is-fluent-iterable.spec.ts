import { fluent, isFluentIterable } from '../../src';

describe(isFluentIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isFluentIterable(fluent([1, 2, 3]));

    expect(result).toBe(true);
  });

  it('should return false when object is not an iterable', () => {
    const result = isFluentIterable([1, 2, 3]);

    expect(result).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isFluentIterable(undefined)).toBe(false);
  });
});
