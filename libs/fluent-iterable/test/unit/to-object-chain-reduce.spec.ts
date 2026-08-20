import { fluent, fluentAsync } from '../../src';

describe('toObjectChainReduce', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should create a object chain based on keyable informed properties', () => {
        const payload = [
          {
            test: ['mary', 'josh', 'juan'],
            c: 'holmes',
            d: false,
            id: 1,
          },
          {
            test: ['josh', 'juan'],
            c: 'moriarty',
            d: true,
            id: 2,
          },
          {
            test: ['josh', 'enzo'],
            c: 'moriarty',
            d: true,
            id: 3,
          },
        ];

        const result = fluent(payload).toObjectChainReduce(
          () => 0,
          (acc, x) => acc + x.id,
          'test',
          'c',
        );

        expect(result).toEqual({
          mary: { holmes: 1 },
          josh: { holmes: 1, moriarty: 5 },
          juan: { holmes: 1, moriarty: 2 },
          enzo: { moriarty: 3 },
        });
      });

      it('should apply the reduction to all items when no properties are informed', () => {
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

        const result = fluent(payload).toObjectChainReduce(
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

        const result = await fluent(payload).toObjectChainReduceAsync(
          () => 0,
          (acc, x) => acc + x.id,
          'test',
          'c',
        );

        expect(result['a'][1]).toEqual(1);
        expect(result['b'][1]).toEqual(1);
        expect(result['b'][2]).toEqual(2);
        expect(result['c'][2]).toEqual(5);
        expect(result['d'][2]).toEqual(3);
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

        const result = await fluent(payload).toObjectChainReduceAsync(
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

      const result = await fluentAsync(payload).toObjectChainReduce(
        () => 0,
        (acc, x) => acc + x.id,
        'test',
        'c',
      );

      expect(result['a'][1]).toEqual(1);
      expect(result['b'][1]).toEqual(1);
      expect(result['b'][2]).toEqual(2);
      expect(result['c'][2]).toEqual(5);
      expect(result['d'][2]).toEqual(3);
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

      const result = await fluentAsync(payload).toObjectChainReduce(
        () => 0,
        (acc, x) => acc + x.id,
      );

      expect(result).toEqual(6);
    });
  });
});
