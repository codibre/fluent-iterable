import { expect } from 'chai';
import { fluent, fluentAsync } from '../src';

describe('toObjectChain', () => {
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

        const result = fluent(payload).toObjectChain('test', 'c');

        expect(result['a'][1].map((x) => x.id)).to.be.eql([1]);
        expect(result['b'][1].map((x) => x.id)).to.be.eql([1]);
        expect(result['b'][2].map((x) => x.id)).to.be.eql([2]);
        expect(result['c'][2].map((x) => x.id)).to.be.eql([2, 3]);
        expect(result['d'][2].map((x) => x.id)).to.be.eql([3]);
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

        const result = fluent(payload).toObjectChain(
          (x) => x.test,
          (x) => x.c,
        );

        expect(result['a'][1].map((x) => x.id)).to.be.eql([1]);
        expect(result['b'][1].map((x) => x.id)).to.be.eql([1]);
        expect(result['b'][2].map((x) => x.id)).to.be.eql([2]);
        expect(result['c'][2].map((x) => x.id)).to.be.eql([2, 3]);
        expect(result['d'][2].map((x) => x.id)).to.be.eql([3]);
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

        const result = fluent(payload).toObjectChain();

        expect(result).to.be.eql(payload);
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

        const result = await fluent(payload).toObjectChainAsync('test', 'c');

        expect(result['a'][1].map((x) => x.id)).to.be.eql([1]);
        expect(result['b'][1].map((x) => x.id)).to.be.eql([1]);
        expect(result['b'][2].map((x) => x.id)).to.be.eql([2]);
        expect(result['c'][2].map((x) => x.id)).to.be.eql([2, 3]);
        expect(result['d'][2].map((x) => x.id)).to.be.eql([3]);
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

        const result = await fluent(payload).toObjectChainAsync(
          (x) => x.test,
          (x) => x.c,
        );

        expect(result['a'][1].map((x) => x.id)).to.be.eql([1]);
        expect(result['b'][1].map((x) => x.id)).to.be.eql([1]);
        expect(result['b'][2].map((x) => x.id)).to.be.eql([2]);
        expect(result['c'][2].map((x) => x.id)).to.be.eql([2, 3]);
        expect(result['d'][2].map((x) => x.id)).to.be.eql([3]);
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

        const result = await fluent(payload).toObjectChainAsync();

        expect(result).to.be.eql(payload);
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

      const result = await fluentAsync(payload).toObjectChain('test', 'c');

      expect(result['a'][1].map((x) => x.id)).to.be.eql([1]);
      expect(result['b'][1].map((x) => x.id)).to.be.eql([1]);
      expect(result['b'][2].map((x) => x.id)).to.be.eql([2]);
      expect(result['c'][2].map((x) => x.id)).to.be.eql([2, 3]);
      expect(result['d'][2].map((x) => x.id)).to.be.eql([3]);
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

      const result = await fluentAsync(payload).toObjectChain();

      expect(result).to.be.eql(arr);
    });
  });
});
