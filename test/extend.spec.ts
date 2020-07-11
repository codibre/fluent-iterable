import { extend, fluent } from '../src';
import { expect } from 'chai';

declare module '../src' {
  interface FluentIterable<T> {
    testIterable(): FluentIterable<T>;
    testAsyncIterable(): FluentIterable<T>;
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

      expect(iterable.testIterable().toArray()).to.be.eql([1, 2, 3]);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.use('take', identityFunction);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });
  describe('useAsync', () => {
    it('should add new specified method to FluentIterable', async () => {
      extend.useAsync('testAsyncIterable', asyncIdentityFunction);

      const iterable = fluent([1, 2, 3]);

      expect(await iterable.testAsyncIterable().toArray()).to.be.eql([1, 2, 3]);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.useAsync('takeWhileAsync', asyncIdentityFunction);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });

  describe('useResolving', () => {
    it('should add new specified method to FluentIterable', () => {
      extend.useResolving('testResolving', function (this: any) {
        return 2;
      });

      const iterable = fluent([1, 2, 3]);

      expect(iterable.testResolving()).to.be.eq(2);
    });

    it('should throw an error if a existing method is tried to be added', () => {
      let error: any;

      try {
        extend.useResolving('toArray', asyncIdentityFunction);
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(Error);
    });
  });
});
