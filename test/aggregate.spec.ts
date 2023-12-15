import { expect } from 'chai';
import { fluent, fluentAsync } from '../src';
import 'chai-callslike';

describe('aggregate', () => {
  describe('sync', () => {
    it('should work without custom ids', () => {
      const result = fluent([10, 20, 30]).aggregate((x, agg) => ({
        avg: agg.avg(x),
        avg2: agg.avg(x * 2),
        first: agg.first(x),
        first2: agg.first(x % 20 === 0),
        last: agg.last(x),
        last2: agg.last(x % 40 === 0),
        max: agg.max(x),
        max2: agg.max(1 / x),
        min: agg.min(x),
        min2: agg.min(1 / x),
        modMultiply: agg.modMultiply(x, 11),
        modMultiply2: agg.modMultiply(x * 2, 11),
        modSum: agg.modSum(x, 11),
        modSum2: agg.modSum(x * 2, 11),
        multiply: agg.multiply(x),
        multiply2: agg.multiply(x * 2),
        sum: agg.sum(x),
        sum2: agg.sum(x * 2),
      }));

      expect(result).to.be.like({
        avg: 20,
        avg2: 40,
        first: 10,
        first2: 20,
        last: 30,
        last2: undefined,
        max: 30,
        max2: 10,
        min: 10,
        min2: 30,
        modMultiply: 5,
        modMultiply2: 7,
        modSum: 5,
        modSum2: 10,
        multiply: 6000,
        multiply2: 48000,
        sum: 60,
        sum2: 120,
      });
    });

    it('should work with conditional', () => {
      const result = fluent([5, 6, 9]).aggregate(
        (x, agg, acc) =>
          acc + (x % 2 === 1 ? agg.modSum(x, 3, 1) : agg.modSum(x, 5, 2)),
        0,
      );

      expect(result).to.be.eq(5);
    });

    it('should work with custom ids', () => {
      const result = fluent([10, 20, 30]).aggregate((x, agg) => ({
        avg: agg.avg(x, 1),
        avg2: agg.avg(x * 2, 1),
        first: agg.first(x, 1),
        first2: agg.first(x % 20 === 0, 1),
        last: agg.last(x, 1),
        last2: agg.last(x % 20 === 0, 1),
        max: agg.max(x, 1),
        max2: agg.max(1 / x, 1),
        min: agg.min(x, 1),
        min2: agg.min(1 / x, 1),
        modMultiply: agg.modMultiply(x, 11, 1),
        modMultiply2: agg.modMultiply(x * 2, 11, 1),
        modSum: agg.modSum(x, 11, 1),
        modSum2: agg.modSum(x * 2, 11, 1),
        multiply: agg.multiply(x, 1),
        multiply2: agg.multiply(x * 2, 1),
        sum: agg.sum(x, 1),
        sum2: agg.sum(x * 2, 1),
      }));

      expect(result).to.be.like({
        avg: 24,
        avg2: 30,
        first: 10,
        first2: 10,
        last: 30,
        last2: 30,
        max: 30,
        max2: 30,
        min: 20,
        min2: 30,
        modMultiply: 7,
        modMultiply2: 2,
        modSum: 10,
        modSum2: 4,
        multiply: 4800000,
        multiply2: 288000000,
        sum: 120,
        sum2: 180,
      });
    });

    it('should work without custom ids using async variant', async () => {
      const result = await fluent([10, 20, 30]).aggregateAsync((x, agg) => ({
        avg: agg.avg(x),
        avg2: agg.avg(x * 2),
        first: agg.first(x),
        first2: agg.first(x % 20 === 0),
        last: agg.last(x),
        last2: agg.last(x % 40 === 0),
        max: agg.max(x),
        max2: agg.max(1 / x),
        min: agg.min(x),
        min2: agg.min(1 / x),
        modMultiply: agg.modMultiply(x, 11),
        modMultiply2: agg.modMultiply(x * 2, 11),
        modSum: agg.modSum(x, 11),
        modSum2: agg.modSum(x * 2, 11),
        multiply: agg.multiply(x),
        multiply2: agg.multiply(x * 2),
        sum: agg.sum(x),
        sum2: agg.sum(x * 2),
      }));

      expect(result).to.be.like({
        avg: 20,
        avg2: 40,
        first: 10,
        first2: 20,
        last: 30,
        last2: undefined,
        max: 30,
        max2: 10,
        min: 10,
        min2: 30,
        modMultiply: 5,
        modMultiply2: 7,
        modSum: 5,
        modSum2: 10,
        multiply: 6000,
        multiply2: 48000,
        sum: 60,
        sum2: 120,
      });
    });

    it('should work with custom ids using async variant', async () => {
      const result = await fluent([10, 20, 30]).aggregate((x, agg) => ({
        avg: agg.avg(x, 1),
        avg2: agg.avg(x * 2, 1),
        first: agg.first(x, 1),
        first2: agg.first(x % 20 === 0, 1),
        last: agg.last(x, 1),
        last2: agg.last(x % 20 === 0, 1),
        max: agg.max(x, 1),
        max2: agg.max(1 / x, 1),
        min: agg.min(x, 1),
        min2: agg.min(1 / x, 1),
        modMultiply: agg.modMultiply(x, 11, 1),
        modMultiply2: agg.modMultiply(x * 2, 11, 1),
        modSum: agg.modSum(x, 11, 1),
        modSum2: agg.modSum(x * 2, 11, 1),
        multiply: agg.multiply(x, 1),
        multiply2: agg.multiply(x * 2, 1),
        sum: agg.sum(x, 1),
        sum2: agg.sum(x * 2, 1),
      }));

      expect(result).to.be.like({
        avg: 24,
        avg2: 30,
        first: 10,
        first2: 10,
        last: 30,
        last2: 30,
        max: 30,
        max2: 30,
        min: 20,
        min2: 30,
        modMultiply: 7,
        modMultiply2: 2,
        modSum: 10,
        modSum2: 4,
        multiply: 4800000,
        multiply2: 288000000,
        sum: 120,
        sum2: 180,
      });
    });
  });

  describe('async', () => {
    it('should work without custom ids', async () => {
      const result = await fluentAsync([10, 20, 30]).aggregate((x, agg) => ({
        avg: agg.avg(x),
        avg2: agg.avg(x * 2),
        first: agg.first(x),
        first2: agg.first(x % 20 === 0),
        last: agg.last(x),
        last2: agg.last(x % 40 === 0),
        max: agg.max(x),
        max2: agg.max(1 / x),
        min: agg.min(x),
        min2: agg.min(1 / x),
        modMultiply: agg.modMultiply(x, 11),
        modMultiply2: agg.modMultiply(x * 2, 11),
        modSum: agg.modSum(x, 11),
        modSum2: agg.modSum(x * 2, 11),
        multiply: agg.multiply(x),
        multiply2: agg.multiply(x * 2),
        sum: agg.sum(x),
        sum2: agg.sum(x * 2),
      }));

      expect(result).to.be.like({
        avg: 20,
        avg2: 40,
        first: 10,
        first2: 20,
        last: 30,
        last2: undefined,
        max: 30,
        max2: 10,
        min: 10,
        min2: 30,
        modMultiply: 5,
        modMultiply2: 7,
        modSum: 5,
        modSum2: 10,
        multiply: 6000,
        multiply2: 48000,
        sum: 60,
        sum2: 120,
      });
    });

    it('should work with custom ids', async () => {
      const result = await fluentAsync([10, 20, 30]).aggregate((x, agg) => ({
        avg: agg.avg(x, 1),
        avg2: agg.avg(x * 2, 1),
        first: agg.first(x, 1),
        first2: agg.first(x % 20 === 0, 1),
        last: agg.last(x, 1),
        last2: agg.last(x % 20 === 0, 1),
        max: agg.max(x, 1),
        max2: agg.max(1 / x, 1),
        min: agg.min(x, 1),
        min2: agg.min(1 / x, 1),
        modMultiply: agg.modMultiply(x, 11, 1),
        modMultiply2: agg.modMultiply(x * 2, 11, 1),
        modSum: agg.modSum(x, 11, 1),
        modSum2: agg.modSum(x * 2, 11, 1),
        multiply: agg.multiply(x, 1),
        multiply2: agg.multiply(x * 2, 1),
        sum: agg.sum(x, 1),
        sum2: agg.sum(x * 2, 1),
      }));

      expect(result).to.be.like({
        avg: 24,
        avg2: 30,
        first: 10,
        first2: 10,
        last: 30,
        last2: 30,
        max: 30,
        max2: 30,
        min: 20,
        min2: 30,
        modMultiply: 7,
        modMultiply2: 2,
        modSum: 10,
        modSum2: 4,
        multiply: 4800000,
        multiply2: 288000000,
        sum: 120,
        sum2: 180,
      });
    });
  });
});
