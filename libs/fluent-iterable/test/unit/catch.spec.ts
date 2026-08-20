import { fluent, fluentAsync } from '../../src';

describe('catch', () => {
  describe('sync', () => {
    it('should get all items until an error is thrown', () => {
      const myError = new Error('my error');
      function* getIterable() {
        yield 1;
        yield 2;
        throw myError;
        yield 3;
      }
      const callback = jest.fn();

      const result = fluent(getIterable()).catch(callback).toArray();

      expect(callback).toHaveCallsLike([myError]);
      expect(result).toEqual([1, 2]);
    });

    it('should get all items until an error is thrown using async variant', async () => {
      const myError = new Error('my error');
      function* getIterable() {
        yield 1;
        yield 2;
        throw myError;
        yield 3;
      }
      const callback = jest.fn();

      const result = await fluent(getIterable()).catchAsync(callback).toArray();

      expect(callback).toHaveCallsLike([myError]);
      expect(result).toEqual([1, 2]);
    });
  });
  describe('async', () => {
    it('should get all items until an error is thrown', async () => {
      const myError = new Error('my error');
      async function* getIterable() {
        yield 1;
        yield 2;
        throw myError;
        yield 3;
      }
      const callback = jest.fn();

      const result = await fluentAsync(getIterable()).catch(callback).toArray();

      expect(callback).toHaveCallsLike([myError]);
      expect(result).toEqual([1, 2]);
    });
  });
});
