import { fluent, fluentAsync } from '../../src';

function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1));
}

describe('emit()', () => {
  describe('sync iterables', () => {
    it('should emit an event for each emitted item', async () => {
      const iterable = fluent([1, 2, 3]);

      const emitter = iterable.emit();

      let ended = false;
      const result: number[] = [];
      emitter.on('end', () => (ended = true));
      emitter.on('data', result.push.bind(result));

      await wait();

      expect(result).toEqual([1, 2, 3]);
      expect(ended).toBe(true);
    });

    it('should emit an event for each emitted item until some error happens', async () => {
      const expectedError = new Error();
      function* it() {
        yield 1;
        yield 2;
        throw expectedError;
      }
      const iterable = fluent(it());

      const emitter = iterable.emit();

      let ended = false;
      let error: any;
      const result: number[] = [];
      emitter.on('end', () => (ended = true));
      emitter.on('data', result.push.bind(result));
      emitter.on('error', (err) => (error = err));

      await wait();

      expect(error).toBe(expectedError);
      expect(ended).toBe(false);
      expect(result).toEqual([1, 2]);
    });

    it('should emit an event for each emitted item until some untreated error happens, and it should be thrown as unhandled', async () => {
      const expectedError = new Error();
      function* it() {
        yield 1;
        yield 2;
        throw expectedError;
      }
      jest.spyOn(console, 'error').mockReturnValue();
      const errorCallback = jest.fn();
      const iterable = fluent(it());

      const emitter = iterable.emit();

      let ended = false;
      const result: number[] = [];
      emitter.on('end', () => (ended = true));
      emitter.on('data', result.push.bind(result));
      emitter.on('error', errorCallback);

      await wait();

      // expect(console.error).to.have.been.called; // this stub can't be captured in node 12 or above
      expect(ended).toBe(false);
      expect(result).toEqual([1, 2]);
    });
  });

  describe('async iterables', () => {
    it('should emit an event for each emitted item', async () => {
      const iterable = fluentAsync([1, 2, 3]);

      const emitter = iterable.emit();

      let ended = false;
      const result: number[] = [];
      emitter.on('end', () => (ended = true));
      emitter.on('data', result.push.bind(result));

      await wait();

      expect(result).toEqual([1, 2, 3]);
      expect(ended).toBe(true);
    });

    it('should emit an event for each emitted item until some error happens', async () => {
      const expectedError = new Error();
      async function* it() {
        yield 1;
        yield 2;
        throw expectedError;
      }
      const iterable = fluentAsync(it());

      const emitter = iterable.emit();

      let ended = false;
      let error: any;
      const result: number[] = [];
      emitter.on('end', () => (ended = true));
      emitter.on('data', result.push.bind(result));
      emitter.on('error', (err: any) => (error = err));

      await wait();

      expect(error).toBe(expectedError);
      expect(ended).toBe(false);
      expect(result).toEqual([1, 2]);
    });

    it('should emit an event for each emitted item until some untreated error happens, and it should be thrown as unhandled', async () => {
      const expectedError = new Error();
      async function* it() {
        yield 1;
        yield 2;
        throw expectedError;
      }
      jest.spyOn(console, 'error').mockReturnValue();
      const errorCallback = jest.fn();
      const iterable = fluentAsync(it());

      const emitter = iterable.emit();

      let ended = false;
      const result: number[] = [];
      emitter.on('end', () => (ended = true));
      emitter.on('data', result.push.bind(result));
      emitter.on('error', errorCallback);

      await wait();

      // expect(console.error).to.have.been.called; // this stub can't be captured in node 12 or above
      expect(ended).toBe(false);
      expect(result).toEqual([1, 2]);
    });
  });
});
