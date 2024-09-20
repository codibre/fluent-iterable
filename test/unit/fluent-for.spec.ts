import { fluentFor } from '../../src';

describe(fluentFor.name, () => {
  it('should yield the numbers up to when condition is false', () => {
    const result = fluentFor(
      1,
      (a) => a < 3,
      (a) => (a += 1),
    ).toArray();

    expect(result).toEqual([1, 2]);
  });
});
