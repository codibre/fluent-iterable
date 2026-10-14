import { describe, it, expect } from 'vitest';
import { augmentativeToArray, mapIterable } from '../../index';

describe('without native Iterator.prototype.toArray', () => {
  it('should materialize through the JS loop', () => {
    const iteratorProto = (
      globalThis as unknown as {
        Iterator: { prototype: { toArray?: unknown } };
      }
    ).Iterator.prototype;
    const originalToArray = iteratorProto.toArray;
    delete iteratorProto.toArray;
    try {
      const result = augmentativeToArray.call(
        mapIterable([1, 2, 3, 4], (x) => x * 2),
      );

      expect(result).toEqual([2, 4, 6, 8]);
      expect(augmentativeToArray.call([1, 2, 3])).toEqual([1, 2, 3]);
    } finally {
      iteratorProto.toArray = originalToArray;
    }
  });
});
