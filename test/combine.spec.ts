import { fluent, fluentAsync, identity } from '../src';
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
  context('fluent.combine', () => {
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

  context('fluent.combineAsync', async () => {
    it('should join two iterables as an NxN combination', async () => {
      const result = await fluent([1, 2, 3])
        .combineAsync(new ObjectReadableMock(['a', 'b', 'c']))
        .toArray();

      expect(result).to.be.eql(expected);
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

  context('fluentAsync.combine', async () => {
    it('should join two async iterables as an NxN combination', async () => {
      const result = await fluentAsync(new ObjectReadableMock([1, 2, 3]))
        .combine(new ObjectReadableMock(['a', 'b', 'c']))
        .toArray();

      expect(result).to.be.eql(expected);
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
});
