import { fluent, fluentAsync } from '../../src';

describe('finally', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should run callback specified to finally', () => {
        const payload = ['a', 'b', 'c'];
        const callback = jest.fn();

        const result = fluent(payload).finally(callback).last();

        expect(callback).toHaveCallsLike([true]);
        expect(result).toBe('c');
      });

      it('should run callback specified to finally even when an error occurs', () => {
        const expectedError = new Error('my error');
        const iterable = (function* () {
          yield 1;
          yield 2;
          throw expectedError;
        })();
        const callback = jest.fn();
        let thrownError: any;

        try {
          fluent(iterable).finally(callback).last();
        } catch (err) {
          thrownError = err;
        }

        expect(callback).toHaveCallsLike([false]);
        expect(thrownError).toBe(expectedError);
      });
    });
    describe('async', () => {
      it('should run callback specified to finally', async () => {
        const payload = ['a', 'b', 'c'];
        const callback = jest.fn();

        const result = await fluentAsync(payload).finally(callback).last();

        expect(callback).toHaveCallsLike([true]);
        expect(result).toBe('c');
      });

      it('should run callback specified to finally even when an error occurs', async () => {
        const expectedError = new Error('my error');
        const iterable = (async function* () {
          yield 1;
          yield 2;
          throw expectedError;
        })();
        const callback = jest.fn();
        let thrownError: any;

        try {
          await fluentAsync(iterable).finally(callback).last();
        } catch (err) {
          thrownError = err;
        }

        expect(callback).toHaveCallsLike([false]);
        expect(thrownError).toBe(expectedError);
      });

      it('should run callback specified to finally even when an error occurs', async () => {
        const expectedError = new Error('my error');
        const iterable = (function* () {
          yield 1;
          yield 2;
          throw expectedError;
        })();
        const callback = jest.fn();
        let thrownError: any;

        try {
          await fluent(iterable).finallyAsync(callback).last();
        } catch (err) {
          thrownError = err;
        }

        expect(callback).toHaveCallsLike([false]);
        expect(thrownError).toBe(expectedError);
      });
    });
  });
});
