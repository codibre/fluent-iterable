import { extend, fluent } from '../src';
import { identity } from '../src/utils';
import { expect } from 'chai';

declare module '../src' {
  interface FluentIterable<T> {
    testIterable(): FluentIterable<T>;
    testAsyncIterable(): FluentIterable<T>;
    testResolving(): number;
  }
}

describe('extend', () => {
  describe('use', () => {
    it('should add new specified method to FluentIterable', () => {
      extend.use('testIterable', identity);

      const iterable = fluent([1, 2, 3]);

      expect(iterable.testIterable().toArray()).to.be.eql([1, 2, 3]);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.use('take', identity);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });
  describe('useAsync', () => {
    it('should add new specified method to FluentIterable', async () => {
      extend.useAsync('testAsyncIterable', async (x) => x);

      const iterable = fluent([1, 2, 3]);

      expect(await iterable.testAsyncIterable().toArray()).to.be.eql([1, 2, 3]);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.useAsync('takeWhileAsync', async (x) => x);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });

  describe('useResolving', () => {
    it('should add new specified method to FluentIterable', async () => {
      extend.useResolving('testResolving', async () => 2);

      const iterable = fluent([1, 2, 3]);

      expect(await iterable.testResolving()).to.be.eq(2);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.useResolving('toArray', async (x) => x);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });
});
