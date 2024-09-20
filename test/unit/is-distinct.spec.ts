import { o, fluent, fluentAsync } from '../../src';

describe('isDistinct()', () => {
  describe('iterable', () => {
    it('should return true when all elements are distinct with a call with no mapper', () => {
      const result = fluent([1, 2, 3]).isDistinct();

      expect(result).toBe(true);
    });

    it('should return false when some elements are not distinct with a call with no mapper', () => {
      const result = fluent([1, 2, 2, 3]).isDistinct();

      expect(result).toBe(false);
    });

    it('should return true when some elements repeats up to the max number of occurrences informed with a call with no mapper', () => {
      const result = fluent([1, 2, 2, 3]).isDistinct(2);

      expect(result).toBe(true);
    });

    it('should return true when all elements are distinct with a call with a mapper', () => {
      const result = fluent([1, 2, 3]).isDistinct((x) => x * 2);

      expect(result).toBe(true);
    });

    it('should return false when some elements are not distinct with a call with a mapper', () => {
      const result = fluent([1, 2, 3]).isDistinct((x) => x % 2);

      expect(result).toBe(false);
    });

    it('should return true when some elements repeats up to the max number of occurrences informed with a call with a mapper', () => {
      const result = fluent([1, 2, 3]).isDistinct((x) => x % 2, 2);

      expect(result).toBe(true);
    });

    it('should return true when all consecutive elements are distinct and order is assured', () => {
      const result = fluent([1, 2, 3, 2, 3, 4]).isDistinct(
        o((x: number) => x * 2),
      );

      expect(result).toBe(true);
    });

    it('should return false when some consecutive elements are not distinct and order is assured', () => {
      const result = fluent([1, 2, 3, 3, 4]).isDistinct((x) => x * 2);

      expect(result).toBe(false);
    });
  });

  describe('iterable isDinstinctAsync', () => {
    it('should return true when all elements are distinct with a call with a mapper', async () => {
      const result = await fluent([1, 2, 3]).isDistinctAsync((x) => x * 2);

      expect(result).toBe(true);
    });

    it('should return false when some elements are not distinct with a call with a mapper', async () => {
      const result = await fluent([1, 2, 3]).isDistinctAsync((x) => x % 2);

      expect(result).toBe(false);
    });

    it('should return true when some elements repeats up to the max number of occurrences informed with a call with a mapper', async () => {
      const result = await fluent([1, 2, 3]).isDistinctAsync((x) => x % 2, 2);

      expect(result).toBe(true);
    });
  });

  describe('async iterable', () => {
    it('should return true when all elements are distinct with a call with no mapper', async () => {
      const result = await fluentAsync([1, 2, 3]).isDistinct();

      expect(result).toBe(true);
    });

    it('should return false when some elements are not distinct with a call with no mapper', async () => {
      const result = fluent([1, 2, 2, 3]).isDistinct();

      expect(result).toBe(false);
    });

    it('should return true when some elements repeats up to the max number of occurrences informed with a call with no mapper', async () => {
      const result = fluent([1, 2, 2, 3]).isDistinct(2);

      expect(result).toBe(true);
    });

    it('should return true when all elements are distinct with a call with a mapper', async () => {
      const result = fluent([1, 2, 3]).isDistinct((x) => x * 2);

      expect(result).toBe(true);
    });

    it('should return false when some elements are not distinct with a call with a mapper', async () => {
      const result = await fluentAsync([1, 2, 3]).isDistinct((x) => x % 2);

      expect(result).toBe(false);
    });

    it('should return true when some elements repeats up to the max number of occurrences informed with a call with a mapper', async () => {
      const result = await fluentAsync([1, 2, 3]).isDistinct((x) => x % 2, 2);

      expect(result).toBe(true);
    });
  });
});
