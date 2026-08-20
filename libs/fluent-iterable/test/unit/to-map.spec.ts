import { fluent, fluentAsync, identity } from '../../src';

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
        ).toEqual(
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
        ).toEqual(
          new Map([
            [1, 10],
            [2, 11],
            [1, 19],
          ]),
        );
      });
      it('should work with field names', () => {
        const source = [
          { key: 'key1', value: 1 },
          { key: 'key2', value: 2 },
          { key: 'key3', value: 3 },
        ];

        const result = fluent(source).toMap('key', 'value');

        expect(result).toEqual(
          new Map([
            ['key1', 1],
            ['key2', 2],
            ['key3', 3],
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
        ).toEqual(
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
        ).toEqual(
          new Map([
            [1, 10],
            [2, 11],
            [1, 19],
          ]),
        );
      });
      it('should work with field names', async () => {
        const source = [
          { key: 'key1', value: 1 },
          { key: 'key2', value: 2 },
          { key: 'key3', value: 3 },
        ];

        const result = await fluent(source).toMapAsync('key', 'value');

        expect(result).toEqual(
          new Map([
            ['key1', 1],
            ['key2', 2],
            ['key3', 3],
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
      ).toEqual(
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
      ).toEqual(
        new Map([
          [1, 10],
          [2, 11],
          [1, 19],
        ]),
      );
    });
    it('should work with field names', async () => {
      const source = [
        { key: 'key1', value: 1 },
        { key: 'key2', value: 2 },
        { key: 'key3', value: 3 },
      ];

      const result = await fluentAsync(source).toMap('key', 'value');

      expect(result).toEqual(
        new Map([
          ['key1', 1],
          ['key2', 2],
          ['key3', 3],
        ]),
      );
    });
  });
});
