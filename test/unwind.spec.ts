import { expect } from 'chai';
import { fluent, fluentAsync } from '../src';

describe('unwind', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should unwind specified properties', () => {
        const payload = [
          {
            test: ['a', 'b', 'c'],
            c: [1, 3],
            d: false,
            id: 1,
          },
          {
            test: ['b', 'c'],
            c: new Set([2, 3]),
            d: true,
            id: 2,
          },
          {
            test: ['c', 'd'],
            c: [2, 4],
            d: true,
            id: 3,
          },
        ];

        const it = fluent(payload).unwind('test', 'c');
        const result = it.toArray();

        expect(result).to.be.eql([
          {
            unwinded: { test: 'a', c: 1 },
            value: { test: ['a', 'b', 'c'], c: [1, 3], d: false, id: 1 },
          },
          {
            unwinded: { test: 'a', c: 3 },
            value: { test: ['a', 'b', 'c'], c: [1, 3], d: false, id: 1 },
          },
          {
            unwinded: { test: 'b', c: 1 },
            value: { test: ['a', 'b', 'c'], c: [1, 3], d: false, id: 1 },
          },
          {
            unwinded: { test: 'b', c: 3 },
            value: { test: ['a', 'b', 'c'], c: [1, 3], d: false, id: 1 },
          },
          {
            unwinded: { test: 'c', c: 1 },
            value: { test: ['a', 'b', 'c'], c: [1, 3], d: false, id: 1 },
          },
          {
            unwinded: { test: 'c', c: 3 },
            value: { test: ['a', 'b', 'c'], c: [1, 3], d: false, id: 1 },
          },
          {
            unwinded: { test: 'b', c: 2 },
            value: { test: ['b', 'c'], c: new Set([2, 3]), d: true, id: 2 },
          },
          {
            unwinded: { test: 'b', c: 3 },
            value: { test: ['b', 'c'], c: new Set([2, 3]), d: true, id: 2 },
          },
          {
            unwinded: { test: 'c', c: 2 },
            value: { test: ['b', 'c'], c: new Set([2, 3]), d: true, id: 2 },
          },
          {
            unwinded: { test: 'c', c: 3 },
            value: { test: ['b', 'c'], c: new Set([2, 3]), d: true, id: 2 },
          },
          {
            unwinded: { test: 'c', c: 2 },
            value: { test: ['c', 'd'], c: [2, 4], d: true, id: 3 },
          },
          {
            unwinded: { test: 'c', c: 4 },
            value: { test: ['c', 'd'], c: [2, 4], d: true, id: 3 },
          },
          {
            unwinded: { test: 'd', c: 2 },
            value: { test: ['c', 'd'], c: [2, 4], d: true, id: 3 },
          },
          {
            unwinded: { test: 'd', c: 4 },
            value: { test: ['c', 'd'], c: [2, 4], d: true, id: 3 },
          },
        ]);
        expect(result[0].value).to.be.eq(payload[0]);
        expect(result[1].value).to.be.eq(payload[0]);
        expect(result[2].value).to.be.eq(payload[0]);
        expect(result[3].value).to.be.eq(payload[0]);
        expect(result[4].value).to.be.eq(payload[0]);
        expect(result[5].value).to.be.eq(payload[0]);

        expect(result[6].value).to.be.eq(payload[1]);
        expect(result[7].value).to.be.eq(payload[1]);
        expect(result[8].value).to.be.eq(payload[1]);
        expect(result[9].value).to.be.eq(payload[1]);

        expect(result[10].value).to.be.eq(payload[2]);
        expect(result[11].value).to.be.eq(payload[2]);
        expect(result[12].value).to.be.eq(payload[2]);
        expect(result[13].value).to.be.eq(payload[2]);
      });

      it('should not unwind string', () => {
        const payload = [
          {
            field: 'test1',
          },
          {
            field: 'test2',
          },
          {
            field: 'test3',
          },
        ];

        const result = fluent(payload).unwind('field').toArray();

        expect(result).to.be.like([
          { unwinded: { field: 'test1' }, value: { field: 'test1' } },
          { unwinded: { field: 'test2' }, value: { field: 'test2' } },
          { unwinded: { field: 'test3' }, value: { field: 'test3' } },
        ]);
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

      it('should not unwind string', async () => {
        const payload = [
          {
            field: 'test1',
          },
          {
            field: 'test2',
          },
          {
            field: 'test3',
          },
        ];

        const result = await fluentAsync(payload).unwind('field').toArray();

        expect(result).to.be.like([
          { unwinded: { field: 'test1' }, value: { field: 'test1' } },
          { unwinded: { field: 'test2' }, value: { field: 'test2' } },
          { unwinded: { field: 'test3' }, value: { field: 'test3' } },
        ]);
      });
    });
  });
});
