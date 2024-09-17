import { ObjectReadableMock } from 'stream-mock';
import { fluentAsync, isFluentAsyncIterable } from '../../src';

describe(isFluentAsyncIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isFluentAsyncIterable(
      fluentAsync(new ObjectReadableMock([1, 2, 3])),
    );

    expect(result).toBe(true);
  });

  it('should return false when object is not an iterable', () => {
    const result = isFluentAsyncIterable(new ObjectReadableMock([1, 2, 3]));

    expect(result).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isFluentAsyncIterable(undefined)).toBe(false);
  });
});
