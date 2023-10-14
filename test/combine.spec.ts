import { fluent, fluentAsync, identity, constant } from '../src';
import { expect } from 'chai';
import { ObjectReadableMock } from 'stream-mock';

const expected = [
  [1, 'a'],
  [1, 'b'],
  [1, 'c'],
  [2, 'a'],
  [2, 'b'],
  [2, 'c'],
  [3, 'a'],
  [3, 'b'],
  [3, 'c'],
];
describe('combine', () => {
  describe('fluent.combine', () => {
    it('should join two iterables as an NxN combination', () => {
      const result = fluent([1, 2, 3]).combine(['a', 'b', 'c']).toArray();

      expect(result).to.be.eql(expected);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', () => {
      const result = fluent([1, 2, 3])
        .combine(['a', 'b', 'c', 'd'], identity, (b) => {
          switch (b) {
            case 'd':
              return 1;
            case 'b':
            case 'c':
              return 2;
            default:
              return 4;
          }
        })
        .toArray();

      expect(result).to.be.eql([
        [1, 'd'],
        [2, 'b'],
        [2, 'c'],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', () => {
      const result = fluent([1, 2])
        .combine(['a', 'b'], constant(1), constant(1))
        .toArray();

      expect(result).to.be.eql([
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when a key string is provided for iterable a and an expression for b', () => {
      const result = fluent([{ id: 1 }, { id: 2 }])
        .combine(
          [
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ],
          'id',
          (x) => x.k,
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when an expression is provided for iterable a and a key string for b', () => {
      const result = fluent([{ id: 1 }, { id: 2 }])
        .combine(
          [
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ],
          (x) => x.id,
          'k',
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when key strings are provided for both iterables', () => {
      const result = fluent([{ id: 1 }, { id: 2 }])
        .combine(
          [
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ],
          'id',
          'k',
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should throw an error when only keyA is provided', () => {
      let error: any;
      try {
        fluent([1, 2, 3]).combine(
          ['a', 'b', 'c', 'd'],
          identity,
          undefined as any,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });

    it('should throw an error when only keyB is provided', () => {
      let error: any;
      try {
        fluent([1, 2, 3]).combine(
          ['a', 'b', 'c', 'd'],
          undefined as any,
          identity,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });

  describe('fluent.combineAsync', async () => {
    it('should join two iterables as an NxN combination', async () => {
      const result = await fluent([1, 2, 3])
        .combineAsync(new ObjectReadableMock(['a', 'b', 'c']))
        .toArray();

      expect(result).to.be.eql(expected);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluent([1, 2])
        .combineAsync(
          new ObjectReadableMock(['a', 'b']),
          constant(1),
          constant(1),
        )
        .toArray();

      expect(result).to.be.eql([
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluent([1, 2, 3])
        .combineAsync(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          (a) => a,
          (b) => {
            switch (b) {
              case 'd':
                return 1;
              case 'b':
              case 'c':
                return 2;
              default:
                return 4;
            }
          },
        )
        .toArray();

      expect(result).to.be.eql([
        [1, 'd'],
        [2, 'b'],
        [2, 'c'],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when a key string is provided for iterable a and an expression for b', async () => {
      const result = await fluent([{ id: 1 }, { id: 2 }])
        .combineAsync(
          new ObjectReadableMock([
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ]),
          'id',
          (x) => x.k,
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when an expression is provided for iterable a and a key string for b', async () => {
      const result = await fluent([{ id: 1 }, { id: 2 }])
        .combineAsync(
          new ObjectReadableMock([
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ]),
          (x) => x.id,
          'k',
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when key strings are provided for both iterables', async () => {
      const result = await fluent([{ id: 1 }, { id: 2 }])
        .combineAsync(
          new ObjectReadableMock([
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ]),
          'id',
          'k',
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should throw an error when only keyA is provided', () => {
      let error: any;
      try {
        fluent([1, 2, 3]).combineAsync(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          identity,
          undefined as any,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });

    it('should throw an error when only keyB is provided', () => {
      let error: any;
      try {
        fluent([1, 2, 3]).combineAsync(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          undefined as any,
          identity,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });

  describe('fluent.combineEmitter', async () => {
    it('should join an iterable and an Emitter as an NxN combination', async () => {
      const result = await fluent([1, 2, 3])
        .combineEmitter(new ObjectReadableMock(['a', 'b', 'c']))
        .toArray();

      expect(result).to.be.eql(expected);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluent([1, 2])
        .combineEmitter(
          new ObjectReadableMock(['a', 'b']),
          constant(1),
          constant(1),
        )
        .toArray();

      expect(result).to.be.eql([
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluent([1, 2, 3])
        .combineEmitter(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          (a) => a,
          (b) => {
            switch (b) {
              case 'd':
                return 1;
              case 'b':
              case 'c':
                return 2;
              default:
                return 4;
            }
          },
        )
        .toArray();

      expect(result).to.be.eql([
        [1, 'd'],
        [2, 'b'],
        [2, 'c'],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when a key string is provided for iterable a and an expression for b', async () => {
      const result = await fluent([{ id: 1 }, { id: 2 }])
        .combineEmitter(
          new ObjectReadableMock([
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ]),
          'id',
          (x: any) => x.k,
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should throw an error when only keyA is provided', () => {
      let error: any;
      try {
        fluent([1, 2, 3]).combineEmitter(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          identity,
          undefined as any,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });

    it('should throw an error when only keyB is provided', () => {
      let error: any;
      try {
        fluent([1, 2, 3]).combineEmitter(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          undefined as any,
          identity,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });

  describe('fluentAsync.combine', async () => {
    it('should join two async iterables as an NxN combination', async () => {
      const result = await fluentAsync(new ObjectReadableMock([1, 2, 3]))
        .combine(new ObjectReadableMock(['a', 'b', 'c']))
        .toArray();

      expect(result).to.be.eql(expected);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluentAsync([1, 2])
        .combine(new ObjectReadableMock(['a', 'b']), constant(1), constant(1))
        .toArray();

      expect(result).to.be.eql([
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
      ]);
    });

    it('should join the async iterable with an iterable as an NxN combination', async () => {
      const result = await fluentAsync(new ObjectReadableMock([1, 2, 3]))
        .combine(['a', 'b', 'c'])
        .toArray();

      expect(result).to.be.eql(expected);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluentAsync([1, 2, 3])
        .combine(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          (a) => a,
          (b) => {
            switch (b) {
              case 'd':
                return 1;
              case 'b':
              case 'c':
                return 2;
              default:
                return 4;
            }
          },
        )
        .toArray();

      expect(result).to.be.eql([
        [1, 'd'],
        [2, 'b'],
        [2, 'c'],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when a key string is provided for iterable a and an expression for b', async () => {
      const result = await fluentAsync([{ id: 1 }, { id: 2 }])
        .combine(
          new ObjectReadableMock([
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ]),
          'id',
          (x) => x.k,
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when an expression is provided for iterable a and a key string for b', async () => {
      const result = await fluentAsync([{ id: 1 }, { id: 2 }])
        .combine(
          new ObjectReadableMock([
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ]),
          (x) => x.id,
          'k',
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when key strings are provided for both iterables', async () => {
      const result = await fluentAsync([{ id: 1 }, { id: 2 }])
        .combine(
          new ObjectReadableMock([
            { a: 'a', k: 2 },
            { a: 'b', k: 1 },
          ]),
          'id',
          'k',
        )
        .toArray();

      expect(result).to.be.eql([
        [{ id: 1 }, { a: 'b', k: 1 }],
        [{ id: 2 }, { a: 'a', k: 2 }],
      ]);
    });

    it('should throw an error when only keyA is provided', () => {
      let error: any;
      try {
        fluentAsync([1, 2, 3]).combine(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          identity,
          undefined as any,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });

    it('should throw an error when only keyB is provided', () => {
      let error: any;
      try {
        fluentAsync([1, 2, 3]).combine(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          undefined as any,
          identity,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });

  describe('fluentAsync.combineEmitter', async () => {
    it('should join two async iterables as an NxN combination', async () => {
      const result = await fluentAsync(new ObjectReadableMock([1, 2, 3]))
        .combineEmitter(new ObjectReadableMock(['a', 'b', 'c']))
        .toArray();

      expect(result).to.be.eql(expected);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluentAsync([1, 2])
        .combineEmitter(
          new ObjectReadableMock(['a', 'b']),
          constant(1),
          constant(1),
        )
        .toArray();

      expect(result).to.be.eql([
        [1, 'a'],
        [1, 'b'],
        [2, 'a'],
        [2, 'b'],
      ]);
    });

    it('should join two iterables resulting in the matching combinations when key expressions are provided', async () => {
      const result = await fluentAsync([1, 2, 3])
        .combineEmitter(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          (a) => a,
          (b) => {
            switch (b) {
              case 'd':
                return 1;
              case 'b':
              case 'c':
                return 2;
              default:
                return 4;
            }
          },
        )
        .toArray();

      expect(result).to.be.eql([
        [1, 'd'],
        [2, 'b'],
        [2, 'c'],
      ]);
    });

    it('should throw an error when only keyA is provided', () => {
      let error: any;
      try {
        fluentAsync([1, 2, 3]).combineEmitter(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          identity,
          undefined as any,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });

    it('should throw an error when only keyB is provided', () => {
      let error: any;
      try {
        fluentAsync([1, 2, 3]).combineEmitter(
          new ObjectReadableMock(['a', 'b', 'c', 'd']),
          undefined as any,
          identity,
        );
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });
});
