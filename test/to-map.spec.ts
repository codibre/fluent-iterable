import { expect } from 'chai';
import { fluent, fluentAsync, identity } from '../src';

describe('toMap', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should keep only the chosen values', () => {
        expect(
          fluent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toMap(
            (x) => x % 3,
            identity,
            (a, b) => (a > b ? a : b),
          ),
        ).to.be.eql(
          new Map([
            [1, 10],
            [2, 8],
            [0, 9],
          ]),
        );
      });
      it('should keep only the chosen values when order is assured', () => {
        expect(
          fluent([1, 4, 10, 7, 2, 5, 8, 11, 13, 1, 19])
            .o()
            .toMap(
              (x) => x % 3,
              identity,
              (a, b) => (a > b ? a : b),
            ),
        ).to.be.eql(
          new Map([
            [1, 10],
            [2, 11],
            [1, 19],
          ]),
        );
      });
    });
    describe('async', () => {
      it('should keep only the chosen values', async () => {
        expect(
          await fluent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toMapAsync(
            (x) => x % 3,
            identity,
            (a, b) => (a > b ? a : b),
          ),
        ).to.be.eql(
          new Map([
            [1, 10],
            [2, 8],
            [0, 9],
          ]),
        );
      });
      it('should keep only the chosen values when order is assured', async () => {
        expect(
          await fluent([1, 4, 10, 7, 2, 5, 8, 11, 13, 1, 19])
            .o()
            .toMapAsync(
              (x) => x % 3,
              identity,
              (a, b) => (a > b ? a : b),
            ),
        ).to.be.eql(
          new Map([
            [1, 10],
            [2, 11],
            [1, 19],
          ]),
        );
      });
    });
  });

  describe('asyncIterable', () => {
    it('should keep only the chosen values', async () => {
      expect(
        await fluentAsync([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toMap(
          (x) => x % 3,
          identity,
          (a, b) => (a > b ? a : b),
        ),
      ).to.be.eql(
        new Map([
          [1, 10],
          [2, 8],
          [0, 9],
        ]),
      );
    });
    it('should keep only the chosen values when order is assured', async () => {
      expect(
        await fluentAsync([1, 4, 10, 7, 2, 5, 8, 11, 13, 1, 19])
          .o()
          .toMap(
            (x) => x % 3,
            identity,
            (a, b) => (a > b ? a : b),
          ),
      ).to.be.eql(
        new Map([
          [1, 10],
          [2, 11],
          [1, 19],
        ]),
      );
    });
  });
});
