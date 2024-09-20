import { ObjectReadableMock } from 'stream-mock';
import { isAsyncIterable } from '../../src';

describe(isAsyncIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isAsyncIterable(new ObjectReadableMock([1, 2, 3]));

    expect(result).toBe(true);
  });

  it('should return false when object is not an iterable', () => {
    const result = isAsyncIterable([1, 2, 3]);

    expect(result).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isAsyncIterable(undefined)).toBe(false);
  });
});
