import { constant, fluent, fluentAsync } from '../../src';
import { combineJoin } from '../../src/sync';
import { ObjectReadableMock } from 'stream-mock';

describe(combineJoin.name, () => {
  describe('fluent.combine', () => {
    it('should join all the sub iterables as an NxN combination', () => {
      const result = fluent([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
        .combineJoin()
        .toArray();

      expect(result).toEqual([
        [1, 3, 5],
        [1, 3, 6],
        [1, 4, 5],
        [1, 4, 6],
        [2, 3, 5],
        [2, 3, 6],
        [2, 4, 5],
        [2, 4, 6],
      ]);
    });

    it('should join all the sub iterables resulting in the matching combinations when key expressions are provided', () => {
      const result = fluent([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
        .combineJoin((x) => x % 2)
        .toArray();

      expect(result).toEqual([
        [1, 3, 5],
        [2, 4, 6],
      ]);
    });

    it('should join all the sub iterables resulting in the matching combinations when key expressions are provided', () => {
      const result = fluent([
        [
          { type: 1, value: 1 },
          { type: 0, value: 2 },
        ],
        [
          { type: 1, value: 3 },
          { type: 0, value: 4 },
        ],
        [
          { type: 1, value: 5 },
          { type: 0, value: 6 },
        ],
      ])
        .combineJoin('type')
        .toArray();

      expect(result).toEqual([
        [
          { type: 1, value: 1 },
          { type: 1, value: 3 },
          { type: 1, value: 5 },
        ],
        [
          { type: 0, value: 2 },
          { type: 0, value: 4 },
          { type: 0, value: 6 },
        ],
      ]);
    });

    it('should work with an empty iterable', () => {
      const result = fluent([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
        .filter(constant(false))
        .combineJoin()
        .toArray();

      expect(result).toEqual([]);
    });
  });

  describe('fluent.combineAsync', () => {
    it('should join all the sub iterables as an NxN combination', async () => {
      const result = await fluent([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
        .combineJoinAsync()
        .toArray();

      expect(result).toEqual([
        [1, 3, 5],
        [1, 3, 6],
        [1, 4, 5],
        [1, 4, 6],
        [2, 3, 5],
        [2, 3, 6],
        [2, 4, 5],
        [2, 4, 6],
      ]);
    });

    it('should join all the sub iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluent([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
        .combineJoinAsync((x) => Promise.resolve(x % 2))
        .toArray();

      expect(result).toEqual([
        [1, 3, 5],
        [2, 4, 6],
      ]);
    });

    it('should join all the sub iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluent([
        new ObjectReadableMock([
          { type: 1, value: 1 },
          { type: 0, value: 2 },
        ]),
        new ObjectReadableMock([
          { type: 1, value: 3 },
          { type: 0, value: 4 },
        ]),
        new ObjectReadableMock([
          { type: 1, value: 5 },
          { type: 0, value: 6 },
        ]),
      ])
        .combineJoinAsync('type' as any)
        .toArray();

      expect(result).toEqual([
        [
          { type: 1, value: 1 },
          { type: 1, value: 3 },
          { type: 1, value: 5 },
        ],
        [
          { type: 0, value: 2 },
          { type: 0, value: 4 },
          { type: 0, value: 6 },
        ],
      ]);
    });
  });

  describe('fluentAsync.combine', () => {
    it('should join all the sub async iterables as an NxN combination', async () => {
      const result = await fluentAsync(
        new ObjectReadableMock([
          new ObjectReadableMock([1, 2]),
          new ObjectReadableMock([3, 4]),
          new ObjectReadableMock([5, 6]),
        ]),
      )
        .combineJoin()
        .toArray();

      expect(result).toEqual([
        [1, 3, 5],
        [1, 3, 6],
        [1, 4, 5],
        [1, 4, 6],
        [2, 3, 5],
        [2, 3, 6],
        [2, 4, 5],
        [2, 4, 6],
      ]);
    });

    it('should join all the sub iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluentAsync(
        new ObjectReadableMock([
          [1, 2],
          [3, 4],
          [5, 6],
        ]) as AsyncIterable<number[]>,
      )
        .combineJoin((x) => Promise.resolve(x % 2))
        .toArray();

      expect(result).toEqual([
        [1, 3, 5],
        [2, 4, 6],
      ]);
    });

    it('should join all the sub iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluent([
        new ObjectReadableMock([
          { type: 1, value: 1 },
          { type: 0, value: 2 },
        ]),
        new ObjectReadableMock([
          { type: 1, value: 3 },
          { type: 0, value: 4 },
        ]),
        new ObjectReadableMock([
          { type: 1, value: 5 },
          { type: 0, value: 6 },
        ]),
      ])
        .combineJoinAsync('type' as any)
        .toArray();

      expect(result).toEqual([
        [
          { type: 1, value: 1 },
          { type: 1, value: 3 },
          { type: 1, value: 5 },
        ],
        [
          { type: 0, value: 2 },
          { type: 0, value: 4 },
          { type: 0, value: 6 },
        ],
      ]);
    });
  });
});
