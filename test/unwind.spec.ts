import { expect } from 'chai';
import { fluent, fluentAsync } from '../src';

describe('unwind', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should unwind specified properties', () => {
        const payload = [
          {
            test: ['a', 'b', 'c'],
            c: 1,
            d: false,
            id: 1,
          },
          {
            test: ['b', 'c'],
            c: 2,
            d: true,
            id: 2,
          },
          {
            test: ['c', 'd'],
            c: 2,
            d: true,
            id: 3,
          },
        ];

        const it = fluent(payload).unwind('test', 'c');
        const result = it.toArray();

        expect(
          result
            .filter((x) => x.unwinded.test === 'a' && x.unwinded.c === 1)!
            .map((x) => x.value.id),
        ).to.be.eql([1]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'b' && x.unwinded.c === 1)!
            .map((x) => x.value.id),
        ).to.be.eql([1]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'b' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([2]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'c' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([2, 3]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'd' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([3]);
      });
    });
    describe('async', () => {
      it('should unwind specified properties for unwindAsync', async () => {
        const payload = [
          {
            test: ['a', 'b', 'c'],
            c: 1,
            d: false,
            id: 1,
          },
          {
            test: ['b', 'c'],
            c: 2,
            d: true,
            id: 2,
          },
          {
            test: ['c', 'd'],
            c: 2,
            d: true,
            id: 3,
          },
        ];

        const it = fluent(payload).unwindAsync('test', 'c');
        const result = await it.toArray();

        expect(
          result
            .filter((x) => x.unwinded.test === 'a' && x.unwinded.c === 1)!
            .map((x) => x.value.id),
        ).to.be.eql([1]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'b' && x.unwinded.c === 1)!
            .map((x) => x.value.id),
        ).to.be.eql([1]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'b' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([2]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'c' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([2, 3]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'd' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([3]);
      });

      it('should unwind specified properties for an async iterable', async () => {
        const payload = Promise.resolve([
          {
            test: ['a', 'b', 'c'],
            c: 1,
            d: false,
            id: 1,
          },
          {
            test: ['b', 'c'],
            c: 2,
            d: true,
            id: 2,
          },
          {
            test: ['c', 'd'],
            c: 2,
            d: true,
            id: 3,
          },
        ]);

        const it = fluentAsync(payload).unwind('test', 'c');
        const result = await it.toArray();

        expect(
          result
            .filter((x) => x.unwinded.test === 'a' && x.unwinded.c === 1)!
            .map((x) => x.value.id),
        ).to.be.eql([1]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'b' && x.unwinded.c === 1)!
            .map((x) => x.value.id),
        ).to.be.eql([1]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'b' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([2]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'c' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([2, 3]);
        expect(
          result
            .filter((x) => x.unwinded.test === 'd' && x.unwinded.c === 2)!
            .map((x) => x.value.id),
        ).to.be.eql([3]);
      });
    });
  });
});
