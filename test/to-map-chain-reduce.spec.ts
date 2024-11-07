import { fluent, fluentAsync } from '../src';
import 'chai-callslike';

describe('toMapChainReduce', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should create a object chain based on keyable informed properties', () => {
        const objectKey = { name: 'josh' };
        const payload = [
          {
            test: ['mary', objectKey, 'juan'],
            c: 'holmes',
            d: false,
            id: 1,
          },
          {
            test: [objectKey, 'juan'],
            c: 'moriarty',
            d: true,
            id: 2,
          },
          {
            test: [objectKey, 'enzo'],
            c: 'moriarty',
            d: true,
            id: 3,
          },
        ];

        const result = fluent(payload).toMapChainReduce(
          () => 0,
          (acc, x) => acc + x.id,
          'test',
          'c',
        );

        expect(
          fluent(result)
            .map(([k, v]) => [k, fluent(v).toArray()])
            .sortBy(([x]: any) => (typeof x === 'string' ? x : x.name))
            .toArray(),
        ).toEqual([
          ['enzo', [['moriarty', 3]]],
          [
            objectKey,
            [
              ['holmes', 1],
              ['moriarty', 5],
            ],
          ],
          [
            'juan',
            [
              ['holmes', 1],
              ['moriarty', 2],
            ],
          ],
          ['mary', [['holmes', 1]]],
        ]);
      });

      it('should apply the reduction to all items when no properties are informed', () => {
        const objectKey = { k: 'b' };
        const payload = [
          {
            test: ['a', objectKey, 'c'],
            c: 1,
            d: false,
            id: 1,
          },
          {
            test: [objectKey, 'c'],
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

        const result = fluent(payload).toMapChainReduce(
          () => 0,
          (acc, x) => acc + x.id,
        );

        expect(result).toBe(6);
      });
    });
    describe('async', () => {
      it('should create a object chain based on keyable informed properties', async () => {
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

        const result = await fluent(payload).toMapChainReduceAsync(
          () => 0,
          (acc, x) => acc + x.id,
          'test',
          'c',
        );

        expect(result.get('a')?.get(1)).toBe(1);
        expect(result.get('b')?.get(1)).toBe(1);
        expect(result.get('b')?.get(2)).toBe(2);
        expect(result.get('c')?.get(2)).toBe(5);
        expect(result.get('d')?.get(2)).toBe(3);
      });

      it('should return an array when no properties are informed', async () => {
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

        const result = await fluent(payload).toMapChainReduceAsync(
          () => 0,
          (acc, x) => acc + x.id,
        );

        expect(result).toBe(6);
      });
    });
  });

  describe('asyncIterable', () => {
    it('should create a object chain based on keyable informed properties', async () => {
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

      const result = await fluentAsync(payload).toMapChainReduce(
        () => 0,
        (acc, x) => acc + x.id,
        'test',
        'c',
      );

      expect(result.get('a')?.get(1)).toBe(1);
      expect(result.get('b')?.get(1)).toBe(1);
      expect(result.get('b')?.get(2)).toBe(2);
      expect(result.get('c')?.get(2)).toBe(5);
      expect(result.get('d')?.get(2)).toBe(3);
    });

    it('should apply the reduction to all items when no properties are informed', async () => {
      const arr = [
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
      const payload = Promise.resolve(arr);

      const result = await fluentAsync(payload).toMapChainReduce(
        () => 0,
        (acc, x) => acc + x.id,
      );

      expect(result).toBe(6);
    });
  });
});
