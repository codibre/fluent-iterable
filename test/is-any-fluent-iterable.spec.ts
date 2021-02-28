import { ObjectReadableMock } from 'stream-mock';
import { fluent, fluentAsync, isAnyFluentIterable } from '../src';
import expect from './tools';

describe(isAnyFluentIterable.name, () => {
  it('should return true when object is an fluent iterable', () => {
    const result = isAnyFluentIterable(fluent([1, 2, 3]));

    expect(result).to.be.true;
  });

  it('should return true when object is an async iterable', () => {
    const result = isAnyFluentIterable(
      fluentAsync(new ObjectReadableMock([1, 2, 3])),
    );

    expect(result).to.be.true;
  });

  it('should return false when object is just an iterable', () => {
    const result = isAnyFluentIterable([1, 2, 3]);

    expect(result).to.be.false;
  });

  it('should return false when object is just an async iterable', () => {
    const result = isAnyFluentIterable(new ObjectReadableMock([1, 2, 3]));

    expect(result).to.be.false;
  });

  it('should return false when object is not an iterable', () => {
    const result = isAnyFluentIterable({});

    expect(result).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isAnyFluentIterable(undefined)).to.be.false;
  });
});
