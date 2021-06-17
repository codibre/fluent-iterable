import { expect } from 'chai';
import { fluent, fluentAsync } from '../src';

describe('toSet', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should return a set with all the unique values', () => {
        expect(fluent([1, 2, 3, 1, 2, 3, 4]).toSet()).to.be.eql(
          new Set([1, 2, 3, 4]),
        );
      });
      it('should return a set with all the unique transformed values', () => {
        expect(
          fluent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toSet((x) => x % 4),
        ).to.be.eql(new Set([1, 2, 3, 0]));
      });
      it('should return a set with all the unique mapped fields', () => {
        expect(
          fluent([
            { v: 1 },
            { v: 2 },
            { v: 3 },
            { v: 1 },
            { v: 2 },
            { v: 3 },
            { v: 4 },
          ]).toSet('v'),
        ).to.be.eql(new Set([1, 2, 3, 4]));
      });
    });
    describe('async', () => {
      it('should return a set with all the unique values', async () => {
        expect(await fluent([1, 2, 3, 1, 2, 3, 4]).toSetAsync()).to.be.eql(
          new Set([1, 2, 3, 4]),
        );
      });
      it('should return a set with all the unique transformed values', async () => {
        expect(
          await fluent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toSetAsync(
            async (x) => x % 4,
          ),
        ).to.be.eql(new Set([1, 2, 3, 0]));
      });
      it('should return a set with all the unique mapped fields', async () => {
        expect(
          await fluent([
            { v: Promise.resolve(1) },
            { v: 2 },
            { v: 3 },
            { v: 1 },
            { v: 2 },
            { v: 3 },
            { v: 4 },
          ]).toSetAsync('v'),
        ).to.be.eql(new Set([1, 2, 3, 4]));
      });
    });
  });

  describe('asyncIterable', () => {
    it('should return a set with all the unique values', async () => {
      expect(await fluentAsync([1, 2, 3, 1, 2, 3, 4]).toSet()).to.be.eql(
        new Set([1, 2, 3, 4]),
      );
    });
    it('should return a set with all the unique transformed values', async () => {
      expect(
        await fluentAsync([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toSet(
          async (x) => x % 4,
        ),
      ).to.be.eql(new Set([1, 2, 3, 0]));
    });
    it('should return a set with all the unique mapped fields', async () => {
      expect(
        await fluentAsync([
          { v: Promise.resolve(1) },
          { v: 2 },
          { v: 3 },
          { v: 1 },
          { v: 2 },
          { v: 3 },
          { v: 4 },
        ]).toSet('v'),
      ).to.be.eql(new Set([1, 2, 3, 4]));
    });
  });
});
