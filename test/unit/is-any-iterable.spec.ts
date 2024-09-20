import { ObjectReadableMock } from 'stream-mock';
import { isAnyIterable } from '../../src';

describe(isAnyIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isAnyIterable([1, 2, 3]);

    expect(result).toBe(true);
  });

  it('should return true when object is an async iterable', () => {
    const result = isAnyIterable(new ObjectReadableMock([1, 2, 3]));

    expect(result).toBe(true);
  });

  it('should return false when object is not an iterable', () => {
    const result = isAnyIterable({});

    expect(result).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isAnyIterable(undefined)).toBe(false);
  });
});
