import { describe, it, expect } from 'vitest';
import {
  resolverAsync,
  resolver,
  isPromiseLike,
} from '../../lib/augments-utils';
import { augmentativeToArrayAsync, itClone } from '../../index';
import { getAsync } from './get-async';

describe('augments-utils', () => {
  describe('resolverAsync()', () => {
    it('should resolve synchronously a sync value', () => {
      const result = resolverAsync(1, (x) => x * 2) as number;

      expect(result).toBe(2);
    });

    it('should resolve asynchronously a promise value', async () => {
      const result = resolverAsync(
        Promise.resolve(1),
        (x) => x * 2,
      ) as Promise<number>;

      expect(result).toBeInstanceOf(Promise);
      expect(await result).toBe(2);
    });
  });

  describe('resolver()', () => {
    it('should resolve value', () => {
      const result = resolver(1, (x) => x * 2);

      expect(result).toBe(2);
    });
  });

  describe('isPromiseLike()', () => {
    it('should return true for a PromiseLike value', () => {
      const result = isPromiseLike({
        then: () => undefined,
      });

      expect(result).toBe(true);
    });
    it('should return false for a non-PromiseLike value', () => {
      const result = isPromiseLike({
        notThen: () => undefined,
      });

      expect(result).toBe(false);
    });
  });

  describe('itClone()', () => {
    it('should clone a vanilla iterable without breaking it', () => {
      const iterable = [1, 2, 3];
      const iterable2 = itClone(iterable);

      expect(iterable).not.toBe(iterable2);
      expect(Array.from(iterable)).toEqual([1, 2, 3]);
    });

    it('should clone a vanilla async iterable without breaking it', async () => {
      const iterable = getAsync([1, 2, 3]);
      const iterable2 = itClone(iterable);

      expect(iterable).not.toBe(iterable2);
      expect(await augmentativeToArrayAsync.call(iterable)).toEqual([1, 2, 3]);
    });

    it('should throw an error when the informed parameter is not an iterable nor an async iterable', () => {
      let thrownError: any;

      try {
        itClone({} as any);
      } catch (err) {
        thrownError = err;
      }

      expect(thrownError).toBeInstanceOf(Error);
    });
  });
});
