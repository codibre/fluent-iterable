import { FluentAsyncIterable, extend, fluent } from '../../src';

declare module '../../src' {
  interface FluentIterable<T> {
    testIterable(): FluentIterable<T>;
    testAsyncIterable(): FluentAsyncIterable<T>;
    testResolving(): number;
  }
}

function identityFunction(this: any) {
  return this;
}

async function asyncIdentityFunction(this: any) {
  return this;
}

describe('extend', () => {
  describe('use', () => {
    it('should add new specified method to FluentIterable', () => {
      extend.use('testIterable', identityFunction);

      const iterable = fluent([1, 2, 3]);

      expect(iterable.testIterable().toArray()).toEqual([1, 2, 3]);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.use('take', identityFunction);
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(Error);
    });
  });
  describe('useAsync', () => {
    it('should add new specified method to FluentIterable', async () => {
      extend.useAsync('testAsyncIterable', asyncIdentityFunction);

      const iterable = fluent([1, 2, 3]);

      expect(await iterable.testAsyncIterable().toArray()).toEqual([1, 2, 3]);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.useAsync('takeWhileAsync', asyncIdentityFunction);
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(Error);
    });
  });

  describe('useResolving', () => {
    it('should add new specified method to FluentIterable', () => {
      extend.useResolving('testResolving', function (this: any) {
        return 2;
      });

      const iterable = fluent([1, 2, 3]);

      expect(iterable.testResolving()).toBe(2);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.useResolving('toArray', asyncIdentityFunction);
      } catch (err) {
        error = err;
      }

      expect(error).toBeInstanceOf(Error);
    });
  });
});
