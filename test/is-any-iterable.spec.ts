import { ObjectReadableMock } from 'stream-mock';
import { isAnyIterable } from '../src';
import expect from './tools';

describe(isAnyIterable.name, () => {
  it('should return true when object is an iterable', () => {
    const result = isAnyIterable([1, 2, 3]);

    expect(result).to.be.true;
  });

  it('should return true when object is an async iterable', () => {
    const result = isAnyIterable(new ObjectReadableMock([1, 2, 3]));

    expect(result).to.be.true;
  });

  it('should return false when object is not an iterable', () => {
    const result = isAnyIterable({});

    expect(result).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isAnyIterable(undefined)).to.be.false;
  });
});
