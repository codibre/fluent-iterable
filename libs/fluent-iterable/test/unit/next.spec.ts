import { fluent, fluentAsync } from '../../src';
import { ObjectReadableMock } from 'stream-mock';

describe('next', () => {
  describe('sync', () => {
    it('should fluently chain the callback', () => {
      const result = fluent([1, 2, 3])
        .next((x) => x.map((y) => y * 2))
        .next((x) => x.filter((y) => y <= 4))
        .next((x) => x.toArray());

      expect(result).toEqual([2, 4]);
    });
  });

  describe('async', () => {
    it('should fluently chain the callback', async () => {
      const result = await fluentAsync(new ObjectReadableMock([1, 2, 3]))
        .next((x) => x.map((y) => y * 2))
        .next((x) => x.filter((y) => y <= 4))
        .next((x) => x.toArray());

      expect(result).toEqual([2, 4]);
    });
  });
});
