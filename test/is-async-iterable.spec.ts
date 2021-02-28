import { ObjectReadableMock } from 'stream-mock';
import { isAsyncIterable } from '../src';
import expect from './tools';

describe(isAsyncIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isAsyncIterable(new ObjectReadableMock([1, 2, 3]));

    expect(result).to.be.true;
  });

  it('should return false when object is not an iterable', () => {
    const result = isAsyncIterable([1, 2, 3]);

    expect(result).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isAsyncIterable(undefined)).to.be.false;
  });
});
