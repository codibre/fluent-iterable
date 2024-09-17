import { ObjectReadableMock } from 'stream-mock';
import { fluent, fluentAsync } from '../../src';

describe('whenEmpty', () => {
  describe('sync', () => {
    it('should not return the fallback result when the original is not empty', () => {
      expect(fluent([1, 2, 3]).whenEmpty([4, 5, 6]).toArray()).toEqual([
        1, 2, 3,
      ]);
    });

    it('should return the fallback result when the original is empty', () => {
      const part1 = fluent([]).whenEmpty([4, 5, 6]);
      const result = part1.toArray();

      expect(result).toEqual([4, 5, 6]);
    });
  });

  describe('async', () => {
    it('should not return the fallback result when the original is not empty', async () => {
      expect(
        await fluentAsync(new ObjectReadableMock([1, 2, 3]))
          .whenEmpty([4, 5, 6])
          .toArray(),
      ).toEqual([1, 2, 3]);
    });

    it('should return the fallback result when the original is empty', async () => {
      expect(
        await fluentAsync(new ObjectReadableMock([]))
          .whenEmpty([4, 5, 6])
          .toArray(),
      ).toEqual([4, 5, 6]);
    });
  });
});
