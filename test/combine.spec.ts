import { fluent, fluentAsync } from '../src';
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
  });

  context('fluent.combineAsync', async () => {
    it('should join two iterables as an NxN combination', async () => {
      const result = await fluent([1, 2, 3])
        .combineAsync(new ObjectReadableMock(['a', 'b', 'c']))
        .toArray();

      expect(result).to.be.eql(expected);
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
  });
});
