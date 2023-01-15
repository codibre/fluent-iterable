import { stub } from 'sinon';
import { expect } from 'chai';
import { fluent, fluentAsync } from '../src';
import 'chai-callslike';

describe('finally', () => {
  describe('iterable', () => {
    describe('sync', () => {
      it('should run callback specified to finally', () => {
        const payload = ['a', 'b', 'c'];
        const callback = stub();

        const result = fluent(payload).finally(callback).last();

        expect(callback).to.have.callsLike([]);
        expect(result).to.be.eq('c');
      });

      it('should run callback specified to finally even when an error occurs', () => {
        const expectedError = new Error('my error');
        const iterable = (function *() {
          yield 1;
          yield 2;
          throw expectedError;
        })();
        const callback = stub();
        let thrownError: any;

        try {
          fluent(iterable).finally(callback).last();
        } catch (err) {
          thrownError = err;
        }

        expect(callback).to.have.callsLike([]);
        expect(thrownError).to.be.eq(expectedError);
      });
    });
    describe('async', () => {
      it('should run callback specified to finally', async () => {
        const payload = ['a', 'b', 'c'];
        const callback = stub();

        const result = await fluentAsync(payload).finally(callback).last();

        expect(callback).to.have.callsLike([]);
        expect(result).to.be.eq('c');
      });

      it('should run callback specified to finally even when an error occurs', async () => {
        const expectedError = new Error('my error');
        const iterable = (async function *() {
          yield 1;
          yield 2;
          throw expectedError;
        })();
        const callback = stub();
        let thrownError: any;

        try {
          await fluentAsync(iterable).finally(callback).last();
        } catch (err) {
          thrownError = err;
        }

        expect(callback).to.have.callsLike([]);
        expect(thrownError).to.be.eq(expectedError);
      });

      it('should run callback specified to finally even when an error occurs', async () => {
        const expectedError = new Error('my error');
        const iterable = (function *() {
          yield 1;
          yield 2;
          throw expectedError;
        })();
        const callback = stub();
        let thrownError: any;

        try {
          await fluent(iterable).finallyAsync(callback).last();
        } catch (err) {
          thrownError = err;
        }

        expect(callback).to.have.callsLike([]);
        expect(thrownError).to.be.eq(expectedError);
      });
    });
  });
});
