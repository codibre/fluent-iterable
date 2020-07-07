import { extendAsync, fluentAsync } from '../src';
import { identity } from '../src/utils';
import { expect } from 'chai';

declare module '../src' {
  interface FluentAsyncIterable<T> {
    testIterable(): FluentAsyncIterable<T>;
    testResolving(): PromiseLike<number>;
  }
}

describe('extendAsync', () => {
  describe('use', () => {
    it('should add new specified method to FluentIterable', async () => {
      extendAsync.use('testIterable', identity);

      const iterable = fluentAsync(
        new Promise<number[]>((r) => r([1, 2, 3])),
      );

      expect(await iterable.testIterable().toArray()).to.be.eql([1, 2, 3]);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extendAsync.use('take', identity);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });

  describe('useResolving', () => {
    it('should add new specified method to FluentIterable', async () => {
      extendAsync.useResolving('testResolving', async () => 2);

      const iterable = fluentAsync(
        new Promise<number[]>((r) => r([1, 2, 3])),
      );

      expect(await iterable.testResolving()).to.be.eq(2);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extendAsync.useResolving('toArray', async (x) => x);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });
});
