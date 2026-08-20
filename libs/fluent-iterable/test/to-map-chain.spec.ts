import { fluent, fluentAsync } from '../src';

describe('toMapChain', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should create a object chain based on keyable informed properties', () => {
        const payload: {
          test: readonly string[];
          c: number;
          d: boolean;
          id: number;
        }[] = [
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

        const result = fluent(payload).toMapChain('test', 'c');

        expect(
          result
            .get('a')
            ?.get(1)
            ?.map((x) => x.id),
        ).toEqual([1]);
        expect(
          result
            .get('b')
            ?.get(1)
            ?.map((x) => x.id),
        ).toEqual([1]);
        expect(
          result
            .get('b')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([2]);
        expect(
          result
            .get('c')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([2, 3]);
        expect(
          result
            .get('d')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([3]);
      });

      it('should create a object chain based on function mapping informed parameters', () => {
        const payload: {
          test: readonly string[];
          c: number;
          d: boolean;
          id: number;
        }[] = [
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

        const result = fluent(payload).toMapChain(
          (x) => x.test,
          (x) => x.c,
        );

        expect(
          result
            .get('a')
            ?.get(1)
            ?.map((x) => x.id),
        ).toEqual([1]);
        expect(
          result
            .get('b')
            ?.get(1)
            ?.map((x) => x.id),
        ).toEqual([1]);
        expect(
          result
            .get('b')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([2]);
        expect(
          result
            .get('c')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([2, 3]);
        expect(
          result
            .get('d')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([3]);
      });

      it('should return an array when no properties are informed', () => {
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

        const result = fluent(payload).toMapChain();

        expect(result).toEqual(payload);
      });
    });
    describe('async', () => {
      it('should create a object chain based on keyable informed properties', async () => {
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

        const result = await fluent(payload).toMapChainAsync('test', 'c');

        expect(
          result
            .get('a')
            ?.get(1)
            ?.map((x) => x.id),
        ).toEqual([1]);
        expect(
          result
            .get(objectKey)
            ?.get(1)
            ?.map((x) => x.id),
        ).toEqual([1]);
        expect(
          result
            .get(objectKey)
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([2]);
        expect(
          result
            .get('c')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([2, 3]);
        expect(
          result
            .get('d')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([3]);
      });

      it('should create a object chain based on function mapping informed parameters', async () => {
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

        const result = await fluent(payload).toMapChainAsync(
          (x) => x.test,
          (x) => x.c,
        );

        expect(
          result
            .get('a')
            ?.get(1)
            ?.map((x) => x.id),
        ).toEqual([1]);
        expect(
          result
            .get('b')
            ?.get(1)
            ?.map((x) => x.id),
        ).toEqual([1]);
        expect(
          result
            .get('b')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([2]);
        expect(
          result
            .get('c')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([2, 3]);
        expect(
          result
            .get('d')
            ?.get(2)
            ?.map((x) => x.id),
        ).toEqual([3]);
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

        const result = await fluent(payload).toMapChainAsync();

        expect(result).toEqual(payload);
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

      const result = await fluentAsync(payload).toMapChain('test', 'c');

      expect(
        result
          .get('a')
          ?.get(1)
          ?.map((x) => x.id),
      ).toEqual([1]);
      expect(
        result
          .get('b')
          ?.get(1)
          ?.map((x) => x.id),
      ).toEqual([1]);
      expect(
        result
          .get('b')
          ?.get(2)
          ?.map((x) => x.id),
      ).toEqual([2]);
      expect(
        result
          .get('c')
          ?.get(2)
          ?.map((x) => x.id),
      ).toEqual([2, 3]);
      expect(
        result
          .get('d')
          ?.get(2)
          ?.map((x) => x.id),
      ).toEqual([3]);
    });

    it('should return an array when no properties are informed', async () => {
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

      const result = await fluentAsync(payload).toMapChain();

      expect(result).toEqual(arr);
    });
  });
});
