import { fluent, interval } from '../../src';

describe('interval', () => {
  it('should yield numbers from 10 to infinity when no count is informed', () => {
    const result = fluent(interval(10)).take(7).toArray();

    expect(result).toEqual([10, 11, 12, 13, 14, 15, 16]);
  });

  it('should yield numbers from 10 to count when it is informed', () => {
    const result = fluent(interval(10, 3)).take(7).toArray();

    expect(result).toEqual([10, 11, 12]);
  });

  it('should yield numbers from 0 to infinity when no parameters are specified', () => {
    const result = fluent(interval()).take(7).toArray();

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
});
