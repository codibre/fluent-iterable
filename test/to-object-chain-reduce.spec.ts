import { expect } from 'chai';
import { fluent, fluentAsync } from '../src';
import 'chai-callslike';

describe('toObjectChainReduce', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should create a object chain based on keyable informed properties', () => {
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
          'test',
          'c',
        );

        expect(result).to.be.like({
          a: { 1: 1 },
          b: { 1: 1, 2: 2 },
          c: { 1: 1, 2: 5 },
          d: { 2: 3 },
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

        expect(result).to.be.eq(6);
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

        expect(result['a'][1]).to.be.eql(1);
        expect(result['b'][1]).to.be.eql(1);
        expect(result['b'][2]).to.be.eql(2);
        expect(result['c'][2]).to.be.eql(5);
        expect(result['d'][2]).to.be.eql(3);
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

        expect(result).to.be.eq(6);
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

      expect(result['a'][1]).to.be.eql(1);
      expect(result['b'][1]).to.be.eql(1);
      expect(result['b'][2]).to.be.eql(2);
      expect(result['c'][2]).to.be.eql(5);
      expect(result['d'][2]).to.be.eql(3);
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

      expect(result).to.be.eql(6);
    });
  });
});
